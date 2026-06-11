#!/usr/bin/env python3
"""
Generates the social share card (Open Graph / Twitter) for pathbuild.app.

Output: public/og.png (1200x630) — near-black canvas, PathBuild wordmark,
and the signature 98% fit ring in terracotta.

Brand fonts are read from /tmp/og-fonts; falls back to Georgia if missing:
  curl -fsSL -o /tmp/og-fonts/DMSerifDisplay-Regular.ttf \
    "https://raw.githubusercontent.com/google/fonts/main/ofl/dmserifdisplay/DMSerifDisplay-Regular.ttf"
  curl -fsSL -o "/tmp/og-fonts/InstrumentSans.ttf" \
    "https://raw.githubusercontent.com/google/fonts/main/ofl/instrumentsans/InstrumentSans%5Bwdth,wght%5D.ttf"
"""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og.png"

# Render at 2x and downscale for crisp arcs and type.
S = 2
W, H = 1200 * S, 630 * S

NIGHT = (11, 11, 12)
PANEL = (18, 18, 20)
TRACK = (31, 31, 35)
EMBER = (193, 80, 42)        # #C1502A
EMBER_BRIGHT = (230, 138, 82)  # #E68A52
BONE = (242, 239, 234)
DIM = (183, 178, 170)

SERIF = "/tmp/og-fonts/DMSerifDisplay-Regular.ttf"
SANS = "/tmp/og-fonts/InstrumentSans.ttf"
SERIF_FALLBACK = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
SANS_FALLBACK = "/System/Library/Fonts/Helvetica.ttc"


def load_font(path: str, fallback: str, size: int) -> ImageFont.FreeTypeFont:
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.truetype(fallback, size)


def radial_glow(size: int, color: tuple[int, int, int], peak: int) -> Image.Image:
    """Soft circular glow with alpha falling off to the edge."""
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(glow)
    steps = 64
    for i in range(steps, 0, -1):
        r = size // 2 * i / steps
        a = int(peak * (1 - i / steps) ** 2)
        d.ellipse(
            [size / 2 - r, size / 2 - r, size / 2 + r, size / 2 + r],
            fill=color + (a,),
        )
    return glow


def lerp_color(a, b, t):
    return tuple(int(x + (y - x) * t) for x, y in zip(a, b))


def main() -> None:
    img = Image.new("RGB", (W, H), NIGHT)

    # Ambient terracotta glow behind the ring, very low key.
    glow = radial_glow(1400 * S, EMBER, peak=46)
    img.paste(
        Image.composite(glow, Image.new("RGBA", glow.size, NIGHT + (255,)), glow),
        (int(-380 * S), int(-260 * S)),
        glow,
    )

    draw = ImageDraw.Draw(img)

    # ── Fit ring ────────────────────────────────────────────────────────────
    cx, cy, r, stroke = 300 * S, 315 * S, 168 * S, 30 * S
    bbox = [cx - r, cy - r, cx + r, cy + r]

    # Track
    draw.arc(bbox, 0, 360, fill=TRACK, width=stroke)

    # 98% arc from 12 o'clock, gradient ember → ember-bright in segments.
    # Flat ends: at 98% the 7° gap is too tight for round caps.
    start, sweep = -90.0, 360.0 * 0.98
    segs = 160
    for i in range(segs):
        t0, t1 = i / segs, (i + 1) / segs
        color = lerp_color(EMBER, EMBER_BRIGHT, t0)
        overlap = 0.6 if i < segs - 1 else 0.0  # hide seams, keep the end crisp
        draw.arc(
            bbox,
            start + sweep * t0,
            start + sweep * t1 + overlap,
            fill=color,
            width=stroke,
        )

    # Ring center: 98% + FIT SCORE
    f_num = load_font(SERIF, SERIF_FALLBACK, 104 * S)
    f_lab = load_font(SANS, SANS_FALLBACK, 25 * S)

    num = "98%"
    nb = draw.textbbox((0, 0), num, font=f_num)
    draw.text(
        (cx - (nb[2] - nb[0]) / 2 - nb[0], cy - (nb[3] - nb[1]) / 2 - nb[1] - 14 * S),
        num,
        font=f_num,
        fill=BONE,
    )
    lab = "F I T   S C O R E"
    lb = draw.textbbox((0, 0), lab, font=f_lab)
    draw.text(
        (cx - (lb[2] - lb[0]) / 2 - lb[0], cy + 66 * S),
        lab,
        font=f_lab,
        fill=DIM,
    )

    # ── Wordmark + tagline ─────────────────────────────────────────────────
    f_word = load_font(SERIF, SERIF_FALLBACK, 116 * S)
    f_tag = load_font(SANS, SANS_FALLBACK, 38 * S)

    wx = 552 * S
    draw.text((wx, 218 * S), "PathBuild", font=f_word, fill=BONE)

    t1, t2 = "Stop guessing. ", "See what fits."
    ty = 392 * S
    draw.text((wx + 6 * S, ty), t1, font=f_tag, fill=DIM)
    t1w = draw.textbbox((0, 0), t1, font=f_tag)[2]
    draw.text((wx + 6 * S + t1w, ty), t2, font=f_tag, fill=EMBER_BRIGHT)

    f_ios = load_font(SANS, SANS_FALLBACK, 26 * S)
    draw.text((wx + 8 * S, 458 * S), "Career fit, scored — for iPhone", font=f_ios, fill=(128, 123, 115))

    out = img.resize((1200, 630), Image.LANCZOS)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    out.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
