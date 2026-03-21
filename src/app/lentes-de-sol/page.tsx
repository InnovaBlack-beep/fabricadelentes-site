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
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
                100% Originales
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-foreground leading-[1.05] mb-5">
                Lentes de sol en{" "}
                <span className="text-gold italic">Guadalajara</span>
              </h1>
              <p className="text-muted text-lg max-w-lg mb-8 leading-relaxed">
                Las mejores marcas con garantia de originalidad. Tambien fabricamos lentes de sol con tu graduacion en nuestro laboratorio.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-semibold tracking-wide uppercase hover:bg-dark transition-colors duration-300"
              >
                Ver disponibilidad por WhatsApp
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-4">
              Marcas <span className="text-gold italic">disponibles</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((b) => (
              <a
                key={b.name}
                href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol%20${encodeURIComponent(b.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-off-white p-7 border border-border hover:border-gold/40 transition-all duration-300 relative overflow-hidden"
              >
                {b.tag && (
                  <span className="absolute top-5 right-5 px-3 py-1 bg-gold/10 text-gold text-xs font-medium">
                    {b.tag}
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">
                  {b.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{b.desc}</p>
                <span className="text-sm font-semibold text-gold group-hover:underline">
                  Consultar
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 inline ml-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Graduados de sol */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#111111] overflow-hidden">
            <div className="px-8 md:px-16 py-14 md:py-20 text-center">
              <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
                Servicio exclusivo
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white mb-4 leading-tight">
                Lentes de sol{" "}
                <span className="text-gold italic">con tu graduacion</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto text-lg mb-10">
                Elige el armazon solar que mas te guste y nosotros le ponemos tu graduacion. Fabricados en nuestro laboratorio con entrega express.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20lentes%20de%20sol%20graduados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm font-semibold tracking-wide uppercase hover:bg-off-white transition-colors duration-300"
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
