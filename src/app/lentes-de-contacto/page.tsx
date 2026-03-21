import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lentes de Contacto en Guadalajara | Todas las Marcas | Fábrica de Lentes",
  description:
    "Lentes de contacto en Guadalajara. Acuvue, Bausch & Lomb, CooperVision, Alcon. Diarios, mensuales, para astigmatismo. Entrega inmediata. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-contacto" },
};

const filterPills = [
  "Todos",
  "Diarios",
  "Mensuales",
  "Astigmatismo",
  "Miopía",
  "Colores",
  "Más vendidos",
];

const products = [
  { brand: "Acuvue", model: "Oasys 1-Day", price: "$590/caja", badge: "M\u00e1s vendido", image: "/images/hero-1.png" },
  { brand: "Acuvue", model: "Moist 1-Day", price: "$490/caja", badge: "", image: "/images/hero-2.png" },
  { brand: "Air Optix", model: "Night & Day Aqua", price: "$890/caja", badge: "Entrega 1hr", image: "/images/hero-3.png" },
  { brand: "Bausch & Lomb", model: "Ultra Monthly", price: "$690/caja", badge: "Entrega 1hr", image: "/images/hero-1.png" },
  { brand: "CooperVision", model: "Biofinity Monthly", price: "$650/caja", badge: "", image: "/images/hero-2.png" },
  { brand: "Dailies", model: "Total1 Daily", price: "$790/caja", badge: "Nuevo", image: "/images/hero-3.png" },
  { brand: "Acuvue", model: "Oasys for Astigmatism", price: "$790/caja", badge: "", image: "/images/hero-1.png" },
  { brand: "Air Optix", model: "Colors Monthly", price: "$550/caja", badge: "Popular", image: "/images/hero-2.png" },
  { brand: "Acuvue", model: "Vita Monthly", price: "$590/caja", badge: "", image: "/images/hero-3.png" },
  { brand: "CooperVision", model: "MyDay Daily", price: "$690/caja", badge: "M\u00e1s pedido", image: "/images/hero-1.png" },
  { brand: "FreshLook", model: "ColorBlends", price: "$490/caja", badge: "Popular", image: "/images/hero-2.png" },
  { brand: "Acuvue", model: "Multifocal 1-Day", price: "$890/caja", badge: "", image: "/images/hero-3.png" },
];

export default function LentesDeContacto() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-10 pt-6 pb-2">
        <p className="text-[12px] text-[#A09080]">
          <Link href="/" className="hover:text-[#C8A040] transition-colors">Inicio</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-[#6A5A4A]">Lentes de Contacto</span>
        </p>
      </div>

      {/* Title */}
      <div className="max-w-[1280px] mx-auto px-10 pb-4">
        <h1
          className="text-[32px] md:text-[40px] text-[#111110]"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
        >
          Lentes de Contacto
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
          <p className="text-[10px] tracking-[0.12em] uppercase mb-1 text-[rgba(245,240,234,0.55)]">&mdash; EN TIENDA &mdash;</p>
          <h2
            className="text-2xl md:text-[28px] mb-2 text-[#F5F0EA]"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            TODAS LAS MARCAS · LENTES LISTOS EN 1 HORA
          </h2>
          <p className="text-[10px] tracking-[0.06em] uppercase text-[rgba(245,240,234,0.45)]">
            CONSULTA DISPONIBILIDAD EN TIENDA
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#C8A040] hover:text-[#E8D090] transition-colors font-medium"
          >
            Pedir ahora &rarr;
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
              {/* Badge */}
              {p.badge && (
                <span
                  className="absolute top-4 left-4 bg-[#C8A040] text-[#1A1000] text-[10px] font-bold uppercase tracking-[0.07em] px-2.5 py-0.5 rounded-full z-10"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
                >
                  {p.badge}
                </span>
              )}
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded mb-4 mt-2">
                <Image
                  src={p.image}
                  alt={`${p.brand} ${p.model}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Info */}
              <p
                className="text-[14px] text-[#111110]"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {p.brand}
              </p>
              <p className="text-[12px] text-[#6A5A4A]" style={{ fontFamily: "var(--font-sans)" }}>{p.model}</p>
              <p
                className="text-[15px] text-[#111110] mt-1"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {p.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
