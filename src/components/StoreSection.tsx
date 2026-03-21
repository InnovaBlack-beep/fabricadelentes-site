"use client";

import Image from "next/image";

export function StoreSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left — image */}
      <div className="relative" style={{ minHeight: 340 }}>
        <Image
          src="/images/hero-1.png"
          alt="Óptica Fábrica de Lentes en Guadalajara"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15,14,13,0.20)" }}
        />
      </div>

      {/* Right — content */}
      <div
        className="flex flex-col justify-center"
        style={{
          background: "#F0EBE3",
          padding: "52px 48px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "#C8A040",
            marginBottom: 16,
          }}
        >
          NUESTRA ÓPTICA · GUADALAJARA
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 30,
            color: "#111110",
            lineHeight: 1.25,
          }}
        >
          <span style={{ fontWeight: 400 }}>Hecho en GDL.</span>
          <br />
          <span style={{ fontWeight: 600 }}>Entregado hoy.</span>
        </h2>
        <p
          className="mt-4"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "#6A5A4A",
            lineHeight: 1.75,
            maxWidth: 420,
          }}
        >
          Nuestro laboratorio óptico propio en Guadalajara nos permite
          fabricar tus lentes el mismo día. Sin intermediarios, sin esperas.
          Calidad garantizada con la mejor tecnología óptica.
        </p>
        <a
          href="/laboratorio"
          className="mt-6 transition-colors inline-block"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#111110",
            borderBottom: "1px solid #C8A040",
            paddingBottom: 2,
            width: "fit-content",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A040")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#111110")}
        >
          CONOCER EL LABORATORIO →
        </a>
      </div>
    </section>
  );
}
