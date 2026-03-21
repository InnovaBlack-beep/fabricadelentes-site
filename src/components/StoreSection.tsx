"use client";

import Image from "next/image";

export function StoreSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 520 }}>
      <Image src="/images/hero-3.png" alt="Óptica Fábrica de Lentes en Guadalajara" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,14,13,0.85) 0%, rgba(15,14,13,0.6) 50%, rgba(15,14,13,0.3) 100%)" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 py-24 md:py-32">
        <div className="max-w-xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-gold">
            Nuestra Óptica · Guadalajara
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-text-on-dark" style={{ fontFamily: "var(--font-serif)" }}>
            <span className="font-normal">Hecho en GDL.</span>
            <br />
            <span className="font-bold">Entregado hoy.</span>
          </h2>
          <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "rgba(245,240,234,0.65)" }}>
            Nuestro laboratorio óptico propio nos permite fabricar tus lentes
            el mismo día. Sin intermediarios, sin esperas. Calidad garantizada.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/laboratorio"
              className="inline-flex items-center justify-center h-12 px-8 text-xs font-bold uppercase tracking-widest transition-all duration-300"
              style={{ background: "#C8A040", color: "#1A1000" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#E8D090"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C8A040"; }}
            >
              Conocer el Laboratorio
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center h-12 px-8 text-xs font-bold uppercase tracking-widest transition-all duration-300"
              style={{ border: "1.5px solid rgba(245,240,234,0.3)", color: "#F5F0EA", background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F5F0EA"; e.currentTarget.style.background = "rgba(245,240,234,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,240,234,0.3)"; e.currentTarget.style.background = "transparent"; }}
            >
              Visítanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
