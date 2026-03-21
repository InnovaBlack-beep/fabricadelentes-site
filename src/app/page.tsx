import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { CategoryGrid } from "@/components/landing/CategoryGrid";
import { BrandMarquee } from "@/components/landing/BrandMarquee";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <BrandMarquee />
      <ProductShowcase />
      <Services />
      <HowItWorks />
    </>
  );
}
