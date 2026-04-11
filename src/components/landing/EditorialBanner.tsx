import Image from "next/image";

export function EditorialBanner() {
  return (
    <section className="relative h-[400px] md:h-[520px] overflow-hidden">
      <Image
        src="/images/editorial.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">
          LA EXPERIENCIA
        </span>
        <h2 className="text-3xl md:text-5xl text-white leading-tight">
          <span className="font-light">Elige. Prueba.</span>
          <br />
          <span className="font-bold">Estrena.</span>
        </h2>
        <p className="text-sm text-white/60 max-w-lg mx-auto leading-relaxed mt-6 mb-8">
          Visítanos, elige tu armazón favorito, te hacemos el examen sin costo y en menos de una hora estrenas tus lentes nuevos. Así de simple.
        </p>
        <a
          href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20visita"
          className="inline-flex items-center justify-center bg-white text-fg rounded-full px-8 h-12 text-xs uppercase tracking-[0.1em] font-semibold hover:bg-white/90 transition-colors mb-4"
        >
          AGENDAR VISITA
        </a>
        <span className="text-xs text-white/40">
          Zona Minerva · Guadalajara · Lun–Sáb 10:00–20:00
        </span>
      </div>
    </section>
  );
}
