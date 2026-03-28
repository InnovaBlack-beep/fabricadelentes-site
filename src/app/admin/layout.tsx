import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Fábrica de Lentes",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
