import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convenios Ópticos Empresariales | Fábrica de Lentes",
  description:
    "Convenios ópticos corporativos en Guadalajara. Examen de la vista gratis, descuentos por volumen, servicio en instalaciones. Solicita tu convenio.",
  alternates: { canonical: "https://fabricadelentes.mx/empresas" },
  openGraph: {
    title: "Convenios Empresariales | Fábrica de Lentes · GDL",
    description: "Convenios ópticos corporativos. Examen gratis, descuentos por volumen, servicio en instalaciones.",
    url: "https://fabricadelentes.mx/empresas",
    images: [{ url: "https://fabricadelentes.mx/images/hero-1.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const benefits = [
  { title: "Examen de la vista gratis", desc: "Para todos los empleados que participen en el convenio. Sin costo adicional." },
  { title: "Descuentos por volumen", desc: "Mientras más empleados participen, mejores precios para todos." },
  { title: "Servicio en instalaciones", desc: "Llevamos el servicio a tu empresa. Sin que tus empleados pierdan tiempo." },
  { title: "Facilidades de pago", desc: "Descuento vía nómina o facilidades de pago según convenio." },
  { title: "Todas las marcas", desc: "Lentes graduados, de contacto y de sol de las mejores marcas." },
  { title: "Entrega rápida", desc: "Fabricación propia en Guadalajara = entrega en horas, no semanas." },
];

export default function Empresas() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-10 text-center">
          <p className="text-xs text-muted tracking-[0.16em] uppercase mb-4 font-semibold">
            Canal Empresarial
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-fg leading-tight mb-5 max-w-3xl mx-auto font-bold">
            Lleva Fábrica de Lentes
            <br />a tu empresa
          </h1>
          <p className="text-muted text-sm max-w-2xl mx-auto mb-4">
            Más de 150 empleados atendidos en una sola empresa. Convenios corporativos con beneficios reales para tu equipo.
          </p>
          <p className="text-xs text-muted tracking-[0.16em] uppercase mb-8 font-semibold">
            Experiencia probada con empresas en Guadalajara
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20un%20convenio%20empresarial%20para%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 px-8 rounded-full bg-fg text-white text-xs uppercase tracking-widest font-semibold hover:bg-fg/85 transition-colors"
          >
            Solicitar Convenio
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-10">
          <h2 className="text-2xl md:text-3xl text-fg mb-3 font-semibold">
            Beneficios para tu empresa
          </h2>
          <p className="text-muted text-sm max-w-xl mb-10">
            Un beneficio real para tu equipo que no cuesta nada implementar.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-surface rounded-lg p-6 hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-semibold text-fg uppercase tracking-[0.05em] mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-10">
          <h2 className="text-2xl md:text-3xl text-fg mb-10 font-semibold">
            ¿Cómo funciona?
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
                className="flex gap-5 items-start bg-white rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-full border border-fg text-fg flex items-center justify-center shrink-0 text-sm font-medium">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-fg uppercase tracking-[0.05em] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-10 text-center">
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-semibold">
            ¿Interesado en un convenio?
          </h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
            Cuéntanos sobre tu empresa y te enviamos una propuesta personalizada sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20soy%20de%20RR.HH.%20y%20me%20interesa%20un%20convenio%20%C3%B3ptico%20para%20nuestra%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-12 px-8 rounded-full bg-accent text-fg text-xs uppercase tracking-widest font-semibold hover:bg-accent/85 transition-colors"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="tel:+523314257226"
              className="inline-flex items-center h-12 px-8 rounded-full border border-white/20 text-white/60 text-xs uppercase tracking-widest font-medium hover:border-white/40 hover:text-white transition-colors"
            >
              Llamar: 33 1425 7226
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
