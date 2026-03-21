import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lentes de Contacto en Guadalajara — Todas las Marcas | Fábrica de Lentes",
  description:
    "Compra lentes de contacto en Guadalajara. Acuvue, Bausch & Lomb, CooperVision. Diarios, mensuales, para astigmatismo. Cotiza por WhatsApp.",
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
  { name: "Diarios", desc: "Uso y desecha. Máxima higiene, ideales para uso ocasional.", icon: "1" },
  { name: "Mensuales", desc: "Reemplazo cada 30 días. Mejor costo-beneficio para uso diario.", icon: "30" },
  { name: "Para astigmatismo", desc: "Lentes tóricos que corrigen astigmatismo con estabilidad.", icon: "T" },
  { name: "Para miopía", desc: "Corrección esférica para visión de lejos clara y nítida.", icon: "M" },
  { name: "Multifocales", desc: "Corrigen vista cansada. Ven de cerca y de lejos sin cambiar lentes.", icon: "MF" },
  { name: "De color", desc: "Cambia el color de tus ojos con o sin graduación.", icon: "C" },
];

export default function LentesDeContacto() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy grain-overlay relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-amber text-sm font-semibold tracking-wider uppercase">Todas las marcas disponibles</span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mt-3 mb-5">
            Lentes de contacto en <span className="text-amber italic">Guadalajara</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Tenemos todas las marcas y tipos de lentes de contacto. Cotiza en segundos por WhatsApp y recibe en tu domicilio o recoge en tienda.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Pedir por WhatsApp
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            ¿Qué tipo de lente <span className="text-amber italic">necesitas?</span>
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
            Si no estás seguro, no te preocupes. Escríbenos con tu receta y te ayudamos a elegir el mejor lente para ti.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto%20${encodeURIComponent(cat.name.toLowerCase())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-warm-gray hover:border-amber/30 hover:shadow-lg hover:shadow-amber/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-4">
                  <span className="text-amber font-bold text-sm">{cat.icon}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-navy mb-2">{cat.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-3">{cat.desc}</p>
                <span className="text-sm font-medium text-amber group-hover:underline">Cotizar →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-warm-gray/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Marcas <span className="text-amber italic">disponibles</span>
          </h2>
          <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
            Trabajamos directamente con los principales laboratorios del mundo para ofrecerte las mejores marcas a precios justos.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div key={brand.name} className="bg-white rounded-xl p-6 border border-warm-gray">
                <h3 className="font-semibold text-navy mb-1">{brand.name}</h3>
                <p className="text-sm text-text-muted">{brand.types}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Preguntas <span className="text-amber italic">frecuentes</span>
          </h2>

          <div className="space-y-4">
            {[
              { q: "¿Cómo sé qué lente de contacto necesito?", a: "Si ya tienes receta de tu oftalmólogo, envíanosla por WhatsApp y te decimos qué opciones tienes. Si no tienes receta, agenda un examen de la vista con nosotros." },
              { q: "¿Cuánto tardan en llegar mis lentes?", a: "Si tenemos tu marca en inventario, los puedes recoger el mismo día. Si es pedido especial, de 3 a 5 días hábiles." },
              { q: "¿Puedo comprar sin receta?", a: "Para lentes graduados necesitas receta vigente. Lentes de color sin graduación los puedes comprar directamente." },
              { q: "¿Hacen envíos?", a: "Sí, enviamos a toda la zona metropolitana de Guadalajara. Para envíos foráneos, consúltanos." },
              { q: "¿Tienen precio mayoreo?", a: "Sí, si compras más de 6 cajas te hacemos precio especial. Pregunta por nuestros paquetes." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-warm-gray overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-navy hover:text-amber transition-colors">
                  {faq.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform shrink-0 ml-4"><path d="M6 9l6 6 6-6" /></svg>
                </summary>
                <div className="px-5 pb-5 text-text-muted leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy grain-overlay relative">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para pedir tus <span className="text-amber italic">lentes de contacto?</span>
          </h2>
          <p className="text-white/50 mb-8">Envíanos tu receta o pregunta por disponibilidad. Respondemos en minutos.</p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20pedir%20lentes%20de%20contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-navy font-semibold rounded-full hover:bg-amber-light transition-all duration-300"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
