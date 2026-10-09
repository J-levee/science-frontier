/* 一次性脚本：为所有引用 ai-widget.js 的科普子页注入 tracker.js 引用（置于 ai-widget.js 之前）。
 * 幂等：已含 tracker.js 的页跳过。注入后 tracker.js 先于 ai-widget.js 解析，保证 explainer_open 可上报。
 */
const fs = require('fs');
const path = require('path');
const DIR = 'C:/Users/zyd/WorkBuddy/Claw/science-frontier/website/explainers';
const INJECT = '  <script>window.__SF_COLLECT_URL="https://analytics.sciencefrontier.cn/collect";</script>\n  <script src="tracker.js"></script>';

const files = fs.readdirSync(DIR).filter(f => /\.html$/.test(f));
let changed = 0, skipped = 0;
files.forEach(function (f) {
  const fp = path.join(DIR, f);
  let html = fs.readFileSync(fp, 'utf8');
  if (!/ai-widget\.js/.test(html)) { skipped++; return; }   // 不引用组件则跳过
  if (/tracker\.js/.test(html)) { skipped++; return; }        // 已注入则跳过
  const re = /<script\s+src="ai-widget\.js[^"]*"><\/script>/;
  if (!re.test(html)) { console.log('WARN no ai-widget tag found in', f); return; }
  html = html.replace(re, INJECT + '\n  $&');
  fs.writeFileSync(fp, html);
  changed++;
  console.log('injected:', f);
});
console.log('\nchanged:', changed, '| skipped:', skipped);
