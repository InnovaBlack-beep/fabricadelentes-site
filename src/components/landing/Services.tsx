const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Laboratorio Propio",
    description: "Fabricamos tus lentes en nuestro laboratorio. Sin intermediarios, sin esperas. Calidad garantizada.",
    cta: "Conocer Lab",
    href: "/laboratorio",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Empresas y Convenios",
    description: "Programas corporativos para tu equipo. Precios especiales, facturación y atención personalizada.",
    cta: "Cotizar",
    href: "/empresas",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Entrega en 1 Hora",
    description: "Lentes monofocales listos el mismo día. Selecciona, graduamos y entregas en una visita.",
    cta: "Saber Más",
    href: "https://wa.me/523314257226?text=Hola%2C%20quiero%20info%20sobre%20entrega%20express",
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-10 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-fg mt-3">
            Todo para tu visión
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group block p-6 md:p-8 rounded-lg border border-border hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-fg mb-5">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-fg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5">
                {service.description}
              </p>
              <span className="text-xs font-semibold uppercase tracking-widest text-fg group-hover:tracking-[0.2em] transition-all">
                {service.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
