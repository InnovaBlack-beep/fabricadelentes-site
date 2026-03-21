import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lentes de Sol en Guadalajara | Ray-Ban, Meta y Mas | Fabrica de Lentes",
  description:
    "Lentes de sol originales en Guadalajara. Ray-Ban, Meta, Oakley y mas. Tambien graduados de sol. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-sol" },
};

const brands = [
  { name: "Ray-Ban", desc: "El clasico por excelencia. Aviador, Wayfarer, Clubmaster y mas.", tag: "Popular" },
  { name: "Meta (Ray-Ban)", desc: "Lentes inteligentes con camara y audio. Tecnologia de punta.", tag: "Nuevo" },
  { name: "Oakley", desc: "Diseno deportivo y proteccion UV extrema. Ideales para aire libre.", tag: "" },
  { name: "Vogue Eyewear", desc: "Moda y estilo accesible. Disenos femeninos y modernos.", tag: "" },
  { name: "Graduados de sol", desc: "Cualquier armazon solar con tu graduacion. Fabricados en nuestro laboratorio.", tag: "Exclusivo" },
  { name: "Mas marcas", desc: "Consulta disponibilidad de otras marcas. Trabajamos con los principales distribuidores.", tag: "" },
];

export default function LentesDeSol() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0057FF] font-semibold text-sm mb-3">
                100% Originales
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-4">
                Lentes de sol en Guadalajara
              </h1>
              <p className="text-[#666666] text-base max-w-lg mb-8 leading-relaxed">
                Las mejores marcas con garantia de originalidad. Tambien fabricamos lentes de sol con tu graduacion en nuestro laboratorio.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
              >
                Ver disponibilidad por WhatsApp
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
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
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-3">
              Marcas disponibles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((b) => (
              <a
                key={b.name}
                href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol%20${encodeURIComponent(b.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 border border-[#e0e0e0] rounded-lg hover:border-[#0057FF]/40 transition-all relative overflow-hidden"
              >
                {b.tag && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#0057FF]/10 text-[#0057FF] text-xs font-semibold rounded">
                    {b.tag}
                  </span>
                )}
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                  {b.name}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-3">{b.desc}</p>
                <span className="text-sm font-semibold text-[#0057FF] group-hover:underline">
                  Consultar &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Graduados de sol */}
      <section className="py-20 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
            <div className="px-8 md:px-16 py-14 md:py-20 text-center">
              <p className="text-[#0057FF] font-semibold text-sm mb-3">
                Servicio exclusivo
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] mb-4 leading-tight">
                Lentes de sol con tu graduacion
              </h2>
              <p className="text-white/60 max-w-xl mx-auto text-base mb-10">
                Elige el armazon solar que mas te guste y nosotros le ponemos tu graduacion. Fabricados en nuestro laboratorio con entrega express.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20lentes%20de%20sol%20graduados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-white text-[#0057FF] text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors"
              >
                Cotizar lentes de sol graduados
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
