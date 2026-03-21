import Image from "next/image";

const categories = [
  {
    title: "Lentes Graduados",
    description: "Más de 500 armazones desde $590 MXN",
    image: "/images/hero-1.png",
    alt: "Colección de lentes graduados",
    href: "/lentes-graduados",
  },
  {
    title: "Lentes de Sol",
    description: "Protección UV con estilo para cada rostro",
    image: "/images/hero-2.png",
    alt: "Colección de lentes de sol",
    href: "/lentes-de-sol",
  },
  {
    title: "Lentes de Contacto",
    description: "Diarios, mensuales y de color",
    image: "/images/hero-3.png",
    alt: "Lentes de contacto",
    href: "/lentes-de-contacto",
  },
];

export function ShopByCategory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text-primary" style={{ fontFamily: "var(--font-serif)" }}>
            Explora por Categoría
          </h2>
          <p className="text-base text-warm-stone">
            Encuentra exactamente lo que necesitas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-lg"
              style={{ aspectRatio: "4/5" }}
            >
              <Image src={cat.image} alt={cat.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {cat.title}
                </h3>
                <p className="text-sm text-white/80 mb-4">{cat.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all">
                  Ver Colección
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
