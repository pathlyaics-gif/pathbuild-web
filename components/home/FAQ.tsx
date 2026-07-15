import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FAQ_ITEMS } from "@/lib/site";

/**
 * FAQ accordion. Uses native <details>/<summary> so it is fully accessible and
 * works with zero JavaScript; only a transform (chevron rotate) animates on open.
 */
export function FAQ() {
  return (
    <Section id="faq" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-prose">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Common questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-divider border-t border-divider">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-ink-muted transition-transform duration-standard ease-smooth group-open:-rotate-180"
                />
              </summary>
              <p className="pb-4 pr-9 text-base leading-relaxed text-ink-secondary">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
