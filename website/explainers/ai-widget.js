/* ===== AI 科普问答组件 · 独立版（可嵌入任意页面） ===== */
(function(){
  /* ---- 配置 ---- */
  var API_KEY = 'sk-ws-H.ELHIRIP.Xt4O.MEUCIQDm0tpqpeam5rmWXORqXiVbg-vHC6fnvKl7QF5m7EPm5AIgT6jddNsoRs5Wh0KCY5J0Gvf16eTQOp8hYfelPm-PAdk';
  var API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';
  var MODEL = 'qwen-plus';
  var CORS_PROXIES = [function(u){return'https://corsproxy.io/?'+encodeURIComponent(u);},function(u){return'https://api.allorigins.win/raw?url='+encodeURIComponent(u);}];
  var messages=[], loading=false;
  var CTX = window.__AI_CONTEXT || {};
  var topic = CTX.topic || document.title.replace(/\\s*[\\—–·|-]+\\s*科学边界.*/,'').trim() || '科学';
  var icebreakers = CTX.icebreakers || [
    topic+'是什么？可以用生活中的例子解释吗？',
    '为什么'+topic+'这么重要？',
    topic+'研究到了哪一步？',
    '普通人能参与'+topic+'研究吗？'
  ];

  /* ---- 系统提示词 ---- */
  function systemPrompt(){
    return '你是"科学边界"知识星图项目的 AI 科普助手，受众是 10-16 岁青少年。当前用户正在阅读《'+topic+'》的主题页面。请针对这个话题深入浅出地回答，多用比喻，每个概念附注英文名，末尾列 2-4 条来源 [名称](URL)。回答 300-500 字。如果问题超出范围，就给搜索建议。';
  }

  /* ---- DOM ---- */
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  var btn = document.createElement('div');
  btn.id = 'aw-btn'; btn.innerHTML = '💬'; btn.title = '向 AI 提问关于 '+topic;
  document.body.appendChild(btn);
  var panel = document.createElement('div');
  panel.id = 'aw-panel';
  panel.innerHTML = '<div class="aw-head">🤖 AI · 聊一聊「'+esc(topic)+'」<button class="aw-close">✕</button></div>'
    +'<div class="aw-msgs"><div class="aw-msg aw-welcome">'
    +'<p class="aw-hi">👋 你好！你对「<b>'+esc(topic)+'</b>」有什么想知道的？</p>'
    +'<div class="aw-suggest">'+icebreakers.slice(0,4).map(function(q){
      return '<button class="aw-sug" data-q="'+esc(q)+'">💡 '+esc(q)+'</button>';
    }).join('')+'</div></div></div>'
    +'<div class="aw-row"><input class="aw-input" placeholder="输入你想问的……" maxlength="500"><button class="aw-send">发送</button></div>';
  document.body.appendChild(panel);
  var msgs=panel.querySelector('.aw-msgs'), input=panel.querySelector('.aw-input'), send=panel.querySelector('.aw-send');

  /* ---- 交互 ---- */
  btn.onclick=function(){panel.classList.add('open');btn.style.display='none';setTimeout(function(){input.focus();},300);};
  panel.querySelector('.aw-close').onclick=function(){panel.classList.remove('open');btn.style.display='';};
  document.addEventListener('click',function(e){if(!panel.classList.contains('open'))return;if(!panel.contains(e.target)&&!e.target.closest('#aw-btn')){panel.classList.remove('open');btn.style.display='';}});

  /* ---- 建议问题点击 ---- */
  panel.addEventListener('click',function(e){var s=e.target.closest('.aw-sug');if(s&&!loading){input.value='';ask(s.getAttribute('data-q'));}});

  function addMsg(role,html){var d=document.createElement('div');d.className='aw-msg aw-'+role;d.innerHTML=html;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;return d;}
  function md2html(t){return t.replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>').replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br/>');}

  /* ---- API 调用 ---- */
  function callAPI(url,payload,n){n=n||0;var fu=n===0?url:CORS_PROXIES[n-1](url);return fetch(fu,{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+API_KEY},body:JSON.stringify(payload)}).then(function(r){if(!r.ok)throw Error('HTTP '+r.status);return r.json();}).catch(function(e){if(n<CORS_PROXIES.length)return callAPI(url,payload,n+1);throw e;});}
  function ask(question){
    if(loading)return; loading=true; send.disabled=true; send.textContent='...';
    addMsg('user','<p>'+esc(question)+'</p>');
    var ld=addMsg('assistant','<p class="aw-loading"><span></span><span></span><span></span> 思考中…</p>');
    if(!messages.length) messages.push({role:'system',content:systemPrompt()});
    messages.push({role:'user',content:question}); if(messages.length>8) messages.splice(1,messages.length-8);
    callAPI(API_URL,{model:MODEL,messages:messages,temperature:.7,max_tokens:1200}).then(function(d){
      var reply=d.choices&&d.choices[0]&&d.choices[0].message?d.choices[0].message.content:'抱歉，AI 无法回答。';
      messages.push({role:'assistant',content:reply});
      ld.innerHTML='<p>'+md2html(reply)+'</p>';
    }).catch(function(e){
      ld.innerHTML='<p class="aw-err">⚠️ 连接失败：'+esc(e.message||'')+'。请稍后重试。</p>';
    }).finally(function(){loading=false;send.disabled=false;send.textContent='发送';input.focus();});
  }
  function doSend(){var q=input.value.trim();if(!q||loading)return;input.value='';ask(q);}
  send.onclick=doSend; input.onkeydown=function(e){if(e.key==='Enter')doSend();};

  /* ---- 样式 ---- */
  var s=document.createElement('style');s.textContent=[
    '#aw-btn{position:fixed;right:20px;bottom:20px;z-index:1000;width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:20px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 3px 18px rgba(99,102,241,.45);transition:all .25s;border:none;font-family:inherit;user-select:none}',
    '#aw-btn:hover{transform:scale(1.08);box-shadow:0 5px 26px rgba(99,102,241,.65)}',
    '#aw-panel{position:fixed;right:14px;bottom:14px;z-index:1001;width:360px;max-width:calc(100vw-24px);height:460px;max-height:calc(100vh-50px);background:#11131f;border:1px solid rgba(255,255,255,.12);border-radius:14px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.7);opacity:0;transform:translateY(16px) scale(.96);pointer-events:none;transition:all .3s cubic-bezier(.4,0,.2,1);font-family:inherit}',
    '#aw-panel.open{opacity:1;transform:none;pointer-events:auto}',
    '.aw-head{display:flex;align-items:center;gap:8px;padding:12px 14px;background:linear-gradient(135deg,rgba(99,102,241,.18),rgba(139,92,246,.12));border-bottom:1px solid rgba(255,255,255,.08);font-size:13px;color:#c7d2fe;font-weight:600;flex-shrink:0}',    '.aw-close{background:none;border:none;color:rgba(255,255,255,.45);font-size:15px;cursor:pointer;margin-left:auto;padding:2px 8px;font-family:inherit}',
    '.aw-close:hover{color:#fff}',
    '.aw-msgs{flex:1;overflow-y:auto;padding:10px 12px;display:flex;flex-direction:column;gap:8px}',
    '.aw-msg{max-width:92%;padding:9px 12px;border-radius:10px;font-size:13px;line-height:1.6;word-break:break-word}',
    '.aw-msg p{margin:0}.aw-msg p+p{margin-top:5px}',
    '.aw-user{align-self:flex-end;background:linear-gradient(135deg,rgba(99,102,241,.22),rgba(139,92,246,.15));color:#e2e8ff;border-bottom-right-radius:3px}',
    '.aw-assistant{align-self:flex-start;background:rgba(255,255,255,.03);color:#cbd5e1;border-bottom-left-radius:3px}',
    '.aw-assistant a{color:#93c5fd}', '.aw-assistant b{color:#f0f4ff}',
    '.aw-welcome{align-self:flex-start;background:none;color:rgba(200,210,240,.75);padding:6px 4px}',
    '.aw-hi{font-size:12.5px;color:rgba(220,230,255,.8);line-height:1.7}',
    '.aw-suggest{display:flex;flex-direction:column;gap:4px;margin-top:6px}',
    '.aw-sug{display:block;width:100%;text-align:left;font-size:11.5px;color:rgba(220,230,255,.82);background:rgba(120,140,255,.04);border:1px solid rgba(150,170,255,.12);border-radius:7px;padding:7px 10px;cursor:pointer;transition:all .15s;font-family:inherit;line-height:1.4}',
    '.aw-sug:hover{background:rgba(120,140,255,.14);border-color:rgba(170,190,255,.35);color:#fff;transform:translateX(2px)}',
    '.aw-loading{display:inline-flex;align-items:center;gap:5px;color:rgba(200,210,240,.65)}',
    '.aw-loading span{width:5px;height:5px;border-radius:50%;background:rgba(180,200,255,.55);animation:awPulse 1.2s infinite ease-in-out}',
    '.aw-loading span:nth-child(2){animation-delay:.2s}.aw-loading span:nth-child(3){animation-delay:.4s}',
    '@keyframes awPulse{0%,80%,100%{opacity:.3;transform:scale(.8)}40%{opacity:1;transform:scale(1.1)}}',
    '.aw-err{color:#fca5a5;background:rgba(248,113,113,.07);border:1px solid rgba(248,113,113,.15);border-radius:7px;padding:8px 10px}',
    '.aw-row{display:flex;gap:6px;padding:10px 12px;border-top:1px solid rgba(255,255,255,.08);flex-shrink:0}',
    '.aw-input{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:8px 10px;color:#e2e8f0;font-size:12.5px;outline:none;transition:border-color .2s;font-family:inherit}',
    '.aw-input:focus{border-color:rgba(139,92,246,.4)}',
    '.aw-send{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border:none;border-radius:8px;padding:8px 14px;font-size:12.5px;font-weight:600;cursor:pointer;transition:all .2s;font-family:inherit}',
    '.aw-send:hover{filter:brightness(1.1)}.aw-send:disabled{opacity:.5;cursor:not-allowed}',
    /* 覆盖页面基础 cursor */
    '#aw-btn,#aw-panel,#aw-panel *{cursor:auto !important}',
    '#aw-btn,.aw-sug,.aw-send,.aw-close{cursor:pointer !important}',
    '.aw-input{cursor:text !important}',
    '@media(max-width:500px){#aw-panel{right:6px;bottom:6px;width:calc(100vw-12px);height:420px;border-radius:10px}}',
    '/* 内联 AI 按钮——出现在 h3/tip/概念旁边 */',
    'span.ai-inline{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,rgba(99,102,241,.4),rgba(139,92,246,.35));color:#c7d2fe;font-size:11px;cursor:pointer;margin:0 3px;vertical-align:middle;transition:all .2s;border:1px solid rgba(120,140,255,.25);user-select:none}',
    'span.ai-inline:hover{transform:scale(1.15);background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;box-shadow:0 0 10px rgba(99,102,241,.5)}'
  ].join('\n');
  document.head.appendChild(s);

  /* ---- 扫描页面上的 data-ai-q 标注，加上内联 💬 按钮 ---- */
  (function(){
    var triggers = document.querySelectorAll('[data-ai-q]');
    triggers.forEach(function(el){
      if(el.querySelector('.ai-inline')) return; // already has one
      var btn = document.createElement('span');
      btn.className = 'ai-inline';
      btn.textContent = '💬';
      btn.title = '问问 AI 关于这个概念';
      btn.addEventListener('click', function(e){
        e.stopPropagation(); e.preventDefault();
        panel.classList.add('open'); btn.style.display='none';
        ask(el.getAttribute('data-ai-q'));
        setTimeout(function(){ input.focus(); }, 300);
      });
      el.appendChild(btn);
    });
  })();

  /* ---- 旁白：用浏览器内置语音合成朗读本文（零资源、离线可用，替代缺失的 mp3） ---- */
  (function(){
    function speak(){
      if(!window.speechSynthesis) return;
      var btn = this;
      if(window.speechSynthesis.speaking){
        window.speechSynthesis.cancel();
        document.querySelectorAll('.tts-btn.playing').forEach(function(b){ b.classList.remove('playing'); b.textContent='🔊 朗读本文'; });
        return;
      }
      var text = (document.body.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 4000);
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN'; u.rate = 0.98;
      u.onend = function(){ btn.classList.remove('playing'); btn.textContent = '🔊 朗读本文'; };
      u.onerror = function(){ btn.classList.remove('playing'); btn.textContent = '🔊 朗读本文'; };
      try { window.speechSynthesis.speak(u); } catch (e) { return; }
      btn.classList.add('playing'); btn.textContent = '⏹ 停止朗读';
    }
    document.querySelectorAll('.audio-player').forEach(function(box){
      box.innerHTML = '';
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'tts-btn';
      btn.textContent = '🔊 朗读本文';
      btn.addEventListener('click', speak);
      box.appendChild(btn);
    });
  })();
})();