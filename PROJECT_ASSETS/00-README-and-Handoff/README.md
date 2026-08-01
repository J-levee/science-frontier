# 科学边界 (Science Frontier) — 项目资产交接总览

> 本文件夹是「科学边界」项目的**全部项目资产归类副本**，用于交付给其他 Agent 继续开发与重构。
> 源项目位置：`C:\Users\zyd\WorkBuddy\Claw\science-frontier\`
> 本副本生成时间：2026-08-01

---

## 0. 一句话定位

**科学边界**是一个"探索世界最前沿科学问题"的项目：用零依赖单文件静态站，把一个宏大的科学叙事（三体星系 + 109 个前沿问题 + 100% 溯源 + 预渲染讲解 + 1482 条顶级奖项数据）呈现给探索者。当前目标是参赛（8.13 初赛）与开源发布；长期目标是把这套叙事做成可交互、讲得透的体验。

---

## 1. 核心叙事（锁死，重构时勿动）

这些是产品的"灵魂"，已在 `04-Frontend-Site/index.html` 中落地，重构时**保留语义、可升级表现层，不要丢弃概念**：

- **边界线 / Hero**："站在已知的边缘，眺望未知的星海"——已知 vs 未知的张力。
- **三体星系**：三颗恒星 = 物理 / 生命 / 计算；其余 7 个领域 = 绕三体的行星（共 10 大领域）。
- **水滴探测器**：探索者视角的隐喻载体。
- **5 色语义**（CSS 变量，见 index.html `:root`）：
  - `--accent` 已知/探索（主叙事）
  - `--cool` 关联/桥接/时间线
  - `--warm` 突破/影响力
  - `--hot` 高难/未解
  - `--green` 可信/溯源
- **100% 溯源锚**：每个问题都带可点击的原始来源（论文/官方/预印本），这是品牌信任状，必须保留。
- **知识星座**：问题之间的关联网络。

**三星系奖项分布**（来自 `04-Frontend-Site/awards-data.js`）：物理 702 / 生命 499 / 计算 281，共 1482 条。

---

## 2. 进度总表（P0–P4 + 参赛 + 重构）

| 阶段 | 状态 | 说明 / 资产位置 |
|------|------|----------------|
| **P0 三体星系叙事 + 100% 溯源** | ✅ 已完成 | `04-Frontend-Site/index.html`（内联 109 问题 `window.DATA`） |
| **P1 多奖项采集** | ✅ 数据采集完成 ／ 🟡 前端接入为 TEMP | 数据 `04-Frontend-Site/awards-data.js`（1482 条，100% Wikidata 富化）；临时板块已上站，重构时整体替换 |
| **P2 研究者档案** | ❌ 未开始 | 规划中，见 `06-Missing-Docs-Specs/B-P2研究者档案_评审文档.md` |
| **P3 文献关联与探索者文献台** | 📋 仅规划 | `02-Review-Planning/P3规划_文献关联与探索者文献台.md` |
| **P4 预渲染讲解层** | ✅ 已完成 | `05-Prerendered-Explainers/`（build 管线 + 3 个讲解页：fusion / ai-alignment / kakeya） |
| **参赛 8.13 初赛** | 🟡 待交付 | 零 key 静态站 + 3 讲解；见 `06-Missing-Docs-Specs/C-部署与发布指南.md` |
| **前端重构** | ❌ 未开始（用户明确要求）| 当前设计交互感弱、讲不好故事；见 `06-Missing-Docs-Specs/A-前端重构_叙事与交互方案.md` |
| **开源发布** | 📋 仅规划 | `02-Review-Planning/开源终态架构规划.md` |

图例：✅ 已完成 ／ 🟡 部分完成或待交付 ／ 📋 仅规划 ／ ❌ 未开始

---

## 3. 资产清单（按文件夹）

### `01-Product-Narrative-Visual/` 产品叙事与视觉
| 文件 | 用途 |
|------|------|
| `design.md` | 原始设计文档（叙事结构、信息架构） |
| `视觉叙事方案.md` | 视觉叙事总体方案 |
| `视觉叙事规划_三体诺奖.md` | 三体星系 + 诺奖荣誉星图的叙事规划 |
| `前端优化评审_参赛UI打磨.md` | #22 动效加法层评审（滚动渐显/玻璃卡/Hover 等），含叙事保护红线 |
| `logo.svg` | 站点 Logo |

### `02-Review-Planning/` 评审与规划文档
| 文件 | 用途 |
|------|------|
| `P0评审文档_三体星系叙事.md` | P0 评审（已签批） |
| `P1评审文档_多奖项数据采集.md` | P1 原始方案（写于 GFW 阻断前提，已过时） |
| `P1采集方案_海外数据源增强版.md` | **P1 现行方案**（用户签批，代理增强版，取代上述过时前提） |
| `P3规划_文献关联与探索者文献台.md` | P3 规划 |
| `P4评审文档_预渲染讲解层.md` | P4 评审（已签批） |
| `参赛规划_小有可为2026.md` | 参赛整体规划 |
| `开源终态架构规划.md` | 开源长期架构规划 |

### `03-Data-Collection-Pipeline/` 数据采集管线
| 文件 / 目录 | 用途 |
|------|------|
| `collect_awards.py` | **主采集脚本**：Nobel v2 API（T0）+ Wikidata SPARQL（T1，20 奖）合并输出 `awards-data.js` |
| `_recon_sources.py` | 海外源可达性探测脚本（证据） |
| `_recon_result.txt` / `proxy_probe.txt` | 可达性探测结果（证明代理开启后海外基本全开） |
| `transform_sources.py` / `generate_report.py` / `data-inventory-report.md` | 源数据转换与数据盘点工具（来自 website/） |
| `data/frontier-data.yaml` | **109 问题的源数据（YAML 格式，权威源）** |
| `cache/` | 采集缓存（nobel.json + 各奖 qid_*/t1_*/wd_*.json），可离线续采、避免重复请求 |

### `04-Frontend-Site/` 前端站点（当前线上快照）
| 文件 | 用途 |
|------|------|
| `index.html` | **当前线上站点**（483KB 单文件，含 TEMP 荣誉星图板块） |
| `awards-data.js` | P1 产出：1482 条奖项数据（外链，不内联） |
| `frontier-data.js` / `frontier-data.json` | 109 问题数据（内联进 index.html 的同源副本） |

> ⚠️ `04-Frontend-Site/index.html` 是当前**实时快照**，含 P1 临时接入的"荣誉星图"板块（代码标记 `P1 荣誉星图 TEMP`）。重构时该板块整体替换。

### `05-Prerendered-Explainers/` 预渲染讲解层
| 文件 / 目录 | 用途 |
|------|------|
| `build/gen_explainer.py` | 讲解生成（调用百炼 LLM；无 key 时降级提取 109 真实问题） |
| `build/render_html.py` | 单文件讲解页模板渲染 |
| `build/render_video.py` | 视频衍生（依赖 ffmpeg / playwright，环境待补） |
| `build/templates/explainer.html` | 讲解页单文件模板（复用 5 色 + 玻璃卡 + 渐显） |
| `explainers/` | 已生成讲解页：fusion（核聚变）、ai-alignment（AI 对齐）、kakeya（挂谷猜想）+ 总览 index.html |

### `06-Missing-Docs-Specs/` 缺失文档规格（详见各文件）
A 前端重构·叙事与交互方案 ／ B P2 研究者档案·评审文档 ／ C 部署与发布指南 ／ D 数据 Schema 与采集运维 ／ E 测试与验证 ／ F 开源发布与贡献指南

### `07-Deployment-Delivery/` 部署与交付
> 当前**无**实际部署/发布文档，仅有 `02` 中的规划。此目录预留，待 `06/C` 规格落地后填充 runbook。

### `08-Skill-Package/` 技能封装
| 文件 | 用途 |
|------|------|
| `SKILL.md` | WorkBuddy 技能定义（slug: science-frontier, v1.0.0），把 109 问题封装为对话技能 |
| `references/frontier-data.json` | 技能引用的 109 问题数据（与 `04` 同源） |

---

## 4. 本地运行 / 验证方法

```bash
# 1) 预览静态站（在 04-Frontend-Site/ 或源 website/ 起服务）
cd 04-Frontend-Site
python -m http.server 8080
# 浏览器打开 http://127.0.0.1:8080/index.html （硬刷新 Ctrl+Shift+R）

