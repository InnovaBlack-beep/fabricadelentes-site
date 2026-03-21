"use client";

import Image from "next/image";

export function StoreSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 520 }}>
      {/* Full background image */}
      <Image
        src="/images/hero-3.png"
        alt="Óptica Fábrica de Lentes en Guadalajara"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,14,13,0.85) 0%, rgba(15,14,13,0.6) 50%, rgba(15,14,13,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 py-24 md:py-32">
        <div className="max-w-xl">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-5"
            style={{
              color: "#C8A040",
              fontFamily: "var(--font-sans)",
            }}
          >
            Nuestra Óptica · Guadalajara
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#F5F0EA",
            }}
          >
            <span style={{ fontWeight: 400 }}>Hecho en GDL.</span>
            <br />
            <span style={{ fontWeight: 700 }}>Entregado hoy.</span>
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-8 max-w-md"
            style={{
              color: "rgba(245,240,234,0.65)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Nuestro laboratorio óptico propio nos permite fabricar tus lentes
            el mismo día. Sin intermediarios, sin esperas. Calidad garantizada.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/laboratorio"
              className="inline-flex items-center justify-center transition-all duration-300"
              style={{
                height: 50,
                padding: "0 32px",
                background: "#C8A040",
                color: "#1A1000",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E8D090";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C8A040";
              }}
            >
              Conocer el Laboratorio
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center transition-all duration-300"
              style={{
                height: 50,
                padding: "0 32px",
                border: "1.5px solid rgba(245,240,234,0.3)",
                color: "#F5F0EA",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#F5F0EA";
                e.currentTarget.style.background = "rgba(245,240,234,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,240,234,0.3)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Visítanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
