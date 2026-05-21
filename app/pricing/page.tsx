import type { Metadata } from "next";
import { Check, HelpCircle } from "lucide-react";
import {
  APP_STORE_URL,
  FEATURE_CARDS,
  FREE_FEATURES,
  PRICING_FOOTNOTE,
  PRICING_SUB,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — PathBuild",
  description:
    "PathBuild is free during early access. Application tracking, Gmail inbox watcher, role & company match, and more — no payment required.",
};

const FAQ_PRICING = [
  {
    q: "How much does PathBuild cost?",
    a: "PathBuild is completely free right now. Download from the App Store and get full access to every feature — application tracking, Gmail inbox watcher, role match, company match, and more. No credit card or subscription required.",
  },
  {
    q: "Will PathBuild always be free?",
    a: "We're focused on building the best job tracker first. Paid plans may be introduced in the future, but we'll always give plenty of notice before anything changes. Early users who join now get full access at no cost.",
  },
  {
    q: "Is there a catch?",
    a: "No catch. We want real users testing the app and giving feedback while we improve it. You get the full experience — tracker, Gmail integration, AI matching, notifications — at no charge during early access.",
  },
  {
    q: "How does PathBuild compare to other job trackers?",
    a: "Most job trackers are manual spreadsheets or basic kanban boards. PathBuild goes further — auto-detecting recruiter emails via Gmail, sending push notifications for interviews and offers, and surfacing AI-matched roles and companies. And right now, it's all free.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-36 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            Pricing
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            Free for now
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            {PRICING_SUB}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-sunrise-from to-sunrise-to border border-accent/20 p-8 lg:p-9 flex flex-col shadow-warm-lg relative">
            <span className="inline-block self-start text-[10px] font-bold text-accent-dark uppercase tracking-[0.12em] bg-accent/15 px-3 py-1.5 rounded-full mb-5">
              Early Access
            </span>
            <h3 className="text-lg font-extrabold text-navy-900 mb-1">
              Full access
            </h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-extrabold text-navy-900">$0</span>
            </div>
            <p className="text-[13px] leading-relaxed mb-8 text-navy-500">
              Every feature included. No subscription, no credit card, no hidden
              fees.
            </p>

            <ul className="space-y-3 mb-10 flex-1">
              {FREE_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    size={14}
                    className="mt-0.5 shrink-0 text-accent-dark"
                    strokeWidth={2.5}
                  />
                  <span className="text-[13px] text-navy-700 font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-full py-3 text-[13px] font-bold bg-navy-900 text-white hover:bg-navy-800 shadow-warm transition-all"
            >
              Download Free on the App Store
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-navy-400">{PRICING_FOOTNOTE}</p>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-extrabold text-navy-900 text-center mb-4">
            Everything included
          </h2>
          <p className="text-[15px] text-navy-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Track every application, catch every recruiter email, and discover
            roles and companies that fit — all free during early access.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {FEATURE_CARDS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-warm-200/80 bg-card p-6"
              >
                <h3 className="text-[15px] font-bold text-navy-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-navy-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-center gap-2 mb-10">
            <HelpCircle size={18} className="text-accent" strokeWidth={2} />
            <h2 className="text-2xl font-extrabold text-navy-900">
              Pricing FAQ
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {FAQ_PRICING.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-warm-200/80 bg-card p-7"
              >
                <h3 className="text-[15px] font-bold text-navy-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-[13px] leading-[1.75] text-navy-500">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
