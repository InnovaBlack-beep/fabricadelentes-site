import { HeroCarousel } from "@/components/HeroCarousel";
import { TrustStrip } from "@/components/TrustStrip";
import { ShopByCategory } from "@/components/ShopByCategory";
import { BrandShowcase } from "@/components/BrandShowcase";
import { ProductGrid } from "@/components/ProductGrid";
import { Services } from "@/components/Services";
import { BookingSection } from "@/components/BookingSection";
import { StoreSection } from "@/components/StoreSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrustStrip />
      <ShopByCategory />
      <BrandShowcase />
      <ProductGrid />
      <Services />
      <BookingSection />
      <StoreSection />
    </>
  );
}
