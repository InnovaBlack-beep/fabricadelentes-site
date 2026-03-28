import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Fábrica de Lentes®",
  description:
    "Aviso de privacidad de Fábrica de Lentes. Conoce cómo protegemos tus datos personales conforme a la LFPDPPP.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fabricadelentes.mx/aviso-de-privacidad" },
  openGraph: {
    title: "Aviso de Privacidad — Fábrica de Lentes®",
    description: "Conoce cómo protegemos tus datos personales conforme a la LFPDPPP.",
    url: "https://fabricadelentes.mx/aviso-de-privacidad",
  },
};

export default function AvisoDePrivacidad() {
  return (
    <section
      className="max-w-[800px] mx-auto px-6 py-20"
      style={{ color: "#1A1818" }}
    >
      <h1
        className="text-3xl md:text-4xl font-semibold mb-2"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Aviso de Privacidad
      </h1>
      <p className="text-sm mb-10" style={{ color: "#A09080" }}>
        Última actualización: marzo 2026
      </p>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#6A5A4A" }}>
        <p>
          <strong style={{ color: "#1A1818" }}>Fábrica de Lentes</strong>, con domicilio en
          Zona Minerva, Guadalajara, Jalisco, México, es responsable del tratamiento de los
          datos personales que nos proporcione, los cuales serán protegidos conforme a lo
          dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los
          Particulares (LFPDPPP) y demás normatividad aplicable.
        </p>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Datos personales que recabamos
        </h2>
        <p>Para las finalidades señaladas, podemos recabar los siguientes datos personales:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nombre completo</li>
          <li>Número de teléfono</li>
          <li>Correo electrónico</li>
          <li>Datos de salud visual (graduación, diagnóstico optométrico)</li>
          <li>Dirección (en caso de envíos)</li>
        </ul>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Finalidades del tratamiento
        </h2>
        <p>Sus datos personales serán utilizados para:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Proveer los servicios de optometría y venta de productos ópticos que solicite</li>
          <li>Agendar y gestionar citas para examen de la vista</li>
          <li>Elaborar su expediente clínico visual</li>
          <li>Procesamiento de pedidos y facturación</li>
          <li>Comunicarnos con usted respecto a su pedido o servicio</li>
          <li>Enviar información sobre promociones, descuentos y nuevos productos (previo consentimiento)</li>
        </ul>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Transferencia de datos
        </h2>
        <p>
          Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo
          las excepciones previstas en el artículo 37 de la LFPDPPP. Podemos compartir
          información con laboratorios ópticos asociados exclusivamente para la fabricación de
          sus lentes.
        </p>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Derechos ARCO
        </h2>
        <p>
          Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de
          sus datos personales (derechos ARCO). Para ejercer cualquiera de estos derechos,
          puede enviar su solicitud a:
        </p>
        <p className="font-medium" style={{ color: "#1A1818" }}>
          contacto@fabricadelentes.mx
        </p>
        <p>
          Su solicitud deberá contener: nombre completo, domicilio o correo electrónico para
          comunicarle la respuesta, documentos que acrediten su identidad, y descripción clara
          de los datos respecto de los cuales busca ejercer sus derechos. Responderemos en un
          plazo máximo de 20 días hábiles.
        </p>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Uso de cookies y tecnologías de rastreo
        </h2>
        <p>
          Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su
          experiencia de navegación, analizar el tráfico del sitio y personalizar contenido.
          Utilizamos Google Analytics y Google Tag Manager para estos fines. Puede desactivar
          las cookies en la configuración de su navegador.
        </p>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Cambios al aviso de privacidad
        </h2>
        <p>
          Nos reservamos el derecho de efectuar modificaciones o actualizaciones al presente
          aviso de privacidad. Cualquier cambio será publicado en esta página:
          fabricadelentes.mx/aviso-de-privacidad
        </p>

        <h2 className="text-lg font-semibold pt-4" style={{ color: "#1A1818" }}>
          Contacto
        </h2>
        <p>
          Si tiene alguna duda sobre este aviso de privacidad, puede contactarnos en:
        </p>
        <ul className="list-none space-y-1">
          <li>
            <strong>Email:</strong> contacto@fabricadelentes.mx
          </li>
          <li>
            <strong>Teléfono:</strong> 33 1425 7226
          </li>
          <li>
            <strong>Dirección:</strong> Zona Minerva, Guadalajara, Jalisco, México
          </li>
        </ul>
      </div>
    </section>
  );
}
