import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[500px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.png"
            alt="Mujer con lentes elegantes"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a3e]/70 via-[#2d1b69]/50 to-[#4a2c8a]/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <p className="text-[12px] tracking-[0.3em] uppercase mb-4 text-white/80">
            &mdash; &Oacute;ptica con Laboratorio Propio &mdash;
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.15em] font-normal leading-tight mb-8">
            Tus Lentes Listos Hoy
            <br />
            Con Entrega Express
          </h1>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/lentes-graduados"
              className="px-8 py-3 border border-white text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#1a0a3e] transition-all"
            >
              Ver Productos
            </Link>
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#1a0a3e] transition-all"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="border-t border-b border-[#e5e5e5] bg-white">
        <div className="max-w-[1280px] mx-auto px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6">
                  <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.455 1.455A2.25 2.25 0 003 17.318V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-.682a2.25 2.25 0 00-.545-1.363L19 14.5m-14 0h14" />
                </svg>
              ),
              title: "Laboratorio propio",
              desc: "en Guadalajara",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Aceptamos la mayoría",
              desc: "de recetas",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Entrega express",
              desc: "mismo día",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6">
                  <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
                </svg>
              ),
              title: "Compra en línea",
              desc: "recoge en tienda",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="text-[#666] shrink-0">{item.icon}</div>
              <div>
                <p className="text-[12px] text-[#1a1a1a] font-medium leading-tight">{item.title}</p>
                <p className="text-[12px] text-[#666] leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEST SELLERS / PRODUCTS ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] text-center font-normal mb-8">
            Nuestros Productos
          </h2>

          {/* Tab bar */}
          <div className="flex items-center justify-center gap-8 mb-10 border-b border-[#e5e5e5] pb-3">
            {["GRADUADOS", "DE SOL", "DE CONTACTO", "EXAMEN"].map((tab, i) => (
              <span
                key={tab}
                className={`text-[12px] tracking-[0.1em] cursor-default pb-3 ${
                  i === 0
                    ? "text-[#1a1a1a] border-b-2 border-[#2d1b69] font-medium -mb-[13px]"
                    : "text-[#666] -mb-[13px]"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Product cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Lentes Graduados",
                brand: "Monofocales y Progresivos",
                desc: "Fabricación propia. Desde monofocales hasta progresivos de alta gama.",
                href: "/lentes-graduados",
                image: "/images/hero-2.png",
              },
              {
                title: "Lentes de Contacto",
                brand: "Acuvue, Bausch & Lomb",
                desc: "Diarios, mensuales, para astigmatismo. Todas las marcas.",
                href: "/lentes-de-contacto",
                image: "/images/hero-1.png",
              },
              {
                title: "Lentes de Sol",
                brand: "Ray-Ban, Meta, Oakley",
                desc: "100% originales con garantía. También graduados de sol.",
                href: "/lentes-de-sol",
                image: "/images/hero-3.png",
              },
              {
                title: "Examen de la Vista",
                brand: "Servicio Profesional",
                desc: "Revisión completa. Sin costo al comprar tus lentes.",
                href: "/lentes-graduados",
                image: "/images/hero-1.png",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-[#f7f7f7]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <p className="text-[13px] font-semibold text-[#1a1a1a] mb-0.5">{item.brand}</p>
                <p className="text-[13px] text-[#666] mb-2">{item.desc}</p>
                <span className="text-[12px] text-[#2d1b69] font-medium tracking-[0.05em] uppercase group-hover:underline">
                  Cotizar
                </span>
              </Link>
            ))}
          </div>

          <div className="text-right mt-8">
            <Link
              href="/lentes-graduados"
              className="text-[12px] text-[#2d1b69] tracking-[0.1em] uppercase font-medium hover:underline"
            >
              Ver todos &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EXPLORE LAB ─── */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] text-center font-normal mb-12">
            Explora Nuestro Laboratorio
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fabricación Propia",
                desc: "Cortamos, graduamos y tratamos tus lentes sin intermediarios. Control total de calidad.",
                image: "/images/hero-1.png",
                href: "/laboratorio",
              },
              {
                title: "Entrega Express",
                desc: "Tus lentes listos en horas, no semanas. Fabricación local en Guadalajara.",
                image: "/images/hero-2.png",
                href: "/laboratorio",
              },
              {
                title: "Tecnología de Punta",
                desc: "Equipos de última generación para lentes de la más alta calidad y precisión.",
                image: "/images/hero-3.png",
                href: "/laboratorio",
              },
            ].map((card) => (
              <Link key={card.title} href={card.href} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-[#f7f7f7]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-1">{card.title}</h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-2">{card.desc}</p>
                <span className="text-[12px] text-[#2d1b69] font-medium tracking-[0.05em] uppercase group-hover:underline">
                  Conocer más
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS STEPS ─── */}
      <section className="py-16 md:py-20 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] text-center font-normal mb-12">
            Personaliza Tus Lentes
            <br className="md:hidden" />
            {" "}Nunca Fue Tan Fácil
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {[
              { num: "1", title: "Elige tu armazón", desc: "Explora nuestra colección o trae el tuyo. Te asesoramos para encontrar el ideal." },
              { num: "2", title: "Selecciona tus lentes", desc: "Monofocales, progresivos, transición, blue block. Tú decides." },
              { num: "3", title: "Personaliza", desc: "Agrega tratamientos: antirreflex, filtro UV, hidrofóbico y más." },
              { num: "4", title: "Recibe", desc: "Entrega el mismo día o al siguiente. En tienda o a domicilio." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 border border-[#2d1b69] text-[#2d1b69] flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                  {step.num}
                </div>
                <h3 className="text-[13px] font-semibold text-[#1a1a1a] uppercase tracking-[0.05em] mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/lentes-graduados"
              className="px-8 py-3 border border-[#2d1b69] text-[#2d1b69] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#2d1b69] hover:text-white transition-all"
            >
              Ver Productos
            </Link>
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#2d1b69] text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#1a0a3e] transition-all"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section className="py-14 md:py-16 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-lg uppercase tracking-[0.15em] text-[#1a1a1a] text-center font-normal mb-8">
            Marcas Que Manejamos
          </h2>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-[13px] text-[#666] tracking-[0.05em]">
            {["Acuvue", "Ray-Ban", "Bausch & Lomb", "CooperVision", "Alcon", "Oakley", "Vogue", "Meta"].map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 md:py-20 bg-[#2d1b69]">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-white font-normal mb-4">
            Necesitas Lentes Nuevos?
          </h2>
          <p className="text-white/70 text-[14px] mb-8 max-w-md mx-auto">
            Cotiza en minutos por WhatsApp. Te respondemos al instante.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#2d1b69] transition-all"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
