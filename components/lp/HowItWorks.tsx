"use client";

import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "See your fit",
    body: "Every job gets a 0–100 fit score that explains why it matches your skills, pay, and goals — not just whether it's open.",
  },
  {
    title: "Swipe to apply",
    body: "Swipe right on the roles worth your time, left to skip. You decide what moves forward — PathBuild just lines up the ones that fit.",
  },
  {
    title: "We draft, you send",
    body: "PathBuild drafts a tailored application from your profile. You review it, edit it, and send it. Nothing is ever sent automatically.",
  },
];

export function HowItWorks() {
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

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={0.1 * (i + 1)}>
              <div className="h-full rounded-2xl border border-[rgba(193,80,42,0.2)] bg-[#121214] p-8">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
                  0{i + 1}
                </span>
                <h3
                  className="mt-5 text-[1.4rem] font-normal text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] font-light leading-relaxed text-[#E5E5E5]">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
