import type { Metadata } from "next";
import {
  Heart,
  Target,
  Lightbulb,
  Shield,
  Users,
  Rocket,
} from "lucide-react";
import { APP_STORE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — PathBuild",
  description:
    "PathBuild is a smart job application tracker for iOS. Connect Gmail to auto-log recruiter emails, track your pipeline, and discover AI-matched roles and companies.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Empathy First",
    description:
      "Job searching is stressful. Every interaction is designed to feel supportive, clear, and judgment-free — whether you're applying to 5 companies or 50.",
  },
  {
    icon: Target,
    title: "Inbox, Not Spreadsheet",
    description:
      "Your Gmail already has the answers. PathBuild reads recruiter emails so you never manually log status changes again. One pipeline, always current.",
  },
  {
    icon: Lightbulb,
    title: "AI With Purpose",
    description:
      "We use AI to match you to roles and companies that fit — not to replace your judgment, but to surface opportunities you'd never find on your own.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Read-only Gmail access. We parse sender and subject metadata only — never store full email bodies. Encrypted at rest. Delete your data anytime.",
  },
  {
    icon: Users,
    title: "Built for Real People",
    description:
      "Students, graduates, career-switchers, and active job seekers — PathBuild is for anyone juggling multiple applications who needs one organized place.",
  },
  {
    icon: Rocket,
    title: "Always Improving",
    description:
      "We ship constantly — better email detection, smarter matching, deeper pipeline insights, and features our users ask for.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-36 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            About PathBuild
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              PathBuild
            </span>
          </h1>
          <div className="mt-8 text-left sm:text-center max-w-2xl mx-auto space-y-5 text-[15px] md:text-[16px] leading-[1.75] text-navy-500">
            <p>
              <strong className="text-navy-800">Who we are.</strong> PathBuild
              is a small team building a premium{" "}
              <strong className="text-navy-700">job application tracker</strong>{" "}
              on iOS. We work at the intersection of thoughtful design, Gmail
              integration, and AI-powered job matching — not generic job boards
              or messy spreadsheets.
            </p>
            <p>
              <strong className="text-navy-800">What we do.</strong> We help
              you{" "}
              <strong className="text-navy-700">
                track every application in one pipeline
              </strong>
              ,{" "}
              <strong className="text-navy-700">
                auto-detect recruiter emails via Gmail
              </strong>
              , and{" "}
              <strong className="text-navy-700">
                discover roles and companies that actually fit
              </strong>
              . Connect Gmail once, and PathBuild watches your inbox — logging
              interview invites, offers, and rejections automatically. Get push
              notifications so nothing slips through the cracks.
            </p>
            <p>
              <strong className="text-navy-800">Why we matter.</strong> Most
              people don&apos;t lose jobs because they aren&apos;t qualified.
              They lose them because they{" "}
              <strong className="text-navy-700">lose track</strong> — missed
              interview invites buried in Gmail, forgotten follow-ups, no idea
              which companies responded. PathBuild eliminates that chaos.
            </p>
            <p>
              <strong className="text-navy-800">The difference we make.</strong>{" "}
              <strong className="text-navy-700">Without PathBuild,</strong>{" "}
              applications scatter across email, LinkedIn, and spreadsheets.{" "}
              <strong className="text-navy-700">With PathBuild,</strong> every
              application lives in one pipeline, recruiter emails auto-import,
              and AI surfaces roles and companies you&apos;d never find alone.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-12 mb-10">
          <h2 className="text-xl font-extrabold text-navy-900 mb-4">
            Why We Exist
          </h2>
          <p className="text-[14px] leading-[1.75] text-navy-500 mb-4">
            Too many talented people lose opportunities not because they lack
            ability — but because job searching is chaotic. Applications spread
            across platforms. Recruiter replies get buried. Follow-ups slip.
          </p>
          <p className="text-[14px] leading-[1.75] text-navy-500 mb-4">
            PathBuild exists to fix that. Connect Gmail, and every recruiter
            email auto-logs to your pipeline. Get notified when companies
            respond. Discover roles and employers that fit — all in one app.
          </p>
          <p className="text-[14px] leading-[1.75] text-navy-500">
            Stop losing applications in your inbox. Start tracking smarter.
          </p>
        </div>

        <div className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-12 mb-10">
          <h2 className="text-xl font-extrabold text-navy-900 mb-4">
            The Core Promise
          </h2>
          <div className="bg-gradient-to-r from-accent/[0.08] to-secondary/[0.06] rounded-xl p-6 mb-6">
            <p className="text-[16px] font-bold text-navy-800 text-center italic">
              &ldquo;Connect Gmail once. Every recruiter email auto-logs. Never
              miss an interview or offer again.&rdquo;
            </p>
          </div>
          <div className="space-y-4 text-[14px] leading-[1.75] text-navy-500">
            <p>
              <strong className="text-navy-700">
                Track every application
              </strong>{" "}
              — one visual pipeline from Saved to Applied to Interview to Offer.
              Add notes, set follow-ups, and see your entire job search at a
              glance.
            </p>
            <p>
              <strong className="text-navy-700">
                Auto-detect recruiter emails
              </strong>{" "}
              — connect Gmail with read-only access. PathBuild scans for
              recruiter responses and auto-updates your pipeline — no manual
              logging.
            </p>
            <p>
              <strong className="text-navy-700">
                Get smart notifications
              </strong>{" "}
              — push alerts for interview invites, offer letters, rejections,
              and follow-up reminders so nothing slips through.
            </p>
            <p>
              <strong className="text-navy-700">
                Discover roles and companies that fit
              </strong>{" "}
              — AI matches your profile daily with fit scores, skill-gap
              analysis, and salary ranges. Apply smarter, not just more.
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
                <strong className="text-navy-700">Active job seekers</strong>{" "}
                applying to multiple roles who need one place to track every
                application and recruiter response.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>
                <strong className="text-navy-700">Career switchers</strong>{" "}
                exploring a new field who want AI-matched roles plus inbox
                tracking that catches every reply.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>
                <strong className="text-navy-700">Recent graduates</strong>{" "}
                starting their first job search and need structure — not another
                overwhelming spreadsheet.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>
                <strong className="text-navy-700">Passive explorers</strong>{" "}
                who want to discover companies and roles that fit and track
                opportunities as they arise.
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
            Ready to organize your job search?
          </h2>
          <p className="text-navy-500 max-w-lg mx-auto mb-8 text-[15px] leading-relaxed">
            Download PathBuild, connect Gmail, and let every recruiter email
            auto-log to your pipeline. Your next opportunity is waiting.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-navy-900 text-white px-6 py-3 text-sm font-bold hover:bg-navy-800 transition-colors shadow-warm-lg"
          >
            Download PathBuild
          </a>
        </div>
      </div>
    </div>
  );
}
