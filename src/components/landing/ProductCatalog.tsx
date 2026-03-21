"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products as allProducts, getBadgeColors } from "@/lib/products";

interface ProductCatalogProps {
  category: "Graduados" | "Sol" | "Contacto";
}

export function ProductCatalog({ category }: ProductCatalogProps) {
  const categoryProducts = allProducts.filter((p) => p.category === category);
  const brands = [...new Set(categoryProducts.map((p) => p.brand))];
  const [activeBrand, setActiveBrand] = useState("Todos");

  const filtered =
    activeBrand === "Todos"
      ? categoryProducts
      : categoryProducts.filter((p) => p.brand === activeBrand);

  return (
    <>
      {/* Filter pills */}
      <div className="border-b border-border mb-8">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {["Todos", ...brands].map((pill) => (
              <button
                key={pill}
                onClick={() => setActiveBrand(pill)}
                className={`text-xs font-medium rounded-full px-4 py-1.5 whitespace-nowrap transition-all cursor-pointer ${
                  activeBrand === pill
                    ? "bg-fg text-white border border-fg"
                    : "bg-transparent text-muted border border-border hover:border-fg hover:text-fg"
                }`}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Count */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 mb-6">
        <p className="text-xs text-muted">
          {filtered.length} {filtered.length === 1 ? "modelo" : "modelos"}
          {activeBrand !== "Todos" && ` de ${activeBrand}`}
        </p>
      </div>

      {/* Product grid */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((p) => {
            const badgeColors = getBadgeColors(p.badge);
            const hasSecondImage = p.images.length >= 2;
            return (
              <Link
                key={p.id}
                href={`/producto/${p.id}`}
                className="group block bg-white hover:opacity-90 transition-opacity"
              >
                <div className="relative aspect-square bg-white overflow-hidden">
                  <Image
                    src={p.images[0]}
                    alt={`${p.brand} ${p.model}`}
                    fill
                    className={`object-contain p-4 transition-all duration-500 ${
                      hasSecondImage ? "group-hover:opacity-0" : "group-hover:scale-105"
                    }`}
                    unoptimized
                  />
                  {hasSecondImage && (
                    <Image
                      src={p.images[1]}
                      alt={`${p.brand} ${p.model} - vista 2`}
                      fill
                      className="object-contain p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                      unoptimized
                    />
                  )}
                  <span
                    className={`absolute top-3 left-3 ${badgeColors.bg} ${badgeColors.text} text-[10px] font-semibold px-2.5 py-1 rounded-full border border-border/30`}
                  >
                    {p.badge}
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
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted">No hay productos en esta categoría.</p>
          </div>
        )}
      </div>
    </>
  );
}
