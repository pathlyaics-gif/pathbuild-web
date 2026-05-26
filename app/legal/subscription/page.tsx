import type { Metadata } from "next";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subscription Terms — PathBuild",
  description:
    "Subscription terms for PathBuild. The app is currently free during early access; these terms apply if paid plans are introduced.",
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
          <div className="rounded-xl border border-accent/20 bg-accent/[0.06] p-6">
            <p className="font-semibold text-navy-800">
              PathBuild is currently free during early access. Every feature is
              available at no cost. The subscription terms below apply if and
              when paid plans are introduced in the future.
            </p>
          </div>
          <p>
            These Subscription Terms describe how paid plans would work if
            PathBuild introduces them in the future. They apply in addition to
            our{" "}
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
            1. Current Pricing
          </h2>
          <p>
            As of the effective date above, PathBuild is free to download and
            use. All features — including the career-discovery quiz, AI career
            matching, company matching, and job posting fit analysis — are
            available at no charge during early access.
          </p>
          <p>
            We may introduce paid subscription plans in the future. If we do, we
            will update these terms and notify users before any charges apply.
            The sections below describe how subscriptions would work if offered.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            2. Future Subscription Plans (if offered)
          </h2>
          <p>If PathBuild introduces paid plans, they may include options such as:</p>
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
            3. Free Trial
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
            4. Billing and Payment
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
            5. Managing Your Subscription
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
              After a subscription expires, you would retain access to your
              account and data, but paid-only features may no longer be
              available.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            6. Refunds
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
            7. Price Changes
          </h2>
          <p>
            We reserve the right to change subscription pricing at any time. If
            we change pricing, we will provide notice through the App or via
            email before the change takes effect. Price changes will apply at the
            start of the next subscription period following the date of the price
            change.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            8. What&apos;s Included
          </h2>
          <p>
            Premium access (when offered) would include full access to all PathBuild features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>AI career-discovery quiz</strong> — built around how you
              actually think
            </li>
            <li>
              <strong>AI career match</strong> — ranked career paths with fit
              scores and skill-gap insights
            </li>
            <li>
              <strong>Company match</strong> — discover companies hiring for
              your matched careers, ranked by fit
            </li>
            <li>
              <strong>Job posting fit analyzer</strong> — paste any listing for
              instant fit analysis
            </li>
            <li>
              <strong>Daily suggestions</strong> — fresh career and company
              picks tailored to your evolving profile
            </li>
            <li>
              <strong>Priority access to new features</strong> (when paid plans
              are introduced)
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            9. Offer Codes
          </h2>
          <p>
            PathBuild may issue promotional offer codes from time to time. Offer
            codes are subject to their own terms and conditions, including
            expiration dates and usage limitations. Offer codes cannot be
            combined with other offers, are non-transferable, and cannot be
            redeemed for cash.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            10. Contact Us
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
