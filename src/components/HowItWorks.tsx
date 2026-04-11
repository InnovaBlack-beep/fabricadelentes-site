"use client";

export function HowItWorks() {
  const steps = [
    { num: "01", title: "Visítanos", desc: "Llega a nuestra sucursal en Minerva, Guadalajara. Sin cita previa." },
    { num: "02", title: "Examen Gratis", desc: "Optometristas certificados evalúan tu visión con equipo de última generación." },
    { num: "03", title: "Fabricamos Aquí", desc: "Graduamos y montamos tus lentes en nuestro laboratorio propio." },
    { num: "04", title: "Listos en 1 Hora", desc: "Verificamos calidad y te entregamos tus lentes el mismo día." },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-accent">
            Proceso
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-fg">
            Así de fácil es pedir tus lentes
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8 md:gap-6">
          <div className="hidden md:block absolute" style={{ top: 32, left: "15%", right: "15%", height: 0, borderTop: "1px solid #B5956E", opacity: 0.3 }} />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center relative z-10">
              <div className="flex items-center justify-center size-16 rounded-full bg-white border-2 border-accent mb-5">
                <span className="text-lg font-bold text-accent">{step.num}</span>
              </div>
              <h3 className="text-sm font-bold text-fg mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-16">
          <a
            href="/lentes-graduados"
            className="inline-flex items-center justify-center h-12 px-8 text-xs font-bold uppercase tracking-widest transition-all duration-300"
            style={{ background: "#111110", color: "#F5F0EA" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#B5956E"; e.currentTarget.style.color = "#2A1F14"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#111110"; e.currentTarget.style.color = "#F5F0EA"; }}
          >
            Ver Productos
          </a>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 text-xs font-bold uppercase tracking-widest border border-border transition-all duration-300 hover:border-fg"
            style={{ color: "#111110" }}
          >
            Agendar Examen
          </a>
        </div>
      </div>
    </section>
  );
}
