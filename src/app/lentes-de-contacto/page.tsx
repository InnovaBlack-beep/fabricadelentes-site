import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lentes de Contacto en Guadalajara | Todas las Marcas | Fabrica de Lentes",
  description:
    "Lentes de contacto en Guadalajara. Acuvue, Bausch & Lomb, CooperVision. Diarios, mensuales, para astigmatismo. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-contacto" },
};

const brands = [
  { name: "Acuvue (Johnson & Johnson)", types: "Diarios, mensuales, para astigmatismo, multifocales" },
  { name: "Bausch & Lomb", types: "SofLens, Ultra, Biotrue ONEday" },
  { name: "CooperVision", types: "Biofinity, clariti, MyDay" },
  { name: "Alcon (Air Optix)", types: "Air Optix, Dailies, Total30" },
  { name: "Lentes de color", types: "FreshLook, Air Optix Colors, Solotica" },
  { name: "Lentes especializados", types: "Toricos, multifocales, queratocono" },
];

const categories = [
  { name: "Diarios", desc: "Uso y desecha. Maxima higiene, ideales para uso ocasional.", badge: "1 dia" },
  { name: "Mensuales", desc: "Reemplazo cada 30 dias. Mejor costo-beneficio para uso diario.", badge: "30 dias" },
  { name: "Para astigmatismo", desc: "Lentes toricos que corrigen astigmatismo con estabilidad.", badge: "Toricos" },
  { name: "Para miopia", desc: "Correccion esferica para vision de lejos clara y nitida.", badge: "Esfericos" },
  { name: "Multifocales", desc: "Corrigen vista cansada. Ven de cerca y de lejos sin cambiar lentes.", badge: "Multi" },
  { name: "De color", desc: "Cambia el color de tus ojos con o sin graduacion.", badge: "Cosmeticos" },
];

export default function LentesDeContacto() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-off-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium text-xs tracking-[0.2em] uppercase mb-4">
                Todas las marcas disponibles
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-foreground leading-[1.05] mb-5">
                Lentes de contacto en{" "}
                <span className="text-gold italic">Guadalajara</span>
              </h1>
              <p className="text-muted text-lg max-w-lg mb-8 leading-relaxed">
                Tenemos todas las marcas y tipos de lentes de contacto. Cotiza en segundos por WhatsApp y recibe en tu domicilio o recoge en tienda.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white text-sm font-semibold tracking-wide uppercase hover:bg-dark transition-colors duration-300"
              >
                Pedir por WhatsApp
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero-1.png"
                  alt="Lentes de contacto"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-4">
              Que tipo de lente <span className="text-gold italic">necesitas?</span>
            </h2>
            <p className="text-muted max-w-xl">
              Si no estas seguro, no te preocupes. Escribenos con tu receta y te ayudamos a elegir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto%20${encodeURIComponent(cat.name.toLowerCase())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-7 border border-border hover:border-gold/40 transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 bg-off-white text-xs font-medium text-muted mb-4">
                  {cat.badge}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span className="text-sm font-semibold text-gold group-hover:underline">
                  Cotizar
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 inline ml-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-4">
              Marcas <span className="text-gold italic">disponibles</span>
            </h2>
            <p className="text-muted max-w-xl">
              Trabajamos directamente con los principales laboratorios del mundo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-7 border border-border"
              >
                <h3 className="font-semibold text-foreground mb-1.5">{brand.name}</h3>
                <p className="text-sm text-muted">{brand.types}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-foreground mb-12">
            Preguntas <span className="text-gold italic">frecuentes</span>
          </h2>

          <div className="space-y-3">
            {[
              { q: "Como se que lente de contacto necesito?", a: "Si ya tienes receta de tu oftalmologo, envianosla por WhatsApp y te decimos que opciones tienes. Si no tienes receta, agenda un examen de la vista con nosotros." },
              { q: "Cuanto tardan en llegar mis lentes?", a: "Si tenemos tu marca en inventario, los puedes recoger el mismo dia. Si es pedido especial, de 3 a 5 dias habiles." },
              { q: "Puedo comprar sin receta?", a: "Para lentes graduados necesitas receta vigente. Lentes de color sin graduacion los puedes comprar directamente." },
              { q: "Hacen envios?", a: "Si, enviamos a toda la zona metropolitana de Guadalajara. Para envios foraneos, consultanos." },
              { q: "Tienen precio mayoreo?", a: "Si, si compras mas de 6 cajas te hacemos precio especial. Pregunta por nuestros paquetes." },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-off-white border border-border overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-foreground hover:text-gold transition-colors">
                  {faq.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-muted group-open:rotate-180 transition-transform shrink-0 ml-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-muted leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-white mb-4">
            Listo para pedir tus{" "}
            <span className="text-gold italic">lentes de contacto?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Envanos tu receta o pregunta por disponibilidad. Respondemos en minutos.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20pedir%20lentes%20de%20contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm font-semibold tracking-wide uppercase hover:bg-off-white transition-colors duration-300"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
