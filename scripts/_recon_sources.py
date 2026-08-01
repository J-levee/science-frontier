#!/usr/bin/env python3
"""Temporary recon: map reachability of P1 award data sources from office machine.
Writes results to scripts/_recon_result.txt. Stdlib only.
"""
import ssl, socket, urllib.request, urllib.error, time, json

# (label, url, note)
TARGETS = [
    ("Nobel v2 API",        "https://api.nobelprize.org/2.1/laureates?limit=1", "auto主源"),
    ("Wikidata SPARQL",     "https://query.wikidata.org/sparql?query=SELECT%20%3Fs%20WHERE%20%7B%3Fs%20wdt%3AP361%20wd%3AQ7191%7D%20LIMIT%201&format=json", "统一图谱/曾阻断"),
    ("Google (control)",    "https://www.google.com", "GFW对照"),
    ("IMU / Fields",        "https://www.mathunion.org/", "菲尔兹"),
    ("Abel Prize",          "https://www.abelprize.no/", "阿贝尔"),
    ("ACM Turing",          "https://amturing.acm.org/", "图灵"),
    ("Breakthrough Prize",  "https://breakthroughprize.org/", "突破奖"),
    ("Shaw Prize",          "https://www.shawprize.org/", "邵逸夫"),
    ("Kavli Prize",         "https://www.kavliprize.org/", "Kavli"),
    ("Kyoto Prize",         "https://www.kyotoprize.org/", "京都奖"),
    ("Lasker Foundation",    "https://laskerfoundation.org/", "Lasker"),
    ("Wolf Foundation",     "https://wolffund.org.il/", "Wolf"),
    ("Gruber Yale",         "https://gruber.yale.edu/", "Gruber"),
    ("Crafoord",            "https://www.crafoord.se/", "Crafoord"),
    ("Gairdner",            "https://gairdner.org/", "Gairdner"),
    ("Fields medalists API?","https://api.mathunion.org/", "IMU疑似API"),
]

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

lines = []
for label, url, note in TARGETS:
    t0 = time.time()
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
        with urllib.request.urlopen(req, timeout=15, context=ctx) as r:
            data = r.read(2000)
            dt = time.time() - t0
            lines.append(f"[OK]   {label:22} {r.status}  {dt:5.2f}s  bytes={len(data)}  note={note}")
    except urllib.error.HTTPError as e:
        dt = time.time() - t0
        lines.append(f"[HTTP] {label:22} {e.code}  {dt:5.2f}s  note={note}")
    except (urllib.error.URLError, socket.timeout, ssl.SSLError, Exception) as e:
        dt = time.time() - t0
        reason = getattr(e, "reason", e)
        lines.append(f"[FAIL] {label:22} {dt:5.2f}s  {type(e).__name__}: {reason}  note={note}")

out = "\n".join(lines)
with open("scripts/_recon_result.txt", "w", encoding="utf-8") as f:
    f.write(out + "\n")
print(out)
