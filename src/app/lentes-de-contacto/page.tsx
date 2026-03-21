import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Lentes de Contacto en GDL | Fábrica de Lentes",
  description:
    "Lentes de contacto en Guadalajara. Air Optix, Alcon, Frecuent. Diarios, mensuales. Entrega inmediata. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-contacto" },
  openGraph: {
    title: "Lentes de Contacto | Fábrica de Lentes · GDL",
    description: "Lentes de contacto: Air Optix, Alcon. Diarios, mensuales.",
    url: "https://fabricadelentes.mx/lentes-de-contacto",
    images: [{ url: "https://fabricadelentes.mx/images/hero-3.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const contacto = products.filter((p) => p.category === "Contacto");

export default function LentesDeContacto() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-6 pb-2">
        <p className="text-xs text-muted">
          <Link href="/" className="hover:text-fg transition-colors">Inicio</Link>
          <span className="mx-2">›</span>
          <span className="text-fg">Lentes de Contacto</span>
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-fg">
          Lentes de Contacto
        </h1>
        <p className="text-sm text-muted mt-2">
          {contacto.length} productos disponibles · Entrega inmediata
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {contacto.map((p) => (
            <Link
              key={p.id}
              href={`/producto/${p.id}`}
              className="group block bg-white hover:opacity-90 transition-opacity"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={p.images[0]}
                  alt={`${p.brand} ${p.model}`}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-3">
                <p className="text-[10px] uppercase tracking-widest text-muted">{p.brand}</p>
                <p className="text-sm font-semibold text-fg truncate">{p.model}</p>
                <p className="text-sm font-bold text-fg mt-1">
                  {p.price}
                  <span className="text-[10px] font-normal text-muted ml-1">MXN</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
