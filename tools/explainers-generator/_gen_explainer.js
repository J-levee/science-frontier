// 科学边界 · 深度科普专题生成器
// 读取 kakeya.html 抽取官方 <style> + 页尾 chrome（含"朗读科普故事"TTS），
// 按 _explainers_data.js 为 33 个新 slug 生成 explainers/<slug>.html，
// 并把 explainers/index.html 网格重建为 40 卡（6 分类分组）。
// 脚手架与现有 7 个专题页 100% 一致。

const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/zyd/WorkBuddy/科学边界项目';
const EXP_DIR = 'C:/Users/zyd/WorkBuddy/Claw/science-frontier/website/explainers';
const TPL = path.join(EXP_DIR, 'kakeya.html');

const TOPICS = require(path.join(ROOT, '_explainers_data.js'));

const tpl = fs.readFileSync(TPL, 'utf8');

// ── 抽取模板中的可复用片段 ──────────────────────────────
const iconMatch = tpl.match(/<link rel="icon"[^>]*>/);
const iconLink = iconMatch ? iconMatch[0] : '';

const styleMatch = tpl.match(/<style>([\s\S]*?)<\/style>/);
const pageStyle = styleMatch ? `<style>${styleMatch[1]}</style>` : '';

// 页尾 chrome：从 <style id="ex-chrome-style"> 到文件末尾（所有专题页共用，TTS 只读 story-pane）
const chromeStart = tpl.indexOf('<style id="ex-chrome-style">');
if (chromeStart < 0) throw new Error('未找到 ex-chrome-style，模板结构异常');
// 截取 chrome 后，剔除其自带的 </body></html> 及首尾空白（避免重复闭合标签）
const chrome = tpl.slice(chromeStart).replace(/\s*<\/body>\s*<\/html>\s*$/i, '');

// 专题页 tab 切换脚本（与 kakeya.html 完全一致）
const TAB_JS = `<script>
    // 专题 tab 切换
    document.querySelectorAll('.tab-btn').forEach(function(btn){
      btn.addEventListener('click', function(){
        var tab = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.toggle('active', b===btn); });
        document.querySelectorAll('.story-pane, .tech-pane').forEach(function(p){
          p.classList.toggle('active', (tab==='story' && p.classList.contains('story-pane')) || (tab==='tech' && p.classList.contains('tech-pane')));
        });
      });
    });
  </script>`;

