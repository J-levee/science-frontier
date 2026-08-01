# D. 缺失文档规格：数据 Schema 与采集运维文档

## 背景 / 为什么缺
`awards-data.js` 与 `frontier-data.json` 的字段约定只存在于代码里，无独立文档；
采集重跑说明散落在对话记忆与 `03-Data-Collection-Pipeline/` 脚本注释中。
数据同源矛盾（YAML↔JSON↔内联↔技能副本）也需在文档中敲定同步机制（见 README §5.6）。

## 目标读者
- 数据工程 Agent
- 任何需要重跑采集或扩展奖项的接手者

## 必须包含的章节
1. **awards-data.js Schema**（逐字段说明）：
   - `id`（slug，如 `nobel-physics-1975-aage-niels-bohr`）
   - `name` / `year` / `award`（中文奖名）/ `awardKey`（英文键）
   - `star` ∈ {`physics`, `life`, `compute`}（三星系归类）
   - `domain`（10 大领域中文名）
   - `motivation`（获奖理由，英文）
   - `affiliation` / `country`
   - `photo`（当前为空，预留）
   - `wikidata`（Q-id，富化锚）
   - `links[]`
   - 枚举表：`star` 取值、`domain` 10 值、`awardKey` 全量列表（约 23 个）
2. **frontier-data Schema**（109 问题字段）：
   - `id` / `domain` / `subdomain` / `title` / `description`
   - `current_state` / `key_directions[]` / `impact`(1-5) / `difficulty`(1-5) / `timeline`
   - `related[]` / `sources[]`（含 `text/url/type`，type∈{paper,official,preprint}）/ `last_updated`
3. **数据来源与权威源**：明确 `03/data/frontier-data.yaml`（YAML 源）为 109 问题唯一权威源；
   规定 `04/frontier-data.json·js` 与 `08/references/frontier-data.json` 为**派生副本**，给出重新生成命令与同步责任人。
4. **采集运维（collect_awards.py）**：
   - 用法：`--force` / `--source <key>` / 默认续采（resume）
   - 代理要求：采集期须开代理/VPN，脚本不硬编码代理
   - 缓存：`03/.../cache/`（nobel.json + qid_*/t1_*/wd_*.json），可离线续采
   - 限速：Wikidata SPARQL 2.5s/req + 429 指数退避
   - 体积上限：≤1500 条；富化率目标：100% Wikidata
5. **数据质量校验**：字段非空、wikidata 存在、star/domain 合法、year 范围合理；给出可执行校验命令。

## 验收标准
- 新人能看懂两份 schema 并**独立重跑采集且结果一致**（1482 条 / 100% 富化）。
- 数据同源矛盾有唯一权威源结论与同步机制。

## 依赖资产
- `03-Data-Collection-Pipeline/collect_awards.py` + `cache/`
- `04-Frontend-Site/awards-data.js`、`frontier-data.js`、`frontier-data.json`
- `03-Data-Collection-Pipeline/data/frontier-data.yaml`
- `08-Skill-Package/references/frontier-data.json`

## 建议负责 Agent 类型
数据工程 + 技术写作
