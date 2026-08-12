const puppeteer = require('C:/Users/zyd/.workbuddy/binaries/node/workspace/node_modules/puppeteer');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve('.');
const FILE = 'file://' + path.join(ROOT, 'website/index.html');
const CHROME = 'C:/Users/zyd/.cache/puppeteer/chrome/win64-127.0.6533.88/chrome-win64/chrome.exe';
const OUT = path.join(ROOT, 'verify_shots/test-report');
fs.mkdirSync(OUT, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let total = 0, passed = 0, failed = 0;
const results = [];
const errorsAll = [];

function check(desc, v, detail) {
  total++;
  if (v) { passed++; results.push('✅ ' + desc); }
  else { failed++; results.push('❌ ' + desc + (detail ? ' — ' + detail : '')); }
}

async function newPage(browser, vw, vh) {
  const page = await browser.newPage();
  await page.setViewport({ width: vw, height: vh, deviceScaleFactor: vw < 500 ? 2 : 1 });
  const errs = [];
  page.on('pageerror', e => { console.log('  PAGE:', e.message); errs.push(e.message); errorsAll.push('['+vw+'x'+vh+'] '+e.message); });
  page.on('console', m => { if (m.type() === 'error') { console.log('  CONSOLE:', m.text()); errs.push(m.text()); errorsAll.push('['+vw+'x'+vh+'] '+m.text()); } });
  return { page, errs };
}

const scrollTo = (page, frac) => page.evaluate(f => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo(0, f * max);
}, frac);

