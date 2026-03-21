import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Laboratorio Optico en Guadalajara | Fabricacion Propia | Fabrica de Lentes",
  description:
    "Laboratorio optico propio en Guadalajara. Fabricamos lentes graduados, progresivos, transicion y mas. Entrega express el mismo dia.",
  alternates: { canonical: "https://fabricadelentes.mx/laboratorio" },
};

const capabilities = [
  "Lentes monofocales",
  "Lentes bifocales",
  "Lentes progresivos",
  "Lentes de transición (fotocromáticos)",
  "Tratamiento antirreflex",
  "Filtro blue block",
  "Lentes de alto índice (delgados)",
  "Lentes de sol graduados",
  "Lentes de policarbonato",
  "Biselado y montaje de armazones",
];

export default function Laboratorio() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] text-[#2d1b69] tracking-[0.2em] uppercase font-medium mb-4">
                Nuestro Diferenciador
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-[#1a1a1a] font-normal leading-tight mb-5">
                Laboratorio
                <br />Óptico Propio
              </h1>
              <p className="text-[#666] text-[15px] max-w-lg mb-8 leading-relaxed">
                No somos intermediarios. Fabricamos tus lentes aquí en Guadalajara, con control total de calidad y tiempos de entrega que nadie más puede ofrecer.
              </p>
              <div className="flex items-center gap-8 text-[#1a1a1a]">
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.05em]">&lt; 24h</p>
                  <p className="text-[11px] text-[#666] mt-0.5 tracking-wide uppercase">Entrega</p>
                </div>
                <div className="w-px h-10 bg-[#e5e5e5]" />
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.05em]">100%</p>
                  <p className="text-[11px] text-[#666] mt-0.5 tracking-wide uppercase">Calidad</p>
                </div>
                <div className="w-px h-10 bg-[#e5e5e5]" />
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.05em]">+10</p>
                  <p className="text-[11px] text-[#666] mt-0.5 tracking-wide uppercase">Años</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/hero-1.png"
                  alt="Laboratorio óptico"
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-3">
            Cómo Fabricamos Tus Lentes
          </h2>
          <p className="text-[#666] text-[14px] max-w-xl mb-12">
            Un proceso controlado de principio a fin, sin intermediarios ni retrasos.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Receta", desc: "Recibes tu graduación con examen profesional o nos envías tu receta vigente." },
              { title: "Selección", desc: "Eliges armazón y tipo de lente. Te asesoramos según tu estilo y necesidad." },
              { title: "Fabricación", desc: "Cortamos, graduamos y tratamos tus lentes en nuestro laboratorio en Guadalajara." },
              { title: "Entrega", desc: "Verificamos calidad, montamos en tu armazón y te los entregamos listos." },
            ].map((s, i) => (
              <div key={s.title}>
                <div className="w-10 h-10 border border-[#2d1b69] text-[#2d1b69] flex items-center justify-center mb-4 text-sm font-medium">
                  {i + 1}
                </div>
                <h3 className="text-[13px] font-semibold text-[#1a1a1a] uppercase tracking-[0.05em] mb-2">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] text-[#2d1b69] tracking-[0.2em] uppercase font-medium mb-4">
                Capacidades
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.1em] text-[#1a1a1a] font-normal mb-8 leading-tight">
                Todo lo Que Fabricamos
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 bg-white p-4 border border-[#e5e5e5]"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#2d1b69] shrink-0">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[13px] text-[#1a1a1a] font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-10">
            Nosotros vs. la Competencia
          </h2>

          <div className="bg-[#f7f7f7] border border-[#e5e5e5] overflow-hidden">
            <div className="grid grid-cols-3 text-[13px] font-semibold">
              <div className="p-4 text-[#666]"></div>
              <div className="p-4 bg-[#2d1b69]/10 text-[#2d1b69] text-center uppercase tracking-[0.05em]">Fábrica de Lentes</div>
              <div className="p-4 text-[#666] text-center">Cadenas grandes</div>
            </div>
            {[
              { feature: "Fabricación", us: "Propia en GDL", them: "Envían a otro estado" },
              { feature: "Tiempo de entrega", us: "Mismo día posible", them: "7-15 días" },
              { feature: "Control de calidad", us: "Directo", them: "Por terceros" },
              { feature: "Precio", us: "Justo, sin sobreprecio", them: "Margen de cadena" },
              { feature: "Atención", us: "Personal", them: "Rotación de vendedores" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-[13px] border-t border-[#e5e5e5]">
                <div className="p-4 font-medium text-[#1a1a1a]">{row.feature}</div>
                <div className="p-4 text-center text-[#1a1a1a] bg-[#2d1b69]/5">{row.us}</div>
                <div className="p-4 text-center text-[#666]">{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#2d1b69]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-white font-normal mb-4">
            Solicita Tu Lente Personalizado
          </h2>
          <p className="text-white/70 text-[14px] mb-8">
            Fabricación propia, calidad garantizada, entrega express.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20fabricados%20en%20su%20laboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#2d1b69] transition-all"
          >
            Cotizar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
