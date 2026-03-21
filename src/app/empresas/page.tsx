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
    images: [{ url: "https://fabricadelentes.mx/images/hero-1.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const benefits = [
  { title: "Examen de la vista gratis", desc: "Para todos los empleados que participen en el convenio. Sin costo adicional." },
  { title: "Descuentos por volumen", desc: "Mientras m\u00e1s empleados participen, mejores precios para todos." },
  { title: "Servicio en instalaciones", desc: "Llevamos el servicio a tu empresa. Sin que tus empleados pierdan tiempo." },
  { title: "Facilidades de pago", desc: "Descuento v\u00eda n\u00f3mina o facilidades de pago seg\u00fan convenio." },
  { title: "Todas las marcas", desc: "Lentes graduados, de contacto y de sol de las mejores marcas." },
  { title: "Entrega r\u00e1pida", desc: "Fabricaci\u00f3n propia en Guadalajara = entrega en horas, no semanas." },
];

export default function Empresas() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F0EBE3]">
        <div className="max-w-[1280px] mx-auto px-10 text-center">
          <p
            className="text-[10px] text-[#C8A040] tracking-[0.16em] uppercase mb-4"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            Canal Empresarial
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-[#111110] leading-tight mb-5 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
          >
            Lleva F&aacute;brica de Lentes
            <br />a tu empresa
          </h1>
          <p className="text-[#6A5A4A] text-[13px] max-w-2xl mx-auto mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            M&aacute;s de 150 empleados atendidos en una sola empresa. Convenios corporativos con beneficios reales para tu equipo.
          </p>
          <p
            className="text-[10px] text-[#C8A040] tracking-[0.16em] uppercase mb-8"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            Experiencia probada con empresas en Guadalajara
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20un%20convenio%20empresarial%20para%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#111110] text-[#F5F0EA] rounded-full px-8 py-3.5 text-[11px] uppercase tracking-[0.07em] font-medium hover:bg-[#C8A040] hover:text-[#1A1000] transition-colors"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
          >
            Solicitar Convenio
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto px-10">
          <h2
            className="text-2xl md:text-3xl text-[#111110] mb-3"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            Beneficios para tu empresa
          </h2>
          <p className="text-[#6A5A4A] text-[13px] max-w-xl mb-10" style={{ fontFamily: "var(--font-sans)" }}>
            Un beneficio real para tu equipo que no cuesta nada implementar.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#F0EBE3] rounded-[10px] p-6 hover:bg-[#E8E0D8] transition-all"
              >
                <h3
                  className="text-[13px] font-semibold text-[#111110] uppercase tracking-[0.05em] mb-2"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                >
                  {b.title}
                </h3>
                <p className="text-[13px] text-[#6A5A4A] leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-[#F0EBE3]">
        <div className="max-w-4xl mx-auto px-10">
          <h2
            className="text-2xl md:text-3xl text-[#111110] mb-10"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            &iquest;C&oacute;mo funciona?
          </h2>

          <div className="space-y-4">
            {[
              { step: "1", title: "Contacta con nosotros", desc: "Escr\u00edbenos con los datos de tu empresa: nombre, n\u00famero de empleados y ubicaci\u00f3n." },
              { step: "2", title: "Dise\u00f1amos tu convenio", desc: "Te presentamos una propuesta con descuentos y servicios personalizados para tu empresa." },
              { step: "3", title: "Llevamos el servicio", desc: "Agendamos visitas a tus instalaciones para hacer ex\u00e1menes y toma de pedidos." },
              { step: "4", title: "Entrega en tu empresa", desc: "Fabricamos y entregamos los lentes directamente en tu oficina." },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-5 items-start bg-[#FAF8F5] rounded-[10px] p-6"
              >
                <div className="w-10 h-10 rounded-full border border-[#C8A040] text-[#C8A040] flex items-center justify-center shrink-0 text-sm font-medium">
                  {s.step}
                </div>
                <div>
                  <h3
                    className="text-[13px] font-semibold text-[#111110] uppercase tracking-[0.05em] mb-1"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-[#6A5A4A] leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#1A1818]">
        <div className="max-w-3xl mx-auto px-10 text-center">
          <h2
            className="text-2xl md:text-3xl text-[#F5F0EA] mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            &iquest;Interesado en un convenio?
          </h2>
          <p className="text-[rgba(245,240,234,0.60)] text-[13px] max-w-lg mx-auto mb-8" style={{ fontFamily: "var(--font-sans)" }}>
            Cu&eacute;ntanos sobre tu empresa y te enviamos una propuesta personalizada sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20soy%20de%20RR.HH.%20y%20me%20interesa%20un%20convenio%20%C3%B3ptico%20para%20nuestra%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#C8A040] text-[#C8A040] bg-transparent rounded-full px-8 py-3 text-[11px] uppercase tracking-[0.07em] font-medium hover:bg-[#C8A040] hover:text-[#1A1000] transition-colors"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              Escribir por WhatsApp
            </a>
            <a
              href="tel:+523314257226"
              className="border border-[rgba(245,240,234,0.20)] text-[rgba(245,240,234,0.60)] bg-transparent rounded-full px-8 py-3 text-[11px] uppercase tracking-[0.07em] font-medium hover:border-[rgba(245,240,234,0.40)] hover:text-[#F5F0EA] transition-colors"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              Llamar: 33 1425 7226
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
