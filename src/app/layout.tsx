import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Fábrica de Lentes® — Laboratorio Óptico · Venta Directa · Guadalajara",
  description:
    "Óptica con laboratorio propio en Guadalajara. Lentes listos en 1 hora. Examen de la vista gratis. Armazones desde $590 MXN. Sucursal Minerva.",
  openGraph: {
    title:
      "Fábrica de Lentes® — Laboratorio Óptico · Venta Directa · Guadalajara",
    description:
      "Óptica con laboratorio propio en Guadalajara. Lentes listos en 1 hora. Examen de la vista gratis. Armazones desde $590 MXN. Sucursal Minerva.",
    url: "https://fabricadelentes.mx",
    siteName: "Fábrica de Lentes",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://fabricadelentes.mx/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fabricadelentes.mx" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: "Fábrica de Lentes",
  description:
    "Óptica con laboratorio propio en Guadalajara. Lentes listos en 1 hora. Examen de la vista gratis. Armazones desde $590 MXN. Sucursal Minerva.",
  url: "https://fabricadelentes.mx",
  telephone: "+523314257226",
  priceRange: "$590-$1690 MXN",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  openingHours: "Mo-Sa 10:00-20:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
