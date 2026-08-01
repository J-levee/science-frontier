#!/usr/bin/env python3
# gen_explainer.py —— P4 预渲染讲解层 · 构建期生成 <slug>.json
# 有百炼/OpenAI key 时调 LLM 生成丰富 narration；无 key 时降级为「真实溯源数据驱动」骨架。
import json, re, sys, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(BASE, 'website', 'index.html')

# slug -> 109 库中的 domain 名（用于提取真实已溯源问题）
DOMAIN_OF = {
    'fusion': '材料与能源',
    'ai-alignment': '信息与智能',
    'kakeya': '数学与计算',
    'quantum': '数学与计算',
    'bci': '信息与智能',
}

SLUG_TITLE = {
    'fusion': '可控核聚变',
    'ai-alignment': 'AI 对齐与智能',
    'kakeya': '挂谷猜想 / 数学前沿',
    'quantum': '量子计算与量子信息',
    'bci': '脑机接口',
}

try:
    from openai import OpenAI
except ImportError:
    OpenAI = None


def load_data():
    txt = open(INDEX, encoding='utf-8').read()
    m = re.search(r'window\.DATA\s*=\s*(\[[\s\S]*?\])\s*;?\s*\n</script>', txt)
    if not m:
        return []
    return json.loads(m.group(1))


def fallback(slug, data):
    domain = DOMAIN_OF.get(slug, slug)
    title = SLUG_TITLE.get(slug, domain)
    problems = [{
        'id': d.get('id'), 'title': d.get('title'), 'description': d.get('description', ''),
        'impact': d.get('impact'), 'difficulty': d.get('difficulty'), 'timeline': d.get('timeline'),
        'sources': d.get('sources', [])
    } for d in data if d.get('domain') == domain]
    return {
        'slug': slug, 'title': title, 'domain': domain,
        'hook': f'{domain}：当前世界最前沿的科学探究方向之一。以下从已溯源的权威资料梳理其核心问题、关键进展与开放挑战。',
        'problems': problems,
        'milestones': [], 'players': [], 'open': [], 'sources': [],
        'generated_by': 'fallback-rule (no LLM key available)'
    }


def llm_generate(slug, data):
    api_key = os.environ.get('DASHSCOPE_API_KEY') or os.environ.get('ALIYUN_DASHSCOPE_API_KEY')
    if not api_key or OpenAI is None:
        return None
    domain = DOMAIN_OF.get(slug, slug)
    problems = [{'id': d.get('id'), 'title': d.get('title'), 'description': d.get('description', '')[:300]}
                for d in data if d.get('domain') == domain]
    prompt = (
        f'你是科学边界科普站的讲解撰写者。请为「{domain}」方向写一份预渲染讲解JSON，'
        f'必须中文，且每条论断都要可溯源。返回严格 JSON，字段：'
        f'{{"slug":"{slug}","title":"{domain}","domain":"{domain}",'
        f'"hook":"一句话钩子(为什么重要)","milestones":[{{"year":"","text":""}}],'
        f'"players":["主要机构/研究者"],"open":["开放问题"],'
        f'"sources":[{{"text":"权威来源名","url":"https://...","type":"official"}}]}}。'
        f'不要包含 problems 字段（由真实数据注入）。仅返回 JSON。'
    )
    try:
        client = OpenAI(api_key=api_key, base_url='https://dashscope.aliyuncs.com/compatible-mode/v1')
        resp = client.chat.completions.create(
            model='qwen-plus', messages=[{'role': 'user', 'content': prompt}],
            response_format={'type': 'json_object'}, temperature=0.4)
        obj = json.loads(resp.choices[0].message.content)
        obj['slug'] = slug
        obj['title'] = SLUG_TITLE.get(slug, domain)
        obj['problems'] = [{'id': d.get('id'), 'title': d.get('title'), 'description': d.get('description', ''),
                            'impact': d.get('impact'), 'difficulty': d.get('difficulty'),
                            'timeline': d.get('timeline'), 'sources': d.get('sources', [])}
                           for d in data if d.get('domain') == domain]
        obj['generated_by'] = 'llm-qwen-plus'
        return obj
    except Exception as e:
        print('[warn] LLM 生成失败，回退骨架:', e, file=sys.stderr)
        return None


def main():
    slug = sys.argv[1] if len(sys.argv) > 1 else None
    if not slug:
        print('usage: gen_explainer.py <slug>'); sys.exit(1)
    data = load_data()
    out_dir = os.path.join(BASE, 'website', 'explainers', slug)
    os.makedirs(out_dir, exist_ok=True)
    result = llm_generate(slug, data) or fallback(slug, data)
    with open(os.path.join(out_dir, slug + '.json'), 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print('wrote', os.path.join(out_dir, slug + '.json'),
          '| problems:', len(result.get('problems', [])), '| by:', result.get('generated_by'))


if __name__ == '__main__':
    main()
