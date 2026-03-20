import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fábrica de Lentes — Óptica con Laboratorio Propio en Guadalajara",
  description:
    "Lentes graduados, de contacto y de sol en Guadalajara. Laboratorio propio, entrega express el mismo día. Cotiza por WhatsApp.",
  keywords:
    "óptica guadalajara, lentes de contacto guadalajara, lentes graduados guadalajara, laboratorio óptico guadalajara, examen de la vista guadalajara",
  openGraph: {
    title: "Fábrica de Lentes — Óptica con Laboratorio Propio en Guadalajara",
    description:
      "Lentes graduados, de contacto y de sol. Laboratorio propio y entrega express.",
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
  "@type": "LocalBusiness",
  name: "Fábrica de Lentes",
  description:
    "Óptica con laboratorio propio en Guadalajara. Lentes graduados, de contacto y de sol con entrega express.",
  url: "https://fabricadelentes.mx",
  telephone: "+523314257226",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
