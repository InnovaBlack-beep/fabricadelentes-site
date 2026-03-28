import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Garantía y Cancelación — Fábrica de Lentes®",
  description:
    "Conoce nuestras políticas de garantía, devoluciones y cancelaciones en Fábrica de Lentes. Tu satisfacción es nuestra prioridad.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fabricadelentes.mx/politica-de-garantia" },
  openGraph: {
    title: "Política de Garantía y Cancelación — Fábrica de Lentes®",
    description: "Políticas de garantía, devoluciones y cancelaciones en Fábrica de Lentes.",
    url: "https://fabricadelentes.mx/politica-de-garantia",
  },
};

export default function PoliticaDeGarantia() {
  return (
    <section
      className="max-w-[800px] mx-auto px-6 py-20"
      style={{ color: "#1A1818" }}
    >
      <h1
        className="text-3xl md:text-4xl font-semibold mb-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Política de Garantía y Cancelación
      </h1>
      <p className="text-sm mb-10" style={{ color: "#A09080" }}>
        Última actualización: marzo 2026
      </p>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#6A5A4A" }}>
        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Garantía en armazones
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Todos nuestros armazones cuentan con <strong>garantía de 1 año</strong> contra
            defectos de fabricación a partir de la fecha de compra.
          </li>
          <li>
            La garantía cubre: defectos en bisagras, soldaduras, recubrimiento y materiales.
          </li>
          <li>
            La garantía <strong>no cubre</strong>: daños por uso inadecuado, caídas,
            aplastamiento, exposición a químicos o modificaciones realizadas por terceros.
          </li>
          <li>Para hacer válida la garantía, presente su comprobante de compra original.</li>
        </ul>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Garantía en micas/lentes
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Las micas graduadas tienen <strong>garantía de graduación por 60 días</strong>. Si
            la graduación no es correcta, las reemplazamos sin costo adicional con receta
            actualizada.
          </li>
          <li>
            Las micas con tratamiento antirreflejante tienen garantía de{" "}
            <strong>6 meses</strong> contra desprendimiento del tratamiento en condiciones
            normales de uso.
          </li>
          <li>
            La garantía <strong>no cubre</strong>: rayones por uso normal, daños por limpieza
            con productos abrasivos o solventes, ni daños por exposición a temperaturas
            extremas.
          </li>
        </ul>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Garantía en lentes de contacto
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Los lentes de contacto sellados pueden cambiarse dentro de los{" "}
            <strong>15 días</strong> posteriores a la compra si la caja está sin abrir.
          </li>
          <li>
            No se aceptan devoluciones de lentes de contacto que hayan sido abiertos por
            razones de higiene y salud.
          </li>
          <li>
            Si el lente de contacto presenta un defecto de fábrica, se reemplaza
            inmediatamente presentando el producto y su comprobante.
          </li>
        </ul>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Política de cancelación y devoluciones
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Cancelación antes de fabricación:</strong> Si cancela su pedido antes de
            que iniciemos el proceso de fabricación de micas, se realiza reembolso completo.
          </li>
          <li>
            <strong>Cancelación después de fabricación:</strong> Si las micas ya fueron
            fabricadas con su graduación, no es posible realizar reembolso ya que son
            productos personalizados.
          </li>
          <li>
            <strong>Armazones sin graduar:</strong> Pueden devolverse dentro de los{" "}
            <strong>7 días</strong> posteriores a la compra en su empaque original y sin
            señales de uso.
          </li>
          <li>
            <strong>Reembolsos:</strong> Se procesan por el mismo método de pago original en
            un plazo de 5 a 10 días hábiles.
          </li>
        </ul>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Examen de la vista
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            El examen de la vista es <strong>gratuito</strong> y no genera compromiso de
            compra.
          </li>
          <li>
            Si requiere una cita, puede agendarla por WhatsApp o directamente en sucursal.
          </li>
        </ul>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Cómo hacer válida su garantía
        </h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Acuda a nuestra sucursal con el producto y su comprobante de compra.</li>
          <li>
            Nuestro equipo evaluará el producto para determinar si el daño está cubierto por
            la garantía.
          </li>
          <li>
            Si procede, se reparará o reemplazará el producto sin costo en un plazo de 3 a 7
            días hábiles según el caso.
          </li>
        </ol>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Contacto
        </h2>
        <p>Para cualquier duda sobre garantías o devoluciones:</p>
        <ul className="list-none space-y-1">
          <li>
            <strong>WhatsApp:</strong> 33 1425 7226
          </li>
          <li>
            <strong>Email:</strong> contacto@fabricadelentes.mx
          </li>
          <li>
            <strong>Sucursal:</strong> Zona Minerva, Guadalajara, Jalisco
          </li>
          <li>
            <strong>Horario:</strong> Lunes a Sábado, 10:00 a 20:00
          </li>
        </ul>
      </div>
    </section>
  );
}
