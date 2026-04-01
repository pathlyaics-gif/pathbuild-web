"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  Check,
  Clock,
  Shield,
} from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

const APP_STORE =
  "https://apps.apple.com/app/pathbuild/id6743108030";

const MONTHLY_FEATURES = [
  "Unlimited daily guided missions",
  "Role-specific roadmap with stages & milestones",
  "Readiness percentage & progress tracking",
  "Streaks, velocity, and coverage metrics",
  "Proof builder — resume bullets & LinkedIn copy",
  "Job posting analyzer",
  "Application tracker & pipeline",
  "Weekly AI coaching sessions",
  "Interview prep question banks",
];

const ANNUAL_FEATURES = [
  "Everything in Monthly",
  "Save ~$110/year vs monthly billing",
  "Priority access to new features",
  "Export your career roadmap",
  "Free trial included",
];

const FEATURE_CARDS = [
  {
    title: "Daily Guided Missions",
    body: "One focused, step-by-step mission each day tailored to your target role, current stage, and pace. Complete in 30–60 minutes.",
  },
  {
    title: "Role-Specific Roadmap",
    body: "Stages, requirement areas, skills, and milestones — everything your target role demands, organized into a clear path forward.",
  },
  {
    title: "Readiness Tracking",
    body: "A real-time readiness percentage that shows how close you are to being hire-ready, plus velocity, coverage, and streak metrics.",
  },
  {
    title: "Proof Builder",
    body: "Turn completed missions and milestones into polished resume bullet points and LinkedIn copy. Your proof is built from real work.",
  },
  {
    title: "Job Posting Analyzer",
    body: "Paste any job posting for instant skill-gap analysis. See what you meet, what you're missing, and exactly what to work on.",
  },
  {
    title: "Application Tracker",
    body: "Manage your job search pipeline — track companies, application statuses, and interviews all in one place.",
  },
  {
    title: "Weekly AI Coaching",
    body: "Adaptive coaching every week based on your pace, progress, blockers, and goals. Like a career mentor in your pocket.",
  },
  {
    title: "Interview Prep",
    body: "Role-specific interview question banks so you can practice and prepare with confidence before every interview.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is PathBuild?",
    a: 'PathBuild is a premium career execution app for iOS — think "Duolingo for your career." It helps students, graduates, career-switchers, and job seekers choose a realistic target role, get a clear roadmap, and complete one focused daily mission that builds real proof toward getting hired.',
  },
  {
    q: "How is PathBuild different from a career quiz?",
    a: "Most career tools give you a list of job titles and stop there. PathBuild goes much further — it creates a role-specific roadmap, gives you one guided mission each day, tracks your readiness in real time, turns completed work into resume bullets and LinkedIn copy, and provides weekly AI coaching. It's an ongoing career execution system.",
  },
  {
    q: "What does a daily mission look like?",
    a: "Each daily mission is a focused, step-by-step task that takes 30–60 minutes. Missions include a brief overview, micro-steps to check off, and a completion review. They're designed to build real skills, proof, or progress toward your target role. On busy days, Quick Win missions offer a lighter option.",
  },
  {
    q: "How does the AI career matching work?",
    a: "During onboarding, you answer a quick questionnaire about your education, experience, interests, strengths, constraints, and pace. Our AI cross-references your unique profile against thousands of career paths, market data, and salary trends to find your best-fit matches — each with a suitability score and difficulty rating.",
  },
  {
    q: "Is there a free trial?",
    a: "The Monthly plan ($19.99/month) does not include a free trial — download PathBuild on the App Store and subscribe when you are ready. Apple may offer a free trial to eligible new subscribers who choose the Annual plan; if available, you get full access to every Pro feature during the trial, and you will not be charged if you cancel before it ends. Eligibility and duration are determined by Apple and are limited to one per Apple ID.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel anytime through your Apple ID settings: Settings → Apple ID → Subscriptions → PathBuild. Cancellation takes effect at the end of your current billing period. You keep full access until then. No penalties, no hassle.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We never sell your personal information. We do not track you across apps. We use encryption to protect your data both in transit and at rest. We do not send your name or email to AI services. You can delete your account and all data at any time from the app settings.",
  },
  {
    q: "What platforms is PathBuild available on?",
    a: "PathBuild is currently available on iOS (iPhone and iPad). We are actively working on expanding to additional platforms in the future.",
  },
];

