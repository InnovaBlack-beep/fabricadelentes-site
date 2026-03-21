import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Laboratorio \u00d3ptico en Guadalajara | Fabricaci\u00f3n Propia | F\u00e1brica de Lentes",
  description:
    "Laboratorio \u00f3ptico propio en Guadalajara. Fabricamos lentes graduados, progresivos, transici\u00f3n y m\u00e1s. Entrega express el mismo d\u00eda.",
  alternates: { canonical: "https://fabricadelentes.mx/laboratorio" },
};

const capabilities = [
  "Lentes monofocales",
  "Lentes bifocales",
  "Lentes progresivos",
  "Lentes de transici\u00f3n (fotocrom\u00e1ticos)",
  "Tratamiento antirreflex",
  "Filtro blue block",
  "Lentes de alto \u00edndice (delgados)",
  "Lentes de sol graduados",
  "Lentes de policarbonato",
  "Biselado y montaje de armazones",
];

export default function Laboratorio() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F0EBE3]">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-[10px] text-[#C8A040] tracking-[0.16em] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
              >
                Nuestro Diferenciador
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl text-[#111110] leading-tight mb-5"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
              >
                Laboratorio
                <br />&Oacute;ptico Propio
              </h1>
              <p className="text-[#6A5A4A] text-[13px] max-w-lg mb-8 leading-relaxed" style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
                No somos intermediarios. Fabricamos tus lentes aqu&iacute; en Guadalajara, con control total de calidad y tiempos de entrega que nadie m&aacute;s puede ofrecer.
              </p>
              <div className="flex items-center gap-8 text-[#111110]">
                <div>
                  <p className="text-2xl" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>&lt; 1h</p>
                  <p className="text-[11px] text-[#A09080] mt-0.5 tracking-wide uppercase" style={{ fontFamily: "var(--font-sans)" }}>Entrega</p>
                </div>
                <div className="w-px h-10 bg-[#E8E0D8]" />
                <div>
                  <p className="text-2xl" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>100%</p>
                  <p className="text-[11px] text-[#A09080] mt-0.5 tracking-wide uppercase" style={{ fontFamily: "var(--font-sans)" }}>Calidad</p>
                </div>
                <div className="w-px h-10 bg-[#E8E0D8]" />
                <div>
                  <p className="text-2xl" style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}>+10</p>
                  <p className="text-[11px] text-[#A09080] mt-0.5 tracking-wide uppercase" style={{ fontFamily: "var(--font-sans)" }}>A&ntilde;os</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
                <Image
                  src="/images/hero-1.png"
                  alt="Laboratorio \u00f3ptico"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto px-10">
          <h2
            className="text-2xl md:text-3xl text-[#111110] mb-3"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            C&oacute;mo fabricamos tus lentes
          </h2>
          <p className="text-[#6A5A4A] text-[13px] max-w-xl mb-12" style={{ fontFamily: "var(--font-sans)" }}>
            Un proceso controlado de principio a fin, sin intermediarios ni retrasos.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Receta", desc: "Recibes tu graduaci\u00f3n con examen profesional o nos env\u00edas tu receta vigente." },
              { title: "Selecci\u00f3n", desc: "Eliges armaz\u00f3n y tipo de lente. Te asesoramos seg\u00fan tu estilo y necesidad." },
              { title: "Fabricaci\u00f3n", desc: "Cortamos, graduamos y tratamos tus lentes en nuestro laboratorio en Guadalajara." },
              { title: "Entrega", desc: "Verificamos calidad, montamos en tu armaz\u00f3n y te los entregamos listos." },
            ].map((s, i) => (
              <div key={s.title}>
                <div className="w-10 h-10 rounded-full border border-[#C8A040] text-[#C8A040] flex items-center justify-center mb-4 text-sm font-medium">
                  {i + 1}
                </div>
                <h3
                  className="text-[13px] font-semibold text-[#111110] uppercase tracking-[0.05em] mb-2"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                >
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#6A5A4A] leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20 bg-[#F0EBE3]">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-[10px] text-[#C8A040] tracking-[0.16em] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
              >
                Capacidades
              </p>
              <h2
                className="text-2xl md:text-3xl text-[#111110] mb-8 leading-tight"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                Todo lo que fabricamos
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 bg-[#FAF8F5] rounded-[10px] p-4"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C8A040" strokeWidth={1.5} className="w-5 h-5 shrink-0">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[13px] text-[#111110] font-medium" style={{ fontFamily: "var(--font-sans)" }}>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
              <Image
                src="/images/hero-3.png"
                alt="Lentes fabricados"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-10">
          <h2
            className="text-2xl md:text-3xl text-[#111110] mb-10"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            Nosotros vs. la competencia
          </h2>

          <div className="bg-[#F0EBE3] rounded-[10px] overflow-hidden">
            <div className="grid grid-cols-3 text-[13px] font-semibold">
              <div className="p-4 text-[#A09080]"></div>
              <div className="p-4 bg-[#C8A040]/10 text-[#C8A040] text-center uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-sans)" }}>F&aacute;brica de Lentes</div>
              <div className="p-4 text-[#A09080] text-center" style={{ fontFamily: "var(--font-sans)" }}>Cadenas grandes</div>
            </div>
            {[
              { feature: "Fabricaci\u00f3n", us: "Propia en GDL", them: "Env\u00edan a otro estado" },
              { feature: "Tiempo de entrega", us: "1 hora posible", them: "7-15 d\u00edas" },
              { feature: "Control de calidad", us: "Directo", them: "Por terceros" },
              { feature: "Precio", us: "Justo, sin sobreprecio", them: "Margen de cadena" },
              { feature: "Atenci\u00f3n", us: "Personal", them: "Rotaci\u00f3n de vendedores" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-[13px] border-t border-[#E8E0D8]">
                <div className="p-4 font-medium text-[#111110]" style={{ fontFamily: "var(--font-sans)" }}>{row.feature}</div>
                <div className="p-4 text-center text-[#111110] bg-[#C8A040]/5" style={{ fontFamily: "var(--font-sans)" }}>{row.us}</div>
                <div className="p-4 text-center text-[#A09080]" style={{ fontFamily: "var(--font-sans)" }}>{row.them}</div>
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
            Solicita tu lente personalizado
          </h2>
          <p className="text-[rgba(245,240,234,0.60)] text-[13px] mb-8" style={{ fontFamily: "var(--font-sans)" }}>
            Fabricaci&oacute;n propia, calidad garantizada, entrega express.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20fabricados%20en%20su%20laboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C8A040] text-[#C8A040] bg-transparent rounded-full px-8 py-3 text-[11px] uppercase tracking-[0.07em] font-medium hover:bg-[#C8A040] hover:text-[#1A1000] transition-colors"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
          >
            Cotizar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
