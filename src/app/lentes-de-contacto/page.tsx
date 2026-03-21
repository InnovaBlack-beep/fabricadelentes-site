import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCatalog } from "@/components/landing/ProductCatalog";

export const metadata: Metadata = {
  title: "Lentes de Contacto en GDL | Fábrica de Lentes",
  description:
    "Lentes de contacto en Guadalajara. Air Optix, Alcon, Frecuent. Diarios, mensuales. Entrega inmediata.",
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
const brands = [...new Set(contacto.map((p) => p.brand))];

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

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-fg">
          Lentes de Contacto
        </h1>
        <p className="text-sm text-muted mt-2">
          {contacto.length} productos · Entrega inmediata
        </p>
      </div>

      <ProductCatalog products={contacto} brands={brands} />
    </>
  );
}
