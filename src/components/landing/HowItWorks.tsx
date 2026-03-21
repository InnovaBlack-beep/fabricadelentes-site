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
    <section className="py-16 md:py-24 px-5 md:px-10 bg-warm-cream">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Proceso
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mt-3">
            Así de fácil es pedir tus lentes
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gold/30" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-gold bg-warm-white flex items-center justify-center mb-4">
                  <span className="font-serif text-lg font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-warm-brown max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
          <a
            href="/lentes-graduados"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-warm-graphite text-text-on-dark text-xs font-semibold uppercase tracking-widest hover:bg-text-primary transition-colors"
          >
            Ver Productos
          </a>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-border-mid text-xs font-semibold uppercase tracking-widest text-text-primary hover:border-text-primary transition-colors"
          >
            Agendar Examen
          </a>
        </div>
      </div>
    </section>
  );
}
