"use client";

import { Reveal } from "./Reveal";

type Factor = { dir: "up" | "down"; text: string };

/**
 * Honest, number-free factor rows. The list deliberately ends on a real
 * negative so the score reads as candid, not a sales pitch.
 */
const FACTORS: Factor[] = [
  { dir: "up", text: "Your skills cover most of what the role is asking for." },
  { dir: "up", text: "The pay range lands above the target you set." },
  { dir: "up", text: "It's within the locations and work style you chose." },
  { dir: "up", text: "The team's stage matches the kind of work you said you want." },
  { dir: "down", text: "They want more years of experience than you have — so the score reflects that, honestly." },
];

export function WhyItFits() {
  return (
    <section className="px-6 py-28 sm:py-36" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
            Why it fits
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            id="why-heading"
            className="max-w-[18ch] font-light leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Every score, explained.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[520px] text-[1.05rem] font-light leading-relaxed text-[#E5E5E5]">
            A fit score moves up and down for real reasons. PathBuild always
            tells you which — what's working in your favor, and what isn't.
          </p>
        </Reveal>

        <ul className="mt-14 space-y-3">
          {FACTORS.map((f, i) => (
            <Reveal as="li" key={f.text} delay={0.08 * (i + 1)}>
              <div className="flex items-start gap-4 rounded-2xl border border-[rgba(193,80,42,0.2)] bg-[#121214] p-5">
                <span
                  aria-hidden
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.95rem] font-medium ${
                    f.dir === "up"
                      ? "bg-[rgba(193,80,42,0.16)] text-[#E68A52]"
                      : "bg-white/[0.06] text-[#888888]"
                  }`}
                >
                  {f.dir === "up" ? "↑" : "↓"}
                </span>
                <p className="text-[1rem] font-light leading-relaxed text-[#E5E5E5]">
                  <span className="sr-only">
                    {f.dir === "up" ? "Raises the score: " : "Lowers the score: "}
                  </span>
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
