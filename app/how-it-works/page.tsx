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
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
            From uncertainty to
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              clarity in 5 steps
            </span>
          </h1>
          <p className="mt-6 text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            The process is simple, guided, and takes just a few minutes to get
            started. Here is exactly what happens.
          </p>
        </div>

        <div className="space-y-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-warm-200 bg-card p-8 lg:p-10 transition-all hover:shadow-warm"
            >
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-lg shadow-accent/20">
                  <span className="text-white font-bold text-xl">
                    {step.number}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon size={20} className="text-accent" />
                    <h3 className="text-xl font-semibold text-navy-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-navy-500 mb-3">
                    {step.description}
                  </p>
                  <p className="text-[14px] leading-relaxed text-navy-400">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 rounded-3xl bg-navy-900 p-10 lg:p-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-navy-300 max-w-xl mx-auto mb-8">
            It takes less than 5 minutes to complete your profile and receive
            your personalized career roadmap.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-glow"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
}
