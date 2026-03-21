import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Fabrica de Lentes | Optica en Guadalajara",
  description:
    "Contactanos por WhatsApp, telefono o visitanos en Guadalajara. Cotiza tus lentes, agenda un examen de la vista o solicita informacion.",
  alternates: { canonical: "https://fabricadelentes.mx/contacto" },
};

export default function Contacto() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-[-0.02em] mb-2">
            Contacto
          </h1>
          <p className="text-[#666666] text-base max-w-xl">
            Estamos para ayudarte. Escribenos, llamanos o visitanos en nuestra optica.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {/* WhatsApp */}
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20necesito%20informacion%20sobre%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-7 border border-[#e0e0e0] rounded-lg hover:border-green-500/40 transition-all text-center"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
                WhatsApp
              </h3>
              <p className="text-[#666666] text-sm mb-2">Respuesta en minutos</p>
              <span className="text-green-600 font-semibold text-sm">331 425 7226</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+523314257226"
              className="group bg-white p-7 border border-[#e0e0e0] rounded-lg hover:border-[#0057FF]/40 transition-all text-center"
            >
              <div className="w-14 h-14 bg-[#0057FF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0057FF]">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
                Telefono
              </h3>
              <p className="text-[#666666] text-sm mb-2">Lun - Sab: 10:00 - 19:00</p>
              <span className="text-[#0057FF] font-semibold text-sm">331 425 7226</span>
            </a>

            {/* Visit */}
            <div className="bg-white p-7 border border-[#e0e0e0] rounded-lg text-center">
              <div className="w-14 h-14 bg-[#f5f5f5] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#1a1a1a]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
                Visitanos
              </h3>
              <p className="text-[#666666] text-sm mb-2">Guadalajara, Jalisco, Mexico</p>
              <span className="text-[#1a1a1a] font-semibold text-sm">Lun - Sab: 10:00 - 19:00</span>
            </div>
          </div>

          {/* Form + info */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-[#f5f5f5] p-8 border border-[#e0e0e0] rounded-lg">
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-6">
                Envanos un mensaje
              </h2>
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[#e0e0e0] rounded-md bg-white text-[#1a1a1a] placeholder:text-[#666666]/50 focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-[#0057FF]/30 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-[#e0e0e0] rounded-md bg-white text-[#1a1a1a] placeholder:text-[#666666]/50 focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-[#0057FF]/30 transition-colors"
                    placeholder="33 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    Que necesitas?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-[#e0e0e0] rounded-md bg-white text-[#1a1a1a] focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-[#0057FF]/30 transition-colors"
                  >
                    <option value="">Selecciona una opcion</option>
                    <option value="graduados">Lentes graduados</option>
                    <option value="contacto">Lentes de contacto</option>
                    <option value="sol">Lentes de sol</option>
                    <option value="examen">Examen de la vista</option>
                    <option value="empresas">Convenio empresarial</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-[#e0e0e0] rounded-md bg-white text-[#1a1a1a] placeholder:text-[#666666]/50 focus:outline-none focus:border-[#0057FF] focus:ring-1 focus:ring-[#0057FF]/30 transition-colors resize-none"
                    placeholder="Cuentanos como podemos ayudarte..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#0057FF] text-white font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Social + hours */}
            <div className="space-y-5">
              <div className="bg-[#f5f5f5] p-7 border border-[#e0e0e0] rounded-lg">
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-4">
                  Horario de atencion
                </h3>
                <div className="space-y-3">
                  {[
                    { day: "Lunes - Viernes", hours: "10:00 - 19:00" },
                    { day: "Sabado", hours: "10:00 - 15:00" },
                    { day: "Domingo", hours: "Cerrado" },
                  ].map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between py-2.5 border-b border-[#e0e0e0] last:border-0"
                    >
                      <span className="text-[#1a1a1a] font-medium text-sm">{h.day}</span>
                      <span className="text-[#666666] text-sm">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f5f5f5] p-7 border border-[#e0e0e0] rounded-lg">
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-4">
                  Siguenos
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/fabricadelentesmex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-white transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1a1a1a] text-sm">Instagram</p>
                      <p className="text-xs text-[#666666]">@fabricadelentesmex</p>
                    </div>
                  </a>
                  <a
                    href="https://tiktok.com/@fabricadelentes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-white transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#1a1a1a] rounded-md flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.13a8.16 8.16 0 004.77 1.53v-3.44a4.85 4.85 0 01-.81-.07 4.83 4.83 0 01-.38-3.88z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1a1a1a] text-sm">TikTok</p>
                      <p className="text-xs text-[#666666]">@fabricadelentes</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#0057FF]/5 p-7 border border-[#0057FF]/20 rounded-lg">
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Prefieres WhatsApp?</h3>
                <p className="text-sm text-[#666666] mb-4">
                  Es la forma mas rapida de contactarnos. Respondemos en minutos.
                </p>
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20necesito%20informacion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
                >
                  Abrir WhatsApp &rarr;
                </a>
              </div>

              {/* Testimonials on contacto page */}
              <div className="bg-[#f5f5f5] p-7 border border-[#e0e0e0] rounded-lg">
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-4">
                  Lo que dicen nuestros clientes
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Maria Garcia", text: "Llegue por urgencia porque se me rompieron mis lentes y me los hicieron el mismo dia. Excelente servicio." },
                    { name: "Roberto Medina", text: "Llevamos el convenio de la empresa aqui. Mas de 150 empleados atendidos y todos contentos." },
                    { name: "Ana Luisa Torres", text: "Mis lentes de contacto siempre los pido aqui. Tienen todas las marcas y buen precio." },
                  ].map((t, i) => (
                    <div key={i} className="border-b border-[#e0e0e0] last:border-0 pb-3 last:pb-0">
                      <p className="text-sm text-[#333333] leading-relaxed mb-1">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <p className="text-xs font-semibold text-[#666666]">{t.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
