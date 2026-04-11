import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { solares, brands, getDetailUrl } from "@/data/products";

export const metadata: Metadata = {
  title: "Lentes de Sol en Guadalajara | Colección Frida Kahlo desde $1,649 | Fábrica de Lentes®",
  description:
    "Lentes de sol Frida Kahlo originales en Guadalajara. 21 modelos con protección UV 400. Polarizados disponibles. También graduados de sol. Garantía de 1 año. La mejor colección de lentes de sol en GDL. Sucursal Zona Minerva.",
  keywords: [
    "lentes de sol guadalajara", "lentes de sol frida kahlo", "lentes de sol polarizados guadalajara",
    "lentes de sol graduados guadalajara", "lentes de sol con protección uv guadalajara",
    "comprar lentes de sol guadalajara", "lentes de sol baratos guadalajara",
    "lentes de sol originales guadalajara", "gafas de sol guadalajara",
    "lentes de sol para mujer guadalajara", "lentes de sol para hombre guadalajara",
    "lentes de sol zona minerva", "óptica con lentes de sol guadalajara",
    "lentes solares guadalajara", "protección uv 400 lentes",
    "donde comprar lentes de sol guadalajara", "mejor óptica lentes de sol",
  ],
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-sol" },
  openGraph: {
    title: "Lentes de Sol Frida Kahlo en Guadalajara | Fábrica de Lentes®",
    description: "21 modelos Frida Kahlo con UV 400. Polarizados y graduados disponibles. Desde $1,649. Zona Minerva, GDL.",
    url: "https://fabricadelentes.mx/lentes-de-sol",
    images: [{ url: "https://fabricadelentes.mx/products/solares/FKSL1-5ea420bc.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const filterPills = ["Todos", ...brands.solares];

const products = solares;

export default function LentesDeSol() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-6 pb-2">
        <p className="text-sm text-[#A09080]">
          <Link href="/" className="hover:text-[#B5956E] transition-colors">Inicio</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#6A5A4A]">Lentes de Sol</span>
        </p>
      </div>

      {/* Title */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 pb-4">
        <h1
          className="text-3xl md:text-4xl text-[#111110]"
        >
          Lentes de Sol
        </h1>
      </div>

      {/* Filter pills */}
      <div className="border-b border-[#F0F0F0] mb-6">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex items-center gap-3 overflow-x-auto py-3">
            {filterPills.map((pill, i) => (
              <button
                key={pill}
                className={
                  i === 0
                    ? "text-sm font-medium text-[#111110] border border-[#111110] rounded-full px-3.5 py-1.5 whitespace-nowrap"
                    : "text-sm text-[#6A5A4A] border border-[#E5E5E5] rounded-full px-3.5 py-1.5 whitespace-nowrap hover:border-[#111110] hover:text-[#111110] transition-colors"
                }
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dark promo banner */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 mb-8">
        <div className="bg-[#1A1818] text-center py-6 px-6 rounded-[10px]">
          <p className="text-sm tracking-[0.12em] uppercase mb-1 text-[rgba(245,240,234,0.50)]">&mdash; Originales con garantía &mdash;</p>
          <h2
            className="text-2xl md:text-3xl mb-2 text-[#F5F0EA] font-semibold"
          >
            Lentes de sol originales
          </h2>
          <p className="text-sm text-[rgba(245,240,234,0.60)] max-w-2xl mx-auto mb-2">
            100% auténticos con garantía de marca. También graduados de sol.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#B5956E] hover:text-[#D4C0A0] transition-colors font-medium"
          >
            Ver disponibilidad &rarr;
          </a>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.id}
              href={getDetailUrl(p.id)}
              className="group bg-white border border-[#F0F0F0] rounded-[10px] p-5 hover:shadow-lg hover:-translate-y-1 transition-all relative"
            >
              <span className="absolute top-4 left-4 bg-[#B5956E] text-[#2A1F14] text-xs font-bold uppercase tracking-[0.07em] px-2.5 py-0.5 rounded-full z-10">
                Nuevo
              </span>
              <div className="relative aspect-square overflow-hidden rounded mb-4 mt-2 bg-white">
                <Image
                  src={p.image}
                  alt={`Lentes de sol ${p.brand} modelo ${p.model} — Fábrica de Lentes GDL`}
                  fill
                  quality={90}
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
              <p className="text-base text-[#111110] font-semibold">{p.brand}</p>
              <p className="text-sm text-[#6A5A4A]">{p.model}</p>
              <p className="text-lg font-bold text-[#111110] mt-1">{p.priceFormatted}</p>
              <p className="text-xs text-[#B5956E] mt-1">Protección UV 400 · Garantía de marca</p>
              <span className="inline-block mt-3 text-sm text-[#B5956E] font-medium group-hover:underline">Ver detalle &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
