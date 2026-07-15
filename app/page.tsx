import { Hero } from "@/components/home/Hero";
import { ScrollStory } from "@/components/home/ScrollStory";
import { RealProduct } from "@/components/home/RealProduct";
import { TrustSection } from "@/components/home/TrustSection";
import { RepliesSection } from "@/components/home/RepliesSection";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { APP_NAME, APP_STORE_URL, FAQ_ITEMS } from "@/lib/site";

// Honest SoftwareApplication schema — a job-search & application assistant that
// submits supported applications only after the user approves them, on iOS.
const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP_NAME,
  operatingSystem: "iOS",
  applicationCategory: "BusinessApplication",
  url: APP_STORE_URL,
  description:
    "PathBuild is an iPhone job-search and application assistant. It scores every job 0–100 for fit, prepares each application from your profile, fills supported employer forms, and submits after you approve — then keeps employer replies in one place. Some roles are external-apply or need one secure step.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

// FAQPage is emitted only because the same questions are visible on this page.
const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollStory />
      <RealProduct />
      <TrustSection />
      <RepliesSection />
      <PricingTeaser />
      <FAQ />
      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
      />
    </>
  );
}
