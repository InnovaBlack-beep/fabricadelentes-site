"use client";

import { useRef } from "react";
import Image from "next/image";

const brands = [
  { name: "Brizzant", image: "/products/oftalmicos/bl6-02c24b24.jpg", alt: "Lentes Brizzant", href: "/lentes-graduados" },
  { name: "Frida Kahlo", image: "/products/oftalmicos/FKL1-e4cd1228.jpg", alt: "Lentes Frida Kahlo", href: "/lentes-graduados" },
  { name: "Nobleman", image: "/products/oftalmicos/NOL1-541b9e74.jpg", alt: "Lentes Nobleman", href: "/lentes-graduados" },
  { name: "Massimo", image: "/products/oftalmicos/MAL1-86309c0e.jpg", alt: "Lentes Massimo", href: "/lentes-graduados" },
  { name: "Frida Kahlo Solar", image: "/products/solares/FKSL1-5ea420bc.jpg", alt: "Lentes de sol Frida Kahlo", href: "/lentes-de-sol" },
  { name: "Air Optix", image: "/products/contacto/lentes10-4ac1893a.png", alt: "Lentes de contacto Air Optix", href: "/lentes-de-contacto" },
  { name: "Alcon", image: "/products/contacto/lentes12-7a23fd3e.webp", alt: "Lentes de contacto Alcon", href: "/lentes-de-contacto" },
];

export function BrandShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text-primary">
              Nuestras Marcas
            </h2>
            <p className="text-base text-warm-stone">
              Marcas exclusivas de calidad, en un solo lugar
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
            <a key={brand.name} href={brand.href} className="group flex-shrink-0 w-[260px] md:w-[290px]">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-white">
                <Image src={brand.image} alt={brand.alt} fill quality={90} sizes="290px" className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-center text-sm font-semibold text-text-primary">{brand.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
