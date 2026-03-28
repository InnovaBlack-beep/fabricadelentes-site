"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════
// BASE DE CONOCIMIENTO — FÁBRICA DE LENTES
// ═══════════════════════════════════════════════════════════════

type KBEntry = {
  keys: string[];
  title: string;
  body: string;
};

const KB: KBEntry[] = [
  // ── SALUDO ──
  {
    keys: ["hola", "buenas", "buen dia", "buenos dias", "buenas tardes", "buenas noches", "hey", "ola", "hi", "hello"],
    title: "Bienvenido a Fábrica de Lentes",
    body: "Soy tu asesor óptico virtual. Puedo ayudarte con:\n\n• Elegir el armazón ideal para tu rostro\n• Entender tu receta oftalmológica\n• Conocer nuestras marcas y precios\n• Tipos de micas y tratamientos\n• Lentes de contacto\n• Agendar tu examen de la vista gratis\n\n¿En qué puedo ayudarte?",
  },
  // ── EXAMEN DE LA VISTA ──
  {
    keys: ["examen", "examen de la vista", "revision", "revisión", "consulta", "optometrista", "oculista", "checar vista", "revisar ojos", "graduacion", "graduación", "necesito lentes", "no veo bien", "veo borroso"],
    title: "Examen de la vista gratuito",
    body: "Ofrecemos examen de la vista completamente gratis, sin compromiso de compra.\n\n📋 ¿Qué incluye?\n• Revisión de agudeza visual\n• Medición de graduación (miopía, astigmatismo, hipermetropía)\n• Evaluación para lentes de contacto\n• Recomendación personalizada\n\n⏱ Duración: 15-20 minutos\n📍 Sucursal Zona Minerva, GDL\n🕐 Lun-Sáb 10:00 a 20:00\n\nNo necesitas cita, pero si prefieres reservar un horario escríbenos por WhatsApp.",
  },
  // ── TIPOS DE ROSTRO / ELEGIR ARMAZÓN ──
  {
    keys: ["rostro", "cara", "forma de cara", "que armazon", "qué armazón", "cual me queda", "cuál me queda", "elegir armazon", "elegir lentes", "combinar", "estilo", "que me recomiendan", "recomendacion", "asesoría", "asesoria"],
    title: "Guía para elegir tu armazón ideal",
    body: "La forma de tu rostro es clave para elegir el armazón perfecto:\n\n🔵 Rostro redondo → Armazones angulares o rectangulares para dar estructura. Evita redondos.\n\n🔲 Rostro cuadrado → Armazones redondos u ovalados para suavizar. Evita cuadrados.\n\n🔷 Rostro ovalado → ¡Te queda casi todo! Aprovecha para experimentar con formas.\n\n❤️ Rostro corazón → Armazones más anchos en la parte inferior. Cat-eye funciona bien.\n\n💎 Rostro diamante → Armazones con líneas suaves, ovalados o cat-eye.\n\nNuestras marcas tienen opciones para cada tipo de rostro. ¿Quieres que te recomiende modelos específicos?",
  },
  // ── MIOPÍA ──
  {
    keys: ["miopia", "miopía", "miope", "no veo de lejos", "lejos", "corto de vista"],
    title: "Miopía — ver borroso de lejos",
    body: "La miopía es la dificultad para ver objetos lejanos con claridad.\n\n📊 Se mide en dioptrías negativas (ej: -2.00)\n• Leve: hasta -3.00\n• Moderada: -3.00 a -6.00\n• Alta: más de -6.00\n\n🔧 Soluciones que ofrecemos:\n• Lentes graduados con micas delgadas (alto índice para graduaciones altas)\n• Lentes de contacto diarios o mensuales\n• Micas con antirreflejante + protección UV\n\nTe recomendamos un examen de la vista para determinar tu graduación exacta. Es gratis y sin compromiso.",
  },
  // ── ASTIGMATISMO ──
  {
    keys: ["astigmatismo", "astigma", "cilindro", "eje", "veo doble", "vision borrosa"],
    title: "Astigmatismo",
    body: "El astigmatismo causa visión borrosa tanto de lejos como de cerca, porque la córnea no es perfectamente esférica.\n\n📊 En tu receta aparece como:\n• CIL (cilindro): la potencia del astigmatismo\n• EJE: la orientación (de 1° a 180°)\n\n🔧 Soluciones:\n• Lentes graduados con corrección cilíndrica\n• Lentes de contacto tóricos (especiales para astigmatismo)\n• Micas de alto índice si la graduación es alta\n\nEs muy común — más del 30% de las personas tienen algún grado. Con la corrección adecuada se ve perfectamente.",
  },
  // ── HIPERMETROPÍA ──
  {
    keys: ["hipermetropia", "hipermetropía", "hipermetrope", "no veo de cerca", "cerca", "presbicia", "vista cansada", "lentes para leer", "bifocal", "progresivo", "multifocal"],
    title: "Hipermetropía y presbicia (vista cansada)",
    body: "📌 Hipermetropía: dificultad para ver de cerca (dioptrías positivas, ej: +2.00)\n📌 Presbicia: pérdida natural de enfoque cercano después de los 40 años\n\n🔧 Opciones de lentes:\n\n• Monofocales: corrigen solo una distancia\n• Bifocales: dos zonas (lejos arriba, cerca abajo) — se nota la línea divisoria\n• Progresivos: corrección gradual sin línea visible (los más cómodos y estéticos)\n\n💡 Recomendación Fábrica de Lentes:\nPara mayores de 40 con presbicia, los lentes progresivos son la mejor inversión. Los fabricamos en nuestro laboratorio propio con entrega el mismo día.\n\nPrecio referencia progresivos: desde $2,500 (armazón + micas).",
  },
  // ── RECETA / PRESCRIPCIÓN ──
  {
    keys: ["receta", "prescripcion", "prescripción", "como leer", "esfera", "od", "oi", "dip", "distancia pupilar", "que significa", "entender receta"],
    title: "Cómo leer tu receta oftalmológica",
    body: "Tu receta tiene estos campos:\n\n👁 OD = Ojo Derecho | OI = Ojo Izquierdo\n\n• ESF (Esfera): potencia principal\n  → Negativo (-): miopía\n  → Positivo (+): hipermetropía\n\n• CIL (Cilindro): astigmatismo\n  → Si está vacío, no tienes astigmatismo\n\n• EJE: orientación del astigmatismo (1°-180°)\n\n• ADD: adición para lectura (presbicia)\n  → Si aparece, necesitas progresivos o bifocales\n\n• DIP: distancia pupilar en mm\n  → Esencial para centrar las micas correctamente\n\n📸 Puedes enviarnos foto de tu receta por WhatsApp y te cotizamos al momento.",
  },
  // ── MICAS / TRATAMIENTOS ──
  {
    keys: ["mica", "micas", "cristal", "cristales", "antirreflejante", "antireflejante", "blue", "azul", "luz azul", "fotocromatico", "fotocromático", "transition", "transitions", "tratamiento", "proteccion", "protección", "uv", "alto indice"],
    title: "Tipos de micas y tratamientos",
    body: "Fabricamos todas las micas en nuestro laboratorio propio:\n\n🔹 Antirreflejante (AR)\nElimina reflejos molestos. Ideal para uso diario y pantallas.\n\n🔹 Protección Blue (luz azul)\nFiltra la luz azul de pantallas. Reduce fatiga visual digital.\n\n🔹 Fotocromáticas (Transitions)\nSe oscurecen con el sol y se aclaran en interiores. 2 en 1.\n\n🔹 Polarizadas\nPara lentes de sol. Eliminan deslumbramiento.\n\n🔹 Alto índice (1.67 / 1.74)\nMicas más delgadas para graduaciones altas (-4.00 o más).\n\n🔹 Protección UV 400\nBloquea el 100% de rayos UV. Incluida en todas nuestras micas.\n\n💰 Todas nuestras micas incluyen AR + UV de serie. Los tratamientos adicionales tienen costo según el tipo.",
  },
  // ── MARCAS ──
  {
    keys: ["marca", "marcas", "brizzant", "frida kahlo", "nobleman", "massimo", "que marcas", "qué marcas", "catalogo", "catálogo", "coleccion", "colección"],
    title: "Nuestras marcas exclusivas",
    body: "Trabajamos con marcas de diseño exclusivo:\n\n✦ Brizzant — $1,349\nDiseño contemporáneo, monturas metálicas ligeras. Líneas hexagonales y redondas. Ideal para looks modernos.\n\n✦ Frida Kahlo — $1,650\nColección inspirada en el arte mexicano. Elegancia y sofisticación. Disponible en graduados y solares.\n\n✦ Nobleman — $1,499\nClásicos atemporales. Acabados premium con diseño sobrio y elegante.\n\n✦ Massimo — $1,499\nLíneas modernas e italianas. Materiales de primera calidad.\n\n✦ Lentes de contacto: Air Optix, Alcon, Frecuent\nDesde $1,064.\n\nTodos los armazones incluyen estuche y paño. Puedes ver el catálogo completo en nuestra página.",
  },
  // ── PRECIOS ──
  {
    keys: ["precio", "precios", "cuanto cuesta", "cuánto cuesta", "costo", "costos", "cuanto vale", "cuánto vale", "barato", "económico", "economico", "rango de precio", "presupuesto"],
    title: "Precios y paquetes",
    body: "Nuestros precios de armazones:\n\n• Brizzant: $1,349\n• Nobleman: $1,499\n• Massimo: $1,499 - $1,549\n• Frida Kahlo: $1,650\n• Lentes de contacto: desde $1,064\n\n📦 Paquetes graduados (armazón + micas):\n• Armazón + micas AR básicas: desde $1,849\n• Armazón + micas blue (luz azul): desde $2,149\n• Armazón + micas fotocromáticas: desde $2,649\n• Armazón + progresivos: desde $2,500\n\n🎁 Incluye siempre:\n• Examen de la vista gratis\n• Estuche y paño\n• Garantía de 1 año en armazón\n• Garantía de 60 días en graduación\n\nPara una cotización exacta, envíanos tu receta por WhatsApp.",
  },
  // ── LENTES DE CONTACTO ──
  {
    keys: ["contacto", "lentes de contacto", "lente de contacto", "pupilente", "pupilentes", "air optix", "alcon", "frecuent", "total 1", "desechable", "mensual", "diario"],
    title: "Lentes de contacto",
    body: "Manejamos las mejores marcas:\n\n🔹 Air Optix HydraGlyde — $1,120\nUso mensual. Máxima comodidad todo el día. Ideal para uso prolongado.\n\n🔹 Alcon Frecuent — $1,064\nUso frecuente. Buena relación calidad-precio.\n\n🔹 Alcon Total 1 — $1,200\nTecnología de gradiente acuoso. Comodidad excepcional.\n\n⚠️ Importante:\n• Necesitas receta con parámetros de contacto (curva base, diámetro)\n• Si nunca has usado contactos, te hacemos la adaptación\n• No vendemos lentes de contacto sin receta vigente\n\n💡 Consejo: Si tienes astigmatismo, necesitas lentes tóricos — pregúntanos por disponibilidad y precio.",
  },
  // ── LENTES DE SOL ──
  {
    keys: ["sol", "lentes de sol", "solar", "solares", "polarizado", "polarizados", "proteccion solar", "uv sol"],
    title: "Lentes de sol",
    body: "Nuestra colección de lentes de sol:\n\n✦ Frida Kahlo Solar — $1,650\n21 modelos disponibles. Diseño artístico mexicano con protección UV 400.\n\n🔹 Características:\n• Protección UV 400 (bloquea 100% rayos UVA y UVB)\n• Opción polarizada disponible (elimina deslumbramiento)\n• Se pueden graduar con tu prescripción\n\n💡 ¿Sabías que?\nLos lentes de sol graduados son ideales si necesitas corrección visual y pasas tiempo al aire libre. Los fabricamos en nuestro laboratorio.\n\nVen a probártelos en sucursal o pídenos fotos de modelos específicos por WhatsApp.",
  },
  // ── LABORATORIO ──
  {
    keys: ["laboratorio", "fabrican", "fabricacion", "fabricación", "donde hacen", "dónde hacen", "cuanto tardan", "cuánto tardan", "tiempo de entrega", "entrega", "rapido", "rápido", "urgente", "mismo dia", "mismo día", "express", "1 hora", "una hora"],
    title: "Laboratorio propio — entrega express",
    body: "Nuestro diferenciador: tenemos laboratorio óptico propio en Guadalajara.\n\n⚡ Tiempos de entrega:\n• Micas monofocales: desde 1 hora\n• Micas con tratamiento especial: 24-48 horas\n• Progresivos: 2-3 días\n• Reparaciones: mismo día\n\n🏭 ¿Qué fabricamos?\n• Micas graduadas en todas las prescripciones\n• Tratamientos AR, blue, fotocromático\n• Micas de alto índice\n• Lentes de sol graduados\n\nNo somos intermediarios — fabricamos directamente. Eso nos permite ofrecer mejor precio y entrega más rápida que la competencia.",
  },
  // ── SUCURSAL / UBICACIÓN ──
  {
    keys: ["sucursal", "sucursales", "donde estan", "dónde están", "ubicacion", "ubicación", "direccion", "dirección", "como llego", "cómo llego", "mapa", "minerva", "guadalajara", "gdl", "horario", "horarios", "abren", "cierran"],
    title: "Sucursal y horarios",
    body: "📍 Zona Minerva, Guadalajara, Jalisco\n\n🕐 Horario:\nLunes a Sábado: 10:00 a 20:00\nDomingo: Cerrado\n\n📞 Teléfono: 33 1425 7226\n📱 WhatsApp: 33 1425 7226\n📧 contacto@fabricadelentes.mx\n\n🚗 Estacionamiento disponible en la zona.\n\nVen sin cita — atendemos por orden de llegada. Si prefieres reservar horario, escríbenos por WhatsApp.",
  },
  // ── GARANTÍA ──
  {
    keys: ["garantia", "garantía", "devolucion", "devolución", "cambio", "defecto", "se rompieron", "roto", "rompió", "rompieron", "cancelar", "cancelacion", "cancelación"],
    title: "Garantías y devoluciones",
    body: "🛡 Nuestras garantías:\n\n• Armazones: 1 año contra defectos de fabricación\n• Micas (graduación): 60 días — si no es correcta, las reemplazamos gratis\n• Tratamiento AR: 6 meses contra desprendimiento\n• Lentes de contacto sellados: 15 días para cambio\n\n❌ No cubre:\n• Daños por uso inadecuado, caídas o aplastamiento\n• Rayones por limpieza con productos abrasivos\n• Lentes de contacto abiertos\n\n📋 Para hacer válida tu garantía:\n1. Acude a sucursal con tu comprobante de compra\n2. Evaluamos el producto\n3. Si procede, reparamos o reemplazamos en 3-7 días hábiles\n\nMás detalles en fabricadelentes.mx/politica-de-garantia",
  },
  // ── EMPRESAS / CONVENIOS ──
  {
    keys: ["empresa", "empresas", "convenio", "corporativo", "empleados", "rh", "recursos humanos", "descuento empresa", "grupo"],
    title: "Convenios empresariales",
    body: "Ofrecemos convenios ópticos para empresas:\n\n✅ Beneficios:\n• Examen de la vista gratis para todos los empleados\n• Descuentos por volumen en armazones y micas\n• Servicio en sus instalaciones (eventos de salud visual)\n• Facilidades de pago\n• Atención preferente en sucursal\n\n📊 Ya atendemos empresas con +150 empleados en una sola cuenta.\n\nSi eres de RR.HH. y quieres más información, escríbenos por WhatsApp o visita fabricadelentes.mx/empresas",
  },
  // ── CUIDADO DE LENTES ──
  {
    keys: ["cuidar", "cuidado", "limpiar", "limpieza", "lavar", "rayan", "rayar", "mantenimiento", "como limpiar", "cómo limpiar", "empañan", "empañados"],
    title: "Cómo cuidar tus lentes",
    body: "Para que tus lentes duren más:\n\n✅ Haz esto:\n• Lava con agua y jabón neutro (sin fragancia)\n• Seca con un paño de microfibra limpio\n• Guárdalos siempre en su estuche\n• Tómalos con ambas manos al ponértelos\n\n❌ Evita esto:\n• Limpiar con la playera o papel (raya las micas)\n• Dejarlos boca abajo sobre las micas\n• Exponerlos a temperaturas extremas (tablero del carro)\n• Usar productos con alcohol o amoníaco\n\n💧 Para empañamiento:\nUsa paños anti-empañamiento o spray especial. Pregúntanos en sucursal.\n\n🔧 Si se aflojaron o chuecaron, tráelos a sucursal — los ajustamos gratis.",
  },
  // ── NIÑOS ──
  {
    keys: ["niño", "niños", "niña", "niñas", "hijo", "hija", "infantil", "pediatrico", "pediátrico", "chiquitos", "pequeños"],
    title: "Lentes para niños",
    body: "Atendemos a niños desde los 3 años:\n\n👶 ¿Cuándo llevar a un niño al examen?\n• Se acerca mucho a la pantalla/libros\n• Entrecierra los ojos para ver\n• Dolor de cabeza frecuente\n• Bajo rendimiento escolar\n• Se frota los ojos constantemente\n\n🔧 Opciones de armazones infantiles:\n• Materiales flexibles e irrompibles\n• Colores y diseños atractivos\n• Ajuste seguro con patillas flexibles\n\n💡 Recomendamos micas de policarbonato para niños — son más resistentes a impactos.\n\nEl examen de la vista es gratis también para niños. Tráelos a sucursal.",
  },
  // ── PROMOCIONES ──
  {
    keys: ["promocion", "promoción", "promociones", "oferta", "ofertas", "descuento", "descuentos", "2x1", "meses sin intereses", "msi"],
    title: "Promociones vigentes",
    body: "Nuestras promociones actuales:\n\n🔥 Examen de la vista GRATIS — siempre, sin compromiso\n\n💰 Promociones especiales cambian mensualmente. Para conocer las vigentes:\n\n• Visita nuestra sucursal\n• Escríbenos por WhatsApp al 33 1425 7226\n• Revisa nuestras redes: @fabricadelentesmex\n\n📱 Síguenos en Instagram y TikTok para enterarte primero de nuevas ofertas.",
  },
  // ── DIFERENCIADORES ──
  {
    keys: ["por que", "por qué", "porque", "diferencia", "mejor", "ventaja", "vs", "versus", "devlyn", "sears", "optica", "óptica", "competencia"],
    title: "¿Por qué Fábrica de Lentes?",
    body: "Lo que nos hace diferentes:\n\n🏭 Laboratorio propio\nNo somos intermediarios. Fabricamos tus micas aquí en Guadalajara. Eso significa mejor precio y entrega más rápida.\n\n⚡ Entrega express\nLentes listos desde 1 hora. En la mayoría de ópticas tardas 5-7 días.\n\n🆓 Examen gratis\nSin compromiso, sin costo, sin letra chica.\n\n👤 Trato personal\nSomos un equipo pequeño. Te conocemos, te asesoramos, y te damos seguimiento.\n\n🛡 Garantía real\n1 año en armazón, 60 días en graduación. Si algo sale mal, lo resolvemos.\n\n💰 Precio justo\nAl fabricar directo, eliminamos intermediarios. Calidad premium a precio accesible.",
  },
  // ── AGENDAR CITA ──
  {
    keys: ["cita", "agendar", "agenda", "reservar", "reserva", "apartar", "cuando puedo ir", "cuándo puedo ir", "disponibilidad", "turno", "hora disponible"],
    title: "Agendar tu cita",
    body: "Agendar es muy fácil:\n\n📱 Por WhatsApp (lo más rápido):\nEscríbenos al 33 1425 7226 con:\n1. Tu nombre\n2. Día y hora que prefieres\n3. Si es para examen de la vista, compra de lentes, o ambos\n\nTe confirmamos en minutos.\n\n🏪 Sin cita:\nTambién puedes llegar directamente a sucursal. Atendemos por orden de llegada.\n\n📍 Zona Minerva, GDL\n🕐 Lun-Sáb 10:00 a 20:00\n\n💡 Tip: Los mejores horarios para menor espera son entre 10:00 y 12:00 de martes a jueves.",
  },
  // ── COMPRAR / PROCESO DE COMPRA ──
  {
    keys: ["comprar", "quiero comprar", "como compro", "cómo compro", "proceso", "pedido", "ordenar", "pedir", "encargar", "apartado", "apartar"],
    title: "Cómo comprar tus lentes",
    body: "El proceso es simple:\n\n1️⃣ Elige tu armazón\nEn sucursal o desde nuestra web. Puedes probarte todos los que quieras.\n\n2️⃣ Examen de la vista (gratis)\nNuestro optometrista te da tu receta actualizada en 15 minutos.\n\n3️⃣ Elige tus micas\nTe asesoramos: antirreflejante, blue, fotocromático, progresivos...\n\n4️⃣ Fabricamos en el momento\nEn nuestro laboratorio propio. Monofocales listos desde 1 hora.\n\n5️⃣ ¡Listo!\nTe vas con tus lentes el mismo día.\n\n💳 Formas de pago:\n• Efectivo\n• Tarjeta débito/crédito\n• Transferencia\n\n¿Quieres que te ayude a elegir un armazón?",
  },
  // ── COTIZAR ──
  {
    keys: ["cotizar", "cotizacion", "cotización", "cuanto me saldria", "cuánto me saldría", "cuanto por", "cuánto por", "enviar receta", "tengo receta"],
    title: "Cotización rápida",
    body: "Para cotizarte al momento necesitamos:\n\n📋 Tu receta con:\n• Graduación (esfera, cilindro, eje)\n• Distancia pupilar (DIP)\n• Si necesitas progresivos: la adición (ADD)\n\n📸 Envíanos foto de tu receta por WhatsApp al 33 1425 7226 y te respondemos con:\n• Opciones de armazón\n• Tipos de mica recomendados\n• Precio exacto\n• Tiempo de entrega\n\nSi no tienes receta, ven por tu examen gratis y te cotizamos en el momento.",
  },
  // ── PAGO / FORMAS DE PAGO ──
  {
    keys: ["pago", "pagar", "tarjeta", "efectivo", "transferencia", "credito", "crédito", "debito", "débito", "meses", "meses sin intereses", "financiamiento"],
    title: "Formas de pago",
    body: "Aceptamos:\n\n💵 Efectivo\n💳 Tarjeta de débito\n💳 Tarjeta de crédito (Visa, Mastercard, Amex)\n🏦 Transferencia bancaria\n\n📱 ¿Meses sin intereses?\nPregunta en sucursal por promociones vigentes con tarjetas participantes.\n\nEl pago se realiza al momento de tu compra en sucursal.",
  },
  // ── REDES SOCIALES ──
  {
    keys: ["instagram", "tiktok", "facebook", "redes", "redes sociales", "siguenos", "síguenos"],
    title: "Nuestras redes sociales",
    body: "Síguenos para ver modelos nuevos, promociones y contenido:\n\n📸 Instagram: @fabricadelentesmex\n🎵 TikTok: @fabricadelentes\n📘 Facebook: /fabricadelentesmex\n\nPublicamos modelos nuevos, tips de cuidado visual y promociones exclusivas.",
  },
  // ── GRACIAS / DESPEDIDA ──
  {
    keys: ["gracias", "muchas gracias", "genial", "perfecto", "excelente", "ok", "vale", "listo", "adios", "adiós", "bye", "nos vemos", "hasta luego"],
    title: "Con gusto",
    body: "¡Con mucho gusto! Si necesitas algo más, aquí estaré.\n\nRecuerda que también puedes:\n• Visitarnos en Zona Minerva, GDL\n• Escribirnos al 33 1425 7226\n• Agendar tu examen de la vista gratis\n\n¡Te esperamos! 👋",
  },
];

