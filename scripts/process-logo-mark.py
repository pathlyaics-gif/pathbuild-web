#!/usr/bin/env python3
"""
PathBuild logo mark: transparent outer purple only; keep arrow + outline + orange body.
Arrow interior (lavender) → warm peach; dark purple strokes → ebony; orange → brand coral.
"""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

# Brand
CORAL = (232, 115, 74, 255)
PEACH = (255, 228, 210, 255)  # warm peach — slightly orange arrow fill
EBONY = (44, 34, 24, 255)  # was dark purple outline


def is_flood_purple(r: int, g: int, b: int) -> bool:
    """
    Pixels that connect outer background to the image edge.
    Stricter than full purple family so arrow outline (often r>107) stays opaque.
    """
    if b >= r + 28 and r <= 107:
        return True
    if r + g + b < 215 and b > r + 12 and r < 95:
        return True
    return False


def outer_mask(rgb: list[list[tuple[int, int, int]]], w: int, h: int) -> list[list[bool]]:
    out = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        for y in (0, h - 1):
            r, g, b = rgb[y][x]
            if is_flood_purple(r, g, b):
                out[y][x] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            r, g, b = rgb[y][x]
            if is_flood_purple(r, g, b) and not out[y][x]:
                out[y][x] = True
                q.append((x, y))
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if nx < 0 or nx >= w or ny < 0 or ny >= h or out[ny][nx]:
                continue
            r, g, b = rgb[ny][nx]
            if is_flood_purple(r, g, b):
                out[ny][nx] = True
                q.append((nx, ny))
    return out


def is_orange_body(r: int, g: int, b: int) -> bool:
    return r > 185 and r > g + 50 and g > 85 and b < 115


def is_lavender_fill(r: int, g: int, b: int) -> bool:
    """Arrow interior / highlights (not outer purple)."""
    if r < 115 or b < 115:
        return False
    if b - r > 35:
        return False
    if r - b > 25:
        return False
    # pink-lavender interior
    if g > 95 and b > 140 and r > 125:
        return True
    if r > 175 and g > 155 and b > 175:
        return True
    return False


def is_mauve_arrow(r: int, g: int, b: int) -> bool:
    """Residual purple-pink inside the mark (arrow fill), not outer bg."""
    if r > 195 and g > 170 and b > 185:
        return True
    if 110 <= r <= 175 and 70 <= g <= 130 and 110 <= b <= 195:
        if b - r < 45 and r - b < 45:
            return True
    if 105 <= r <= 185 and 65 <= g <= 145 and 105 <= b <= 200:
        if abs(r - b) < 55 and not is_orange_body(r, g, b):
            return True
    return False


def is_dark_stroke(r: int, g: int, b: int) -> bool:
    """Narrow indigo outline around arrow — not lavender fill."""
    if r > 118 or b < 100 or b > 175:
        return False
    if b >= r + 22:
        return True
    return False


def process(src: Path) -> Image.Image:
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    base = im.convert("RGB")
    rgb = [[base.getpixel((x, y)) for x in range(w)] for y in range(h)]
    flooded = outer_mask(rgb, w, h)

    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    op = out.load()

    for y in range(h):
        for x in range(w):
            r, g, b, a = im.getpixel((x, y))
            if a < 20:
                continue
            if flooded[y][x]:
                continue
            if is_orange_body(r, g, b):
                op[x, y] = CORAL
            elif is_lavender_fill(r, g, b) or is_mauve_arrow(r, g, b):
                op[x, y] = PEACH
            elif is_dark_stroke(r, g, b):
                op[x, y] = EBONY
            elif is_flood_purple(r, g, b):
                continue
            else:
                # anti-alias / mid tones
                if r > 170 and g > 130 and b > 150:
                    op[x, y] = PEACH
                elif r > 160 and r > g and b < 130:
                    op[x, y] = CORAL
                elif b > r + 18 and r < 115 and b < 165:
                    op[x, y] = EBONY
                else:
                    op[x, y] = (r, g, b, a)

    return out


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    public = root / "public"
    assets = root / "assets"
    src = (
        assets / "logo-mark-source.png"
        if (assets / "logo-mark-source.png").is_file()
        else Path(
            "/Users/jacobyanchaklee/.cursor/projects/Users-jacobyanchaklee-Downloads-PathlyV09/assets/Screenshot_2026-04-01_at_4.32.08_PM-cfaae91e-0174-4f77-819f-dfe388fd6add.png"
        )
    )
    if not src.is_file():
        raise SystemExit("logo source not found")

    icon = process(src)
    bbox = icon.getbbox()
    if bbox:
        icon = icon.crop(bbox)

    # Crisp web size (upscale small screenshot)
    scale = max(1, 180 // max(icon.size))
    nw, nh = icon.size[0] * scale, icon.size[1] * scale
    icon_large = icon.resize((nw, nh), Image.Resampling.NEAREST)

    public.mkdir(parents=True, exist_ok=True)
    icon_large.save(public / "logo-mark.png", optimize=True)
    print("Wrote", public / "logo-mark.png", icon_large.size)


if __name__ == "__main__":
    main()
