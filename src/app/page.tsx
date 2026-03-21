import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.png"
            alt="Mujer con lentes en hora dorada"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="animate-fade-up font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[1.02] mb-6 tracking-tight">
              Tu optica con laboratorio propio en Guadalajara
            </h1>

            <p className="animate-fade-up delay-100 text-lg md:text-xl text-white/70 max-w-lg leading-relaxed mb-10">
              Fabricamos tus lentes aqui. Sin intermediarios, sin esperas. Entrega express el mismo dia.
            </p>

            <div className="animate-fade-up delay-200">
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm font-semibold tracking-wide uppercase hover:bg-off-white transition-colors duration-300"
              >
                Agenda tu cita
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE STRIP ─── */}
      <section className="border-y border-border bg-white overflow-hidden">
        <div className="py-4">
          <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                {[
                  "Laboratorio propio",
                  "Entrega express",
                  "Marcas originales",
                  "+2,000 clientes",
                  "Laboratorio propio",
                  "Entrega express",
                  "Marcas originales",
                  "+2,000 clientes",
                ].map((text, j) => (
                  <span key={j} className="flex items-center text-sm font-medium text-muted tracking-wide uppercase mx-8">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-4" />
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              Encuentra tus lentes <span className="text-gold italic">ideales</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                title: "Lentes de Contacto",
                href: "/lentes-de-contacto",
                image: "/images/hero-1.png",
              },
              {
                title: "Lentes Graduados",
                href: "/lentes-graduados",
                image: "/images/hero-2.png",
              },
              {
                title: "Lentes de Sol",
                href: "/lentes-de-sol",
                image: "/images/hero-3.png",
              },
            ].map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-white mb-3">
                    {product.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                    Explorar
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / LAB ─── */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/hero-1.png"
                alt="Laboratorio optico Fabrica de Lentes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-6">
                Nuestro laboratorio
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.05]">
                Donde cada lente <span className="text-gold italic">cobra vida</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed mb-12">
                <p>
                  A diferencia de la mayoria de opticas que envian tus lentes a
                  otro estado para fabricarlos, nosotros tenemos nuestro propio
                  laboratorio aqui en Guadalajara.
                </p>
                <p>
                  Controlamos cada paso del proceso: desde la graduacion hasta
                  el acabado final. Lentes de mejor calidad, en menos tiempo
                  y a un precio mas justo.
                </p>
              </div>

              <div className="flex items-center gap-8 md:gap-12 mb-12 text-foreground">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">&lt; 24h</p>
                  <p className="text-sm text-muted mt-1">entrega</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">100%</p>
                  <p className="text-sm text-muted mt-1">calidad</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">+10 a.</p>
                  <p className="text-sm text-muted mt-1">experiencia</p>
                </div>
              </div>

              <Link
                href="/laboratorio"
                className="inline-flex items-center gap-3 text-sm font-semibold text-foreground tracking-wide uppercase border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Conoce el laboratorio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
              Lo que dicen nuestros <span className="text-gold italic">clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Maria Garcia",
                text: "Llegue por urgencia porque se me rompieron mis lentes y me los hicieron el mismo dia. Excelente servicio y muy buen precio.",
              },
              {
                name: "Roberto Medina",
                text: "Llevamos el convenio de la empresa aqui desde hace 2 anos. Mas de 150 empleados atendidos y todos contentos. Super recomendados.",
              },
              {
                name: "Ana Luisa Torres",
                text: "Mis lentes de contacto siempre los pido aqui. Tienen todas las marcas y el precio es mejor que en las cadenas grandes.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-off-white p-8 md:p-10"
              >
                <div className="font-[family-name:var(--font-display)] text-5xl text-gold/30 leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-foreground/80 leading-relaxed mb-8 text-lg font-[family-name:var(--font-display)] italic">
                  {testimonial.text}
                </p>
                <p className="text-sm font-semibold text-foreground tracking-wide">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── B2B ─── */}
      <section className="py-20 md:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-6">
              Para empresas
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]">
              Lleva Fabrica de Lentes <span className="text-gold italic">a tu empresa</span>
            </h2>
            <p className="text-white/50 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Convenios corporativos con examen de la vista gratis, descuentos por volumen y servicio en tus instalaciones.
            </p>
            <Link
              href="/empresas"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm font-semibold tracking-wide uppercase hover:bg-off-white transition-colors duration-300"
            >
              Solicitar convenio
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 md:py-40 bg-off-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-[1.05]">
            Listo para ver <span className="text-gold italic">mejor?</span>
          </h2>
          <p className="text-muted text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Cotiza tus lentes en menos de 2 minutos. Escribenos por WhatsApp o visitanos en Guadalajara.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-semibold tracking-wide uppercase hover:bg-dark transition-colors duration-300"
          >
            Escribenos por WhatsApp
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
