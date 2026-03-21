import { HeroCarousel } from "@/components/HeroCarousel";
import { TrustStrip } from "@/components/TrustStrip";
import { ShopByCategory } from "@/components/ShopByCategory";
import { BrandShowcase } from "@/components/BrandShowcase";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { BookingSection } from "@/components/BookingSection";
import { StoreSection } from "@/components/StoreSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrustStrip />
      <ShopByCategory />
      <BrandShowcase />
      <Services />
      <HowItWorks />
      <BookingSection />
      <StoreSection />
    </>
  );
}
