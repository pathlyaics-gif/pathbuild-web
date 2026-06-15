"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

export function RepliesTracked() {
  const reduce = useReducedMotion();

  return (
    <section className="px-6 py-28 sm:py-36" aria-labelledby="replies-heading">
      <div className="mx-auto grid max-w-[1100px] items-center gap-14 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
              Replies, tracked
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="replies-heading"
              className="max-w-[16ch] font-light leading-[1.08] tracking-[-0.02em] text-white"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Replies land in the app.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[440px] text-[1.05rem] font-light leading-relaxed text-[#E5E5E5]">
              When a recruiter writes back, it shows up in PathBuild and your
              phone lets you know — so you're not digging through your inbox to
              find it.
            </p>
          </Reveal>
        </div>

        {/* Subtle notification micro-animation. Labelled as an example so the
            mock copy can't be read as a real message. */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-[400px]">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0, 0, 1] }}
              className="flex items-start gap-3 rounded-2xl border border-[rgba(193,80,42,0.2)] bg-[#121214] p-4"
            >
              <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                {!reduce && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C1502A] opacity-60" />
                )}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E68A52]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[0.9rem] font-medium text-white">New reply</p>
                  <span className="text-[0.7rem] text-[#888888]">now</span>
                </div>
                <p className="mt-1 text-[0.875rem] font-light leading-relaxed text-[#E5E5E5]">
                  A recruiter replied to one of your applications.
                </p>
              </div>
            </motion.div>
            <p className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.25em] text-[#888888]">
              Example
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
