import Image from "next/image";

export function StoreSection() {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero-3.png"
        alt="Sucursal Fábrica de Lentes"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Nuestra Óptica · Guadalajara
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 leading-[1.1]">
          Hecho en GDL.
          <br />
          <span className="font-bold">Entregado hoy.</span>
        </h2>
        <p className="text-sm md:text-base text-white/65 mt-5 max-w-lg leading-relaxed">
          Nuestro laboratorio óptico propio nos permite fabricar tus lentes el
          mismo día. Sin intermediarios, sin esperas. Calidad garantizada.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="/laboratorio"
            className="inline-flex items-center h-12 px-7 rounded-full bg-accent text-dark text-sm font-semibold hover:bg-accent/85 transition-colors"
          >
            Conocer el Laboratorio
          </a>
          <a
            href="/contacto"
            className="inline-flex items-center h-12 px-7 rounded-full text-white text-sm font-medium border border-white/30 hover:bg-white/10 transition-colors"
          >
            Visítanos
          </a>
        </div>

        {/* Store info chips */}
        <div className="flex flex-wrap gap-4 mt-10">
          {[
            { label: "Zona Minerva", icon: "📍" },
            { label: "Lun – Sáb · 10:00 – 20:00", icon: "🕐" },
            { label: "33 1425 7226", icon: "📱" },
          ].map((info) => (
            <span
              key={info.label}
              className="text-xs text-white/50 flex items-center gap-2"
            >
              <span>{info.icon}</span>
              {info.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
