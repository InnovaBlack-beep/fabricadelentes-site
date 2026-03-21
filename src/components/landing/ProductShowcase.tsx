"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, getBadgeColors } from "@/lib/products";

const tabs = ["Todos", "Graduados", "Sol", "Contacto"];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("Todos");

  const filtered =
    activeTab === "Todos"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section id="productos" className="py-20 md:py-32 px-5 md:px-10 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Productos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-fg mt-3">
              Destacados
            </h2>
          </div>
          <div className="flex gap-1 bg-surface rounded-full p-1 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all"
                style={{
                  background: activeTab === tab ? "#242424" : "transparent",
                  color: activeTab === tab ? "#FFFFFF" : "#9CA3AF",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.slice(0, 8).map((product) => {
            const badgeColors = getBadgeColors(product.badge);
            const hasSecondImage = product.images.length >= 2;
            return (
              <Link
                key={product.id}
                href={`/producto/${product.id}`}
                className="group block overflow-hidden bg-white hover:opacity-90 transition-opacity"
              >
                <div className="relative aspect-square bg-white overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={`${product.brand} ${product.model}`}
                    fill
                    className={`object-contain p-6 transition-all duration-500 ${
                      hasSecondImage ? "group-hover:opacity-0" : "group-hover:scale-105"
                    }`}
                    unoptimized
                  />
                  {hasSecondImage && (
                    <Image
                      src={product.images[1]}
                      alt={`${product.brand} ${product.model} - vista 2`}
                      fill
                      className="object-contain p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                      unoptimized
                    />
                  )}
                  <span
                    className={`absolute top-3 left-3 ${badgeColors.bg} ${badgeColors.text} text-[10px] font-semibold px-2.5 py-1 rounded-full border border-border/30`}
                  >
                    {product.badge}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-widest text-muted mb-1">
                    {product.brand}
                  </p>
                  <p className="text-sm font-semibold text-fg truncate">
                    {product.model}
                  </p>
                  <p className="text-sm font-bold text-fg mt-1">
                    {product.price}
                    <span className="text-[10px] font-normal text-muted ml-1">
                      MXN
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
