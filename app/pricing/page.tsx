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
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            Start for free, upgrade when you are ready. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 lg:p-10 flex flex-col transition-all ${
                plan.featured
                  ? "bg-navy-900 text-white border-2 border-accent/30 shadow-glow scale-[1.02]"
                  : "border border-warm-200 bg-card hover:shadow-warm"
              }`}
            >
              {plan.featured && (
                <span className="inline-block self-start text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.featured ? "text-white" : "text-navy-900"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span
                  className={`text-4xl font-bold ${
                    plan.featured ? "text-white" : "text-navy-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured ? "text-navy-300" : "text-navy-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`text-[14px] leading-relaxed mb-8 ${
                  plan.featured ? "text-navy-300" : "text-navy-500"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.featured ? "text-accent-light" : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-[14px] ${
                        plan.featured ? "text-navy-300" : "text-navy-500"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center rounded-full py-3 text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-gradient-to-r from-accent to-accent-dark text-white hover:opacity-90 shadow-glow"
                    : "border border-warm-200 text-navy-900 hover:bg-warm-100"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-navy-400 mt-8">
          Payments are processed by Apple. Subscriptions auto-renew unless
          canceled 24 hours before the end of the current period.
        </p>
      </div>
    </div>
  );
}
