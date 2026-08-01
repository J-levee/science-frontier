# F. 缺失文档规格：开源发布与贡献指南

## 背景 / 为什么缺
仅有长期架构规划（`02-Review-Planning/开源终态架构规划.md`），**无实际发布步骤与 CONTRIBUTING**。
项目计划开源（零 key 静态站 + 技能封装 `08-Skill-Package/`），需要可操作的发布与贡献流程。

## 目标读者
- 开源运营 Agent
- 外部贡献者

## 必须包含的章节
1. **开源目标与许可证建议**：明确许可（如 MIT）、署名要求、数据（Wikidata/诺贝尔奖数据）的归属与许可声明。
2. **仓库结构**：基于本 `PROJECT_ASSETS` 归类为开源仓库布局（保留 00–08 分类或扁平化）；顶层 README 指向本交接 README。
3. **发布步骤**：
   - GitHub 建仓 / 组织归属
   - 打 tag（语义化版本）
   - 顶层 README 编写（定位 + 快速开始 + 截图）
   - 徽章（build/license/版本）
4. **贡献指南 CONTRIBUTING**：
   - 如何新增一个前沿问题（改 `data/frontier-data.yaml` → 重新生成内联）
   - 如何新增一个奖项源（扩 `collect_awards.py` + 加 Q-id + 重跑）
   - 如何修改叙事（遵循叙事核心锁死红线，见 README §5.4）
   - 提交前跑验证（见规格 E）
5. **Issue / PR 模板**：Bug / 新增问题 / 新增奖项 三类模板。
6. **密钥与数据安全**：百炼 key 仅构建期、严禁入仓；`.gitignore` 示例。
7. **社区运营（可选）**：Discussions / 反馈渠道。

## 验收标准
- 外部贡献者按文档可成功提交一个 PR（例如新增一个奖项源并跑通采集）。
- 仓库含 LICENSE、CONTRIBUTING、顶层 README、.gitignore。

## 依赖资产
- `02-Review-Planning/开源终态架构规划.md`
- 本 README（总览 + 资产清单 + 雷区）
- `03-Data-Collection-Pipeline/collect_awards.py`（贡献扩展点）
- `08-Skill-Package/`（技能封装形态参考）

## 建议负责 Agent 类型
开源运营 + 技术写作
