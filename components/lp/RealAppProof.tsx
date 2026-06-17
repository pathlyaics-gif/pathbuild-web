"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

/**
 * Real product proof — actual PathBuild screenshots in clean phone frames that
 * slide + fade in on scroll (Framer Motion useInView), alternating sides. Each
 * phone floats gently so no section is a dead void. Captions are honest and
 * match what's actually on screen (no fabricated UI).
 */
type Shot = { src: string; alt: string; caption: string; body: string };

const SHOTS: Shot[] = [
  {
    src: "/screenshots/jobs-card.png",
    alt: "PathBuild Jobs screen: a job card with a fit-score ring.",
    caption: "Every job, scored — with the reasons",
    body: "A 0–100 fit score on every role, so you know where you stand before you spend a minute applying.",
  },
  {
    src: "/screenshots/should-you-apply.png",
    alt: "PathBuild ‘Should you apply?’ sheet: a fit score with its reasons and an honest warning.",
    caption: "Should you apply? An honest read.",
    body: "Every score comes with the reasons it’s high — and the honest warnings when something doesn’t line up.",
  },
  {
    src: "/screenshots/profile-career.png",
    alt: "PathBuild career report: a best-fit score for a role with a salary range.",
    caption: "Your best-fit career, scored",
    body: "PathBuild learns the direction that actually fits you, then measures every job against it.",
  },
];

function PhoneFrame({ src, alt, float }: { src: string; alt: string; float: boolean }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[280px] rounded-[2.6rem] border border-white/10 bg-[#1b1b1e] p-2.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]"
      animate={float ? { y: [0, -14, 0] } : undefined}
      transition={float ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      <div
        className="relative overflow-hidden rounded-[2.1rem] bg-[#0e0e10]"
        style={{ aspectRatio: "1179 / 2556" }}
      >
        <Image src={src} alt={alt} fill sizes="280px" className="object-cover" />
      </div>
    </motion.div>
  );
}

function Row({ shot, flip }: { shot: Shot; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  const phoneX = reduce ? 0 : flip ? 48 : -48;
  const textX = reduce ? 0 : flip ? -48 : 48;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20"
    >
      <motion.div
        className={flip ? "md:order-2" : "md:order-1"}
        initial={{ opacity: 0, x: phoneX }}
        animate={inView ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
      >
        <PhoneFrame src={shot.src} alt={shot.alt} float={!reduce} />
      </motion.div>

      <motion.div
        className={flip ? "md:order-1" : "md:order-2"}
        initial={{ opacity: 0, x: textX }}
        animate={inView ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0, 0, 1] }}
      >
        <h3
          className="max-w-[18ch] font-light leading-[1.12] tracking-[-0.02em] text-white"
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}
        >
          {shot.caption}
        </h3>
        <p className="mt-5 max-w-[42ch] text-[1.05rem] font-light leading-relaxed text-[#E5E5E5]">
          {shot.body}
        </p>
      </motion.div>
    </div>
  );
}

export function RealAppProof() {
  return (
    <section className="px-6 py-28 sm:py-36" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
            The Real App
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="proof-heading"
            className="max-w-[16ch] font-light leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Not a mockup. The product.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28 sm:gap-36">
          {SHOTS.map((shot, i) => (
            <Row key={shot.src} shot={shot} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
