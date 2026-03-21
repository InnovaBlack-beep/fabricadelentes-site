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
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
            Canal empresarial
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-foreground leading-[1.05] mb-5 max-w-4xl mx-auto">
            Lleva Fabrica de Lentes{" "}
            <span className="text-gold italic">a tu empresa</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-4">
            Mas de 150 empleados atendidos en una sola empresa. Convenios corporativos con beneficios reales para tu equipo.
          </p>
          <p className="text-sm text-gold mb-10">
            Experiencia probada con empresas en Guadalajara
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20un%20convenio%20empresarial%20para%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-semibold tracking-wide uppercase hover:bg-dark transition-colors duration-300"
          >
            Solicitar convenio empresarial
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-4">
              Beneficios para <span className="text-gold italic">tu empresa</span>
            </h2>
            <p className="text-muted max-w-xl">
              Un beneficio real para tu equipo que no cuesta nada implementar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-off-white p-7 border border-border hover:border-gold/40 transition-all duration-300"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-14">
            Como <span className="text-gold italic">funciona?</span>
          </h2>

          <div className="space-y-5">
            {[
              { step: "1", title: "Contacta con nosotros", desc: "Escribenos con los datos de tu empresa: nombre, numero de empleados y ubicacion." },
              { step: "2", title: "Disenamos tu convenio", desc: "Te presentamos una propuesta con descuentos y servicios personalizados para tu empresa." },
              { step: "3", title: "Llevamos el servicio", desc: "Agendamos visitas a tus instalaciones para hacer examenes y toma de pedidos." },
              { step: "4", title: "Entrega en tu empresa", desc: "Fabricamos y entregamos los lentes directamente en tu oficina." },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-6 items-start bg-white p-7 border border-border"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="font-[family-name:var(--font-display)] text-lg text-gold">
                    {s.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-foreground mb-1">
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
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-4">
            Interesado en un <span className="text-gold italic">convenio?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto mb-10">
            Cuentanos sobre tu empresa y te enviamos una propuesta personalizada sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20soy%20de%20RR.HH.%20y%20me%20interesa%20un%20convenio%20%C3%B3ptico%20para%20nuestra%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm font-semibold tracking-wide uppercase hover:bg-off-white transition-colors duration-300"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="tel:+523314257226"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
            >
              Llamar: 331 425 7226
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
