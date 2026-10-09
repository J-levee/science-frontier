# 自建事件采集 Worker 部署说明

> 阶段二：前端埋点（`v11/tracker.js` + 主站/子页事件）已全部落地、可构建、已双推。
> 本目录是**可选的**后端落库服务——部署后才能看到真实数据；不部署时前端静默失败、不影响网站。

## 采集地址
- 前端默认上报到 `https://analytics.sciencefrontier.cn/collect`
  （构建期可通过 `SF_COLLECT_URL` 环境变量覆盖：`SF_COLLECT_URL=https://your.host/collect node _build_v11.js`）。
- 子页 `explainers/tracker.js` 内置同一默认值，无需逐个改。

## 部署步骤（需要本机有 wrangler + Cloudflare 账号）
1. 安装：`npm i -g wrangler`（或 `npx wrangler`）。
2. 登录：`wrangler login`。
3. 建库：`wrangler d1 create sciencefrontier_analytics` → 复制返回的 `database_id` 填进 `wrangler.toml` 的 `database_id`。
4. 建表：`wrangler d1 execute sciencefrontier_analytics --file=./schema.sql`（生产；加 `--local` 本地试）。
5. 部署：`wrangler deploy`。
6. DNS：在 Cloudflare 给 `analytics.sciencefrontier.cn` 建一条记录指向本 Worker（橙色云 / custom_domain）。
7. 验证：浏览器打开主站滚动几屏、点几下，然后
   `wrangler d1 execute sciencefrontier_analytics --command="SELECT name,COUNT(*) c FROM events GROUP BY name ORDER BY c DESC"` 应能看到 `screen_reach`、`star_click`、`pageview` 等。

## 阶段一（Cloudflare Web Analytics，零代码）
- 若 `sciencefrontier.cn` 已接入 Cloudflare，可在 Cloudflare 控制台「Web Analytics」添加站点，
  拿到 beacon token，再用 `SF_CF_TOKEN=xxxx node _build_v11.js` 重新构建主站即可自动加载官方信标。
- 子页如需阶段一，可在各子页 `<head>` 手动粘贴 Cloudflare 提供的 `<script>` 片段。

## 合规
- 全站零 PII：不记录 IP、不设用户标识、不做设备指纹；仅存事件名/负载/粗粒度 pathname/来源域名/时间戳。
- 尊重浏览器 Do Not Track：前端 `tracker.js` 检测到 DNT=1 时完全停止上报。
- 可经 `window.__SF_TRACK_DISABLED = true` 全局关闭（或 URL 参数、构建期注入）。
