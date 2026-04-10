import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { oftalmicos, brands, getDetailUrl } from "@/data/products";

export const metadata: Metadata = {
  title: "Lentes Graduados en Guadalajara | Armazones desde $1,949 | Fábrica de Lentes®",
  description:
    "Compra lentes graduados en Guadalajara con fabricación propia. Listos en 1 hora. Armazones Brizzant, Frida Kahlo, Nobleman, Massimo desde $1,949. Micas antirreflejante, blue, fotocromáticas, progresivos. Examen de la vista gratis. La mejor óptica de GDL.",
  keywords: [
    "lentes graduados guadalajara", "armazones guadalajara", "comprar lentes guadalajara",
    "lentes para miopía guadalajara", "lentes para astigmatismo guadalajara",
    "lentes progresivos guadalajara", "lentes bifocales guadalajara",
    "micas antirreflejante guadalajara", "lentes transitions guadalajara",
    "lentes fotocromáticos guadalajara", "lentes blue luz azul guadalajara",
    "lentes brizzant precio", "lentes frida kahlo precio", "lentes nobleman precio",
    "lentes massimo precio", "armazones baratos guadalajara", "lentes económicos guadalajara",
    "lentes listos en 1 hora", "lentes mismo día guadalajara",
    "lentes graduados zona minerva", "óptica zona minerva guadalajara",
    "donde comprar lentes graduados guadalajara", "mejor óptica para lentes graduados",
  ],
  alternates: { canonical: "https://fabricadelentes.mx/lentes-graduados" },
  openGraph: {
    title: "Lentes Graduados en Guadalajara desde $1,949 | Fábrica de Lentes®",
    description: "Lentes graduados con fabricación propia en 1 hora. Brizzant, Frida Kahlo, Nobleman, Massimo. Examen gratis. Zona Minerva, GDL.",
    url: "https://fabricadelentes.mx/lentes-graduados",
    images: [{ url: "https://fabricadelentes.mx/products/oftalmicos/FKL1-e4cd1228.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const filterPills = ["Todos", ...brands.oftalmicos];

const products = oftalmicos;

export default function LentesGraduados() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-6 pb-2">
        <p className="text-xs text-[#A09080]">
          <Link href="/" className="hover:text-[#B5956E] transition-colors">Inicio</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#6A5A4A]">Lentes Graduados</span>
        </p>
      </div>

      {/* Title */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 pb-4">
        <h1
          className="text-3xl md:text-4xl text-[#111110]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Lentes Graduados
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
                    ? "text-xs font-medium text-[#111110] border border-[#111110] rounded-full px-3.5 py-1.5 whitespace-nowrap"
                    : "text-xs text-[#6A5A4A] border border-[#E5E5E5] rounded-full px-3.5 py-1.5 whitespace-nowrap hover:border-[#111110] hover:text-[#111110] transition-colors"
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
          <p className="text-xs tracking-[0.12em] uppercase mb-1 text-[rgba(245,240,234,0.50)]">&mdash; Laboratorio propio &mdash;</p>
          <h2
            className="text-2xl md:text-3xl mb-2 text-[#F5F0EA] font-semibold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Fabricamos tus lentes en Guadalajara
          </h2>
          <p className="text-xs text-[rgba(245,240,234,0.60)] max-w-2xl mx-auto mb-2">
            Envía tu receta por WhatsApp. Entrega el mismo día.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#B5956E] hover:text-[#D4C0A0] transition-colors font-medium"
          >
            Cotizar ahora &rarr;
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
                  alt={`Lentes ${p.brand} modelo ${p.model} — Fábrica de Lentes GDL`}
                  fill
                  quality={90}
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
              <p className="text-sm text-[#111110] font-semibold" style={{ fontFamily: "var(--font-serif)" }}>{p.brand}</p>
              <p className="text-xs text-[#6A5A4A]">{p.model}</p>
              <p className="text-base font-semibold text-[#111110] mt-1" style={{ fontFamily: "var(--font-serif)" }}>{p.priceFormatted}</p>
              <span className="inline-block mt-3 text-xs text-[#B5956E] font-medium group-hover:underline">Ver detalle &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
