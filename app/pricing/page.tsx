import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — PathBuild",
  description:
    "Start building your career path for free. Upgrade for personalized roadmaps, unlimited analysis, and more.",
};

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with career discovery basics.",
    features: [
      "Career questionnaire",
      "Top 3 career matches",
      "Basic suitability scores",
      "General career overviews",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description:
      "Full access to personalized roadmaps and step-by-step guidance.",
    features: [
      "Everything in Free",
      "Unlimited career matches",
      "Detailed suitability breakdown",
      "Personalized career roadmaps",
      "Step-by-step action plans",
      "Progress tracking & streaks",
      "Plan adjustments & updates",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Annual",
    price: "$59.99",
    period: "/year",
    description: "Best value. Save 50% with an annual subscription.",
    features: [
      "Everything in Pro",
      "Save 50% vs monthly",
      "Priority new features",
      "Export your roadmap",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-4">
            Pricing
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-navy-900 leading-[1.15]">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed font-light">
            Start for free, upgrade when you are ready. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 lg:p-9 flex flex-col transition-all duration-300 ${
                plan.featured
                  ? "bg-navy-850 text-white border border-white/[0.06] shadow-[0_8px_30px_rgba(69,56,48,0.3)]"
                  : "border border-warm-200/80 bg-white hover:shadow-warm"
              }`}
            >
              {plan.featured && (
                <span className="inline-block self-start text-[10px] font-semibold text-accent uppercase tracking-[0.12em] bg-accent/10 px-3 py-1.5 rounded-full mb-5">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-lg font-bold mb-1 ${
                  plan.featured ? "text-white" : "text-navy-900"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span
                  className={`text-3xl font-bold ${
                    plan.featured ? "text-white" : "text-navy-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm font-light ${
                    plan.featured ? "text-white/40" : "text-navy-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`text-[13px] leading-relaxed mb-8 font-light ${
                  plan.featured ? "text-white/45" : "text-navy-500"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className={`mt-0.5 shrink-0 ${
                        plan.featured ? "text-accent-light" : "text-accent"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span
                      className={`text-[13px] font-light ${
                        plan.featured ? "text-white/55" : "text-navy-500"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center rounded-full py-3 text-[13px] font-semibold transition-all ${
                  plan.featured
                    ? "bg-white/10 border border-white/15 text-white hover:bg-white/15"
                    : "border border-warm-200 text-navy-900 hover:bg-warm-100"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-navy-400 mt-8 font-light">
          Payments are processed by Apple. Subscriptions auto-renew unless
          canceled 24 hours before the end of the current period.
        </p>
      </div>
    </div>
  );
}
