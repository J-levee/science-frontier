// 真机触摸拖拽验证：用 CDP 派发真实 touch 事件（模拟手机/触控板）
// 目的：验证 .galaxy svg 加 touch-action:none 后，触摸拖拽行星能触发 d3-drag
// 若没有 touch-action:none，浏览器会把 touchmove 当滚动吞掉，d3-drag 永不触发（用户真机现象）
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.NODE_PATH + '/playwright/index.js');

const ROOT = path.resolve(__dirname, '..');
const htmlPath = path.join(ROOT, 'website', 'index.html');

function startServer() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const f = path.join(ROOT, 'website', req.url === '/' ? 'index.html' : req.url.split('?')[0]);
      fs.readFile(f, (e, data) => {
        if (e) { res.writeHead(404); res.end('nf'); return; }
        const ext = path.extname(f);
        const ct = ext === '.js' ? 'application/javascript' : ext === '.css' ? 'text/css' : 'text/html';
        res.writeHead(200, { 'Content-Type': ct }); res.end(data);
      });
    });
    srv.listen(0, () => resolve(srv));
  });
}

(async () => {
  const srv = await startServer();
  const port = srv.address().port;
  const url = `http://127.0.0.1:${port}/`;
  const exe = process.env.CHROME_EXE;
  const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--disable-gpu'] });
  // hasTouch:true 让浏览器把 touch 事件转成 pointer 事件（pointerType=touch）
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, hasTouch: true });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);

  // 滚动星系进视口
  await page.evaluate(() => {
    const g = document.getElementById('domain-grid');
    if (g) g.scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(800);

  // 读取 svg 计算样式 touch-action（修复后的代理证据）
  const touchAction = await page.evaluate(() => {
    const svg = document.querySelector('#domain-grid svg');
    return svg ? getComputedStyle(svg).touchAction : null;
  });

  // 取一个行星(r=11)的 client 坐标 + 初始 fx
  const pick = await page.evaluate(() => {
    const svg = document.querySelector('#domain-grid svg');
    const g = [...svg.querySelectorAll('g')].find(n => {
      const c = n.querySelector('circle');
      return c && +c.getAttribute('r') === 11 && window.d3.select(n).datum()?.type === 'planet';
    });
    if (!g) return null;
    const c = g.querySelector('circle');
    const r = c.getBoundingClientRect();
    const d = window.d3.select(g).datum();
    return { id: d.id, sx: r.x + r.width / 2, sy: r.y + r.height / 2, fx0: d.fx };
  });
  if (!pick) { console.log('NO_PLANET'); await browser.close(); srv.close(); process.exit(1); }

  const getFx = () => page.evaluate((pid) => {
    const svg = document.querySelector('#domain-grid svg');
    const g = [...svg.querySelectorAll('g')].find(n => {
      const c = n.querySelector('circle');
      return c && +c.getAttribute('r') === 11 && window.d3.select(n).datum()?.id === pid;
    });
    const d = window.d3.select(g).datum();
    const m = /translate\(([-\d.]+),([-\d.]+)\)/.exec(g.getAttribute('transform') || '');
    return { fx: d.fx, x: m ? +m[1] : null, y: m ? +m[2] : null };
  }, pick.id);

  const before = await getFx();

  // CDP 派发真实触摸事件序列
  const session = await page.context().newCDPSession(page);
  const tx = pick.sx, ty = pick.sy;
  await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: tx, y: ty }] });
  await page.waitForTimeout(80);
  for (let i = 1; i <= 5; i++) {
    await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: tx + i * 20, y: ty + i * 15 }] });
    await page.waitForTimeout(40);
  }
  const during = await getFx();
  await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await page.waitForTimeout(900);
  const after = await getFx();

  const moved = before && during && Math.hypot((during.x ?? 0) - (before.x ?? 0), (during.y ?? 0) - (before.y ?? 0)) > 30;
  const dragged = during && during.fx != null;        // 拖中 fx 被抓住
  const released = after && after.fx == null;          // 松手 fx 释放（引力回弹开始）

  console.log(JSON.stringify({
    touchAction,
    planet: pick.id,
    before, during, after,
    moved, dragged, released,
    pageErrors: errors
  }, null, 2));

  const pass = touchAction === 'none' && moved && dragged && released && errors.length === 0;
  console.log(pass ? 'TOUCH_PASS' : 'TOUCH_FAIL');
  await browser.close();
  srv.close();
  process.exit(pass ? 0 : 1);
})().catch(e => { console.error('ERR', e); process.exit(2); });
