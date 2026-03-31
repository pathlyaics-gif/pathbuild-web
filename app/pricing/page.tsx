import type { Metadata } from "next";
import { Check, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — PathBuild",
  description:
    "PathBuild Pro pricing: Monthly ($19.99/mo) and Annual ($129.99/yr). Start with a free trial. Daily career missions, readiness tracking, proof building, and more.",
};

const APP_STORE_URL = "https://apps.apple.com/app/pathbuild/id6743108030";

const PLANS = [
  {
    name: "Monthly",
    price: "$19.99",
    period: "/month",
    equivalent: null,
    description:
      "Full access to every PathBuild Pro feature, billed monthly. Great if you want maximum flexibility with no long-term commitment.",
    features: [
      "Unlimited daily guided missions",
      "Role-specific roadmap with stages & milestones",
      "Readiness percentage & progress tracking",
      "Streaks, velocity, and coverage metrics",
      "Proof builder — resume bullets & LinkedIn copy",
      "Job posting analyzer — paste any listing",
      "Application tracker & pipeline management",
      "Weekly AI coaching sessions",
      "Weekly & monthly progress recaps",
      "Interview prep question banks",
      "Plan adjustments & roadmap updates",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Annual",
    price: "$129.99",
    period: "/year",
    equivalent: "~$10.83/month",
    description:
      "Everything in Monthly, billed once per year. Save over $100 compared to monthly billing — the smartest way to invest in your career.",
    features: [
      "Everything in Monthly",
      "Save ~$110/year vs monthly billing",
      "Priority access to new features",
      "Export your career roadmap",
      "Free trial included",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
];

const FAQ_PRICING = [
  {
    q: "Is there a free trial?",
    a: "Yes. New subscribers can start with a free trial on the Annual plan. You get full access to every PathBuild Pro feature during the trial. If you cancel before the trial ends, you will not be charged. Free trial eligibility is determined by Apple and limited to one per Apple ID.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel anytime through your Apple ID settings: Settings → Apple ID → Subscriptions → PathBuild. Cancellation takes effect at the end of your current billing period — you keep full access until then. No penalties, no hassle.",
  },
  {
    q: "Can I switch between Monthly and Annual?",
    a: "Yes. You can change your plan at any time through your Apple ID subscription settings. Changes take effect at the start of your next billing period.",
  },
  {
    q: "What payment methods are accepted?",
    a: "All payments are processed through Apple. You can use any payment method linked to your Apple ID, including credit cards, debit cards, and Apple Pay.",
  },
  {
    q: "Can I get a refund?",
    a: "Refunds are handled by Apple in accordance with their refund policy. To request a refund, visit reportaproblem.apple.com.",
  },
  {
    q: "What happens if I cancel?",
    a: "You keep access to all Pro features until the end of your current billing period. After that, your account stays active with your data intact, but Pro-only features (daily missions, coaching, proof builder, etc.) will no longer be available. You can re-subscribe at any time.",
  },
  {
    q: "How does PathBuild compare to hiring a career coach?",
    a: "Traditional career coaches charge $150–$300 per session, and most people need multiple sessions over months. PathBuild Pro gives you daily guided missions, weekly AI coaching, and ongoing tools like the job analyzer and proof builder — all for less than $11/month on the Annual plan. That is less than a single coaching session for an entire year of guidance.",
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
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            Two plans, no hidden fees, cancel anytime. Start with a free trial
            and only pay if PathBuild is helping you make real progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 lg:p-9 flex flex-col transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-br from-sunrise-from to-sunrise-to border border-accent/20 shadow-warm-lg"
                  : "border border-warm-200/80 bg-card hover:shadow-warm"
              }`}
            >
              {plan.featured && (
                <span className="inline-block self-start text-[10px] font-bold text-accent-dark uppercase tracking-[0.12em] bg-accent/15 px-3 py-1.5 rounded-full mb-5">
                  Best Value — Save 46%
                </span>
              )}
              <h3 className="text-lg font-extrabold text-navy-900 mb-1">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-extrabold text-navy-900">
                  {plan.price}
                </span>
                <span className="text-sm text-navy-400">{plan.period}</span>
              </div>
              {plan.equivalent && (
                <p className="text-[12px] text-navy-400 font-semibold mb-3">
                  That&rsquo;s just {plan.equivalent}
                </p>
              )}
              <p className="text-[13px] leading-relaxed mb-8 text-navy-500">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-accent"
                      strokeWidth={2.5}
                    />
                    <span className="text-[13px] text-navy-500">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center rounded-full py-3 text-[13px] font-bold transition-all ${
                  plan.featured
                    ? "bg-navy-900 text-white hover:bg-navy-800 shadow-warm"
                    : "border border-warm-200 text-navy-900 hover:bg-warm-100"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-navy-400">
            Payments are processed by Apple. Subscriptions auto-renew unless
            canceled at least 24 hours before the end of the current period.
            Free trial is available for eligible users on the Annual plan.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-extrabold text-navy-900 text-center mb-4">
            What you get with PathBuild Pro
          </h2>
          <p className="text-[15px] text-navy-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            PathBuild Pro turns vague career goals into daily action. Here is
            everything included in your subscription:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              {
                title: "Daily Guided Missions",
                desc: "One focused, step-by-step mission each day tailored to your target role, current stage, and pace. Complete in 30–60 minutes.",
              },
              {
                title: "Role-Specific Roadmap",
                desc: "Stages, requirement areas, skills, and milestones — everything your target role demands, organized into a clear path forward.",
              },
              {
                title: "Readiness Tracking",
                desc: "A real-time readiness percentage that shows how close you are to being hire-ready, plus velocity, coverage, and streak metrics.",
              },
              {
                title: "Proof Builder",
                desc: "Turn completed missions and milestones into polished resume bullet points and LinkedIn copy. Your proof is built from real work.",
              },
              {
                title: "Job Posting Analyzer",
                desc: "Paste any job posting for instant skill-gap analysis. See what you meet, what you are missing, and exactly what to work on.",
              },
              {
                title: "Application Tracker",
                desc: "Manage your job search pipeline — track companies, application statuses, and interviews all in one place.",
              },
              {
                title: "Weekly AI Coaching",
                desc: "Adaptive coaching every week based on your pace, progress, blockers, and goals. Like a career mentor in your pocket.",
              },
              {
                title: "Interview Prep",
                desc: "Role-specific interview question banks so you can practice and prepare with confidence before every interview.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-warm-200/80 bg-card p-6"
              >
                <h3 className="text-[15px] font-bold text-navy-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-navy-500">
                  {item.desc}
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
