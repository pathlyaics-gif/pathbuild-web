"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AppBadge } from "./AppBadge";

/**
 * Scroll-scrubbed hero. A 380vh track pins a phone in a near-black void; scroll
 * progress drives a code-rendered FIT-SCORE ring + number that counts EXACTLY
 * 1 → 100 (every value, monotonic, perfectly legible) — no baked video frames,
 * so the count can never skip. The same rAF loop fades the overlay copy away.
 * No <video>, no scroll listener (rAF + getBoundingClientRect). Reduced-motion
 * users get a static, fully-drawn ring at 100.
 */
const SIZE = 232;
const STROKE = 11;
const R = SIZE / 2 - STROKE;
const C = 2 * Math.PI * R;

export function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<SVGCircleElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const arc = arcRef.current;
    const num = numRef.current;
    if (!container || !arc || !num) return;

    const setValue = (v: number) => {
      const val = Math.max(0, Math.min(100, v));
      arc.style.strokeDashoffset = `${C * (1 - val / 100)}`;
      num.textContent = `${Math.round(val)}`;
    };

    // Reduced motion: hold the completed ring at 100, no scrub.
    if (reduce) {
      setValue(100);
      return;
    }

    setValue(1);
    let raf = 0;
    const render = () => {
      const rect = container.getBoundingClientRect();
      const range = container.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / (range || 1)));

      // 1 → 100 across the scroll; reach 100 a touch before the end, then hold.
      const eased = Math.min(1, progress / 0.88);
      setValue(1 + eased * 99);

      const cr = copyRef.current;
      if (cr) {
        const fade = Math.max(0, Math.min(1, 1 - progress / 0.32));
        cr.style.opacity = `${fade}`;
        cr.style.transform = `translateY(${((1 - fade) * -48).toFixed(1)}px)`;
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <section ref={containerRef} className="relative h-[380vh]" aria-label="PathBuild hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0B0B0C]">
        {/* Warm terracotta light behind the device. */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle, rgba(193,80,42,0.22), rgba(193,80,42,0.06) 42%, transparent 70%)",
          }}
        />

        {/* Phone, centered, gently floating with a subtle 3D tilt. */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ perspective: "1500px" }}
          aria-hidden
        >
          <motion.div
            className="relative w-[270px] rounded-[46px] border border-white/10 bg-[#1b1b1e] p-2.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)] sm:w-[300px]"
            style={{ transform: "rotateY(-9deg) rotateX(4deg)", transformStyle: "preserve-3d" }}
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="relative flex items-center justify-center overflow-hidden rounded-[36px] bg-[#0e0e10]"
              style={{ aspectRatio: "1179 / 2556" }}
            >
              {/* Dynamic island */}
              <div className="absolute left-1/2 top-4 h-[22px] w-[82px] -translate-x-1/2 rounded-full bg-black" />

              {/* Fit-score ring + number */}
              <div className="relative flex items-center justify-center" style={{ width: SIZE, height: SIZE }}>
                <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
                  <defs>
                    <linearGradient id="heroRing" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C1502A" />
                      <stop offset="100%" stopColor="#E68A52" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={R}
                    fill="none"
                    stroke="rgba(242,239,234,0.08)"
                    strokeWidth={STROKE}
                  />
                  <circle
                    ref={arcRef}
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    r={R}
                    fill="none"
                    stroke="url(#heroRing)"
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                    strokeDasharray={C}
                    strokeDashoffset={C}
                    transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
                    style={{ filter: "drop-shadow(0 0 10px rgba(193,80,42,0.55))" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[0.55rem] font-medium uppercase tracking-[0.28em] text-[#8A857D]">
                    Job fit score
                  </span>
                  <span className="mt-1 flex items-baseline font-medium leading-none tabular-nums text-white">
                    <span ref={numRef} className="text-[3.2rem]">
                      1
                    </span>
                    <span className="text-[1.4rem] text-[#888888]">%</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vignette — darkens the edges for depth and focus on the device. */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, transparent 52%, rgba(11,11,12,0.55) 100%)",
          }}
        />

        {/* Overlay: copy pinned to the lower third, over a bottom-up scrim. */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end">
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "linear-gradient(to top, rgba(11,11,12,0.92), rgba(11,11,12,0.4) 50%, transparent)",
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
              className="max-w-[15ch] font-light leading-[1.02] tracking-[-0.02em] text-white"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              }}
            >
              One tap.
              <br />
              Your whole job search.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
              className="mt-6 max-w-[460px] text-[1.05rem] font-light leading-relaxed text-[#E5E5E5]"
            >
              PathBuild learns your best-fit career, scores every job 0–100, and
              drafts each application for you to review and send.
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
