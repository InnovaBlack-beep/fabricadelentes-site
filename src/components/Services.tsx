const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Examen de la Vista",
    description: "Evaluación completa con optometristas certificados. Equipo de última generación. Sin cita previa.",
    cta: "Agendar Cita",
    href: "https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" /><path d="m6.8 15-3.5 2" /><path d="m20.7 17-3.5-2" />
        <path d="M6.5 8.5c1.5-1.5 3.5-2 5.5-2s4 .5 5.5 2" />
        <path d="M4 13c1-2.5 3.5-4 8-4s7 1.5 8 4" />
        <path d="M12 22c-4 0-7-1-9-3" /><path d="M12 22c4 0 7-1 9-3" />
      </svg>
    ),
    title: "Laboratorio Propio",
    description: "Fabricamos tus lentes en nuestro laboratorio. Sin intermediarios, sin esperas. Calidad garantizada.",
    cta: "Conocer Lab",
    href: "/laboratorio",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 12h.01" />
      </svg>
    ),
    title: "Empresas y Convenios",
    description: "Programas corporativos para tu equipo. Precios especiales, facturación y atención personalizada.",
    cta: "Cotizar",
    href: "/empresas",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Entrega en 1 Hora",
    description: "Lentes monofocales listos el mismo día. Selecciona tu armazón, graduamos y entregas en una visita.",
    cta: "Saber Más",
    href: "https://wa.me/523314257226?text=Hola%2C%20quiero%20info%20sobre%20entrega%20express",
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-text-primary" style={{ fontFamily: "var(--font-serif)" }}>
            Nuestros Servicios
          </h2>
          <p className="text-base text-warm-stone max-w-2xl mx-auto">
            Más que una óptica — una experiencia completa de salud visual
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-6 md:p-8 rounded-xl border border-border-light transition-all duration-300 hover:shadow-lg"
            >
              <div className="size-14 rounded-full flex items-center justify-center mb-5 bg-gold/10 text-gold">
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-warm-stone leading-relaxed mb-4">{s.description}</p>
              <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                {s.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
