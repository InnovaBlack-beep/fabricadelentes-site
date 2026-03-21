import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lentes Graduados en Guadalajara | Fabricacion Propia | Fabrica de Lentes",
  description:
    "Lentes graduados con fabricacion propia en Guadalajara. Monofocales, bifocales, progresivos. Entrega el mismo dia. Examen de la vista disponible.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-graduados" },
};

const types = [
  { name: "Monofocales", desc: "Para miopia, hipermetropia o astigmatismo. El lente mas comun y accesible." },
  { name: "Bifocales", desc: "Dos graduaciones en un solo lente: para ver de lejos y de cerca." },
  { name: "Progresivos", desc: "Transicion suave entre distancias. Sin linea divisoria visible." },
  { name: "Transicion", desc: "Se oscurecen con el sol y se aclaran en interiores. 2 en 1." },
  { name: "Blue Block", desc: "Filtro de luz azul para pantallas. Reduce cansancio visual." },
  { name: "Antirreflex", desc: "Tratamiento que elimina reflejos y mejora la claridad visual." },
];

export default function LentesGraduados() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
                Fabricacion propia
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-foreground leading-[1.05] mb-5">
                Lentes graduados{" "}
                <span className="text-gold italic">el mismo dia</span>
              </h1>
              <p className="text-muted text-lg max-w-lg mb-8 leading-relaxed">
                Fabricamos tus lentes en nuestro laboratorio en Guadalajara. Desde monofocales hasta progresivos de alta gama, sin esperar semanas.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-semibold tracking-wide uppercase hover:bg-dark transition-colors duration-300"
                >
                  Cotizar lentes graduados
                </a>
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium hover:border-foreground transition-all duration-300"
                >
                  Agendar examen de la vista
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero-1.png"
                  alt="Lentes graduados"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-4">
              Tipos de lentes <span className="text-gold italic">graduados</span>
            </h2>
            <p className="text-muted max-w-xl">
              Fabricamos todos los tipos de lentes oftalmicos. Todos con tratamientos de calidad y garantia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {types.map((t) => (
              <div
                key={t.name}
                className="bg-off-white p-7 border border-border hover:border-gold/40 transition-all duration-300"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examen de la vista */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 bg-white border border-border overflow-hidden">
            <div className="p-10 md:p-14">
              <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
                Servicio incluido
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Examen de la vista{" "}
                <span className="text-gold italic">profesional</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Revision completa de agudeza visual",
                  "Deteccion de miopia, hipermetropia y astigmatismo",
                  "Evaluacion para lentes progresivos",
                  "Receta actualizada al momento",
                  "Sin costo al comprar tus lentes con nosotros",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-gold shrink-0 mt-0.5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-foreground text-white text-sm font-semibold tracking-wide uppercase hover:bg-dark transition-colors"
              >
                Agendar examen de la vista
              </a>
            </div>
            <div className="bg-off-white flex items-center justify-center p-10">
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] text-8xl text-gold/80 mb-2">E</div>
                <div className="font-[family-name:var(--font-display)] text-6xl text-gold/60 mb-2">F P</div>
                <div className="font-[family-name:var(--font-display)] text-4xl text-gold/40 mb-2">T O Z</div>
                <div className="font-[family-name:var(--font-display)] text-2xl text-gold/20">L P E D</div>
                <p className="text-sm text-muted mt-8">Examen profesional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-4">
            Cotiza tus lentes <span className="text-gold italic">en minutos</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Envanos tu receta por WhatsApp y te damos precio y tiempo de entrega al instante.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados.%20Mi%20receta%20es%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm font-semibold tracking-wide uppercase hover:bg-off-white transition-colors duration-300"
          >
            Enviar receta por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
