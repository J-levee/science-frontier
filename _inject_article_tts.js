/* 一次性注入：给所有 explainer 子页加页面级朗读按钮。
   特性：
   - 按钮放在 h1 与副标题(.hook) 下方，样式与 AI 面板 TTS 按钮统一
   - 只朗读标题、副标题、正文（.section 内的 h2/p/.analogy/.takeaway）
   - 跳过 svg、.svg-caption、table、.audio-player、.related、script、style、按钮
   - 朗读文本清洗时剔除装饰性 emoji（💡🔍🌟 等 pictograph/dingbat 符号），不朗读这些装饰
   - 对带 tab 的页面（如 kakeya），只朗读当前激活的 pane
   - 幂等：已存在 #exArticleTts 则跳过 */
const fs = require('fs');
const path = require('path');

const CSS = `<style id="ex-article-tts-style">
#exArticleTts{margin:10px 0 26px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
#exArticleTts .ex-tts-btn{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 16px;border-radius:999px;border:1px solid rgba(125,211,252,.35);background:rgba(8,47,73,.4);color:#7dd3fc;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s}
#exArticleTts .ex-tts-btn:hover{background:rgba(8,47,73,.7);border-color:#7dd3fc;color:#e0f2fe}
#exArticleTts .ex-tts-btn.playing{background:rgba(8,47,73,.85);border-color:#67e8f9;color:#e0f2fe}
#exArticleTts .ex-tts-hint{font-size:12px;color:rgba(200,210,240,.55)}
@media(max-width:640px){#exArticleTts{gap:6px}#exArticleTts .ex-tts-hint{width:100%}}
</style>`;

