-- 科学边界 · 事件采集 D1 表结构
-- 执行：wrangler d1 execute sciencefrontier_analytics --local --file=./schema.sql
--       （生产：去掉 --local；或到 Cloudflare 控制台 D1 执行）

CREATE TABLE IF NOT EXISTS events (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT    NOT NULL,        -- 事件名：pageview / screen_reach / star_click / ai_chat_open / ai_chat_send / ai_chat_err / tts_speak / tts_copy / honor_expand / detail_open / rail_click / teach_open / hot_click / explainer_open / text_select
  payload    TEXT,                    -- 事件负载 JSON（screen/beam/id/tier/dom/ok/mode/len/slug ...）
  pg         TEXT,                    -- 粗粒度 pathname（无查询串、无 PII）
  ref        TEXT,                    -- 来源域名/路径（去参数）
  t          INTEGER,                 -- 客户端时间戳（毫秒）
  created_at INTEGER                 -- 入库时间戳（毫秒）
);

CREATE INDEX IF NOT EXISTS idx_events_name     ON events(name);
CREATE INDEX IF NOT EXISTS idx_events_created   ON events(created_at);
CREATE INDEX IF NOT EXISTS idx_events_pg       ON events(pg);

-- 常用分析视图（可选）：
-- 各屏到达率：SELECT name, COUNT(*) FROM events WHERE name='screen_reach' GROUP BY payload->>'$.screen';
-- 事件总量：  SELECT name, COUNT(*) c FROM events GROUP BY name ORDER BY c DESC;
-- 按日趋势：  SELECT strftime('%Y-%m-%d', created_at/1000,'unixepoch') d, COUNT(*) c FROM events GROUP BY d ORDER BY d;
