"use client";

import { useState } from "react";
import Image from "next/image";
import { trackFormSubmit } from "@/lib/analytics";
import { buildLeadMetadata } from "@/lib/utm";

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL || "";

export default function PromoExamenGratis() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit("promo_examen_gratis", "/promo/examen-gratis");

    if (BACKOFFICE_URL) {
      fetch(`${BACKOFFICE_URL}/api/public/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Visitante Promo",
          phone: phone.trim(),
          source: "promo_examen_gratis",
          messages: ["Quiero mi examen de la vista gratis (landing promo)"],
          metadata: buildLeadMetadata({ event: "promo_examen", page: "/promo/examen-gratis" }),
        }),
      }).catch(() => {});
    }

    const msg = `Hola, soy ${name.trim()}. Vi la promoción de examen gratis y quiero agendar. Mi tel: ${phone.trim()}`;
    window.open(
      `https://wa.me/523314257226?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#242424]">
        <Image
          src="/images/lifestyle-optician.jpg"
          alt="Optometrista en Fábrica de Lentes Guadalajara"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 max-w-[640px] mx-auto px-6 py-16 md:py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#B5956E] mb-4">
            Promoción Exclusiva
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Examen de la Vista
            <br />
            <span className="text-[#B5956E]">100% Gratis</span>
          </h1>
          <p className="text-base text-white/70 max-w-md mx-auto mb-8">
            Optometristas certificados, equipo de última generación y
            resultados inmediatos. Sin costo, sin compromiso.
          </p>
          <a
            href="#agendar"
            className="inline-flex items-center h-12 px-8 rounded-full bg-[#B5956E] text-[#242424] font-semibold text-sm hover:brightness-95 transition-all"
          >
            Agendar Mi Examen Gratis
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-[900px] mx-auto px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Lentes en 1 hora",
              desc: "Laboratorio propio. Tus lentes listos el mismo día de tu visita.",
            },
            {
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              title: "40 años de experiencia",
              desc: "Respaldados por más de 40 años en el ramo óptico.",
            },
            {
              icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              title: "+12,000 clientes",
              desc: "Miles de personas confían en nosotros para su salud visual.",
            },
          ].map((b) => (
            <div key={b.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#242424] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#B5956E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#242424] mb-1">{b.title}</h3>
              <p className="text-sm text-[#6B7280]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="agendar" className="bg-[#242424] py-14 md:py-20">
        <div className="max-w-[480px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Agenda tu examen gratis
            </h2>
            <p className="text-sm text-white/50">
              Zona Minerva, Guadalajara · Lun–Sáb 10:00–20:00
            </p>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="promo-name" className="block text-xs font-semibold text-[#B5956E] mb-1.5 uppercase tracking-widest">
                  Tu nombre
                </label>
                <input
                  id="promo-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. María González"
                  className="w-full h-12 px-5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 outline-none focus:border-[#B5956E] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="promo-phone" className="block text-xs font-semibold text-[#B5956E] mb-1.5 uppercase tracking-widest">
                  WhatsApp / Teléfono
                </label>
                <input
                  id="promo-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="33 1234 5678"
                  className="w-full h-12 px-5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 outline-none focus:border-[#B5956E] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-[#B5956E] text-[#242424] font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer"
              >
                Agendar por WhatsApp
              </button>
              <div className="flex items-center justify-center gap-5 text-xs text-white/40 pt-2">
                <span>Sin costo</span>
                <span>·</span>
                <span>Sin compromiso</span>
                <span>·</span>
                <span>Resultados inmediatos</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                ¡Listo! Te esperamos
              </h3>
              <p className="text-sm text-white/50">
                Se abrió WhatsApp para confirmar tu cita.
                Respondemos en minutos.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-[640px] mx-auto px-6 py-14 text-center">
        <p className="text-sm text-[#9CA3AF] mb-4">Lo que dicen nuestros clientes</p>
        <div className="space-y-4">
          {[
            { text: "Llegué sin cita, me hicieron el examen y en una hora ya tenía mis lentes. Excelente servicio.", author: "Laura M." },
            { text: "Los armazones Frida Kahlo me encantan. Calidad premium a buen precio.", author: "Alejandra R." },
            { text: "Tengo 3 años yendo y siempre es rápido y profesional. Los recomiendo al 100%.", author: "Miguel T." },
          ].map((r) => (
            <div key={r.author} className="bg-white rounded-xl p-5 text-left">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} viewBox="0 0 20 20" fill="#B5956E" className="w-4 h-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#374151] mb-1">&ldquo;{r.text}&rdquo;</p>
              <p className="text-xs text-[#9CA3AF]">{r.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
