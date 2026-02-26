import type { Metadata } from "next";
import {
  UserCircle,
  Brain,
  Map,
  ListChecks,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works — PathBuild",
  description:
    "Five simple steps from career uncertainty to clarity. See how PathBuild helps you discover, plan, and build your ideal career.",
};

const STEPS = [
  {
    icon: UserCircle,
    number: 1,
    title: "Tell us about yourself",
    description:
      "Answer guided questions about your interests, skills, values, constraints, and career goals. It takes less than 5 minutes.",
    detail:
      "Our questionnaire covers what matters most: what energizes you, what you value in work, your practical constraints, and where you want to go. No right or wrong answers.",
  },
  {
    icon: Brain,
    number: 2,
    title: "AI analyzes your profile",
    description:
      "Our AI engine cross-references your answers against thousands of career paths, market data, and success patterns to find your best matches.",
    detail:
      "We analyze your unique combination of traits against real-world career data, going beyond simple matching to find paths that genuinely fit who you are.",
  },
  {
    icon: Map,
    number: 3,
    title: "Receive your career roadmap",
    description:
      "Get a personalized report with your top career matches, suitability scores, difficulty levels, and a clear path forward for each option.",
    detail:
      "Each career recommendation includes a suitability score, time estimate, difficulty level, and a breakdown of why it fits your profile.",
  },
  {
    icon: ListChecks,
    number: 4,
    title: "Follow your step-by-step guide",
    description:
      "Each career path comes with a detailed action plan broken into weekly micro-steps. Start building toward your future today.",
    detail:
      "No more wondering what to do next. Your action plan breaks the journey into small, manageable tasks that build momentum without overwhelm.",
  },
  {
    icon: TrendingUp,
    number: 5,
    title: "Track progress and adjust",
    description:
      "Monitor your streaks, completed steps, and milestones. Adjust your plan as you learn and grow. Your roadmap evolves with you.",
    detail:
      "Life changes, and so can your plan. Track your progress, maintain streaks for motivation, and adjust your roadmap as new opportunities arise.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-36 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            How It Works
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            From uncertainty to
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              clarity in 5 steps
            </span>
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            The process is simple, guided, and takes just a few minutes to get
            started. Here is exactly what happens.
          </p>
        </div>

        <div className="space-y-5">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-10 transition-all duration-300 hover:shadow-warm hover:border-warm-200"
            >
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-[0_4px_16px_rgba(255,138,108,0.25)]">
                  <span className="text-white font-extrabold text-lg">
                    {step.number}
                  </span>
                </div>
                <div className="pt-0.5">
                  <div className="flex items-center gap-3 mb-2.5">
                    <step.icon
                      size={18}
                      className="text-accent"
                      strokeWidth={1.8}
                    />
                    <h3 className="text-[17px] font-bold text-navy-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-navy-500 mb-2">
                    {step.description}
                  </p>
                  <p className="text-[13px] leading-[1.7] text-navy-400">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 rounded-2xl bg-gradient-to-br from-sunrise-from to-sunrise-to p-10 lg:p-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-navy-500 max-w-lg mx-auto mb-8 text-[15px] leading-relaxed">
            It takes less than 5 minutes to complete your profile and receive
            your personalized career roadmap.
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-navy-900 text-white px-6 py-3 text-sm font-bold hover:bg-navy-800 transition-colors shadow-warm-lg"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
}
