"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-reactive aurora.
 *
 * Soft, on-brand (coral / warm-gold / rose) radial blobs drift slowly on their
 * own. Scrolling injects "energy" that speeds them up and shifts them — when you
 * stop scrolling the energy decays and the motion settles back to a gentle idle.
 * That gives the "it plays as you scroll, pauses when you stop" feel without any
 * video file. Respects `prefers-reduced-motion`.
 */

type Blob = {
  x: number; // 0..1 of width
  y: number; // 0..1 of height
  r: number; // radius as fraction of min(viewport)
  hueA: string;
  // drift parameters
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  phase: number;
};

const BLOBS: Blob[] = [
  { x: 0.78, y: 0.18, r: 0.55, hueA: "232,115,74", ax: 0.05, ay: 0.04, sx: 0.11, sy: 0.09, phase: 0 },
  { x: 0.18, y: 0.72, r: 0.5, hueA: "240,144,112", ax: 0.06, ay: 0.05, sx: 0.09, sy: 0.13, phase: 1.7 },
  { x: 0.5, y: 0.4, r: 0.42, hueA: "250,196,150", ax: 0.04, ay: 0.06, sx: 0.14, sy: 0.08, phase: 3.1 },
  { x: 0.9, y: 0.85, r: 0.45, hueA: "245,170,150", ax: 0.05, ay: 0.04, sx: 0.1, sy: 0.12, phase: 4.6 },
];

export function AuroraBackground({
  className = "",
  opacity = 1,
}: {
  className?: string;
  opacity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // scroll energy: rises with scroll velocity, decays when idle.
    let energy = 0;
    let lastScroll = typeof window !== "undefined" ? window.scrollY : 0;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastScroll);
      lastScroll = y;
      energy = Math.min(1, energy + delta * 0.012);
    };

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = (t: number) => {
      const time = t / 1000;
      ctx.clearRect(0, 0, width, height);

      const min = Math.min(width, height);
      // idle drift speed + scroll energy boost
      const speed = reduce ? 0 : 0.35 + energy * 2.2;

      for (const b of BLOBS) {
        const driftX =
          b.x + (reduce ? 0 : Math.sin(time * b.sx * speed + b.phase) * b.ax);
        const driftY =
          b.y +
          (reduce ? 0 : Math.cos(time * b.sy * speed + b.phase * 1.3) * b.ay);

        const cx = driftX * width;
        const cy = driftY * height;
        const radius = b.r * min * (1 + energy * 0.08);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        const alpha = 0.42;
        grad.addColorStop(0, `rgba(${b.hueA},${alpha})`);
        grad.addColorStop(0.45, `rgba(${b.hueA},${alpha * 0.45})`);
        grad.addColorStop(1, `rgba(${b.hueA},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // decay energy toward idle
      energy *= 0.94;
      raf = requestAnimationFrame(draw);
    };

    let raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity, filter: "blur(36px) saturate(1.1)" }}
    />
  );
}
