// D6 问题详情叙事块 验证：为什么重要 + 关键突破/相关诺奖(上限) + 相关领域问题 + 反向跳转荣誉星图
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', 'website');
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  fs.readFile(path.join(ROOT, p), (err, data) => {
    if (err) { res.writeHead(404); res.end('nf'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream' }); res.end(data);
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
  const pageErrors = [];
  page.on('pageerror', e => pageErrors.push(e.message));

  await page.goto(url, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(3000);
  // 确保荣誉星图已渲染（focusHonor 依赖节点）
  await page.evaluate(() => { if (typeof renderHonorStarfield === 'function') renderHonorStarfield(); });

  // 打开第一个带 laureate_links 的问题详情
  const pid = await page.evaluate(() => {
    const d = DATA.find(x => (x.laureate_links || []).length > 0);
    if (!d) return null;
    showDetail(d.id);
    return d.id;
  });

  const checks = await page.evaluate(() => {
    const h3s = [...document.querySelectorAll('#detail-content .detail-section h3')].map(h => h.textContent.trim());
    const laureateItems = document.querySelectorAll('#detail-content .laureate-item').length;
    const liMore = !!document.querySelector('#detail-content .li-more');
    const why = h3s.find(t => t.includes('为什么重要'));
    const nobel = h3s.find(t => t.includes('相关诺奖'));
    const related = h3s.find(t => t.includes('相关领域问题'));
    return { h3s, laureateItems, liMore, hasWhy: !!why, hasNobel: !!nobel, hasRelated: !!related,
             nobelCount: nobel ? (nobel.match(/\((\d+)\)/)||[])[1] : null };
  });

  // 反向跳转：点击第一个诺奖项
  let nav = { skipped: true };
  if (checks.laureateItems > 0) {
    await page.evaluate(() => { document.querySelector('#detail-content .laureate-item').click(); });
    await page.waitForTimeout(600);
    nav = await page.evaluate(() => ({
      skipped: false,
      detailHidden: document.getElementById('detail-view').classList.contains('hidden'),
      homeVisible: !document.getElementById('home-view').classList.contains('hidden'),
      honorDetailShown: document.getElementById('honor-detail').classList.contains('show'),
      highlightedNode: !!document.querySelector('#honor-starfield g.honor-node circle.core[stroke="#fff"]')
    }));
  }

  const pass = checks.hasWhy && checks.hasNobel && checks.hasRelated
    && checks.laureateItems > 0 && checks.laureateItems <= 8
    && nav.skipped === false && nav.detailHidden && nav.homeVisible && nav.honorDetailShown
    && pageErrors.length === 0;

  console.log(JSON.stringify({ pid, checks, nav, pageErrors }, null, 2));
  console.log(pass ? '\nPASS: D6 问题详情叙事块全部到位（含反向跳转）' : '\nFAIL: D6 未达预期');
  await browser.close(); server.close();
  process.exit(pass ? 0 : 1);
})();
