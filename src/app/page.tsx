import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── SECTION 1: HERO (Ben & Frank style) ─── */}
      <section className="relative min-h-[600px] lg:min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-2.png"
          alt="Mujer con lentes elegantes"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative z-10 text-white px-8 lg:px-16 max-w-xl">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-5">
            &Oacute;PTICA CON LABORATORIO PROPIO
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-4">
            Tus lentes,
            <br />
            hechos aqu&iacute;.
          </h1>
          <p className="text-lg text-white/70 mt-4 mb-8">
            Entrega express el mismo d&iacute;a en Guadalajara
          </p>
          <div className="flex items-center gap-3 flex-wrap mt-8">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0057A8] text-white rounded-full px-8 py-3.5 text-xs tracking-widest font-semibold uppercase hover:bg-[#003F7A] transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/lentes-graduados"
              className="border border-white/40 text-white rounded-full px-8 py-3.5 text-xs tracking-widest font-semibold uppercase hover:bg-white hover:text-[#111] transition-colors"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BENEFITS BAR (LensCrafters style) ─── */}
      <section className="bg-[#1A2A3A] py-5">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6 text-white/80">
                    <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.455 1.455A2.25 2.25 0 003 17.318V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-.682a2.25 2.25 0 00-.545-1.363L19 14.5m-14 0h14" />
                  </svg>
                ),
                title: "Laboratorio propio",
                subtitle: "Fabricamos en GDL",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6 text-white/80">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Entrega mismo d\u00eda",
                subtitle: "Lentes listos en horas",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6 text-white/80">
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Examen de la vista",
                subtitle: "Optometrista certificado",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6 text-white/80">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                title: "Vis\u00edtanos en GDL",
                subtitle: "Zona Metropolitana",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 px-5 py-2">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <p className="text-white/90 text-sm font-medium">{item.title}</p>
                  <p className="text-white/55 text-xs">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: CATEGORY CARDS (Ben & Frank style) ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#111] font-normal text-center mb-10">
            Encuentra tus lentes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: "/images/hero-1.png", title: "Lentes Graduados", href: "/lentes-graduados" },
              { image: "/images/hero-2.png", title: "Lentes de Sol", href: "/lentes-de-sol" },
              { image: "/images/hero-3.png", title: "Lentes de Contacto", href: "/lentes-de-contacto" },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden block"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-1">{card.title}</h3>
                  <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    Explorar &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: BOOK EXAM CTA (LensCrafters style) ─── */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#111] font-normal mb-2">
              Agenda tu examen de la vista
            </h2>
            <p className="text-[#777] text-sm">
              Optometrista certificado. Sin costo al comprar tus lentes.
            </p>
          </div>
          <form className="flex w-full md:w-auto shrink-0">
            <input
              type="text"
              placeholder="Tu nombre o tel&eacute;fono"
              className="px-5 py-3 border border-[#ddd] border-r-0 rounded-l-full text-sm text-[#222] placeholder:text-[#999] w-full md:w-64 focus:outline-none focus:border-[#0057A8]"
            />
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0057A8] text-white text-[12px] tracking-[0.12em] uppercase font-semibold rounded-r-full hover:bg-[#003F7A] transition-colors whitespace-nowrap"
            >
              Agendar
            </a>
          </form>
        </div>
      </section>

      {/* ─── SECTION 5: BEST SELLERS GRID (LensCrafters + B&F sizing) ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#111] font-normal">
                Los m&aacute;s pedidos
              </h2>
            </div>
            <div className="flex items-center gap-6">
              {["GRADUADOS", "SOL", "CONTACTO"].map((tab, i) => (
                <span
                  key={tab}
                  className={`text-[12px] tracking-[0.05em] cursor-default ${
                    i === 0 ? "text-[#111] font-semibold" : "text-[#999]"
                  }`}
                >
                  {tab}
                </span>
              ))}
              <Link
                href="/lentes-graduados"
                className="text-[12px] text-[#0057A8] font-medium hover:underline"
              >
                Ver todo &gt;
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                brand: "Ray-Ban",
                model: "Wayfarer Classic",
                price: "$2,890",
                badge: "Bestseller",
                image: "/images/hero-3.png",
                href: "/lentes-graduados",
              },
              {
                brand: "Essilor",
                model: "Progresivo Varilux",
                price: "$4,500",
                badge: "Premium",
                image: "/images/hero-2.png",
                href: "/lentes-graduados",
              },
              {
                brand: "Oakley",
                model: "Holbrook OO9102",
                price: "$3,250",
                badge: null,
                image: "/images/hero-1.png",
                href: "/lentes-de-sol",
              },
              {
                brand: "Acuvue",
                model: "Oasys 1-Day",
                price: "$650",
                badge: "Nuevo",
                image: "/images/hero-1.png",
                href: "/lentes-de-contacto",
              },
            ].map((item) => (
              <Link
                key={item.model}
                href={item.href}
                className="group bg-[#F2F2F2] rounded-lg p-5 hover:bg-[#EAEAEA] hover:scale-[1.01] transition-all"
              >
                {item.badge && (
                  <span className="inline-block bg-[#0057A8] text-white text-[10px] tracking-wide uppercase font-semibold px-2.5 py-1 rounded-full mb-3">
                    {item.badge}
                  </span>
                )}
                <div className="relative aspect-[4/3] overflow-hidden rounded mb-4">
                  <Image
                    src={item.image}
                    alt={item.model}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <p className="text-[11px] text-[#777] uppercase tracking-wide">{item.brand}</p>
                <p className="text-[15px] text-[#111] font-medium mb-1">{item.model}</p>
                <p className="text-[14px] text-[#111] font-bold mb-2">{item.price}</p>
                <span className="text-[12px] text-[#0057A8] font-medium group-hover:underline">
                  Cotizar &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: EDITORIAL BANNER (Ben & Frank style) ─── */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-3.png"
          alt="Laboratorio de lentes en Guadalajara"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p className="text-xs tracking-widest text-white/60 uppercase mb-4">
            NUESTRO LABORATORIO
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl text-white font-bold mb-4">
            Donde cada lente cobra vida
          </h2>
          <p className="text-white/70 text-lg mb-6">
            Fabricamos tus lentes aqu&iacute; en Guadalajara. Sin intermediarios.
          </p>
          <Link
            href="/laboratorio"
            className="text-white underline text-sm font-medium hover:text-white/80 transition-colors"
          >
            Conocer el laboratorio &rarr;
          </Link>
        </div>
      </section>

      {/* ─── SECTION 7: HOW IT WORKS (LensCrafters style) ─── */}
      <section className="bg-[#EEF4FB] py-16">
        <div className="max-w-[1280px] mx-auto px-10">
          <p className="font-[family-name:var(--font-playfair)] text-[14px] uppercase tracking-[0.12em] text-[#111] text-center mb-12">
            PEDIR TUS LENTES ES AS&Iacute; DE F&Aacute;CIL
          </p>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Dashed connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#0057A8]/20" />

            {[
              {
                num: "1",
                title: "Llega a tu \u00f3ptica",
                desc: "Vis\u00edtanos en Guadalajara o cont\u00e1ctanos por WhatsApp.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0057A8]">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
              {
                num: "2",
                title: "Examen de la vista",
                desc: "Te revisamos con nuestro optometrista certificado.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0057A8]">
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                num: "3",
                title: "Elige tus lentes",
                desc: "Selecciona armaz\u00f3n, tipo de lente y tratamientos.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0057A8]">
                    <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
              },
              {
                num: "4",
                title: "Recibe tus lentes",
                desc: "Listos el mismo d\u00eda. Fabricados en nuestro laboratorio.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0057A8]">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((step) => (
              <div key={step.num} className="text-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-white border border-[#ddd] shadow-sm flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <p className="text-sm mb-1">
                  <span className="text-[#999]">{step.num}</span>
                  <span className="text-[#999] mx-1">|</span>
                  <span className="font-bold text-[#111]">{step.title}</span>
                </p>
                <p className="text-[13px] text-[#777] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/lentes-graduados"
              className="bg-[#111] text-white rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#333] transition-colors"
            >
              Ver Productos
            </Link>
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111] text-white rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#333] transition-colors"
            >
              Agendar Examen
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: B2B BANNER ─── */}
      <section className="bg-[#111] py-16">
        <div className="max-w-[1280px] mx-auto px-10 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white font-normal mb-4">
            Convenios Empresariales
          </h2>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
            Ofrecemos descuentos y beneficios exclusivos para empresas. Lentes graduados, examen de la vista y atenci&oacute;n personalizada para tus colaboradores.
          </p>
          <Link
            href="/empresas"
            className="inline-block border border-white/40 text-white rounded-full px-8 py-3.5 text-xs tracking-widest font-semibold uppercase hover:bg-white hover:text-[#111] transition-colors"
          >
            Solicitar Convenio
          </Link>
        </div>
      </section>
    </>
  );
}
