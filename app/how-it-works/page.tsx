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
    "Five steps from career uncertainty to hire-ready. See how PathBuild uses AI to match you to a target role, give you daily missions, and build proof toward getting hired.",
};

const APP_STORE_URL = "https://apps.apple.com/app/pathbuild/id6743108030";

const STEPS = [
  {
    icon: UserCircle,
    number: 1,
    title: "Tell us about yourself",
    description:
      "Answer a quick, tap-friendly questionnaire about your education, work experience, interests, strengths, constraints, target income, working style, and daily pace. It takes less than 5 minutes — mostly tapping and selecting, not heavy typing.",
    detail:
      "PathBuild collects what actually matters for career planning: what energizes you, what you are good at, your practical constraints (time, budget, location, family), and whether you prefer 30 or 60 minutes of daily career work. No right or wrong answers — just honest input about who you are and where you want to go.",
  },
  {
    icon: Brain,
    number: 2,
    title: "AI matches you to realistic career paths",
    description:
      "Our AI cross-references your profile against thousands of career paths, real-world market data, salary trends, and success patterns to find your best-fit matches — including options you may never have considered.",
    detail:
      "This is not a generic keyword match. PathBuild analyzes your unique combination of traits, preferences, and constraints against real career outcomes. Each match comes with a suitability score, difficulty rating, salary range, and a detailed breakdown of why it fits your profile. Compare paths side by side.",
  },
  {
    icon: Map,
    number: 3,
    title: "Pick your target role and get your roadmap",
    description:
      "Choose the career path that excites you most. PathBuild creates a role-specific roadmap broken into stages, requirement areas, and actionable steps — showing exactly what your target role demands and where you stand.",
    detail:
      "Your roadmap shows every skill, credential, and experience your target role requires. See what you have already covered, what is in progress, and what is still ahead. Each stage unlocks as you progress — like levels in a game, but for your career. You always know what comes next.",
  },
  {
    icon: ListChecks,
    number: 4,
    title: "Complete one daily mission",
    description:
      "Every day, PathBuild gives you one focused, guided mission — a step-by-step task designed to build real progress toward your target role. Open the app, do your mission, close the app. 30–60 minutes. That is it.",
    detail:
      "Each mission includes a brief overview, micro-steps to check off, and a completion review. Missions are tailored to your current stage, pace, and readiness. Build streaks for motivation. Short on time? Quick Win missions keep your streak alive with a lighter touch. One session per day should feel like enough.",
  },
  {
    icon: TrendingUp,
    number: 5,
    title: "Build proof, track readiness, get hired",
    description:
      "As you complete missions, your readiness percentage grows. Completed work automatically becomes resume bullet points and LinkedIn copy. Analyze job postings, track applications, and get weekly AI coaching until you land the role.",
    detail:
      "PathBuild is not a one-time quiz — it is your daily career companion. Weekly recaps show your progress, monthly reviews highlight growth, blocker analysis spots problems early, and adaptive AI coaching keeps you on track. You always know what role you are building toward, what to do today, what you have already proved, and how close you are.",
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
            From lost to
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              hire-ready in 5 steps
            </span>
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            Choose a role. Do one mission a day. Build proof. Get hired.
            The process is simple, guided, and designed to fit into 30–60
            minutes of your day.
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

        <div className="mt-12 rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-10">
          <h2 className="text-xl font-extrabold text-navy-900 mb-4">
            The core loop
          </h2>
          <div className="space-y-3 text-[14px] leading-[1.75] text-navy-500">
            <p>
              PathBuild is built around a simple daily loop that compounds over
              time:
            </p>
            <div className="bg-gradient-to-r from-accent/[0.06] to-secondary/[0.04] rounded-xl p-5">
              <p className="text-[14px] font-bold text-navy-700 text-center">
                Choose role → Do mission → Log completion → Increase readiness →
                Unlock next stage → Build proof → Get hired
              </p>
            </div>
            <p>Here is what a typical day looks like with PathBuild:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-navy-700">Morning:</strong> Open the
                app. See today&rsquo;s mission on the Home screen. Tap
                &ldquo;Begin today&rsquo;s task.&rdquo;
              </li>
              <li>
                <strong className="text-navy-700">30–60 minutes:</strong>{" "}
                Complete the guided mission — follow micro-steps, check them
                off, review your work.
              </li>
              <li>
                <strong className="text-navy-700">Done:</strong> Your
                readiness updates. Your streak grows. Progress is logged.
                Close the app. That is it for today.
              </li>
            </ul>
            <p>
              Over weeks and months, this daily habit builds real skills, real
              proof, and real readiness for your target role. Small actions
              compound.
            </p>
          </div>
        </div>

        <div className="text-center mt-16 rounded-2xl bg-gradient-to-br from-sunrise-from to-sunrise-to p-10 lg:p-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-4">
            Ready to start your first mission?
          </h2>
          <p className="text-navy-500 max-w-lg mx-auto mb-8 text-[15px] leading-relaxed">
            Download PathBuild, complete the 5-minute questionnaire, pick your
            target role, and do your first daily mission today.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-navy-900 text-white px-6 py-3 text-sm font-bold hover:bg-navy-800 transition-colors shadow-warm-lg"
          >
            Download PathBuild Free
          </a>
        </div>
      </div>
    </div>
  );
}
