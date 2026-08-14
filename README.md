# 科学边界 · 事件视界观测站

> 一个面向公众（尤其农村地区与科学资源薄弱地区的青少年）的**公益可视化科普网站**。
> 用滚动叙事 + 星图，把人类在科学边界上的诺奖级发现，讲成能看见、能听懂、能追问的故事。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deploy: GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-green.svg)](https://j-levee.github.io/science-frontier/)
[![AI Proxy](https://img.shields.io/badge/AI-零前端密钥-brightgreen.svg)](#ai-科普问答)

🌐 在线 Demo：<https://j-levee.github.io/science-frontier/>

---

## ✨ 项目简介

「科学边界」把散落在物理学、化学、医学、数学、地球科学、人工智能等领域的**重大科学突破**，
组织成一条可滚动探索的叙事线索：从宇宙视界，到物质能源，到生命医学，到数学计算，到地球气候，到人工智能。

网站核心由四层构成：

1. **边界线（Boundary）** —— 人类认知的已知 / 未知分界。
2. **三体星系（Galaxy）** —— 用星系结构隐喻学科群与交叉。
3. **荣誉星图（Honor）** —— 1479 位诺奖及顶级奖项得主的星点可视化，100% 溯源。
4. **深度科普（Explainers）** —— 40 个专题，每个双栏呈现「科普故事」与「技术摘要」。

## 🎯 特性

- **滚动驱动叙事**：纯原生 HTML/CSS/JS（无前端框架），固定舞台 + 滚动进度驱动 5 屏。
- **荣誉星图**：1479 位科学家星点，悬停查看生卒、机构、获奖词原文与官方来源链接。
- **40 个深度科普专题**：6 大分类（宇宙物理 / 物质能源 / 生命医学 / 数学计算 / 地球气候 / 人工智能），每个含可溯源延伸阅读。
- **AI 科普问答**：划词提问 + 页面浮标，走服务端代理，**前端零密钥**（见下）。
- **朗读（TTS）**：Web Speech API 朗读科普故事，面向阅读障碍 / 低带宽场景。

## 🧱 技术栈

| 层 | 技术 |
|---|---|
| 前端 | 原生 HTML5 / CSS3 / ES2020、Canvas、SVG、Web Speech API |
| 数据 | 诺奖官方 API（确定性构造链接）+ Wikidata（CC BY-SA）、Commons 图片 |
| AI 代理 | Cloudflare Worker（`ai.sciencefrontier.cn`，服务端持有密钥，CORS 白名单） |
| 部署 | GitHub Pages（部署 `website/` 目录） |

## 📁 目录结构

```text
science-frontier/
├── website/                 # 主站（GitHub Pages 部署目录）
│   ├── index.html           # 站点首页（v11 叙事主交付物）
│   ├── explainers/          # 40 个深度科普专题 + 索引页
│   └── awards-data.js       # 1479 条获奖者数据（公开，100% 溯源）
├── tools/                   # 深度科普生成器与 40 题数据源（可复现）
├── scripts/                 # 数据采集 / 翻译 / 回归验证脚本
├── data/                    # 公开数据源（frontier-data.yaml）
├── build/                   # 预渲染构建脚本
├── tests/                   # puppeteer 回归测试套件
├── skill/                   # 配套讲解 Skill 包
└── .github/                 # Pages 部署工作流
```

## 🚀 本地预览

纯静态站点，两种方式有其一即可：

```bash
# 方式一：直接打开
open website/index.html        # 或浏览器拖入

# 方式二：起本地静态服务（推荐，避免 file:// 跨域）
python -m http.server 8080 --directory website
# 浏览器访问 http://localhost:8080
```

## 🤖 AI 科普问答

页面内置的 AI 提问功能**不**在前端存储任何 API Key：

- 请求统一发往服务端代理 `https://ai.sciencefrontier.cn`（Cloudflare Worker）。
- Worker 在服务端持有模型密钥，并按请求来源 `Origin` 做 CORS 白名单校验，防止被他人盗用。
- 自建部署时，把 `window.__AI_PROXY_URL` 指向你自己的代理即可；不配置则 AI 浮标提示「未启用」，不影响其余功能。

详见 [SECURITY.md](SECURITY.md)。

## 📊 数据来源与授权

- **获奖数据**：诺贝尔奖官方（`api.nobelprize.org` 确定性构造的来源页链接）+ Wikidata 补全（中文名 / 机构 / 照片 / 生卒年）。
- **科学家照片**：Wikimedia Commons（`Special:FilePath`，CC 授权），运行时按需拉取。
- **内容**：专题文案为原创科普写作，延伸阅读链接均指向官方 / 权威公开来源。

## 🤝 贡献

欢迎提 Issue 与 Pull Request。内容类修改请保持**可溯源、不虚构**；代码类修改请先跑 `tests/` 回归套件。

## 📄 许可证

- **代码**：[MIT License](LICENSE)
- **科普内容与图文**：CC BY 4.0（署名转载）

---

© 2026 科学边界项目 · 公益科普，自由传播。
