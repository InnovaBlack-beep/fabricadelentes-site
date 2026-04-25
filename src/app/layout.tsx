import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { TrackingProvider } from "@/components/TrackingProvider";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fábrica de Lentes® — Óptica con Laboratorio Propio en GDL",
  description:
    "Óptica con laboratorio propio en Guadalajara. Lentes graduados en 1 hora. Examen de la vista gratis. Armazones desde $1,949. Zona Minerva.",
  keywords: [
    "óptica guadalajara", "lentes guadalajara", "fábrica de lentes", "lentes graduados guadalajara",
    "lentes de contacto guadalajara", "lentes de sol guadalajara", "examen de la vista guadalajara",
    "examen de la vista gratis guadalajara", "óptica con laboratorio propio", "lentes en 1 hora guadalajara",
    "óptica express guadalajara", "lentes económicos guadalajara", "óptica zona minerva",
    "armazones guadalajara", "micas antirreflejante guadalajara", "lentes progresivos guadalajara",
    "lentes bifocales guadalajara", "lentes fotocromáticos guadalajara", "lentes transitions guadalajara",
    "lentes blue guadalajara", "lentes luz azul guadalajara", "lentes para computadora guadalajara",
    "lentes brizzant", "lentes frida kahlo", "lentes nobleman", "lentes massimo",
    "air optix guadalajara", "lentes de contacto air optix", "alcon guadalajara",
    "óptica cerca de mí", "mejor óptica guadalajara", "óptica barata guadalajara",
    "lentes baratos guadalajara", "donde comprar lentes guadalajara",
    "óptica zapopan", "óptica tlaquepaque", "óptica jalisco",
    "laboratorio óptico guadalajara", "fabricar lentes guadalajara",
    "lentes graduados mismo día", "entrega express lentes",
    "convenio óptico empresarial guadalajara", "lentes para empresas guadalajara",
    "lentes de contacto para astigmatismo", "lentes de contacto mensuales",
    "lentes de sol polarizados guadalajara", "lentes de sol graduados guadalajara",
  ],
  openGraph: {
    title: "Fábrica de Lentes® — La Mejor Óptica en Guadalajara con Laboratorio Propio",
    description:
      "Óptica con laboratorio propio en Guadalajara. Lentes graduados en 1 hora, examen gratis, lentes de contacto y de sol. Armazones desde $1,949 MXN. Zona Minerva.",
    url: "https://fabricadelentes.mx",
    siteName: "Fábrica de Lentes",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "https://fabricadelentes.mx/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Fábrica de Lentes — Óptica con laboratorio propio en Guadalajara, Jalisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fábrica de Lentes® — Óptica con Lab Propio en Guadalajara",
    description:
      "Lentes graduados en 1 hora. Examen gratis. Laboratorio propio. La mejor óptica de Guadalajara. Zona Minerva.",
    images: ["https://fabricadelentes.mx/images/hero-1.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fabricadelentes.mx" },
  ...(process.env.NEXT_PUBLIC_GSC_ID && {
    verification: { google: process.env.NEXT_PUBLIC_GSC_ID },
  }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Optician", "LocalBusiness", "Store"],
  name: "Fábrica de Lentes",
  alternateName: "Fábrica de Lentes Guadalajara",
  description:
    "Óptica premium con 40 años de experiencia y laboratorio propio en Guadalajara, Jalisco. Fabricamos lentes graduados en 1 hora. Examen de la vista gratis. Lentes de contacto Air Optix, Alcon. Armazones Brizzant, Frida Kahlo, Nobleman, Massimo desde $1,949 MXN. Lentes de sol. Sucursal Zona Minerva.",
  url: "https://fabricadelentes.mx",
  foundingDate: "1986",
  telephone: "+523336166603",
  priceRange: "$1,064 - $1,949 MXN",
  currenciesAccepted: "MXN",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  image: "https://fabricadelentes.mx/images/hero-1.jpg",
  logo: "https://fabricadelentes.mx/images/logo-black.png",
  areaServed: [
    { "@type": "City", name: "Guadalajara" },
    { "@type": "City", name: "Zapopan" },
    { "@type": "City", name: "Tlaquepaque" },
    { "@type": "State", name: "Jalisco" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catálogo de lentes",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lentes Graduados", description: "Armazones con micas graduadas. Entrega en 1 hora." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lentes de Sol", description: "Colección Frida Kahlo Solar con protección UV 400." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lentes de Contacto", description: "Air Optix, Alcon Dailies Total 1, Frecuent." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Examen de la Vista Gratis", description: "Revisión optométrica sin costo ni compromiso." } },
    ],
  },
  knowsAbout: [
    "Optometría", "Lentes graduados", "Lentes de contacto", "Lentes de sol",
    "Miopía", "Astigmatismo", "Hipermetropía", "Presbicia", "Lentes progresivos",
    "Lentes bifocales", "Micas antirreflejante", "Lentes fotocromáticos",
    "Lentes Transitions", "Protección luz azul", "Laboratorio óptico",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. López Mateos #73, Esq. Vallarta, Col. Vallarta Poniente, Frente a la Minerva",
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    postalCode: "44690",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.6715,
    longitude: -103.3988,
  },
  openingHours: "Mo-Sa 10:00-20:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Laura Martínez" },
      datePublished: "2026-03-15",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Llegué sin cita, me hicieron el examen y en una hora ya tenía mis lentes. Excelente servicio y muy buena atención.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Miguel Torres" },
      datePublished: "2026-02-28",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Tengo 3 años yendo y siempre es rápido y profesional. Los armazones Brizzant son de muy buena calidad.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Alejandra Reyes" },
      datePublished: "2026-01-20",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Los armazones Frida Kahlo me encantan. Calidad premium a buen precio. La atención en zona Minerva es increíble.",
    },
  ],
  sameAs: [
    "https://instagram.com/fabricadelentesmex",
    "https://tiktok.com/@fabricadelentes",
  ],
};

const GA_ID = "G-SVC97E0S53";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geist.variable}>
      <head>
        <meta name="theme-color" content="#242424" />
        <meta name="msapplication-TileColor" content="#242424" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased">
        <TrackingProvider />
        <BreadcrumbSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
