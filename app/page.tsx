import { ScrollHero } from "@/components/lp/ScrollHero";
import { SeeItInAction } from "@/components/lp/SeeItInAction";
import { HowItWorks } from "@/components/lp/HowItWorks";
import { WhyItFits } from "@/components/lp/WhyItFits";
import { ClosingCTA } from "@/components/lp/ClosingCTA";

export default function HomePage() {
  return (
    // Inter as the page's base font; Playfair is applied per-heading.
    // The global <main> lives in layout.tsx — this is the dark landing surface.
    <div
      className="bg-[#0B0B0C] text-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Page-scoped body color so overscroll edges stay near-black on this
          route only — the rest of the site keeps its light theme. */}
      <style>{`body{background:#0B0B0C}`}</style>

      <ScrollHero />
      <SeeItInAction />
      <HowItWorks />
      <WhyItFits />
      <ClosingCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PathBuild",
            operatingSystem: "iOS",
            applicationCategory: "BusinessApplication",
            url: "https://pathbuild.app",
            description:
              "PathBuild learns your best-fit career and scores real jobs 0–100 so you see why each one fits. It drafts each application for you to review and send — nothing auto-sends — and surfaces recruiter replies in-app.",
          }),
        }}
      />
    </div>
  );
}
