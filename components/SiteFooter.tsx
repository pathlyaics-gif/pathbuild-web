import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, CONTACT_MAILTO } from "@/lib/site";
import { Container } from "@/components/ui/Container";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Download", href: APP_STORE_URL },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: CONTACT_MAILTO },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help", href: "/support" },
      { label: "Email", href: CONTACT_MAILTO },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Subscription Terms", href: "/legal/subscription" },
      { label: "Account deletion", href: "/support#delete" },
    ],
  },
];

const LINK_CLASS =
  "text-[15px] text-ink-secondary transition-colors duration-fast hover:text-accent-strong";

function FooterAnchor({ link }: { link: FooterLink }) {
  if (link.href.startsWith("http")) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener"
        className={LINK_CLASS}
      >
        {link.label}
      </a>
    );
  }
  if (link.href.startsWith("mailto:")) {
    return (
      <a href={link.href} className={LINK_CLASS}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={LINK_CLASS}>
      {link.label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-divider bg-bg-alt">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="text-[13px] font-semibold uppercase tracking-wide text-ink-muted">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterAnchor link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-divider pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] text-ink-muted">
              Built for iPhone · You approve every application · Private by design
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Image
                src="/star-summit-icon.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span className="text-[15px] font-semibold text-ink">PathBuild</span>
            </div>
          </div>
          <p className="text-[13px] text-ink-muted">
            © 2026 PathBuild. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
