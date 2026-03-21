import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Lentes Graduados",
    image: "/images/cat-graduados.jpg",
    objectPosition: "center top",
    href: "/lentes-graduados",
  },
  {
    title: "Lentes de Sol",
    image: "/images/cat-sol.jpg",
    objectPosition: "center center",
    href: "/lentes-de-sol",
  },
  {
    title: "Lentes de Contacto",
    image: "/images/cat-contactos.jpg",
    objectPosition: "center center",
    href: "/lentes-de-contacto",
  },
];

export function CategoryGrid() {
  return (
    <section className="pt-0 pb-16 md:pb-24 px-5 md:px-10 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-2 md:gap-3">
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
                style={{ objectPosition: cat.objectPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {cat.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white group-hover:gap-3 transition-all">
                  Ver Colección
                  <span>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
