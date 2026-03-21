import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lentes de Sol en Guadalajara | Ray-Ban, Meta, Oakley | Fábrica de Lentes",
  description:
    "Lentes de sol originales en Guadalajara. Ray-Ban, Meta, Oakley, Prada y más. También graduados de sol. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-sol" },
};

const filterPills = [
  "Todos",
  "Ray-Ban",
  "Oakley",
  "Meta",
  "Vogue",
  "Prada",
  "Graduados de sol",
];

const products = [
  { brand: "Ray-Ban", model: "Aviador Classic RB3025", price: "$1,690", badge: "M\u00e1s vendido", image: "/images/hero-3.png" },
  { brand: "Ray-Ban", model: "Wayfarer RB2140", price: "$1,490", badge: "", image: "/images/hero-2.png" },
  { brand: "Meta Ray-Ban", model: "Wayfarer Smart", price: "$7,490", badge: "AI Glasses", image: "/images/hero-1.png" },
  { brand: "Oakley", model: "Holbrook OO9102", price: "$1,690", badge: "", image: "/images/hero-3.png" },
  { brand: "Ray-Ban", model: "Clubmaster RB3016", price: "$1,590", badge: "Entrega 1hr", image: "/images/hero-2.png" },
  { brand: "Vogue", model: "VO5531S Cat Eye", price: "$1,190", badge: "", image: "/images/hero-1.png" },
  { brand: "Oakley", model: "Sutro OO9406", price: "$1,690", badge: "Nuevo", image: "/images/hero-3.png" },
  { brand: "Ray-Ban", model: "Justin RB4165", price: "$1,290", badge: "", image: "/images/hero-2.png" },
  { brand: "Prada", model: "PR 17WS Symbole", price: "$1,690", badge: "", image: "/images/hero-1.png" },
  { brand: "Ray-Ban", model: "Erika RB4171", price: "$1,390", badge: "M\u00e1s vendido", image: "/images/hero-3.png" },
  { brand: "Meta Ray-Ban", model: "Headliner Smart", price: "$7,990", badge: "AI Glasses", image: "/images/hero-2.png" },
  { brand: "Oakley", model: "Frogskins OO9013", price: "$1,490", badge: "", image: "/images/hero-1.png" },
];

export default function LentesDeSol() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-10 pt-6 pb-2">
        <p className="text-[12px] text-[#A09080]">
          <Link href="/" className="hover:text-[#C8A040] transition-colors">Inicio</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#6A5A4A]">Lentes de Sol</span>
        </p>
      </div>

      {/* Title */}
      <div className="max-w-[1280px] mx-auto px-10 pb-4">
        <h1
          className="text-[32px] md:text-[40px] text-[#111110]"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
        >
          Lentes de Sol
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
                    ? "text-[11px] font-medium text-[#111110] border border-[#111110] rounded-full px-3.5 py-1.5 whitespace-nowrap"
                    : "text-[11px] text-[#6A5A4A] border border-[#C8C0B8] rounded-full px-3.5 py-1.5 whitespace-nowrap hover:border-[#111110] hover:text-[#111110] transition-colors"
                }
                style={{ fontFamily: "var(--font-sans)" }}
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
          <p className="text-[11px] tracking-[0.12em] uppercase mb-1 text-[rgba(245,240,234,0.50)]">&mdash; Originales con garant&iacute;a &mdash;</p>
          <h2
            className="text-2xl md:text-3xl mb-2 text-[#F5F0EA]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            Lentes de sol originales
          </h2>
          <p className="text-[12px] text-[rgba(245,240,234,0.60)] max-w-2xl mx-auto mb-2">
            100% aut&eacute;nticos con garant&iacute;a de marca. Tambi&eacute;n graduados de sol.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#C8A040] hover:text-[#E8D090] transition-colors font-medium"
          >
            Ver disponibilidad &rarr;
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
                <span
                  className="absolute top-4 left-4 bg-[#C8A040] text-[#1A1000] text-[10px] font-bold uppercase tracking-[0.07em] px-2.5 py-0.5 rounded-full z-10"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
                >
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
              <p className="text-[14px] text-[#111110]" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>{p.brand}</p>
              <p className="text-[12px] text-[#6A5A4A]" style={{ fontFamily: "var(--font-sans)" }}>{p.model}</p>
              <p className="text-[15px] text-[#111110] mt-1" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>{p.price}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
