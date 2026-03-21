import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Laboratorio Óptico en GDL | Fábrica de Lentes",
  description:
    "Laboratorio óptico propio en Guadalajara. Fabricamos lentes graduados, progresivos, transición y más. Entrega express el mismo día. Sin intermediarios.",
  alternates: { canonical: "https://fabricadelentes.mx/laboratorio" },
  openGraph: {
    title: "Laboratorio Óptico | Fábrica de Lentes · GDL",
    description: "Laboratorio óptico propio en Guadalajara. Lentes graduados, progresivos, transición. Entrega express.",
    url: "https://fabricadelentes.mx/laboratorio",
    images: [{ url: "https://fabricadelentes.mx/images/hero-3.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
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
              <p className="text-xs text-[#C8A040] tracking-[0.16em] uppercase mb-4 font-semibold">
                Nuestro Diferenciador
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl text-[#111110] leading-tight mb-5 font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Laboratorio
                <br />&Oacute;ptico Propio
              </h1>
              <p className="text-[#6A5A4A] text-sm max-w-lg mb-8 leading-relaxed">
                No somos intermediarios. Fabricamos tus lentes aqu&iacute; en Guadalajara, con control total de calidad y tiempos de entrega que nadie m&aacute;s puede ofrecer.
              </p>
              <div className="flex items-center gap-8 text-[#111110]">
                <div>
                  <p className="text-2xl font-semibold" style={{ fontFamily: "var(--font-serif)" }}>&lt; 1h</p>
                  <p className="text-xs text-[#A09080] mt-0.5 tracking-wide uppercase">Entrega</p>
                </div>
                <div className="w-px h-10 bg-[#E8E0D8]" />
                <div>
                  <p className="text-2xl font-semibold" style={{ fontFamily: "var(--font-serif)" }}>100%</p>
                  <p className="text-xs text-[#A09080] mt-0.5 tracking-wide uppercase">Calidad</p>
                </div>
                <div className="w-px h-10 bg-[#E8E0D8]" />
                <div>
                  <p className="text-2xl font-semibold" style={{ fontFamily: "var(--font-serif)" }}>+10</p>
                  <p className="text-xs text-[#A09080] mt-0.5 tracking-wide uppercase">A&ntilde;os</p>
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
            className="text-2xl md:text-3xl text-[#111110] mb-3 font-semibold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            C&oacute;mo fabricamos tus lentes
          </h2>
          <p className="text-[#6A5A4A] text-sm max-w-xl mb-12">
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
                <h3 className="text-sm font-semibold text-[#111110] uppercase tracking-[0.05em] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#6A5A4A] leading-relaxed">{s.desc}</p>
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
              <p className="text-xs text-[#C8A040] tracking-[0.16em] uppercase mb-4 font-semibold">
                Capacidades
              </p>
              <h2
                className="text-2xl md:text-3xl text-[#111110] mb-8 leading-tight font-semibold"
                style={{ fontFamily: "var(--font-serif)" }}
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
                    <span className="text-sm text-[#111110] font-medium">{cap}</span>
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#1A1818]">
        <div className="max-w-3xl mx-auto px-10 text-center">
          <h2
            className="text-2xl md:text-3xl text-[#F5F0EA] mb-4 font-semibold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Solicita tu lente personalizado
          </h2>
          <p className="text-[rgba(245,240,234,0.60)] text-sm mb-8">
            Fabricaci&oacute;n propia, calidad garantizada, entrega express.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20fabricados%20en%20su%20laboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C8A040] text-[#C8A040] bg-transparent rounded-full px-8 py-3 text-xs uppercase tracking-[0.07em] font-medium hover:bg-[#C8A040] hover:text-[#1A1000] transition-colors"
          >
            Cotizar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
