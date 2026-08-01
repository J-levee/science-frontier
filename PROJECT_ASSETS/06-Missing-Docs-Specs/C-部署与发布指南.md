# C. 缺失文档规格：部署与发布指南（含 8.13 参赛交付 runbook）

## 背景 / 为什么缺
仅有规划文档（`02-Review-Planning/参赛规划_小有可为2026.md`、`开源终态架构规划.md`），**无实际操作手册**。
8.13 初赛交付在即（零 key 静态站 + 3 讲解页），需要一份任何人按文档即可上线的 runbook。
当前 `07-Deployment-Delivery/` 为空，待本规格落地后填充。

## 目标读者
- DevOps / 交付 Agent
- 参赛提交负责人

## 必须包含的章节
1. **构建/打包**：当前主站零构建（单 HTML 直接静态托管）；若前端重构引入构建链，补构建步骤（`npm run build` 等）与产物目录。
2. **托管选项对比**：静态托管 / EdgeOne Pages / GitHub Pages / Vercel——各自步骤、自定义域名、HTTPS、CDN。
3. **参赛交付清单（8.13）**：
   - 零 key 静态站（index.html + awards-data.js + frontier-data.* + explainers/）
   - 3 个讲解页（fusion / ai-alignment / kakeya，见 `05-Prerendered-Explainers/explainers/`）
   - 提交材料清单（报名表、演示链接、说明文档）
4. **环境变量与密钥管理**：百炼 `DASHSCOPE_API_KEY` **仅构建期使用，严禁入仓库**（见 README §4、§5）；讲解页产物零 key 可看。
5. **回滚方案**：保留上一版产物 / 用 git tag。
6. **Smoke Test**：部署后验证清单（首页加载、奖项板块渲染、讲解页打开、溯源链接可点）。
7. **监控与告警**（可选）：可用性、报错收集。

## 验收标准
- 新人按文档 **30 分钟内** 完成一次上线。
- 8.13 前可按清单交付参赛材料。
- 文档中的密钥处理不泄露任何 secret。

## 依赖资产
- `04-Frontend-Site/`（站点快照）
- `05-Prerendered-Explainers/`（讲解层 + 生成脚本）
- 本 README §4（本地运行）、§5（雷区）

## 建议负责 Agent 类型
DevOps / 技术写作
