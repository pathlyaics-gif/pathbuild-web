import type { Metadata } from "next";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  ANNUAL_PRICE,
  ANNUAL_TRIAL_DAYS,
  MONTHLY_PRICE,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Subscription Terms — PathBuild",
  description: `PathBuild Pro subscription terms. Monthly plan at ${MONTHLY_PRICE}/month (no trial). Annual plan at ${ANNUAL_PRICE}/year with a ${ANNUAL_TRIAL_DAYS}-day free trial. Cancel anytime.`,
};

export default function SubscriptionPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900 mb-2">
          Subscription Terms
        </h1>
        <p className="text-sm text-navy-400 mb-12">
          Effective Date: May 25, 2026
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed text-navy-500">

          <p>
            These Subscription Terms describe how PathBuild Pro subscriptions
            work. They apply in addition to our{" "}
            <a href="/legal/terms" className="text-accent hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/legal/privacy" className="text-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            1. PathBuild Pro Plans
          </h2>
          <p>
            PathBuild offers two subscription plans for PathBuild Pro:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Monthly Plan:</strong> {MONTHLY_PRICE} per month, billed
              monthly. No free trial — you are charged immediately on subscribe.
            </li>
            <li>
              <strong>Annual Plan:</strong> {ANNUAL_PRICE} per year, billed
              annually. Includes a{" "}
              <strong>{ANNUAL_TRIAL_DAYS}-day free trial</strong> for eligible
              new subscribers. This works out to approximately $
              {(parseFloat(ANNUAL_PRICE.replace("$", "")) / 12).toFixed(2)} per
              month, saving you significantly compared to monthly billing.
            </li>
          </ul>
          <p>
            Pricing is in USD and may vary by region based on Apple&apos;s
            pricing tiers. Applicable taxes may apply depending on your
            location.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            2. Free Trial — Annual Plan Only
          </h2>
          <p>
            The <strong>Annual plan</strong> includes a{" "}
            <strong>{ANNUAL_TRIAL_DAYS}-day free trial</strong> for eligible
            new subscribers. During this trial period, you have full access to
            all PathBuild Pro features at no charge.
          </p>
          <p>
            The <strong>Monthly plan does not include a free trial.</strong>{" "}
            Subscribing to the Monthly plan charges your Apple ID account
            immediately.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If you do not cancel before the trial ends, your subscription
              automatically converts to a paid Annual subscription and you will
              be charged {ANNUAL_PRICE}.
            </li>
            <li>
              Free trial eligibility is determined by Apple and is limited to
              one free trial per Apple ID per subscription group.
            </li>
            <li>
              You can cancel during the trial at any time through your Apple ID
              Account Settings without being charged.
            </li>
            <li>
              The unused portion of a free trial period is forfeited if you
              purchase a subscription before the trial ends.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            3. What PathBuild Pro Includes
          </h2>
          <p>
            A PathBuild Pro subscription gives you access to the following
            features, in addition to all features available for free:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Salary intel</strong> — real compensation benchmarks for
              your target roles and companies
            </li>
            <li>
              <strong>AI resume tailoring</strong> — a one-paragraph AI-generated
              resume note per company, tuned to your profile
            </li>
            <li>
              <strong>Interview prep</strong> — practice questions tuned to your
              target role and the company you&apos;re applying to
            </li>
            <li>
              <strong>Job-fit analysis</strong> — paste any job posting; AI
              reads it and tells you exactly where you fit
            </li>
            <li>
              <strong>Side-by-side comparisons</strong> — stack any two
              companies on pay, culture, growth, and requirements
            </li>
            <li>
              <strong>Every future Pro update</strong>, included at no extra
              charge
            </li>
          </ul>
          <p>
            The following features remain free and are not affected by your
            subscription status:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI career quiz and career match results</li>
            <li>Company discovery and full job search details</li>
            <li>Unlimited company saves</li>
            <li>Custom application stages and reminders</li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            4. Billing and Payment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Payment is charged to your Apple ID account at confirmation of
              purchase (or at the end of a free trial period if you do not
              cancel).
            </li>
            <li>
              Subscriptions automatically renew unless auto-renew is turned off
              at least 24 hours before the end of the current period.
            </li>
            <li>
              Your Apple ID account is charged for renewal within 24 hours
              prior to the end of the current period at the then-current
              subscription rate.
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
            You can manage and cancel your subscription at any time through
            your Apple ID Account Settings:
          </p>
          <p className="font-medium text-navy-700">
            Settings → Apple ID → Subscriptions → PathBuild
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Cancellation takes effect at the end of your current billing
              period. You keep access to PathBuild Pro until the period ends.
            </li>
            <li>
              After a subscription expires, you retain access to your account
              and data, but Pro-only features will no longer be available.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            6. Refunds
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
            7. Offer Codes
          </h2>
          <p>
            PathBuild may issue promotional offer codes from time to time.
            Offer codes are subject to their own terms, including expiration
            dates and usage limits. Offer codes cannot be combined with other
            offers, are non-transferable, and cannot be redeemed for cash.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            8. Price Changes
          </h2>
          <p>
            We reserve the right to change subscription pricing at any time.
            If we change pricing, we will provide notice through the app or via
            email before the change takes effect. Price changes apply at the
            start of the next subscription period following the date of the
            change.
          </p>

          <h2 className="text-xl font-semibold text-navy-900 pt-4">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about your subscription, billing, or
            these Subscription Terms, please contact us at:{" "}
            <a href={CONTACT_MAILTO} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
