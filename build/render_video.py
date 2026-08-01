#!/usr/bin/env python3
# render_video.py —— P4 预渲染讲解层 · HTML + TTS 音频 -> mp4（衍生分发物）
# 依赖：ffmpeg（必须）、playwright（录屏，可选）、百炼/Edge TTS（音频，可选）。
# 本脚本做依赖检测与流程骨架；实际渲染在无 GPU 的办公室电脑上建议降分辨率/帧率，或先交交互版。
import sys, os, shutil, subprocess

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def have(cmd):
    return shutil.which(cmd) is not None


def main():
    slug = sys.argv[1] if len(sys.argv) > 1 else None
    if not slug:
        print('usage: render_video.py <slug>'); sys.exit(1)
    print('[info] 渲染视频依赖检测：')
    print('  ffmpeg :', 'OK' if have('ffmpeg') else '缺失（必需，用于混流合成）')
    pw = False
    try:
        import playwright  # noqa
        pw = True
    except ImportError:
        pass
    print('  playwright :', 'OK' if pw else '缺失（可选，用于 headless 录屏）')
    print('  TTS key :', 'OK' if (os.environ.get('DASHSCOPE_API_KEY')) else '未配置（将跳过音频，仅静帧录屏或暂缓）')
    # 真实渲染流程（环境齐备时启用，这里仅打印步骤，避免在无依赖环境强行失败）
    html = os.path.join(BASE, 'website', 'explainers', slug, 'index.html')
    if not os.path.exists(html):
        print('[error] 先运行 render_html.py', slug, '生成', html); sys.exit(1)
    print('[plan] 步骤：')
    print('  1. (可选) 调 TTS 生成', slug, '.mp3')
    print('  2. (可选) playwright 打开', html, '演示模式录屏 ->', slug, '.webm')
    print('  3. ffmpeg 混流音频+视频 -> explainers/' + slug + '/' + slug + '.mp4（时长 60-120s）')
    print('[note] 当前环境若缺依赖，可暂缓视频、先交交互版；视频作为衍生物后续补齐。')


if __name__ == '__main__':
    main()