const STEPS = [
  {
    title: "Tell us about yourself",
    body: "Answer a quick, tap-friendly questionnaire about your education, experience, interests, strengths, constraints, and pace. It takes less than 5 minutes — mostly tapping and selecting, not heavy typing.",
  },
  {
    title: "AI matches you to realistic career paths",
    body: "Our AI cross-references your profile against thousands of career paths, market data, salary trends, and success patterns — each match comes with a suitability score, difficulty rating, and salary range.",
  },
  {
    title: "Pick your target role and get your roadmap",
    body: "Choose the career path that excites you most. PathBuild creates a role-specific roadmap broken into stages, requirement areas, and actionable steps — showing exactly what your target role demands and where you stand.",
  },
  {
    title: "Complete one daily mission",
    body: "Every day, PathBuild gives you one focused, guided mission — a step-by-step task designed to build real progress toward your target role. Open the app, do your mission, close the app. 30–60 minutes. That is it.",
  },
  {
    title: "Build proof, track readiness, get hired",
    body: "As you complete missions, your readiness percentage grows. Completed work automatically becomes resume bullet points and LinkedIn copy. Analyze job postings, track applications, and get weekly AI coaching.",
  },
];

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
          <h1 className="mb-6 font-serif text-[clamp(3rem,6.5vw,4.5rem)] leading-[1.08] tracking-[-0.03em] text-ink">
            From lost to{" "}
            <em className="not-italic text-coral">hire&#8209;ready,</em>
            <br />
            one mission at a time
          </h1>
          <p className="mx-auto mb-10 max-w-[560px] text-lg leading-[1.7] text-ink-secondary">
            PathBuild turns vague career goals into a clear roadmap with one
            focused daily mission — so you always know what to do next and can
            prove you&apos;re ready.
          </p>
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={APP_STORE}
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
              <Shield className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              Privacy-first
            </div>
            <div className="flex items-center gap-1.5 text-[0.82rem] text-ink-muted">
              <Clock className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              30-60 min / day
            </div>
            <div className="flex items-center gap-1.5 text-[0.82rem] text-ink-muted">
              <Check className="h-4 w-4 shrink-0 text-coral" strokeWidth={2} />
              Subscriptions via the App Store
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
          <SectionTitle em="measurable momentum">
            Clarity, structure, and
          </SectionTitle>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Most people don&apos;t fail because they aren&apos;t capable. They
            fail because career change is ambiguous — too many options, no
            shared plan, and no feedback on progress.
          </p>
        </SectionReveal>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <SectionReveal delay={0.08}>
            <div>
              <h3 className="mb-5 font-serif text-[1.6rem] tracking-[-0.01em] text-ink">
                Our Mission
              </h3>
              <p className="mb-4 leading-[1.8] text-ink-secondary">
                Too many talented people feel stuck in their careers — not
                because they lack ability, but because they lack a realistic
                plan they can actually follow. They spend months googling
                advice, overthinking options, and never making real progress.
              </p>
              <p className="leading-[1.8] text-ink-secondary">
                PathBuild exists to fix that. Our app turns vague career goals
                into a specific target role, shows you exactly what that role
                requires, and gives you one focused daily mission that builds
                real, measurable progress.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <div>
              <h3 className="mb-5 font-serif text-[1.6rem] tracking-[-0.01em] text-ink">
                The Difference We Make
              </h3>
              <p className="mb-4 leading-[1.8] text-ink-secondary">
                Without PathBuild, it&apos;s easy to stay busy but scattered —
                scrolling job boards, rewriting the same resume, and never
                knowing if you&apos;re on track.
              </p>
              <p className="mb-6 leading-[1.8] text-ink-secondary">
                With PathBuild, you always know which role you&apos;re building
                toward, what to do today, what&apos;s still missing, what
                you&apos;ve already proved, and how close you are to being
                hire-ready.
              </p>
              <div className="rounded-r-sm border-l-[3px] border-coral bg-cream py-5 pl-6 pr-5">
                <p className="font-serif text-[1.05rem] italic leading-[1.6] text-ink">
                  &quot;Open the app once a day, do one meaningful task, get
                  closer to your target role.&quot;
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
            From lost to <em className="not-italic text-coral">hire-ready</em>{" "}
            in 5 steps
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Choose a role. Do one mission a day. Build proof. Get hired. The
            process is simple, guided, and designed to fit into 30–60 minutes of
            your day.
          </p>
        </SectionReveal>
        <div className="relative mx-auto max-w-[800px]">
          <div
            className="absolute bottom-14 left-7 top-14 hidden w-0.5 bg-gradient-to-b from-coral-light to-cream-mid md:block"
            aria-hidden
          />
          {STEPS.map((step, i) => (
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
            A simple daily habit that{" "}
            <em className="not-italic text-coral">compounds</em>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-12 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            PathBuild is built around a simple daily loop that compounds over
            time — small actions building real skills, real proof, and real
            readiness.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="mx-auto mb-12 max-w-[900px] rounded-xl border border-cream-mid bg-cream px-6 py-10 text-center sm:px-10">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-ink">
              <span>Choose role</span>
              <span className="text-lg text-coral">→</span>
              <span>Do mission</span>
              <span className="text-lg text-coral">→</span>
              <span>Log completion</span>
              <span className="text-lg text-coral">→</span>
              <span>Increase readiness</span>
              <span className="text-lg text-coral">→</span>
              <span>Unlock next stage</span>
              <span className="text-lg text-coral">→</span>
              <span>Build proof</span>
              <span className="text-lg text-coral">→</span>
              <span className="font-bold text-coral">Get hired</span>
            </div>
          </div>
        </SectionReveal>
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: "☀️",
              title: "Morning",
              body: 'Open the app. See today\'s mission on the Home screen. Tap "Begin today\'s task."',
            },
            {
              icon: "⚡",
              title: "30–60 Minutes",
              body: "Complete the guided mission — follow micro-steps, check them off, review your work.",
            },
            {
              icon: "✓",
              title: "Done",
              body: "Your readiness updates. Your streak grows. Progress is logged. Close the app. That's it for today.",
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
            <em className="not-italic text-coral">ready to move</em>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Whether you&apos;re just starting out or pivoting mid-career,
            PathBuild gives you the structure and guidance to make real
            progress.
          </p>
        </SectionReveal>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "Students & Recent Graduates",
              body: "Who have no idea what career to pursue and need a clear starting point with real direction.",
            },
            {
              title: "Career Switchers",
              body: "Who want to transition into a new field but don't know what steps to take or whether they're qualified.",
            },
            {
              title: "Job Seekers",
              body: "Who are applying randomly and need structure, direction, and tools to be more strategic.",
            },
            {
              title: "People Who Feel Stuck",
              body: "Anyone who wants to improve their career in 30–60 minutes a day with real guidance, not another generic productivity app.",
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
            The values that shape every feature, mission, and interaction inside
            PathBuild.
          </p>
        </SectionReveal>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "♡",
              title: "Empathy First",
              body: "Career decisions are deeply personal. We designed every interaction to feel supportive, encouraging, and judgment-free.",
            },
            {
              icon: "◎",
              title: "One Thing at a Time",
              body: "Most people fail at career planning because they try to do everything at once. PathBuild gives you one mission per day. That is it.",
            },
            {
              icon: "✦",
              title: "AI With Purpose",
              body: "We use AI not to replace human judgment, but to turn vague goals into realistic target roles and personalized roadmaps.",
            },
            {
              icon: "◇",
              title: "Privacy by Design",
              body: "Your career data is personal. We never sell your information, don't track you across apps, and use encryption to protect everything.",
            },
            {
              icon: "☺",
              title: "Built for Real People",
              body: "Students, graduates, career-switchers, job seekers, parents returning to work — PathBuild is for anyone who feels lost or stuck.",
            },
            {
              icon: "↗",
              title: "Always Improving",
              body: "We ship improvements constantly. New mission types, better AI models, deeper insights, and features our users ask for.",
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
            Simple, <em className="not-italic text-coral">transparent</em>{" "}
            pricing
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            Download PathBuild on the App Store to subscribe. Two plans, no
            hidden fees — cancel anytime in your Apple ID settings. Apple may
            offer a free trial to eligible subscribers on the Annual plan only.
          </p>
        </SectionReveal>
        <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-6 md:grid-cols-2">
          <SectionReveal>
            <div className="relative flex h-full flex-col rounded-xl border border-[rgba(44,34,24,0.06)] bg-white p-10 transition-all hover:-translate-y-1 hover:shadow-pb-lg">
              <div className="mb-2 text-[0.9rem] font-bold tracking-[0.02em] text-ink-secondary">
                Monthly
              </div>
              <div className="mb-1 font-serif text-5xl tracking-[-0.03em] text-ink">
                $19.99{" "}
                <span className="font-sans text-base font-normal text-ink-muted">
                  /month
                </span>
              </div>
              <p className="mb-8 border-b border-[rgba(44,34,24,0.06)] pb-8 text-[0.9rem] leading-[1.6] text-ink-secondary">
                Full access to every PathBuild Pro feature, billed monthly.
                Great if you want maximum flexibility.
              </p>
              <ul className="mb-8 flex-1 space-y-3">
                {MONTHLY_FEATURES.map((f) => (
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
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-pill border-[1.5px] border-cream-mid py-3.5 text-center text-[0.95rem] font-semibold text-ink transition-all hover:border-wood-light hover:bg-cream"
              >
                Try it on the App Store
              </a>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <div className="relative flex h-full flex-col rounded-xl border-2 border-coral-light bg-gradient-to-br from-[#FFF5EF] to-[#FFF0E8] p-10 shadow-[0_8px_32px_rgba(232,115,74,0.12)] transition-all hover:-translate-y-1 hover:shadow-pb-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-gradient-to-br from-coral via-coral-light to-coral px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white shadow-[0_4px_12px_rgba(232,115,74,0.3)]">
                Best Value — Save 46%
              </div>
              <div className="mb-2 mt-2 text-[0.9rem] font-bold tracking-[0.02em] text-ink-secondary">
                Annual
              </div>
              <div className="mb-1 font-serif text-5xl tracking-[-0.03em] text-ink">
                $129.99{" "}
                <span className="font-sans text-base font-normal text-ink-muted">
                  /year
                </span>
              </div>
              <p className="text-[0.85rem] text-ink-muted">
                That&apos;s just ~$10.83/month
              </p>
              <p className="mb-8 mt-4 border-b border-[rgba(44,34,24,0.06)] pb-8 text-[0.9rem] leading-[1.6] text-ink-secondary">
                Everything in Monthly, billed once per year. Save over $100
                compared to monthly billing.
              </p>
              <ul className="mb-8 flex-1 space-y-3">
                {ANNUAL_FEATURES.map((f) => (
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
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-pill bg-ebony py-3.5 text-center text-[0.95rem] font-semibold text-white shadow-pb-md transition-all hover:-translate-y-px hover:bg-coral hover:shadow-glow"
              >
                Start Free Trial
              </a>
            </div>
          </SectionReveal>
        </div>
        <SectionReveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-[860px] text-center text-[0.78rem] leading-[1.6] text-ink-muted">
            Subscriptions are purchased and managed in the App Store. Payments
            are processed by Apple. Subscriptions auto-renew unless canceled at
            least 24 hours before the end of the current period. A free trial,
            when available, applies to eligible new subscribers on the Annual
            plan only — not to Monthly.
          </p>
        </SectionReveal>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-[rgba(44,34,24,0.04)] bg-white px-5 py-[70px] sm:px-8 sm:py-[100px]"
      >
        <SectionReveal>
          <SectionLabel>Everything Included</SectionLabel>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <h2 className="mx-auto mb-4 max-w-4xl text-center font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em] text-ink">
            What you get with{" "}
            <em className="not-italic text-coral">PathBuild Pro</em>
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.16}>
          <p className="mx-auto mb-14 max-w-[600px] text-center text-[1.05rem] leading-[1.7] text-ink-secondary">
            PathBuild Pro turns vague career goals into daily action. Here is
            everything included in your subscription.
          </p>
        </SectionReveal>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map((fc, i) => (
            <SectionReveal key={fc.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-xl border border-[rgba(44,34,24,0.04)] bg-cream p-7 transition-all hover:-translate-y-1 hover:border-[rgba(44,34,24,0.08)] hover:bg-white hover:shadow-pb-md">
                <h4 className="mb-2 text-[0.92rem] font-bold text-ink">
                  {fc.title}
                </h4>
                <p className="text-[0.84rem] leading-[1.6] text-ink-secondary">
                  {fc.body}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

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
              Ready to start your first mission?
            </h2>
            <p className="mb-8 text-base leading-[1.7] text-wood-mid">
              Download PathBuild, complete the 5-minute questionnaire, pick your
              target role, and do your first daily mission today. Your career is
              waiting.
            </p>
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill bg-ebony px-8 py-4 text-[0.95rem] font-semibold text-white shadow-pb-md transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-coral hover:shadow-glow"
            >
              Download on the App Store
            </a>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
