// D6-7 教学引导路径核验脚本
// 用法: CHROME_EXE=... NODE_PATH=<node-workspace>/node_modules node scripts/verify_d67.js
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'website');
const MIME = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.ico':'image/x-icon' };
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
  const consoleErrors = [], pageErrors = [];
  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('response', r => { if (r.status() === 404) consoleErrors.push('404: ' + r.url()); });

  await page.goto(url, { waitUntil: 'load', timeout: 30000 }).catch(e => pageErrors.push('goto: ' + e.message));
  await page.waitForTimeout(3000);

  const r = await page.evaluate(() => {
    const out = {};
    out.routeCards = document.querySelectorAll('#route-grid .route-card').length;
    // 角标题数（顺序：新手=难度3→26, 进阶=难度4→45, 深度=难度5→38）
    out.counts = [...document.querySelectorAll('#route-grid .route-count')].map(e => (e.textContent.match(/(\d+)\s*题/)||[])[1]);
    // 每个路线项是否都有「学习目标」标签
    const items = [...document.querySelectorAll('#route-grid .route-item')];
    out.routeItemTotal = items.length;
    out.allHaveObj = items.length > 0 && items.every(it => /学习目标/.test(it.querySelector('.ri-obj')?.textContent || ''));
    out.sampleObj = items[0] ? items[0].querySelector('.ri-obj')?.textContent : null;
    return out;
  });

  // 展开第一条路线，断言显示 + 清单上限(≤12) + "共 N 题"提示
  const expand = await page.evaluate(() => {
    const head = document.querySelector('#route-grid .route-card:first-child .route-head');
    head.click();
    const card = head.closest('.route-card');
    const list = card.querySelector('.route-list');
    const items = list.querySelectorAll('.route-item');
    const more = list.querySelector('.route-more');
    return {
      display: getComputedStyle(list).display,
      itemCount: items.length,
      hasMore: !!more,
      moreText: more ? more.textContent : null
    };
  });

  // 点清单第一项 → 进详情页
  await page.evaluate(() => document.querySelector('#route-grid .route-card:first-child .route-item').click());
  await page.waitForTimeout(600);
  const detail = await page.evaluate(() => {
    const hv = document.getElementById('home-view');
    const dv = document.getElementById('detail-view');
    return {
      homeHidden: hv.classList.contains('hidden'),
      detailShown: !dv.classList.contains('hidden'),
      detailHasContent: (document.getElementById('detail-content').textContent || '').length > 50
    };
  });

  // 关闭详情回主页 → 打开领域科普卡
  const why = await page.evaluate(() => {
    if (typeof closeDetailToHome === 'function') closeDetailToHome();
    else { document.getElementById('detail-view').classList.add('hidden'); document.getElementById('home-view').classList.remove('hidden'); }
    showDomain('物理学');
    const w = document.getElementById('domain-why');
    return {
      listVisible: !document.getElementById('list-view').classList.contains('hidden'),
      whyText: w ? w.innerText : null,
      hasWhyHeader: w ? /为什么[\s\S]*很重要/.test(w.innerText) : false,
      dwTextLen: w ? (w.querySelector('.dw-text')?.textContent || '').length : 0
    };
  });

  console.log(JSON.stringify({ routeCards: r.routeCards, counts: r.counts, routeItemTotal: r.routeItemTotal, allHaveObj: r.allHaveObj, sampleObj: r.sampleObj, expand, detail, why, consoleErrors, pageErrors }, null, 2));

  const pass =
    r.routeCards === 3 &&
    JSON.stringify(r.counts) === JSON.stringify(['26','45','38']) &&
    r.allHaveObj === true &&
    expand.display === 'block' && expand.itemCount <= 12 && expand.hasMore === true &&
    detail.homeHidden === true && detail.detailShown === true && detail.detailHasContent === true &&
    why.listVisible === true && why.hasWhyHeader === true && why.dwTextLen > 10 &&
    pageErrors.length === 0;
  console.log(pass ? 'D6-7 PASS' : 'D6-7 FAIL');

  await browser.close();
  server.close();
  process.exit(pass ? 0 : 1);
})();
