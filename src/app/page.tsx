import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.png"
            alt="Mujer con lentes en hora dorada"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 max-w-md rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-3">
              Tus lentes, listos hoy
            </h1>
            <p className="text-[#333333] text-base mb-6 leading-relaxed">
              Optica con laboratorio propio en Guadalajara. Fabricamos tus lentes sin intermediarios.
            </p>
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY GRID ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] text-center mb-12">
            Nuestros Productos
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lentes Graduados",
                desc: "Monofocales, progresivos, blue block y mas. Fabricacion propia.",
                href: "/lentes-graduados",
                image: "/images/hero-2.png",
              },
              {
                title: "Lentes de Contacto",
                desc: "Acuvue, Bausch & Lomb, CooperVision. Todas las marcas.",
                href: "/lentes-de-contacto",
                image: "/images/hero-1.png",
              },
              {
                title: "Lentes de Sol",
                desc: "Ray-Ban, Meta, Oakley. 100% originales con garantia.",
                href: "/lentes-de-sol",
                image: "/images/hero-3.png",
              },
              {
                title: "Examen de la Vista",
                desc: "Revision profesional completa. Sin costo al comprar tus lentes.",
                href: "/lentes-graduados",
                image: "/images/hero-1.png",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666666] mb-3 leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="text-sm font-semibold text-[#0057FF] group-hover:underline">
                    Ver mas &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] text-center mb-12">
            Por que Fabrica de Lentes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Laboratorio propio",
                desc: "Fabricamos tus lentes aqui en Guadalajara. Control total de calidad sin intermediarios.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.455 1.455A2.25 2.25 0 003 17.318V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-.682a2.25 2.25 0 00-.545-1.363L19 14.5m-14 0h14" />
                  </svg>
                ),
              },
              {
                title: "Entrega el mismo dia",
                desc: "Tus lentes listos en horas, no semanas. Entrega express gracias a fabricacion local.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Atencion personalizada",
                desc: "Te asesoramos uno a uno para encontrar los lentes perfectos para ti.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-white border border-[#e0e0e0] rounded-lg flex items-center justify-center mx-auto mb-5 text-[#0057FF]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LAB SECTION ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-1.png"
                alt="Laboratorio optico Fabrica de Lentes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-4">
                Nuestro Laboratorio
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                A diferencia de la mayoria de opticas que envian tus lentes a otro estado para fabricarlos, nosotros tenemos nuestro propio laboratorio aqui en Guadalajara.
              </p>
              <p className="text-[#333333] leading-relaxed mb-6">
                Controlamos cada paso del proceso: desde la graduacion hasta el acabado final. Lentes de mejor calidad, en menos tiempo y a un precio mas justo.
              </p>
              <Link
                href="/laboratorio"
                className="text-[#0057FF] font-semibold text-sm hover:underline"
              >
                Conocer mas &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── B2B ─── */}
      <section className="py-20 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-4">
              Convenios Empresariales
            </h2>
            <p className="text-[#666666] leading-relaxed mb-8">
              Llevamos el servicio optico a tu empresa. Examen de la vista gratis, descuentos por volumen y entrega directa en tus instalaciones.
            </p>
            <Link
              href="/empresas"
              className="inline-block px-6 py-3 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
            >
              Solicitar Convenio
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e0e0e0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-lg font-semibold text-[#1a1a1a] text-center mb-8">
            Marcas que manejamos
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-[#666666] font-medium">
            {["Acuvue", "Ray-Ban", "Bausch & Lomb", "CooperVision", "Alcon", "Oakley", "Vogue", "Meta"].map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-24 bg-[#0057FF]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] mb-3">
            Necesitas lentes nuevos?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-md mx-auto">
            Cotiza en minutos por WhatsApp. Te respondemos al instante.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-white text-[#0057FF] text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
