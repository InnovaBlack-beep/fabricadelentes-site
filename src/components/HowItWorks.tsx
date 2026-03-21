"use client";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Visítanos",
      desc: "Llega a nuestra sucursal en Minerva, Guadalajara. Sin cita previa.",
    },
    {
      num: "02",
      title: "Examen Gratis",
      desc: "Optometristas certificados evalúan tu visión con equipo de última generación.",
    },
    {
      num: "03",
      title: "Fabricamos Aquí",
      desc: "Graduamos y montamos tus lentes en nuestro laboratorio propio.",
    },
    {
      num: "04",
      title: "Listos en 1 Hora",
      desc: "Verificamos calidad y te entregamos tus lentes el mismo día.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "#F0EBE3" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{
              color: "#C8A040",
              fontFamily: "var(--font-sans)",
            }}
          >
            Proceso
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "var(--font-serif)",
              color: "#111110",
            }}
          >
            Así de fácil es pedir tus lentes
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8 md:gap-6">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute"
            style={{
              top: 32,
              left: "15%",
              right: "15%",
              height: 0,
              borderTop: "1px solid #C8A040",
              opacity: 0.3,
            }}
          />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center relative z-10">
              <div
                className="flex items-center justify-center mb-5"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#FAF8F5",
                  border: "2px solid #C8A040",
                }}
              >
                <span
                  className="text-lg font-bold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#C8A040",
                  }}
                >
                  {step.num}
                </span>
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#111110",
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-[200px]"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#6A5A4A",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <a
            href="/lentes-graduados"
            className="inline-flex items-center justify-center transition-all duration-300"
            style={{
              height: 50,
              padding: "0 32px",
              background: "#111110",
              color: "#F5F0EA",
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#C8A040";
              e.currentTarget.style.color = "#1A1000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#111110";
              e.currentTarget.style.color = "#F5F0EA";
            }}
          >
            Ver Productos
          </a>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-all duration-300"
            style={{
              height: 50,
              padding: "0 32px",
              background: "transparent",
              color: "#111110",
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              border: "1.5px solid #C8C0B8",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#111110";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#C8C0B8";
            }}
          >
            Agendar Examen
          </a>
        </div>
      </div>
    </section>
  );
}
