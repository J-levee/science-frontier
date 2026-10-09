/* ===== 科学边界 · 自建事件采集 Worker（Cloudflare Workers + D1）=====
 *
 * 端点：POST /collect
 *   - 接收前端 window.SF_TRACK 上报的 JSON：{n,name; p,payload; t; pg; ref}
 *   - sendBeacon 发送的是 text/plain 字符串（简单请求，无预检）；fetch(keepalive)
 *     发送 application/json 会触发 OPTIONS 预检，故本 Worker 显式处理 OPTIONS。
 *   - 写入 D1 events 表；入库失败不影响前端（静默）。
 *   - 零 PII：仅存事件名/负载/粗粒度 pathname/来源域名/时间戳。
 */
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS 白名单（与 AI 代理一致；非白名单返回 null 拒绝，防盗用烧额度）
    const ALLOWED = ['j-levee.github.io', 'sciencefrontier.cn', 'www.sciencefrontier.cn'];
    const origin = request.headers.get('Origin') || '';
    const allow = ALLOWED.some(function (d) {
      return origin === 'https://' + d || origin === 'http://' + d;
    }) ? origin : null;
    const cors = {
      'Access-Control-Allow-Origin': allow || 'null',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin'
    };

    // 预检
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    // 健康检查 / 说明
    if (url.pathname !== '/collect') {
      return new Response('sciencefrontier analytics collector', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    if (request.method !== 'POST') {
      return new Response('method not allowed', { status: 405, headers: cors });
    }

    // 解析 body：sendBeacon 发的是原始 JSON 字符串（text/plain）
    let body = null;
    try {
      const text = await request.text();
      body = JSON.parse(text);
    } catch (e) {
      return new Response('bad request', { status: 400, headers: cors });
    }

    const name = String(body.n || 'unknown').slice(0, 64);
    const payload = (body.p && typeof body.p === 'object') ? body.p : {};
    const pg = String(body.pg || '').slice(0, 255);
    const ref = String(body.ref || '').slice(0, 255);
    const t = Number(body.t) || Date.now();

    // 入库（失败静默，绝不抛给前端）
    try {
      await env.DB.prepare(
        'INSERT INTO events (name, payload, pg, ref, t, created_at) VALUES (?, ?, ?, ?, ?, ?)'
      ).bind(
        name,
        JSON.stringify(payload),
        pg,
        ref,
        t,
        Date.now()
      ).run();
    } catch (e) {
      console.error('analytics insert failed:', e.message);
    }

    return new Response('ok', { status: 200, headers: cors });
  }
};
