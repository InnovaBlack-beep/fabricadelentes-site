import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Laboratorio Óptico en Guadalajara — Fabricación Propia | Fábrica de Lentes",
  description:
    "Laboratorio óptico propio en Guadalajara. Fabricamos lentes graduados, progresivos, transición y más. Entrega express el mismo día.",
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
      <section className="bg-navy grain-overlay relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber text-sm font-semibold tracking-wider uppercase">Nuestro diferenciador</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mt-3 mb-5">
              Laboratorio óptico <span className="text-amber italic">propio</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg mb-8">
              No somos intermediarios. Fabricamos tus lentes aquí en Guadalajara, con control total de calidad y tiempos de entrega que nadie más puede ofrecer.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-sm">
              {[
                { value: "< 24h", label: "Entrega" },
                { value: "100%", label: "Calidad" },
                { value: "+10", label: "Años" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-amber">{s.value}</p>
                  <p className="text-xs text-white/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber/10 rounded-3xl blur-2xl" />
              <Image src="/images/hero-1.png" alt="Laboratorio óptico" width={520} height={520} className="relative rounded-2xl object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Cómo <span className="text-amber italic">fabricamos</span> tus lentes
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-14">
            Un proceso controlado de principio a fin, sin intermediarios ni retrasos.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Receta", desc: "Recibes tu graduación con examen profesional o nos envías tu receta vigente." },
              { step: "02", title: "Selección", desc: "Eliges armazón y tipo de lente. Te asesoramos según tu estilo y necesidad." },
              { step: "03", title: "Fabricación", desc: "Cortamos, graduamos y tratamos tus lentes en nuestro laboratorio en Guadalajara." },
              { step: "04", title: "Entrega", desc: "Verificamos calidad, montamos en tu armazón y te los entregamos listos." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-[family-name:var(--font-display)] text-xl font-bold text-amber">{s.step}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-warm-gray/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber text-sm font-semibold tracking-wider uppercase">Capacidades</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy mt-3 mb-8">
                Todo lo que <span className="text-amber italic">fabricamos</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-warm-gray">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-amber shrink-0"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-sm text-navy font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-amber/5 rounded-3xl rotate-2" />
              <Image src="/images/hero-3.png" alt="Lentes fabricados" width={500} height={500} className="relative rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Nosotros vs. <span className="text-amber italic">la competencia</span>
          </h2>

          <div className="bg-white rounded-2xl border border-warm-gray overflow-hidden">
            <div className="grid grid-cols-3 text-sm font-semibold">
              <div className="p-4 bg-warm-gray/50 text-text-muted"></div>
              <div className="p-4 bg-amber/10 text-amber text-center">Fábrica de Lentes</div>
              <div className="p-4 bg-warm-gray/50 text-text-muted text-center">Cadenas grandes</div>
            </div>
            {[
              { feature: "Fabricación", us: "Propia en GDL", them: "Envían a otro estado" },
              { feature: "Tiempo de entrega", us: "Mismo día posible", them: "7–15 días" },
              { feature: "Control de calidad", us: "Directo", them: "Por terceros" },
              { feature: "Precio", us: "Justo, sin sobreprecio", them: "Margen de cadena" },
              { feature: "Atención", us: "Personal", them: "Rotación de vendedores" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm border-t border-warm-gray">
                <div className="p-4 font-medium text-navy">{row.feature}</div>
                <div className="p-4 text-center text-navy bg-amber/5">{row.us}</div>
                <div className="p-4 text-center text-text-muted">{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy grain-overlay relative">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
            Solicita tu lente <span className="text-amber italic">personalizado</span>
          </h2>
          <p className="text-white/50 mb-8">Fabricación propia, calidad garantizada, entrega express.</p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20fabricados%20en%20su%20laboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
          >
            Cotizar ahora
          </a>
        </div>
      </section>
    </>
  );
}
