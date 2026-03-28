"use client";

import { useState } from "react";

const tabs = ["Armazones", "Contactos", "Sol", "Empresas"];

const products = [
  {
    brand: "Ray-Ban",
    model: "RB2140 Classic",
    variants: "4 colores",
    price: "$1,250",
    badges: ["Más vendido", "Entrega 1hr"],
    svg: (
      <svg width="88" height="50" viewBox="0 0 88 50" fill="none">
        <path
          d="M8 20C8 10 18 6 28 12C32 14 34 22 30 28C26 34 12 34 8 20Z"
          stroke="#6A5A4A"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M58 20C58 10 68 6 78 12C82 14 84 22 80 28C76 34 62 34 58 20Z"
          stroke="#6A5A4A"
          strokeWidth="1.4"
          fill="none"
        />
        <path d="M30 20C36 17 52 17 58 20" stroke="#6A5A4A" strokeWidth="1.4" />
        <path d="M8 18L2 16" stroke="#6A5A4A" strokeWidth="1.2" />
        <path d="M80 18L86 16" stroke="#6A5A4A" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    brand: "Armazón + Micas AR",
    model: "Montura completa",
    variants: "3 colores",
    price: "$950",
    badges: ["Entrega 1hr"],
    svg: (
      <svg width="88" height="50" viewBox="0 0 88 50" fill="none">
        <rect
          x="6"
          y="12"
          width="30"
          height="22"
          rx="4"
          stroke="#6A5A4A"
          strokeWidth="1.4"
        />
        <rect
          x="52"
          y="12"
          width="30"
          height="22"
          rx="4"
          stroke="#6A5A4A"
          strokeWidth="1.4"
        />
        <path d="M36 22C40 19 48 19 52 22" stroke="#6A5A4A" strokeWidth="1.4" />
        <path d="M6 20L1 18" stroke="#6A5A4A" strokeWidth="1.2" />
        <path d="M82 20L87 18" stroke="#6A5A4A" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    brand: "Micas AR UV+Azul",
    model: "Protección total",
    variants: "2 colores",
    price: "$459",
    badges: ["Nuevo", "Entrega 1hr"],
    svg: (
      <svg width="88" height="50" viewBox="0 0 88 50" fill="none">
        <circle cx="24" cy="25" r="16" stroke="#6A5A4A" strokeWidth="1.4" />
        <circle cx="64" cy="25" r="16" stroke="#6A5A4A" strokeWidth="1.4" />
        <path d="M40 23C42 21 46 21 48 23" stroke="#6A5A4A" strokeWidth="1.4" />
        <path d="M8 22L2 19" stroke="#6A5A4A" strokeWidth="1.2" />
        <path d="M80 22L86 19" stroke="#6A5A4A" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    brand: "Acuvue Oasys",
    model: "Mensual",
    variants: "6 colores",
    price: "$590",
    badges: ["Más pedido"],
    svg: (
      <svg width="88" height="50" viewBox="0 0 88 50" fill="none">
        <ellipse
          cx="44"
          cy="25"
          rx="30"
          ry="18"
          stroke="#6A5A4A"
          strokeWidth="1.4"
        />
        <ellipse
          cx="44"
          cy="25"
          rx="18"
          ry="10"
          stroke="#6A5A4A"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle
          cx="44"
          cy="25"
          r="4"
          stroke="#6A5A4A"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    ),
  },
];

export function ProductGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      style={{
        padding: "40px 16px",
        background: "#FFFFFF",
      }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h2
            className="text-2xl font-semibold"
            style={{
              fontFamily: "var(--font-sans)",
              color: "#111110",
              marginBottom: 16,
            }}
          >
            Lo más pedido
          </h2>
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`text-sm ${activeTab === i ? "font-bold" : ""}`}
                style={{
                  color: activeTab === i ? "#111110" : "#A09080",
                  paddingBottom: 6,
                  background: "none",
                  border: "none",
                  borderBottomWidth: "1.5px",
                  borderBottomStyle: "solid",
                  borderBottomColor: activeTab === i ? "#B5956E" : "transparent",
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <a
          href="/lentes-graduados"
          className="transition-colors text-xs"
          style={{
            color: "#A09080",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#B5956E")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#A09080")}
        >
          Ver todo ›
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <a
            key={product.brand + product.model}
            href={`https://wa.me/523314257226?text=Hola%2C%20me%20interesan%20los%20${encodeURIComponent(product.brand)}%20${encodeURIComponent(product.model)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition-all duration-[180ms]"
            style={{
              background: "white",
              borderRadius: 10,
              padding: "20px 16px 16px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Badges */}
            <div className="flex gap-1.5 mb-3">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full text-xs font-bold"
                  style={{
                    background: "#B5956E",
                    color: "#2A1F14",
                    padding: "2px 10px",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* SVG illustration */}
            <div
              className="flex items-center justify-center"
              style={{ height: 108 }}
            >
              {product.svg}
            </div>

            {/* Info */}
            <div className="mt-3">
              <p
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#111110",
                }}
              >
                {product.brand}
              </p>
              <p
                className="text-xs"
                style={{
                  color: "#6A5A4A",
                  marginTop: 2,
                }}
              >
                {product.model} · {product.variants}
              </p>
              <p
                className="mt-2 text-base font-semibold"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#111110",
                }}
              >
                {product.price}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
