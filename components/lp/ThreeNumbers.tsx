"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

/**
 * Madrone/Apollo-style proof beat: three huge HONEST numbers with tiny
 * uppercase labels, lots of air between them, revealing in on scroll. The
 * whitespace is never dead — a slow terracotta glow breathes behind the row.
 *
 * All three are real product facts, not fabricated stats or user counts.
 */
const NUMBERS = [
  { value: "0–100", label: "Fit score on every job" },
  { value: "3 → 200", label: "Applications / month with Pro" },
  { value: "1 tap", label: "Apply, drafted for you" },
];

export function ThreeNumbers() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen items-center px-6 py-28"
      aria-label="PathBuild by the numbers"
    >
      {/* Always-on motion in the whitespace — a slow breathing terracotta light. */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle, rgba(193,80,42,0.14), rgba(193,80,42,0.04) 42%, transparent 68%)",
        }}
        animate={reduce ? undefined : { opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
        transition={reduce ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-y-20 text-center md:grid-cols-3 md:gap-x-10">
        {NUMBERS.map((n, i) => (
          <Reveal key={n.label} delay={0.1 * i} className="flex flex-col items-center">
            <span
              className="font-normal leading-none tracking-[-0.02em] text-white"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              {n.value}
            </span>
            <span className="mt-5 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
              {n.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
