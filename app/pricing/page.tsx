import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { AppStoreCTA } from "@/components/ui/AppStoreCTA";
import {
  FAQ_ITEMS,
  FREE_FEATURES,
  MONTHLY_PRICE,
  PRICING_FOOTNOTE,
  PRICING_HEADLINE,
  PRICING_SUB,
  PRO_FEATURES,
  SUBSCRIPTION_DISCLOSURE,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — PathBuild",
  description: `Score jobs, prepare applications, and track replies for free. Go Pro for unlimited in-app applications and tailored materials — ${MONTHLY_PRICE}/month, billed through Apple.`,
};

// Reuse the pricing-relevant questions from the single FAQ source in lib/site.
const PRICING_FAQ_QUESTIONS = new Set([
  "What's free?",
  "How much does PathBuild Pro cost?",
  "Is anything submitted without my approval?",
  "How do I cancel?",
]);
const PRICING_FAQ = FAQ_ITEMS.filter((item) =>
  PRICING_FAQ_QUESTIONS.has(item.q),
);

function FeatureItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3 leading-relaxed text-ink-secondary">
      <Check
        size={18}
        strokeWidth={2.5}
        aria-hidden
        className="mt-0.5 shrink-0 text-accent-strong"
      />
      <span>{children}</span>
    </li>
  );
}

export default function PricingPage() {
  return (
    <>
      <Section aria-label="Pricing">
        <MotionReveal className="mx-auto max-w-prose text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {PRICING_HEADLINE}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
            {PRICING_SUB}
          </p>
        </MotionReveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Free */}
          <MotionReveal>
            <div className="flex h-full flex-col rounded-xl border border-divider bg-surface p-8 shadow-pb-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Free
              </h2>
              <p className="mt-4 text-4xl font-bold tracking-tight text-ink">
                $0
              </p>
              <p className="mt-2 text-ink-secondary">
                Free to start. No subscription required.
              </p>
              <ul className="mt-8 flex-1 space-y-4">
                {FREE_FEATURES.map((f) => (
                  <FeatureItem key={f}>{f}</FeatureItem>
                ))}
              </ul>
              <div className="mt-8">
                <AppStoreCTA className="w-full" />
              </div>
            </div>
          </MotionReveal>

          {/* Pro — recommended */}
          <MotionReveal delay={80}>
            <div className="relative flex h-full flex-col rounded-xl border-2 border-accent bg-surface-peach p-8 shadow-pb-md">
              <span className="absolute -top-3 left-8 inline-flex items-center rounded-pill bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-fg">
                Recommended
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
                PathBuild Pro
              </h2>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-ink">
                  {MONTHLY_PRICE}
                </span>
                <span className="text-ink-secondary">/ month</span>
              </p>
              <p className="mt-2 text-ink-secondary">
                Current founding-member pricing · billed through Apple
              </p>
              <ul className="mt-8 flex-1 space-y-4">
                {PRO_FEATURES.map((f) => (
                  <FeatureItem key={f}>{f}</FeatureItem>
                ))}
              </ul>
              <div className="mt-8">
                <AppStoreCTA className="w-full" />
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {SUBSCRIPTION_DISCLOSURE}
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>

        <p className="mx-auto mt-8 max-w-prose text-center text-sm leading-relaxed text-ink-muted">
          {PRICING_FOOTNOTE}
        </p>
      </Section>

      <Section alt aria-label="Pricing questions">
        <div className="mx-auto max-w-prose">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Pricing questions
          </h2>
          <div className="mt-12 space-y-4">
            {PRICING_FAQ.map((item, i) => (
              <MotionReveal key={item.q} delay={i * 60}>
                <div className="rounded-lg border border-divider bg-surface p-6 shadow-pb-sm">
                  <h3 className="text-lg font-semibold text-ink">{item.q}</h3>
                  <p className="mt-2 leading-relaxed text-ink-secondary">
                    {item.a}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
