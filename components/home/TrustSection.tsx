import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { TRUST_POINTS } from "@/lib/site";

/**
 * "Built to stay in your control" — the control/trust promises as a checkmark
 * list. id="security" matches the header's Security link. Honest wording only:
 * no "bank-grade", "military-grade", or "100% secure" claims.
 */
export function TrustSection() {
  return (
    <Section id="security" alt aria-label="How PathBuild keeps you in control">
      <div className="max-w-prose">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
          In your control
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Built to stay in your control
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
          PathBuild only shares what you approve, asks before it guesses, and lets
          you remove everything from the app.
        </p>
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {TRUST_POINTS.map((point, i) => (
          <MotionReveal
            key={point}
            as="li"
            delay={i * 60}
            className="flex items-start gap-3 rounded-lg bg-surface p-4 shadow-pb-sm"
          >
            <span
              aria-hidden
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft"
            >
              <Check className="h-4 w-4 text-accent-strong" />
            </span>
            <span className="text-base leading-relaxed text-ink">{point}</span>
          </MotionReveal>
        ))}
      </ul>
    </Section>
  );
}
