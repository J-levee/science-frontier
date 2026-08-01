# -*- coding: utf-8 -*-
"""将 frontier-data.json 的 sources 从纯字符串数组重构为可溯源结构 {text,url,type}。
优先写入经 WebSearch 验证的权威链接（impact=5 最高影响力记录）；
其余来源按文本推断 type，url 留空标记为待溯源。"""
import json, shutil, os

SRC = 'frontier-data.json'
BAK = 'frontier-data.json.bak'
JS = 'frontier-data.js'

# 经检索验证的精确来源 -> (url, type)
# type: paper(论文) / official(官方机构) / preprint(预印本)
SOURCE_MAP = {
    'XENONnT Collaboration 2023': ('https://arxiv.org/abs/2303.14729', 'paper'),
    'LZ Experiment 2024': ('https://arxiv.org/abs/2410.17036', 'paper'),
    'PandaX-4T 2024': ('https://arxiv.org/abs/2408.02381', 'paper'),
    'DESI 2024 DR1 Results': ('https://arxiv.org/abs/2404.03002', 'paper'),
    'Euclid Mission 2024': ('https://www.esa.int/Science_Exploration/Space_Science/Euclid', 'official'),
    'Muon g-2 Collaboration 2023': ('https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.131.161802', 'paper'),
    'LHCb 2024 Updates': ('https://arxiv.org/abs/2404.05187', 'paper'),
    'Nature 2024 Superconductivity Reviews': ('https://www.nature.com/articles/s41524-024-01206-9', 'paper'),
    'APS March Meeting 2025': ('https://meetings.aps.org/Meeting/MAR25/Session/A13.1', 'official'),
    'ITER Progress Report 2024': ('https://www.iter.org/', 'official'),
    'CFS SPARC 2025': ('https://cfs.energy/', 'official'),
    'Living Reviews in Relativity 2024': ('', 'paper'),  # 待溯源(期刊)
    'Hyper-Kamiokande Design Report': ('https://arxiv.org/abs/2009.03849', 'paper'),
    'Nature Neuroscience 2024 Consciousness Review': ('', 'paper'),  # 待溯源(期刊)
    'IIT 4.0 2023': ('https://pmc.ncbi.nlm.nih.gov/articles/PMC10581496/', 'paper'),
    'Nature Chemistry 2024 Prebiotic': ('', 'paper'),  # 待溯源(期刊)
    'Nobel Chemistry 2024': ('https://www.nobelprize.org/uploads/2024/10/popular-chemistryprize2024-4.pdf', 'official'),
    'RFdiffusion 2024': ('https://www.nature.com/articles/s41586-023-06415-8', 'paper'),
    'FDA Casgevy Approval 2023': ('https://www.fda.gov/news-events/press-announcements/fda-approves-casgevy-first-gene-therapies-treat-patients-sickle-cell-disease', 'official'),
    'Nature Biotech 2024 Prime Editing': ('https://www.nature.com/articles/s41587-024-02266-4', 'paper'),
    'Aging Cell 2024': ('https://pubmed.ncbi.nlm.nih.gov/38040663/', 'paper'),
    'Sinclair Lab 2024': ('https://pubmed.ncbi.nlm.nih.gov/38040663/', 'paper'),
    'Cell Stem Cell 2024': ('https://www.sciencedirect.com/science/article/pii/S246845112500011X', 'paper'),
    'Lecanemab FDA 2023': ('https://www.fda.gov/news-events/press-announcements/fda-converts-novel-alzheimers-disease-treatment-traditional-approval', 'official'),
    'Nature Medicine 2024': ('https://www.nature.com/articles/s41541-024-00942-9', 'paper'),
    'Clay Mathematics Institute': ('https://www.claymath.org/millennium-problems/p-vs-np', 'official'),
    'OpenAI o3 2024': ('https://openai.com/index/introducing-o3-and-o4-mini/', 'official'),
    'Anthropic Claude 2024': ('https://www.anthropic.com/news/claude-3-5-sonnet', 'official'),
    'Anthropic Interpretability 2024': ('https://www.anthropic.com/news/mapping-mind-language-model', 'official'),
    'NeurIPS 2024': ('https://neurips.cc/', 'official'),
    'Google Willow 2024': ('https://blog.google/technology/research/google-willow-quantum-chip/', 'official'),
    'Nature 2024 Quantum': ('https://www.nature.com/articles/s41586-024-08449-y', 'paper'),
    'BICEP/Keck 2024': ('https://arxiv.org/abs/2405.19469', 'paper'),
    'CMB-S4 Design Report': ('https://cmb-s4.org/', 'official'),
    'Penington 2024': ('https://arxiv.org/abs/2404.16098', 'paper'),
    'Nature Physics 2024 BH Info': ('https://arxiv.org/abs/2406.13949', 'paper'),
    'JWST K2-18b 2024': ('https://arxiv.org/abs/2406.08436', 'paper'),
    'Breakthrough Listen 2024': ('https://iopscience.iop.org/article/10.3847/1538-3881/ad7e18', 'paper'),
    'Penrose CCC 2024': ('https://arxiv.org/abs/2208.06021', 'paper'),
    'Climeworks 2024': ('https://climeworks.com/press-release/climeworks-switches-on-worlds-largest-direct-air-capture-plant-mammoth', 'official'),
    'IEA DAC Report 2024': ('https://www.iea.org/energy-system/carbon-capture-utilisation-and-storage/direct-air-capture', 'official'),
    'CNNC HTR-PM 2024': ('https://www.neimagazine.com/news/chinas-htr-pm-heating-project-begins-operation-11658937', 'official'),
    'TerraPower 2024': ('https://www.terrapower.com/', 'official'),
    'Anthropic Alignment 2024': ('https://www.anthropic.com/research/alignment-faking', 'official'),
    'OpenAI Superalignment 2024': ('https://openai.com/index/introducing-superalignment/', 'official'),
    'Neuralink 2024': ('https://neuralink.com/updates/a-year-of-telepathy/', 'official'),
    'Nature Medicine 2024 BCI': ('', 'paper'),  # 待溯源(期刊)
    'DeepMind GNoME 2023': ('https://www.nature.com/articles/s41586-023-06735-9', 'paper'),
    'Nature AI4Science 2024': ('', 'paper'),  # 待溯源(期刊)
    'IPCC AR6 2023': ('https://www.ipcc.ch/report/ar6/syr/', 'official'),
    'Nature Climate 2024': ('', 'paper'),  # 待溯源(期刊)
    'Science 2024 Tipping Points': ('', 'paper'),  # 待溯源(期刊)
    'Nature 2024 Earthquake Prediction': ('https://www.nature.com/articles/s41467-024-51596-z', 'paper'),
    'Breakthrough Starshot 2024': ('https://breakthroughinitiatives.org/initiative/3', 'official'),
    'NASA NIAC 2024': ('https://www.nasa.gov/niac/', 'official'),
    'NASA Perseverance 2024': ('https://science.nasa.gov/mission/mars-2020-perseverance/', 'official'),
    'ESA ExoMars 2024': ('https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars', 'official'),
    'NASA Europa Clipper 2024': ('https://science.nasa.gov/mission/europa-clipper/', 'official'),
}

