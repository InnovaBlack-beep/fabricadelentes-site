import { HeroEditorial } from "@/components/HeroEditorial";
import { FilterBar } from "@/components/FilterBar";
import { ProductGrid } from "@/components/ProductGrid";
import { BookingSection } from "@/components/BookingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { StoreSection } from "@/components/StoreSection";

export default function Home() {
  return (
    <>
      <HeroEditorial />
      <FilterBar />
      <ProductGrid />
      <BookingSection />
      <HowItWorks />
      <StoreSection />
    </>
  );
}
