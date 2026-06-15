"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AppBadge } from "./AppBadge";
import { Reveal } from "./Reveal";

export function ClosingCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 sm:pt-36" aria-labelledby="cta-heading">
      {/* Soft terracotta radial glow behind the CTA — slow breathing pulse. */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(193,80,42,0.12), transparent 70%)",
        }}
        animate={reduce ? undefined : { opacity: [0.55, 1, 0.55] }}
        transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[760px] text-center">
        <Reveal>
          <p className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
            Your next move
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="cta-heading"
            className="font-light leading-[1.06] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
          >
            Stop guessing.
            <br />
            <span className="italic text-[#E5E5E5]">Start seeing your fit.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-[480px] text-[1.05rem] font-light leading-relaxed text-[#E5E5E5]">
            Find the jobs that fit you, see why they do, and apply on your terms.
            PathBuild is built for iPhone.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <motion.div
            className="mt-10 flex justify-center"
            whileHover={reduce ? undefined : { y: -2 }}
          >
            <AppBadge />
          </motion.div>
        </Reveal>
      </div>

      {/* Minimal footer — links to the existing legal/support pages, untouched. */}
      <footer className="relative mx-auto mt-28 max-w-[1100px] border-t border-white/[0.08] pt-8">
        <div className="flex flex-col items-center justify-between gap-5 text-[0.85rem] text-[#888888] sm:flex-row">
          <p>© {new Date().getFullYear()} PathBuild. All rights reserved.</p>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            <Link href="/legal/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/legal/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="/support" className="transition-colors hover:text-white">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </section>
  );
}
