import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

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

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-fg">
          Lentes Graduados
        </h1>
        <p className="text-sm text-muted mt-2">
          {graduados.length} modelos disponibles · Entrega en 1 hora
        </p>
      </div>

      <div className="border-b border-border mb-8">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-3 overflow-x-auto py-3">
            {["Todos", "Brizzant", "Frida Kahlo", "Nobleman", "Massimo"].map((pill, i) => (
              <span
                key={pill}
                className={
                  i === 0
                    ? "text-xs font-medium text-white bg-fg rounded-full px-4 py-1.5 whitespace-nowrap"
                    : "text-xs text-muted border border-border rounded-full px-4 py-1.5 whitespace-nowrap"
                }
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {graduados.map((p) => (
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
