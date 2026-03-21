import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convenios Opticos para Empresas en Guadalajara | Fabrica de Lentes",
  description:
    "Convenios opticos corporativos en Guadalajara. Examen de la vista gratis, descuentos por volumen, servicio en instalaciones. Solicita tu convenio.",
  alternates: { canonical: "https://fabricadelentes.mx/empresas" },
};

const benefits = [
  { title: "Examen de la vista gratis", desc: "Para todos los empleados que participen en el convenio. Sin costo adicional." },
  { title: "Descuentos por volumen", desc: "Mientras más empleados participen, mejores precios para todos." },
  { title: "Servicio en instalaciones", desc: "Llevamos el servicio a tu empresa. Sin que tus empleados pierdan tiempo." },
  { title: "Facilidades de pago", desc: "Descuento vía nómina o facilidades de pago según convenio." },
  { title: "Todas las marcas", desc: "Lentes graduados, de contacto y de sol de las mejores marcas." },
  { title: "Entrega rápida", desc: "Fabricación propia en Guadalajara = entrega en días, no semanas." },
];

export default function Empresas() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <p className="text-[12px] text-[#004AAD] tracking-[0.2em] uppercase font-medium mb-4">
            Canal Empresarial
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-[#1a1a1a] font-normal leading-tight mb-5 max-w-3xl mx-auto">
            Lleva Fábrica de Lentes
            <br />a Tu Empresa
          </h1>
          <p className="text-[#666] text-[15px] max-w-2xl mx-auto mb-4">
            Más de 150 empleados atendidos en una sola empresa. Convenios corporativos con beneficios reales para tu equipo.
          </p>
          <p className="text-[12px] text-[#004AAD] font-medium tracking-[0.1em] uppercase mb-8">
            Experiencia probada con empresas en Guadalajara
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20un%20convenio%20empresarial%20para%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#004AAD] text-white text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-[#003580] transition-all"
          >
            Solicitar Convenio
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-3">
            Beneficios Para Tu Empresa
          </h2>
          <p className="text-[#666] text-[14px] max-w-xl mb-10">
            Un beneficio real para tu equipo que no cuesta nada implementar.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#f7f7f7] p-6 border border-[#e5e5e5] hover:border-[#004AAD]/30 transition-all"
              >
                <h3 className="text-[14px] font-semibold text-[#1a1a1a] uppercase tracking-[0.05em] mb-2">
                  {b.title}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-10">
            Cómo Funciona?
          </h2>

          <div className="space-y-4">
            {[
              { step: "1", title: "Contacta con nosotros", desc: "Escríbenos con los datos de tu empresa: nombre, número de empleados y ubicación." },
              { step: "2", title: "Diseñamos tu convenio", desc: "Te presentamos una propuesta con descuentos y servicios personalizados para tu empresa." },
              { step: "3", title: "Llevamos el servicio", desc: "Agendamos visitas a tus instalaciones para hacer exámenes y toma de pedidos." },
              { step: "4", title: "Entrega en tu empresa", desc: "Fabricamos y entregamos los lentes directamente en tu oficina." },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-5 items-start bg-white p-6 border border-[#e5e5e5]"
              >
                <div className="w-10 h-10 border border-[#004AAD] text-[#004AAD] flex items-center justify-center shrink-0 text-sm font-medium">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1a1a1a] uppercase tracking-[0.05em] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-[#666] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#004AAD]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-white font-normal mb-4">
            Interesado en un Convenio?
          </h2>
          <p className="text-white/70 text-[14px] max-w-lg mx-auto mb-8">
            Cuéntanos sobre tu empresa y te enviamos una propuesta personalizada sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20soy%20de%20RR.HH.%20y%20me%20interesa%20un%20convenio%20%C3%B3ptico%20para%20nuestra%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-white text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#004AAD] transition-all"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="tel:+523314257226"
              className="inline-block px-8 py-3 border border-white/30 text-white/70 text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-all"
            >
              Llamar: 331 425 7226
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
