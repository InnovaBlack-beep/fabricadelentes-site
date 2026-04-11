import Image from "next/image";

export function EditorialBanner() {
  return (
    <section className="relative h-[450px] md:h-[600px] overflow-hidden group">
      <Image
        src="/images/editorial.jpg"
        alt="Elige, prueba y estrena tus lentes nuevos en Fábrica de Lentes Guadalajara — óptica con laboratorio propio"
        fill
        className="object-cover transition-transform duration-[8000ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 border-b border-white/20 pb-2">
          LA EXPERIENCIA
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
          <span className="font-extralight">Elige. Prueba.</span>
          <br />
          <span className="font-bold">Estrena.</span>
        </h2>
        <p className="text-sm md:text-base text-white/50 max-w-lg mx-auto leading-relaxed mt-8 mb-10">
          Visítanos, elige tu armazón favorito, te hacemos el examen sin costo y en menos de una hora estrenas tus lentes nuevos. Así de simple.
        </p>
        <a
          href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20visita"
          className="inline-flex items-center justify-center bg-white text-fg rounded-full px-10 h-14 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-accent hover:text-dark transition-all duration-300 mb-5"
        >
          AGENDAR VISITA
        </a>
        <span className="text-xs text-white/30 tracking-widest">
          ZONA MINERVA · GUADALAJARA · LUN–SÁB 10:00–20:00
        </span>
      </div>
    </section>
  );
}
