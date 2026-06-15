"use client";

import { Reveal } from "./Reveal";
import { AnimatedFitRing } from "./AnimatedFitRing";

type Factor = { dir: "up" | "down"; factor: string; line: string };

/**
 * Calm, advisor-voice factor rows — no fabricated numbers. The list ends on a
 * real negative so the score reads as candid, not a sales pitch.
 */
const FACTORS: Factor[] = [
  {
    dir: "up",
    factor: "Target role",
    line: "It lines up with the direction you set during onboarding.",
  },
  {
    dir: "up",
    factor: "Salary range",
    line: "The posted pay sits at or above what you told us you're aiming for.",
  },
  {
    dir: "up",
    factor: "Location",
    line: "It's in a place and work style you said you'd consider.",
  },
  {
    dir: "down",
    factor: "Experience",
    line: "It asks for a few more years than you have right now — so the score holds back, and tells you.",
  },
];

export function WhyItFits() {
  return (
    <section className="px-6 py-28 sm:py-36" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
            Why It Fits
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="why-heading"
            className="font-light leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Every match, explained.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[520px] text-[1.05rem] font-light leading-relaxed text-[#E5E5E5]">
            A fit score moves up and down for real reasons. PathBuild always
            shows its work — what's lifting the score, and what's pulling it
            down.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-[0.85fr_1fr] md:gap-16">
          {/* Animated score ring — illustrative example */}
          <Reveal>
            <div className="flex flex-col items-center rounded-2xl border border-[rgba(193,80,42,0.2)] bg-[#121214] px-8 py-12">
              <AnimatedFitRing value={92} label="Job fit" />
              <p className="mt-8 text-[1rem] text-white">Senior Product Designer</p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-[#888888]">
                Example breakdown
              </p>
            </div>
          </Reveal>

          {/* Factor rows */}
          <div>
            {FACTORS.map((f, i) => (
              <Reveal as="div" key={f.factor} delay={0.08 * (i + 1)}>
                <div className="flex items-start gap-5 border-b border-white/[0.07] py-5">
                  <span
                    aria-hidden
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.95rem] ${
                      f.dir === "up"
                        ? "bg-[rgba(193,80,42,0.16)] text-[#E68A52]"
                        : "bg-white/[0.06] text-[#888888]"
                    }`}
                  >
                    {f.dir === "up" ? "↑" : "↓"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
                      {f.factor}
                      <span className="sr-only">
                        {f.dir === "up" ? " — raises the score" : " — lowers the score"}
                      </span>
                    </p>
                    <p className="mt-1.5 text-[1rem] font-light leading-relaxed text-[#E5E5E5]">
                      {f.line}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
