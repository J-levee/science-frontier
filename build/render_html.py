#!/usr/bin/env python3
# render_html.py —— P4 预渲染讲解层 · <slug>.json -> 单文件 explainers/<slug>/index.html
import json, sys, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    slug = sys.argv[1] if len(sys.argv) > 1 else None
    if not slug:
        print('usage: render_html.py <slug>'); sys.exit(1)
    tpl = os.path.join(BASE, 'build', 'templates', 'explainer.html')
    jf = os.path.join(BASE, 'website', 'explainers', slug, slug + '.json')
    out = os.path.join(BASE, 'website', 'explainers', slug, 'index.html')
    tpl_txt = open(tpl, encoding='utf-8').read()
    jtxt = open(jf, encoding='utf-8').read()
    # 防止 JSON 内 </script> 提前闭合 script 标签
    jtxt = jtxt.replace('</', '<\\/')
    html = tpl_txt.replace('__EXPLAINER_JSON__', jtxt)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, 'w', encoding='utf-8').write(html)
    print('wrote', out)


if __name__ == '__main__':
    main()
