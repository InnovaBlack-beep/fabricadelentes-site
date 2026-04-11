import Image from "next/image";

const testimonials = [
  {
    name: "Mariana Rodríguez",
    location: "Zapopan, Jalisco",
    avatar: "/images/testimonials/avatar-1.jpg",
    rating: 5,
    product: "Frida Kahlo FK1001M",
    text: "Llegué sin cita y en menos de dos horas salí con mis lentes nuevos. El optometrista fue muy profesional y me explicó todo con paciencia. La calidad del armazón Frida Kahlo es impresionante — se siente premium. Definitivamente mi óptica de confianza.",
  },
  {
    name: "Roberto Hernández",
    location: "Guadalajara, Jalisco",
    avatar: "/images/testimonials/avatar-2.jpg",
    rating: 5,
    product: "Brizzant Vincent",
    text: "Llevaba años yendo a Devlyn y decidí probar Fábrica de Lentes por recomendación. La diferencia es abismal — atención personalizada, mis lentes quedaron perfectos y el precio fue mucho mejor. Ya llevo a toda mi familia.",
  },
  {
    name: "Andrea Chen",
    location: "Tlaquepaque, Jalisco",
    avatar: "/images/testimonials/avatar-3.jpg",
    rating: 5,
    product: "Lentes progresivos",
    text: "Necesitaba progresivos y en todas las ópticas me cotizaban arriba de $5,000. Aquí me los hicieron por mucho menos y con una calidad excelente. La ventaja de que tengan laboratorio propio se nota en el precio y en la rapidez.",
  },
  {
    name: "Lucía Mendoza",
    location: "Zapopan, Jalisco",
    avatar: "/images/testimonials/avatar-4.jpg",
    rating: 5,
    product: "Frida Kahlo Solar",
    text: "Compré unos Frida Kahlo de sol graduados y quedaron espectaculares. El proceso fue súper fácil — me hicieron el examen ahí mismo, elegí el armazón y en tres días ya los tenía. Calidad premium a precio justo.",
  },
  {
    name: "Carlos Vega",
    location: "Guadalajara, Jalisco",
    avatar: "/images/testimonials/avatar-5.jpg",
    rating: 5,
    product: "Nobleman HC04",
    text: "La atención es lo que más valoro. Me tomaron el tiempo para explicarme las opciones de micas y me recomendaron exactamente lo que necesitaba. Nada de presión de venta. Profesionales de verdad.",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="#B5956E"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {[...Array(count)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-fg">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Horizontal scroll on mobile, 3-column grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none scrollbar-hide">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-[300px] flex-shrink-0 snap-start md:min-w-0 md:flex-shrink p-6 md:p-8 rounded-lg border border-border flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-fg">{t.name}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
              </div>

              <Stars count={t.rating} />

              <p className="text-xs text-muted mt-2 mb-3">{t.product}</p>

              <p className="text-sm leading-relaxed text-fg">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
