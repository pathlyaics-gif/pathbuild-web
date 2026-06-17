"use client";

import { Reveal } from "./Reveal";

/**
 * Honest credibility strip — what PathBuild is actually built on and how it
 * treats your data. No fabricated partner logos, no fake ratings.
 */
const ITEMS = ["Built for iPhone", "Powered by Supabase", "Private by design"];

export function Credibility() {
  return (
    <section className="px-6 py-24" aria-label="What PathBuild is built on">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#888888]">
            Built to be trusted
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[1.05rem] font-light text-[#E5E5E5]">
            {ITEMS.map((item, i) => (
              <li key={item} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="text-[#C1502A]" aria-hidden>
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
