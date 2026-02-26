import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription Terms — PathBuild",
  description: "Subscription terms and billing information for PathBuild.",
};

export default function SubscriptionPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-2">
          Subscription Terms
        </h1>
        <p className="text-sm text-navy-400 mb-12">
          Effective Date: February 16, 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-navy-500">
          <p>
            These Subscription Terms apply to your purchase and use of
            PathBuild premium subscription plans (&ldquo;Subscription&rdquo;).
            By subscribing, you agree to these terms in addition to our{" "}
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
          <p>
            PathBuild offers the following subscription options:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Monthly Plan:</strong> $9.99/month, billed monthly.
            </li>
            <li>
              <strong>Annual Plan:</strong> $59.99/year, billed annually (save
              50%).
            </li>
          </ul>
          <p>
            Pricing is in USD and may vary by region. Applicable taxes may
            apply.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            2. Free Trial
          </h2>
          <p>
            PathBuild may offer a free trial period for new subscribers. If you
            do not cancel before the trial ends, your subscription will
            automatically convert to a paid subscription and you will be
            charged. Free trial eligibility is determined by Apple and is
            limited to one per Apple ID.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            3. Billing and Payment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Payment is charged to your Apple ID account at confirmation of
              purchase.
            </li>
            <li>
              Subscriptions automatically renew unless auto-renew is turned
              off at least 24 hours before the end of the current period.
            </li>
            <li>
              Your account will be charged for renewal within 24 hours prior
              to the end of the current period at the current subscription
              rate.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            4. Managing Your Subscription
          </h2>
          <p>
            You can manage and cancel your subscription at any time through
            your Apple ID Account Settings:
          </p>
          <p>
            Settings &rarr; Apple ID &rarr; Subscriptions &rarr; PathBuild
          </p>
          <p>
            Cancellation will take effect at the end of your current billing
            period. You will continue to have access to premium features until
            the period ends.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            5. Refunds
          </h2>
          <p>
            Refunds are handled by Apple in accordance with their refund
            policy. PathBuild does not directly process refunds. To request a
            refund, visit{" "}
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
            We reserve the right to change subscription pricing. If we change
            pricing, we will provide notice through the App or via email. Price
            changes will take effect at the start of the next subscription
            period following the date of the price change.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            7. What&apos;s Included
          </h2>
          <p>Premium subscribers receive access to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unlimited career path matches</li>
            <li>Detailed suitability breakdowns</li>
            <li>Personalized career roadmaps</li>
            <li>Step-by-step action plans</li>
            <li>Progress tracking and streaks</li>
            <li>Plan adjustments and updates</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            8. Contact Us
          </h2>
          <p>
            If you have any questions about your subscription, please contact
            us at:{" "}
            <a
              href="mailto:support@pathbuild.app"
              className="text-accent hover:underline"
            >
              support@pathbuild.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
