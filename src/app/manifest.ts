import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fábrica de Lentes — Óptica con Laboratorio Propio",
    short_name: "Fábrica de Lentes",
    description:
      "Óptica premium en Guadalajara. Lentes graduados en 1 hora, examen gratis, laboratorio propio. Zona Minerva.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#242424",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
