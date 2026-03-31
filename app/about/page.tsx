import type { Metadata } from "next";
import {
  Heart,
  Target,
  Lightbulb,
  Shield,
  Users,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — PathBuild",
  description:
    "PathBuild is a premium career execution app — Duolingo for your career. One daily mission, one target role, one clear path to getting hired.",
};

const APP_STORE_URL = "https://apps.apple.com/app/pathbuild/id6743108030";

const VALUES = [
  {
    icon: Heart,
    title: "Empathy First",
    description:
      "Career decisions are deeply personal. We designed every interaction to feel supportive, encouraging, and judgment-free. PathBuild meets you where you are — whether you are 18 or 48, starting fresh or pivoting mid-career. No shame, no pressure.",
  },
  {
    icon: Target,
    title: "One Thing at a Time",
    description:
      "Most people fail at career planning because they try to do everything at once. PathBuild gives you one mission per day. That is it. Small actions compound. Consistency beats intensity. One step at a time is how careers get built.",
  },
  {
    icon: Lightbulb,
    title: "AI With Purpose",
    description:
      "We use AI not to replace human judgment, but to turn vague goals into realistic target roles, build personalized roadmaps, and provide weekly coaching that adapts to your life. The AI works for you — not the other way around.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Your career data is personal. We never sell your information. We do not track you across apps. We use encryption to protect everything. And you can delete your account and all data at any time — no questions asked.",
  },
  {
    icon: Users,
    title: "Built for Real People",
    description:
      "Students, graduates, career-switchers, job seekers, parents returning to work — PathBuild is for anyone who feels lost, stuck, or unfocused about their career. If you want structure and guidance without the overwhelm, this is for you.",
  },
  {
    icon: Rocket,
    title: "Always Improving",
    description:
      "We ship improvements constantly. New mission types, better AI models, deeper insights, and features our users ask for. Your feedback directly shapes what we build next.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            Duolingo for
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              your career
            </span>
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            PathBuild is a premium career execution app for people who do not
            just need inspiration — they need a realistic target role, a clear
            roadmap, and one concrete thing to do each day.
          </p>
        </div>

        <div className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-12 mb-10">
          <h2 className="text-xl font-extrabold text-navy-900 mb-4">
            Our Mission
          </h2>
          <p className="text-[14px] leading-[1.75] text-navy-500 mb-4">
            Too many talented people feel stuck in their careers. Not because
            they lack ability — but because they lack clarity, structure, and a
            realistic plan they can actually follow. They spend months googling
            advice, overthinking options, and never making real progress.
          </p>
          <p className="text-[14px] leading-[1.75] text-navy-500 mb-4">
            PathBuild exists to fix that. We built an app that turns vague
            career goals into a specific target role, shows you exactly what
            that role requires, and gives you one focused daily mission that
            builds real, measurable progress. Open the app, do one meaningful
            task, get closer to your dream job.
          </p>
          <p className="text-[14px] leading-[1.75] text-navy-500">
            We call it &ldquo;Duolingo for your career&rdquo; because the
            concept is the same: small daily actions that compound over time.
            Instead of learning a language, you are building the skills,
            experience, and proof you need to get hired for the role you
            actually want.
          </p>
        </div>

        <div className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-12 mb-10">
          <h2 className="text-xl font-extrabold text-navy-900 mb-4">
            The Core Promise
          </h2>
          <div className="bg-gradient-to-r from-accent/[0.08] to-secondary/[0.06] rounded-xl p-6 mb-6">
            <p className="text-[16px] font-bold text-navy-800 text-center italic">
              &ldquo;Open the app once a day, do one meaningful task, get
              closer to your target role.&rdquo;
            </p>
          </div>
          <div className="space-y-4 text-[14px] leading-[1.75] text-navy-500">
            <p>
              <strong className="text-navy-700">
                Choose a realistic target role
              </strong>{" "}
              — our AI matches you to career paths based on your strengths,
              values, education, experience, and constraints. Each match comes
              with a suitability score so you can make an informed decision.
            </p>
            <p>
              <strong className="text-navy-700">
                Follow a structured roadmap
              </strong>{" "}
              — your target role is broken into stages, requirement areas, and
              actionable steps. See what is required, what you have covered, and
              what is next. Stages unlock as you progress.
            </p>
            <p>
              <strong className="text-navy-700">
                Complete one daily mission
              </strong>{" "}
              — each day, you get a focused, guided mission (30–60 minutes) that
              moves you forward. Build streaks, earn momentum, and track your
              readiness percentage in real time.
            </p>
            <p>
              <strong className="text-navy-700">
                Build proof and get hired
              </strong>{" "}
              — your completed work automatically becomes resume bullet points
              and LinkedIn copy. Analyze job postings, track applications, and
              get weekly AI coaching until you land the role.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-12 mb-16">
          <h2 className="text-xl font-extrabold text-navy-900 mb-4">
            Who PathBuild Is For
          </h2>
          <ul className="space-y-3 text-[14px] leading-[1.75] text-navy-500">
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>
                <strong className="text-navy-700">Students and recent graduates</strong> who
                have no idea what career to pursue and need a clear starting
                point.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>
                <strong className="text-navy-700">Career switchers</strong> who want to
                transition into a new field but do not know what steps to take
                or whether they are qualified.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>
                <strong className="text-navy-700">Job seekers</strong> who are applying
                randomly and need structure, direction, and tools to be more
                strategic.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>
                <strong className="text-navy-700">People who feel stuck or behind</strong>{" "}
                — anyone who wants to improve their career in 30–60 minutes a
                day with real guidance, not another generic productivity app.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-extrabold text-navy-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-warm-200/80 bg-card p-8 transition-all duration-300 hover:shadow-warm hover:border-warm-200"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/[0.1] flex items-center justify-center mb-6">
                  <value.icon
                    size={22}
                    className="text-accent"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-[18px] font-bold text-navy-900 mb-2.5">
                  {value.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-navy-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center rounded-2xl bg-gradient-to-br from-sunrise-from to-sunrise-to p-10 lg:p-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-4">
            Ready to start your first mission?
          </h2>
          <p className="text-navy-500 max-w-lg mx-auto mb-8 text-[15px] leading-relaxed">
            Download PathBuild, complete the 5-minute questionnaire, pick your
            target role, and do your first daily mission today. Your career is
            waiting.
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
