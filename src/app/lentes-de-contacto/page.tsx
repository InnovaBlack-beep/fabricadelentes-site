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
  { name: "Lentes especializados", types: "Tóricos, multifocales, queratocono" },
];

const categories = [
  { name: "Diarios", desc: "Uso y desecha. Máxima higiene, ideales para uso ocasional.", badge: "1 DÍA" },
  { name: "Mensuales", desc: "Reemplazo cada 30 días. Mejor costo-beneficio para uso diario.", badge: "30 DÍAS" },
  { name: "Para astigmatismo", desc: "Lentes tóricos que corrigen astigmatismo con estabilidad.", badge: "TÓRICOS" },
  { name: "Para miopía", desc: "Corrección esférica para visión de lejos clara y nítida.", badge: "ESFÉRICOS" },
  { name: "Multifocales", desc: "Corrigen vista cansada. Ven de cerca y de lejos sin cambiar lentes.", badge: "MULTI" },
  { name: "De color", desc: "Cambia el color de tus ojos con o sin graduación.", badge: "COSMÉTICOS" },
];

export default function LentesDeContacto() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] text-[#004AAD] tracking-[0.2em] uppercase font-medium mb-4">
                Todas las Marcas Disponibles
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-[#1a1a1a] font-normal leading-tight mb-5">
                Lentes de Contacto
                <br />en Guadalajara
              </h1>
              <p className="text-[#666] text-[15px] max-w-lg mb-8 leading-relaxed">
                Tenemos todas las marcas y tipos de lentes de contacto. Cotiza en segundos por WhatsApp y recibe en tu domicilio o recoge en tienda.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#004AAD] text-white text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-[#003580] transition-all inline-block"
              >
                Pedir por WhatsApp
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-3">
            Qué Tipo de Lente Necesitas?
          </h2>
          <p className="text-[#666] text-[14px] max-w-xl mb-10">
            Si no estás seguro, no te preocupes. Escríbenos con tu receta y te ayudamos a elegir.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto%20${encodeURIComponent(cat.name.toLowerCase())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 border border-[#e5e5e5] hover:border-[#004AAD]/30 transition-all"
              >
                <span className="inline-block px-3 py-1 bg-[#f7f7f7] text-[10px] font-medium text-[#666] tracking-[0.1em] mb-3">
                  {cat.badge}
                </span>
                <h3 className="text-[14px] font-semibold text-[#1a1a1a] uppercase tracking-[0.05em] mb-2">
                  {cat.name}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-3">
                  {cat.desc}
                </p>
                <span className="text-[12px] text-[#004AAD] font-medium tracking-[0.05em] uppercase group-hover:underline">
                  Cotizar
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 md:py-20 bg-[#f7f7f7]">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-3">
            Marcas Disponibles
          </h2>
          <p className="text-[#666] text-[14px] max-w-xl mb-10">
            Trabajamos directamente con los principales laboratorios del mundo.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-6 border border-[#e5e5e5]"
              >
                <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-1.5">{brand.name}</h3>
                <p className="text-[13px] text-[#666]">{brand.types}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-[#1a1a1a] font-normal mb-10">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-3">
            {[
              { q: "Cómo sé qué lente de contacto necesito?", a: "Si ya tienes receta de tu oftalmólogo, envíanosla por WhatsApp y te decimos qué opciones tienes. Si no tienes receta, agenda un examen de la vista con nosotros." },
              { q: "Cuánto tardan en llegar mis lentes?", a: "Si tenemos tu marca en inventario, los puedes recoger el mismo día. Si es pedido especial, de 3 a 5 días hábiles." },
              { q: "Puedo comprar sin receta?", a: "Para lentes graduados necesitas receta vigente. Lentes de color sin graduación los puedes comprar directamente." },
              { q: "Hacen envíos?", a: "Sí, enviamos a toda la zona metropolitana de Guadalajara. Para envíos foráneos, consúltanos." },
              { q: "Tienen precio mayoreo?", a: "Sí, si compras más de 6 cajas te hacemos precio especial. Pregunta por nuestros paquetes." },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-[#f7f7f7] border border-[#e5e5e5] overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[14px] font-medium text-[#1a1a1a] hover:text-[#004AAD] transition-colors">
                  {faq.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#666] group-open:rotate-180 transition-transform shrink-0 ml-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#666] leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#004AAD]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.15em] text-white font-normal mb-4">
            Listo Para Pedir Tus Lentes?
          </h2>
          <p className="text-white/70 text-[14px] mb-8">
            Envíanos tu receta o pregunta por disponibilidad. Respondemos en minutos.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20pedir%20lentes%20de%20contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white text-white text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-[#004AAD] transition-all"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
