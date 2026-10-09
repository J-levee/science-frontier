/* ===== 科学边界 · 轻量统计采集（无 Cookie / PIPL 友好）=====
 *
 * 阶段一（可选）：Cloudflare Web Analytics
 *   - 配置 window.__SF_CF_TOKEN（构建期由 SF_CF_TOKEN 环境变量注入）后，
 *     自动加载 Cloudflare 官方信标脚本。零代码、无 Cookie、符合 PIPL。
 *
 * 阶段二（自建事件采集）：window.SF_TRACK.event(name, payload)
 *   - 默认 POST 到 window.__SF_COLLECT_URL（构建期由 SF_COLLECT_URL 注入），
 *     缺省兜底 analytics.sciencefrontier.cn/collect（需自行部署 Worker+D1）。
 *   - 尊重 Do Not Track；可经 window.__SF_TRACK_DISABLED 关闭；支持采样率。
 *   - 失败静默、绝不抛错、绝不阻塞主流程；优先 sendBeacon，其次 fetch(keepalive)。
 *
 * 合规：全站零 PII。采集字段仅含事件名/负载/粗粒度 pathname/来源域名/时间戳，
 *       不记录 IP、不设用户标识、不做设备指纹。
 */
(function () {
  'use strict';

  /* ---- 配置（可由构建或父页注入）---- */
  var COLLECT_URL = (window.__SF_COLLECT_URL || 'https://analytics.sciencefrontier.cn/collect');
  var CF_TOKEN    = (window.__SF_CF_TOKEN || '');
  var SAMPLE      = (typeof window.__SF_SAMPLE_RATE === 'number') ? window.__SF_SAMPLE_RATE : 1; // 0..1
  var DISABLED    = !!(window.__SF_TRACK_DISABLED);

  /* 尊重 Do Not Track */
  try {
    var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    if (dnt === '1' || dnt === 'yes' || dnt === 1) DISABLED = true;
  } catch (e) {}

  /* ---- 阶段一：Cloudflare Web Analytics 信标（仅当配置了 token）---- */
  if (CF_TOKEN && !DISABLED) {
    try {
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      s.defer = true;
      s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
      document.head.appendChild(s);
    } catch (e) { /* 静默 */ }
  }

  /* ---- 发送实现 ---- */
  function send(name, payload) {
    if (DISABLED) return;
    try {
      if (SAMPLE < 1 && Math.random() > SAMPLE) return; // 采样
      var body = {
        n: name,                                                          // 事件名
        p: (payload && typeof payload === 'object') ? payload : {},       // 事件负载
        t: Date.now(),                                                    // 客户端时间戳
        v: 1,                                                             // 采集协议版本
        pg: location.pathname,                                            // 仅 pathname，无查询串/无 PII
        ref: document.referrer ? document.referrer.replace(/[?#].*$/, '') : '' // 仅来源域名/路径，去参数
      };
      var json = JSON.stringify(body);

      // 1) sendBeacon：页面卸载也能送达，且不触发 CORS 预检（text/plain 简单请求）
      if (navigator.sendBeacon) {
        try { if (navigator.sendBeacon(COLLECT_URL, json)) return; } catch (e) {}
      }
      // 2) fetch keepalive：页面存活时更可靠
      if (window.fetch) {
        try {
          fetch(COLLECT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json,
            keepalive: true,
            mode: 'cors'
          });
          return;
        } catch (e) {}
      }
      // 3) 兜底 Image 信标（GET，参数化，仅用于极端降级）
      try {
        var img = new Image();
        img.src = COLLECT_URL + '?n=' + encodeURIComponent(name) +
                   '&t=' + body.t + '&pg=' + encodeURIComponent(body.pg);
      } catch (e) {}
    } catch (e) { /* 静默失败，绝不抛错 */ }
  }

  /* ---- 公共 API ---- */
  var SF_TRACK = {
    event: function (name, payload) { send(name, payload); },
    pageview: function () { send('pageview', {}); },
    setCollectUrl: function (u) { if (u) COLLECT_URL = u; },
    disable: function () { DISABLED = true; },
    enable: function () { DISABLED = false; },
    isDisabled: function () { return DISABLED; }
  };
  window.SF_TRACK = SF_TRACK;

  /* ---- 初始 pageview（延迟到 load，不阻塞首屏）---- */
  if (!DISABLED) {
    if (document.readyState === 'complete') {
      setTimeout(function () { SF_TRACK.pageview(); }, 0);
    } else {
      window.addEventListener('load', function () { SF_TRACK.pageview(); });
    }
  }
})();