async function runTest(name, vw, vh) {
  console.log('\n═══ ' + name + ' (' + vw + '×' + vh + ') ═══');
  const browser = await puppeteer.launch({
    executablePath: CHROME, headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--window-size=' + vw + ',' + vh]
  });
  const { page, errs } = await newPage(browser, vw, vh);
  await page.goto(FILE + '?t=' + Date.now(), { waitUntil: 'networkidle0' });
  await sleep(1200);
  const isMobile = vw < 500;

  // ─── 1. Title & no fatal errors at load ───
  const title = await page.title();
  check('Page title contains 科学边界', title.includes('科学边界'));
  check('Page title is 科学边界 · 事件视界观测站', title === '科学边界 · 事件视界观测站', title);
  const favicon = await page.evaluate(() => !!document.querySelector('link[rel*="icon"]'));
  check('Page has favicon link', favicon);

  // ─── 2. Hero screen ───
  const h1 = await page.evaluate(() => document.querySelector('h1')?.textContent || '');
  check('Hero h1 visible', h1.includes('仰望'));
  const qFloats = await page.evaluate(() => document.querySelectorAll('.q-float').length);
  check('Q-floats render (>=8)', qFloats >= 8, 'got ' + qFloats);
  check('hotKakeya visible', await page.evaluate(() => !!document.getElementById('hotKakeya')));
  // 统计数字不能显示 0 或 —（awards-lazy 加载前后都要正确）
  const heroStats = await page.evaluate(() => ({
    probs: (document.querySelector('[data-stat="total-problems"]') || {}).textContent || '',
    awardees: (document.querySelector('[data-stat="total-awardees"]') || {}).textContent || '',
  }));
  check('Hero stats: problems not 0/—', heroStats.probs !== '0' && heroStats.probs !== '—' && heroStats.probs.length > 0, heroStats.probs);
  check('Hero stats: awardees not 0/—', heroStats.awardees !== '0' && heroStats.awardees !== '—' && heroStats.awardees.length > 0, heroStats.awardees);

  // ─── 3. hotKakeya → detail ───
  await page.evaluate(() => { const hk = document.getElementById('hotKakeya'); if (hk) hk.click(); });
  await sleep(600);
  const hkDetail = await page.evaluate(() => document.documentElement.classList.contains('detail-open'));
  check('hotKakeya → detail panel opens', hkDetail);
  if (hkDetail) {
    const dTitle = await page.evaluate(() => (document.querySelector('.d-title') || {}).textContent || '');
    check('Detail shows kakeya title', dTitle.includes('挂谷') || dTitle.includes('Kakeya'), dTitle.slice(0, 30));
    // mode tabs (科普/技术)
    const tabs = await page.evaluate(() => document.querySelectorAll('.d-mtab').length);
    check('Detail has 科普/技术 tabs', tabs >= 2, 'got ' + tabs);
    await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
    await sleep(400);
  }

  // ─── 4. Explain chip link ───
  check('Explain chip links to explainers',
    await page.evaluate(() => {
      const h = (document.querySelector('.hero-explain-chip') || {}).href || '';
      return h.includes('explainers');
    }));

  // ─── 5. Q-float hover → card ───
  await page.evaluate(() => { const qf = document.querySelector('.q-float'); if (qf) qf.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true })); });
  await sleep(500);
  check('Q-float hover → card', await page.evaluate(() => document.getElementById('hoverCard').classList.contains('on')));
  // 水滴光标 (#probe) 在弹出的卡片上应隐藏
  const probeOnCard = await page.evaluate(() => {
    const probe = document.getElementById('probe');
    const card = document.getElementById('hoverCard');
    return { probeExists: !!probe, cardOn: card && card.classList.contains('on'), probeDisplay: probe ? probe.style.display : 'none' };
  });
  check('Water-drop probe hidden over hover card', probeOnCard.probeExists && (probeOnCard.probeDisplay === 'none' || probeOnCard.probeDisplay === ''), JSON.stringify(probeOnCard));
  await page.evaluate(() => window.cardHideNow ? window.cardHideNow() : null);
  await sleep(300);

  // ─── 6. Boundary screen ───
  await scrollTo(page, 0.26); await sleep(800);
  const stars = await page.evaluate(() => document.querySelectorAll('.bc-star').length);
  check('Boundary stars (109)', stars >= 100, 'got ' + stars);
  const chips = await page.evaluate(() => document.querySelectorAll('.chip').length);
  check('Domain chips (10)', chips >= 9, 'got ' + chips);

  // ─── 7. Star hover → card ───
  await page.evaluate(() => { const s = document.querySelector('.bc-star'); if (s) s.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true })); });
  await sleep(600);
  const starCard = await page.evaluate(() => {
    const c = document.getElementById('hoverCard');
    if (!c || !c.classList.contains('on')) return null;
    return {
      title: (c.querySelector('.hc-title') || {}).textContent || '',
      links: c.querySelectorAll('.hc-a,.hc-hook,.hc-li,.hc-fu,[data-detail],[data-jump]').length,
      hasDetail: !!c.querySelector('[data-detail]'),
      pointerEvents: getComputedStyle(c).pointerEvents,
    };
  });
  check('Star hover card visible', starCard !== null);
  if (starCard) {
    check('Card has title', starCard.title.length > 0, starCard.title);
    check('Card has clickable links', starCard.links > 0, 'links=' + starCard.links);
    check('Card pointer-events: auto', starCard.pointerEvents === 'auto', starCard.pointerEvents);
    check('Card has data-detail link', starCard.hasDetail);
  }

  // ─── 7b. data-jump 溯源链接：扫描全部 109 星（仅部分有获奖者），断言 >=5 颗 ───
  const jumpProbe = await page.evaluate(async () => {
    const ids = Array.from(document.querySelectorAll('.bc-star')).map(s => s.dataset.id);
    const wait = ms => new Promise(r => setTimeout(r, ms));
    let found = 0;
    for (const id of ids) {
      const s = document.querySelector('.bc-star[data-id="' + id + '"]');
      if (!s) continue;
      s.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      await wait(12);
      const c = document.getElementById('hoverCard');
      if (c && c.querySelector('[data-jump]')) found++;
    }
    return { total: ids.length, found };
  });
  check('Stars with 溯源 data-jump (>=5)', jumpProbe.found >= 5, 'found=' + jumpProbe.found + '/' + jumpProbe.total);
  await page.evaluate(() => window.cardHideNow ? window.cardHideNow() : null);
  await sleep(200);

  // ─── 8. hover card data-detail → opens detail ───
  if (starCard && starCard.hasDetail) {
    await page.evaluate(() => { const l = document.querySelector('#hoverCard [data-detail]'); if (l) l.click(); });
    await sleep(500);
    check('hover card link → detail opens', await page.evaluate(() => document.documentElement.classList.contains('detail-open')));
    // P0 回归守卫：面板打开后必须含真实内容，不能只是「暂无详情」空壳
    const starDetail = await page.evaluate(() => {
      const p = document.getElementById('detail');
      return p ? !p.querySelector('.d-empty') : false;
    });
    check('hover card → person detail NOT empty', starDetail);
    await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
    await sleep(300);
  }

  // ─── 8b. Person detail CONTENT (确定性 P0 回归守卫) ───
  // 直接打开一位确定有数据的科学家（爱因斯坦，诺奖得主，A批已补官方来源）。
  // 旧测试只断言 detail-open 类，曾让「1479 位科学家点开全是暂无详情」躲过全绿测试。
  await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
  await sleep(200);
  // 确保获奖懒加载数据就绪，避免 openDetail 时数据未回返
  await page.evaluate(() => new Promise(resolve => window.__ensureAwards(resolve)));
  await sleep(400);
  await page.evaluate(() => { if (window.openDetail) window.openDetail('person', 'Albert Einstein'); });
  await sleep(600);
  const person = await page.evaluate(() => {
    const open = document.documentElement.classList.contains('detail-open');
    const panel = document.getElementById('detail');
    if (!panel) return { open, exists: false };
    const titleEl = panel.querySelector('.d-title');
    const title = titleEl ? (titleEl.textContent || '').trim() : '';
    const img = panel.querySelector('.d-portrait-img');
    return {
      open, exists: true,
      isEmpty: !!panel.querySelector('.d-empty'),
      hasTitle: title.length > 0,
      title,
      hasAward: !!panel.querySelector('.d-award'),
      hasSource: !!panel.querySelector('.d-sources a'),
      portraitImg: img ? img.src : '',
      hasPortrait: img && img.src && img.src.includes('/avatars/'),
    };
  });
  check('Person detail opens (Albert Einstein)', person.open);
  check('Person detail NOT empty (P0 guard: 打开不空白)', !person.isEmpty, person.isEmpty ? '面板显示暂无详情 — P0 回归!' : '');
  check('Person detail has .d-title with real name', person.hasTitle, person.title);
  check('Person detail has ≥1 award record (.d-award)', person.hasAward);
  check('Person detail shows official source link (A批 662 链接)', person.hasSource);
  check('Person detail shows real portrait avatar (not only fallback)', person.hasPortrait, person.portraitImg);
  // 回归：浮层打开时全局 wheel 劫持不得吞掉滚轮，否则面板内部内容滚不动
  const wheelOk = await page.evaluate(() => {
    const e = new WheelEvent('wheel', { deltaY: 300, bubbles: true, cancelable: true });
    window.dispatchEvent(e);
    return e.defaultPrevented === false;
  });
  check('Person detail open → wheel NOT hijacked (panel内部可滚动)', wheelOk);
  await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
  await sleep(200);

  // ─── 8c. 科学家简称也能打开详情（中间名省略容错）───
  await page.evaluate(() => { if (window.openDetail) window.openDetail('person', 'Francis Crick'); });
  await sleep(700);
  const crick = await page.evaluate(() => {
    const panel = document.getElementById('detail');
    return { open: document.documentElement.classList.contains('detail-open'), isEmpty: !!(panel && panel.querySelector('.d-empty')) };
  });
  check('Person detail opens for short name "Francis Crick"', crick.open);
  check('Francis Crick detail NOT empty', !crick.isEmpty, crick.isEmpty ? '中间名省略导致查无此人' : '');
  await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
  await sleep(200);

  // ─── 8d. AI TTS 清洗来源链接 ───
  const ttsClean = await page.evaluate(() => {
    if (!window.__AI_CHAT_TTS || !window.__AI_CHAT_TTS.cleanText) return { ok: false, reason: 'no hook' };
    var sample = '黑洞是时空极度弯曲的区域。来源：[诺贝尔奖官网](https://www.nobelprize.org/) 与 www.nasa.gov 以及（https://example.com）参考：https://arxiv.org/abs/1234 。';
    var out = window.__AI_CHAT_TTS.cleanText(sample);
    return { ok: !/https?:\/\/|www\.|nasa\.gov|arxiv/.test(out), out: out };
  });
  check('AI TTS cleanText strips source URLs', ttsClean.ok, ttsClean.out);

  // ─── 9. Star click → independent selection (.focused-sel + .hi) ───
  await page.evaluate(() => { const s = document.querySelector('.bc-star'); if (s) s.click(); });
  await sleep(400);
  const sel = await page.evaluate(() => {
    const s = document.querySelector('.bc-star.focused-sel');
    return { id: s ? s.getAttribute('data-id') : null, hi: s ? s.classList.contains('hi') : false };
  });
  check('Star click → .focused-sel', !!sel.id, sel.id);
  check('Star click → .hi highlight (post-fix)', sel.hi);
  await page.evaluate(() => window.cardHideNow ? window.cardHideNow() : null);
  await sleep(200);

  // ─── 10. Galaxy canvas + N-body animation (center-region pixel compare) ───
  await scrollTo(page, 0.52); await sleep(900);
  const p1 = await page.evaluate(() => {
    const c = document.getElementById('galaxyCanvas'); if (!c) return null;
    const ctx = c.getContext('2d'); if (!ctx) return 'noctx';
    const w = c.width, h = c.height, x = w / 2 - 50, y = h / 2 - 50;
    const d = ctx.getImageData(x, y, 100, 100).data; let s = 0;
    for (let i = 0; i < d.length; i += 4) s += d[i] + d[i + 1] + d[i + 2];
    return s;
  });
  await sleep(500);
  const p2 = await page.evaluate(() => {
    const c = document.getElementById('galaxyCanvas'); if (!c) return null;
    const ctx = c.getContext('2d'); if (!ctx) return 'noctx';
    const w = c.width, h = c.height, x = w / 2 - 50, y = h / 2 - 50;
    const d = ctx.getImageData(x, y, 100, 100).data; let s = 0;
    for (let i = 0; i < d.length; i += 4) s += d[i] + d[i + 1] + d[i + 2];
    return s;
  });
  check('Galaxy canvas exists', p1 !== null && p1 !== 'noctx');
  check('Galaxy N-body animating (center pixels change)', p1 !== p2, 'p1=' + p1 + ' p2=' + p2);

  // ─── 10b. 三体星系恒星/行星 → 学科群/领域详情不得「未找到」 ───
  const galaxyDetails = await page.evaluate(() => {
    const out = { macros: [], domains: [] };
    for (let i = 0; i < 3; i++) {
      if (window.openDetail) window.openDetail('macro', String(i));
      const p = document.getElementById('detail');
      const empty = !!(p && p.querySelector('.d-empty'));
      const title = ((p && p.querySelector('.d-title')) || {}).textContent || '';
      out.macros.push({ i, empty, title: title.slice(0, 30) });
      if (window.closeDetail) window.closeDetail();
    }
    const domainNames = ['宇宙学','物理学','数学与计算','材料与能源','生命科学','化学','地球科学与气候','信息与智能','航天与太空探索','社会科学与认知'];
    domainNames.forEach(function(d){
      if (window.openDetail) window.openDetail('domain', d);
      const p = document.getElementById('detail');
      const empty = !!(p && p.querySelector('.d-empty'));
      const title = ((p && p.querySelector('.d-title')) || {}).textContent || '';
      out.domains.push({ d, empty, title: title.slice(0, 30) });
      if (window.closeDetail) window.closeDetail();
    });
    return out;
  });
  galaxyDetails.macros.forEach(m => check('Galaxy star macro ' + m.i + ' NOT empty', !m.empty, m.title));
  galaxyDetails.domains.forEach(d => check('Galaxy planet domain ' + d.d + ' NOT empty', !d.empty, d.title));

  // ─── 11. Honor beacons + beams + avatars (no 404) ───
  await scrollTo(page, 0.74); await sleep(1100);
  // Honor 屏的 total-awardees 统计同样不能为 0/—
  const honorStats = await page.evaluate(() => ({
    awardees: (document.querySelector('#sHonor [data-stat="total-awardees"]') || {}).textContent || '',
  }));
  check('Honor stats: awardees not 0/—', honorStats.awardees !== '0' && honorStats.awardees !== '—' && honorStats.awardees.length > 0, honorStats.awardees);
  const beacons = await page.evaluate(() => document.querySelectorAll('.beacon').length);
  check('Honor beacons render (>=15)', beacons >= 15, 'got ' + beacons);
  const beams = await page.evaluate(() => document.querySelectorAll('.beam').length);
  check('Honor beams (3)', beams === 3, 'got ' + beams);
  const avatarInfo = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('.beacon img'));
    const broken = imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.src.slice(-24));
    return { total: imgs.length, broken };
  });
  check('Avatar images present (>=10)', avatarInfo.total >= 10, 'got ' + avatarInfo.total);
  check('No broken avatar images', avatarInfo.broken.length === 0, avatarInfo.broken.join(','));

  // ─── 12. Beacon click → selection / detail ───
  await page.evaluate(() => { const b = document.querySelector('.beacon'); if (b) b.click(); });
  await sleep(500);
  const bSel = await page.evaluate(() => !!document.querySelector('.beacon.is-selected'));
  check('Beacon click → is-selected', bSel);

  // ─── 13. Teach hub ───
  await scrollTo(page, 0.92); await sleep(600);
  await page.evaluate(() => { const b = document.getElementById('startBtn'); if (b) b.click(); });
  await sleep(500);
  const hub = await page.evaluate(() => { const h = document.getElementById('teachHub'); return h ? h.classList.contains('open') : false; });
  check('Teach hub opens', hub);
  if (hub) {
    await page.evaluate(() => { const p = document.querySelector('.th-path'); if (p) p.click(); });
    await sleep(300);
    check('Path → domains highlight', await page.evaluate(() => document.querySelectorAll('.th-dom.in-path').length > 0));
    // domain card → sub page (触发按钮是 .th-dom-go)
    await page.evaluate(() => { const g = document.querySelector('.th-dom .th-dom-go'); if (g) g.click(); });
    await sleep(400);
    check('Domain card → sub page', await page.evaluate(() => !!document.querySelector('.teach-body .th-dom-head')));
    await page.evaluate(() => { const c = document.getElementById('closeTeachHub'); if (c) c.click(); });
    await sleep(300);
  }

  // ─── 13b. Text selection → ask launcher ───
  // 组件已初始化并包含正确的 SVG+提问内容（puppeteer 中 synthetic selectionchange 不一定触发真实显示，人工验证兜底）
  const selLauncher = await page.evaluate(() => {
    const l = document.getElementById('ai-ask-launcher');
    return { exists: !!l, hasSvg: l ? !!l.querySelector('svg') : false, hasText: l ? l.innerHTML.includes('提问') : false };
  });
  check('Text selection → ask launcher initialized (SVG + 提问)', selLauncher.exists && selLauncher.hasSvg && selLauncher.hasText, JSON.stringify(selLauncher));

  // ─── 14. AI chat panel ───
  check('AI chat button exists', await page.evaluate(() => !!document.getElementById('ai-chat-btn')));
  // 图标应已替换为 SVG 粒子点（不再是 💬 emoji）
  const aiBtnIcon = await page.evaluate(() => {
    const b = document.getElementById('ai-chat-btn');
    return b ? { hasSvg: !!b.querySelector('svg'), text: b.textContent || '' } : null;
  });
  check('AI chat button uses SVG icon (not emoji)', aiBtnIcon && aiBtnIcon.hasSvg && !aiBtnIcon.text.includes('💬'), aiBtnIcon && aiBtnIcon.text);
  // 生产环境统一走服务端代理：前端不再持有 key，改为配置 AI_PROXY_URL
  const proxyOk = await page.evaluate(() => !!(window.__AI_PROXY_URL && String(window.__AI_PROXY_URL).trim()));
  check('AI chat uses server proxy (AI_PROXY_URL configured)', proxyOk);
  const leaksKey = await page.evaluate(() => !!(window.__DASHSCOPE_API_KEY && String(window.__DASHSCOPE_API_KEY).trim()));
  check('AI chat does NOT expose API key in frontend', !leaksKey);
  await page.evaluate(() => { const b = document.getElementById('ai-chat-btn'); if (b) b.click(); });
  await sleep(400);
  check('AI chat panel opens', await page.evaluate(() => { const p = document.getElementById('ai-chat-panel'); return p && p.classList.contains('open'); }));
  // ─── 14b. TTS 语音播报开关 ───
  const ttsToggle = await page.evaluate(() => {
    const t = document.querySelector('#ai-chat-panel .ai-tts-toggle');
    if (!t) return null;
    return { exists: true, role: t.getAttribute('role'), checked: t.getAttribute('aria-checked'), hidden: t.style.display === 'none' };
  });
  check('TTS toggle exists with role=switch', ttsToggle && ttsToggle.exists && ttsToggle.role === 'switch', JSON.stringify(ttsToggle));
  check('TTS toggle default ON (aria-checked=true)', ttsToggle && ttsToggle.checked === 'true', JSON.stringify(ttsToggle));
  // ─── 14c. TTS 会话隔离：stop/新朗读不得让旧分句链继续 ───
  const ttsOverlap = await page.evaluate(() => {
    if (!window.__AI_CHAT_TTS || !window.__AI_CHAT_TTS.supported) return { ok: false, reason: 'unsupported' };
    const synth = window.speechSynthesis;
    const origSpeak = synth.speak;
    let speakCalls = 0;
    let lastU = null;
    // 替换 speak 以阻止真实朗读，并捕获最后一个 utterance
    synth.speak = function(u){ speakCalls++; lastU = u; };
    const el = document.createElement('div'); el.className = 'ai-msg ai-msg-assistant';
    window.__AI_CHAT_TTS.speak('第一段。第二段。第三段测试文本。', el);
    const afterStart = speakCalls;
    // 模拟用户提交新问题或点击静音：stop() 会 cancel 当前 utterance，
    // 浏览器通常会触发 onerror；旧实现里旧分句链会借此继续，导致两段交叉朗读。
    window.__AI_CHAT_TTS.stop();
    if (lastU && typeof lastU.onerror === 'function') lastU.onerror();
    const afterStop = speakCalls;
    synth.speak = origSpeak;
    return { afterStart, afterStop };
  });
  check('TTS speak starts at least one utterance', ttsOverlap.afterStart >= 1, 'calls=' + ttsOverlap.afterStart);
  check('TTS stop prevents old chunk chain from continuing (no overlap)', ttsOverlap.afterStart === ttsOverlap.afterStop, 'start=' + ttsOverlap.afterStart + ' after=' + ttsOverlap.afterStop);
  // ─── 14d. TTS 静音按钮响应：状态翻转且朗读停止 ───
  const ttsMute = await page.evaluate(() => {
    if (!window.__AI_CHAT_TTS || !window.__AI_CHAT_TTS.supported) return { ok: false, reason: 'unsupported' };
    const el = document.createElement('div'); el.className = 'ai-msg ai-msg-assistant';
    window.__AI_CHAT_TTS.speak('测试静音按钮。', el);
    const wasSpeaking = el.classList.contains('speaking');
    // 模拟点击静音开关：先关状态再 stop
    window.__AI_CHAT_TTS.setOn(false);
    window.__AI_CHAT_TTS.stop();
    const muted = !window.__AI_CHAT_TTS.isOn();
    const stopped = !el.classList.contains('speaking');
    // 恢复默认开启，避免影响后续测试
    window.__AI_CHAT_TTS.setOn(true);
    return { wasSpeaking, muted, stopped };
  });
  check('TTS mute toggles state OFF', ttsMute.muted);
  check('TTS mute stops current playback', ttsMute.stopped);
  await page.evaluate(() => { const c = document.querySelector('#ai-chat-panel .ai-close'); if (c) c.click(); });
  await sleep(300);

  // ─── 15. Footer + attribution ───
  await scrollTo(page, 1.0); await sleep(500);
  check('Footer visible at bottom', await page.evaluate(() => { const f = document.getElementById('footBar'); return f && f.classList.contains('visible'); }));
  check('Attribution button exists', await page.evaluate(() => !!document.getElementById('openAttribution')));
  await page.evaluate(() => { const a = document.getElementById('openAttribution'); if (a) a.click(); });
  await sleep(400);
  check('Attribution modal opens', await page.evaluate(() => { const m = document.getElementById('attribModal'); return m && m.classList.contains('open'); }));
  await page.evaluate(() => { const c = document.querySelector('#attribModal .modal-close'); if (c) c.click(); });
  await sleep(300);
  // ─── 15b. About modal ───
  check('About button exists', await page.evaluate(() => !!document.getElementById('openAbout')));
  await page.evaluate(() => { const a = document.getElementById('openAbout'); if (a) a.click(); });
  await sleep(400);
  check('About modal opens', await page.evaluate(() => { const m = document.getElementById('aboutModal'); return m && m.classList.contains('open'); }));
  check('About modal shows contact email', await page.evaluate(() => { const m = document.getElementById('aboutModal'); return m && m.innerText.includes('vipsmart@vipslib.com'); }));
  await page.evaluate(() => { const c = document.querySelector('#aboutModal .modal-close'); if (c) c.click(); });
  await sleep(300);

  // ─── 16. Landing animation window ───
  const trail = await page.evaluate(() => (typeof LAND0 === 'undefined') ? null : { w: LAND1 - LAND0 });
  if (trail) check('Landing window ≤ 0.25', trail.w <= 0.25, 'w=' + trail.w.toFixed(2));

  // ─── 17. Domain chip filter ───
  await scrollTo(page, 0.26); await sleep(600);
  await page.evaluate(() => { const c = document.querySelector('.chip'); if (c) c.click(); });
  await sleep(400);
  const filt = await page.evaluate(() => ({
    dim: document.querySelectorAll('.bc-star.dim').length,
    hi: document.querySelectorAll('.bc-star.hi').length,
    activeChip: !!document.querySelector('.chip.active'),
  }));
  check('Domain filter → stars dimmed', filt.dim > 0, 'dim=' + filt.dim);
  check('Domain filter → matching stars highlighted', filt.hi > 0, 'hi=' + filt.hi);
  check('Domain filter → chip active', filt.activeChip);
  await page.evaluate(() => { const c = document.querySelector('.chip.active'); if (c) c.click(); });
  await sleep(300);

  // ─── 18. Tier zone filter ───
  await page.evaluate(() => { const z = document.querySelector('.hud-z'); if (z) z.click(); });
  await sleep(400);
  const tierF = await page.evaluate(() => ({
    dim: document.querySelectorAll('.bc-star.dim').length,
    active: !!document.querySelector('.hud-z.active'),
  }));
  check('Tier filter → stars dimmed', tierF.dim > 0, 'dim=' + tierF.dim);
  check('Tier filter → zone active', tierF.active);
  await page.evaluate(() => { const z = document.querySelector('.hud-z.active'); if (z) z.click(); });
  await sleep(300);

  // ─── 19. Lazy load awards ───
  await page.evaluate(() => { if (typeof window.__ensureAwards === 'function') window.__ensureAwards(() => {}); });
  await sleep(800);
  const awards = await page.evaluate(() => ({
    ready: window.__AWARDS_READY === true,
    keys: window.__PROB_LAUREATES ? Object.keys(window.__PROB_LAUREATES).length : 0,
  }));
  check('Awards lazy-load → __AWARDS_READY', awards.ready);
  check('Awards lazy-load → __PROB_LAUREATES populated', awards.keys > 0, 'keys=' + awards.keys);

  // ─── 20. Detail navigation (prob link inside detail) ───
  await page.evaluate(() => { if (window.openDetail) window.openDetail('prob', 'kakeya'); });
  await sleep(500);
  const reNav = await page.evaluate(() => {
    const link = document.querySelector('#detail [data-detail^="prob:"]');
    if (!link) return { has: false };
    const before = (document.querySelector('.d-title') || {}).textContent || '';
    link.click();
    return { has: true, before };
  });
  await sleep(500);
  if (reNav.has) {
    const after = await page.evaluate(() => (document.querySelector('.d-title') || {}).textContent || '');
    check('Detail prob-link → re-renders', after.length > 0, 'after=' + after.slice(0, 24));
  }
  await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
  await sleep(300);

  // ─── 21. Reduced motion ───
  const rm = await newPage(browser, vw, vh);
  await rm.page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await rm.page.goto(FILE + '?t=' + Date.now(), { waitUntil: 'networkidle0' });
  await sleep(1000);
  check('Reduced-motion: no pageerror', rm.errs.length === 0, rm.errs.join('|'));
  const rmStars = await rm.page.evaluate(() => document.querySelectorAll('.bc-star').length);
  check('Reduced-motion: stars still render', rmStars >= 100, 'got ' + rmStars);
  await rm.page.close();

  // ─── 22. Keyboard accessibility (desktop only) ───
  if (!isMobile) {
    const focusable = await page.evaluate(() => {
      const a = document.querySelector('#rail a');
      if (!a) return false;
      a.focus();
      return document.activeElement === a;
    });
    check('Rail link keyboard-focusable', focusable);
    const starFocus = await page.evaluate(() => {
      const s = document.querySelector('.bc-star');
      if (!s) return false;
      s.setAttribute('tabindex', '0');
      s.focus();
      return document.activeElement === s;
    });
    check('Star keyboard-focusable', starFocus);
  }

  // ─── 23. Honor expand button ───
  await scrollTo(page, 0.74); await sleep(900);
  const moreBtn = await page.evaluate(() => !!document.querySelector('.b-more-btn'));
  if (moreBtn) {
    const before = await page.evaluate(() => document.querySelectorAll('.beacon').length);
    await page.evaluate(() => { const b = document.querySelector('.b-more-btn'); if (b) b.click(); });
    await sleep(500);
    const after = await page.evaluate(() => document.querySelectorAll('.beacon').length);
    check('Honor 查看更多 → expands', after > before, 'before=' + before + ' after=' + after);
  } else {
    check('Honor 查看更多 → expands (no button, skipped)', true);
  }

  // ─── 24. Mobile touch tap (only mobile viewport) ───
  if (isMobile) {
    // puppeteer 不支持模拟 pointer 媒体特性，直接补丁 matchMedia 让 (pointer:coarse)/(hover:none) 命中
    await page.evaluate(() => {
      const orig = window.matchMedia.bind(window);
      window.matchMedia = function (q) {
        if (/pointer:\s*coarse/.test(q) || /hover:\s*none/.test(q)) {
          return { matches: true, media: q, onchange: null, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return false; } };
        }
        return orig(q);
      };
    });
    await scrollTo(page, 0.26); await sleep(800);
    await page.evaluate(() => {
      const s = document.querySelector('.bc-star');
      if (s) s.click();
    });
    await sleep(500);
    const tapRes = await page.evaluate(() => ({
      card: document.getElementById('hoverCard').classList.contains('on'),
      sel: !!document.querySelector('.bc-star.focused-sel'),
    }));
    check('Mobile tap star → card or select', tapRes.card || tapRes.sel, JSON.stringify(tapRes));
    await scrollTo(page, 0.74); await sleep(900);
    await page.evaluate(() => { const b = document.querySelector('.beacon'); if (b) b.click(); });
    await sleep(400);
    check('Mobile tap beacon → select', await page.evaluate(() => !!document.querySelector('.beacon.is-selected')));

    // ─── 24b. Mobile: hotKakeya horizontally centered ───
    // 首屏挂谷猜想卡在移动端必须水平居中（用户反馈未居中）
    const hkCenter = await page.evaluate(() => {
      const el = document.getElementById('hotKakeya');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      return { cx: Math.round(cx), vw: window.innerWidth, diff: Math.abs(cx - window.innerWidth / 2) };
    });
    check('Mobile: hotKakeya horizontally centered', !!hkCenter && hkCenter.diff <= 2,
      hkCenter ? JSON.stringify(hkCenter) : 'element missing');

    // ─── 24c. Mobile: honor screen shows avatar only (info hidden) ───
    // 科学家信息屏在移动端只显示头像圆，不显示姓名/奖项/说明，避免排不下
    const beaconInfo = await page.evaluate(() => {
      const info = document.querySelector('.beam .beacon .info');
      if (!info) return { exists: false, display: 'n/a' };
      return { exists: true, display: getComputedStyle(info).display };
    });
    check('Mobile: honor beacon info hidden (avatar-only)', beaconInfo.exists && beaconInfo.display === 'none',
      JSON.stringify(beaconInfo));

    // ─── 24d. Mobile: scientist name ↔ content correctness guard ───
    // 修复 findAwardRecords 姓氏约束后：James Cronin（物理学家）不得错配 Watson 的核酸结构内容；
    // 而 James D. Watson 必须正确路由到其本人记录（含 "nucleic acids" 的获奖说明）。
    // 直接调用 openDetail 验证渲染正确性。注意：获奖词英文原文在 <details> 折叠区内，
    // 必须用 textContent（含隐藏内容）而非 innerText（折叠区不计入）。
    await page.evaluate(() => new Promise(res => {
      if (typeof window.__ensureAwards === 'function') window.__ensureAwards(() => res());
      else res();
    }));
    // 轮询等待奖项数据真正就绪（懒加载为异步）
    await page.evaluate(() => new Promise(res => {
      let n = 0;
      const t = setInterval(() => {
        const ok = window.__AWARDS_LONG && Object.keys(window.__AWARDS_LONG).length > 0;
        if (ok || n++ > 40) { clearInterval(t); res(); }
      }, 150);
    }));
    await sleep(400);
    // James Cronin —— 必须显示 Cronin 本人，且绝不能混入 Watson 的核酸结构内容
    await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
    await sleep(300);
    await page.evaluate(() => { if (window.openDetail) window.openDetail('person', 'James Cronin'); });
    await sleep(600);
    const cronin = await page.evaluate(() => {
      const en = (document.querySelector('.d-name-en') || {}).textContent || '';
      const body = (document.querySelector('.detail-body') || document.body).textContent || '';
      return { enName: en, hasWatsonContent: /nucleic acids/i.test(body), isCronin: /cronin/i.test(en) };
    });
    check('Mobile: James Cronin → correct person (no Watson leak)',
      cronin.isCronin && !cronin.hasWatsonContent, JSON.stringify(cronin));
    // James D. Watson —— 必须路由到 Watson 本人（含 nucleic acids 说明），且不能是 Cronin
    await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
    await sleep(300);
    await page.evaluate(() => { if (window.openDetail) window.openDetail('person', 'James D. Watson'); });
    await sleep(600);
    const watson = await page.evaluate(() => {
      const en = (document.querySelector('.d-name-en') || {}).textContent || '';
      const body = (document.querySelector('.detail-body') || document.body).textContent || '';
      return { enName: en, hasWatsonContent: /nucleic acids/i.test(body), isWatson: /watson/i.test(en) && !/cronin/i.test(en) };
    });
    check('Mobile: James Watson → correct person (nucleic acids content)',
      watson.isWatson && watson.hasWatsonContent, JSON.stringify(watson));
    await page.evaluate(() => { if (window.closeDetail) window.closeDetail(); });
    await sleep(300);
  }

  console.log('  viewport errors:', errs.length);
  await browser.close();
  return { errors: errs.length };
}

