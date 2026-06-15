"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Self-drawing fit-score ring: the arc sweeps and the number counts up the
 * first time it scrolls into view (synced from one eased value). Illustrative
 * product UI, not a real-world stat — labelled as an example by the caller.
 */
export function AnimatedFitRing({
  value = 92,
  size = 208,
  strokeWidth = 12,
  label = "Job fit",
}: {
  value?: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    let raf = 0;
    const dur = 1500;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  const offset = c * (1 - n / 100);

  return (
    <div ref={ref} className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#C1502A"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ filter: "drop-shadow(0 0 10px rgba(193,80,42,0.55))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-light leading-none tabular-nums text-white"
          style={{ fontFamily: "var(--font-playfair)", fontSize: size * 0.27 }}
        >
          {n}
          <span className="text-[#888888]" style={{ fontSize: size * 0.12 }}>
            %
          </span>
        </span>
        <span className="mt-2 text-[0.6rem] uppercase tracking-[0.25em] text-[#C1502A]">
          {label}
        </span>
      </div>
    </div>
  );
}
