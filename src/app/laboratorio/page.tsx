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
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
                Nuestro diferenciador
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-foreground leading-[1.05] mb-5">
                Laboratorio optico{" "}
                <span className="text-gold italic">propio</span>
              </h1>
              <p className="text-muted text-lg max-w-lg mb-10 leading-relaxed">
                No somos intermediarios. Fabricamos tus lentes aqui en Guadalajara, con control total de calidad y tiempos de entrega que nadie mas puede ofrecer.
              </p>
              <div className="flex items-center gap-8 md:gap-12 text-foreground">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-3xl">&lt; 24h</p>
                  <p className="text-xs text-muted mt-0.5">Entrega</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-3xl">100%</p>
                  <p className="text-xs text-muted mt-0.5">Calidad</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-3xl">+10</p>
                  <p className="text-xs text-muted mt-0.5">Anos</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-4">
              Como <span className="text-gold italic">fabricamos</span> tus lentes
            </h2>
            <p className="text-muted max-w-xl">
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
              <div key={s.title} className="relative">
                <div className="w-8 h-8 border border-gold/30 flex items-center justify-center mb-4">
                  <span className="text-sm font-medium text-gold">{i + 1}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
                Capacidades
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Todo lo que{" "}
                <span className="text-gold italic">fabricamos</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 bg-white p-4 border border-border"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-gold shrink-0">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-foreground font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-12">
            Nosotros vs. <span className="text-gold italic">la competencia</span>
          </h2>

          <div className="bg-off-white border border-border overflow-hidden">
            <div className="grid grid-cols-3 text-sm font-semibold">
              <div className="p-5 text-muted"></div>
              <div className="p-5 bg-gold/10 text-gold text-center">Fabrica de Lentes</div>
              <div className="p-5 text-muted text-center">Cadenas grandes</div>
            </div>
            {[
              { feature: "Fabricacion", us: "Propia en GDL", them: "Envian a otro estado" },
              { feature: "Tiempo de entrega", us: "Mismo dia posible", them: "7-15 dias" },
              { feature: "Control de calidad", us: "Directo", them: "Por terceros" },
              { feature: "Precio", us: "Justo, sin sobreprecio", them: "Margen de cadena" },
              { feature: "Atencion", us: "Personal", them: "Rotacion de vendedores" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm border-t border-border">
                <div className="p-5 font-medium text-foreground">{row.feature}</div>
                <div className="p-5 text-center text-foreground bg-gold/5">{row.us}</div>
                <div className="p-5 text-center text-muted">{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-4">
            Solicita tu lente <span className="text-gold italic">personalizado</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Fabricacion propia, calidad garantizada, entrega express.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20fabricados%20en%20su%20laboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm font-semibold tracking-wide uppercase hover:bg-off-white transition-colors duration-300"
          >
            Cotizar ahora
          </a>
        </div>
      </section>
    </>
  );
}
