import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convenios Opticos para Empresas en Guadalajara | Fabrica de Lentes",
  description:
    "Convenios opticos corporativos en Guadalajara. Examen de la vista gratis, descuentos por volumen, servicio en instalaciones. Solicita tu convenio.",
  alternates: { canonical: "https://fabricadelentes.mx/empresas" },
};

const benefits = [
  { title: "Examen de la vista gratis", desc: "Para todos los empleados que participen en el convenio. Sin costo adicional." },
  { title: "Descuentos por volumen", desc: "Mientras m\u00e1s empleados participen, mejores precios para todos." },
  { title: "Servicio en instalaciones", desc: "Llevamos el servicio a tu empresa. Sin que tus empleados pierdan tiempo." },
  { title: "Facilidades de pago", desc: "Descuento v\u00eda n\u00f3mina o facilidades de pago seg\u00fan convenio." },
  { title: "Todas las marcas", desc: "Lentes graduados, de contacto y de sol de las mejores marcas." },
  { title: "Entrega r\u00e1pida", desc: "Fabricaci\u00f3n propia en Guadalajara = entrega en d\u00edas, no semanas." },
];

export default function Empresas() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-10 text-center">
          <p className="text-[12px] text-[#0057A8] tracking-[0.2em] uppercase font-medium mb-4">
            Canal Empresarial
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-[#111] font-normal leading-tight mb-5 max-w-3xl mx-auto">
            Lleva F&aacute;brica de Lentes
            <br />a Tu Empresa
          </h1>
          <p className="text-[#777] text-[15px] max-w-2xl mx-auto mb-4">
            M&aacute;s de 150 empleados atendidos en una sola empresa. Convenios corporativos con beneficios reales para tu equipo.
          </p>
          <p className="text-[12px] text-[#0057A8] font-medium tracking-[0.1em] uppercase mb-8">
            Experiencia probada con empresas en Guadalajara
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20un%20convenio%20empresarial%20para%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0057A8] text-white rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-[#003F7A] transition-colors"
          >
            Solicitar Convenio
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-[#111] font-normal mb-3">
            Beneficios Para Tu Empresa
          </h2>
          <p className="text-[#777] text-[14px] max-w-xl mb-10">
            Un beneficio real para tu equipo que no cuesta nada implementar.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#F2F2F2] rounded-lg p-6 hover:bg-[#EAEAEA] transition-all"
              >
                <h3 className="text-[14px] font-semibold text-[#111] uppercase tracking-[0.05em] mb-2">
                  {b.title}
                </h3>
                <p className="text-[13px] text-[#777] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-[#F4F4F4]">
        <div className="max-w-4xl mx-auto px-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-[#111] font-normal mb-10">
            C&oacute;mo Funciona?
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
                className="flex gap-5 items-start bg-white rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-full border border-[#0057A8] text-[#0057A8] flex items-center justify-center shrink-0 text-sm font-medium">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#111] uppercase tracking-[0.05em] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-[#777] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0057A8]">
        <div className="max-w-3xl mx-auto px-10 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-white font-normal mb-4">
            Interesado en un Convenio?
          </h2>
          <p className="text-white/70 text-[14px] max-w-lg mx-auto mb-8">
            Cu&eacute;ntanos sobre tu empresa y te enviamos una propuesta personalizada sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20soy%20de%20RR.HH.%20y%20me%20interesa%20un%20convenio%20%C3%B3ptico%20para%20nuestra%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white bg-transparent rounded-full px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="tel:+523314257226"
              className="border border-white/30 text-white/70 bg-transparent rounded-full px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors"
            >
              Llamar: 331 425 7226
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