# 2) 重跑奖项采集（需先开启代理/VPN；详见 03 与 06/D）
cd 03-Data-Collection-Pipeline
python collect_awards.py            # 用缓存续采
python collect_awards.py --force   # 强制全量重采
python collect_awards.py --source nobel   # 只重采某源

# 3) 生成讲解页（需 DASHSCOPE_API_KEY；否则走无 key 降级）
cd 05-Prerendered-Explainers/build
python gen_explainer.py            # 生成 narration
python render_html.py              # 渲染 HTML
python render_video.py             # 渲染视频（需 ffmpeg/playwright）
```

**环境约束**：构建机 `DASHSCOPE_API_KEY` 未配置时 `gen_explainer` 走 fallback（提取真实问题，无 LLM 撰写）；`render_video` 实际渲染需 ffmpeg/playwright（环境待补）。

---

## 5. 关键约定与雷区（务必先读，避免踩坑）

1. **协作铁律**：任何生产代码改动（不仅本站）必须先有**评审文档 + 用户签批**才能动手；用户说"继续/执行"只代表按既定方案继续，不扩大范围。
2. **零依赖单文件 + 离线优先**：主站是单 HTML 文件、无构建链；大于 300KB 的数据文件（如 `awards-data.js`）**外链不内联**（见 P1 方案 §5）。
3. **代理**：采集期须保持代理/VPN 开启；采集脚本**不硬编码代理地址**（系统路由已通）。
4. **叙事核心锁死**：边界线 / 三体星系 / 水滴 / 5 色语义 / 100% 溯源锚 / 知识星座——重构时保留概念，仅升级表现层。
5. **TEMP 标记**：`index.html` 中荣誉星图板块标记 `P1 荣誉星图 TEMP`，重构时整体替换，勿在旧设计上过度投入。
6. **数据同源矛盾（需澄清）**：`03/data/frontier-data.yaml`（YAML 源）↔ `04/frontier-data.json·js`（内联副本）↔ `08/references/frontier-data.json`（技能副本）三者是同一份 109 问题数据的不同形态。**接手 Agent 需确认唯一权威源与同步机制**，避免改了一处另一处过期。
7. **备份文件未纳入**：源项目中的 `index.html.bak`、`frontier-data.json.bak` 未复制（可再生成），请勿当作现行文件使用。
8. **GitHub 状态不明**：源项目是否推送到远程未核实，交接前建议先 `git status` / `git remote -v` 确认版本基线。

---

## 6. 缺失文档清单（详见 `06-Missing-Docs-Specs/`）

| 编号 | 缺失文档 | 为什么缺 | 建议负责 Agent 类型 |
|------|----------|----------|---------------------|
| **A** | 前端重构·叙事与交互方案（含荣誉星图正式设计） | 用户明确要求重构，但仅停留在概念讨论，无落地方案 | 视觉叙事 / 前端架构 |
| **B** | P2 研究者档案·评审文档 | P1 方案预留了 P2，但从未起草 | 技术写作 / 数据 |
| **C** | 部署与发布指南（含 8.13 参赛交付 runbook） | 仅有规划，无实际操作手册 | DevOps / 技术写作 |
| **D** | 数据 Schema 与采集运维文档 | awards-data / frontier-data 字段约定只在代码里，无独立文档；重跑说明散落 | 技术写作 / 数据工程 |
| **E** | 测试与验证文档 | jsdom 验证、数据校验、回归清单仅存于对话记忆 | QA / 技术写作 |
| **F** | 开源发布与贡献指南 | 仅有架构规划，无实际发布步骤 + CONTRIBUTING | 技术写作 / 开源运营 |

> 每份规格都已写在 `06/` 对应文件中，包含：背景、目标读者、必须包含的章节、验收标准、依赖资产、建议负责 Agent 类型。接手 Agent 可直接按规格产出正式文档。

---

## 7. 建议的下一步路线（给其他 Agent）

1. **先读**：本 README + `02` 全部评审文档 → 建立全局认知。
2. **澄清**：解决 §5.6 的数据同源矛盾（确定唯一权威源）。
3. **首选缺口 A**：起草《前端重构·叙事与交互方案》评审文档（用户已明确要求，且是体验最大杠杆）→ 用户签批后实施。
4. **并行可补 C/D/E**：部署 runbook、数据 schema 文档、测试文档不依赖重构，可独立推进。
5. **交付口径**：所有新增文档放进对应 `02`/`06` 并回写本 README 进度表。

---

## 8. 交接 Check-list

- [ ] 已读 README 与 `02` 评审文档
- [ ] 已确认 `data/frontier-data.yaml` 与网站内联数据的一致性策略
- [ ] 已确认 GitHub 版本基线（status / remote）
- [ ] 已选定首个缺口（建议 A）并起评审文档
- [ ] 任何生产改动前已走"评审文档 + 用户签批"流程
