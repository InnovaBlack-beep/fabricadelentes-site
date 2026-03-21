import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFAB } from "@/components/landing/WhatsAppFAB";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fábrica de Lentes® — Óptica con Lab Propio · GDL",
  description:
    "Óptica con laboratorio propio en Guadalajara. Lentes listos en 1 hora. Examen de la vista gratis. Armazones desde $590 MXN. Sucursal Minerva.",
  openGraph: {
    title: "Fábrica de Lentes® — Óptica con Lab Propio · GDL",
    description:
      "Óptica con laboratorio propio en Guadalajara. Lentes listos en 1 hora. Examen gratis. Armazones desde $590 MXN.",
    url: "https://fabricadelentes.mx",
    siteName: "Fábrica de Lentes",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://fabricadelentes.mx/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Fábrica de Lentes — Óptica en Guadalajara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fábrica de Lentes® — Óptica con Lab Propio · GDL",
    description:
      "Óptica con laboratorio propio en Guadalajara. Lentes listos en 1 hora. Examen gratis.",
    images: ["https://fabricadelentes.mx/images/hero-1.png"],
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
  image: "https://fabricadelentes.mx/images/hero-1.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zona Minerva",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    postalCode: "44100",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.6715,
    longitude: -103.3988,
  },
  openingHours: "Mo-Sa 10:00-20:00",
  sameAs: [
    "https://instagram.com/fabricadelentesmex",
    "https://tiktok.com/@fabricadelentes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
