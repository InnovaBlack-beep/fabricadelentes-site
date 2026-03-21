import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lentes Graduados en Guadalajara — Fabricación Propia | Fábrica de Lentes",
  description:
    "Lentes graduados con fabricación propia en Guadalajara. Monofocales, bifocales, progresivos. Entrega el mismo día. Examen de la vista disponible.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-graduados" },
};

const types = [
  { name: "Monofocales", desc: "Para miopía, hipermetropía o astigmatismo. El lente más común y accesible.", icon: "—" },
  { name: "Bifocales", desc: "Dos graduaciones en un solo lente: para ver de lejos y de cerca.", icon: "=" },
  { name: "Progresivos", desc: "Transición suave entre distancias. Sin línea divisoria visible.", icon: "≈" },
  { name: "Transición (Fotocromáticos)", desc: "Se oscurecen con el sol y se aclaran en interiores. 2 en 1.", icon: "◐" },
  { name: "Blue Block", desc: "Filtro de luz azul para pantallas. Reduce cansancio visual.", icon: "◉" },
  { name: "Antirreflex", desc: "Tratamiento que elimina reflejos y mejora la claridad visual.", icon: "✧" },
];

export default function LentesGraduados() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy grain-overlay relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber text-sm font-semibold tracking-wider uppercase">Fabricación propia</span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mt-3 mb-5">
              Lentes graduados <span className="text-amber italic">el mismo día</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg mb-8">
              Fabricamos tus lentes en nuestro laboratorio en Guadalajara. Desde monofocales hasta progresivos de alta gama — sin esperar semanas.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
              >
                Cotizar lentes graduados
              </a>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Agendar examen de la vista
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src="/images/hero-1.png" alt="Lentes graduados" width={500} height={500} className="rounded-2xl object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Tipos de lentes <span className="text-amber italic">graduados</span>
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
            Fabricamos todos los tipos de lentes oftálmicos. Todos con tratamientos de calidad y garantía.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-warm-gray hover:border-amber/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-4">
                  <span className="text-amber text-xl">{t.icon}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-navy mb-2">{t.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examen de la vista */}
      <section className="py-20 bg-warm-gray/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-warm-gray overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <span className="text-amber text-sm font-semibold tracking-wider uppercase">Servicio incluido</span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                  Examen de la vista <span className="text-amber italic">profesional</span>
                </h2>
                <ul className="space-y-4">
                  {[
                    "Revisión completa de agudeza visual",
                    "Detección de miopía, hipermetropía y astigmatismo",
                    "Evaluación para lentes progresivos",
                    "Receta actualizada al momento",
                    "Sin costo al comprar tus lentes con nosotros",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-amber shrink-0 mt-0.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors"
                >
                  Agendar examen de la vista
                </a>
              </div>
              <div className="bg-amber/5 flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-display)] text-7xl font-bold text-amber mb-2">E</div>
                  <div className="font-[family-name:var(--font-display)] text-5xl font-bold text-amber/70 mb-2">F P</div>
                  <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-amber/50 mb-2">T O Z</div>
                  <div className="font-[family-name:var(--font-display)] text-xl font-bold text-amber/30">L P E D</div>
                  <p className="text-sm text-text-muted mt-6">Examen profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy grain-overlay relative">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
            Cotiza tus lentes <span className="text-amber italic">en minutos</span>
          </h2>
          <p className="text-white/50 mb-8">Envíanos tu receta por WhatsApp y te damos precio y tiempo de entrega al instante.</p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados.%20Mi%20receta%20es%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
          >
            Enviar receta por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
