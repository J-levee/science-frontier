// 星系行星拖拽 + 引力回弹 真实验证（修正：按 r=11 锁定行星，避开与恒星 id 撞名）
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'website');
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.svg': 'image/svg+xml' };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  fs.readFile(path.join(ROOT, p), (err, data) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' });
    res.end(data);
  });
});

const dist = (a, b, c, d) => Math.hypot(a - c, b - d);

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const url = `http://localhost:${port}/index.html`;
  const launchOpts = { args: ['--no-sandbox'] };
  if (process.env.CHROME_EXE) launchOpts.executablePath = process.env.CHROME_EXE;
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const pageErrors = [];
  page.on('pageerror', e => pageErrors.push(e.message));

  await page.goto(url, { waitUntil: 'load', timeout: 30000 });
  await page.evaluate(() => { const g = document.getElementById('domain-grid'); g && g.scrollIntoView(); });
  await page.waitForTimeout(2500);

  // 选行星（circle r=11），返回屏幕坐标 + datum 当前位置（home）
  const pick = await page.evaluate(() => {
    const svg = document.querySelector('#domain-grid svg');
    if (!svg) return null;
    const planets = [...svg.querySelectorAll('g')].filter(g => {
      const c = g.querySelector('circle');
      return c && +c.getAttribute('r') === 11;
    });
    if (!planets.length) return null;
    const g = planets[0];
    const c = g.querySelector('circle');
    const r = c.getBoundingClientRect();
    const d = window.d3.select(g).datum();
    return { id: d.id, sx: r.x + r.width / 2, sy: r.y + r.height / 2, homeX: d.x, homeY: d.y };
  });
  if (!pick) { console.log('FAIL: 找不到行星节点'); await browser.close(); server.close(); process.exit(1); }

  // 只锁定该行星（r=11 且 id 匹配）
  const getPlanet = (id) => page.evaluate((pid) => {
    const svg = document.querySelector('#domain-grid svg');
    const g = [...svg.querySelectorAll('g')].find(n => {
      const c = n.querySelector('circle');
      return c && +c.getAttribute('r') === 11 && window.d3.select(n).datum()?.id === pid;
    });
    if (!g) return null;
    const m = /translate\(([-\d.]+),([-\d.]+)\)/.exec(g.getAttribute('transform') || '');
    const d = window.d3.select(g).datum();
    return { x: m ? +m[1] : null, y: m ? +m[2] : null, fx: d.fx, fy: d.fy, dragged: d.__dragged };
  }, id);

  const before = await getPlanet(pick.id);

  const dx = 150, dy = 110;
  await page.mouse.move(pick.sx, pick.sy);
  await page.mouse.down();
  await page.mouse.move(pick.sx + dx * 0.5, pick.sy + dy * 0.5, { steps: 6 });
  await page.mouse.move(pick.sx + dx, pick.sy + dy, { steps: 6 });
  const during = await getPlanet(pick.id);
  await page.mouse.up();
  await page.waitForTimeout(1600);
  const after = await getPlanet(pick.id);

  const movedDuring = during && before && dist(during.x, during.y, before.x, before.y) > 40;
  const rebounded = after && dist(after.x, after.y, pick.homeX, pick.homeY) < dist(during.x, during.y, pick.homeX, pick.homeY) - 20
                   && dist(after.x, after.y, pick.homeX, pick.homeY) < 170;

  const result = {
    planetId: pick.id,
    home: { x: Math.round(pick.homeX), y: Math.round(pick.homeY) },
    before: before && { x: Math.round(before.x), y: Math.round(before.y), fx: before.fx },
    during: during && { x: Math.round(during.x), y: Math.round(during.y), fx: during.fx, dragged: during.dragged },
    after: after && { x: Math.round(after.x), y: Math.round(after.y), fx: after.fx },
    movedDuringDrag: !!movedDuring,
    reboundedToStar: !!rebounded,
    pageErrors
  };
  console.log(JSON.stringify(result, null, 2));
  const pass = movedDuring && rebounded && pageErrors.length === 0;
  console.log(pass ? '\\nPASS: 行星可拖且引力回弹正常' : '\\nFAIL: 拖拽/回弹未达预期');
  await browser.close();
  server.close();
  process.exit(pass ? 0 : 1);
})();