// ── MATCHING ──
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchKB(input: string): KBEntry | null {
  const q = normalize(input);
  let best: KBEntry | null = null;
  let bestScore = 0;

  for (const entry of KB) {
    let score = 0;
    for (const key of entry.keys) {
      const nk = normalize(key);
      if (q.includes(nk)) {
        score += nk.split(" ").length * 3;
      } else {
        for (const word of nk.split(" ")) {
          if (word.length > 2 && q.includes(word)) score += 1;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return bestScore >= 1 ? best : null;
}

// ── COMPONENT ──
type Msg = { role: "user" | "bot"; text: string; title?: string };

const quickActions = [
  "Examen de la vista",
  "Marcas y precios",
  "Cómo elegir armazón",
  "Lentes de contacto",
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const respond = useCallback((text: string) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setTyping(true);

    setTimeout(() => {
      const match = matchKB(text);
      if (match) {
        setMessages((prev) => [
          ...prev,
          { role: "bot", title: match.title, text: match.body },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            title: "Te conecto con un asesor",
            text: "No tengo información específica sobre eso, pero uno de nuestros asesores puede ayudarte al momento.\n\nEscríbenos por WhatsApp y te respondemos en minutos.",
          },
        ]);
      }
      setTyping(false);
    }, 800);
  }, []);

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setInput("");
    respond(t);
  };

  const hasMessages = messages.length > 0;

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 hover:scale-105"
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#1A1818",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
        aria-label={open ? "Cerrar chat" : "Abrir asesor óptico"}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed z-50 flex flex-col"
          style={{
            bottom: 80,
            right: 24,
            width: "min(400px, calc(100vw - 48px))",
            height: "min(560px, calc(100vh - 120px))",
            borderRadius: 16,
            background: "#fff",
            boxShadow: "0 12px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 flex-shrink-0"
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid #F0F0F0",
            }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#1A1818",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              FL
            </div>
            <div className="min-w-0">
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1818" }}>
                Asesor Óptico
              </p>
              <p style={{ fontSize: 11, color: "#9CA3AF" }}>
                Fábrica de Lentes · En línea
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={msgsRef}
            className="flex-1 overflow-y-auto"
            style={{ padding: "16px 16px 8px" }}
          >
            {!hasMessages && (
              <div style={{ paddingBottom: 8 }}>
                <div
                  style={{
                    background: "#F9FAFB",
                    borderRadius: 12,
                    padding: "14px 16px",
                    marginBottom: 12,
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  <p style={{ fontWeight: 600, color: "#1A1818", marginBottom: 6 }}>
                    Hola, soy tu asesor óptico virtual
                  </p>
                  Puedo ayudarte a elegir lentes, entender tu receta, conocer precios y más. ¿En qué te ayudo?
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((qa) => (
                    <button
                      key={qa}
                      onClick={() => respond(qa)}
                      style={{
                        fontSize: 12,
                        padding: "6px 14px",
                        borderRadius: 20,
                        border: "1px solid #E5E7EB",
                        background: "#fff",
                        color: "#374151",
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#1A1818";
                        e.currentTarget.style.color = "#1A1818";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#E5E7EB";
                        e.currentTarget.style.color = "#374151";
                      }}
                    >
                      {qa}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    maxWidth: "85%",
                    borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                    padding: "10px 14px",
                    fontSize: 13,
                    lineHeight: 1.6,
                    ...(msg.role === "user"
                      ? { background: "#1A1818", color: "#fff" }
                      : { background: "#F9FAFB", color: "#374151" }),
                  }}
                >
                  {msg.title && (
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: 13,
                        color: msg.role === "user" ? "#fff" : "#1A1818",
                        marginBottom: 4,
                      }}
                    >
                      {msg.title}
                    </p>
                  )}
                  {msg.text.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < msg.text.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                  {/* WhatsApp link for fallback */}
                  {msg.role === "bot" && msg.title === "Te conecto con un asesor" && (
                    <a
                      href="https://wa.me/523314257226?text=Hola%2C%20quiero%20información%20sobre%20lentes"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 10,
                        padding: "8px 16px",
                        borderRadius: 20,
                        background: "#25D366",
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Escribir por WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", marginBottom: 10 }}>
                <div
                  style={{
                    background: "#F9FAFB",
                    borderRadius: "14px 14px 14px 4px",
                    padding: "12px 18px",
                    display: "flex",
                    gap: 4,
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#9CA3AF",
                        animation: "pulse 1.2s ease-in-out infinite",
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div
            className="flex-shrink-0"
            style={{
              padding: "12px 16px",
              borderTop: "1px solid #F0F0F0",
            }}
          >
            <div
              className="flex items-center gap-2"
              style={{
                background: "#F9FAFB",
                borderRadius: 24,
                padding: "4px 4px 4px 16px",
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Escribe tu pregunta..."
                style={{
                  flex: 1,
                  border: "none",
                  background: "none",
                  outline: "none",
                  fontSize: 13,
                  color: "#1A1818",
                }}
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: input.trim() ? "#1A1818" : "#E5E7EB",
                  border: "none",
                  cursor: input.trim() ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.15s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={input.trim() ? "#fff" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
