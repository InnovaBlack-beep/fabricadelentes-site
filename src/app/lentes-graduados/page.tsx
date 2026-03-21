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
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0057FF] font-semibold text-sm mb-3">
                Fabricacion propia
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-4">
                Lentes graduados el mismo dia
              </h1>
              <p className="text-[#666666] text-base max-w-lg mb-8 leading-relaxed">
                Fabricamos tus lentes en nuestro laboratorio en Guadalajara. Desde monofocales hasta progresivos de alta gama, sin esperar semanas.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
                >
                  Cotizar lentes graduados
                </a>
                <a
                  href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white border border-[#0057FF] text-[#0057FF] text-sm font-semibold rounded-md hover:bg-[#f5f5f5] transition-colors"
                >
                  Agendar examen de la vista
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
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
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-3">
              Tipos de lentes graduados
            </h2>
            <p className="text-[#666666] max-w-xl">
              Fabricamos todos los tipos de lentes oftalmicos. Todos con tratamientos de calidad y garantia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {types.map((t) => (
              <div
                key={t.name}
                className="bg-[#f5f5f5] p-6 border border-[#e0e0e0] rounded-lg hover:border-[#0057FF]/40 transition-all"
              >
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examen de la vista */}
      <section className="py-20 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0 bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <p className="text-[#0057FF] font-semibold text-sm mb-3">
                Servicio incluido
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-5 leading-tight">
                Examen de la vista profesional
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Revision completa de agudeza visual",
                  "Deteccion de miopia, hipermetropia y astigmatismo",
                  "Evaluacion para lentes progresivos",
                  "Receta actualizada al momento",
                  "Sin costo al comprar tus lentes con nosotros",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#0057FF] shrink-0 mt-0.5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#333333] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
              >
                Agendar examen de la vista
              </a>
            </div>
            <div className="bg-[#f5f5f5] flex items-center justify-center p-10">
              <div className="text-center text-[#1a1a1a]">
                <div className="text-8xl font-bold text-[#0057FF]/20 mb-2">E</div>
                <div className="text-6xl font-bold text-[#0057FF]/15 mb-2">F P</div>
                <div className="text-4xl font-bold text-[#0057FF]/10 mb-2">T O Z</div>
                <div className="text-2xl font-bold text-[#0057FF]/5">L P E D</div>
                <p className="text-sm text-[#666666] mt-8">Examen profesional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#0057FF]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] mb-3">
            Cotiza tus lentes en minutos
          </h2>
          <p className="text-white/80 text-base mb-8">
            Envanos tu receta por WhatsApp y te damos precio y tiempo de entrega al instante.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20lentes%20graduados.%20Mi%20receta%20es%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-white text-[#0057FF] text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Enviar receta por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
