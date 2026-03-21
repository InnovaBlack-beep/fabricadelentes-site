import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-off-white overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30 md:hidden" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-20 w-full">
          <div className="max-w-2xl">
            <p className="animate-fade-up text-gold font-semibold text-sm tracking-widest uppercase mb-6">
              Laboratorio propio en Guadalajara
            </p>

            <h1 className="animate-fade-up delay-100 font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] mb-6">
              Tus lentes,{" "}
              <span className="text-gold italic">listos hoy.</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted max-w-lg leading-relaxed mb-10">
              La optica que fabrica tus lentes en Guadalajara. Sin intermediarios, sin esperas. Entrega express el mismo dia.
            </p>

            <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-foreground text-white font-semibold rounded-full hover:bg-navy transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotiza por WhatsApp
              </a>
              <Link
                href="/lentes-graduados"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-foreground transition-all duration-300"
              >
                Explorar productos
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Laboratorio propio", sub: "En Guadalajara" },
              { label: "Entrega express", sub: "Mismo dia" },
              { label: "+2,000 clientes", sub: "Satisfechos" },
              { label: "Marcas originales", sub: "Con garantia" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
                <span className="text-xs text-muted mt-0.5">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-foreground mb-4">
              Encuentra tus <span className="text-gold italic">lentes ideales</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Desde lentes de contacto hasta graduados de alta tecnologia. Todo fabricado en nuestro laboratorio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Lentes de Contacto",
                description: "Acuvue, Bausch & Lomb, CooperVision. Diarios, mensuales y especializados.",
                href: "/lentes-de-contacto",
                image: "/images/hero-1.png",
              },
              {
                title: "Lentes Graduados",
                description: "Monofocales, bifocales, progresivos. Antirreflex, transicion y blue block.",
                href: "/lentes-graduados",
                image: "/images/hero-2.png",
              },
              {
                title: "Lentes de Sol",
                description: "Ray-Ban, Meta y mas. Originales con garantia. Tambien graduados de sol.",
                href: "/lentes-de-sol",
                image: "/images/hero-3.png",
              },
            ].map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden img-zoom"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 max-w-xs">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                    Explorar
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-foreground mb-4">
              No somos una cadena.{" "}
              <span className="text-gold italic">Somos tu optica.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Fabricamos en Guadalajara",
                description:
                  "Nuestro laboratorio propio nos permite controlar la calidad de cada lente y reducir los tiempos de entrega.",
                number: "01",
              },
              {
                title: "Entrega el mismo dia",
                description:
                  "Muchos de nuestros lentes los fabricamos y entregamos el mismo dia. Sin esperar semanas como en las cadenas.",
                number: "02",
              },
              {
                title: "Trato personal, sin presion",
                description:
                  "Aqui no hay vendedores con comision. Te asesoramos para que elijas lo que realmente necesitas.",
                number: "03",
              },
            ].map((item) => (
              <div key={item.number} className="relative">
                <span className="font-[family-name:var(--font-display)] text-7xl md:text-8xl text-gold/10 absolute -top-6 -left-2">
                  {item.number}
                </span>
                <div className="relative pt-10">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LAB SECTION ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-1.png"
                alt="Laboratorio optico Fabrica de Lentes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
                Nuestro laboratorio
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Donde cada lente{" "}
                <span className="text-gold italic">cobra vida</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed mb-10">
                <p>
                  A diferencia de la mayoria de opticas que envian tus lentes a
                  otro estado para fabricarlos, nosotros tenemos nuestro propio
                  laboratorio aqui en Guadalajara.
                </p>
                <p>
                  Esto significa que controlamos cada paso del proceso: desde la
                  graduacion hasta el acabado final. El resultado son lentes de
                  mejor calidad, en menos tiempo y a un precio mas justo.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { value: "< 24h", label: "Tiempo promedio" },
                  { value: "100%", label: "Control de calidad" },
                  { value: "Mismo dia", label: "Entrega express" },
                  { value: "+10 anos", label: "De experiencia" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border-l-2 border-gold/30 pl-4"
                  >
                    <p className="font-[family-name:var(--font-display)] text-2xl text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/laboratorio"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-white font-semibold rounded-full hover:bg-navy transition-colors duration-200"
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
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-foreground">
              Lo que dicen <span className="text-gold italic">nuestros clientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                className="bg-white rounded-2xl p-8 md:p-10 border border-border"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gold"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-8 text-lg font-[family-name:var(--font-display)] italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">Cliente verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── B2B BANNER ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-3xl overflow-hidden">
            <div className="px-8 md:px-16 py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
                  Para empresas
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white mb-4 leading-tight">
                  Lleva Fabrica de Lentes{" "}
                  <span className="text-gold italic">a tu empresa</span>
                </h2>
                <p className="text-white/50 max-w-lg text-lg">
                  Convenios corporativos con examen de la vista gratis, descuentos por volumen y servicio en tus instalaciones.
                </p>
              </div>
              <Link
                href="/empresas"
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all duration-300"
              >
                Solicitar convenio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-foreground mb-5 leading-tight">
            Listo para{" "}
            <span className="text-gold italic">ver mejor?</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Cotiza tus lentes en menos de 2 minutos. Escribenos por WhatsApp o visitanos en nuestra optica en Guadalajara.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-foreground text-white font-semibold rounded-full hover:bg-navy transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribenos por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-foreground transition-all duration-300"
            >
              Visitanos en la optica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
