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
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0057FF] font-semibold text-sm mb-3">
                Todas las marcas disponibles
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-[-0.02em] mb-4">
                Lentes de contacto en Guadalajara
              </h1>
              <p className="text-[#666666] text-base max-w-lg mb-8 leading-relaxed">
                Tenemos todas las marcas y tipos de lentes de contacto. Cotiza en segundos por WhatsApp y recibe en tu domicilio o recoge en tienda.
              </p>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20lentes%20de%20contacto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
              >
                Pedir por WhatsApp
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
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
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-3">
              Que tipo de lente necesitas?
            </h2>
            <p className="text-[#666666] max-w-xl">
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
                className="group bg-white p-6 border border-[#e0e0e0] rounded-lg hover:border-[#0057FF]/40 transition-all"
              >
                <span className="inline-block px-3 py-1 bg-[#f5f5f5] text-xs font-medium text-[#666666] rounded mb-3">
                  {cat.badge}
                </span>
                <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-3">
                  {cat.desc}
                </p>
                <span className="text-sm font-semibold text-[#0057FF] group-hover:underline">
                  Cotizar &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-3">
              Marcas disponibles
            </h2>
            <p className="text-[#666666] max-w-xl">
              Trabajamos directamente con los principales laboratorios del mundo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white p-6 border border-[#e0e0e0] rounded-lg"
              >
                <h3 className="font-semibold text-[#1a1a1a] mb-1.5">{brand.name}</h3>
                <p className="text-sm text-[#666666]">{brand.types}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-10">
            Preguntas frecuentes
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
                className="group bg-[#f5f5f5] border border-[#e0e0e0] rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-[#1a1a1a] hover:text-[#0057FF] transition-colors">
                  {faq.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#666666] group-open:rotate-180 transition-transform shrink-0 ml-4">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-[#666666] leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#0057FF]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[-0.02em] mb-3">
            Listo para pedir tus lentes de contacto?
          </h2>
          <p className="text-white/80 text-base mb-8">
            Envanos tu receta o pregunta por disponibilidad. Respondemos en minutos.
          </p>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20pedir%20lentes%20de%20contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-white text-[#0057FF] text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
