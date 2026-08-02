// 无头渲染核验脚本（D8 自测用）
// 用法: NODE_PATH=<node-workspace>/node_modules node scripts/verify_render.js
// 启动本地静态 server 加载 website/，捕获运行时错误并核验关键渲染 + 模拟拖拽 + 导航高亮。
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'website');
const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const fp = path.join(ROOT, p);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
    res.end(data);
  });
});

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const url = `http://localhost:${port}/index.html`;

  const launchOpts = { args: ['--no-sandbox'] };
  if (process.env.CHROME_EXE) launchOpts.executablePath = process.env.CHROME_EXE;
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  const consoleErrors = [];
  const pageErrors = [];
  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('response', r => { if (r.status() === 404) consoleErrors.push('404: ' + r.url()); });

  await page.goto(url, { waitUntil: 'load', timeout: 30000 })
    .catch(e => pageErrors.push('goto: ' + e.message));

  // 等 D3 渲染完成 + 力模拟 settle
  await page.waitForTimeout(3000);

  const checks = await page.evaluate(() => {
    const out = {};
    out.storyNav = !!document.getElementById('story-nav');
    out.storyNavItems = document.querySelectorAll('#story-nav .sn-item').length;
    out.starfieldChildren = document.querySelectorAll('#honor-starfield *').length;
    const gal = document.querySelector('#domain-grid svg');
    out.galaxySvg = !!gal;
    out.galaxyNodes = gal ? gal.querySelectorAll('g').length : 0;
    out.revealCount = document.querySelectorAll('.reveal').length;
    out.d3Loaded = (typeof window.d3 !== 'undefined');
    out.heroId = !!document.getElementById('sec-hero');
    // 荣誉星图是否真的渲染了圆点（而非空白）
    out.starfieldCircles = document.querySelectorAll('#honor-starfield circle').length;
    return out;
  });

  // 模拟拖拽星系中的行星，确认 drag handler 不报错且能释放
  const box = await page.evaluate(() => {
    const svg = document.querySelector('#domain-grid svg');
    if (!svg) return null;
    const r = svg.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  });
  let dragOk = 'skipped(no svg)';
  if (box) {
    const cx = box.x + box.w / 2, cy = box.y + box.h / 2;
    try {
      await page.mouse.move(cx, cy);
      await page.mouse.down();
      await page.mouse.move(cx + 40, cy + 30, { steps: 5 });
      await page.mouse.move(cx + 80, cy + 60, { steps: 5 });
      await page.mouse.up();
      await page.waitForTimeout(800); // 等引力回弹
      const moved = await page.evaluate(() => {
        const n = document.querySelector('#domain-grid svg g[transform]');
        return n ? n.getAttribute('transform') : null;
      });
      dragOk = 'ok, transform=' + (moved ? 'present' : 'none');
    } catch (e) { dragOk = 'error: ' + e.message; }
  }

  // 滚动到星系，验证导航高亮切换
  await page.evaluate(() => { const g = document.getElementById('domain-grid'); if (g) g.scrollIntoView(); });
  await page.waitForTimeout(900);
  const navActiveGalaxy = await page.evaluate(() => {
    const a = document.querySelector('#story-nav .sn-item.active');
    return a ? a.getAttribute('data-target') : null;
  });

  // 继续滚到荣誉段，验证高亮切到 honor
  await page.evaluate(() => { const h = document.getElementById('honor-section'); if (h) h.scrollIntoView(); });
  await page.waitForTimeout(900);
  const navActiveHonor = await page.evaluate(() => {
    const a = document.querySelector('#story-nav .sn-item.active');
    return a ? a.getAttribute('data-target') : null;
  });

  await page.screenshot({ path: path.resolve(__dirname, '..', 'render_verify.png'), fullPage: false });

  const result = {
    consoleErrors, pageErrors,
    checks,
    dragSim: dragOk,
    navActiveAfterScrollToGalaxy: navActiveGalaxy,
    navActiveAfterScrollToHonor: navActiveHonor
  };
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
  server.close();
  // 有运行时错误则非零退出，便于脚本判断
  process.exit(pageErrors.length > 0 ? 1 : 0);
})();
