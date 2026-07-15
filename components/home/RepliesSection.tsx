import { Send, Reply, Link2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { MotionReveal } from "@/components/ui/MotionReveal";

// Honest, schematic flow — labels describe the feature, no fabricated messages.
const FLOW = [
  {
    icon: Send,
    title: "You approve, PathBuild submits",
    body: "Supported employer forms go out only after you review and approve them.",
  },
  {
    icon: Reply,
    title: "The employer replies",
    body: "When a company responds, the reply comes back into the app.",
  },
  {
    icon: Link2,
    title: "Linked to the application",
    body: "Each reply stays attached to the role you applied to — not a separate inbox.",
  },
] as const;

/**
 * "Employer replies, in one place." Explains — honestly, from the product — that
 * replies return into the app linked to the application. The visual is a labelled
 * three-step diagram built from tokens; no fabricated inbox or message content.
 */
export function RepliesSection() {
  return (
    <Section aria-label="Employer replies come back into the app">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-prose">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
            One inbox for your search
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Employer replies, in one place.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
            When an employer responds, the reply returns into PathBuild and stays
            linked to the application you sent — so your whole search lives in one
            app instead of a scattered email inbox.
          </p>
        </div>

        <MotionReveal>
          <ol className="relative flex flex-col gap-4">
            {FLOW.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="flex items-start gap-4 rounded-xl border border-divider bg-surface p-5 shadow-pb-sm"
                >
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft"
                  >
                    <Icon className="h-5 w-5 text-accent-strong" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                      {step.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </MotionReveal>
      </div>
    </Section>
  );
}