const JS = `<script id="ex-article-tts-js">
(function(){
  var supported = !!(window.speechSynthesis && window.SpeechSynthesisUtterance);
  if(!supported) return;
  if(document.getElementById('exArticleTts')) return;
  var wrap = document.querySelector('.wrap');
  var h1 = wrap && wrap.querySelector('h1');
  if(!wrap || !h1) return;

  // 移除旧的底部占位播放器
  var oldPlayers = document.querySelectorAll('.audio-player');
  oldPlayers.forEach(function(el){ el.remove(); });

  // 决定插入位置：紧跟 h1；若 h1 下一段是 .hook，则放到 hook 后面
  var insertAfter = h1;
  var hook = h1.nextElementSibling;
  if(hook && hook.classList && hook.classList.contains('hook')) insertAfter = hook;

  var bar = document.createElement('div');
  bar.id = 'exArticleTts';
  bar.innerHTML = '<button class="ex-tts-btn" type="button" aria-label="朗读全文">🔊 朗读全文</button><span class="ex-tts-hint">只朗读标题与正文，不读图表</span>';
  insertAfter.parentNode.insertBefore(bar, insertAfter.nextSibling);

  var btn = bar.querySelector('.ex-tts-btn');
  var speaking = false;

  function cleanText(t){
    return String(t||'')
      // 剔除装饰性 emoji（💡🔍🌟 等 pictograph / dingbat 符号），这些只作版面装饰不朗读
      .replace(/[\\u{1F000}-\\u{1FAFF}\\u{2600}-\\u{27BF}\\u{2B00}-\\u{2BFF}\\u{FE0F}\\u{20E3}]/gu, '')
      .replace(/\\*\\*(.+?)\\*\\*/g,'$1').replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/g,'$1').replace(/https?:\\/\\/[^\\s\\)\\]]+/g,'').replace(/[<>]/g,'').replace(/\\s+/g,' ').trim();
  }
  function splitChunks(t){
    var segs = t.split(/(?<=[。！？；?!;\\n])/).map(function(s){return s.trim();}).filter(Boolean);
    if(!segs.length) segs=[t];
    var out=[]; segs.forEach(function(s){ while(s.length>110){ out.push(s.slice(0,110)); s=s.slice(110);} if(s) out.push(s); });
    return out.length?out:[t];
  }
  function stop(){ window.speechSynthesis.cancel(); speaking=false; btn.classList.remove('playing'); btn.innerHTML='🔊 朗读全文'; btn.setAttribute('aria-label','朗读全文'); }
  function pickVoice(){
    var voices = window.speechSynthesis.getVoices() || [];
    var zh = voices.filter(function(v){ return /zh|cmn|Chinese/i.test(v.lang+' '+(v.name||'')); });
    return zh[0] || voices[0] || null;
  }

  function collectText(){
    var parts = [];
    parts.push(h1.innerText.trim());

    // 带 tab 的页面只读当前激活 pane
    var activePane = wrap.querySelector('.story-pane.active, .tech-pane.active');
    var scope = activePane || wrap;

    var hookEl = scope.querySelector('.hook');
    if(hookEl) parts.push(hookEl.innerText.trim());

    var sections = scope.querySelectorAll('.section');
    sections.forEach(function(sec){
      var clone = sec.cloneNode(true);
      // 移除不朗读的元素：图、表、图表说明、脚本、样式、音频占位、相关链接、内联 AI 按钮
      clone.querySelectorAll('svg, .svg-caption, table, script, style, .audio-player, .related, button, [aria-hidden="true"], .ai-inline').forEach(function(el){ el.remove(); });
      var txt = clone.innerText.trim();
      if(txt) parts.push(txt);
    });
    return parts.join('\\n\\n');
  }

  btn.addEventListener('click', function(){
    if(speaking){ stop(); return; }
    var text = collectText();
    if(!text) return;
    var clean = cleanText(text);
    var chunks = splitChunks(clean);
    if(!chunks.length) return;
    speaking = true;
    btn.classList.add('playing');
    btn.innerHTML='⏹ 停止朗读';
    btn.setAttribute('aria-label','停止朗读');
    var i=0;
    function next(){ if(!speaking || i>=chunks.length){ stop(); return; }
      var u = new SpeechSynthesisUtterance(chunks[i]);
      u.lang='zh-CN'; u.rate=0.92; u.pitch=1.0;
      var v = pickVoice(); if(v) u.voice = v;
      u.onend = function(){ i++; next(); };
      u.onerror = function(){ i++; next(); };
      window.speechSynthesis.speak(u);
    }
    next();
  });

  // 轻量 QA 钩子：供回归测试断言朗读文本已剔除装饰 emoji（不影响正常功能）
  window.__exTTS = { collect: collectText, clean: cleanText };

  window.addEventListener('beforeunload', stop);
})();
</script>`;

const INJECT = CSS + '\n' + JS;
const ROOT = path.resolve(__dirname, 'explainers');
const files = [];
(function collect(dir){
  fs.readdirSync(dir,{withFileTypes:true}).forEach(function(de){
    var p = path.join(dir, de.name);
    if(de.isDirectory()){ collect(p); }
    else if(de.name.endsWith('.html')){ files.push(p); }
  });
})(ROOT);

let changed = 0;
files.forEach(function(f){
  var t = fs.readFileSync(f,'utf8');
  if(t.indexOf('</body>')===-1){ console.log('WARN no </body>:', f); return; }
  // 幂等清理：移除已注入的 article TTS 块（避免重复）
  t = t.replace(/<style id="ex-article-tts-style">[\s\S]*?<\/style>\n*/g, '');
  t = t.replace(/<script id="ex-article-tts-js">[\s\S]*?<\/script>\n*/g, '');
  // 移除旧的底部 .audio-player 占位块
  t = t.replace(/\s*<div class="audio-player">[\s\S]*?<\/div>\s*/g, '\n');
  t = t.replace('</body>', INJECT + '\n</body>');
  fs.writeFileSync(f, t);
  changed++;
  console.log('injected article TTS:', f);
});
console.log('\nDone. injected article TTS into', changed, 'file(s); total html', files.length);