// ── 小工具 ──────────────────────────────────────────────
function escText(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function tagsHtml(arr) {
  return (arr || []).map(t => `<span class="tag">${escText(t)}</span>`).join('');
}
function relatedHtml(arr) {
  const links = (arr || []).map(r => `<a href="${escText(r.href)}">${escText(r.label)}</a>`).join('\n    ');
  return `<span style="color:var(--ink-dim);font-size:14px">探索更多：</span>\n    ${links}`;
}
function aiCtxJs(ai) {
  const obj = { topic: ai.topic, icebreakers: ai.icebreakers };
  return `<script>window.__AI_CONTEXT=${JSON.stringify(obj)};</script>`;
}

// ── 生成单页 ────────────────────────────────────────────
function renderPage(t) {
  const backHref = `../?open=${t.slug}`;
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${iconLink}
  ${pageStyle}
</head>
<body>
<div class="wrap">
  <a class="back" href="${backHref}">← 返回科学边界</a>
  <div class="eyebrow">${escText(t.eyebrow)}</div>
  <h1>${escText(t.title)}</h1>
  <div class="tag-row">
    ${tagsHtml(t.tags)}
  </div>
  <div class="tab-row">
    <button class="tab-btn active" data-tab="story">📖 科普故事</button>
    <button class="tab-btn" data-tab="tech">📐 技术摘要</button>
  </div>
  <div class="story-pane active">
${t.story}
<!-- /.story-pane -->
  </div>

  <div class="tech-pane">
${t.tech}
  </div>

  <div class="related">
    ${relatedHtml(t.related)}
  </div>
</div>

${TAB_JS}
${aiCtxJs(t.ai)}
  <script>window.__AI_PROXY_URL="https://ai.sciencefrontier.cn";</script>
<script src="ai-widget.js?v=3"></script>
${chrome}
</body>
</html>
`;
}

// ── 生成索引页（40 卡，6 分类分组）─────────────────────────
const CAT_ORDER = ['宇宙物理', '物质能源', '生命医学', '数学计算', '地球气候', '人工智能'];
const CAT_ICON = {
  '宇宙物理': '🌌', '物质能源': '⚛️', '生命医学': '🧬',
  '数学计算': '📐', '地球气候': '🌍', '人工智能': '🧠'
};

function cardHtml(t) {
  return `    <a class="card reveal" href="${escText(t.slug)}.html"><div class="ic">${escText(t.icon)}</div><h3>${escText(t.title)}</h3><p>${escText(t.cardDesc)}</p></a>`;
}

function renderIndex() {
  const cats = CAT_ORDER.map(cat => {
    const items = TOPICS.filter(t => t.category === cat);
    const cards = items.map(cardHtml).join('\n');
    return `  <section class="cat">
    <h2 class="cat-title reveal">${CAT_ICON[cat] || '🔬'} ${escText(cat)} <span class="cat-count">${items.length} 个专题</span></h2>
    <div class="grid">
${cards}
    </div>
  </section>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2215%22%20fill%3D%22none%22%20stroke%3D%22%237dd3fc%22%20stroke-width%3D%221%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2210%22%20fill%3D%22none%22%20stroke%3D%22%237dd3fc%22%20stroke-width%3D%221.2%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%224.2%22%20fill%3D%22%2367e8f9%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%224.2%22%20fill%3D%22%23a5f3fc%22%20fill-opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E" />
<style>
:root{--bg:#07070b;--bg-2:#0b0b13;--ink:#e9eaf2;--ink-dim:#9aa0b8;--ink-2:#5d6182;--line:rgba(255,255,255,.08);--accent:#6366f1;--accent2:#818cf8;--accent3:#a78bfa;--warm:#f59e0b;--hot:#ef4444;--cool:#06b6d4;--green:#10b981;--gold:#fbbf24;--serif:'PingFang SC','Microsoft YaHei',Georgia,serif;--radius:12px}
body{background:var(--bg);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;line-height:1.6;margin:0;min-height:100vh}
body::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(60% 50% at 18% 8%,rgba(99,102,241,0.06),transparent 70%),radial-gradient(50% 42% at 86% 18%,rgba(6,182,212,0.05),transparent 70%),radial-gradient(55% 45% at 50% 96%,rgba(167,139,250,0.05),transparent 70%)}
.header{position:sticky;top:0;z-index:100;background:rgba(10,10,15,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--line);padding:14px 24px}
.header-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:16px}
.logo{font-weight:700;font-size:18px;background:linear-gradient(135deg,var(--accent2),var(--accent3));-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none}
.back{color:var(--ink-dim);font-size:13px;text-decoration:none}
.main{max-width:1100px;margin:0 auto;padding:32px 24px 64px}
.hero{text-align:center;padding:32px 0 8px}
.hero h1{font-size:30px;margin:0 0 12px}
.hero .hook{color:var(--ink-dim);font-size:16px;max-width:720px;margin:0 auto;line-height:1.7}
.badge{display:inline-block;margin-top:14px;padding:5px 14px;border-radius:999px;background:rgba(16,185,129,0.12);color:var(--green);font-size:12px;border:1px solid rgba(16,185,129,0.3)}
.cat{margin-top:44px}
.cat-title{font-size:21px;margin:0 0 4px;display:flex;align-items:baseline;gap:10px}
.cat-count{font-size:13px;color:var(--ink-2);font-weight:400}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;margin-top:16px}
.card{background:rgba(19,19,26,0.55);backdrop-filter:blur(6px);border:1px solid var(--line);border-radius:var(--radius);padding:22px;cursor:pointer;transition:transform .25s ease,border-color .25s ease;text-decoration:none;color:inherit;display:block}
.card:hover{transform:translateY(-6px);border-color:var(--accent);box-shadow:0 12px 30px rgba(0,0,0,.45)}
.card .ic{font-size:30px;margin-bottom:12px}
.card h3{font-size:18px;margin:0 0 6px}
.card p{color:var(--ink-dim);font-size:14px;line-height:1.6;margin:0}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}
.reveal.in{opacity:1;transform:none}
@media(max-width:760px){.reveal{opacity:1!important;transform:none}.hero h1{font-size:24px}.cat-title{font-size:18px}}
</style>
</head>
<body>
<div class="header"><div class="header-inner"><a class="logo" href="../">科学边界</a><a class="back" href="../">← 返回主站</a></div></div>
<div class="main">
  <div class="hero">
    <h1>热点方向 · 深度科普讲解</h1>
    <p class="hook">每个专题都是一次科学探险——用故事、图画和比喻，把最前沿的科学讲给你听。每一条说法后面，都有真实的出处可以查。</p>
    <div class="badge">📡 图文并茂 · 零门槛 · 即点即看 · 共 ${TOPICS.length} 个专题</div>
  </div>
