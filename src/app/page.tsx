import { HeroCarousel } from "@/components/HeroCarousel";
import { TrustStrip } from "@/components/TrustStrip";
import { ShopByCategory } from "@/components/ShopByCategory";
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
      <ProductGrid />
      <Services />
      <BookingSection />
      <StoreSection />
    </>
  );
}
