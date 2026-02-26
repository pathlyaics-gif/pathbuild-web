import type { Metadata } from "next";
import { Heart, Target, Lightbulb, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About — PathBuild",
  description:
    "Learn about PathBuild's mission to help people find career clarity through AI-powered guidance.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Empathy First",
    description:
      "Career changes are deeply personal. We designed every interaction to feel supportive, encouraging, and judgment-free.",
  },
  {
    icon: Target,
    title: "Actionable Clarity",
    description:
      "Insight without action is just information. Every recommendation comes with concrete next steps you can take today.",
  },
  {
    icon: Lightbulb,
    title: "AI With Purpose",
    description:
      "We use AI not to replace human judgment, but to surface possibilities you might not have discovered on your own.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Your career data is personal. We never sell your information and give you full control over your data.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
            Helping people find
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              career clarity
            </span>
          </h1>
          <p className="mt-6 text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
            PathBuild was born from a simple observation: too many talented
            people feel stuck in their careers, not because they lack ability,
            but because they lack clarity.
          </p>
        </div>

        <div className="rounded-3xl border border-warm-200 bg-card p-8 lg:p-12 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">
            Our Mission
          </h2>
          <p className="text-[15px] leading-relaxed text-navy-500 mb-4">
            We believe everyone deserves a clear path forward in their career.
            Not a vague sense of direction, but a concrete, personalized roadmap
            that accounts for who you are — your strengths, values, constraints,
            and goals.
          </p>
          <p className="text-[15px] leading-relaxed text-navy-500">
            PathBuild combines the analytical power of AI with the nuance of
            career science to deliver something that did not exist before:
            personalized career guidance that is accessible, affordable, and
            genuinely helpful.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-10">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-warm-200 bg-card p-8 transition-all hover:shadow-warm"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-5">
                  <value.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-navy-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center rounded-3xl bg-navy-900 p-10 lg:p-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Built for real people
          </h2>
          <p className="text-navy-300 max-w-xl mx-auto mb-8">
            Whether you are a recent graduate, mid-career professional, or
            considering a complete career change — PathBuild meets you where
            you are.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-glow"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  );
}
