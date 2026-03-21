import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lentes Graduados en GDL | Fábrica de Lentes",
  description:
    "Lentes graduados con fabricación propia en Guadalajara. Monofocales, bifocales, progresivos. Entrega el mismo día. Ray-Ban, Oakley, Prada y más marcas.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-graduados" },
  openGraph: {
    title: "Lentes Graduados | Fábrica de Lentes · GDL",
    description: "Lentes graduados con fabricación propia. Monofocales, bifocales, progresivos. Entrega el mismo día.",
    url: "https://fabricadelentes.mx/lentes-graduados",
    images: [{ url: "https://fabricadelentes.mx/images/hero-1.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const filterPills = [
  "Todos",
  "Monofocales",
  "Progresivos",
  "Bifocales",
  "Blue Block",
  "Antirreflex",
  "Transici\u00f3n",
];

const products = [
  { brand: "Ray-Ban", model: "RB5154 Clubmaster", price: "$1,490", badge: "M\u00e1s vendido", image: "/images/hero-1.png" },
  { brand: "Oakley", model: "OX8046 Airdrop", price: "$1,690", badge: "", image: "/images/hero-3.png" },
  { brand: "Ray-Ban", model: "RB7047 Rectangular", price: "$1,190", badge: "Entrega 1hr", image: "/images/hero-2.png" },
  { brand: "Vogue", model: "VO5407 Cat Eye", price: "$990", badge: "", image: "/images/hero-1.png" },
  { brand: "Arnette", model: "AN7189 Urban", price: "$890", badge: "Nuevo", image: "/images/hero-3.png" },
  { brand: "Emporio Armani", model: "EA3099 Classic", price: "$1,590", badge: "", image: "/images/hero-2.png" },
  { brand: "Ray-Ban", model: "RB5228 Wayfarer", price: "$1,350", badge: "M\u00e1s vendido", image: "/images/hero-1.png" },
  { brand: "Michael Kors", model: "MK4030 Vivianna", price: "$1,490", badge: "", image: "/images/hero-3.png" },
  { brand: "Prada", model: "PR 17WV Conceptual", price: "$1,690", badge: "", image: "/images/hero-2.png" },
  { brand: "Coach", model: "HC6065 Rectangle", price: "$1,390", badge: "Entrega 1hr", image: "/images/hero-1.png" },
  { brand: "Versace", model: "VE3328 Medusa", price: "$1,590", badge: "", image: "/images/hero-3.png" },
  { brand: "Burberry", model: "BE2376 Square", price: "$1,490", badge: "Nuevo", image: "/images/hero-2.png" },
];

export default function LentesGraduados() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-10 pt-6 pb-2">
        <p className="text-xs text-[#A09080]">
          <Link href="/" className="hover:text-[#C8A040] transition-colors">Inicio</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#6A5A4A]">Lentes Graduados</span>
        </p>
      </div>

      {/* Title */}
      <div className="max-w-[1280px] mx-auto px-10 pb-4">
        <h1
          className="text-3xl md:text-4xl text-[#111110]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Lentes Graduados
        </h1>
      </div>

      {/* Filter pills */}
      <div className="border-b border-[#E8E0D8] mb-6">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="flex items-center gap-3 overflow-x-auto py-3">
            {filterPills.map((pill, i) => (
              <button
                key={pill}
                className={
                  i === 0
                    ? "text-xs font-medium text-[#111110] border border-[#111110] rounded-full px-3.5 py-1.5 whitespace-nowrap"
                    : "text-xs text-[#6A5A4A] border border-[#C8C0B8] rounded-full px-3.5 py-1.5 whitespace-nowrap hover:border-[#111110] hover:text-[#111110] transition-colors"
                }
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dark promo banner */}
      <div className="max-w-[1280px] mx-auto px-10 mb-8">
        <div className="bg-[#1A1818] text-center py-6 px-6 rounded-[10px]">
          <p className="text-xs tracking-[0.12em] uppercase mb-1 text-[rgba(245,240,234,0.50)]">&mdash; Laboratorio propio &mdash;</p>
          <h2
            className="text-2xl md:text-3xl mb-2 text-[#F5F0EA] font-semibold"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Fabricamos tus lentes en Guadalajara
          </h2>
          <p className="text-xs text-[rgba(245,240,234,0.60)] max-w-2xl mx-auto mb-2">
            Env&iacute;a tu receta por WhatsApp. Entrega el mismo d&iacute;a.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#C8A040] hover:text-[#E8D090] transition-colors font-medium"
          >
            Cotizar ahora &rarr;
          </a>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-[1280px] mx-auto px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <a
              key={p.brand + p.model}
              href={`https://wa.me/523314257226?text=${encodeURIComponent(`Hola, me interesa el modelo ${p.brand} ${p.model}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F0EBE3] rounded-[10px] p-5 hover:bg-[#E8E0D8] hover:-translate-y-0.5 transition-all relative"
            >
              {p.badge && (
                <span className="absolute top-4 left-4 bg-[#C8A040] text-[#1A1000] text-xs font-bold uppercase tracking-[0.07em] px-2.5 py-0.5 rounded-full z-10">
                  {p.badge}
                </span>
              )}
              <div className="relative aspect-square overflow-hidden rounded mb-4 mt-2">
                <Image
                  src={p.image}
                  alt={`${p.brand} ${p.model}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-[#111110] font-semibold" style={{ fontFamily: "var(--font-sans)" }}>{p.brand}</p>
              <p className="text-xs text-[#6A5A4A]">{p.model}</p>
              <p className="text-base font-semibold text-[#111110] mt-1" style={{ fontFamily: "var(--font-sans)" }}>{p.price}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
