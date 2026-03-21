"use client";

import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name}.${form.service ? ` Me interesa: ${form.service}.` : ""}${form.message ? ` ${form.message}` : ""} Mi teléfono: ${form.phone}`;
    window.open(
      `https://wa.me/523314257226?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-8 md:pt-20 md:pb-12 bg-[#F0EBE3]">
        <div className="max-w-[1280px] mx-auto px-10 text-center">
          <h1
            className="text-[36px] md:text-[48px] text-[#111110] mb-3"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
          >
            Contáctanos
          </h1>
          <p
            className="text-[13px] text-[#A09080]"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            Zona Minerva · Guadalajara · Lun–Sáb 10–20h
          </p>
        </div>
      </section>

      {/* Content: Form + Info */}
      <section className="py-14 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — Form */}
            <div className="bg-[#F0EBE3] rounded-[10px] p-8 md:p-10">
              <h2
                className="text-[24px] text-[#111110] mb-6"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                Agenda tu examen
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-semibold text-[#6A5A4A] mb-1.5 uppercase tracking-[0.10em]"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3.5 border border-[#C8C0B8] rounded-[10px] bg-[#FAF8F5] text-[#111110] text-[14px] placeholder:text-[#A09080] focus:outline-none focus:border-[#C8A040] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[10px] font-semibold text-[#6A5A4A] mb-1.5 uppercase tracking-[0.10em]"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                  >
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-5 py-3.5 border border-[#C8C0B8] rounded-[10px] bg-[#FAF8F5] text-[#111110] text-[14px] placeholder:text-[#A09080] focus:outline-none focus:border-[#C8A040] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                    placeholder="33 1234 5678"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-[10px] font-semibold text-[#6A5A4A] mb-1.5 uppercase tracking-[0.10em]"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                  >
                    Tipo de lente
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-5 py-3.5 border border-[#C8C0B8] rounded-[10px] bg-[#FAF8F5] text-[#111110] text-[14px] focus:outline-none focus:border-[#C8A040] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Lentes graduados">Lentes graduados</option>
                    <option value="Lentes de contacto">Lentes de contacto</option>
                    <option value="Lentes de sol">Lentes de sol</option>
                    <option value="Examen de la vista">Examen de la vista</option>
                    <option value="Convenio empresarial">Convenio empresarial</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-semibold text-[#6A5A4A] mb-1.5 uppercase tracking-[0.10em]"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 border border-[#C8C0B8] rounded-[10px] bg-[#FAF8F5] text-[#111110] text-[14px] placeholder:text-[#A09080] focus:outline-none focus:border-[#C8A040] transition-colors resize-none"
                    style={{ fontFamily: "var(--font-sans)" }}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#111110] text-[#F5F0EA] rounded-full px-6 py-3.5 text-[11px] uppercase tracking-[0.08em] font-bold hover:bg-[#C8A040] hover:text-[#1A1000] transition-colors"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </div>

            {/* Right — Info */}
            <div className="space-y-6">
              {/* Address & contact */}
              <div className="bg-[#F0EBE3] rounded-[10px] p-7">
                <h3
                  className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#6A5A4A] mb-5"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                >
                  Información
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C8A040" strokeWidth={1.5} className="w-5 h-5 mt-0.5 shrink-0">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="text-[13px] text-[#111110] font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                        Zona Minerva, Guadalajara, Jalisco
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C8A040" strokeWidth={1.5} className="w-5 h-5 mt-0.5 shrink-0">
                      <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[13px] text-[#111110] font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                      Lunes a Sábado · 10:00–20:00
                    </p>
                  </div>
                  <a
                    href="tel:+523314257226"
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C8A040" strokeWidth={1.5} className="w-5 h-5 mt-0.5 shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <p className="text-[13px] text-[#111110] font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                      33 1425 7226
                    </p>
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20mi%20examen%20de%20la%20vista%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1A1818] rounded-[10px] p-7 hover:bg-[#111110] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="#FAF8F5" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[14px] font-semibold text-[#F5F0EA] mb-0.5"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                    >
                      ¿Prefieres WhatsApp?
                    </p>
                    <p className="text-[12px] text-[rgba(245,240,234,0.55)]" style={{ fontFamily: "var(--font-sans)" }}>
                      Respondemos en minutos · Toca para abrir
                    </p>
                  </div>
                </div>
              </a>

              {/* Google badge */}
              <div className="bg-[#F0EBE3] rounded-[10px] p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4].map((s) => (
                      <svg key={s} viewBox="0 0 20 20" fill="#C8A040" className="w-4 h-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg viewBox="0 0 20 20" className="w-4 h-4">
                      <defs>
                        <linearGradient id="half">
                          <stop offset="50%" stopColor="#C8A040" />
                          <stop offset="50%" stopColor="#D8D0C8" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span
                    className="text-[13px] text-[#111110] font-medium"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    4 estrellas en Google Maps
                  </span>
                </div>
                <p className="text-[12px] text-[#A09080]" style={{ fontFamily: "var(--font-sans)" }}>
                  Reseñas verificadas de nuestros clientes
                </p>
              </div>

              {/* Map */}
              <div className="rounded-[10px] overflow-hidden border border-[#E8E0D8]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14930.927851384893!2d-103.39876!3d20.67149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae0369aeee39%3A0x20c5eeb24a87a4d0!2sGlorieta%20La%20Minerva!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Fábrica de Lentes — Zona Minerva, Guadalajara"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
