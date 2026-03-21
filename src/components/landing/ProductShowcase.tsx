"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  model: string;
  brand: string;
  price: string;
  image: string;
  category: string;
};

const products: Product[] = [
  // Oftálmicos - Brizzant
  { model: "VINCENT", brand: "Brizzant", price: "$1,349", image: "https://fabricadelentes.mx/assets/bl6-02c24b24.jpg", category: "Graduados" },
  { model: "SYDNEY", brand: "Brizzant", price: "$1,349", image: "https://fabricadelentes.mx/assets/bl2-b52145f3.jpg", category: "Graduados" },
  { model: "ANDRE", brand: "Brizzant", price: "$1,349", image: "https://fabricadelentes.mx/assets/bl3-68dce26b.jpg", category: "Graduados" },
  { model: "GIOVANNI", brand: "Brizzant", price: "$1,349", image: "https://fabricadelentes.mx/assets/bl1-80666f1f.jpg", category: "Graduados" },
  { model: "DALI", brand: "Brizzant", price: "$1,349", image: "https://fabricadelentes.mx/assets/bl4-29f105d4.jpg", category: "Graduados" },
  // Oftálmicos - Frida Kahlo
  { model: "FK1001M-BL", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKL1-e4cd1228.jpg", category: "Graduados" },
  { model: "FK1004A-BL", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKL2-ef116390.jpg", category: "Graduados" },
  { model: "FK1005M-PU", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKL5-1d2d0c30.jpg", category: "Graduados" },
  // Oftálmicos - Nobleman
  { model: "HC04-08 C7", brand: "Nobleman", price: "$1,499", image: "https://fabricadelentes.mx/assets/NOL1-541b9e74.jpg", category: "Graduados" },
  { model: "HC05-10 C2", brand: "Nobleman", price: "$1,499", image: "https://fabricadelentes.mx/assets/NO2-5fecad74.jpg", category: "Graduados" },
  { model: "HC07-14 C5", brand: "Nobleman", price: "$1,499", image: "https://fabricadelentes.mx/assets/NOL3-987ac48f.jpg", category: "Graduados" },
  // Oftálmicos - Massimo
  { model: "MM4004 C2", brand: "Massimo", price: "$1,549", image: "https://fabricadelentes.mx/assets/MAL1-86309c0e.jpg", category: "Graduados" },
  { model: "MM4004 C3", brand: "Massimo", price: "$1,499", image: "https://fabricadelentes.mx/assets/MAL2-547d5921.jpg", category: "Graduados" },
  { model: "WD1167 C1", brand: "Massimo", price: "$1,499", image: "https://fabricadelentes.mx/assets/MAL3-43ce1ec8.jpg", category: "Graduados" },
  // Solares - Frida Kahlo
  { model: "FK 001 C19", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKSL1-5ea420bc.jpg", category: "Sol" },
  { model: "FK 001 C13", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKSL2-975aa408.jpg", category: "Sol" },
  { model: "FK 001 C11", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKSL3-12125544.jpg", category: "Sol" },
  { model: "FK-003 C04", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKSL4-ce07cd8f.jpg", category: "Sol" },
  { model: "FK-003 C09", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKSL5-9e669b02.jpg", category: "Sol" },
  { model: "FK-003 C16", brand: "Frida Kahlo", price: "$1,650", image: "https://fabricadelentes.mx/assets/FKSL6-b1e0f8cb.jpg", category: "Sol" },
  // Contacto
  { model: "Hydraglyde", brand: "Air Optix", price: "$1,120", image: "https://fabricadelentes.mx/assets/lentes10-4ac1893a.png", category: "Contacto" },
  { model: "ALCON", brand: "Frecuent", price: "$1,064", image: "https://fabricadelentes.mx/assets/lentes11-9434f124.webp", category: "Contacto" },
  { model: "Total 1", brand: "Alcon", price: "$1,200", image: "https://fabricadelentes.mx/assets/lentes12-7a23fd3e.webp", category: "Contacto" },
];

const tabs = ["Todos", "Graduados", "Sol", "Contacto"];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("Todos");

  const filtered =
    activeTab === "Todos"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-warm-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Productos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mt-3">
              Nuestros Lentes
            </h2>
          </div>
          <div className="flex gap-1 bg-warm-cream rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all"
                style={{
                  background: activeTab === tab ? "#1A1818" : "transparent",
                  color: activeTab === tab ? "#F5F0EA" : "#6A5A4A",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.slice(0, 12).map((product, i) => (
            <a
              key={`${product.model}-${i}`}
              href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20el%20modelo%20${encodeURIComponent(product.model)}%20${encodeURIComponent(product.brand)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden bg-warm-cream hover:bg-warm-beige transition-colors"
            >
              <div className="relative aspect-square bg-warm-cream">
                <Image
                  src={product.image}
                  alt={`${product.brand} ${product.model}`}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                <span className="absolute top-3 left-3 bg-gold text-gold-dark text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  Nuevo
                </span>
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-widest text-warm-stone mb-1">
                  {product.brand}
                </p>
                <p className="text-sm font-semibold text-text-primary truncate">
                  {product.model}
                </p>
                <p className="text-sm font-bold text-gold mt-1">
                  {product.price}
                  <span className="text-[10px] font-normal text-warm-stone ml-1">
                    MXN
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>

        {filtered.length > 12 && (
          <div className="text-center mt-10">
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20ver%20más%20modelos"
              className="inline-flex items-center h-12 px-8 rounded-full border border-border-mid text-sm font-medium text-text-primary hover:border-text-primary transition-colors"
            >
              Ver Todos los Modelos →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
