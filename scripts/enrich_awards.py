#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
D1-2 数据 enrichment（A 部分：domain-only 兜底映射，零 API 依赖）
- 给 awards-data.js 每条获奖者补 problemLinks（关联 109 问题中同领域者）
- 给 frontier-data 每条问题补 laureate_links（关联同领域获奖者）
- 同步 website/index.html 内联 window.DATA，保持数据同源
映射依据：awards.domain 细类 -> 三体 star -> frontier.domain
（已验证：物理类702 / 生命科学499 / 计算类281 与 star 分布严丝合缝）
"""
import json
import re
import os
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WEBSITE = os.path.join(ROOT, "website")

# awards.domain 细类 -> 目标 frontier.domain 列表
AWARD_DOMAIN_TO_FRONTIER = {
    "物理": ["物理学", "宇宙学", "材料与能源", "地球科学与气候", "航天与太空探索"],
    "物理学": ["物理学"],
    "宇宙学": ["宇宙学"],
    "化学": ["化学"],
    "材料与能源": ["材料与能源"],
    "生命科学": ["生命科学"],
    "信息与智能": ["信息与智能"],
    "数学与计算": ["数学与计算"],
}

# 反向：frontier.domain -> 匹配的 awards.domain 集合
frontier_to_award = defaultdict(set)
for ad, fds in AWARD_DOMAIN_TO_FRONTIER.items():
    for fd in fds:
        frontier_to_award[fd].add(ad)


def load_awards():
    p = os.path.join(WEBSITE, "awards-data.js")
    with open(p, encoding="utf-8") as f:
        text = f.read()
    m = re.search(r"const awards = (\[.*?\]);", text, re.S)
    return json.loads(m.group(1)), text[: m.start()], text[m.end():]


def load_frontier():
    p = os.path.join(WEBSITE, "frontier-data.js")
    with open(p, encoding="utf-8") as f:
        text = f.read()
    m = re.search(r"window\.DATA\s*=\s*(\[.*?\]);", text, re.S)
    return json.loads(m.group(1))


def main():
    awards, aheader, atail = load_awards()
    frontier = load_frontier()

    # 生成 problemLinks（获奖者 -> 同领域问题）
    for a in awards:
        fds = AWARD_DOMAIN_TO_FRONTIER.get(a.get("domain"), [])
        a["problemLinks"] = [f["id"] for f in frontier if f.get("domain") in fds]
        # discovery 字段若已存在则保留（当前应为空，由 B 部分翻译填充）

    # 生成 laureate_links（问题 -> 同领域获奖者）
    for f in frontier:
        fd = f.get("domain")
        ads = frontier_to_award.get(fd, set())
        f["laureate_links"] = [a["id"] for a in awards if a.get("domain") in ads]

    # 写回 awards-data.js（保留头部注释，格式化带空格，与原有风格一致）
    with open(os.path.join(WEBSITE, "awards-data.js"), "w", encoding="utf-8") as f:
        f.write(aheader)
        f.write("const awards = [\n")
        f.write(",\n".join("  " + json.dumps(a, ensure_ascii=False) for a in awards))
        f.write("\n];\n")
        f.write(atail)

    # 写回 frontier-data.js（紧凑，与原有风格一致）
    frontier_js = "window.DATA = " + json.dumps(frontier, ensure_ascii=False, separators=(",", ":")) + ";\n"
    with open(os.path.join(WEBSITE, "frontier-data.js"), "w", encoding="utf-8") as f:
        f.write(frontier_js)
    with open(os.path.join(WEBSITE, "frontier-data.json"), "w", encoding="utf-8") as f:
        json.dump(frontier, f, ensure_ascii=False, indent=2)

    # 同步 index.html 内联 window.DATA
    ipath = os.path.join(WEBSITE, "index.html")
    with open(ipath, encoding="utf-8") as f:
        itext = f.read()

    def repl(m):
        return "window.DATA = " + json.dumps(frontier, ensure_ascii=False, separators=(",", ":")) + ";"

    new_itext, n = re.subn(r"window\.DATA\s*=\s*\[.*?\];", repl, itext, flags=re.S)
    if n != 1:
        print(f"WARN: index.html 内联 window.DATA 替换次数={n}（预期1）")
    with open(ipath, "w", encoding="utf-8") as f:
        f.write(new_itext)

    # 统计
    pl_total = sum(len(a["problemLinks"]) for a in awards)
    ll_total = sum(len(f["laureate_links"]) for f in frontier)
    print(f"awards 总数: {len(awards)} | 有 problemLinks: {sum(1 for a in awards if a['problemLinks'])} | problemLinks 合计: {pl_total}")
    print(f"frontier 总数: {len(frontier)} | 有 laureate_links: {sum(1 for f in frontier if f['laureate_links'])} | laureate_links 合计: {ll_total}")
    print(f"index.html 内联同步替换次数: {n}")


if __name__ == "__main__":
    main()
