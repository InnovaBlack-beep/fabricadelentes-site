"use client";

import { usePathname } from "next/navigation";

const LABELS: Record<string, string> = {
  "": "Inicio",
  "lentes-graduados": "Lentes Graduados",
  "lentes-de-sol": "Lentes de Sol",
  "lentes-de-contacto": "Lentes de Contacto",
  "laboratorio": "Laboratorio",
  "empresas": "Convenios Empresariales",
  "contacto": "Contacto",
  "blog": "Blog",
  "promo": "Promociones",
  "aviso-de-privacidad": "Aviso de Privacidad",
  "politica-de-garantia": "Política de Garantía",
  "producto": "Producto",
};

export function BreadcrumbSchema() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = [
    { name: "Inicio", url: "https://fabricadelentes.mx" },
    ...segments.map((seg, i) => ({
      name: LABELS[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      url: `https://fabricadelentes.mx/${segments.slice(0, i + 1).join("/")}`,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
