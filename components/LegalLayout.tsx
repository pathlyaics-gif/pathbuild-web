import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type TocItem = { id: string; label: string };

type LegalLayoutProps = {
  title: string;
  /** Human-readable effective date, e.g. "July 15, 2026". */
  effectiveDate: string;
  children: ReactNode;
  /** Optional table of contents — renders as a sticky rail on ≥1024px. */
  toc?: TocItem[];
};

// Styles the raw h2/h3/p/ul/ol/a that legal pages pass as children, without
// depending on a typography plugin. Keeps legal copy readable and consistent.
const CONTENT_CLASS = [
  "mt-10 max-w-prose text-[17px] leading-relaxed text-ink-secondary",
  "[&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink",
  "[&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink",
  "[&_p]:mt-4",
  "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
  "[&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
  "[&_a]:text-accent-strong [&_a]:underline [&_a]:underline-offset-2",
  "[&_strong]:font-semibold [&_strong]:text-ink",
].join(" ");

/**
 * Readable shell for legal pages: a centered prose column, an optional sticky
 * table of contents on wide screens, and no product motion.
 */
export function LegalLayout({
  title,
  effectiveDate,
  children,
  toc,
}: LegalLayoutProps) {
  const hasToc = Boolean(toc && toc.length > 0);

  return (
    <Container className="py-16 sm:py-24">
      <div
        className={
          hasToc ? "lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16" : ""
        }
      >
        {hasToc && toc ? (
          <aside className="hidden lg:block">
            <nav
              aria-label="On this page"
              className="sticky top-[calc(var(--nav-height)_+_2rem)]"
            >
              <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-muted">
                On this page
              </p>
              <ul className="mt-4 space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-[15px] text-ink-secondary transition-colors duration-fast hover:text-accent-strong"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        ) : null}

        <article className={hasToc ? "min-w-0" : "mx-auto"}>
          <header className="max-w-prose">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-[15px] text-ink-muted">
              Effective {effectiveDate}
            </p>
          </header>
          <div className={CONTENT_CLASS}>{children}</div>
        </article>
      </div>
    </Container>
  );
}
