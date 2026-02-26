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
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-4">
            About
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-navy-900 leading-[1.15]">
            Helping people find
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              career clarity
            </span>
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed font-light">
            PathBuild was born from a simple observation: too many talented
            people feel stuck in their careers, not because they lack ability,
            but because they lack clarity.
          </p>
        </div>

        <div className="rounded-2xl border border-warm-200/80 bg-white p-8 lg:p-12 mb-16">
          <h2 className="text-xl font-bold text-navy-900 mb-4">Our Mission</h2>
          <p className="text-[14px] leading-[1.75] text-navy-500 font-light mb-4">
            We believe everyone deserves a clear path forward in their career.
            Not a vague sense of direction, but a concrete, personalized roadmap
            that accounts for who you are — your strengths, values, constraints,
            and goals.
          </p>
          <p className="text-[14px] leading-[1.75] text-navy-500 font-light">
            PathBuild combines the analytical power of AI with the nuance of
            career science to deliver something that did not exist before:
            personalized career guidance that is accessible, affordable, and
            genuinely helpful.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold text-navy-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-warm-200/80 bg-white p-8 transition-all duration-300 hover:shadow-warm hover:border-warm-200"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/[0.08] flex items-center justify-center mb-6">
                  <value.icon
                    size={20}
                    className="text-accent"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-[17px] font-semibold text-navy-900 mb-2.5">
                  {value.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-navy-500 font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center rounded-2xl bg-navy-850 p-10 lg:p-14">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Built for real people
          </h2>
          <p className="text-white/45 max-w-lg mx-auto mb-8 text-[15px] font-light leading-relaxed">
            Whether you are a recent graduate, mid-career professional, or
            considering a complete career change — PathBuild meets you where
            you are.
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-all"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </div>
  );
}