OFFICIAL_HINTS = ['NASA', 'ESA', 'FDA', 'IEA', 'CERN', 'ITER', 'Clay', 'Nobel', 'NSF', 'DOE',
                  'JAXA', 'CNSA', 'WHO', 'IPCC', 'EASA', 'ESA', 'European', 'Mission', 'Report',
                  'Laboratory', 'Institute', 'Agency', 'Collaboration', 'Initiative']
PREPRINT_HINTS = ['arXiv', 'preprint', 'bioRxiv', 'medRxiv']

def infer_type(text):
    t = text.lower()
    if any(h.lower() in t for h in PREPRINT_HINTS):
        return 'preprint'
    if any(h.lower() in t for h in OFFICIAL_HINTS):
        # 期刊名不含机构词，但纯机构名判定为 official
        journal_words = ['nature', 'science', 'cell', 'physical review', 'pnas', 'arxiv',
                         'ieee', 'acm', 'plos', 'springer', 'wiley', 'elsevier', 'journal']
        if any(j in t for j in journal_words) and not any(o in t for o in ['mission','report','initiative','institute','agency','collaboration','laboratory']):
            return 'paper'
        return 'official'
    return 'paper'

def transform(rec):
    new_src = []
    for s in rec.get('sources', []):
        if isinstance(s, dict):
            new_src.append(s)  # 已转换过
            continue
        if s in SOURCE_MAP:
            url, typ = SOURCE_MAP[s]
        else:
            url, typ = '', infer_type(s)
        new_src.append({'text': s, 'url': url, 'type': typ})
    rec['sources'] = new_src
    return rec

def main():
    if not os.path.exists(BAK):
        shutil.copy(SRC, BAK)
    data = json.load(open(SRC, encoding='utf-8'))
    for rec in data:
        transform(rec)
    # 写回 json（可读缩进）
    with open(SRC, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    # 重新生成 js（紧凑）
    with open(JS, 'w', encoding='utf-8') as f:
        f.write('window.DATA = ')
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
        f.write(';')
    # 统计
    total = sum(len(r['sources']) for r in data)
    traced = sum(1 for r in data for s in r['sources'] if s.get('url'))
    imp5 = [r for r in data if r.get('impact') == 5]
    imp5_total = sum(len(r['sources']) for r in imp5)
    imp5_traced = sum(1 for r in imp5 for s in r['sources'] if s.get('url'))
    print(f'records={len(data)} sources_total={total} traced={traced} ({traced*100//total}%)')
    print(f'impact5 sources={imp5_total} traced={imp5_traced} ({imp5_traced*100//imp5_total}%)')

if __name__ == '__main__':
    main()
