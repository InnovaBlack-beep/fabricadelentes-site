import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Lentes Graduados",
    desc: "Más de 500 armazones desde $590 MXN",
    image: "/images/hero-1.png",
    href: "/lentes-graduados",
  },
  {
    title: "Lentes de Sol",
    desc: "Protección UV con estilo para cada rostro",
    image: "/images/hero-2.png",
    href: "/lentes-de-sol",
  },
  {
    title: "Lentes de Contacto",
    desc: "Diarios, mensuales y de color",
    image: "/images/hero-3.png",
    href: "/lentes-de-contacto",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-10 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-fg mt-3">
            Encuentra tus lentes ideales
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative block aspect-[4/5] rounded-lg overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-white/70 mb-4">{cat.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white group-hover:gap-3 transition-all">
                  Ver Colección
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
