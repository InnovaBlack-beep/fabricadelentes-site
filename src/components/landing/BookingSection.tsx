export function BookingSection() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-10 bg-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left content */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Examen Gratuito
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
            Tu visión merece lo mejor.
          </h2>
          <p className="text-sm md:text-base text-white/50 mt-5 leading-relaxed max-w-md">
            Agenda tu examen de la vista sin costo. Optometristas certificados,
            equipo de última generación, y resultados inmediatos.
          </p>
        </div>

        {/* Right card */}
        <div className="rounded-lg p-8 md:p-10 border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold text-white mb-6">
            Agenda tu examen
          </h3>
          <form
            action="https://wa.me/523314257226"
            target="_blank"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              className="h-[52px] px-5 rounded-lg text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 focus:outline-none focus:border-accent"
            />
            <input
              type="tel"
              placeholder="Tu WhatsApp"
              className="h-[52px] px-5 rounded-lg text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 focus:outline-none focus:border-accent"
            />
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-[52px] px-8 rounded-full bg-accent text-dark font-semibold text-sm hover:bg-accent/85 transition-colors"
            >
              Agendar Ahora
            </a>
          </form>

          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-5">
            {["Sin costo", "Sin cita previa", "Resultados al momento"].map(
              (text) => (
                <span
                  key={text}
                  className="text-xs text-white/40 flex items-center gap-1.5"
                >
                  <span className="text-accent-secondary">✓</span> {text}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
