import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lentes de Contacto en Guadalajara | Todas las Marcas | Fabrica de Lentes",
  description:
    "Lentes de contacto en Guadalajara. Acuvue, Bausch & Lomb, CooperVision, Alcon. Diarios, mensuales, para astigmatismo. Entrega inmediata. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-contacto" },
};

const tabs = [
  "Todos",
  "Diarios",
  "Mensuales",
  "Astigmatismo",
  "Multifocales",
  "Color",
];

const products = [
  { brand: "Acuvue", model: "Oasys 1-Day", price: "$590/caja", badge: "Más vendido", image: "/images/hero-1.png" },
  { brand: "Acuvue", model: "Moist 1-Day", price: "$490/caja", badge: "", image: "/images/hero-2.png" },
  { brand: "Air Optix", model: "Night & Day Aqua", price: "$890/caja", badge: "", image: "/images/hero-3.png" },
  { brand: "Bausch & Lomb", model: "Ultra Monthly", price: "$690/caja", badge: "Entrega hoy", image: "/images/hero-1.png" },
  { brand: "CooperVision", model: "Biofinity Monthly", price: "$650/caja", badge: "", image: "/images/hero-2.png" },
  { brand: "Dailies", model: "Total1 Daily", price: "$790/caja", badge: "Nuevo", image: "/images/hero-3.png" },
  { brand: "Acuvue", model: "Oasys for Astigmatism", price: "$790/caja", badge: "", image: "/images/hero-1.png" },
  { brand: "Air Optix", model: "Colors Monthly", price: "$550/caja", badge: "Popular", image: "/images/hero-2.png" },
  { brand: "Acuvue", model: "Vita Monthly", price: "$590/caja", badge: "", image: "/images/hero-3.png" },
  { brand: "CooperVision", model: "MyDay Daily", price: "$690/caja", badge: "", image: "/images/hero-1.png" },
  { brand: "FreshLook", model: "ColorBlends", price: "$490/caja", badge: "Popular", image: "/images/hero-2.png" },
  { brand: "Acuvue", model: "Multifocal 1-Day", price: "$890/caja", badge: "", image: "/images/hero-3.png" },
];

export default function LentesDeContacto() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-10 pt-6 pb-2">
        <p className="text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#0057A8]">Inicio</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#444]">Lentes de Contacto</span>
        </p>
      </div>

      {/* Title */}
      <div className="max-w-[1280px] mx-auto px-10 pb-4">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#111] font-normal">
          Lentes de Contacto
        </h1>
      </div>

      {/* Filter tabs */}
      <div className="border-b border-[#eee] mb-6">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="flex items-center gap-6 overflow-x-auto py-3">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={
                  i === 0
                    ? "text-[12px] font-semibold text-[#111] border-b-2 border-[#111] pb-3 -mb-[1px] whitespace-nowrap"
                    : "text-[12px] text-[#888] pb-3 whitespace-nowrap hover:text-[#111] transition-colors"
                }
              >
                {tab}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-4 shrink-0">
              <button className="text-[12px] text-[#444] flex items-center gap-1">
                Filtros
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
              </button>
              <button className="text-[12px] text-[#444] flex items-center gap-1">
                Ordenar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Promo banner */}
      <div className="max-w-[1280px] mx-auto px-10 mb-8">
        <div className="bg-[#0057A8] text-white text-center py-6 px-6 rounded-sm">
          <p className="text-[11px] tracking-[0.12em] uppercase mb-1">&mdash; En tienda y en l&iacute;nea &mdash;</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-normal mb-2">
            TODAS LAS MARCAS DISPONIBLES
          </h2>
          <p className="text-[12px] text-white/70 max-w-2xl mx-auto mb-2">
            Acuvue, Bausch &amp; Lomb, CooperVision, Alcon. Entrega inmediata.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] underline"
          >
            Pedir ahora
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
              className="group bg-[#F8F8F8] rounded-sm p-5 hover:shadow-md transition-all relative"
            >
              {/* Badge */}
              {p.badge && (
                <span className="absolute top-4 left-4 bg-white text-[10px] font-semibold uppercase tracking-wider text-[#111] px-2 py-1 shadow-sm z-10">
                  {p.badge}
                </span>
              )}
              {/* Heart icon */}
              <span className="absolute top-4 right-4 text-[#ccc] group-hover:text-[#0057A8] z-10 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </span>
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                <Image
                  src={p.image}
                  alt={`${p.brand} ${p.model}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Info */}
              <p className="text-[13px] font-bold text-[#111]">{p.brand}</p>
              <p className="text-[13px] text-[#666]">{p.model}</p>
              <p className="text-[14px] font-semibold text-[#111] mt-1">{p.price}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
