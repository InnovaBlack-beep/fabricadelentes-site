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
  { name: "Lentes especializados", types: "T\u00f3ricos, multifocales, queratocono" },
];

const categories = [
  { name: "Diarios", desc: "Uso y desecha. M\u00e1xima higiene, ideales para uso ocasional.", badge: "1 D\u00cdA" },
  { name: "Mensuales", desc: "Reemplazo cada 30 d\u00edas. Mejor costo-beneficio para uso diario.", badge: "30 D\u00cdAS" },
  { name: "Para astigmatismo", desc: "Lentes t\u00f3ricos que corrigen astigmatismo con estabilidad.", badge: "T\u00d3RICOS" },
  { name: "Para miop\u00eda", desc: "Correcci\u00f3n esf\u00e9rica para visi\u00f3n de lejos clara y n\u00edtida.", badge: "ESF\u00c9RICOS" },
  { name: "Multifocales", desc: "Corrigen vista cansada. Ven de cerca y de lejos sin cambiar lentes.", badge: "MULTI" },
  { name: "De color", desc: "Cambia el color de tus ojos con o sin graduaci\u00f3n.", badge: "COSM\u00c9TICOS" },
];

export default function LentesDeContacto() {
  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] text-[#0057A8] tracking-[0.2em] uppercase font-medium mb-4">
                Todas las Marcas Disponibles
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-[#111] font-normal leading-tight mb-5">
                Lentes de Contacto
                <br />en Guadalajara
              </h1>
              <p className="text-[#777] text-[15px] max-w-lg mb-8 leading-relaxed">
                Tenemos todas las marcas y tipos de lentes de contacto. Cotiza en segundos por WhatsApp y recibe en tu domicilio o recoge en tienda.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0057A8] text-white rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-[#003F7A] transition-colors"
              >
                Pedir por WhatsApp
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
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
        <div className="max-w-[1280px] mx-auto px-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-[#111] font-normal mb-3">
            Qu&eacute; Tipo de Lente Necesitas?
          </h2>
          <p className="text-[#777] text-[14px] max-w-xl mb-10">
            Si no est&aacute;s seguro, no te preocupes. Escr&iacute;benos con tu receta y te ayudamos a elegir.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto%20${encodeURIComponent(cat.name.toLowerCase())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F2F2F2] rounded-lg p-6 hover:bg-[#EAEAEA] transition-all"
              >
                <span className="inline-block px-3 py-1 bg-[#F4F4F4] rounded text-[10px] font-medium text-[#777] tracking-[0.1em] mb-3">
                  {cat.badge}
                </span>
                <h3 className="text-[14px] font-semibold text-[#111] uppercase tracking-[0.05em] mb-2">
                  {cat.name}
                </h3>
                <p className="text-[13px] text-[#777] leading-relaxed mb-3">
                  {cat.desc}
                </p>
                <span className="text-[12px] text-[#0057A8] font-medium tracking-[0.05em] uppercase group-hover:underline">
                  Cotizar
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 md:py-20 bg-[#F4F4F4]">
        <div className="max-w-[1280px] mx-auto px-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-[#111] font-normal mb-3">
            Marcas Disponibles
          </h2>
          <p className="text-[#777] text-[14px] max-w-xl mb-10">
            Trabajamos directamente con los principales laboratorios del mundo.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white rounded-lg p-6"
              >
                <h3 className="text-[14px] font-semibold text-[#111] mb-1.5">{brand.name}</h3>
                <p className="text-[13px] text-[#777]">{brand.types}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-[#111] font-normal mb-10">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-3">
            {[
              { q: "C\u00f3mo s\u00e9 qu\u00e9 lente de contacto necesito?", a: "Si ya tienes receta de tu oftalm\u00f3logo, env\u00edanosla por WhatsApp y te decimos qu\u00e9 opciones tienes. Si no tienes receta, agenda un examen de la vista con nosotros." },
              { q: "Cu\u00e1nto tardan en llegar mis lentes?", a: "Si tenemos tu marca en inventario, los puedes recoger el mismo d\u00eda. Si es pedido especial, de 3 a 5 d\u00edas h\u00e1biles." },
              { q: "Puedo comprar sin receta?", a: "Para lentes graduados necesitas receta vigente. Lentes de color sin graduaci\u00f3n los puedes comprar directamente." },
              { q: "Hacen env\u00edos?", a: "S\u00ed, enviamos a toda la zona metropolitana de Guadalajara. Para env\u00edos for\u00e1neos, cons\u00faltanos." },
              { q: "Tienen precio mayoreo?", a: "S\u00ed, si compras m\u00e1s de 6 cajas te hacemos precio especial. Pregunta por nuestros paquetes." },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-[#F2F2F2] rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[14px] font-medium text-[#111] hover:text-[#0057A8] transition-colors">
                  {faq.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#777] group-open:rotate-180 transition-transform shrink-0 ml-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#777] leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0057A8]">
        <div className="max-w-3xl mx-auto px-10 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl uppercase tracking-[0.12em] text-white font-normal mb-4">
            Listo Para Pedir Tus Lentes?
          </h2>
          <p className="text-white/70 text-[14px] mb-8">
            Env&iacute;anos tu receta o pregunta por disponibilidad. Respondemos en minutos.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20pedir%20lentes%20de%20contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white bg-transparent rounded-full px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
