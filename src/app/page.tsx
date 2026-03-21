import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { CategoryGrid } from "@/components/landing/CategoryGrid";
import { BrandMarquee } from "@/components/landing/BrandMarquee";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { AdvisorCTA } from "@/components/landing/AdvisorCTA";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Newsletter } from "@/components/landing/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <BrandMarquee />
      <ProductShowcase />
      <AdvisorCTA />
      <Services />
      <Testimonials />
      <HowItWorks />
      <Newsletter />
    </>
  );
}
