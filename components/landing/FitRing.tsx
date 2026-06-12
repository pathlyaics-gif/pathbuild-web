"use client";

import { useEffect, useId, useRef } from "react";

type FitRingProps = {
  /** Final score, 0–100. */
  value: number;
  /** Rendered square size in px. */
  size?: number;
  strokeWidth?: number;
  /** Delay before the draw starts, ms. */
  startDelay?: number;
  className?: string;
  /** Label under the number, e.g. "FIT". Empty string hides it. */
  label?: string;
};

const EASE_OUT = (t: number) => 1 - Math.pow(1 - t, 3);
const DURATION = 1500;

/**
 * The signature PathBuild fit ring: draws itself in and counts 0 → value
 * the first time it's seen. Reduced-motion users get the final state
 * immediately. Animation writes straight to DOM refs — no re-renders.
 */
export function FitRing({
  value,
  size = 120,
  strokeWidth = 10,
  startDelay = 0,
  className = "",
  label = "FIT",
}: FitRingProps) {
  const arcRef = useRef<SVGCircleElement>(null);
  const numRef = useRef<SVGTSpanElement>(null);
  const rootRef = useRef<SVGSVGElement>(null);
  const gradientId = useId();

  const r = 50 - strokeWidth / 2;
  const C = 2 * Math.PI * r;
  const target = Math.max(0, Math.min(100, value));

  useEffect(() => {
    const arc = arcRef.current;
    const num = numRef.current;
    const root = rootRef.current;
    if (!arc || !num || !root) return;

    const finish = () => {
      arc.style.strokeDashoffset = `${C * (1 - target / 100)}`;
      num.textContent = `${target}`;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    let raf = 0;
    let timer = 0;
    const run = () => {
      const t0 = performance.now();
      const frame = (now: number) => {
        const t = Math.min(1, (now - t0) / DURATION);
        const eased = EASE_OUT(t);
        arc.style.strokeDashoffset = `${C * (1 - (target * eased) / 100)}`;
        num.textContent = `${Math.round(target * eased)}`;
        if (t < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          timer = window.setTimeout(run, startDelay);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [C, target, startDelay]);

  return (
    <svg
      ref={rootRef}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`Fit score: ${target} percent`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C1502A" />
          <stop offset="100%" stopColor="#E68A52" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="rgba(242,239,234,0.09)"
        strokeWidth={strokeWidth}
      />
      <circle
        ref={arcRef}
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={C}
        strokeDashoffset={C}
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y={label ? 50 : 54}
        textAnchor="middle"
        fill="#F2EFEA"
        fontSize="26"
        fontWeight="600"
        fontFamily="var(--font-instrument), system-ui, sans-serif"
      >
        <tspan ref={numRef}>0</tspan>
        <tspan fontSize="13" fill="#B7B2AA">
          %
        </tspan>
      </text>
      {label ? (
        <text
          x="50"
          y="66"
          textAnchor="middle"
          fill="#8A857D"
          fontSize="9"
          letterSpacing="2.5"
          fontFamily="var(--font-instrument), system-ui, sans-serif"
        >
          {label}
        </text>
      ) : null}
    </svg>
  );
}
