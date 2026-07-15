import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import { AppStoreCTA } from "@/components/ui/AppStoreCTA";
import { HOW_IT_WORKS_STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works — PathBuild",
  description:
    "See how PathBuild scores each job 0–100, prepares every application, and submits supported employer forms after you approve. Employer replies come back in one place.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Section aria-label="How PathBuild works">
        <MotionReveal className="mx-auto max-w-prose text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
            How it works
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            From swipe to sent
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
            PathBuild scores each job for fit, prepares the application, and
            submits supported employer forms after you approve. Five steps — and
            you stay in control of every one.
          </p>
        </MotionReveal>
      </Section>

      <Section alt aria-label="The five steps">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <ol className="space-y-4">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <MotionReveal as="li" key={step.title} delay={i * 60}>
                <div className="flex gap-5 rounded-lg border border-divider bg-surface p-6 shadow-pb-sm">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-accent-soft text-base font-bold text-accent-strong"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-ink">
                      {step.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-ink-secondary">
                      {step.body}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </ol>

          <MotionReveal className="flex justify-center lg:sticky lg:top-28">
            <ProductScreenshot
              src="/screenshots/should-you-apply.png"
              alt="A job in PathBuild showing a fit score out of 100 with the reasons behind it"
              priority
            />
          </MotionReveal>
        </div>
      </Section>

      <Section aria-label="You approve every application">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionReveal className="order-2 flex justify-center lg:order-1">
            <ProductScreenshot
              src="/screenshots/jobs-card.png"
              alt="A job card in PathBuild ready to swipe into your application list"
            />
          </MotionReveal>

          <MotionReveal className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              You approve every application
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
              Nothing is sent until you review exactly what will be shared with
              the employer. Some roles are external-apply — you finish on the
              employer&apos;s site — or need one quick secure step, like a
              verification or CAPTCHA.
            </p>
            <p className="mt-4 leading-relaxed text-ink-secondary">
              PathBuild fills supported employer forms for you, tracks the
              application, and brings employer replies back into the app.
            </p>
            <div className="mt-8">
              <AppStoreCTA size="lg" />
            </div>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