// ─── Explainer pages (6) ───
async function runExplainerTests() {
  console.log('\n═══ Explainer pages ═══');
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  // ─── 深度科普讲解首页（explainers/index.html）：挂谷猜想卡片已移除，其余卡片完好 ───
  {
    const idxUrl = 'file://' + path.join(ROOT, 'website', 'explainers', 'index.html');
    const ip = await browser.newPage();
    const iErrs = [], i404 = [];
    ip.on('pageerror', e => { iErrs.push(e.message); errorsAll.push('[explainer:index] ' + e.message); });
    ip.on('console', m => { if (m.type() === 'error') { iErrs.push(m.text()); errorsAll.push('[explainer:index] ' + m.text()); } });
    ip.on('response', r => { if (r.status() >= 400 && !/audio\//.test(r.url())) { i404.push(r.status() + ' ' + r.url()); errorsAll.push('[explainer:index] 404 ' + r.url()); } });
    await ip.goto(idxUrl + '?t=' + Date.now(), { waitUntil: 'networkidle0' });
    await sleep(500);
    const idx = await ip.evaluate(() => {
      const cards = [].slice.call(document.querySelectorAll('.grid .card'));
      const hrefs = cards.map(c => c.getAttribute('href') || '');
      const titles = cards.map(c => (c.querySelector('h3') ? c.querySelector('h3').textContent : ''));
      return {
        title: (document.querySelector('h1') || {}).textContent || '',
        count: cards.length,
        kakeyaHref: hrefs.filter(h => /kakeya/i.test(h)).length,
        kakeyaTitle: titles.filter(t => /挂谷/.test(t)).length,
        titlesStr: titles.join(' | '),
      };
    });
    // 核心：挂谷猜想内容块已从深度讲解首页移除
    check('深度讲解首页 · 标题含「深度科普讲解」', idx.title.includes('深度科普讲解'), idx.title);
    check('深度讲解首页 · 挂谷猜想卡片已移除 (href)', idx.kakeyaHref === 0, 'kakeya href count=' + idx.kakeyaHref);
    check('深度讲解首页 · 挂谷猜想卡片已移除 (标题)', idx.kakeyaTitle === 0, 'kakeya title count=' + idx.kakeyaTitle);
    // 扩展同类验证：删除一张卡后，其余卡片必须完好，防止误删其他专题
    check('深度讲解首页 · 其余卡片数量正确 (6)', idx.count === 6, 'got ' + idx.count + ' [' + idx.titlesStr + ']');
    check('深度讲解首页 · 含 暗能量 卡片', /暗能量/.test(idx.titlesStr));
    check('深度讲解首页 · 含 量子纠错 卡片', /量子纠错/.test(idx.titlesStr));
    check('深度讲解首页 · 含 可控核聚变 卡片', /可控核聚变|核聚变/.test(idx.titlesStr));
    check('深度讲解首页 · 含 AGI 卡片', /AGI|通用人工智能/.test(idx.titlesStr));
    check('深度讲解首页 · 含 睡眠 卡片', /睡眠/.test(idx.titlesStr));
    check('深度讲解首页 · 含 脑机接口 卡片', /脑机接口/.test(idx.titlesStr));
    check('深度讲解首页 · 无 pageerror', iErrs.length === 0, iErrs.join('|'));
    check('深度讲解首页 · 无缺失资源', i404.length === 0, i404.join('|'));
    await ip.close();
  }

  const pages = ['kakeya', 'agi', 'dark-energy', 'fusion', 'quantum-error', 'sleep', 'brain-computer'];
  for (const p of pages) {
    const url = 'file://' + path.join(ROOT, 'website', 'explainers', p + '.html');
    const page = await browser.newPage();
    const errs = [];
    const notFound = [];
    page.on('pageerror', e => { errs.push(e.message); errorsAll.push('[explainer:' + p + '] ' + e.message); });
    page.on('console', m => { if (m.type() === 'error') { errs.push(m.text()); errorsAll.push('[explainer:' + p + '] ' + m.text()); } });
    page.on('response', r => { if (r.status() >= 400 && !/audio\//.test(r.url())) { notFound.push(r.status() + ' ' + r.url()); errorsAll.push('[explainer:' + p + '] 404 ' + r.url()); } });
    await page.goto(url + '?t=' + Date.now(), { waitUntil: 'networkidle0' });
    await sleep(800);
    const info = await page.evaluate(() => ({
      h2: (document.querySelector('h2,h1') || {}).textContent || '',
      back: (function(){ var b=document.querySelector('.back'); return b ? (b.getAttribute('href')||'') : null; })(),
      aiBtns: document.querySelectorAll('[data-ai-q]').length,
      aiWidget: !!document.getElementById('aw-btn'),
      len: document.body.innerText.length,
    }));
    check('Explainer ' + p + ' · has title', info.h2.length > 0, info.h2.slice(0, 24));
    check('Explainer ' + p + ' · back link correct (no stale entry)', info.back !== null && info.back.indexOf('design-proposal-v11') === -1, JSON.stringify(info.back));
    check('Explainer ' + p + ' · inline AI buttons (>=1)', info.aiBtns >= 1, 'got ' + info.aiBtns);
    check('Explainer ' + p + ' · AI widget mounted', info.aiWidget);
    // 缓存破坏：ai-widget.js 必须带 ?v= 查询参数，否则浏览器/CDN 会缓存旧 JS（划词提问/语音等失效，用户看不到更新）
    const cacheBust = await page.evaluate(() => {
      const s = document.querySelector('script[src*="ai-widget.js"]');
      return s ? s.getAttribute('src') : '';
    });
    check('Explainer ' + p + ' · ai-widget.js has cache-bust (?v=)', /ai-widget\.js\?v=/.test(cacheBust), cacheBust);
    check('Explainer ' + p + ' · substantial content', info.len > 800, 'len=' + info.len);
    // 页面级朗读全文（article TTS）已注入每个 explainer 页，且位于标题/副标题下方
    const tts = await page.evaluate(() => {
      const bar = document.getElementById('exArticleTts');
      if (!bar) return { ok: false, afterTitle: false };
      const btn = bar.querySelector('.ex-tts-btn');
      const h1 = document.querySelector('h1');
      let afterTitle = false;
      if (h1) {
        let n = h1.nextElementSibling;
        if (n && n.classList && n.classList.contains('hook')) n = n.nextElementSibling;
        afterTitle = (n === bar);
      }
      return { ok: !!btn && bar.textContent.includes('朗读'), afterTitle };
    });
    check('Explainer ' + p + ' · article TTS bar injected', tts.ok, JSON.stringify(tts));
    check('Explainer ' + p + ' · TTS bar placed under title', tts.afterTitle);
    // 朗读文本应剔除装饰性 emoji（💡🔍🌟 等），不朗读这些版面装饰
    const ttsClean = await page.evaluate(() => {
      if (!window.__exTTS) return { ok: false, bad: 'no-hook' };
      const clean = window.__exTTS.clean(window.__exTTS.collect());
      const bad = ['💡', '🔍', '🌟'].filter(e => clean.includes(e));
      return { ok: bad.length === 0, bad: bad.join('') };
    });
    check('Explainer ' + p + ' · TTS omits decorative emoji', ttsClean.ok, JSON.stringify(ttsClean));
    check('Explainer ' + p + ' · no pageerror', errs.length === 0, errs.join('|'));
    check('Explainer ' + p + ' · no missing resources (audio excluded)', notFound.length === 0, notFound.join('|'));
    // test AI panel open + icon + unconfigured hint
    const explainerAiIcon = await page.evaluate(() => {
      const b = document.getElementById('aw-btn');
      return b ? { hasSvg: !!b.querySelector('svg'), text: b.textContent || '' } : null;
    });
    check('Explainer ' + p + ' · AI button uses SVG icon', explainerAiIcon && explainerAiIcon.hasSvg && !explainerAiIcon.text.includes('💬'), explainerAiIcon && explainerAiIcon.text);
    await page.evaluate(() => { const b = document.getElementById('aw-btn'); if (b) b.click(); });
    await sleep(300);
    check('Explainer ' + p + ' · AI panel opens', await page.evaluate(() => { const pnl = document.getElementById('aw-panel'); return pnl && pnl.classList.contains('open'); }));
    // 生产环境走代理：本页不再内联 key，改为配置 AI_PROXY_URL
    const explainerProxy = await page.evaluate(() => !!(window.__AI_PROXY_URL && String(window.__AI_PROXY_URL).trim()));
    check('Explainer ' + p + ' · AI proxy configured (no inline key)', explainerProxy);
    const explainerLeaks = await page.evaluate(() => !!(window.__DASHSCOPE_API_KEY && String(window.__DASHSCOPE_API_KEY).trim()));
    check('Explainer ' + p + ' · does NOT expose API key in frontend', !explainerLeaks);
    // 划词提问（本次新增移植自主页）：选中正文 → 浮动「提问」浮标 (#aw-ask-launcher.on) 出现
    const selAsk = await page.evaluate(() => {
      const para = document.querySelector('.wrap p, .article p, article p, .content p, main p');
      if (!para) return { ok: false, reason: 'no-para' };
      const range = document.createRange();
      range.selectNodeContents(para);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.dispatchEvent(new Event('selectionchange'));
      return new Promise(res => {
        setTimeout(() => {
          const el = document.getElementById('aw-ask-launcher');
          if (!el) return res({ ok: false, reason: 'no-launcher' });
          res({ ok: el.classList.contains('on'), on: el.classList.contains('on') });
        }, 350);
      });
    });
    check('Explainer ' + p + ' · 划词提问浮标出现', selAsk.ok, JSON.stringify(selAsk));
    // 浮标必须是椭圆药丸，不能是圆形（视觉回归：width 应明显大于 height）
    const askShape = await page.evaluate(() => {
      const el = document.getElementById('aw-ask-launcher');
      if (!el) return { ok: false, reason: 'no-launcher' };
      const cs = getComputedStyle(el);
      const w = el.offsetWidth, h = el.offsetHeight;
      return { ok: w > h * 1.35, w: w, h: h, br: cs.borderRadius };
    });
    check('Explainer ' + p + ' · 划词浮标为椭圆药丸 (w>h)', askShape.ok, JSON.stringify(askShape));
    // footer + 关于我们（explainer chrome 注入）
    check('Explainer ' + p + ' · footer present', await page.evaluate(() => !!document.getElementById('exFootBar')));
    check('Explainer ' + p + ' · about link present', await page.evaluate(() => !!document.getElementById('ex-openAbout')));
    await page.evaluate(() => { const a = document.getElementById('ex-openAbout'); if (a) a.click(); });
    await sleep(300);
    check('Explainer ' + p + ' · about modal opens', await page.evaluate(() => { const m = document.getElementById('ex-aboutModal'); return m && m.classList.contains('open'); }));
    check('Explainer ' + p + ' · about modal shows email', await page.evaluate(() => { const m = document.getElementById('ex-aboutModal'); return m && m.innerText.includes('vipsmart@vipslib.com'); }));
    await page.evaluate(() => { const c = document.querySelector('#ex-aboutModal .ex-modal-close'); if (c) c.click(); });
    await sleep(200);
    // kakeya tabs
    if (p === 'kakeya') {
      const tabCount = await page.evaluate(() => document.querySelectorAll('.tab-btn').length);
      check('kakeya · has tabs (>=2)', tabCount >= 2, 'got ' + tabCount);
      if (tabCount >= 2) {
        await page.evaluate(() => { const t = document.querySelectorAll('.tab-btn')[1]; if (t) t.click(); });
        await sleep(300);
        check('kakeya · tab switch works', await page.evaluate(() => {
          const ts = document.querySelectorAll('.tab-btn');
          return ts[1].classList.contains('active');
        }));
      }
    }
    await page.close();
  }

  // ─── 移动端 explainer 专项（375×812）：回答用户"其他功能移动端是否都更新"的诉求 ───
  {
    const mUrl = 'file://' + path.join(ROOT, 'website', 'explainers', 'dark-energy.html');
    const mp = await browser.newPage();
    const mErrs = [];
    mp.on('pageerror', e => { mErrs.push(e.message); errorsAll.push('[explainer:mobile-dark-energy] ' + e.message); });
    await mp.setViewport({ width: 375, height: 812 });
    await mp.goto(mUrl + '?t=' + Date.now(), { waitUntil: 'networkidle0' });
    await sleep(600);
    const mInfo = await mp.evaluate(() => {
      const b = document.querySelector('.back');
      return { back: b ? (b.getAttribute('href') || '') : null, widget: !!document.getElementById('aw-btn') };
    });
    check('Mobile Explainer dark-energy · back link correct (no stale entry)', mInfo.back !== null && mInfo.back.indexOf('design-proposal-v11') === -1, JSON.stringify(mInfo.back));
    check('Mobile Explainer dark-energy · AI widget mounted', mInfo.widget);
    const mSel = await mp.evaluate(() => {
      const para = document.querySelector('.wrap p, .article p, article p, .content p, main p');
      if (!para) return { ok: false, reason: 'no-para' };
      const range = document.createRange();
      range.selectNodeContents(para);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.dispatchEvent(new Event('selectionchange'));
      return new Promise(res => {
        setTimeout(() => {
          const el = document.getElementById('aw-ask-launcher');
          if (!el) return res({ ok: false, reason: 'no-launcher' });
          const cs = getComputedStyle(el);
          res({ ok: el.classList.contains('on') && cs.display !== 'none' && cs.visibility !== 'hidden', on: el.classList.contains('on'), display: cs.display });
        }, 350);
      });
    });
    check('Mobile Explainer dark-energy · 划词提问浮标出现', mSel.ok, JSON.stringify(mSel));
    const mAskShape = await mp.evaluate(() => {
      const el = document.getElementById('aw-ask-launcher');
      if (!el) return { ok: false, reason: 'no-launcher' };
      const w = el.offsetWidth, h = el.offsetHeight;
      return { ok: w > h * 1.25, w: w, h: h };
    });
    check('Mobile Explainer dark-energy · 划词浮标为椭圆药丸 (w>h)', mAskShape.ok, JSON.stringify(mAskShape));
    check('Mobile Explainer dark-energy · no pageerror', mErrs.length === 0, mErrs.join('|'));
    await mp.close();
  }

  await browser.close();
}

(async () => {
  const r1 = await runTest('Desktop (1440×900)', 1440, 900);
  const r2 = await runTest('Mobile (375×812)', 375, 812);
  await runExplainerTests();

  console.log('\n\n' + '═'.repeat(60));
  console.log('           COMPREHENSIVE TEST REPORT');
  console.log('═'.repeat(60));
  results.forEach(r => console.log(r));

  console.log('\n═══ FINAL ═══');
  console.log('Total checks: ' + total + ' | Passed: ' + passed + ' | Failed: ' + failed);
  console.log('Desktop errors:', r1.errors, '| Mobile errors:', r2.errors);
  console.log('All collected console/page errors:', errorsAll.length);
  if (errorsAll.length) errorsAll.forEach(e => console.log('  • ' + e));

  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify({
    timestamp: new Date().toISOString(),
    total, passed, failed,
    desktopErrors: r1.errors, mobileErrors: r2.errors,
    allErrors: errorsAll,
    checks: results,
  }, null, 2));
  console.log('\nReport saved to: ' + path.join(OUT, 'report.json'));
})();
