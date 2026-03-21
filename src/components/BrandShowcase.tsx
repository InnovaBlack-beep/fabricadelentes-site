"use client";

import { useRef } from "react";
import Image from "next/image";

const brands = [
  { name: "Ray-Ban", image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop", alt: "Lentes Ray-Ban" },
  { name: "Oakley", image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=300&fit=crop", alt: "Lentes Oakley" },
  { name: "Vogue Eyewear", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop", alt: "Lentes Vogue" },
  { name: "Arnette", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop", alt: "Lentes Arnette" },
  { name: "Guess", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop", alt: "Lentes Guess" },
  { name: "Polo Ralph Lauren", image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop", alt: "Lentes Polo Ralph Lauren" },
  { name: "Michael Kors", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop", alt: "Lentes Michael Kors" },
  { name: "Coach", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400&h=300&fit=crop", alt: "Lentes Coach" },
];

export function BrandShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-warm-cream">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text-primary" style={{ fontFamily: "var(--font-serif)" }}>
              Marcas Destacadas
            </h2>
            <p className="text-base text-warm-stone">
              Las marcas de lentes más reconocidas, en un solo lugar
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="size-10 flex items-center justify-center rounded-full border border-border-mid text-warm-brown transition-colors hover:border-text-primary" aria-label="Scroll izquierda">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button onClick={() => scroll("right")} className="size-10 flex items-center justify-center rounded-full border border-border-mid text-warm-brown transition-colors hover:border-text-primary" aria-label="Scroll derecha">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {brands.map((brand) => (
            <a key={brand.name} href="/lentes-graduados" className="group flex-shrink-0 w-[260px] md:w-[290px]">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                <Image src={brand.image} alt={brand.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-center text-sm font-semibold text-text-primary">{brand.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
