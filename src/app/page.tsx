import { HeroCarousel } from "@/components/HeroCarousel";
import { FilterBar } from "@/components/FilterBar";
import { ProductGrid } from "@/components/ProductGrid";
import { BookingSection } from "@/components/BookingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { StoreSection } from "@/components/StoreSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FilterBar />
      <ProductGrid />
      <BookingSection />
      <HowItWorks />
      <StoreSection />
    </>
  );
}
