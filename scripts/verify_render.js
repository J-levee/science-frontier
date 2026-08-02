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

  // 模拟拖拽星系中的【行星】(circle r=11)，确认 filter 放行 + 真实位移 + 释放回弹
  // 注意：必须按 r=11 锁定行星，恒星(id 同域名)被力模拟钉死，不能当作拖拽对象
  const planet = await page.evaluate(() => {
    const svg = document.querySelector('#domain-grid svg');
    if (!svg) return null;
    const g = [...svg.querySelectorAll('g')].find(n => {
      const c = n.querySelector('circle');
      return c && +c.getAttribute('r') === 11;
    });
    if (!g) return null;
    const c = g.querySelector('circle');
    const r = c.getBoundingClientRect();
    const d = window.d3.select(g).datum();
    return { id: d.id, sx: r.x + r.width / 2, sy: r.y + r.height / 2, hx: d.x, hy: d.y };
  });
  let dragOk = 'skipped(no planet)';
  if (planet) {
    const getP = (id) => page.evaluate((pid) => {
      const svg = document.querySelector('#domain-grid svg');
      const g = [...svg.querySelectorAll('g')].find(n => {
        const c = n.querySelector('circle');
        return c && +c.getAttribute('r') === 11 && window.d3.select(n).datum()?.id === pid;
      });
      const m = /translate\(([-\d.]+),([-\d.]+)\)/.exec(g.getAttribute('transform') || '');
      return m ? { x: +m[1], y: +m[2] } : null;
    }, id);
    try {
      const before = await getP(planet.id);
      await page.mouse.move(planet.sx, planet.sy);
      await page.mouse.down();
      await page.mouse.move(planet.sx + 60, planet.sy + 45, { steps: 6 });
      await page.mouse.move(planet.sx + 120, planet.sy + 90, { steps: 6 });
      const during = await getP(planet.id);
      await page.mouse.up();
      await page.waitForTimeout(900);
      const after = await getP(planet.id);
      const moved = before && during && Math.hypot(during.x - before.x, during.y - before.y) > 30;
      const rebounded = after && Math.hypot(after.x - planet.hx, after.y - planet.hy) < Math.hypot(during.x - planet.hx, during.y - planet.hy) - 10;
      dragOk = `moved=${moved} rebounded=${rebounded}`;
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
