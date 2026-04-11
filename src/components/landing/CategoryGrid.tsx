import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Lentes Graduados",
    subtitle: "Desde $1,949 con graduación incluida",
    image: "/images/cat-graduados.jpg",
    hoverImage: "/images/cat-graduados-hover.jpg",
    objectPosition: "center top",
    href: "/lentes-graduados",
  },
  {
    title: "Lentes de Sol",
    subtitle: "Frida Kahlo y André Badi desde $1,649",
    image: "/images/cat-sol.jpg",
    hoverImage: "/images/cat-sol-hover.jpg",
    objectPosition: "center center",
    href: "/lentes-de-sol",
  },
  {
    title: "Lentes de Contacto",
    subtitle: "Air Optix, Alcon desde $1,064",
    image: "/images/cat-contactos.jpg",
    hoverImage: "/images/cat-contactos-hover.jpg",
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
              {/* Default image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
                style={{ objectPosition: cat.objectPosition }}
              />
              {/* Hover image — crossfade in */}
              <Image
                src={cat.hoverImage}
                alt={`${cat.title} — ver colección`}
                fill
                className="object-cover opacity-0 scale-110 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                style={{ objectPosition: "center center" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {cat.title}
                </h3>
                <p className="text-sm text-white/70 mb-4 transition-all duration-500 group-hover:text-white/90">
                  {cat.subtitle}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white/80 group-hover:text-white group-hover:gap-4 transition-all duration-500">
                  Ver Colección
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
