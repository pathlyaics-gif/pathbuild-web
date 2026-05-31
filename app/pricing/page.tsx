import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import {
  APP_STORE_URL,
  ANNUAL_PRICE,
  ANNUAL_TRIAL_DAYS,
  FREE_FEATURES,
  MONTHLY_PRICE,
  PRICING_FOOTNOTE,
  PRICING_SUB,
  PRO_FEATURES,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — PathBuild",
  description:
    "PathBuild is free to start. Upgrade to Pro for salary intel, AI tailoring, interview prep, and side-by-side comparisons. $14.99/mo or $24.99/yr with a 7-day free trial.",
};

const FREE_ROWS = [
  "AI career quiz",
  "Career matches with fit scores",
  "Company discovery",
  "Unlimited saves",
  "Full job search & details",
  "Custom stages & reminders",
];

const PRO_ROWS = [
  "Everything in Free",
  "Salary intel",
  "AI resume tailoring",
  "Interview prep",
  "Job-fit analysis",
  "Side-by-side comparisons",
];

const PRICING_FAQ = [
  {
    q: "What's included for free?",
    a: "The full discovery experience — AI career quiz, career matches with fit scores, company discovery, unlimited saves, job search, and custom application stages. Free forever, no credit card.",
  },
  {
    q: "What does Pro unlock?",
    a: "Salary intel, AI-tailored resume notes per company, interview prep questions, job-fit analysis of any posting, and side-by-side company comparisons — every tool to go from discovery to offer.",
  },
  {
    q: "Does the annual plan really have a free trial?",
    a: `Yes. The annual plan includes a ${ANNUAL_TRIAL_DAYS}-day free trial. No charge until the trial ends. You can cancel before Day ${ANNUAL_TRIAL_DAYS} and pay nothing. The monthly plan has no trial.`,
  },
  {
    q: "How do I cancel?",
    a: "Settings → Apple ID → Subscriptions → PathBuild. Cancellation takes effect at the end of the current billing period. You keep Pro access until it expires.",
  },
  {
    q: "Are there refunds?",
    a: "Refunds are handled by Apple at reportaproblem.apple.com. PathBuild does not process refunds directly.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-cream pt-36 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Hero */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-coral">
            Pricing
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
            Start free.{" "}
            <em className="not-italic text-coral">Go Pro</em> when you're ready.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-[1.75] text-ink-secondary">
            {PRICING_SUB}
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-w-3xl mx-auto">

          {/* Free */}
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
                  className="flex items-start gap-2.5 text-[0.88rem] leading-[1.5] text-ink-secondary"
                >
                  <Check
                    size={14}
                    className="mt-0.5 shrink-0 text-coral"
                    strokeWidth={2.5}
                  />
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

          {/* Pro */}
          <div className="relative flex flex-col rounded-2xl border-2 border-coral bg-gradient-to-br from-[#FFF5EF] to-[#FFF0E8] p-8 shadow-[0_8px_32px_rgba(232,115,74,0.15)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-gradient-to-br from-coral via-coral-light to-coral px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_4px_12px_rgba(232,115,74,0.3)]">
              Best Value — {ANNUAL_TRIAL_DAYS}-Day Free Trial
            </div>

            <div className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-coral">
              PathBuild Pro
            </div>

            {/* Pricing toggle display */}
            <div className="mb-1">
              <span className="font-serif text-4xl tracking-[-0.03em] text-ink">
                {ANNUAL_PRICE}
              </span>
              <span className="ml-1.5 text-[0.85rem] text-ink-secondary">/year</span>
            </div>
            <p className="mb-1 text-[0.85rem] text-ink-secondary">
              {ANNUAL_TRIAL_DAYS}-day free trial · billed annually · cancel anytime
            </p>
            <p className="mb-6 text-[0.8rem] text-ink-muted">
              or {MONTHLY_PRICE}/month · no trial · billed monthly
            </p>

            <ul className="mb-8 flex-1 space-y-3">
              {PRO_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[0.88rem] leading-[1.5] text-ink-secondary"
                >
                  <Check
                    size={14}
                    className="mt-0.5 shrink-0 text-coral"
                    strokeWidth={2.5}
                  />
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

        <p className="mt-6 text-center text-[0.78rem] leading-[1.6] text-ink-muted max-w-lg mx-auto">
          {PRICING_FOOTNOTE}
        </p>

        {/* Free vs Pro comparison table */}
        <div className="mt-20">
          <h2 className="mb-10 text-center font-serif text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.02em] text-ink">
            Free vs Pro
          </h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[rgba(44,34,24,0.06)] bg-white shadow-pb-sm">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[rgba(44,34,24,0.06)] bg-[#FAFAF8]">
              <div className="col-span-1 p-4 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink-secondary">
                Feature
              </div>
              <div className="col-span-1 border-l border-[rgba(44,34,24,0.06)] p-4 text-center text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink-secondary">
                Free
              </div>
              <div className="col-span-1 border-l border-[rgba(44,34,24,0.06)] p-4 text-center text-[0.78rem] font-bold uppercase tracking-[0.1em] text-coral">
                Pro
              </div>
            </div>
            {FREE_ROWS.map((row, i) => (
              <div
                key={row}
                className={`grid grid-cols-3 ${i < FREE_ROWS.length - 1 ? "border-b border-[rgba(44,34,24,0.04)]" : ""}`}
              >
                <div className="col-span-1 p-4 text-[0.88rem] text-ink-secondary">{row}</div>
                <div className="col-span-1 flex items-center justify-center border-l border-[rgba(44,34,24,0.04)] p-4">
                  <Check size={15} className="text-coral" strokeWidth={2.5} />
                </div>
                <div className="col-span-1 flex items-center justify-center border-l border-[rgba(44,34,24,0.04)] p-4">
                  <Check size={15} className="text-coral" strokeWidth={2.5} />
                </div>
              </div>
            ))}
            {PRO_ROWS.slice(1).map((row, i) => (
              <div
                key={row}
                className={`grid grid-cols-3 border-t border-[rgba(44,34,24,0.04)] ${i === PRO_ROWS.length - 2 ? "bg-[#FFF8F4]" : ""}`}
              >
                <div className="col-span-1 p-4 text-[0.88rem] text-ink-secondary">{row}</div>
                <div className="col-span-1 flex items-center justify-center border-l border-[rgba(44,34,24,0.04)] p-4">
                  <X size={14} className="text-ink-muted opacity-40" strokeWidth={2} />
                </div>
                <div className="col-span-1 flex items-center justify-center border-l border-[rgba(44,34,24,0.04)] p-4">
                  <Check size={15} className="text-coral" strokeWidth={2.5} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="mb-10 text-center font-serif text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.02em] text-ink">
            Pricing FAQ
          </h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {PRICING_FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-[rgba(44,34,24,0.06)] bg-white p-7"
              >
                <h3 className="mb-2 text-[0.95rem] font-bold text-ink">
                  {item.q}
                </h3>
                <p className="text-[0.88rem] leading-[1.7] text-ink-secondary">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FDEADF] via-[#FCD5C4] to-[#F9C2AC] p-10 text-center lg:p-14">
          <h2 className="mb-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] text-ink">
            Start for free today.
          </h2>
          <p className="mx-auto mb-7 max-w-md text-[0.95rem] leading-[1.65] text-wood-mid">
            Try the full discovery experience free. Upgrade to Pro when you're ready to nail the application.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill bg-ebony px-7 py-3.5 text-[0.9rem] font-semibold text-white shadow-pb-md transition-all hover:-translate-y-0.5 hover:bg-coral hover:shadow-glow"
          >
            Download on the App Store
          </a>
        </div>

      </div>
    </div>
  );
}
