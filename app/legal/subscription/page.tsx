import type { Metadata } from "next";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subscription Terms — PathBuild",
  description:
    "Subscription terms, billing information, and plan details for PathBuild Pro. Monthly ($19.99/mo) and Annual ($129.99/yr) plans available.",
};

export default function SubscriptionPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-2">
          Subscription Terms
        </h1>
        <p className="text-sm text-navy-400 mb-12">
          Effective Date: March 31, 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-navy-500">
          <p>
            These Subscription Terms apply to your purchase and use of PathBuild
            premium subscription plans (&ldquo;PathBuild Pro&rdquo; or
            &ldquo;Subscription&rdquo;). By subscribing, you agree to these
            terms in addition to our{" "}
            <a
              href="/legal/terms"
              className="text-accent hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/legal/privacy"
              className="text-accent hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            1. Subscription Plans
          </h2>
          <p>PathBuild offers the following subscription options:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Monthly Plan:</strong> $19.99 per month, billed monthly.
            </li>
            <li>
              <strong>Annual Plan:</strong> $129.99 per year, billed annually.
              This works out to approximately $10.83 per month, saving you over
              $100 per year compared to monthly billing.
            </li>
          </ul>
          <p>
            Pricing is in USD and may vary by region based on Apple&apos;s
            pricing tiers. Applicable taxes may apply depending on your
            location.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            2. Free Trial
          </h2>
          <p>
            The <strong>Monthly plan does not include a free trial.</strong>{" "}
            PathBuild may offer a free trial period for <strong>eligible new
            subscribers on the Annual plan only</strong>, as determined by
            Apple. During a free trial, you have full access to all PathBuild Pro
            features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If you do not cancel before the trial ends, your subscription will
              automatically convert to a paid subscription and you will be
              charged at the current subscription rate.
            </li>
            <li>
              Free trial eligibility is determined by Apple and is limited to
              one free trial per Apple ID.
            </li>
            <li>
              You can cancel during the trial period at any time through your
              Apple ID Account Settings without being charged.
            </li>
            <li>
              The unused portion of a free trial period will be forfeited if you
              purchase a subscription before the trial ends.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            3. Billing and Payment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Payment is charged to your Apple ID account at confirmation of
              purchase.
            </li>
            <li>
              Subscriptions automatically renew unless auto-renew is turned off
              at least 24 hours before the end of the current period.
            </li>
            <li>
              Your account will be charged for renewal within 24 hours prior to
              the end of the current period at the current subscription rate.
            </li>
            <li>
              All billing and payment processing is handled by Apple. PathBuild
              does not directly collect or store your payment information.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            4. Managing Your Subscription
          </h2>
          <p>
            You can manage and cancel your subscription at any time through your
            Apple ID Account Settings:
          </p>
          <p className="font-medium text-navy-700">
            Settings → Apple ID → Subscriptions → PathBuild
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Cancellation takes effect at the end of your current billing
              period. You will continue to have access to all PathBuild Pro
              features until the period ends.
            </li>
            <li>
              After your subscription expires, you retain access to your account
              and data, but Pro-only features (daily guided missions, coaching,
              proof builder, job analyzer, etc.) will no longer be available.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            5. Refunds
          </h2>
          <p>
            Refunds are handled by Apple in accordance with their refund policy.
            PathBuild does not directly process refunds. To request a refund,
            visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              reportaproblem.apple.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            6. Price Changes
          </h2>
          <p>
            We reserve the right to change subscription pricing at any time. If
            we change pricing, we will provide notice through the App or via
            email before the change takes effect. Price changes will apply at the
            start of the next subscription period following the date of the price
            change.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            7. What&apos;s Included in PathBuild Pro
          </h2>
          <p>
            Premium subscribers receive full access to all PathBuild features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Unlimited daily guided missions</strong> tailored to your
              target role, current stage, and pace
            </li>
            <li>
              <strong>Role-specific career roadmap</strong> with stages,
              requirement areas, milestones, and stage unlocks
            </li>
            <li>
              <strong>Readiness tracking</strong> — real-time readiness
              percentage, velocity, coverage, and streak metrics
            </li>
            <li>
              <strong>Proof Builder</strong> — turn completed missions into
              polished resume bullet points and LinkedIn copy
            </li>
            <li>
              <strong>Job Posting Analyzer</strong> — paste any job posting for
              instant skill-gap analysis
            </li>
            <li>
              <strong>Application Tracker</strong> — manage your job search
              pipeline and application statuses
            </li>
            <li>
              <strong>Weekly AI Coaching</strong> — adaptive coaching based on
              your pace, progress, and blockers
            </li>
            <li>
              <strong>Interview Prep</strong> — role-specific question banks
            </li>
            <li>
              <strong>Weekly & Monthly Recaps</strong> — detailed progress
              summaries with insights
            </li>
            <li>
              <strong>Quick Win missions</strong> — lighter tasks to maintain
              momentum on busy days
            </li>
            <li>
              <strong>Plan adjustments</strong> — modify your roadmap anytime
            </li>
            <li>
              <strong>Priority access to new features</strong> (Annual plan)
            </li>
            <li>
              <strong>Roadmap export</strong> (Annual plan)
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            8. Offer Codes
          </h2>
          <p>
            PathBuild may issue promotional offer codes from time to time. Offer
            codes are subject to their own terms and conditions, including
            expiration dates and usage limitations. Offer codes cannot be
            combined with other offers, are non-transferable, and cannot be
            redeemed for cash.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about your subscription, billing, or these
            Subscription Terms, please contact us at:{" "}
            <a
              href={CONTACT_MAILTO}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
