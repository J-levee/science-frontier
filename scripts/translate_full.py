#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
D1-2 B 部分全量翻译：awards.motivation(英文) -> discovery(中文)
- 断点续传：已有 discovery 且非 ERROR 的跳过
- 并发(默认5) + 重试(3) + 分批写回(每50条)
- 读取 .env 的 DASHSCOPE_API_KEY；端点/模型可经 LLM_BASE_URL / LLM_MODEL 覆盖
- WORKERS 环境变量控制并发数
写回时保留 awards 全部既有字段（含 A 部分生成的 problemLinks）。
"""
import json
import re
import os
import time
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

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


def translate(text, api_key, base_url, model, retries=3):
    body = json.dumps({
        "model": model,
        "messages": [
            {"role": "system", "content": "你是科学翻译助手。将英文诺贝尔奖/顶级奖项获奖理由翻译成中文，保持专业、简洁，不超过80字。"},
            {"role": "user", "content": text},
        ],
        "temperature": 0.3,
    }).encode("utf-8")
    for i in range(retries):
        try:
            req = urllib.request.Request(
                base_url.rstrip("/") + "/chat/completions",
                data=body,
                headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
            )
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.loads(r.read().decode("utf-8"))["choices"][0]["message"]["content"].strip()
        except Exception as e:
            if i == retries - 1:
                return f"ERROR: {e}"
            time.sleep(2)
    return "ERROR"


def write_back(awards, aheader, atail, path):
    with open(path, "w", encoding="utf-8") as f:
        f.write(aheader)
        f.write("const awards = [\n")
        f.write(",\n".join("  " + json.dumps(a, ensure_ascii=False) for a in awards))
        f.write("\n];\n")
        f.write(atail)


def main():
    env = load_env(os.path.join(ROOT, ".env"))
    api_key = env.get("DASHSCOPE_API_KEY", "")
    base_url = os.environ.get("LLM_BASE_URL", "https://dashscope.aliyuncs.com/compatible-mode/v1")
    model = os.environ.get("LLM_MODEL", "qwen-plus")
    workers = int(os.environ.get("WORKERS", "5"))

    p = os.path.join(WEBSITE, "awards-data.js")
    text = open(p, encoding="utf-8").read()
    m = re.search(r"const awards = (\[.*?\]);", text, re.S)
    awards = json.loads(m.group(1))
    aheader = text[: m.start()]
    atail = text[m.end():]

    pending = [a for a in awards if not a.get("discovery") or str(a.get("discovery")).startswith("ERROR")]
    print(f"pending(待翻译): {len(pending)} | workers: {workers} | model: {model}")

    def work(a):
        a["discovery"] = translate(a.get("motivation", ""), api_key, base_url, model)

    done = 0
    errors = 0
    with ThreadPoolExecutor(max_workers=workers) as ex:
        futs = {ex.submit(work, a): a for a in pending}
        for fut in as_completed(futs):
            fut.result()
            done += 1
            if str(futs[fut].get("discovery", "")).startswith("ERROR"):
                errors += 1
            if done % 50 == 0:
                write_back(awards, aheader, atail, p)
                print(f"progress {done}/{len(pending)} errors={errors}")
    write_back(awards, aheader, atail, p)
    print(f"DONE total={len(pending)} errors={errors}")


if __name__ == "__main__":
    main()