${cats}
</div>
<script>
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.1});document.querySelectorAll('.reveal').forEach(function(e){io.observe(e);});}
else{document.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in');});}
</script>
${chrome}
</body>
</html>
`;
}

// ── 执行 ────────────────────────────────────────────────
const newOnes = TOPICS.filter(t => !t.exists);
let okCount = 0, failCount = 0;
for (const t of newOnes) {
  // 必填字段校验（生成前最后一道闸）
  const miss = [];
  ['slug','title','eyebrow','tags','story','tech','related','ai','cardDesc','icon','category'].forEach(f => {
    if (t[f] === undefined || t[f] === null || t[f] === '') miss.push(f);
  });
  if (!t.ai || !t.ai.topic || !Array.isArray(t.ai.icebreakers) || !t.ai.icebreakers.length) miss.push('ai.icebreakers');
  if (miss.length) {
    console.error(`✗ ${t.slug} 缺失字段: ${miss.join(',')}`);
    failCount++;
    continue;
  }
  const html = renderPage(t);
  const out = path.join(EXP_DIR, `${t.slug}.html`);
  fs.writeFileSync(out, html, 'utf8');
  okCount++;
}
console.log(`生成专题页：${okCount} 成功 / ${failCount} 失败`);

const idxHtml = renderIndex();
fs.writeFileSync(path.join(EXP_DIR, 'index.html'), idxHtml, 'utf8');
console.log(`生成索引页：40 卡，6 分类分组`);

// 自检：确认关键标记一致
const idx = fs.readFileSync(path.join(EXP_DIR, 'index.html'), 'utf8');
console.log('index 含 ai-widget?v=3 :', idx.includes('ai-widget.js?v=3'));
console.log('index 含 __AI_PROXY_URL :', idx.includes('__AI_PROXY_URL'));
const sampleSlug = newOnes[0].slug;
const sample = fs.readFileSync(path.join(EXP_DIR, `${sampleSlug}.html`), 'utf8');
console.log(`样本页 ${sampleSlug} 含 ai-widget?v=3 :`, sample.includes('ai-widget.js?v=3'));
console.log(`样本页 ${sampleSlug} 含 __AI_PROXY_URL :`, sample.includes('__AI_PROXY_URL'));
console.log(`样本页 ${sampleSlug} 含 朗读科普故事 :`, sample.includes('朗读科普故事'));
console.log(`样本页 ${sampleSlug} 含 story-pane :`, sample.includes('story-pane active'));
console.log(`样本页 ${sampleSlug} 含 __AI_CONTEXT :`, sample.includes('__AI_CONTEXT'));
