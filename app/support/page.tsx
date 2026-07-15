import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CONTACT_MAILTO, FAQ_ITEMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support — PathBuild",
  description:
    "Help with PathBuild, the iPhone job-search and application assistant. Find answers, contact support, cancel a subscription, or delete your account and data.",
};

export default function SupportPage() {
  return (
    <>
      <Section aria-label="Support">
        <MotionReveal className="mx-auto max-w-prose text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-strong">
            Support
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            How can we help?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
            Answers to common questions, plus how to reach us, manage a
            subscription, or delete your account and data.
          </p>
        </MotionReveal>
      </Section>

      <Section alt aria-label="Frequently asked questions">
        <div className="mx-auto max-w-prose">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <MotionReveal key={item.q} delay={i * 40}>
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

      <Section aria-label="Contact, billing, and account">
        <div className="mx-auto grid max-w-prose gap-6">
          {/* Contact */}
          <MotionReveal>
            <div className="rounded-lg border border-divider bg-surface p-8 shadow-pb-sm">
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                Contact us
              </h2>
              <p className="mt-3 leading-relaxed text-ink-secondary">
                Still stuck? Email our team and we&apos;ll get back to you.
              </p>
              <div className="mt-6">
                <Button href={CONTACT_MAILTO} variant="secondary">
                  Email {CONTACT_EMAIL}
                </Button>
              </div>
            </div>
          </MotionReveal>

          {/* Cancel a subscription */}
          <MotionReveal delay={60}>
            <div className="rounded-lg border border-divider bg-surface p-8 shadow-pb-sm">
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                Cancel a subscription
              </h2>
              <p className="mt-3 leading-relaxed text-ink-secondary">
                PathBuild Pro is billed through your Apple ID, so you cancel in
                iOS Settings:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-ink-secondary">
                <li>Open Settings on your iPhone.</li>
                <li>Tap your name, then Subscriptions.</li>
                <li>Select PathBuild and tap Cancel Subscription.</li>
              </ol>
              <p className="mt-4 leading-relaxed text-ink-secondary">
                Cancellation takes effect at the end of the current billing
                period, and you keep Pro access until it expires. Refunds are
                handled by Apple at{" "}
                <a
                  href="https://reportaproblem.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-strong underline-offset-4 hover:underline"
                >
                  reportaproblem.apple.com
                </a>
                .
              </p>
            </div>
          </MotionReveal>

          {/* Account & data deletion */}
          <MotionReveal delay={120}>
            <div
              id="delete"
              className="rounded-lg border border-divider bg-surface p-8 shadow-pb-sm"
            >
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                Account &amp; data deletion
              </h2>
              <p className="mt-3 leading-relaxed text-ink-secondary">
                You can delete your account and its data from inside the app at
                any time:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-ink-secondary">
                <li>Open PathBuild and go to your Profile.</li>
                <li>Tap Settings, then Delete Account.</li>
                <li>Confirm to remove your account.</li>
              </ol>
              <p className="mt-4 leading-relaxed text-ink-secondary">
                Your profile, documents, and application history are removed or
                anonymized. Deletion is permanent and can&apos;t be undone. If
                you need help, email{" "}
                <a
                  href={CONTACT_MAILTO}
                  className="font-medium text-accent-strong underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
