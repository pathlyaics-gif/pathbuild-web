#!/usr/bin/env python3
"""Build PathBuild favicons: outer cream via flood-fill → transparent; light orange → transparent."""

from __future__ import annotations

import math
from collections import deque
from pathlib import Path

from PIL import Image

CORAL = (232, 115, 74, 255)
WHITE_PATH = (255, 255, 255, 255)


def dist3(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(a, b)))


def luminance(r: int, g: int, b: int) -> float:
    return 0.299 * r + 0.587 * g + 0.114 * b


def flood_outer_mask(
    rgb: list[list[tuple[int, int, int]]],
    w: int,
    h: int,
    tol: float = 28.0,
) -> list[list[bool]]:
    """True = outer cream (transparent). Flood from edges where pixel matches corners."""
    seeds: list[tuple[int, int]] = []
    corner_cols = [
        rgb[0][0],
        rgb[0][w - 1],
        rgb[h - 1][0],
        rgb[h - 1][w - 1],
    ]
    # Also sample a few edge pixels
    for x in range(w):
        seeds.append((x, 0))
        seeds.append((x, h - 1))
    for y in range(h):
        seeds.append((0, y))
        seeds.append((w - 1, y))

    outer = [[False] * w for _ in range(h)]
    seen = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def near_corner(r: int, g: int, b: int) -> bool:
        return min(dist3((r, g, b), c) for c in corner_cols) <= tol

    for x, y in seeds:
        if seen[y][x]:
            continue
        r, g, b = rgb[y][x]
        if near_corner(r, g, b):
            seen[y][x] = True
            outer[y][x] = True
            q.append((x, y))

    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if nx < 0 or nx >= w or ny < 0 or ny >= h or seen[ny][nx]:
                continue
            r, g, b = rgb[ny][nx]
            if near_corner(r, g, b):
                seen[ny][nx] = True
                outer[ny][nx] = True
                q.append((nx, ny))

    return outer


def is_light_orange_gradient(r: int, g: int, b: int) -> bool:
    if r < 215:
        return False
    if not (r > g and g > b):
        return False
    L = luminance(r, g, b)
    if L > 168 and b > 72:
        return True
    if b > 88 and g > 145 and r > 245:
        return True
    return False


def is_neutral_wash(r: int, g: int, b: int) -> bool:
    """Peachy/cream wash inside squircle (not path): kill white band at top of icon."""
    spread = max(r, g, b) - min(r, g, b)
    L = luminance(r, g, b)
    if spread < 22 and L > 188:
        return True
    if spread < 38 and L > 218:
        return True
    return False


def is_white_path(r: int, g: int, b: int) -> bool:
    if r < 235 or g < 228:
        return False
    if b < 205:
        return False
    if r > g + 12 and r > b + 28:
        return False
    return True


def process_icon(src: Path) -> Image.Image:
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    px = im.load()
    rgb = [[px[x, y][:3] for x in range(w)] for y in range(h)]
    outer = flood_outer_mask(rgb, w, h, tol=26.0)

    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    op = out.load()

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 10:
                continue
            if outer[y][x]:
                continue
            if is_light_orange_gradient(r, g, b):
                continue
            # Path must be detected before neutral_wash (path pixels are low-saturation)
            if is_white_path(r, g, b):
                op[x, y] = WHITE_PATH
            elif is_neutral_wash(r, g, b):
                continue
            elif r > 160 and r > g and g > b - 18:
                op[x, y] = CORAL
            else:
                L = luminance(r, g, b)
                spread = max(r, g, b) - min(r, g, b)
                if L > 248 and spread < 12:
                    op[x, y] = WHITE_PATH
                elif L < 165:
                    op[x, y] = CORAL
                else:
                    continue

    return out


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    public = root / "public"
    candidates = [
        root / "assets" / "app-icon-source.png",
        Path(
            "/Users/jacobyanchaklee/.cursor/projects/Users-jacobyanchaklee-Downloads-PathlyV09/assets/Your_paragraph_tex-35f36457-ca31-479b-8b4c-f816087d82b2.png"
        ),
    ]
    src = next((p for p in candidates if p.is_file()), None)
    if src is None:
        raise SystemExit("No source PNG found.")

    icon = process_icon(src)
    bbox = icon.getbbox()
    if bbox:
        icon = icon.crop(bbox)
    w, h = icon.size
    side = max(w, h)
    sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    sq.paste(icon, ((side - w) // 2, (side - h) // 2), icon)

    fav32 = sq.resize((32, 32), Image.Resampling.LANCZOS)
    public.mkdir(parents=True, exist_ok=True)
    fav32.save(public / "favicon.png", optimize=True)

    sq.resize((180, 180), Image.Resampling.LANCZOS).save(
        public / "apple-touch-icon.png", optimize=True
    )

    fav32.save(
        public / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32)],
    )

    sq.resize((512, 512), Image.Resampling.LANCZOS).save(
        public / "icon-512.png", optimize=True
    )

    print("OK:", public / "favicon.png")


if __name__ == "__main__":
    main()
