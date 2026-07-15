import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { AppStoreCTA } from "@/components/ui/AppStoreCTA";
import { APP_TAGLINE, TRUST_POINTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — PathBuild",
  description:
    "PathBuild is an iPhone job-search and application assistant. Our mission: help you apply to jobs that fit, while you stay in control of every application.",
};

export default function AboutPage() {
  return (
    <>
      <Section aria-label="About PathBuild">
        <MotionReveal className="mx-auto max-w-prose text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Apply to jobs that fit — on your terms
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
            {APP_TAGLINE}
          </p>
        </MotionReveal>
      </Section>

      <Section alt aria-label="Why we built PathBuild">
        <div className="mx-auto max-w-prose space-y-6">
          <MotionReveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Why we built it
            </h2>
          </MotionReveal>
          <MotionReveal delay={60}>
            <p className="text-lg leading-relaxed text-ink-secondary">
              A job search gets scattered fast — postings on one site, your
              résumé somewhere else, half-finished forms, and replies buried in
              your inbox. It is hard to tell which roles are worth your time, and
              even harder to keep track once you start applying.
            </p>
          </MotionReveal>
          <MotionReveal delay={120}>
            <p className="text-lg leading-relaxed text-ink-secondary">
              PathBuild brings it into one place. It scores each job 0–100 for
              fit so you can see where to focus, prepares each application from
              your profile, and submits supported employer forms after you
              approve. Some roles are external-apply or need one quick secure
              step from you. Employer replies come back into the app, linked to
              the application.
            </p>
          </MotionReveal>
        </div>
      </Section>

      <Section aria-label="How we keep you in control">
        <div className="mx-auto max-w-prose">
          <MotionReveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              You stay in control
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
              Nothing goes to an employer until you review and approve that
              specific application. The rest of the product is built the same
              way.
            </p>
          </MotionReveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {TRUST_POINTS.map((point, i) => (
              <MotionReveal as="li" key={point} delay={i * 50}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-divider bg-surface p-5 shadow-pb-sm">
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    aria-hidden
                    className="mt-0.5 shrink-0 text-accent-strong"
                  />
                  <span className="leading-relaxed text-ink-secondary">
                    {point}
                  </span>
                </div>
              </MotionReveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section alt aria-label="Get PathBuild">
        <MotionReveal className="mx-auto max-w-prose text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Your whole job search. One app.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
            Built for iPhone. You approve every application.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreCTA size="lg" />
          </div>
        </MotionReveal>
      </Section>
    </>
  );
}
