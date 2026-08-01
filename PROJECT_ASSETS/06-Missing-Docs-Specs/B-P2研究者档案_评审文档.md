# B. 缺失文档规格：P2 研究者档案 · 评审文档

## 背景 / 为什么缺
P1 多奖项采集已产出 1482 位获奖者（`04-Frontier-Site/awards-data.js`，每条带 Wikidata Q-id）。
原 P1 规划预留了 **P2 研究者档案**（人物生平 / 贡献 / 关联问题 / 照片），但**从未起草评审文档**，也未实施。

## 目标读者
- 用户（签批）
- 数据工程 / P2 实施 Agent

## 必须包含的章节
1. **目标与范围**：覆盖哪些研究者（诺奖 + 其他奖得主？是否含非获奖者如领域奠基人）？与"探索者"用户的区别。
2. **数据模型**：建议字段 `name / wikidata / photo / affiliation / country / bio / birth/death / awards[] / related_problems[] / links[]`。明确 `related_problems` 如何关联到 109 问题（按 domain / 按关键词 / 手动策展）。
3. **与 P1 数据的关系**：是**扩展** `awards-data.js`（加 bio/photo 字段），还是新建独立的 `researchers-data.js`？给出结论与理由。
4. **数据来源与版权**：
   - Wikidata 富化（已有 Q-id，可补 photo/description/birth）
   - Wikipedia 摘要（多语言，注意 CC BY-SA 署名）
   - DBpedia / Wikimedia Commons 图片许可（照片必须合规，注明作者与许可）
5. **隐私与版权红线**：人物照片/生平的合理使用边界；不收录在世人物敏感信息。
6. **UI 呈现**：研究者档案页、搜索/筛选、与三体星系/荣誉星图的关联入口。
7. **采集管线**：能否并入 `03-Data-Collection-Pipeline/collect_awards.py`（复用 Wikidata 节流与缓存）？还是独立脚本？
8. **验收标准**：见下。

## 验收标准
- 数据模型字段明确、可机器生成。
- 与 P1 数据结构关系清晰（扩展 vs 独立）。
- 给出版权合规方案（图片许可 + 署名）。
- 用户签批通过。

## 依赖资产
- `03-Data-Collection-Pipeline/collect_awards.py`（可复用 Wikidata 节流/缓存范式）
- `04-Frontend-Site/awards-data.js`（已有 wikidata Q-id，是 P2 的起点）
- `02-Review-Planning/P1采集方案_海外数据源增强版.md`（P2 提及处）
- `04-Frontier-Site/frontier-data.*`（用于 related_problems 关联）

## 建议负责 Agent 类型
技术写作 + 数据工程（先出评审文档，签批后再采集）
