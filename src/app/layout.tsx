import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabrica de Lentes | Optica con Laboratorio Propio en Guadalajara",
  description:
    "Lentes graduados, de contacto y de sol en Guadalajara. Laboratorio propio con entrega el mismo dia. Cotiza por WhatsApp.",
  keywords:
    "optica guadalajara, lentes de contacto guadalajara, lentes graduados guadalajara, laboratorio optico guadalajara, examen de la vista guadalajara, lentes de sol guadalajara",
  openGraph: {
    title: "Fabrica de Lentes | Optica con Laboratorio Propio en Guadalajara",
    description:
      "Lentes graduados, de contacto y de sol. Laboratorio propio y entrega express el mismo dia.",
    url: "https://fabricadelentes.mx",
    siteName: "Fabrica de Lentes",
    locale: "es_MX",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fabricadelentes.mx" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fabrica de Lentes",
  description:
    "Optica con laboratorio propio en Guadalajara. Lentes graduados, de contacto y de sol con entrega express.",
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
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
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
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
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
