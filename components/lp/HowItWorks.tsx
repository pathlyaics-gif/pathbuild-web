"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const ICON = "h-7 w-7 text-[#C1502A]";

const STEPS = [
  {
    label: "See your fit",
    body: "A 0–100 score shows how well each job matches you — and why.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ICON} aria-hidden>
        <circle cx="12" cy="12" r="9" opacity="0.25" />
        <path d="M12 3a9 9 0 0 1 8 13" strokeLinecap="round" />
        <path d="M9 12.5l2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Swipe to apply",
    body: "Swipe right to apply, left to skip. You decide what moves forward.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ICON} aria-hidden>
        <path d="M14 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 12H8" strokeLinecap="round" />
        <path d="M10 17l-4-5 4-5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    label: "We draft, you send",
    body: "We write a tailored application; you review and send it. Nothing goes out on its own.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={ICON} aria-hidden>
        <path d="M21 3L3 10.5l6.6 2.4L12 21l9-18z" strokeLinejoin="round" />
        <path d="M9.6 12.9L21 3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();
  return (
    <section className="px-6 py-28 sm:py-36" aria-labelledby="how-heading">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
            How PathBuild Works
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="how-heading"
            className="max-w-[20ch] font-light leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            From your profile to applied — without the guesswork.
          </h2>
        </Reveal>

        <div
          className="mt-16 grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {STEPS.map((step, i) => (
            <Reveal key={step.label} delay={0.1 * (i + 1)}>
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="h-full border-t border-[rgba(193,80,42,0.2)] bg-[#121214] p-8 transition-colors duration-300 hover:border-[rgba(193,80,42,0.55)]"
              >
                {step.icon}
                <h3
                  className="mt-5 text-[1.4rem] font-normal text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.label}
                </h3>
                <p className="mt-3 text-[0.95rem] font-light leading-relaxed text-[#E5E5E5]">
                  {step.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
