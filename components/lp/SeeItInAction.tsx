"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

type Shot = { src: string; alt: string; caption: string };

const SHOTS: Shot[] = [
  {
    src: "/screenshots/should-you-apply.png",
    alt: "PathBuild 'Should you apply?' sheet showing a 55 of 100 fit score with three supporting reasons and an honest warning that no marketing experience was found.",
    caption: "Every job gets a fit score — and the reasons behind it.",
  },
  {
    src: "/screenshots/jobs-card.png",
    alt: "PathBuild Jobs swipe card with the fit-score ring.",
    caption: "We draft it, you review and send.",
  },
  {
    src: "/screenshots/profile.png",
    alt: "PathBuild profile career report.",
    caption: "Your best-fit career, scored.",
  },
];

export function SeeItInAction() {
  const reduce = useReducedMotion();

  return (
    <section className="px-6 py-24 sm:py-32" aria-labelledby="action-heading">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
            See It In Action
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="action-heading"
            className="max-w-[18ch] font-light leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            The real app — fit-first, from match to send.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-3">
          {SHOTS.map((shot, i) => (
            <motion.div
              key={shot.src}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0, 0, 1] }}
              className="flex flex-col items-center"
            >
              <div
                className="relative w-full max-w-[280px] overflow-hidden rounded-[2.2rem] border border-[rgba(193,80,42,0.25)] bg-[#121214] shadow-[0_30px_80px_-24px_rgba(0,0,0,0.85)]"
                style={{ aspectRatio: "1179 / 2556" }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 80vw, 280px"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 max-w-[280px] text-center text-[0.95rem] font-light leading-relaxed text-[#E5E5E5]">
                {shot.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
