"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AppBadge } from "./AppBadge";

/**
 * Number of extracted hero frames in /public/frames (frame_0001.jpg …).
 * Kept in sync with the ffmpeg extraction step.
 */
export const FRAME_COUNT = 121;

const framePath = (i: number) =>
  `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;

/**
 * Scroll-scrubbed hero. A 300vh track pins a full-viewport <canvas>; scroll
 * progress maps to a frame index, and we redraw only when the index changes.
 * The same rAF loop fades the overlay copy away as you scroll in — no <video>,
 * no scroll listener, no useScroll. Reduced-motion users get one static frame
 * and no loop.
 */
export function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;
    if (!container || !sticky || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let current = -1;
    let raf = 0;

    const sizeCanvas = () => {
      const w = sticky.clientWidth;
      const h = sticky.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    // Cover-fit draw: scale = max(cw/iw, ch/ih), centered, black behind.
    const draw = (img: HTMLImageElement) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      ctx.fillStyle = "#0B0B0C";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    sizeCanvas();

    // Reduced motion: one representative frame (the completed ring), held still.
    if (reduce) {
      const still = new Image();
      still.src = framePath(FRAME_COUNT - 1);
      const paint = () => {
        current = FRAME_COUNT - 1;
        draw(still);
      };
      if (still.complete) paint();
      else still.onload = paint;
      const onResizeStatic = () => {
        sizeCanvas();
        draw(still);
      };
      window.addEventListener("resize", onResizeStatic);
      return () => window.removeEventListener("resize", onResizeStatic);
    }

    // Preload every frame; draw frame 0 as soon as it lands.
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      if (i === 0) {
        img.onload = () => {
          if (current === -1) {
            current = 0;
            draw(img);
          }
        };
      }
      images[i] = img;
    }

    const render = () => {
      const rect = container.getBoundingClientRect();
      const range = container.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / (range || 1)));

      // Scrub the canvas frame.
      const target = Math.round(progress * (FRAME_COUNT - 1));
      if (target !== current) {
        const img = images[target];
        if (img && img.complete && img.naturalWidth) {
          current = target;
          draw(img);
        }
      }

      // Fade + lift the overlay copy away over the first third of the scroll.
      const cr = copyRef.current;
      if (cr) {
        const fade = Math.max(0, Math.min(1, 1 - progress / 0.32));
        cr.style.opacity = `${fade}`;
        cr.style.transform = `translateY(${((1 - fade) * -48).toFixed(1)}px)`;
      }

      raf = requestAnimationFrame(render);
    };

    const onResize = () => {
      sizeCanvas();
      const img = images[current >= 0 ? current : 0];
      if (img) draw(img);
    };
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  return (
    <section ref={containerRef} className="relative h-[250vh]" aria-label="PathBuild hero">
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#0B0B0C]"
      >
        <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />

        {/* Overlay: copy pinned to the lower third, over a bottom-up scrim. */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end">
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(to top, rgba(11,11,12,0.88), rgba(11,11,12,0.35) 50%, transparent)",
            }}
          />
          <div
            ref={copyRef}
            className="relative mx-auto w-full max-w-[1100px] px-6 pb-16 will-change-[opacity,transform] sm:pb-20"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]"
            >
              Built for your next move
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="max-w-[16ch] font-light leading-[1.04] tracking-[-0.02em] text-white"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              }}
            >
              See which jobs fit you — and why.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-6 max-w-[460px] text-[1.05rem] font-light leading-relaxed text-[#E5E5E5]"
            >
              PathBuild learns your best-fit career, then scores real jobs from 0
              to 100 — so you see why each one fits before you apply.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="mt-9"
            >
              <AppBadge />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
