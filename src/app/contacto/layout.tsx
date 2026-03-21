import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | Fábrica de Lentes® | Óptica en Guadalajara",
  description:
    "Agenda tu examen de la vista gratis. Contáctanos por WhatsApp, teléfono o visítanos en Zona Minerva, Guadalajara. Lun–Sáb 10:00–20:00.",
  alternates: { canonical: "https://fabricadelentes.mx/contacto" },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
