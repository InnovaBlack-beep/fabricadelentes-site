import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lentes de Sol en Guadalajara — Ray-Ban, Meta y Más | Fábrica de Lentes",
  description:
    "Lentes de sol originales en Guadalajara. Ray-Ban, Meta, Oakley y más. También graduados de sol. Visítanos o cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-sol" },
};

const brands = [
  { name: "Ray-Ban", desc: "El clásico por excelencia. Aviador, Wayfarer, Clubmaster y más.", tag: "Popular" },
  { name: "Meta (Ray-Ban)", desc: "Lentes inteligentes con cámara y audio. Tecnología de punta.", tag: "Nuevo" },
  { name: "Oakley", desc: "Diseño deportivo y protección UV extrema. Ideales para actividades al aire libre.", tag: "" },
  { name: "Vogue Eyewear", desc: "Moda y estilo accesible. Diseños femeninos y modernos.", tag: "" },
  { name: "Graduados de sol", desc: "Cualquier armazón solar con tu graduación. Fabricados en nuestro laboratorio.", tag: "Exclusivo" },
  { name: "Más marcas", desc: "Consulta disponibilidad de otras marcas. Trabajamos con los principales distribuidores.", tag: "" },
];

export default function LentesDeSol() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy grain-overlay relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-amber/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-amber text-sm font-semibold tracking-wider uppercase">100% Originales</span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mt-3 mb-5">
            Lentes de sol en <span className="text-amber italic">Guadalajara</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Las mejores marcas con garantía de originalidad. También fabricamos lentes de sol con tu graduación en nuestro laboratorio.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
          >
            Ver disponibilidad por WhatsApp
          </a>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Marcas <span className="text-amber italic">disponibles</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <a
                key={b.name}
                href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20sol%20${encodeURIComponent(b.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-warm-gray hover:border-amber/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {b.tag && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 bg-amber/10 text-amber text-xs font-semibold rounded-full">
                    {b.tag}
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy mb-2">{b.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-3">{b.desc}</p>
                <span className="text-sm font-medium text-amber group-hover:underline">Consultar →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Graduados de sol */}
      <section className="py-20 bg-warm-gray/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-3xl p-10 md:p-16 text-center grain-overlay relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber/5 via-transparent to-amber/5" />
            <div className="relative z-10">
              <span className="text-amber text-sm font-semibold tracking-wider uppercase">Servicio exclusivo</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                Lentes de sol <span className="text-amber italic">con tu graduación</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto mb-8">
                Elige el armazón solar que más te guste y nosotros le ponemos tu graduación. Fabricados en nuestro laboratorio en Guadalajara con entrega express.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20lentes%20de%20sol%20graduados"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
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
