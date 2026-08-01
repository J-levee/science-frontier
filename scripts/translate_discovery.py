#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
D1-2 数据 enrichment（B 部分：LLM 中译 discovery）
- 读取 .env 的 DASHSCOPE_API_KEY
- 将 awards.motivation（英文获奖理由）翻译为 discovery（中文）
- 支持 OpenAI 兼容端点（BASE_URL / MODEL 可经环境变量覆盖）
- 本脚本默认只做「小批量连通测试」：翻译前 N 条，打印结果，不写回；
  全量翻译请在确认端点连通后，将 TEST_ONLY 设为 False 并运行。

注意：API key 形状非标准 DashScope（sk-ws-...），默认端点若 401，
请通过环境变量 LLM_BASE_URL / LLM_MODEL 指定正确的兼容端点。
"""
import json
import re
import os
import sys
import urllib.request
import urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WEBSITE = os.path.join(ROOT, "website")


def load_env(path):
    env = {}
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if "=" in line:
                    k, v = line.split("=", 1)
                    env[k.strip()] = v.strip()
    return env


def translate(text, api_key, base_url, model):
    body = json.dumps({
        "model": model,
        "messages": [
            {"role": "system", "content": "你是科学翻译助手。将英文诺贝尔奖/顶级奖项获奖理由翻译成中文，保持专业、简洁，不超过80字。"},
            {"role": "user", "content": text},
        ],
        "temperature": 0.3,
    }).encode("utf-8")
    req = urllib.request.Request(
        base_url.rstrip("/") + "/chat/completions",
        data=body,
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data["choices"][0]["message"]["content"].strip()
    except urllib.error.HTTPError as e:
        return f"HTTP_ERROR {e.code}: {e.read().decode('utf-8')[:200]}"
    except Exception as e:
        return f"ERROR: {e}"


def main():
    TEST_ONLY = True          # True=仅测试前 N 条，不写回
    N = int(os.environ.get("TEST_N", "2"))

    env = load_env(os.path.join(ROOT, ".env"))
    api_key = env.get("DASHSCOPE_API_KEY", "")
    base_url = os.environ.get("LLM_BASE_URL", "https://dashscope.aliyuncs.com/compatible-mode/v1")
    model = os.environ.get("LLM_MODEL", "qwen-plus")

    if not api_key:
        print("ERROR: 未读取到 DASHSCOPE_API_KEY（检查 .env）")
        sys.exit(1)

    p = os.path.join(WEBSITE, "awards-data.js")
    with open(p, encoding="utf-8") as f:
        text = f.read()
    m = re.search(r"const awards = (\[.*?\]);", text, re.S)
    awards = json.loads(m.group(1))
    aheader = text[: m.start()]
    atail = text[m.end():]

    pending = [a for a in awards if not a.get("discovery")]
    print(f"待翻译总数: {len(pending)} | 本次测试条数: {min(N, len(pending))}")

    for a in pending[:N]:
        print(f"\n[{a['id']}] ({a.get('award','')} {a.get('year','')})")
        print(f"  EN: {a.get('motivation','')[:120]}")
        zh = translate(a.get("motivation", ""), api_key, base_url, model)
        print(f"  ZH: {zh[:120]}")

    if TEST_ONLY:
        print("\n[TEST_ONLY] 未写回。确认端点连通后设 TEST_ONLY=False 运行全量。")
        return

    # 全量翻译
    for a in pending:
        a["discovery"] = translate(a.get("motivation", ""), api_key, base_url, model)
        print(f"translated {a['id']}")

    with open(p, "w", encoding="utf-8") as f:
        f.write(aheader)
        f.write("const awards = [\n")
        f.write(",\n".join("  " + json.dumps(a, ensure_ascii=False) for a in awards))
        f.write("\n];\n")
        f.write(atail)
    print(f"\n全量写回完成：{len(pending)} 条 discovery 已生成。")


if __name__ == "__main__":
    main()
