import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lentes de Contacto en GDL | Fábrica de Lentes",
  description:
    "Lentes de contacto en Guadalajara. Acuvue, Bausch & Lomb, CooperVision, Alcon. Diarios, mensuales, para astigmatismo. Entrega inmediata. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-contacto" },
  openGraph: {
    title: "Lentes de Contacto | Fábrica de Lentes · GDL",
    description: "Lentes de contacto: Acuvue, Bausch & Lomb, CooperVision. Diarios, mensuales, astigmatismo.",
    url: "https://fabricadelentes.mx/lentes-de-contacto",
    images: [{ url: "https://fabricadelentes.mx/images/hero-3.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const filterPills = [
  "Diarios",
  "Mensuales",
  "Astigmatismo",
  "Miopía",
  "Colores",
  "Más vendidos",
];

function ContactLensSVG({ variant }: { variant: number }) {
  const v = variant % 4;
  if (v === 0) {
    return (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="12" y="10" width="56" height="60" rx="8" stroke="#6A5A4A" strokeWidth="1.2" />
        <rect x="20" y="18" width="40" height="30" rx="4" stroke="#6A5A4A" strokeWidth="1" opacity="0.5" />
        <ellipse cx="40" cy="33" rx="14" ry="8" stroke="#6A5A4A" strokeWidth="1" opacity="0.4" />
        <circle cx="40" cy="33" r="3" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.3" />
        <line x1="20" y1="56" x2="60" y2="56" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.3" />
        <line x1="20" y1="62" x2="48" y2="62" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.2" />
      </svg>
    );
  }
  if (v === 1) {
    return (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="35" r="22" stroke="#6A5A4A" strokeWidth="1.2" />
        <circle cx="40" cy="35" r="14" stroke="#6A5A4A" strokeWidth="1" opacity="0.4" />
        <circle cx="40" cy="35" r="6" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.3" />
        <line x1="18" y1="66" x2="62" y2="66" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.3" />
        <line x1="24" y1="72" x2="56" y2="72" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.2" />
      </svg>
    );
  }
  if (v === 2) {
    return (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="12" width="60" height="48" rx="6" stroke="#6A5A4A" strokeWidth="1.2" />
        <ellipse cx="40" cy="36" rx="18" ry="12" stroke="#6A5A4A" strokeWidth="1" opacity="0.5" />
        <ellipse cx="40" cy="36" rx="8" ry="5" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.3" />
        <line x1="10" y1="66" x2="70" y2="66" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.3" />
        <line x1="16" y1="72" x2="52" y2="72" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.2" />
      </svg>
    );
  }
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="14" y="8" width="52" height="64" rx="10" stroke="#6A5A4A" strokeWidth="1.2" />
      <ellipse cx="40" cy="34" rx="16" ry="10" stroke="#6A5A4A" strokeWidth="1" opacity="0.5" />
      <circle cx="40" cy="34" r="4" fill="#6A5A4A" opacity="0.15" />
      <line x1="22" y1="54" x2="58" y2="54" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.3" />
      <line x1="22" y1="60" x2="50" y2="60" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.2" />
      <line x1="22" y1="66" x2="44" y2="66" stroke="#6A5A4A" strokeWidth="0.8" opacity="0.15" />
    </svg>
  );
}

const products = [
  { brand: "Acuvue", model: "Oasys 1-Day", price: "$590/caja", badge: "Más vendido" },
  { brand: "Acuvue", model: "Moist 1-Day", price: "$490/caja", badge: "" },
  { brand: "Air Optix", model: "Night & Day Aqua", price: "$890/caja", badge: "Entrega 1hr" },
  { brand: "Bausch & Lomb", model: "Ultra Monthly", price: "$690/caja", badge: "Entrega 1hr" },
  { brand: "CooperVision", model: "Biofinity Monthly", price: "$650/caja", badge: "" },
  { brand: "Dailies", model: "Total1 Daily", price: "$790/caja", badge: "Nuevo" },
  { brand: "Acuvue", model: "Oasys for Astigmatism", price: "$790/caja", badge: "" },
  { brand: "Air Optix", model: "Colors Monthly", price: "$550/caja", badge: "Popular" },
  { brand: "Acuvue", model: "Vita Monthly", price: "$590/caja", badge: "" },
  { brand: "CooperVision", model: "MyDay Daily", price: "$690/caja", badge: "Más pedido" },
  { brand: "FreshLook", model: "ColorBlends", price: "$490/caja", badge: "Popular" },
  { brand: "Acuvue", model: "Multifocal 1-Day", price: "$890/caja", badge: "" },
];

export default function LentesDeContacto() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-6 pb-2">
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "#A09080",
          }}
        >
          <Link
            href="/"
            className="hover:text-[#C8A040] transition-colors"
            style={{ color: "#A09080" }}
          >
            Inicio
          </Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#6A5A4A" }}>Lentes de Contacto</span>
        </p>
      </div>

      {/* Title + filters */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-4">
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(32px, 4vw, 40px)",
            color: "#111110",
          }}
        >
          Lentes de contacto
        </h1>
      </div>

      {/* Filter pills */}
      <div
        className="mb-6"
        style={{ borderBottom: "0.5px solid #E8E0D8" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            {filterPills.map((pill) => (
              <button
                key={pill}
                className="shrink-0 rounded-full transition-colors"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  color: "#6A5A4A",
                  border: "0.5px solid #C8C0B8",
                  padding: "7px 14px",
                  background: "#FAF8F5",
                  cursor: "pointer",
                }}
              >
                {pill}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 12,
                color: "#6A5A4A",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Filtros ≡
            </button>
            <button
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 12,
                color: "#6A5A4A",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Ordenar ▾
            </button>
          </div>
        </div>
      </div>

      {/* Dark promo banner */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-8">
        <div
          className="text-center py-6 px-6"
          style={{ background: "#1A1818", borderRadius: 10 }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(245,240,234,0.55)",
              marginBottom: 4,
            }}
          >
            — EN TIENDA —
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: 28,
              color: "#F5F0EA",
              marginBottom: 8,
            }}
          >
            TODAS LAS MARCAS · LENTES LISTOS EN 1 HORA
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "rgba(245,240,234,0.45)",
            }}
          >
            CONSULTA DISPONIBILIDAD EN TIENDA
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((p, i) => (
            <a
              key={p.brand + p.model}
              href={`https://wa.me/523314257226?text=${encodeURIComponent(
                `Hola, me interesa el modelo ${p.brand} ${p.model}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-all duration-[180ms] bg-[#F0EBE3] hover:bg-[#E8E0D8] hover:-translate-y-0.5 rounded-[10px] relative"
              style={{
                padding: "20px 16px 16px",
              }}
            >
              {p.badge && (
                <span
                  className="rounded-full"
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "#C8A040",
                    color: "#1A1000",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: 10,
                    padding: "2px 10px",
                    zIndex: 10,
                  }}
                >
                  {p.badge}
                </span>
              )}
              <div
                className="flex items-center justify-center mb-4"
                style={{ height: 108 }}
              >
                <ContactLensSVG variant={i} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#111110",
                }}
              >
                {p.brand}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  color: "#6A5A4A",
                  marginTop: 2,
                }}
              >
                {p.model}
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#111110",
                }}
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
