import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fábrica de Lentes® — Laboratorio Óptico · Venta Directa · Guadalajara",
  description:
    "Lentes graduados, de contacto y de sol en Guadalajara. Laboratorio óptico propio con entrega el mismo día. Examen de la vista gratis. Cotiza por WhatsApp.",
  keywords:
    "óptica guadalajara, lentes de contacto guadalajara, lentes graduados guadalajara, laboratorio óptico guadalajara, examen de la vista guadalajara, lentes de sol guadalajara",
  openGraph: {
    title: "Fábrica de Lentes® — Laboratorio Óptico · Venta Directa · Guadalajara",
    description:
      "Lentes graduados, de contacto y de sol. Laboratorio propio y entrega express el mismo día.",
    url: "https://fabricadelentes.mx",
    siteName: "Fábrica de Lentes",
    locale: "es_MX",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fabricadelentes.mx" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: "Fábrica de Lentes",
  description:
    "Óptica con laboratorio propio en Guadalajara. Lentes graduados, de contacto y de sol con entrega express.",
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
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
