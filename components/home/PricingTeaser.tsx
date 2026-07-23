import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AppStoreCTA } from "@/components/ui/AppStoreCTA";
import {
  PRICING_HEADLINE,
  FREE_FEATURES,
  PRO_FEATURES,
  MONTHLY_PRICE,
  SUBSCRIPTION_DISCLOSURE,
} from "@/lib/site";

// Condensed for the teaser; the full lists live on /pricing.
const FREE = FREE_FEATURES.slice(0, 4);
const PRO = PRO_FEATURES.slice(0, 4);

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink-secondary">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Free vs Pro at a glance. Pro is highlighted as recommended without hiding Free.
 * Prices and the subscription disclosure come straight from lib/site.ts; no fake
 * urgency or countdowns.
 */
export function PricingTeaser() {
  return (
    <Section id="pricing" alt aria-label="PathBuild pricing at a glance">
      <div className="mx-auto max-w-prose text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {PRICING_HEADLINE}
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
        {/* Free */}
        <div className="flex flex-col rounded-2xl border border-divider bg-surface p-8 shadow-pb-sm">
          <h3 className="text-xl font-bold text-ink">Free</h3>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
            $0
            <span className="ml-1 align-middle text-base font-medium text-ink-muted">
              to start
            </span>
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Score jobs, prepare applications, and track replies.
          </p>
          <FeatureList items={FREE} />
        </div>

        {/* Pro — recommended */}
        <div className="relative flex flex-col rounded-2xl border-2 border-accent-border bg-surface p-8 shadow-pb-lg">
          <span className="absolute right-6 top-6 rounded-pill bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-strong">
            Recommended
          </span>
          <h3 className="text-xl font-bold text-ink">PathBuild Pro</h3>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
            {MONTHLY_PRICE}
            <span className="ml-1 align-middle text-base font-medium text-ink-muted">
              /month
            </span>
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Current founding-member pricing · billed through Apple
          </p>
          <FeatureList items={PRO} />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <AppStoreCTA size="lg" />
          <Button variant="secondary" size="lg" href="/pricing">
            See full pricing
          </Button>
        </div>
        <p className="max-w-prose text-center text-xs leading-relaxed text-ink-muted">
          {SUBSCRIPTION_DISCLOSURE}
        </p>
      </div>
    </Section>
  );
}
