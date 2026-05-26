"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  Bell,
  Check,
  Mail,
  Shield,
} from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { ScrollDrivenFeatures } from "./ScrollDrivenFeatures";
import {
  APP_HERO_SUB,
  APP_HERO_TITLE,
  APP_STORE_URL,
  APP_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  FAQ_ITEMS,
  FREE_FEATURES,
  HOW_IT_WORKS_STEPS,
  PRICING_FOOTNOTE,
  PRICING_SUB,
} from "@/lib/site";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-coral">
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  em,
}: {
  children: React.ReactNode;
  em: React.ReactNode;
}) {
  return (
    <h2 className="mx-auto mb-4 max-w-4xl text-center font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
      {children} <em className="not-italic text-coral">{em}</em>
    </h2>
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
            Available on iOS
          </div>
          <h1 className="mb-6 font-serif text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-ink">
            The smart job tracker that{" "}
            <em className="not-italic text-coral">watches your inbox</em>
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
              <Mail className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              Gmail-aware tracking
            </div>
            <div className="flex items-center gap-1.5 text-[0.82rem] text-ink-muted">
              <Bell className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              Smart notifications
            </div>
            <div className="flex items-center gap-1.5 text-[0.82rem] text-ink-muted">
              <Check className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              Free during early access
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-y border-[rgba(44,34,24,0.04)] bg-white px-5 py-[70px] sm:px-8 sm:py-[100px]"
      >
        <SectionReveal>
          <SectionLabel>About PathBuild</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <SectionTitle em="every application">One place for</SectionTitle>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Job searching is chaos — applications scattered across email,
            LinkedIn, and company portals. Recruiter replies get buried. Follow-ups
            slip. PathBuild brings order to the mess.
          </p>
        </SectionReveal>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <SectionReveal delay={0.08}>
            <div>
              <h3 className="mb-5 font-serif text-[1.6rem] tracking-[-0.01em] text-ink">
                Why We Built PathBuild
              </h3>
              <p className="mb-4 leading-[1.8] text-ink-secondary">
                Too many talented people lose opportunities not because they
                aren&apos;t qualified — but because they lose track of where they
                applied, miss recruiter emails, and forget to follow up.
              </p>
              <p className="leading-[1.8] text-ink-secondary">
                PathBuild eliminates that chaos. Connect Gmail, and every
                recruiter email auto-logs to your pipeline. Get notified when
                companies respond. Discover roles and employers that actually fit
                you — all in one app.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <div>
              <h3 className="mb-5 font-serif text-[1.6rem] tracking-[-0.01em] text-ink">
                The Difference We Make
              </h3>
              <p className="mb-4 leading-[1.8] text-ink-secondary">
                Without PathBuild, it&apos;s easy to apply everywhere and track
                nowhere — missed interview invites buried in Gmail, no idea which
                companies you&apos;ve heard back from.
              </p>
              <p className="mb-6 leading-[1.8] text-ink-secondary">
                With PathBuild, every application lives in one pipeline. Recruiter
                emails auto-import. You get push notifications for interviews,
                offers, and rejections. AI surfaces roles and companies that fit.
              </p>
              <div className="rounded-r-sm border-l-[3px] border-coral bg-cream py-5 pl-6 pr-5">
                <p className="font-serif text-[1.05rem] italic leading-[1.6] text-ink">
                  &quot;Stop losing applications in your inbox. Start tracking
                  smarter.&quot;
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="bg-gradient-to-b from-cream to-cream-dark px-5 py-[70px] sm:px-8 sm:py-[100px]"
      >
        <SectionReveal>
          <SectionLabel>How It Works</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mx-auto mb-4 max-w-4xl text-center font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
            From scattered to <em className="not-italic text-coral">organized</em>{" "}
            in 5 steps
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Connect Gmail. Auto-import applications. Get matched to roles and
            companies. Never miss a recruiter reply again.
          </p>
        </SectionReveal>
        <div className="relative mx-auto max-w-[800px]">
          <div
            className="absolute bottom-14 left-7 top-14 hidden w-0.5 bg-gradient-to-b from-coral-light to-cream-mid md:block"
            aria-hidden
          />
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <SectionReveal key={step.title} delay={i * 0.06}>
              <div className="relative mb-10 flex gap-8 last:mb-0">
                <div className="relative z-[1] flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-coral via-coral-light to-coral font-serif text-xl text-white shadow-[0_4px_16px_rgba(232,115,74,0.25)]">
                  {i + 1}
                </div>
                <div className="flex-1 rounded-xl border border-[rgba(44,34,24,0.06)] bg-white p-8 shadow-pb-sm transition-all hover:-translate-y-0.5 hover:shadow-pb-md">
                  <h3 className="mb-3 font-serif text-xl tracking-[-0.01em] text-ink">
                    {step.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.7] text-ink-secondary">
                    {step.body}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Core loop */}
      <section className="border-t border-[rgba(44,34,24,0.04)] bg-white px-5 py-[70px] sm:px-8 sm:py-[100px]">
        <SectionReveal>
          <SectionLabel>The Core Loop</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mx-auto mb-4 max-w-4xl text-center font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
            Connect once, stay{" "}
            <em className="not-italic text-coral">on top forever</em>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-12 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            PathBuild runs in the background — watching your inbox, updating your
            pipeline, and surfacing new opportunities while you focus on
            interviewing.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="mx-auto mb-12 max-w-[900px] rounded-xl border border-cream-mid bg-cream px-6 py-10 text-center sm:px-10">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-ink">
              <span>Connect Gmail</span>
              <span className="text-lg text-coral">→</span>
              <span>Auto-log emails</span>
              <span className="text-lg text-coral">→</span>
              <span>Track pipeline</span>
              <span className="text-lg text-coral">→</span>
              <span>Get notified</span>
              <span className="text-lg text-coral">→</span>
              <span>Discover matches</span>
              <span className="text-lg text-coral">→</span>
              <span className="font-bold text-coral">Land the role</span>
            </div>
          </div>
        </SectionReveal>
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: "📬",
              title: "Recruiter email arrives",
              body: "A company responds to your application. PathBuild detects it in Gmail and auto-updates your pipeline status.",
            },
            {
              icon: "🔔",
              title: "You get notified",
              body: "Push notification: \"Interview invite from Acme Corp.\" Tap to view details, add notes, or set a reminder.",
            },
            {
              icon: "✓",
              title: "Pipeline stays current",
              body: "Every application is up to date. Follow-ups are scheduled. New role and company matches appear daily.",
            },
          ].map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-[rgba(44,34,24,0.06)] bg-cream p-8 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-pb-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-coral/10 text-xl text-coral">
                  {card.icon}
                </div>
                <h4 className="mb-2 text-[0.95rem] font-bold text-ink">
                  {card.title}
                </h4>
                <p className="text-[0.88rem] leading-[1.6] text-ink-secondary">
                  {card.body}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="bg-gradient-to-b from-cream to-cream-dark px-5 py-[70px] sm:px-8 sm:py-[100px]">
        <SectionReveal>
          <SectionLabel>Who It&apos;s For</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mx-auto mb-4 max-w-4xl text-center font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
            Built for people who are{" "}
            <em className="not-italic text-coral">actively searching</em>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Whether you&apos;re applying to 5 companies or 50, PathBuild keeps
            every application organized and every recruiter reply on your radar.
          </p>
        </SectionReveal>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "Active Job Seekers",
              body: "Applying to multiple roles and need one place to track every application, interview, and follow-up.",
            },
            {
              title: "Career Switchers",
              body: "Exploring a new field and want AI-matched roles plus a tracker that catches every recruiter response.",
            },
            {
              title: "Recent Graduates",
              body: "Starting your first job search and need structure — not another overwhelming spreadsheet.",
            },
            {
              title: "Passive Explorers",
              body: "Not urgently searching but want to discover companies and roles that fit, and track opportunities as they arise.",
            },
          ].map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-[rgba(44,34,24,0.06)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-pb-md">
                <div className="mb-4 h-2 w-2 rounded-full bg-coral" />
                <h4 className="mb-2 font-serif text-[1.15rem] text-ink">
                  {card.title}
                </h4>
                <p className="text-[0.92rem] leading-[1.65] text-ink-secondary">
                  {card.body}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[rgba(44,34,24,0.04)] bg-white px-5 py-[70px] sm:px-8 sm:py-[100px]">
        <SectionReveal>
          <SectionLabel>What We Stand For</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mx-auto mb-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink text-center">
            Our principles
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            The values that shape every feature and interaction inside PathBuild.
          </p>
        </SectionReveal>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "♡",
              title: "Empathy First",
              body: "Job searching is stressful. Every interaction is designed to feel supportive, clear, and judgment-free.",
            },
            {
              icon: "◎",
              title: "Inbox, Not Spreadsheet",
              body: "Your Gmail already has the answers. PathBuild reads recruiter emails so you never manually log status changes again.",
            },
            {
              icon: "✦",
              title: "AI With Purpose",
              body: "We use AI to match you to roles and companies that fit — not to replace your judgment, but to surface what you'd miss.",
            },
            {
              icon: "◇",
              title: "Privacy by Design",
              body: "Read-only Gmail access. We parse metadata, never store full email bodies. Encrypted at rest. Delete anytime.",
            },
            {
              icon: "☺",
              title: "Built for Real People",
              body: "Students, graduates, career-switchers, and anyone juggling multiple applications — PathBuild is for you.",
            },
            {
              icon: "↗",
              title: "Always Improving",
              body: "We ship constantly — better email detection, smarter matching, deeper pipeline insights, and features you ask for.",
            },
          ].map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-[rgba(44,34,24,0.04)] bg-cream p-8 transition-all hover:-translate-y-1 hover:border-[rgba(44,34,24,0.08)] hover:bg-white hover:shadow-pb-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-coral/[0.08] text-[1.3rem] text-coral">
                  {v.icon}
                </div>
                <h4 className="mb-2.5 font-serif text-[1.15rem] text-ink">
                  {v.title}
                </h4>
                <p className="text-[0.9rem] leading-[1.65] text-ink-secondary">
                  {v.body}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
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
            Free <em className="not-italic text-coral">for now</em>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            {PRICING_SUB}
          </p>
        </SectionReveal>
        <SectionReveal>
          <div className="relative mx-auto max-w-[480px] flex flex-col rounded-xl border-2 border-coral-light bg-gradient-to-br from-[#FFF5EF] to-[#FFF0E8] p-10 shadow-[0_8px_32px_rgba(232,115,74,0.12)] transition-all hover:-translate-y-1 hover:shadow-pb-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-gradient-to-br from-coral via-coral-light to-coral px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white shadow-[0_4px_12px_rgba(232,115,74,0.3)]">
              Early Access
            </div>
            <div className="mb-2 mt-2 text-[0.9rem] font-bold tracking-[0.02em] text-ink-secondary">
              Full access
            </div>
            <div className="mb-1 font-serif text-5xl tracking-[-0.03em] text-ink">
              $0
            </div>
            <p className="mb-8 mt-4 border-b border-[rgba(44,34,24,0.06)] pb-8 text-[0.9rem] leading-[1.6] text-ink-secondary">
              Every feature included — application tracker, Gmail watcher, role
              match, company match, and more. No subscription required.
            </p>
            <ul className="mb-8 flex-1 space-y-3">
              {FREE_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex gap-2.5 text-[0.88rem] leading-[1.5] text-ink-secondary"
                >
                  <span className="mt-0.5 shrink-0 font-bold text-coral">
                    ✓
                  </span>
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
              Download Free on the App Store
            </a>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-[480px] text-center text-[0.78rem] leading-[1.6] text-ink-muted">
            {PRICING_FOOTNOTE}
          </p>
        </SectionReveal>
      </section>

      {/* Features — scroll-driven showcase */}
      <ScrollDrivenFeatures />

      {/* FAQ */}
      <section
        id="faq"
        className="bg-gradient-to-b from-cream to-cream-dark px-5 py-[70px] sm:px-8 sm:py-[100px]"
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
          <p className="mx-auto mb-10 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Find answers to common questions below, or reach out to our team
            directly at{" "}
            <a
              href={CONTACT_MAILTO}
              className="font-semibold text-coral hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </SectionReveal>
        <div className="mx-auto max-w-[760px] space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const open = openFaq === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-md border border-[rgba(44,34,24,0.06)] bg-white transition-shadow hover:shadow-pb-sm"
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
          <div className="relative z-[1] mx-auto max-w-[650px] text-center">
            <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.02em] text-ink">
              Stop losing applications in your inbox
            </h2>
            <p className="mb-8 text-base leading-[1.7] text-wood-mid">
              Download PathBuild, connect Gmail, and let every recruiter email
              auto-log to your pipeline. Discover roles and companies that fit.
              Your next opportunity is waiting.
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
