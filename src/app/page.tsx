import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { CategoryGrid } from "@/components/landing/CategoryGrid";
import { EditorialBanner } from "@/components/landing/EditorialBanner";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { Credentials } from "@/components/landing/Credentials";
import { Testimonials } from "@/components/landing/Testimonials";
import { BookingSection } from "@/components/BookingSection";
import { Newsletter } from "@/components/landing/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <EditorialBanner />
      <ProductShowcase />
      <Credentials />
      <Testimonials />
      <BookingSection />
      <Newsletter />
    </>
  );
}
