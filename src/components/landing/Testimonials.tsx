const testimonials = [
  {
    quote:
      "Llegué sin cita y en una hora ya tenía mis lentes nuevos. Increíble servicio.",
    name: "María G.",
    location: "Zapopan",
    initials: "MG",
    color: "bg-surface",
  },
  {
    quote:
      "Los lentes Frida Kahlo son hermosos. La calidad se nota desde que los tocas.",
    name: "Roberto L.",
    location: "Guadalajara",
    initials: "RL",
    color: "bg-surface",
  },
  {
    quote:
      "El convenio con nuestra empresa fue muy fácil de implementar. Todos quedaron contentos.",
    name: "Ana P.",
    location: "Recursos Humanos",
    initials: "AP",
    color: "bg-surface",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-fg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
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

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 md:p-8 rounded-lg border border-border"
            >
              <div className="text-border text-3xl font-serif leading-none mb-2">
                &ldquo;
              </div>
              <Stars />
              <p className="text-sm leading-relaxed text-fg mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-fg`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-fg">{t.name}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
