import type { Metadata } from "next";
import { Sparkles, Compass, Building2, Bookmark, Trophy } from "lucide-react";
import { APP_STORE_URL, HOW_IT_WORKS_STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works — PathBuild",
  description:
    "From curious to offer in five steps. Take the quiz, get matched careers, discover companies, track applications, and nail the interview with AI.",
};

const ICONS = [Sparkles, Compass, Building2, Bookmark, Trophy];

export default function HowItWorksPage() {
  return (
    <div className="bg-cream pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-coral">
            How It Works
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
            From <em className="not-italic text-coral">curious</em> to{" "}
            <em className="not-italic text-coral">hired</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-[1.75] text-ink-secondary">
            Take the quiz. Get matched. Discover companies. Track applications.
            Land the role — with AI on your side every step.
          </p>
        </div>

        <div className="space-y-4">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = ICONS[i];
            const isPro = i === 4;
            return (
              <div
                key={step.title}
                className={`rounded-2xl border p-8 transition-all hover:-translate-y-0.5 lg:p-10 ${
                  isPro
                    ? "border-coral/30 bg-gradient-to-br from-[#FFF5EF] to-[#FFF0E8] hover:shadow-[0_8px_24px_rgba(232,115,74,0.12)]"
                    : "border-[rgba(44,34,24,0.06)] bg-white hover:shadow-pb-md"
                }`}
              >
                <div className="flex gap-6 md:gap-8">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-serif text-lg text-white shadow-[0_4px_16px_rgba(232,115,74,0.25)] ${
                      isPro
                        ? "bg-gradient-to-br from-coral via-coral-light to-coral"
                        : "bg-gradient-to-br from-coral via-coral-light to-coral"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="pt-0.5 flex-1">
                    <div className="mb-2.5 flex items-center gap-3 flex-wrap">
                      <Icon
                        size={18}
                        className="text-coral"
                        strokeWidth={1.8}
                      />
                      <h3 className="font-serif text-[1.15rem] tracking-[-0.01em] text-ink">
                        {step.title}
                      </h3>
                      {isPro && (
                        <span className="rounded-pill bg-coral px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-white">
                          Pro
                        </span>
                      )}
                    </div>
                    <p className="text-[0.95rem] leading-[1.7] text-ink-secondary">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FDEADF] via-[#FCD5C4] to-[#F9C2AC] p-10 text-center lg:p-14">
          <h2 className="mb-3 font-serif text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] text-ink">
            Start for free. Go all the way.
          </h2>
          <p className="mx-auto mb-7 max-w-md text-[0.95rem] leading-[1.65] text-wood-mid">
            The quiz and career matches are free. Pro unlocks every tool you need to land the role.
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
