import type { Metadata } from "next";
import Link from "next/link";
import { ProductCatalog } from "@/components/landing/ProductCatalog";

export const metadata: Metadata = {
  title: "Lentes de Sol en GDL | Fábrica de Lentes",
  description:
    "Lentes de sol Frida Kahlo en Guadalajara. Diseños exclusivos con garantía.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-sol" },
  openGraph: {
    title: "Lentes de Sol | Fábrica de Lentes · GDL",
    description: "Lentes de sol Frida Kahlo con diseños exclusivos y garantía.",
    url: "https://fabricadelentes.mx/lentes-de-sol",
    images: [{ url: "https://fabricadelentes.mx/images/hero-2.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function LentesDeSol() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-6 pb-2">
        <p className="text-xs text-muted">
          <Link href="/" className="hover:text-fg transition-colors">Inicio</Link>
          <span className="mx-2">›</span>
          <span className="text-fg">Lentes de Sol</span>
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-fg">
          Lentes de Sol
        </h1>
        <p className="text-sm text-muted mt-2">
          Colección Frida Kahlo · Con garantía
        </p>
      </div>

      <ProductCatalog category="Sol" />
    </>
  );
}
