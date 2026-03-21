import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lentes de Sol en Guadalajara | Ray-Ban, Meta y Mas | Fabrica de Lentes",
  description:
    "Lentes de sol originales en Guadalajara. Ray-Ban, Meta, Oakley y mas. Tambien graduados de sol. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-sol" },
};

const brands = [
  { name: "Ray-Ban", desc: "El clásico por excelencia. Aviador, Wayfarer, Clubmaster y más.", tag: "POPULAR" },
  { name: "Meta (Ray-Ban)", desc: "Lentes inteligentes con cámara y audio. Tecnología de punta.", tag: "NUEVO" },
  { name: "Oakley", desc: "Diseño deportivo y protección UV extrema. Ideales para aire libre.", tag: "" },
  { name: "Vogue Eyewear", desc: "Moda y estilo accesible. Diseños femeninos y modernos.", tag: "" },
  { name: "Graduados de sol", desc: "Cualquier armazón solar con tu graduación. Fabricados en nuestro laboratorio.", tag: "EXCLUSIVO" },
  { name: "Más marcas", desc: "Consulta disponibilidad de otras marcas. Trabajamos con los principales distribuidores.", tag: "" },
];

export default function LentesDeSol() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] text-[#2d1b69] tracking-[0.2em] uppercase font-medium mb-4">
                100% Originales
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-[#1a1a1a] font-normal leading-tight mb-5">
                Lentes de Sol
                <br />en Guadalajara
              </h1>
              <p className="text-[#666] text-[15px] max-w-lg mb-8 leading-relaxed">
                Las mejores marcas con garantía de originalidad. También fabricamos lentes de sol con tu graduación en nuestro laboratorio.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#2d1b69] text-white text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-[#1a0a3e] transition-all inline-block"
              >
                Ver Disponibilidad
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/hero-3.png"
                  alt="Mujer con lentes de sol"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-10">
            Marcas Disponibles
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((b) => (
              <a
                key={b.name}
                href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol%20${encodeURIComponent(b.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 border border-[#e5e5e5] hover:border-[#2d1b69]/30 transition-all relative overflow-hidden"
              >
                {b.tag && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#2d1b69]/10 text-[#2d1b69] text-[10px] font-medium tracking-[0.1em]">
                    {b.tag}
                  </span>
                )}
                <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-2">
                  {b.name}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-3">{b.desc}</p>
                <span className="text-[12px] text-[#2d1b69] font-medium tracking-[0.05em] uppercase group-hover:underline">
                  Consultar
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Graduados de sol */}
      <section className="py-16 md:py-20 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="bg-[#1a1a2e] overflow-hidden">
            <div className="px-8 md:px-16 py-14 md:py-20 text-center">
              <p className="text-[12px] text-[#4a2c8a] tracking-[0.2em] uppercase font-medium mb-4">
                Servicio Exclusivo
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-white font-normal mb-5 leading-tight">
                Lentes de Sol con Tu Graduación
              </h2>
              <p className="text-white/50 max-w-xl mx-auto text-[14px] mb-10">
                Elige el armazón solar que más te guste y nosotros le ponemos tu graduación. Fabricados en nuestro laboratorio con entrega express.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20lentes%20de%20sol%20graduados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-white text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#1a1a2e] transition-all"
              >
                Cotizar Lentes de Sol Graduados
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
