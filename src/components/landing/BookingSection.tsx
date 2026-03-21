export function BookingSection() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-10 bg-warm-graphite overflow-hidden">
      {/* Top gold divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, #C8A040, transparent)",
        }}
      />

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left content */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Examen Gratuito
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark mt-4 leading-tight">
            Tu visión merece lo mejor.
          </h2>
          <p className="text-sm md:text-base text-text-on-dark/55 mt-5 leading-relaxed max-w-md">
            Agenda tu examen de la vista sin costo. Optometristas certificados,
            equipo de última generación, y resultados inmediatos.
          </p>
        </div>

        {/* Right card */}
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "rgba(245,240,234,0.04)",
            border: "1px solid rgba(245,240,234,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 className="font-serif text-xl font-semibold text-text-on-dark mb-6">
            Agenda tu examen
          </h3>
          <form
            action={`https://wa.me/523314257226`}
            target="_blank"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              className="h-[52px] px-5 rounded-lg text-sm text-text-on-dark placeholder:text-text-on-dark/30 focus:outline-none focus:ring-1 focus:ring-gold"
              style={{
                background: "rgba(245,240,234,0.06)",
                border: "1px solid rgba(245,240,234,0.12)",
              }}
            />
            <input
              type="tel"
              placeholder="Tu WhatsApp"
              className="h-[52px] px-5 rounded-lg text-sm text-text-on-dark placeholder:text-text-on-dark/30 focus:outline-none focus:ring-1 focus:ring-gold"
              style={{
                background: "rgba(245,240,234,0.06)",
                border: "1px solid rgba(245,240,234,0.12)",
              }}
            />
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-[52px] px-8 rounded-lg bg-gold text-gold-dark font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              Agendar Ahora
            </a>
          </form>

          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-5">
            {["Sin costo", "Sin cita previa", "Resultados al momento"].map(
              (text) => (
                <span
                  key={text}
                  className="text-xs text-text-on-dark/40 flex items-center gap-1.5"
                >
                  <span className="text-gold">✓</span> {text}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
