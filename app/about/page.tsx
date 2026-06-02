import type { Metadata } from "next";
import { Heart, Sparkles, Shield, Compass } from "lucide-react";
import { APP_STORE_URL, ANNUAL_TRIAL_DAYS, ANNUAL_PRICE, MONTHLY_PRICE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — PathBuild",
  description:
    "PathBuild is an AI career discovery app for iOS. We help you find the careers that genuinely fit you — and the companies hiring for them.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Empathy First",
    description:
      "Figuring out a career is stressful. Every interaction is calm, supportive, and judgment-free.",
  },
  {
    icon: Sparkles,
    title: "AI With Purpose",
    description:
      "We use AI to surface paths that genuinely fit you — not to replace your judgment, just to widen it.",
  },
  {
    icon: Compass,
    title: "Discovery, Not Quizzes",
    description:
      "Most career quizzes give vague archetypes. PathBuild gives you ranked careers, real companies hiring, and the tools to land them.",
  },
  {
    icon: Shield,
    title: "Private by Design",
    description:
      "Your answers stay yours. Encrypted at rest. Never sold, never shared with recruiters, deletable anytime.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-coral">
            About PathBuild
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
            We help you find the{" "}
            <em className="not-italic text-coral">career that fits</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-[1.75] text-ink-secondary">
            PathBuild is a small team building an AI career discovery app for
            iOS. We believe most people don&apos;t need another job board — they
            need clarity about what to pursue, and proof that the right
            companies are hiring.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-[rgba(44,34,24,0.06)] bg-white p-8 shadow-pb-sm lg:p-10">
          <h2 className="mb-4 font-serif text-[1.4rem] tracking-[-0.01em] text-ink">
            Why we built it
          </h2>
          <p className="mb-4 text-[0.95rem] leading-[1.75] text-ink-secondary">
            Job boards show you what&apos;s open. Career quizzes spit out vague
            personality archetypes. Neither tells you{" "}
            <em className="not-italic text-ink">what you should pursue</em> — or
            shows you the companies hiring for that.
          </p>
          <p className="text-[0.95rem] leading-[1.75] text-ink-secondary">
            PathBuild does both. Answer a short, thoughtful quiz. AI surfaces
            the careers that match how you actually think. Then we close the
            loop — showing real companies hiring, salary intel, AI-tailored
            resume notes, and interview prep so you can actually land the role.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-[rgba(44,34,24,0.06)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-pb-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-coral/[0.08]">
                <value.icon
                  size={20}
                  className="text-coral"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="mb-2 font-serif text-[1.1rem] tracking-[-0.01em] text-ink">
                {value.title}
              </h3>
              <p className="text-[0.9rem] leading-[1.65] text-ink-secondary">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing summary */}
        <div className="mb-10 rounded-2xl border border-[rgba(44,34,24,0.06)] bg-white p-8 shadow-pb-sm lg:p-10">
          <h2 className="mb-4 font-serif text-[1.4rem] tracking-[-0.01em] text-ink">
            Free to start. Pro when you need it.
          </h2>
          <p className="mb-4 text-[0.95rem] leading-[1.75] text-ink-secondary">
            The core experience — career quiz, AI matching, company discovery,
            and application tracking — is completely free. No credit card.
          </p>
          <p className="text-[0.95rem] leading-[1.75] text-ink-secondary">
            PathBuild Pro unlocks salary intel, AI resume tailoring, interview
            prep, job-fit analysis, and side-by-side comparisons. Pro is{" "}
            <strong className="text-ink">{MONTHLY_PRICE}/month</strong> or{" "}
            <strong className="text-ink">{ANNUAL_PRICE}/year</strong> — both
            plans include a{" "}
            <strong className="text-ink">{ANNUAL_TRIAL_DAYS}-day free trial</strong>.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#FDEADF] via-[#FCD5C4] to-[#F9C2AC] p-10 text-center lg:p-14">
          <h2 className="mb-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] text-ink">
            Discover what fits.
          </h2>
          <p className="mx-auto mb-7 max-w-md text-[0.95rem] leading-[1.65] text-wood-mid">
            Five-minute quiz, ranked career matches, real companies hiring. Free to start.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill bg-ebony px-7 py-3.5 text-[0.9rem] font-semibold text-white shadow-pb-md transition-all hover:-translate-y-0.5 hover:bg-coral hover:shadow-glow"
          >
            Download on the App Store
          </a>
        </div>
      </div>
    </div>
  );
}
