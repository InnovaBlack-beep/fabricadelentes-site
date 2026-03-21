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
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] text-[#0057A8] tracking-[0.2em] uppercase font-medium mb-4">
                Nuestro Diferenciador
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-[#111] font-normal leading-tight mb-5">
                Laboratorio
                <br />&Oacute;ptico Propio
              </h1>
              <p className="text-[#777] text-[15px] max-w-lg mb-8 leading-relaxed">
                No somos intermediarios. Fabricamos tus lentes aqu&iacute; en Guadalajara, con control total de calidad y tiempos de entrega que nadie m&aacute;s puede ofrecer.
              </p>
              <div className="flex items-center gap-8 text-[#111]">
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.05em]">&lt; 24h</p>
                  <p className="text-[11px] text-[#777] mt-0.5 tracking-wide uppercase">Entrega</p>
                </div>
                <div className="w-px h-10 bg-[#ddd]" />
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.05em]">100%</p>
                  <p className="text-[11px] text-[#777] mt-0.5 tracking-wide uppercase">Calidad</p>
                </div>
                <div className="w-px h-10 bg-[#ddd]" />
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.05em]">+10</p>
                  <p className="text-[11px] text-[#777] mt-0.5 tracking-wide uppercase">A&ntilde;os</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-[#111] font-normal mb-3">
            C&oacute;mo Fabricamos Tus Lentes
          </h2>
          <p className="text-[#777] text-[14px] max-w-xl mb-12">
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
                <div className="w-10 h-10 rounded-full border border-[#0057A8] text-[#0057A8] flex items-center justify-center mb-4 text-sm font-medium">
                  {i + 1}
                </div>
                <h3 className="text-[13px] font-semibold text-[#111] uppercase tracking-[0.05em] mb-2">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#777] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20 bg-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] text-[#0057A8] tracking-[0.2em] uppercase font-medium mb-4">
                Capacidades
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.1em] text-[#111] font-normal mb-8 leading-tight">
                Todo lo Que Fabricamos
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 bg-white rounded-lg p-4"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#0057A8] shrink-0">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[13px] text-[#111] font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
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
        <div className="max-w-4xl mx-auto px-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-[#111] font-normal mb-10">
            Nosotros vs. la Competencia
          </h2>

          <div className="bg-[#F2F2F2] rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 text-[13px] font-semibold">
              <div className="p-4 text-[#777]"></div>
              <div className="p-4 bg-[#0057A8]/10 text-[#0057A8] text-center uppercase tracking-[0.05em]">F&aacute;brica de Lentes</div>
              <div className="p-4 text-[#777] text-center">Cadenas grandes</div>
            </div>
            {[
              { feature: "Fabricaci\u00f3n", us: "Propia en GDL", them: "Env\u00edan a otro estado" },
              { feature: "Tiempo de entrega", us: "Mismo d\u00eda posible", them: "7-15 d\u00edas" },
              { feature: "Control de calidad", us: "Directo", them: "Por terceros" },
              { feature: "Precio", us: "Justo, sin sobreprecio", them: "Margen de cadena" },
              { feature: "Atenci\u00f3n", us: "Personal", them: "Rotaci\u00f3n de vendedores" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-[13px] border-t border-[#ddd]">
                <div className="p-4 font-medium text-[#111]">{row.feature}</div>
                <div className="p-4 text-center text-[#111] bg-[#0057A8]/5">{row.us}</div>
                <div className="p-4 text-center text-[#777]">{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0057A8]">
        <div className="max-w-3xl mx-auto px-10 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-white font-normal mb-4">
            Solicita Tu Lente Personalizado
          </h2>
          <p className="text-white/70 text-[14px] mb-8">
            Fabricaci&oacute;n propia, calidad garantizada, entrega express.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20fabricados%20en%20su%20laboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white bg-transparent rounded-full px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            Cotizar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
