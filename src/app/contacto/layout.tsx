import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Fábrica de Lentes · Guadalajara",
  description:
    "Agenda tu examen de la vista gratis. Contáctanos por WhatsApp, teléfono o visítanos en Zona Minerva, Guadalajara. Lun-Sáb 10:00-20:00.",
  alternates: { canonical: "https://fabricadelentes.mx/contacto" },
  openGraph: {
    title: "Contacto | Fábrica de Lentes · Guadalajara",
    description: "Agenda tu examen de la vista gratis. WhatsApp, teléfono o visítanos en Zona Minerva, Guadalajara.",
    url: "https://fabricadelentes.mx/contacto",
    images: [{ url: "https://fabricadelentes.mx/images/hero-1.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Fábrica de Lentes · Guadalajara",
    description: "Agenda tu examen de la vista gratis en Guadalajara.",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
