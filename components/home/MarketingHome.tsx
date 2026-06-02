"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, Check, Compass, Sparkles } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { ScrollDrivenJourney } from "./ScrollDrivenJourney";
import {
  APP_HERO_SUB,
  APP_STORE_URL,
  APP_TAGLINE,
  ANNUAL_PRICE,
  ANNUAL_TRIAL_DAYS,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  FAQ_ITEMS,
  FREE_FEATURES,
  MONTHLY_PRICE,
  PRICING_FOOTNOTE,
  PRO_FEATURES,
} from "@/lib/site";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-coral">
      {children}
    </p>
  );
}

export function MarketingHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 pb-20 pt-[120px]"
      >
        <div
          className="pointer-events-none absolute -right-[15%] -top-[30%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(232,115,74,0.06)_0%,transparent_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-[10%] -bottom-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,115,74,0.04)_0%,transparent_70%)]"
          aria-hidden
        />
        <div className="relative z-[1] mx-auto max-w-[780px] text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-pill border border-cream-mid bg-white px-[18px] py-2 text-xs font-semibold uppercase tracking-[0.1em] text-coral shadow-pb-sm">
            <span
              className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-coral"
              aria-hidden
            />
            Free to start · iOS
          </div>
          <h1 className="mb-6 font-serif text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-ink">
            Discover the career that{" "}
            <em className="not-italic text-coral">actually fits you</em>
          </h1>
          <p className="mx-auto mb-10 max-w-[560px] text-lg leading-[1.7] text-ink-secondary">
            {APP_HERO_SUB}
          </p>
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill bg-ebony px-8 py-4 text-[0.95rem] font-semibold text-white shadow-pb-md transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-coral hover:shadow-glow"
            >
              <ArrowUp className="h-[18px] w-[18px] rotate-180" strokeWidth={2} />
              Download on the App Store
            </a>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 rounded-pill border-[1.5px] border-cream-mid bg-transparent px-7 py-4 text-[0.95rem] font-semibold text-ink-secondary transition-all hover:border-wood-light hover:bg-white hover:text-ink"
            >
              See How It Works
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-1.5 text-[0.82rem] text-ink-muted">
              <Sparkles className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              AI-powered career quiz
            </div>
            <div className="flex items-center gap-1.5 text-[0.82rem] text-ink-muted">
              <Compass className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              Real companies hiring now
            </div>
            <div className="flex items-center gap-1.5 text-[0.82rem] text-ink-muted">
              <Check className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              No résumé required
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-driven section #1 — How It Works */}
      <section
        id="how-it-works"
        aria-label="How PathBuild works"
        className="relative"
      >
        <div className="border-t border-[rgba(44,34,24,0.06)] bg-white px-5 py-12 sm:px-8 sm:py-16">
          <SectionReveal>
            <SectionLabel>How It Works</SectionLabel>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h2 className="mx-auto max-w-3xl text-center font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
              From <em className="not-italic text-coral">curious</em>{" "}
              to <em className="not-italic text-coral">hired</em>
            </h2>
          </SectionReveal>
        </div>
        <ScrollDrivenJourney />
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="bg-gradient-to-b from-cream to-cream-dark px-5 py-[70px] sm:px-8 sm:py-[100px]"
      >
        <SectionReveal>
          <SectionLabel>Pricing</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mx-auto mb-4 max-w-4xl text-center font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
            Start free.{" "}
            <em className="not-italic text-coral">Go Pro</em> when you&apos;re ready.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-12 max-w-[560px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            The core experience is free forever. Pro unlocks the tools that
            actually get you hired.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
            {/* Free card */}
            <div className="flex flex-col rounded-2xl border border-[rgba(44,34,24,0.08)] bg-white p-8 shadow-pb-sm">
              <div className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-ink-secondary">
                Free
              </div>
              <div className="mb-1 font-serif text-4xl tracking-[-0.03em] text-ink">
                $0
              </div>
              <p className="mb-6 text-[0.85rem] text-ink-secondary">
                Forever free · no credit card
              </p>
              <ul className="mb-8 flex-1 space-y-3">
                {FREE_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[0.87rem] leading-[1.5] text-ink-secondary"
                  >
                    <span className="mt-0.5 shrink-0 font-bold text-coral">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-pill border border-[rgba(44,34,24,0.12)] bg-white py-3 text-center text-[0.9rem] font-semibold text-ink transition-all hover:-translate-y-px hover:border-coral hover:text-coral"
              >
                Download Free
              </a>
            </div>

            {/* Pro card */}
            <div className="relative flex flex-col rounded-2xl border-2 border-coral bg-gradient-to-br from-[#FFF5EF] to-[#FFF0E8] p-8 shadow-[0_8px_32px_rgba(232,115,74,0.15)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-gradient-to-br from-coral via-coral-light to-coral px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_4px_12px_rgba(232,115,74,0.3)]">
                {ANNUAL_TRIAL_DAYS}-Day Free Trial
              </div>
              <div className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-coral">
                PathBuild Pro
              </div>
              <div className="mb-1">
                <span className="font-serif text-4xl tracking-[-0.03em] text-ink">
                  {ANNUAL_PRICE}
                </span>
                <span className="ml-1.5 text-[0.85rem] text-ink-secondary">/year</span>
              </div>
              <p className="mb-1 text-[0.85rem] text-ink-secondary">
                {ANNUAL_TRIAL_DAYS}-day free trial · cancel anytime
              </p>
              <p className="mb-6 text-[0.8rem] text-ink-muted">
                or {MONTHLY_PRICE}/month · {ANNUAL_TRIAL_DAYS}-day free trial
              </p>
              <ul className="mb-8 flex-1 space-y-3">
                {PRO_FEATURES.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[0.87rem] leading-[1.5] text-ink-secondary"
                  >
                    <span className="mt-0.5 shrink-0 font-bold text-coral">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-pill bg-ebony py-3.5 text-center text-[0.95rem] font-semibold text-white shadow-pb-md transition-all hover:-translate-y-px hover:bg-coral hover:shadow-glow"
              >
                Start {ANNUAL_TRIAL_DAYS}-Day Free Trial
              </a>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-[560px] text-center text-[0.78rem] leading-[1.6] text-ink-muted">
            {PRICING_FOOTNOTE}
          </p>
        </SectionReveal>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-t border-[rgba(44,34,24,0.04)] bg-white px-5 py-[70px] sm:px-8 sm:py-[100px]"
      >
        <SectionReveal>
          <SectionLabel>Support</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mx-auto mb-4 max-w-4xl text-center font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
            Frequently asked <em className="not-italic text-coral">questions</em>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-10 max-w-[560px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Quick answers, or reach us at{" "}
            <a
              href={CONTACT_MAILTO}
              className="font-semibold text-coral hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </SectionReveal>
        <div className="mx-auto max-w-[720px] space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const open = openFaq === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-md border border-[rgba(44,34,24,0.06)] bg-cream transition-shadow hover:shadow-pb-sm"
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-sans text-[0.95rem] font-semibold leading-snug text-ink"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                >
                  {item.q}
                  <span
                    className={`shrink-0 text-2xl font-light text-coral transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="px-6 pb-5 text-[0.9rem] leading-[1.7] text-ink-secondary">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDEADF] via-[#FCD5C4] to-[#F9C2AC] px-5 py-16 sm:px-8 sm:py-20">
        <div
          className="pointer-events-none absolute -right-[20%] -top-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,transparent_70%)]"
          aria-hidden
        />
        <SectionReveal>
          <div className="relative z-[1] mx-auto max-w-[620px] text-center">
            <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.02em] text-ink">
              Find the career that fits.
            </h2>
            <p className="mb-8 text-base leading-[1.7] text-wood-mid">
              Five minutes of smart questions, AI-matched careers, and the
              companies hiring for them. Free to start.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill bg-ebony px-8 py-4 text-[0.95rem] font-semibold text-white shadow-pb-md transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-coral hover:shadow-glow"
            >
              Download on the App Store
            </a>
            <p className="mt-6 text-[0.8rem] text-wood-mid/80">{APP_TAGLINE}</p>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
