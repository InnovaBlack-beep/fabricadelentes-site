import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCatalog } from "@/components/landing/ProductCatalog";

export const metadata: Metadata = {
  title: "Lentes Graduados en GDL | Fábrica de Lentes",
  description:
    "Lentes graduados con fabricación propia en Guadalajara. Brizzant, Frida Kahlo, Nobleman, Massimo. Entrega el mismo día.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-graduados" },
  openGraph: {
    title: "Lentes Graduados | Fábrica de Lentes · GDL",
    description: "Lentes graduados con fabricación propia. Entrega el mismo día.",
    url: "https://fabricadelentes.mx/lentes-graduados",
    images: [{ url: "https://fabricadelentes.mx/images/hero-1.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const graduados = products.filter((p) => p.category === "Graduados");
const brands = [...new Set(graduados.map((p) => p.brand))];

export default function LentesGraduados() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-6 pb-2">
        <p className="text-xs text-muted">
          <Link href="/" className="hover:text-fg transition-colors">Inicio</Link>
          <span className="mx-2">›</span>
          <span className="text-fg">Lentes Graduados</span>
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-fg">
          Lentes Graduados
        </h1>
        <p className="text-sm text-muted mt-2">
          {graduados.length} modelos · Entrega en 1 hora
        </p>
      </div>

      <ProductCatalog products={graduados} brands={brands} />
    </>
  );
}
