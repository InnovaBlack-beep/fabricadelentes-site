const steps = [
  {
    number: "01",
    title: "Visítanos",
    description: "Llega a nuestra sucursal en Minerva, Guadalajara. Sin cita previa.",
  },
  {
    number: "02",
    title: "Examen Gratis",
    description: "Optometristas certificados evalúan tu visión con equipo de última generación.",
  },
  {
    number: "03",
    title: "Fabricamos Aquí",
    description: "Graduamos y montamos tus lentes en nuestro laboratorio propio.",
  },
  {
    number: "04",
    title: "Listos en 1 Hora",
    description: "Verificamos calidad y te entregamos tus lentes el mismo día.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-10 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-fg mt-3">
            Así de fácil es pedir tus lentes
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-border" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-accent bg-white flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-fg">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-fg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
          <a
            href="/lentes-graduados"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-fg text-white text-xs font-semibold uppercase tracking-widest hover:bg-fg/85 transition-colors"
          >
            Ver Productos
          </a>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-border text-xs font-semibold uppercase tracking-widest text-fg hover:border-fg transition-colors"
          >
            Agendar Examen
          </a>
        </div>
      </div>
    </section>
  );
}
