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
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-accent tracking-[0.16em] uppercase mb-4 font-semibold">
                Nuestro Diferenciador
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-fg leading-tight mb-5 font-bold">
                Laboratorio
                <br />Óptico Propio
              </h1>
              <p className="text-muted text-sm max-w-lg mb-8 leading-relaxed">
                No somos intermediarios. Fabricamos tus lentes aquí en Guadalajara, con control total de calidad y tiempos de entrega que nadie más puede ofrecer.
              </p>
              <div className="flex items-center gap-8 text-fg">
                <div>
                  <p className="text-2xl font-semibold">&lt; 1h</p>
                  <p className="text-xs text-muted mt-0.5 tracking-wide uppercase">Entrega</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-semibold">100%</p>
                  <p className="text-xs text-muted mt-0.5 tracking-wide uppercase">Calidad</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-semibold">+10</p>
                  <p className="text-xs text-muted mt-0.5 tracking-wide uppercase">Años</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/hero-1.png"
                  alt="Laboratorio óptico Fábrica de Lentes"
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
          <h2 className="text-2xl md:text-3xl text-fg mb-3 font-semibold">
            Cómo fabricamos tus lentes
          </h2>
          <p className="text-muted text-sm max-w-xl mb-12">
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
                <div className="w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center mb-4 text-sm font-medium">
                  {i + 1}
                </div>
                <h3 className="text-sm font-semibold text-fg uppercase tracking-[0.05em] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-accent tracking-[0.16em] uppercase mb-4 font-semibold">
                Capacidades
              </p>
              <h2 className="text-2xl md:text-3xl text-fg mb-8 leading-tight font-semibold">
                Todo lo que fabricamos
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-3 bg-white rounded-lg p-4"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 shrink-0 text-accent">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-fg font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/hero-3.png"
                alt="Lentes fabricados en laboratorio propio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-10 text-center">
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-semibold">
            Solicita tu lente personalizado
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Fabricación propia, calidad garantizada, entrega express.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20fabricados%20en%20su%20laboratorio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-12 px-8 rounded-full bg-accent text-fg text-xs uppercase tracking-widest font-semibold hover:bg-accent/85 transition-colors"
          >
            Cotizar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
