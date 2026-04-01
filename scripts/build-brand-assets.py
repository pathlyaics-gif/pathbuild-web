#!/usr/bin/env python3
"""
Single source of truth for PathBuild icon assets.

Uses the full app icon (squircle on cream canvas). Only the OUTER canvas becomes
transparent via edge flood-fill; every pixel inside the icon is preserved as-is
(gradient, path, arrow — no remapping, no punching holes in the gradient).

Outputs: public/logo-full.png, public/logo-mark.png, favicon.png, favicon.ico,
         apple-touch-icon.png, icon-512.png
"""

from __future__ import annotations

import math
import shutil
from collections import deque
from pathlib import Path

from PIL import Image

# Typical canvas around the squircle in the master asset
CANVAS_ANCHOR = (251, 247, 236)


def dist3(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(a, b)))


def matches_outer_canvas(r: int, g: int, b: int) -> bool:
    """
    True only for the flat cream border — stops at anti-aliased squircle edge
    so the orange gradient + cream path inside the icon are never flooded.
    """
    spread = max(r, g, b) - min(r, g, b)
    d = dist3((r, g, b), CANVAS_ANCHOR)
    if d <= 6:
        return True
    if d <= 14 and spread <= 22:
        return True
    if d <= 20 and spread <= 17:
        return True
    return False


def flood_outer_mask(
    rgb: list[list[tuple[int, int, int]]], w: int, h: int
) -> list[list[bool]]:
    outer = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def try_seed(x: int, y: int) -> None:
        if outer[y][x]:
            return
        r, g, b = rgb[y][x]
        if matches_outer_canvas(r, g, b):
            outer[y][x] = True
            q.append((x, y))

    for x in range(w):
        try_seed(x, 0)
        try_seed(x, h - 1)
    for y in range(h):
        try_seed(0, y)
        try_seed(w - 1, y)

    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if nx < 0 or nx >= w or ny < 0 or ny >= h or outer[ny][nx]:
                continue
            r, g, b = rgb[ny][nx]
            if matches_outer_canvas(r, g, b):
                outer[ny][nx] = True
                q.append((nx, ny))

    return outer


def fit_in_square(im: Image.Image, side: int) -> Image.Image:
    """Scale uniformly and center on transparent square (no stretch)."""
    w, h = im.size
    scale = min(side / w, side / h)
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    sm = im.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(sm, ((side - nw) // 2, (side - nh) // 2), sm)
    return canvas


def apply_transparent_canvas(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    w, h = im.size
    px = im.load()
    rgb = [[px[x, y][:3] for x in range(w)] for y in range(h)]
    outer = flood_outer_mask(rgb, w, h)
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    op = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if outer[y][x]:
                continue
            op[x, y] = (r, g, b, a)
    return out


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    public = root / "public"
    assets = root / "assets"
    assets.mkdir(parents=True, exist_ok=True)
    public.mkdir(parents=True, exist_ok=True)

    master_name = "app-icon-master.png"
    bundled = assets / master_name
    cursor_fallback = Path(
        "/Users/jacobyanchaklee/.cursor/projects/Users-jacobyanchaklee-Downloads-PathlyV09/assets/Your_paragraph_tex-49b51b33-1ab5-4a98-9b0a-c3943aab09b1.png"
    )
    if bundled.is_file():
        src = bundled
    elif cursor_fallback.is_file():
        shutil.copy2(cursor_fallback, bundled)
        src = bundled
    else:
        raise SystemExit(f"Missing {bundled} and Cursor fallback.")

    icon = apply_transparent_canvas(Image.open(src))
    bbox = icon.getbbox()
    if not bbox:
        raise SystemExit("No opaque pixels after processing.")
    icon = icon.crop(bbox)

    icon.save(public / "logo-full.png", optimize=True)

    # Navbar / compact mark: limit longest side (keeps aspect of squircle)
    mw, mh = icon.size
    mark_max = 512
    scale = min(1.0, mark_max / max(mw, mh))
    if scale < 1:
        nw, nh = int(mw * scale), int(mh * scale)
        mark = icon.resize((nw, nh), Image.Resampling.LANCZOS)
    else:
        mark = icon.copy()
    mark.save(public / "logo-mark.png", optimize=True)

    # Favicons: uniform scale inside square (preserves squircle aspect)
    fav32 = fit_in_square(icon, 32)
    fav32.save(public / "favicon.png", optimize=True)
    fav32.save(public / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32)])

    fit_in_square(icon, 180).save(public / "apple-touch-icon.png", optimize=True)
    fit_in_square(icon, 512).save(public / "icon-512.png", optimize=True)

    print("OK logo-full", icon.size, "→", public)


if __name__ == "__main__":
    main()
