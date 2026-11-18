# -*- coding: utf-8 -*-
"""
从 character/setting/ 的设定图里裁出八张头像，存到 public/avatars/<id>.png。
每张都按同一条规矩裁，所以脸在头像里的位置和大小一致：
  两眼中点横向居中，眼睛在离顶边 EYE_Y 的高度，头像边长 = 两眼间距 × SPAN。
EYES 里是两只眼睛中心在原图里的相对坐标（百分比），是对着加了网格的设定图量出来的。
用法（在项目根目录下）：python tools/make-avatars.py
"""
import os
from PIL import Image

EYES = {
    'claude': ((19.84, 9.77), (21.93, 9.70)),
    'gpt': ((18.34, 14.25), (20.68, 14.17)),
    'deepseek': ((18.30, 14.83), (21.14, 14.75)),
    'glm': ((16.14, 15.42), (18.30, 15.42)),
    'kimi': ((17.91, 14.37), (20.45, 14.21)),
    'qwen': ((19.77, 13.35), (22.55, 13.27)),
    'gemini': ((46.20, 17.72), (54.70, 16.10)),
    'grok': ((53.80, 22.70), (61.80, 21.34)),
}
SPAN, EYE_Y, SIZE = 4.0, 0.57, 192
SRC, OUT = 'character/setting', 'public/avatars'

os.makedirs(OUT, exist_ok=True)
for f in os.listdir(SRC):
    cid = next((i for i in EYES if f.lower().startswith(i)), None)
    if not cid:
        continue
    im = Image.open(os.path.join(SRC, f)).convert('RGB')
    (lx, ly), (rx, ry) = [(x / 100 * im.width, y / 100 * im.height) for x, y in EYES[cid]]
    side = ((rx - lx) ** 2 + (ry - ly) ** 2) ** 0.5 * SPAN
    cx, cy = (lx + rx) / 2, (ly + ry) / 2
    box = (cx - side / 2, cy - side * EYE_Y, cx + side / 2, cy + side * (1 - EYE_Y))
    im.crop(tuple(round(v) for v in box)).resize((SIZE, SIZE), Image.LANCZOS).save(os.path.join(OUT, cid + '.png'))
    print(cid, 'eye distance %.0f px, crop %.0f px' % (side / SPAN, side))
