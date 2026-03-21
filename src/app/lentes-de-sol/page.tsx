import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Lentes de Sol en GDL | Fábrica de Lentes",
  description:
    "Lentes de sol Frida Kahlo en Guadalajara. Diseños exclusivos con garantía. Cotiza por WhatsApp.",
  alternates: { canonical: "https://fabricadelentes.mx/lentes-de-sol" },
  openGraph: {
    title: "Lentes de Sol | Fábrica de Lentes · GDL",
    description: "Lentes de sol Frida Kahlo con diseños exclusivos y garantía.",
    url: "https://fabricadelentes.mx/lentes-de-sol",
    images: [{ url: "https://fabricadelentes.mx/images/hero-2.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const solares = products.filter((p) => p.category === "Sol");

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

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-fg">
          Lentes de Sol
        </h1>
        <p className="text-sm text-muted mt-2">
          {solares.length} modelos disponibles · Colección Frida Kahlo
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {solares.map((p) => (
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
                <span className="absolute top-3 left-3 bg-accent text-fg text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  Nuevo
                </span>
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
