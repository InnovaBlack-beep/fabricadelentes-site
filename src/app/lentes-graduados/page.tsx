import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lentes Graduados en Guadalajara | Fabricacion Propia | Fabrica de Lentes",
  description:
    "Lentes graduados con fabricacion propia en Guadalajara. Monofocales, bifocales, progresivos. Entrega el mismo dia. Examen de la vista disponible.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-graduados" },
};

const types = [
  { name: "Monofocales", desc: "Para miopía, hipermetropía o astigmatismo. El lente más común y accesible." },
  { name: "Bifocales", desc: "Dos graduaciones en un solo lente: para ver de lejos y de cerca." },
  { name: "Progresivos", desc: "Transición suave entre distancias. Sin línea divisoria visible." },
  { name: "Transición", desc: "Se oscurecen con el sol y se aclaran en interiores. 2 en 1." },
  { name: "Blue Block", desc: "Filtro de luz azul para pantallas. Reduce cansancio visual." },
  { name: "Antirreflex", desc: "Tratamiento que elimina reflejos y mejora la claridad visual." },
];

export default function LentesGraduados() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] text-[#004AAD] tracking-[0.2em] uppercase font-medium mb-4">
                Fabricación Propia
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-[#1a1a1a] font-normal leading-tight mb-5">
                Lentes Graduados
                <br />El Mismo Día
              </h1>
              <p className="text-[#666] text-[15px] max-w-lg mb-8 leading-relaxed">
                Fabricamos tus lentes en nuestro laboratorio en Guadalajara. Desde monofocales hasta progresivos de alta gama, sin esperar semanas.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#004AAD] text-white text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-[#003580] transition-all"
                >
                  Cotizar Lentes
                </a>
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-[#004AAD] text-[#004AAD] text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-[#004AAD] hover:text-white transition-all"
                >
                  Agendar Examen
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-3">
            Tipos de Lentes Graduados
          </h2>
          <p className="text-[#666] text-[14px] max-w-xl mb-10">
            Fabricamos todos los tipos de lentes oftálmicos. Todos con tratamientos de calidad y garantía.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {types.map((t) => (
              <div
                key={t.name}
                className="bg-[#f7f7f7] p-6 border border-[#e5e5e5] hover:border-[#004AAD]/30 transition-all"
              >
                <h3 className="text-[14px] font-semibold text-[#1a1a1a] uppercase tracking-[0.05em] mb-2">
                  {t.name}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examen de la vista */}
      <section className="py-16 md:py-20 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-0 bg-white border border-[#e5e5e5] overflow-hidden">
            <div className="p-8 md:p-12">
              <p className="text-[12px] text-[#004AAD] tracking-[0.2em] uppercase font-medium mb-4">
                Servicio Incluido
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.1em] text-[#1a1a1a] font-normal mb-6 leading-tight">
                Examen de la Vista Profesional
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Revisión completa de agudeza visual",
                  "Detección de miopía, hipermetropía y astigmatismo",
                  "Evaluación para lentes progresivos",
                  "Receta actualizada al momento",
                  "Sin costo al comprar tus lentes con nosotros",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#004AAD] shrink-0 mt-0.5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#333] text-[13px]">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#004AAD] text-white text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-[#003580] transition-all"
              >
                Agendar Examen
              </a>
            </div>
            <div className="bg-[#f7f7f7] flex items-center justify-center p-10">
              <div className="text-center text-[#1a1a1a]">
                <div className="text-8xl font-bold text-[#004AAD]/20 mb-2">E</div>
                <div className="text-6xl font-bold text-[#004AAD]/15 mb-2">F P</div>
                <div className="text-4xl font-bold text-[#004AAD]/10 mb-2">T O Z</div>
                <div className="text-2xl font-bold text-[#004AAD]/5">L P E D</div>
                <p className="text-[12px] text-[#666] mt-8 tracking-wide">Examen profesional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#004AAD]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-white font-normal mb-4">
            Cotiza Tus Lentes en Minutos
          </h2>
          <p className="text-white/70 text-[14px] mb-8">
            Envíanos tu receta por WhatsApp y te damos precio y tiempo de entrega al instante.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados.%20Mi%20receta%20es%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#004AAD] transition-all"
          >
            Enviar Receta por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
