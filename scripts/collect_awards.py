#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
collect_awards.py — Science Frontier P1 多奖项数据采集（代理增强版）

数据源：
  T0  Nobel v2 API            -> 物理/化学/生理学或医学 全量
  T1  Wikidata SPARQL         -> 20 个具体顶级科学奖项（按硬编码奖项 Q-id 取获奖者）

特性：
  - 离线优先：一次性采集落地 website/awards-data.js，运行时零网络
  - 可续采：每源结果缓存 scripts/cache/<name>.json；--resume 复用缓存
  - 节流 + 429 退避：SPARQL 2.5s、Nobel 0.5s；429 指数退避
  - 科学边界过滤 + 去重 + 体积控制(<=1500)

用法：
  python collect_awards.py                 # 全量采集并写 awards-data.js
  python collect_awards.py --resume       # 复用缓存，只补缺失源
  python collect_awards.py --source nobel # 只跑单个源
  python collect_awards.py --no-write     # 只采集打印统计，不写文件
"""
import ssl, json, time, os, re, argparse, urllib.request, urllib.error, urllib.parse, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, "scripts", "cache")
OUT = os.path.join(ROOT, "website", "awards-data.js")
UA = "science-frontier-collector/1.0 (research data collection; contact zhangyadong8909@agent.qq.com)"
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

LAST = {}
def throttle(key, sec):
    now = time.time()
    last = LAST.get(key, 0)
    wait = sec - (now - last)
    if wait > 0:
        time.sleep(wait)
    LAST[key] = time.time()

def get_json(url, timeout=30, retries=4):
    last_err = None
    for i in range(retries):
        try:
            throttle("net", 0.4)
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
                return json.loads(r.read().decode("utf-8", "replace"))
        except urllib.error.HTTPError as e:
            last_err = e
            if e.code == 429:
                bw = min(60, 5 * (2 ** i))
                print(f"    [429] 退避 {bw}s ...")
                time.sleep(bw)
                continue
            raise
        except Exception as e:
            last_err = e
            time.sleep(2 * (i + 1))
    raise last_err

def cache_load(name):
    p = os.path.join(CACHE, name + ".json")
    if os.path.exists(p):
        with open(p, encoding="utf-8") as f:
            return json.load(f)
    return None

def cache_save(name, data):
    os.makedirs(CACHE, exist_ok=True)
    with open(os.path.join(CACHE, name + ".json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)

def slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode("ascii")
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s.lower()).strip("-")
    return s or "x"

# ---------- T0 Nobel ----------
def fetch_nobel(force=False):
    cached = None if force else cache_load("nobel")
    if cached is not None:
        print(f"[nobel] 缓存命中 ({len(cached)} 条)")
        return cached
    print("[nobel] 分页拉取 v2 API ...")
    out = []
    offset = 0
    total = None
    while True:
        url = f"https://api.nobelprize.org/2.1/laureates?limit=100&offset={offset}"
        d = get_json(url)
        if total is None:
            total = d.get("meta", {}).get("count", 0)
        for L in d.get("laureates", []):
            name = (L.get("fullName") or {}).get("en") or (L.get("orgName") or {}).get("en") or ""
            if not name:
                continue
            wd = L.get("wikidata")
            if isinstance(wd, dict):
                wd = wd.get("id") or wd.get("conceptid") or ""
            elif not isinstance(wd, str):
                wd = ""
            for P in L.get("nobelPrizes", []):
                cat = P.get("category") or {}
                cen = (cat.get("en") or "").lower()
                if cen not in ("physics", "chemistry", "physiology or medicine"):
                    continue
                if cen == "physics":
                    star, domain, zh, catkey = "physics", "物理", "诺贝尔物理学奖", "nobel-physics"
                elif cen == "chemistry":
                    star, domain, zh, catkey = "physics", "化学", "诺贝尔化学奖", "nobel-chemistry"
                else:
                    star, domain, zh, catkey = "life", "生命科学", "诺贝尔生理学或医学奖", "nobel-medicine"
                aff = (P.get("affiliations") or [])
                aff_name = (aff[0].get("name") or {}).get("en") if aff else ""
                country = (aff[0].get("country") or {}).get("en") if aff else ""
                yr = int(P.get("awardYear", 0) or 0)
                out.append({
                    "id": f"{catkey}-{yr}-{slug(name)}",
                    "name": name,
                    "year": yr,
                    "award": zh,
                    "awardKey": catkey,
                    "star": star, "domain": domain,
                    "motivation": (P.get("motivation") or {}).get("en", "") or "",
                    "affiliation": aff_name or "",
                    "country": country or "",
                    "photo": "",
                    "wikidata": wd,
                    "links": [],
                })
        if total is not None and offset + 100 >= total:
            break
        offset += 100
        if len(out) > 5000:
            break
    cache_save("nobel", out)
    print(f"[nobel] 完成 {len(out)} 条")
    return out

# ---------- T1 Wikidata（硬编码 Q-id，避免搜索歧义） ----------
# (key, 中文奖名, Wikidata Q-id, star, domain)
T1_AWARDS = [
    ("fields",       "菲尔兹奖",               "Q28835",    "compute", "数学与计算"),
    ("abel",         "阿贝尔奖",               "Q188184",   "compute", "数学与计算"),
    ("turing",       "图灵奖",                 "Q185667",   "compute", "信息与智能"),
    ("bt-math",      "突破奖·数学",            "Q17278380", "compute", "数学与计算"),
    ("shaw-math",    "邵逸夫数学科学奖",         "Q57232963", "compute", "数学与计算"),
    ("wolf-math",    "沃尔夫数学奖",            "Q915604",   "compute", "数学与计算"),
    ("bt-physics",   "突破奖·基础物理",         "Q1314470",  "physics", "物理学"),
    ("shaw-astro",   "邵逸夫天文学奖",          "Q57232945", "physics", "宇宙学"),
    ("kavli-astro",  "克拉福德天文学奖",         "Q18889778", "physics", "宇宙学"),
    ("kavli-nano",   "克拉福德纳米科学奖",       "Q18889779", "physics", "材料与能源"),
    ("kyoto-basic",  "京都奖基础科学",          "Q18344281", "physics", "物理学"),
    ("wolf-physics", "沃尔夫物理学奖",          "Q845333",   "physics", "物理学"),
    ("gruber-cosmo", "格鲁伯宇宙学奖",          "Q1483071",  "physics", "宇宙学"),
    ("bt-life",      "突破奖·生命科学",         "Q5019489",  "life",   "生命科学"),
    ("shaw-life",    "邵逸夫生命科学与医学奖",   "Q57202753", "life",   "生命科学"),
    ("kavli-neuro",  "克拉福德神经科学奖",       "Q18889781", "life",   "生命科学"),
    ("wolf-med",     "沃尔夫医学奖",            "Q540561",   "life",   "生命科学"),
    ("gruber-genes", "格鲁伯遗传学奖",          "Q477467",   "life",   "生命科学"),
    ("gruber-neuro", "格鲁伯神经科学奖",        "Q1550248",  "life",   "生命科学"),
    ("lasker",       "拉斯克奖",               "Q921415",   "life",   "生命科学"),
]

def sparql_recipients(qid, force=False):
    cached = None if force else cache_load("wd_" + qid)
    if cached is not None:
        return cached
    throttle("sparql", 2.5)
    query = (
        'SELECT ?p ?pLabel ?date ?mot ?cLabel WHERE {'
        '  ?p p:P166 ?stmt. ?stmt ps:P166 wd:%s.'
        '  ?stmt pq:P585 ?date.'
        '  OPTIONAL { ?stmt pq:P1686 ?mot. }'
        '  OPTIONAL { ?p wdt:P27 ?c. }'
        '  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }'
        '}' % qid
    )
    sq = urllib.parse.urlencode({"query": query, "format": "json"})
    d = get_json("https://query.wikidata.org/sparql?" + sq)
    rows = []
    for r in d.get("results", {}).get("bindings", []):
        p = r.get("p", {}).get("value", "")
        rows.append({
            "qid": p.split("/")[-1],
            "name": r.get("pLabel", {}).get("value", ""),
            "date": r.get("date", {}).get("value", ""),
            "mot": r.get("mot", {}).get("value", ""),
            "country": r.get("cLabel", {}).get("value", ""),
        })
    cache_save("wd_" + qid, rows)
    return rows

def fetch_t1(force=False):
    allrows = []
    for key, zh, qid, star, domain in T1_AWARDS:
        cached = None if force else cache_load("t1_" + key)
        if cached is not None:
            print(f"  [{key}] 缓存命中 ({len(cached)} 条)")
            allrows += cached
            continue
        if not qid:
            print(f"  [{key}] 无 Q-id，跳过")
            continue
        try:
            rows = sparql_recipients(qid, force=force)
        except Exception as e:
            print(f"  [{key}] SPARQL 失败: {e}")
            rows = []
        norm = []
        for rr in rows:
            yr = 0
            m = re.search(r"(\d{4})", rr.get("date", ""))
            if m:
                yr = int(m.group(1))
            name = rr.get("name", "")
            if not name or not yr:
                continue
            norm.append({
                "id": f"{key}-{yr}-{slug(name)}",
                "name": name,
                "year": yr,
                "award": zh,
                "awardKey": key,
                "star": star, "domain": domain,
                "motivation": rr.get("mot", "") or "",
                "affiliation": "",
                "country": rr.get("country", "") or "",
                "photo": "",
                "wikidata": rr.get("qid", ""),
                "links": [],
            })
        cache_save("t1_" + key, norm)
        print(f"  [{key}] {len(norm)} 条 (QID {qid})")
        allrows += norm
    return allrows

# ---------- 合并 / 过滤 / 输出 ----------
def build(no_write=False, source=None, resume=False, force=False):
    records = []
    if source in (None, "nobel"):
        records += fetch_nobel(force=force)
    if source in (None, "t1"):
        records += fetch_t1(force=force)

    seen = {}
    uniq = []
    for r in records:
        k = (r["name"].lower().strip(), r["year"], r["awardKey"])
        if k in seen:
            continue
        seen[k] = True
        uniq.append(r)

    nobel = [r for r in uniq if r["awardKey"].startswith("nobel")]
    t1 = [r for r in uniq if not r["awardKey"].startswith("nobel")]
    t1.sort(key=lambda x: x["year"], reverse=True)
    if len(nobel) + len(t1) > 1500:
        t1 = t1[: max(0, 1500 - len(nobel))]
    final = nobel + t1

    by_award, by_star = {}, {}
    enriched = sum(1 for r in final if r.get("wikidata"))
    for r in final:
        by_award[r["award"]] = by_award.get(r["award"], 0) + 1
        by_star[r["star"]] = by_star.get(r["star"], 0) + 1
    print("\n===== 采集统计 =====")
    print(f"总条数: {len(final)}  (Nobel {len(nobel)} / T1 {len(t1)})")
    print(f"Wikidata 富化率: {enriched}/{len(final)} = {enriched*100//max(1,len(final))}%")
    print("各 star 分布:", by_star)
    print("各奖项人数:")
    for a, c in sorted(by_award.items(), key=lambda x: -x[1]):
        print(f"   {c:4}  {a}")

    if no_write:
        print("[--no-write] 未写文件")
        return final

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    header = (
        "// Auto-generated by collect_awards.py — Science Frontier P1\n"
        f"// generated: {time.strftime('%Y-%m-%d %H:%M')} | total={len(final)} | "
        f"nobel={len(nobel)} t1={len(t1)} | wikidata_enriched={enriched}\n"
        "const awards = [\n"
    )
    body = ",\n".join(json.dumps(r, ensure_ascii=False) for r in final)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(header + body + "\n];\n")
    print(f"\n[✓] 写出 {OUT}  ({os.path.getsize(OUT)//1024} KB)")
    return final

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--source", default=None, help="nobel | t1")
    ap.add_argument("--resume", action="store_true", help="复用缓存")
    ap.add_argument("--force", action="store_true", help="忽略缓存重采")
    ap.add_argument("--no-write", action="store_true", help="只统计不写文件")
    args = ap.parse_args()
    force = args.force
    if args.resume:
        force = False
    build(no_write=args.no_write, source=args.source, resume=args.resume, force=force)
