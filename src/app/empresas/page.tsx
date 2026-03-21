import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convenios Ópticos para Empresas en Guadalajara | Fábrica de Lentes",
  description:
    "Convenios ópticos corporativos en Guadalajara. Examen de la vista gratis, descuentos por volumen, servicio en instalaciones. Solicita tu convenio.",
  alternates: { canonical: "https://fabricadelentes.mx/empresas" },
};

const benefits = [
  { title: "Examen de la vista gratis", desc: "Para todos los empleados que participen en el convenio. Sin costo adicional.", icon: "👁️" },
  { title: "Descuentos por volumen", desc: "Mientras más empleados participen, mejores precios para todos.", icon: "💰" },
  { title: "Servicio en instalaciones", desc: "Llevamos el servicio a tu empresa. Sin que tus empleados pierdan tiempo.", icon: "🏢" },
  { title: "Facilidades de pago", desc: "Descuento vía nómina o facilidades de pago según convenio.", icon: "💳" },
  { title: "Todas las marcas", desc: "Lentes graduados, de contacto y de sol de las mejores marcas.", icon: "✨" },
  { title: "Entrega rápida", desc: "Fabricación propia en Guadalajara = entrega en días, no semanas.", icon: "⚡" },
];

export default function Empresas() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy grain-overlay relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-amber/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-amber text-sm font-semibold tracking-wider uppercase">Canal empresarial</span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mt-3 mb-5">
            Lleva Fábrica de Lentes <span className="text-amber italic">a tu empresa</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
            Más de 150 empleados atendidos en una sola empresa. Convenios corporativos con beneficios reales para tu equipo.
          </p>
          <div className="inline-flex items-center gap-2 text-amber/80 text-sm mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Experiencia probada con empresas en Guadalajara
          </div>
          <div className="block">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20un%20convenio%20empresarial%20para%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
            >
              Solicitar convenio empresarial
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Beneficios para <span className="text-amber italic">tu empresa</span>
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
            Un beneficio real para tu equipo que no cuesta nada implementar.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-warm-gray hover:border-amber/30 hover:shadow-lg transition-all duration-300">
                <span className="text-3xl mb-4 block">{b.icon}</span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-navy mb-2">{b.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-warm-gray/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            ¿Cómo <span className="text-amber italic">funciona?</span>
          </h2>

          <div className="space-y-6">
            {[
              { step: "1", title: "Contacta con nosotros", desc: "Escríbenos con los datos de tu empresa: nombre, número de empleados y ubicación." },
              { step: "2", title: "Diseñamos tu convenio", desc: "Te presentamos una propuesta con descuentos y servicios personalizados para tu empresa." },
              { step: "3", title: "Llevamos el servicio", desc: "Agendamos visitas a tus instalaciones para hacer exámenes y toma de pedidos." },
              { step: "4", title: "Entrega en tu empresa", desc: "Fabricamos y entregamos los lentes directamente en tu oficina." },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-warm-gray">
                <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold text-amber">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{s.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form CTA */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-navy rounded-3xl p-10 md:p-16 text-center grain-overlay relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber/10 via-transparent to-amber/10" />
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Interesado en un <span className="text-amber italic">convenio?</span>
              </h2>
              <p className="text-white/50 max-w-lg mx-auto mb-8">
                Cuéntanos sobre tu empresa y te enviamos una propuesta personalizada sin compromiso.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20soy%20de%20RR.HH.%20y%20me%20interesa%20un%20convenio%20%C3%B3ptico%20para%20nuestra%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="tel:+523314257226"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  Llamar: 331 425 7226
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
