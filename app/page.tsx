import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { WhyPathBuild } from "@/components/WhyPathBuild";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingPreview } from "@/components/PricingPreview";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <WhyPathBuild />
      <HowItWorks />
      <PricingPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
