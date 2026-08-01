# 科学边界 Science Frontier — 设计文档

> 创建日期: 2026-07-26
> 状态: 阶段1完成（数据 + 网站 + Skill 初版）

## 项目目标

将当前世界最前沿的科学问题和探究方向系统性地列出，以两种形态服务用户：
- **产物 A**: 可视化知识库网站（可浏览、搜索、关联探索）
- **产物 C**: WorkBuddy Skill（对话式查询引擎）

## 架构

```
science-frontier/
├── data/
│   └── frontier-data.yaml       # 单一数据源 (109个问题 × 13字段)
├── website/
│   ├── index.html               # 静态网站 (含CSS/JS/D3.js)
│   └── frontier-data.json       # 从YAML转换
├── skill/
│   ├── SKILL.md                 # Skill定义
│   └── references/
│       └── frontier-data.json   # 从YAML转换
└── docs/
    └── design.md                # 本文档
```

核心原则：**单一数据源 → 双产物**。修改 frontier-data.yaml，重新生成 JSON，网站和 Skill 同步更新。

## 分类体系

10 大领域，109 个问题：

| # | 领域 | 问题数 | ID前缀 |
|---|------|--------|--------|
| 1 | 物理学 | 15 | PHY |
| 2 | 生命科学 | 20 | LIF |
| 3 | 数学与计算 | 12 | MAT |
| 4 | 宇宙学 | 10 | COS |
| 5 | 材料与能源 | 10 | ENG |
| 6 | 信息与智能 | 10 | INF |
| 7 | 地球科学与气候 | 8 | EAR |
| 8 | 化学 | 8 | CHE |
| 9 | 社会科学与认知 | 8 | SOC |
| 10 | 航天与太空探索 | 8 | SPA |

## 数据字段

每条问题包含 13 个字段：
- id, domain, subdomain, title, description
- current_state (当前进展)
- key_directions (关键研究方向, 数组)
- impact (1-5), difficulty (1-5)
- timeline (预计突破时间线)
- related (关联问题ID, 数组)
- sources (信息来源, 数组)
- last_updated

## 网站功能

- **领域总览**: 10个领域卡片 + 统计数字
- **领域详情**: 问题列表, 按影响力/难度/时间线/名称排序
- **问题详情**: 完整描述 + 当前进展 + 关键方向 + 评级 + 关联问题 + 来源
- **全文搜索**: 标题/描述/领域/子领域/关键方向
- **关联网络图**: D3.js force-directed graph, 可拖拽/缩放/点击

## Skill 查询模式

1. 领域浏览 → 返回摘要列表
2. 深度追问 → 返回结构化深度解答
3. 跨领域关联 → 返回关联问题分组
4. 探索引导 → 返回 TOP 问题推荐
5. 排行筛选 → 返回排序结果

## 后续计划

### 阶段2: 数据深化
- WebSearch 补充每个问题的最新进展和关键方向
- 补充关键研究者/机构信息
- 增加 emoji/标签系统

### 阶段3: 迭代
- 网站增加影响力热力图
- Skill 安装到 WorkBuddy 并测试
- 数据定期更新机制
