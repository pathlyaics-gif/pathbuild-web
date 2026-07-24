/* FOUNDER/LEGAL REVIEW REQUIRED BEFORE PRODUCTION — revised draft reconciling product reality (approve-then-submit, employer sharing on approval, browser automation, live paid subscriptions). Confirm sub-processor names + effective date. */

import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  MONTHLY_PRICE,
  PRO_FEATURES,
  WEEKLY_PRICE,
} from "@/lib/site";

// Unified effective date across all PathBuild legal pages.
const EFFECTIVE_DATE = "July 23, 2026";

export const metadata: Metadata = {
  title: "Subscription Terms — PathBuild",
  description: `How PathBuild Pro subscriptions work — ${WEEKLY_PRICE}/week or ${MONTHLY_PRICE}/month with a 3-day free trial for eligible new subscribers, billed through Apple. Cancel anytime.`,
};

const TOC = [
  { id: "plans", label: "1. The PathBuild Pro plans" },
  { id: "trial", label: "2. Free trial" },
  { id: "includes", label: "3. What Pro includes" },
  { id: "billing", label: "4. Billing and payment" },
  { id: "manage", label: "5. Managing your subscription" },
  { id: "refunds", label: "6. Refunds" },
  { id: "offer-codes", label: "7. Offer codes" },
  { id: "price-changes", label: "8. Price changes" },
  { id: "contact", label: "9. Contact us" },
];

export default function SubscriptionPage() {
  return (
    <LegalLayout
      title="Subscription Terms"
      effectiveDate={EFFECTIVE_DATE}
      toc={TOC}
    >
      <p>
        These Subscription Terms describe how PathBuild Pro subscriptions work.
        They apply in addition to our{" "}
        <a href="/legal/terms">Terms of Service</a> and{" "}
        <a href="/legal/privacy">Privacy Policy</a>.
      </p>

      <h2 id="plans">1. The PathBuild Pro plans</h2>
      <p>PathBuild offers two subscription plans:</p>
      <ul>
        <li>
          <strong>PathBuild Weekly:</strong> {WEEKLY_PRICE} per week, billed
          weekly through your Apple ID.
        </li>
        <li>
          <strong>PathBuild Monthly:</strong> {MONTHLY_PRICE} per month,
          billed monthly through your Apple ID.
        </li>
      </ul>
      <p>
        Both plans unlock the same Pro features and belong to the same
        subscription group — only the billing period differs. No annual or
        3-month plan is offered. Pricing is in USD and may vary by region
        based on Apple&apos;s pricing tiers. Applicable taxes may apply
        depending on your location. The exact plans and prices are always
        shown in the App before you subscribe.
      </p>

      <h2 id="trial">2. Free trial</h2>
      <p>
        Both plans include a <strong>3-day free trial for eligible new
        subscribers</strong>. Apple grants one introductory offer per Apple ID
        per subscription group, so the trial is available once — if you have
        previously subscribed to (or trialed) PathBuild Pro, you will
        typically not be eligible again, and the App shows you the
        plan&apos;s regular price instead of trial wording. If you are
        eligible, the trial converts to a paid subscription at the
        plan&apos;s displayed price unless you cancel at least 24 hours
        before the trial ends. The exact offer that applies to you is always
        shown in the App and on Apple&apos;s purchase sheet before you
        confirm.
      </p>

      <h2 id="includes">3. What PathBuild Pro includes</h2>
      <p>A PathBuild Pro subscription includes:</p>
      <ul>
        {PRO_FEATURES.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p>
        PathBuild&rsquo;s free features — including job search with fit
        explanations, saved jobs, application tracking, a limited number of
        included in-app applications, and employer replies in the app — remain
        available without a subscription. Exact plan limits and features are shown
        in the App and on our pricing page and may change over time.
      </p>

      <h2 id="billing">4. Billing and payment</h2>
      <ul>
        <li>
          Payment is charged to your Apple ID at confirmation of purchase.
        </li>
        <li>
          Subscriptions renew automatically unless auto-renew is turned off at
          least 24 hours before the end of the current period.
        </li>
        <li>
          Your Apple ID is charged for renewal within 24 hours before the end of
          the current period at the then-current subscription rate.
        </li>
        <li>
          All billing and payment processing is handled by Apple. PathBuild does
          not collect or store your payment information.
        </li>
      </ul>

      <h2 id="manage">5. Managing your subscription</h2>
      <p>
        You can manage or cancel your subscription at any time through your Apple
        ID settings:
      </p>
      <p>
        <strong>Settings → Apple ID → Subscriptions → PathBuild</strong>
      </p>
      <ul>
        <li>
          Cancellation takes effect at the end of your current billing period. You
          keep access to PathBuild Pro until the period ends.
        </li>
        <li>
          After a subscription expires, you keep your account and data, but
          Pro-only features are no longer available.
        </li>
      </ul>

      <h2 id="refunds">6. Refunds</h2>
      <p>
        Refunds are handled by Apple under their refund policy. PathBuild does not
        process refunds directly. To request a refund, visit{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>
        .
      </p>

      <h2 id="offer-codes">7. Offer codes</h2>
      <p>
        PathBuild may issue promotional offer codes from time to time. Offer codes
        are subject to their own terms, including expiration dates and usage
        limits. They cannot be combined with other offers, are non-transferable,
        and cannot be redeemed for cash.
      </p>

      <h2 id="price-changes">8. Price changes</h2>
      <p>
        We may change subscription pricing. If we do, we will provide notice
        through the App or via email before the change takes effect. Price changes
        apply at the start of the next subscription period following the date of
        the change.
      </p>

      <h2 id="contact">9. Contact us</h2>
      <p>
        If you have any questions about your subscription, billing, or these
        Subscription Terms, contact us at{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
