import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto y Sucursales | Examen de la Vista Gratis | Fábrica de Lentes® Guadalajara",
  description:
    "Agenda tu examen de la vista gratis en Fábrica de Lentes, Zona Minerva, Guadalajara. Contáctanos por WhatsApp 33 1425 7226, teléfono o visítanos. Lun-Sáb 10:00-20:00. Estacionamiento disponible. Atención sin cita.",
  keywords: [
    "contacto fábrica de lentes", "óptica zona minerva guadalajara",
    "examen de la vista gratis guadalajara", "agendar cita óptica guadalajara",
    "óptica guadalajara dirección", "óptica guadalajara horario",
    "óptica guadalajara teléfono", "óptica guadalajara whatsapp",
    "sucursal óptica guadalajara", "sucursal óptica zona minerva",
    "donde queda fábrica de lentes", "cómo llegar fábrica de lentes guadalajara",
    "examen de la vista sin cita guadalajara", "revisión de ojos gratis guadalajara",
    "optometrista guadalajara", "consulta oftalmológica guadalajara",
  ],
  alternates: { canonical: "https://fabricadelentes.mx/contacto" },
  openGraph: {
    title: "Contacto | Examen de la Vista Gratis en Guadalajara | Fábrica de Lentes®",
    description: "Agenda tu examen gratis. WhatsApp 33 1425 7226. Zona Minerva, GDL. Lun-Sáb 10:00-20:00.",
    url: "https://fabricadelentes.mx/contacto",
    images: [{ url: "https://fabricadelentes.mx/images/hero-1.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Fábrica de Lentes® Guadalajara",
    description: "Examen de la vista gratis. WhatsApp 33 1425 7226. Zona Minerva, GDL.",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
