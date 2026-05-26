import type { Metadata } from "next";
import { Check } from "lucide-react";
import {
  APP_STORE_URL,
  FREE_FEATURES,
  PRICING_FOOTNOTE,
  PRICING_SUB,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — PathBuild",
  description:
    "PathBuild is free during early access. The career quiz, AI matching, company suggestions — every feature included. No payment, no credit card.",
};

const PRICING_FAQ = [
  {
    q: "How much does PathBuild cost?",
    a: "PathBuild is completely free during early access. Every feature is included — the career quiz, AI matching, company suggestions, fit analyzer, and more. No credit card, no subscription.",
  },
  {
    q: "Will it stay free?",
    a: "Paid plans may be introduced later, but we'll always give plenty of notice before anything changes. Early users get full access at no cost.",
  },
  {
    q: "Is there a catch?",
    a: "No catch. We want real users testing the app and giving feedback. You get the full experience while we keep improving it.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-cream pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-coral">
            Pricing
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
            Free <em className="not-italic text-coral">for now</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-[1.75] text-ink-secondary">
            {PRICING_SUB}
          </p>
        </div>

        <div className="mx-auto max-w-md">
          <div className="relative flex flex-col rounded-xl border-2 border-coral-light bg-gradient-to-br from-[#FFF5EF] to-[#FFF0E8] p-9 shadow-[0_8px_32px_rgba(232,115,74,0.12)] transition-all hover:-translate-y-1 hover:shadow-pb-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-gradient-to-br from-coral via-coral-light to-coral px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white shadow-[0_4px_12px_rgba(232,115,74,0.3)]">
              Early Access
            </div>
            <div className="mb-2 mt-2 text-[0.85rem] font-bold tracking-[0.02em] text-ink-secondary">
              Full access
            </div>
            <div className="mb-1 font-serif text-5xl tracking-[-0.03em] text-ink">
              $0
            </div>
            <p className="mb-7 mt-3 border-b border-[rgba(44,34,24,0.06)] pb-7 text-[0.9rem] leading-[1.6] text-ink-secondary">
              Every feature included. No subscription, no credit card, no
              hidden fees.
            </p>
            <ul className="mb-7 flex-1 space-y-3">
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
              className="block w-full rounded-pill bg-ebony py-3.5 text-center text-[0.95rem] font-semibold text-white shadow-pb-md transition-all hover:-translate-y-px hover:bg-coral hover:shadow-glow"
            >
              Download Free on the App Store
            </a>
          </div>
          <p className="mt-6 text-center text-[0.78rem] leading-[1.6] text-ink-muted">
            {PRICING_FOOTNOTE}
          </p>
        </div>

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
      </div>
    </div>
  );
}
