"use client";

import { useState } from "react";

export function BookingSection() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const msg = value.trim()
      ? `Hola, soy ${value}. Quiero agendar un examen de la vista.`
      : "Hola, quiero agendar un examen de la vista.";
    window.open(
      `https://wa.me/523314257226?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "#1A1818" }}>
      <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: "linear-gradient(to right, transparent, #C8A040, transparent)" }} />

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-gold">
              Examen Gratuito
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-text-on-dark" style={{ fontFamily: "var(--font-serif)" }}>
              Tu visión merece
              <br />lo mejor.
            </h2>
            <p className="text-base leading-relaxed max-w-lg" style={{ color: "rgba(245,240,234,0.55)" }}>
              Agenda tu examen de la vista sin costo. Optometristas certificados,
              equipo de última generación, y resultados inmediatos.
            </p>
          </div>

          <div className="rounded-2xl p-8 md:p-10" style={{ background: "rgba(245,240,234,0.04)", border: "1px solid rgba(245,240,234,0.08)", backdropFilter: "blur(10px)" }}>
            <p className="text-sm font-medium mb-6 text-text-on-dark">
              Déjanos tu nombre y te contactamos por WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Tu nombre o WhatsApp"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="flex-1 outline-none rounded-lg h-[52px] px-5 text-sm"
                style={{ border: "1px solid rgba(245,240,234,0.12)", color: "#F5F0EA", background: "rgba(245,240,234,0.06)" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#C8A040")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(245,240,234,0.12)")}
              />
              <button
                onClick={handleSubmit}
                className="shrink-0 rounded-lg h-[52px] px-8 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                style={{ background: "#C8A040", color: "#1A1000" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#E8D090"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#C8A040"; }}
              >
                Agendar Ahora
              </button>
            </div>
            <div className="flex items-center gap-6 mt-6 text-xs" style={{ color: "rgba(245,240,234,0.4)" }}>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 6L9 17l-5-5" /></svg>
                Sin costo
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 6L9 17l-5-5" /></svg>
                Sin cita previa
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 6L9 17l-5-5" /></svg>
                Resultados al momento
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
