import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── SECTION 1: HeroEditorial ─── */}
      <section className="h-[460px] lg:h-[500px] bg-[#C4B0A8] relative overflow-hidden flex">
        {/* Left side: text */}
        <div className="relative z-10 w-full lg:w-[40%] flex items-center pl-8 lg:pl-12 pr-6">
          <div>
            <h1
              className="text-[48px] lg:text-[60px] font-bold leading-[1.05] text-[#1A1008]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 700 }}
            >
              Aqu&iacute; se fabrican
              <br />
              tus lentes.
            </h1>
            <p className="text-[13px] text-[rgba(26,16,8,0.65)] max-w-[280px] mt-4 leading-relaxed" style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
              Laboratorio &oacute;ptico propio en Guadalajara. Examen de la vista gratis. Lentes listos en 1 hora.
            </p>
          </div>
        </div>

        {/* Right side: image */}
        <div className="hidden lg:block w-[60%] relative">
          <Image
            src="/images/hero-2.png"
            alt="Mujer con lentes elegantes"
            fill
            className="object-cover"
            priority
            sizes="60vw"
          />
          {/* Gradient blend into bg color */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C4B0A8] via-[#C4B0A8]/40 to-transparent w-[40%]" />
        </div>

        {/* Mobile background image */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src="/images/hero-2.png"
            alt="Mujer con lentes elegantes"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* ─── SECTION 2: FilterBar ─── */}
      <section className="h-[52px] bg-[#FAF8F5] border-b border-[#E8E0D8] flex items-center">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-12 flex items-center gap-4 w-full overflow-x-auto">
          <span
            className="text-[15px] text-[#111110] pr-4 border-r border-[#E8E0D8] shrink-0"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
          >
            Destacados
          </span>
          {["M\u00e1s vendidos", "Entrega en 1hr", "Por forma", "Por marca", "Lentes de contacto"].map((chip) => (
            <button
              key={chip}
              className="text-[11px] border border-[#C8C0B8] rounded-full px-3.5 py-1.5 bg-[#FAF8F5] text-[#6A5A4A] hover:bg-[#F0EBE3] transition-colors whitespace-nowrap shrink-0"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              {chip}
            </button>
          ))}
        </div>
      </section>

      {/* ─── SECTION 3: ProductGrid ─── */}
      <section className="py-[60px] px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <h2
              className="text-[28px] text-[#111110]"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              Lo m&aacute;s pedido
            </h2>
            <div className="flex items-center gap-6">
              {["Armazones", "Contactos", "Sol", "Empresas"].map((tab, i) => (
                <span
                  key={tab}
                  className={`text-[11px] tracking-[0.07em] cursor-default uppercase ${
                    i === 0
                      ? "text-[#111110] font-bold border-b-[1.5px] border-[#C8A040] pb-1"
                      : "text-[#A09080]"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {tab}
                </span>
              ))}
              <Link
                href="/lentes-graduados"
                className="text-[11px] text-[#C8A040] font-medium hover:text-[#111110] transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Ver todo &rsaquo;
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                brand: "Ray-Ban",
                model: "RB2140 Classic",
                price: "$1,250",
                badges: ["M\u00e1s vendido", "Entrega 1hr"],
                image: "/images/hero-3.png",
                href: "/lentes-graduados",
              },
              {
                brand: "Armaz\u00f3n + Micas AR",
                model: "Montura completa",
                price: "$950",
                badges: ["Entrega 1hr"],
                image: "/images/hero-2.png",
                href: "/lentes-graduados",
              },
              {
                brand: "Micas AR UV+Azul",
                model: "Protecci\u00f3n total",
                price: "$459",
                badges: ["Nuevo", "Entrega 1hr"],
                image: "/images/hero-1.png",
                href: "/lentes-graduados",
              },
              {
                brand: "Acuvue Oasys",
                model: "Mensual",
                price: "$590",
                badges: ["M\u00e1s pedido"],
                image: "/images/hero-1.png",
                href: "/lentes-de-contacto",
              },
            ].map((item) => (
              <Link
                key={item.model}
                href={item.href}
                className="group bg-[#F0EBE3] rounded-[10px] p-5 hover:bg-[#E8E0D8] hover:-translate-y-0.5 transition-all"
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-[#C8A040] text-[#1A1000] text-[10px] tracking-[0.07em] uppercase font-bold px-2.5 py-0.5 rounded-full"
                      style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded mb-4">
                  <Image
                    src={item.image}
                    alt={item.model}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                {/* Info */}
                <p
                  className="text-[14px] text-[#111110]"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {item.brand}
                </p>
                <p className="text-[12px] text-[#6A5A4A]" style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
                  {item.model}
                </p>
                <p
                  className="text-[15px] text-[#111110] mt-1"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {item.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: BookingSection ─── */}
      <section className="py-[52px] px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#E8E0D8]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-[28px] text-[#111110] mb-2"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              Agenda tu examen de la vista
            </h2>
            <p className="text-[13px] text-[#A09080]" style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
              Gratuito &middot; Para ti y tu familia &middot; Guadalajara
            </p>
          </div>
          <div className="flex w-full md:w-auto shrink-0">
            <input
              type="text"
              placeholder="Tu nombre o tel&eacute;fono"
              className="px-5 py-3 border border-[#E8E0D8] border-r-0 rounded-l-full text-[13px] text-[#111110] placeholder:text-[#A09080] w-full md:w-64 bg-[#FAF8F5] focus:outline-none focus:border-[#C8A040]"
              style={{ fontFamily: "var(--font-sans)" }}
            />
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#111110] text-[#F5F0EA] text-[11px] tracking-[0.07em] uppercase font-medium rounded-r-full hover:bg-[#C8A040] hover:text-[#1A1000] transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              Agendar
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: HowItWorks ─── */}
      <section className="py-[68px] px-8 lg:px-12 bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto">
          <p
            className="text-[11px] uppercase tracking-[0.20em] text-[#6A5A4A] text-center mb-12"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
          >
            AS&Iacute; DE F&Aacute;CIL ES PEDIR TUS LENTES
          </p>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Dashed connecting line */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] border-t-[1.5px] border-dashed border-[#D0C8C0]" />

            {[
              {
                num: "1",
                title: "Llega a la tienda",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6A5A4A" strokeWidth={1.5} className="w-[22px] h-[22px]">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
              {
                num: "2",
                title: "Examen gratis",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6A5A4A" strokeWidth={1.5} className="w-[22px] h-[22px]">
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                num: "3",
                title: "Fabricamos aqu\u00ed",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6A5A4A" strokeWidth={1.5} className="w-[22px] h-[22px]">
                    <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.455 1.455A2.25 2.25 0 003 17.318V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18v-.682a2.25 2.25 0 00-.545-1.363L19 14.5m-14 0h14" />
                  </svg>
                ),
              },
              {
                num: "4",
                title: "Listos en 1 hora",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6A5A4A" strokeWidth={1.5} className="w-[22px] h-[22px]">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((step) => (
              <div key={step.num} className="text-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#D8D0C8] shadow-sm flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <p className="text-[13px] mb-1">
                  <span className="text-[#A09080]">{step.num}</span>
                  <span className="text-[#A09080] mx-1">|</span>
                  <span className="font-semibold text-[#111110]">{step.title}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/lentes-graduados"
              className="bg-[#111110] text-[#F5F0EA] rounded-full px-8 py-3.5 text-[11px] uppercase tracking-[0.07em] font-medium hover:bg-[#C8A040] hover:text-[#1A1000] transition-colors"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              Ver Productos
            </Link>
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#C8C0B8] text-[#6A5A4A] rounded-full px-8 py-3.5 text-[11px] uppercase tracking-[0.07em] font-medium hover:border-[#111110] hover:text-[#111110] transition-colors"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
            >
              Agendar Examen
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: StoreSection ─── */}
      <section className="grid lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
          <Image
            src="/images/hero-1.png"
            alt="Laboratorio \u00f3ptico en Guadalajara"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[#0F0E0D]/20" />
        </div>

        {/* Right: Content */}
        <div className="bg-[#F0EBE3] p-8 lg:p-[52px] flex flex-col justify-center">
          <p
            className="text-[10px] uppercase tracking-[0.16em] text-[#C8A040] mb-4"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            NUESTRA &Oacute;PTICA &middot; GUADALAJARA
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-[30px] text-[#111110] mb-4 leading-tight">
            <span style={{ fontWeight: 400 }}>Hecho en GDL.</span>{" "}
            <span style={{ fontWeight: 600 }}>Entregado hoy.</span>
          </h2>
          <p className="text-[13px] text-[#6A5A4A] mb-6 max-w-md leading-relaxed" style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
            Nuestro laboratorio &oacute;ptico en Guadalajara fabrica tus lentes sin intermediarios. Control total de calidad, tiempos de entrega que nadie m&aacute;s puede ofrecer, y atenci&oacute;n personalizada.
          </p>
          <Link
            href="/laboratorio"
            className="text-[12px] uppercase tracking-[0.07em] font-semibold text-[#111110] border-b border-[#C8A040] pb-0.5 hover:text-[#C8A040] transition-colors self-start"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
          >
            CONOCER EL LABORATORIO &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
