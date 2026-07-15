import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AppStoreCTA } from "@/components/ui/AppStoreCTA";
import { HERO_TRUST_LINE } from "@/lib/site";

/**
 * Closing band. Short headline, the one download control, and the approval trust
 * line. Warm accent-soft surface to signal the end of the page.
 */
export function FinalCTA() {
  return (
    <Section
      className="border-t border-accent-border bg-accent-soft"
      aria-label="Download PathBuild"
    >
      <div className="mx-auto flex max-w-prose flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Your next move, one app away.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
          Score jobs, prepare each application, and apply after you approve — all
          on your iPhone.
        </p>
        <div className="mt-8">
          <AppStoreCTA size="lg" />
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
          <Check className="h-4 w-4 shrink-0 text-accent-strong" aria-hidden />
          {HERO_TRUST_LINE}
        </p>
      </div>
    </Section>
  );
}
