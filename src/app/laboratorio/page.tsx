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
  "Lentes de transicion (fotocromaticos)",
  "Tratamiento antirreflex",
  "Filtro blue block",
  "Lentes de alto indice (delgados)",
  "Lentes de sol graduados",
  "Lentes de policarbonato",
  "Biselado y montaje de armazones",
];

export default function Laboratorio() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0057FF] font-semibold text-sm mb-3">
                Nuestro diferenciador
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-4">
                Laboratorio optico propio
              </h1>
              <p className="text-[#666666] text-base max-w-lg mb-8 leading-relaxed">
                No somos intermediarios. Fabricamos tus lentes aqui en Guadalajara, con control total de calidad y tiempos de entrega que nadie mas puede ofrecer.
              </p>
              <div className="flex items-center gap-8 text-[#1a1a1a]">
                <div>
                  <p className="text-2xl font-bold">&lt; 24h</p>
                  <p className="text-xs text-[#666666] mt-0.5">Entrega</p>
                </div>
                <div className="w-px h-10 bg-[#e0e0e0]" />
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs text-[#666666] mt-0.5">Calidad</p>
                </div>
                <div className="w-px h-10 bg-[#e0e0e0]" />
                <div>
                  <p className="text-2xl font-bold">+10</p>
                  <p className="text-xs text-[#666666] mt-0.5">Anos</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/hero-1.png"
                  alt="Laboratorio optico"
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
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-3">
              Como fabricamos tus lentes
            </h2>
            <p className="text-[#666666] max-w-xl">
              Un proceso controlado de principio a fin, sin intermediarios ni retrasos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Receta", desc: "Recibes tu graduacion con examen profesional o nos envias tu receta vigente." },
              { title: "Seleccion", desc: "Eliges armazon y tipo de lente. Te asesoramos segun tu estilo y necesidad." },
              { title: "Fabricacion", desc: "Cortamos, graduamos y tratamos tus lentes en nuestro laboratorio en Guadalajara." },
              { title: "Entrega", desc: "Verificamos calidad, montamos en tu armazon y te los entregamos listos." },
            ].map((s, i) => (
              <div key={s.title}>
                <div className="w-10 h-10 bg-[#0057FF] text-white rounded-md flex items-center justify-center mb-4 text-sm font-bold">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0057FF] font-semibold text-sm mb-3">
                Capacidades
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-8 leading-tight">
                Todo lo que fabricamos
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 bg-white p-4 border border-[#e0e0e0] rounded-md"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#0057FF] shrink-0">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-[#1a1a1a] font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
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
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-10">
            Nosotros vs. la competencia
          </h2>

          <div className="bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 text-sm font-semibold">
              <div className="p-4 text-[#666666]"></div>
              <div className="p-4 bg-[#0057FF]/10 text-[#0057FF] text-center">Fabrica de Lentes</div>
              <div className="p-4 text-[#666666] text-center">Cadenas grandes</div>
            </div>
            {[
              { feature: "Fabricacion", us: "Propia en GDL", them: "Envian a otro estado" },
              { feature: "Tiempo de entrega", us: "Mismo dia posible", them: "7-15 dias" },
              { feature: "Control de calidad", us: "Directo", them: "Por terceros" },
              { feature: "Precio", us: "Justo, sin sobreprecio", them: "Margen de cadena" },
              { feature: "Atencion", us: "Personal", them: "Rotacion de vendedores" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm border-t border-[#e0e0e0]">
                <div className="p-4 font-medium text-[#1a1a1a]">{row.feature}</div>
                <div className="p-4 text-center text-[#1a1a1a] bg-[#0057FF]/5">{row.us}</div>
                <div className="p-4 text-center text-[#666666]">{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#0057FF]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] mb-3">
            Solicita tu lente personalizado
          </h2>
          <p className="text-white/80 text-base mb-8">
            Fabricacion propia, calidad garantizada, entrega express.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20fabricados%20en%20su%20laboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-white text-[#0057FF] text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Cotizar ahora
          </a>
        </div>
      </section>
    </>
  );
}
