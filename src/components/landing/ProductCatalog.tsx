"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCatalogProps {
  products: Product[];
  brands: string[];
}

export function ProductCatalog({ products, brands }: ProductCatalogProps) {
  const [activeBrand, setActiveBrand] = useState("Todos");

  const filtered =
    activeBrand === "Todos"
      ? products
      : products.filter((p) => p.brand === activeBrand);

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
                className="text-xs font-medium rounded-full px-4 py-1.5 whitespace-nowrap transition-all"
                style={{
                  background: activeBrand === pill ? "#242424" : "transparent",
                  color: activeBrand === pill ? "#FFFFFF" : "#9CA3AF",
                  border: activeBrand === pill ? "1px solid #242424" : "1px solid #E5E7EB",
                }}
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
          {filtered.map((p) => (
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

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted">No hay productos en esta categoría.</p>
          </div>
        )}
      </div>
    </>
  );
}
