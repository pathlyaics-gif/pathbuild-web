import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — PathBuild",
  description:
    "Frequently asked questions and support resources for PathBuild.",
};

const FAQ = [
  {
    question: "What is PathBuild?",
    answer:
      "PathBuild is an AI-powered career guidance app that helps you discover career paths that fit your unique strengths, values, and goals. You answer a short questionnaire, and our AI generates personalized career matches with detailed roadmaps and step-by-step action plans.",
  },
  {
    question: "How does the AI career matching work?",
    answer:
      "Our AI engine analyzes your responses to questions about your interests, skills, values, constraints, and career goals. It cross-references your unique profile against thousands of career paths, market data, and success patterns to find your best matches.",
  },
  {
    question: "Is PathBuild free to use?",
    answer:
      "Yes! You can get started for free. The free plan includes a career questionnaire and your top 3 career matches with basic suitability scores. Premium plans unlock detailed roadmaps, step-by-step action plans, and progress tracking.",
  },
  {
    question: "How accurate are the career recommendations?",
    answer:
      "Our recommendations are based on your self-reported data combined with real-world career research and market data. They are designed to surface options you may not have considered. We recommend using them as a starting point for exploration, not as definitive career advice.",
  },
  {
    question: "Can I change my answers after completing the questionnaire?",
    answer:
      "Yes. You can retake the questionnaire or update your profile at any time. Your career matches and roadmap will update based on your new responses.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can manage and cancel your subscription at any time through your Apple ID Account Settings. Go to Settings > Apple ID > Subscriptions > PathBuild. Cancellation takes effect at the end of your current billing period.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We take privacy seriously. We never sell your personal information, and we use encryption to protect your data both in transit and at rest. You can delete your account and all associated data at any time. See our Privacy Policy for full details.",
  },
  {
    question: "What platforms is PathBuild available on?",
    answer:
      "PathBuild is currently available on iOS. We are working on bringing the experience to more platforms in the future.",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-4">
            Support
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-navy-900 leading-[1.15]">
            How can we help?
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed font-light">
            Find answers to common questions below, or reach out to our team
            directly.
          </p>
        </div>

        <div className="space-y-3 mb-16">
          {FAQ.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-warm-200/80 bg-white p-7 lg:p-8"
            >
              <h3 className="text-[15px] font-semibold text-navy-900 mb-2.5">
                {item.question}
              </h3>
              <p className="text-[13px] leading-[1.75] text-navy-500 font-light">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center rounded-2xl border border-warm-200/80 bg-white p-10 lg:p-14">
          <div className="w-12 h-12 rounded-xl bg-accent/[0.08] flex items-center justify-center mx-auto mb-5">
            <Mail size={20} className="text-accent" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-bold text-navy-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-navy-500 max-w-md mx-auto mb-6 text-[14px] font-light leading-relaxed">
            Our team is here to help. Send us an email and we will get back to
            you as soon as possible.
          </p>
          <a
            href="mailto:support@pathbuild.app"
            className="inline-flex items-center rounded-full bg-navy-900 px-6 py-3 text-[13px] font-semibold text-white hover:bg-navy-800 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
