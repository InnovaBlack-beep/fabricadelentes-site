import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convenios Opticos para Empresas en Guadalajara | Fabrica de Lentes",
  description:
    "Convenios opticos corporativos en Guadalajara. Examen de la vista gratis, descuentos por volumen, servicio en instalaciones. Solicita tu convenio.",
  alternates: { canonical: "https://fabricadelentes.mx/empresas" },
};

const benefits = [
  { title: "Examen de la vista gratis", desc: "Para todos los empleados que participen en el convenio. Sin costo adicional." },
  { title: "Descuentos por volumen", desc: "Mientras mas empleados participen, mejores precios para todos." },
  { title: "Servicio en instalaciones", desc: "Llevamos el servicio a tu empresa. Sin que tus empleados pierdan tiempo." },
  { title: "Facilidades de pago", desc: "Descuento via nomina o facilidades de pago segun convenio." },
  { title: "Todas las marcas", desc: "Lentes graduados, de contacto y de sol de las mejores marcas." },
  { title: "Entrega rapida", desc: "Fabricacion propia en Guadalajara = entrega en dias, no semanas." },
];

export default function Empresas() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-[#0057FF] font-semibold text-sm mb-3">
            Canal empresarial
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-4 max-w-3xl mx-auto">
            Lleva Fabrica de Lentes a tu empresa
          </h1>
          <p className="text-[#666666] text-base max-w-2xl mx-auto mb-4">
            Mas de 150 empleados atendidos en una sola empresa. Convenios corporativos con beneficios reales para tu equipo.
          </p>
          <p className="text-sm text-[#0057FF] font-medium mb-8">
            Experiencia probada con empresas en Guadalajara
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20un%20convenio%20empresarial%20para%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
          >
            Solicitar convenio empresarial
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-3">
              Beneficios para tu empresa
            </h2>
            <p className="text-[#666666] max-w-xl">
              Un beneficio real para tu equipo que no cuesta nada implementar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#f5f5f5] p-6 border border-[#e0e0e0] rounded-lg hover:border-[#0057FF]/40 transition-all"
              >
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-10">
            Como funciona?
          </h2>

          <div className="space-y-4">
            {[
              { step: "1", title: "Contacta con nosotros", desc: "Escribenos con los datos de tu empresa: nombre, numero de empleados y ubicacion." },
              { step: "2", title: "Disenamos tu convenio", desc: "Te presentamos una propuesta con descuentos y servicios personalizados para tu empresa." },
              { step: "3", title: "Llevamos el servicio", desc: "Agendamos visitas a tus instalaciones para hacer examenes y toma de pedidos." },
              { step: "4", title: "Entrega en tu empresa", desc: "Fabricamos y entregamos los lentes directamente en tu oficina." },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-5 items-start bg-white p-6 border border-[#e0e0e0] rounded-lg"
              >
                <div className="w-10 h-10 bg-[#0057FF] text-white rounded-md flex items-center justify-center shrink-0 text-sm font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#0057FF]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] mb-3">
            Interesado en un convenio?
          </h2>
          <p className="text-white/80 text-base max-w-lg mx-auto mb-8">
            Cuentanos sobre tu empresa y te enviamos una propuesta personalizada sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20soy%20de%20RR.HH.%20y%20me%20interesa%20un%20convenio%20%C3%B3ptico%20para%20nuestra%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-white text-[#0057FF] text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="tel:+523314257226"
              className="inline-block px-8 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Llamar: 331 425 7226
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
