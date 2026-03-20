import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy grain-overlay">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.png"
            alt="Mujer con lentes ópticos en hora dorada"
            fill
            className="object-cover object-top opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/10 border border-amber/20 text-amber text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                Laboratorio propio en Guadalajara
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Tus lentes,{" "}
              <span className="text-amber italic">listos hoy.</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-8">
              Somos la óptica que fabrica tus lentes en Guadalajara. Sin intermediarios,
              sin esperas. Graduados, de contacto y de sol — con entrega express el mismo día.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300 hover:shadow-lg hover:shadow-amber/20 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotiza tus lentes por WhatsApp
              </a>
              <Link
                href="/lentes-de-contacto"
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Ver lentes de contacto
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Hero image - desktop */}
          <div className="hidden lg:block animate-slide-right delay-400">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber/10 rounded-3xl blur-2xl" />
              <Image
                src="/images/hero-3.png"
                alt="Joven con lentes ópticos"
                width={520}
                height={520}
                className="relative rounded-2xl object-cover shadow-2xl"
                priority
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3" style={{ animation: "float 3s ease-in-out infinite" }}>
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-amber"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Entrega express</p>
                  <p className="text-xs text-text-muted">Mismo día disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-700">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-warm-white border-b border-warm-gray">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "M12 15a3 3 0 100-6 3 3 0 000 6z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", label: "Laboratorio propio" },
              { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Entrega express" },
              { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100 8 4 4 0 000-8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75", label: "+2,000 clientes" },
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Marcas originales" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <div className="w-9 h-9 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px] text-amber">
                    <path d={item.icon} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-amber text-sm font-semibold tracking-wider uppercase">Nuestros productos</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-navy mt-3 mb-4">
              Todo lo que necesitas para <span className="text-amber italic">ver mejor</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Desde lentes de contacto hasta graduados con la más alta tecnología.
              Todo fabricado y verificado en nuestro laboratorio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lentes de Contacto",
                description: "Todas las marcas: Acuvue, Bausch & Lomb, CooperVision. Diarios, mensuales y especializados.",
                href: "/lentes-de-contacto",
                emoji: "\uD83D\uDC41\uFE0F",
                accent: "from-blue-500/10 to-blue-600/5",
              },
              {
                title: "Lentes Graduados",
                description: "Monofocales, bifocales y progresivos. Antirreflex, transición y blue block.",
                href: "/lentes-graduados",
                emoji: "\uD83D\uDC53",
                accent: "from-amber/10 to-amber/5",
              },
              {
                title: "Lentes de Sol",
                description: "Ray-Ban, Meta y más. Originales con garantía. También graduados de sol.",
                href: "/lentes-de-sol",
                emoji: "\uD83D\uDD76\uFE0F",
                accent: "from-orange-500/10 to-orange-600/5",
              },
              {
                title: "Examen de la Vista",
                description: "Revisión profesional completa. Agenda tu cita y recibe tu graduación el mismo día.",
                href: "/lentes-graduados",
                emoji: "\uD83D\uDD2C",
                accent: "from-green-500/10 to-green-600/5",
              },
            ].map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group relative bg-white rounded-2xl p-6 border border-warm-gray hover:border-amber/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber/5 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative">
                  <span className="text-3xl mb-4 block">{product.emoji}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy mb-2">{product.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{product.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-amber group-hover:gap-2 transition-all duration-200">
                    Ver más
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 md:py-28 bg-navy relative grain-overlay overflow-hidden">
        <div className="absolute top-20 -right-32 w-64 h-64 rounded-full bg-amber/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-amber/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-amber text-sm font-semibold tracking-wider uppercase">Por qué elegirnos</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-3">
              No somos una cadena. <span className="text-amber italic">Somos tu óptica.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fabricamos en Guadalajara",
                description: "Nuestro laboratorio propio nos permite controlar la calidad de cada lente y reducir tiempos de entrega drásticamente.",
                number: "01",
              },
              {
                title: "Entrega el mismo día",
                description: "¿Urgencia? Muchos de nuestros lentes los fabricamos y entregamos el mismo día. Sin esperar semanas.",
                number: "02",
              },
              {
                title: "Trato personal, sin presión",
                description: "Aquí no hay vendedores con comisión. Te asesoramos para que elijas lo que realmente necesitas, sin presión.",
                number: "03",
              },
            ].map((item) => (
              <div key={item.number} className="group relative">
                <div className="absolute -top-3 -left-2 font-[family-name:var(--font-display)] text-6xl font-bold text-amber/10 group-hover:text-amber/20 transition-colors duration-300">
                  {item.number}
                </div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LAB SECTION ─── */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-amber/5 rounded-3xl -rotate-2" />
              <Image
                src="/images/hero-1.png"
                alt="Laboratorio óptico Fábrica de Lentes"
                width={600}
                height={600}
                className="relative rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div>
              <span className="text-amber text-sm font-semibold tracking-wider uppercase">Nuestro laboratorio</span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                Donde cada lente <span className="text-amber italic">cobra vida</span>
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  A diferencia de la mayoría de ópticas que envían tus lentes a otro estado para fabricarlos,
                  nosotros tenemos nuestro propio laboratorio aquí en Guadalajara.
                </p>
                <p>
                  Esto significa que controlamos cada paso del proceso: desde la graduación hasta el acabado final.
                  El resultado son lentes de mejor calidad, en menos tiempo y a un precio más justo.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "< 24h", label: "Tiempo promedio" },
                  { value: "100%", label: "Control de calidad" },
                  { value: "Mismo día", label: "Entrega express" },
                  { value: "+10 años", label: "De experiencia" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 border border-warm-gray">
                    <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-amber">{stat.value}</p>
                    <p className="text-sm text-text-muted mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/laboratorio"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-navy text-white font-medium rounded-full hover:bg-navy-light transition-colors duration-200"
              >
                Conoce nuestro laboratorio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 bg-warm-gray/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-amber text-sm font-semibold tracking-wider uppercase">Testimonios</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-navy mt-3">
              Lo que dicen <span className="text-amber italic">nuestros clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "María García",
                text: "Llegué por urgencia porque se me rompieron mis lentes y me los hicieron el mismo día. Excelente servicio y muy buen precio.",
                rating: 5,
              },
              {
                name: "Roberto Medina",
                text: "Llevamos el convenio de la empresa aquí desde hace 2 años. Más de 150 empleados atendidos y todos contentos. Súper recomendados.",
                rating: 5,
              },
              {
                name: "Ana Luisa Torres",
                text: "Mis lentes de contacto siempre los pido aquí. Tienen todas las marcas y el precio es mejor que en las cadenas grandes.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-warm-gray hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                    <span className="text-amber font-semibold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-muted">Cliente verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── B2B BANNER ─── */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-navy rounded-3xl overflow-hidden grain-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-amber/10 via-transparent to-transparent" />
            <div className="relative z-10 px-8 md:px-14 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-amber text-sm font-semibold tracking-wider uppercase">Para empresas</span>
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mt-2 mb-3">
                  Lleva Fábrica de Lentes <span className="text-amber italic">a tu empresa</span>
                </h2>
                <p className="text-white/50 max-w-lg">
                  Convenios corporativos con examen de la vista gratis, descuentos por volumen y servicio en tus instalaciones.
                </p>
              </div>
              <Link
                href="/empresas"
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300 hover:shadow-lg hover:shadow-amber/20"
              >
                Solicitar convenio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 md:py-28 bg-warm-gray/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-navy mb-4">
            ¿Listo para <span className="text-amber italic">ver mejor?</span>
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Cotiza tus lentes en menos de 2 minutos. Escríbenos por WhatsApp
            o visítanos en nuestra óptica en Guadalajara.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all duration-300"
            >
              Visítanos en la óptica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
