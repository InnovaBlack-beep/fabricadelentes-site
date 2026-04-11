"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { addLead } from "@/lib/admin-store";

// ═══════════════════════════════════════════════════════════════
// ASESOR ÓPTICO v2 — FÁBRICA DE LENTES
// Flujo guiado con botones. El usuario NO necesita saber qué
// preguntar — Ana lo guía paso a paso.
// ═══════════════════════════════════════════════════════════════

type Option = { label: string; value: string; emoji?: string };
type Msg = { role: "user" | "bot"; text: string; options?: Option[] };

// ── FLUJOS GUIADOS ──────────────────────────────────────

const FLOWS: Record<string, { text: string; options?: Option[]; next?: string }> = {
  // ─── INICIO ───
  welcome: {
    text: "¡Hola! Soy Ana, tu asesora óptica en Fábrica de Lentes. ¿Qué te gustaría hacer hoy?",
    options: [
      { label: "Necesito lentes nuevos", value: "need_glasses", emoji: "👓" },
      { label: "Quiero agendar examen gratis", value: "book_exam", emoji: "📅" },
      { label: "Tengo una receta y quiero cotizar", value: "quote_rx", emoji: "📋" },
      { label: "Ya tengo lentes y necesito ayuda", value: "existing", emoji: "🔧" },
      { label: "Quiero saber precios", value: "prices", emoji: "💰" },
    ],
  },

  // ─── NECESITO LENTES NUEVOS ───
  need_glasses: {
    text: "¡Perfecto! Primero lo primero: ¿ya sabes tu graduación?",
    options: [
      { label: "Sí, tengo mi receta", value: "has_rx", emoji: "✅" },
      { label: "No, necesito que me revisen", value: "book_exam", emoji: "👁" },
      { label: "No estoy seguro/a", value: "symptoms", emoji: "🤔" },
    ],
  },

  symptoms: {
    text: "No te preocupes, vamos a descubrirlo juntos. ¿Cuál de estos te pasa?",
    options: [
      { label: "Veo borroso de lejos", value: "symptom_far", emoji: "🔭" },
      { label: "Me cuesta leer de cerca", value: "symptom_near", emoji: "📖" },
      { label: "Me duele la cabeza al usar pantallas", value: "symptom_screen", emoji: "💻" },
      { label: "Veo borroso de lejos Y de cerca", value: "symptom_both", emoji: "😵" },
      { label: "Solo quiero protección para pantallas", value: "symptom_bluecut", emoji: "🛡" },
    ],
  },

  symptom_far: {
    text: "Eso suena a miopía — es muy común y se corrige fácil con lentes graduados. Lo mejor es hacerte un examen para saber tu graduación exacta.\n\nEl examen es gratis, tarda 15 min y sales con tu receta. ¿Te agendo?",
    options: [
      { label: "Sí, quiero agendar", value: "book_exam", emoji: "📅" },
      { label: "¿Puedo ir sin cita?", value: "walkin", emoji: "🚶" },
    ],
  },

  symptom_near: {
    text: "Si te cuesta enfocar de cerca (celular, libros, etiquetas), puede ser presbicia o vista cansada. Es muy normal después de los 40.\n\nLa solución son lentes progresivos — corrigen lejos y cerca sin la línea fea de los bifocales.\n\n¿Quieres que te revisen gratis?",
    options: [
      { label: "Sí, quiero agendar examen", value: "book_exam", emoji: "📅" },
      { label: "¿Cuánto cuestan los progresivos?", value: "price_progressive", emoji: "💰" },
    ],
  },

  symptom_screen: {
    text: "Los dolores de cabeza frente a pantallas pueden ser por fatiga visual digital. Lentes con blue cut (protección de luz azul) ayudan mucho.\n\nTe recomiendo un examen para descartar que necesites graduación. Es gratis y rápido.",
    options: [
      { label: "Quiero agendar examen", value: "book_exam", emoji: "📅" },
      { label: "Solo quiero lentes con blue cut", value: "symptom_bluecut", emoji: "🛡" },
    ],
  },

  symptom_both: {
    text: "Si ves borroso tanto de lejos como de cerca, puede ser astigmatismo o una combinación con presbicia. Se corrige con lentes graduados — te necesitamos hacer un examen para determinar exactamente qué necesitas.\n\nEl examen es gratis y tarda 15 minutos.",
    options: [
      { label: "Agendar mi examen gratis", value: "book_exam", emoji: "📅" },
      { label: "¿Puedo ir sin cita?", value: "walkin", emoji: "🚶" },
    ],
  },

  symptom_bluecut: {
    text: "¡Buena decisión! Los lentes con blue cut protegen tus ojos de la luz azul de pantallas.\n\nTenemos lentes graduados a $1,949 que ya incluyen antirreflejante + blue cut. Si no necesitas graduación, también podemos ponerle micas planas con blue cut.\n\n¿Qué prefieres?",
    options: [
      { label: "Quiero con graduación (examen gratis)", value: "book_exam", emoji: "📅" },
      { label: "Solo blue cut sin graduación", value: "choose_frame", emoji: "🕶" },
      { label: "Ver armazones disponibles", value: "choose_frame", emoji: "👓" },
    ],
  },

  // ─── TENGO RECETA ───
  has_rx: {
    text: "¡Genial! Para cotizarte necesito tu receta. ¿Cómo me la quieres compartir?",
    options: [
      { label: "Enviar foto por WhatsApp", value: "whatsapp_rx", emoji: "📱" },
      { label: "La escribo aquí", value: "type_rx", emoji: "⌨️" },
      { label: "La llevo directo a sucursal", value: "walkin", emoji: "🏪" },
    ],
  },

  whatsapp_rx: {
    text: "¡Perfecto! Mándame foto de tu receta al WhatsApp y te respondo en minutos con:\n\n• Opciones de armazón\n• Tipo de micas recomendadas\n• Precio exacto\n• Tiempo de entrega\n\nDa click aquí abajo para abrir WhatsApp:",
    options: [
      { label: "Abrir WhatsApp", value: "__whatsapp_rx__", emoji: "💬" },
      { label: "Prefiero ir a sucursal", value: "walkin", emoji: "🏪" },
    ],
  },

  type_rx: {
    text: "Escríbeme los datos de tu receta. Necesito:\n\n• OD (ojo derecho): esfera, cilindro, eje\n• OI (ojo izquierdo): esfera, cilindro, eje\n• ADD (si aparece)\n• DIP (distancia pupilar)\n\nSi no entiendes tu receta, no te preocupes — mándame foto por WhatsApp y yo la interpreto.",
    options: [
      { label: "Mejor la envío por WhatsApp", value: "whatsapp_rx", emoji: "📱" },
      { label: "No entiendo mi receta", value: "explain_rx", emoji: "🤔" },
    ],
  },

  explain_rx: {
    text: "¡Te explico!\n\n👁 OD = ojo derecho, OI = ojo izquierdo\n\n• ESF (Esfera): negativo (-) = miopía, positivo (+) = hipermetropía\n• CIL (Cilindro): astigmatismo. Si está vacío, no tienes\n• EJE: dirección del astigmatismo (0-180)\n• ADD: si aparece, necesitas progresivos\n• DIP: distancia entre pupilas\n\nLo más fácil: mándame foto y yo la leo por ti.",
    options: [
      { label: "Enviar foto por WhatsApp", value: "whatsapp_rx", emoji: "📱" },
      { label: "Ir a sucursal con mi receta", value: "walkin", emoji: "🏪" },
    ],
  },

  // ─── ELEGIR ARMAZÓN ───
  choose_frame: {
    text: "¡Mi parte favorita! Tenemos 5 marcas. ¿Qué estilo te va más?",
    options: [
      { label: "Moderno y ligero", value: "brand_brizzant", emoji: "✨" },
      { label: "Elegante y artístico", value: "brand_fk", emoji: "🎨" },
      { label: "Clásico y sobrio", value: "brand_nobleman", emoji: "👔" },
      { label: "Contemporáneo italiano", value: "brand_massimo", emoji: "🇮🇹" },
      { label: "No sé, ayúdame a elegir", value: "face_shape", emoji: "🤷" },
    ],
  },

  brand_brizzant: {
    text: "Brizzant es nuestra línea moderna — armazones metálicos ultraligeros con diseño minimalista. Perfectos para uso diario.\n\nA $1,949 incluye armazón + graduación + antirreflejante + blue cut.\n\n¿Quieres verlos en el sitio o prefieres probártelos en sucursal?",
    options: [
      { label: "Ver colección en el sitio", value: "__link_graduados__", emoji: "🔗" },
      { label: "Ir a probármelos", value: "walkin", emoji: "🏪" },
      { label: "Ver otras marcas", value: "choose_frame", emoji: "👓" },
    ],
  },

  brand_fk: {
    text: "Frida Kahlo es nuestra joya — diseño mexicano, elegante, artístico. Es la más pedida por nuestras clientas.\n\nNueva colección: Inés, Bonito, María, Picasso, Casa Azul y Matilde. A $1,949 incluye todo (graduación + AR + blue cut).\n\n¿Quieres verlos?",
    options: [
      { label: "Ver colección en el sitio", value: "__link_graduados__", emoji: "🔗" },
      { label: "Ir a probármelos", value: "walkin", emoji: "🏪" },
      { label: "Ver otras marcas", value: "choose_frame", emoji: "👓" },
    ],
  },

  brand_nobleman: {
    text: "Nobleman es para quien busca un look clásico y profesional. Armazones de alta calidad con acabados premium.\n\nA $1,949 incluye todo: armazón + graduación + antirreflejante + blue cut.\n\n¿Te gustaría verlos?",
    options: [
      { label: "Ver colección en el sitio", value: "__link_graduados__", emoji: "🔗" },
      { label: "Ir a probármelos", value: "walkin", emoji: "🏪" },
      { label: "Ver otras marcas", value: "choose_frame", emoji: "👓" },
    ],
  },

  brand_massimo: {
    text: "Massimo tiene inspiración italiana — líneas contemporáneas y materiales de primera. Para quien busca estilo y comodidad.\n\nA $1,949 incluye armazón + graduación + antirreflejante + blue cut.\n\n¿Quieres verlos?",
    options: [
      { label: "Ver colección en el sitio", value: "__link_graduados__", emoji: "🔗" },
      { label: "Ir a probármelos", value: "walkin", emoji: "🏪" },
      { label: "Ver otras marcas", value: "choose_frame", emoji: "👓" },
    ],
  },

  face_shape: {
    text: "¡Te ayudo! La forma de tu cara es clave para elegir el armazón perfecto. ¿Cómo describirías tu rostro?",
    options: [
      { label: "Redondo", value: "face_round", emoji: "🔵" },
      { label: "Cuadrado", value: "face_square", emoji: "🔲" },
      { label: "Ovalado", value: "face_oval", emoji: "🔷" },
      { label: "Corazón", value: "face_heart", emoji: "❤️" },
      { label: "No sé, quiero asesoría en persona", value: "walkin", emoji: "🏪" },
    ],
  },

  face_round: {
    text: "Para cara redonda te van increíble los armazones rectangulares o angulares — dan estructura y alargan el rostro.\n\nTe recomiendo Brizzant (moderno, metálico) o Nobleman (clásico, angular).\n\nPero lo mejor es que te los pruebes. ¿Vienes a sucursal?",
    options: [
      { label: "Sí, quiero ir", value: "walkin", emoji: "🏪" },
      { label: "Ver Brizzant", value: "brand_brizzant", emoji: "✨" },
      { label: "Ver Nobleman", value: "brand_nobleman", emoji: "👔" },
    ],
  },

  face_square: {
    text: "Para cara cuadrada los armazones redondos u ovalados suavizan los rasgos. ¡Se ven muy bien!\n\nTe recomiendo Frida Kahlo (redondos artísticos) o Massimo (ovalados contemporáneos).",
    options: [
      { label: "Ir a probármelos", value: "walkin", emoji: "🏪" },
      { label: "Ver Frida Kahlo", value: "brand_fk", emoji: "🎨" },
      { label: "Ver Massimo", value: "brand_massimo", emoji: "🇮🇹" },
    ],
  },

  face_oval: {
    text: "¡La cara ovalada es la más versátil! Prácticamente cualquier forma de armazón te queda bien. Puedes elegir por estilo.\n\n¿Qué prefieres?",
    options: [
      { label: "Algo discreto y clásico", value: "brand_nobleman", emoji: "👔" },
      { label: "Algo moderno y ligero", value: "brand_brizzant", emoji: "✨" },
      { label: "Algo llamativo y artístico", value: "brand_fk", emoji: "🎨" },
      { label: "Quiero probármelos todos", value: "walkin", emoji: "🏪" },
    ],
  },

  face_heart: {
    text: "Para cara de corazón (frente ancha, mentón angosto), los armazones con parte inferior más ancha equilibran el rostro.\n\nTe recomiendo Massimo (cat-eye suave) o Frida Kahlo nueva colección (Bonito, Inés).",
    options: [
      { label: "Ir a probármelos", value: "walkin", emoji: "🏪" },
      { label: "Ver Frida Kahlo", value: "brand_fk", emoji: "🎨" },
      { label: "Ver Massimo", value: "brand_massimo", emoji: "🇮🇹" },
    ],
  },

  // ─── AGENDAR EXAMEN ───
  book_exam: {
    text: "¡El examen de la vista es gratis, sin compromiso y tarda solo 15 minutos!\n\nPuedes venir sin cita, pero si quieres asegurar tu horario, ¿cómo prefieres agendar?",
    options: [
      { label: "Agendar por WhatsApp", value: "__whatsapp_book__", emoji: "📱" },
      { label: "Ir sin cita (walk-in)", value: "walkin", emoji: "🚶" },
      { label: "¿Cuáles son los horarios?", value: "schedule", emoji: "🕐" },
    ],
  },

  schedule: {
    text: "Nuestro horario:\n\n📍 Zona Minerva, Guadalajara\n🕐 Lunes a Sábado: 10:00 - 20:00\n🚫 Domingos: cerrado\n\nLos mejores horarios para que no esperes: martes a jueves, entre 10:00 y 12:00.\n\n¿Te animas a venir?",
    options: [
      { label: "Agendar por WhatsApp", value: "__whatsapp_book__", emoji: "📱" },
      { label: "Voy sin cita", value: "walkin", emoji: "🚶" },
      { label: "¿Cómo llego?", value: "location", emoji: "📍" },
    ],
  },

  walkin: {
    text: "¡Claro, puedes venir sin cita! Te esperamos:\n\n📍 Zona Minerva, Guadalajara, Jalisco\n🕐 Lun-Sáb 10:00 a 20:00\n📞 WhatsApp: 33 1425 7226\n\nHay estacionamiento en la zona. Si vienes en Uber, pon \"Fábrica de Lentes Minerva\".\n\n¿Algo más en lo que te pueda ayudar?",
    options: [
      { label: "¿Cómo llego?", value: "location", emoji: "📍" },
      { label: "Ver precios antes de ir", value: "prices", emoji: "💰" },
      { label: "Listo, gracias", value: "bye", emoji: "👋" },
    ],
  },

  location: {
    text: "Estamos en Zona Minerva, Guadalajara, Jalisco.\n\nPuedes buscarnos en Google Maps como \"Fábrica de Lentes Minerva\" o te comparto la ubicación por WhatsApp.",
    options: [
      { label: "Envíame la ubicación por WhatsApp", value: "__whatsapp_location__", emoji: "📱" },
      { label: "Ya sé dónde es, gracias", value: "bye", emoji: "👋" },
    ],
  },

  // ─── PRECIOS ───
  prices: {
    text: "¡Aquí van nuestros precios!\n\n👓 Lentes graduados: $1,949\nIncluye: armazón + graduación + antirreflejante + blue cut + examen gratis + estuche + garantía\n\n🕶 Lentes de sol: $1,649\nFrida Kahlo y André Badi. Protección UV 400.\n\n📦 Upgrades:\n• Fotocromáticas: +$500\n• Progresivos: desde $2,500\n\n👁 Lentes de contacto: desde $1,064\n\n¿Qué te interesa?",
    options: [
      { label: "Quiero graduados", value: "need_glasses", emoji: "👓" },
      { label: "Quiero lentes de sol", value: "sunglasses", emoji: "🕶" },
      { label: "Quiero lentes de contacto", value: "contacts", emoji: "👁" },
      { label: "¿Cuánto cuestan los progresivos?", value: "price_progressive", emoji: "💰" },
    ],
  },

  price_progressive: {
    text: "Los lentes progresivos empiezan desde $2,500 con armazón incluido. Corrigen lejos y cerca — como bifocales pero sin la línea.\n\nEl precio varía según el rango de visión y calidad de la mica. Lo mejor es que vengas a que te revisemos gratis y te cotizamos exacto.\n\n¿Te agendo?",
    options: [
      { label: "Sí, agendar examen gratis", value: "book_exam", emoji: "📅" },
      { label: "Ver armazones primero", value: "choose_frame", emoji: "👓" },
    ],
  },

  sunglasses: {
    text: "Nuestra colección de sol:\n\n🎨 Frida Kahlo — 21 modelos, diseño mexicano\n👔 André Badi — 16 modelos, estilo cosmopolita\n\nTodos a $1,649 con protección UV 400. También los podemos graduar.\n\n¿Quieres verlos?",
    options: [
      { label: "Ver colección en el sitio", value: "__link_sol__", emoji: "🔗" },
      { label: "Quiero sol + graduación", value: "has_rx", emoji: "📋" },
      { label: "Ir a probármelos", value: "walkin", emoji: "🏪" },
    ],
  },

  contacts: {
    text: "Manejamos 3 opciones:\n\n🔹 Air Optix HydraGlyde — $1,120 (mensuales, los más cómodos)\n🔹 Alcon Frecuent — $1,064 (buena relación calidad-precio)\n🔹 Alcon Total 1 — $1,200 (lo más premium)\n\nNecesitas receta con parámetros de contacto. Si nunca has usado, te hacemos la adaptación aquí.\n\n¿Ya has usado lentes de contacto?",
    options: [
      { label: "Sí, ya uso y tengo receta", value: "whatsapp_rx", emoji: "✅" },
      { label: "No, quiero empezar", value: "book_exam", emoji: "👁" },
      { label: "Ver más info en el sitio", value: "__link_contacto__", emoji: "🔗" },
    ],
  },

  // ─── YA TENGO LENTES ───
  existing: {
    text: "¿Qué necesitas?",
    options: [
      { label: "Renovar graduación", value: "book_exam", emoji: "🔄" },
      { label: "Reparar o ajustar mis lentes", value: "repair", emoji: "🔧" },
      { label: "Problema con garantía", value: "warranty", emoji: "🛡" },
      { label: "Tips de cuidado y limpieza", value: "care", emoji: "✨" },
    ],
  },

  repair: {
    text: "¡Tráelos a sucursal! Ajustes y reparaciones menores son gratis y en el momento.\n\nSi necesitan un arreglo mayor, lo evaluamos y te damos precio. Generalmente es mismo día.\n\n📍 Zona Minerva, Lun-Sáb 10-20h",
    options: [
      { label: "¿Cómo llego?", value: "location", emoji: "📍" },
      { label: "Escribir por WhatsApp", value: "__whatsapp__", emoji: "📱" },
    ],
  },

  warranty: {
    text: "Nuestra garantía:\n\n🛡 Armazón: 1 año contra defectos de fabricación\n🛡 Graduación: 60 días — si no ves bien, cambiamos micas gratis\n🛡 Tratamiento AR: 6 meses\n\nSolo necesitas tu comprobante de compra. Ven a sucursal y lo resolvemos.\n\n¿Tienes tu ticket?",
    options: [
      { label: "Sí, voy a sucursal", value: "walkin", emoji: "🏪" },
      { label: "No lo encuentro", value: "__whatsapp__", emoji: "📱" },
    ],
  },

  care: {
    text: "Tips para que tus lentes duren más:\n\n✅ Correcto:\n• Agua tibia + jabón neutro (sin fragancia)\n• Secar con paño de microfibra\n• Guardarlos siempre en su estuche\n\n❌ Evita:\n• Limpiar con la playera (raya las micas)\n• Dejarlos boca abajo\n• El tablero del carro (el calor deforma el armazón)\n\nSi se te chuecaron o aflojaron, tráelos a sucursal — te los ajustamos gratis.",
    options: [
      { label: "Gracias, todo claro", value: "bye", emoji: "👋" },
      { label: "Necesito otra cosa", value: "welcome", emoji: "🔄" },
    ],
  },

  // ─── DESPEDIDA ───
  bye: {
    text: "¡Fue un gusto ayudarte! Recuerda:\n\n📍 Zona Minerva, Guadalajara\n🕐 Lun-Sáb 10:00-20:00\n📞 WhatsApp: 33 1425 7226\n\n¡Te esperamos! 👋",
    options: [
      { label: "Tengo otra duda", value: "welcome", emoji: "🔄" },
      { label: "Escribir por WhatsApp", value: "__whatsapp__", emoji: "📱" },
    ],
  },
};

// ── FALLBACK for free text ──
type KBEntry = { keys: string[]; reply: string; next: string };

const KB: KBEntry[] = [
  { keys: ["hola","buenas","buen dia","hey","hi","hello","que tal"], reply: "", next: "welcome" },
  { keys: ["examen","revision","consulta","optometrista","checar vista","no veo bien","veo borroso","necesito lentes"], reply: "", next: "book_exam" },
  { keys: ["agendar","cita","reservar","turno","disponibilidad"], reply: "", next: "book_exam" },
  { keys: ["precio","precios","cuanto cuesta","costo","barato","económico","presupuesto"], reply: "", next: "prices" },
  { keys: ["marca","marcas","brizzant","frida kahlo","nobleman","massimo","catalogo","colección"], reply: "", next: "choose_frame" },
  { keys: ["armazon","armazón","elegir","cual me queda","estilo","rostro","cara"], reply: "", next: "face_shape" },
  { keys: ["receta","prescripcion","cotizar","cotizacion","tengo receta"], reply: "", next: "has_rx" },
  { keys: ["miopia","astigmatismo","hipermetropia","presbicia","vista cansada","progresivo","bifocal"], reply: "", next: "symptoms" },
  { keys: ["contacto","lentes de contacto","pupilente","air optix","alcon"], reply: "", next: "contacts" },
  { keys: ["sol","solar","solares","polarizado","uv"], reply: "", next: "sunglasses" },
  { keys: ["laboratorio","fabrican","cuanto tardan","entrega","rapido","urgente","mismo dia","1 hora"], reply: "¡Tenemos laboratorio propio! Lentes monofocales desde 1 hora. Con blue o AR especial: 24-48 hrs. Progresivos: 2-3 días.", next: "prices" },
  { keys: ["sucursal","ubicacion","direccion","donde estan","como llego","mapa","minerva","horario"], reply: "", next: "walkin" },
  { keys: ["garantia","devolucion","cambio","defecto","rompió"], reply: "", next: "warranty" },
  { keys: ["empresa","convenio","corporativo","empleados","rh"], reply: "¡Sí hacemos convenios empresariales! Examen gratis para empleados + descuentos por volumen. Escríbenos al WhatsApp para armar tu propuesta.", next: "__whatsapp__" },
  { keys: ["niño","niños","hijo","hija","infantil"], reply: "¡Atendemos niños desde los 3 años! Recomendamos armazones flexibles + micas de policarbonato. Examen gratis para ellos también.", next: "book_exam" },
  { keys: ["pago","tarjeta","efectivo","transferencia","meses sin intereses"], reply: "Aceptamos efectivo, tarjeta (débito/crédito), y transferencia. Pregunta en sucursal por meses sin intereses.", next: "walkin" },
  { keys: ["limpiar","cuidar","cuidado","mantenimiento","rayan"], reply: "", next: "care" },
  { keys: ["gracias","perfecto","ok","vale","listo","adios","bye","chido"], reply: "", next: "bye" },
  { keys: ["comprar","quiero comprar","proceso","quiero unos"], reply: "", next: "need_glasses" },
  { keys: ["andre badi"], reply: "", next: "sunglasses" },
  { keys: ["blue","luz azul","pantalla","computadora"], reply: "", next: "symptom_bluecut" },
  { keys: ["mica","micas","antirreflejante","fotocromatico","transitions","tratamiento"], reply: "Todas nuestras micas ya incluyen antirreflejante + blue cut. Upgrades: fotocromáticas (+$500), progresivos (desde $2,500).", next: "prices" },
];

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function matchKB(input: string): KBEntry | null {
  const q = normalize(input);
  let best: KBEntry | null = null;
  let bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const key of entry.keys) {
      const nk = normalize(key);
      if (q.includes(nk)) score += nk.split(" ").length * 3;
      else for (const w of nk.split(" ")) { if (w.length > 2 && q.includes(w)) score += 1; }
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  return best && bestScore >= 1 ? best : null;
}

// ── COMPONENT ──
const WA = "https://wa.me/523314257226";

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [userName, setUserName] = useState("");
  const [askedName, setAskedName] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages, typing]);

  useEffect(() => {
    if (open && inputRef.current) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    if (hasOpened) return;
    const t = setTimeout(() => {
      const hint = document.getElementById("chat-hint");
      if (hint) hint.style.opacity = "1";
    }, 8000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  const addBotMsg = useCallback((text: string, options?: Option[], delay = 800) => {
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text, options }]);
      setTyping(false);
    }, delay + Math.random() * 600);
  }, []);

  const handleFlow = useCallback((flowId: string, userText?: string) => {
    // Special actions
    if (flowId === "__whatsapp__") { window.open(`${WA}?text=Hola%2C%20quiero%20información%20sobre%20lentes`, "_blank"); return; }
    if (flowId === "__whatsapp_rx__") { window.open(`${WA}?text=Hola%2C%20te%20envío%20mi%20receta%20para%20cotizar`, "_blank"); return; }
    if (flowId === "__whatsapp_book__") { window.open(`${WA}?text=Hola%2C%20quiero%20agendar%20mi%20examen%20de%20la%20vista%20gratis`, "_blank"); return; }
    if (flowId === "__whatsapp_location__") { window.open(`${WA}?text=Hola%2C%20me%20pueden%20enviar%20su%20ubicación`, "_blank"); return; }
    if (flowId === "__link_graduados__") { window.open("/lentes-graduados", "_self"); return; }
    if (flowId === "__link_sol__") { window.open("/lentes-de-sol", "_self"); return; }
    if (flowId === "__link_contacto__") { window.open("/lentes-de-contacto", "_self"); return; }

    const flow = FLOWS[flowId];
    if (!flow) return;

    if (userText) {
      setMessages(prev => [...prev, { role: "user", text: userText }]);
    }

    const text = userName && !flow.text.startsWith("¡Hola!")
      ? flow.text.replace(/^(¡)/, `¡${userName}, `)
      : flow.text;

    addBotMsg(text, flow.options);
  }, [userName, addBotMsg]);

  const handleOption = useCallback((opt: Option) => {
    handleFlow(opt.value, opt.label);
  }, [handleFlow]);

  const handleFreeText = useCallback((text: string) => {
    setMessages(prev => [...prev, { role: "user", text }]);
    setMsgCount(c => c + 1);

    // Detect name if asked
    if (askedName && !userName) {
      const nameGuess = text.trim().replace(/^(me llamo|soy|mi nombre es)\s*/i, "").split(" ")[0];
      if (nameGuess && nameGuess.length >= 2 && !/\d/.test(nameGuess)) {
        const cap = nameGuess.charAt(0).toUpperCase() + nameGuess.slice(1).toLowerCase();
        setUserName(cap);
        addBotMsg(`¡Mucho gusto, ${cap}! ¿En qué te puedo ayudar?`, FLOWS.welcome.options);
        return;
      }
    }

    // Ask name after 2nd message
    if (msgCount + 1 === 2 && !userName && !askedName) {
      const match = matchKB(text);
      if (match) {
        const flow = FLOWS[match.next];
        if (match.reply) addBotMsg(match.reply);
        if (flow) {
          setTimeout(() => addBotMsg(flow.text, flow.options), match.reply ? 2000 : 0);
        }
      }
      setTimeout(() => {
        addBotMsg("Por cierto, ¿cómo te llamas? Para darte atención más personal 😊");
        setAskedName(true);
      }, 2500);
      return;
    }

    // Match KB
    const match = matchKB(text);
    if (match) {
      const flow = FLOWS[match.next];
      if (match.reply) {
        addBotMsg(match.reply);
        if (flow) setTimeout(() => addBotMsg(flow.text, flow.options), 2000);
      } else if (flow) {
        addBotMsg(flow.text, flow.options);
      }
    } else {
      // Fallback — show main menu + WhatsApp
      addBotMsg(
        userName
          ? `${userName}, no estoy segura de entender. Pero puedo ayudarte con esto:`
          : "No estoy segura de entender, pero puedo ayudarte con esto:",
        [
          ...FLOWS.welcome.options!,
          { label: "Hablar con alguien por WhatsApp", value: "__whatsapp__", emoji: "📱" },
        ]
      );
    }
  }, [askedName, userName, msgCount, addBotMsg]);

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setInput("");
    handleFreeText(t);
  };

  const handleOpen = () => {
    setOpen(true);
    setHasOpened(true);
    const hint = document.getElementById("chat-hint");
    if (hint) hint.style.opacity = "0";
    // Save lead on open
    try { addLead({ name: "", phone: "", messages: [], source: "chatbot" }); } catch {}
  };

  return (
    <>
      {/* Hint bubble */}
      {!open && (
        <div
          id="chat-hint"
          onClick={handleOpen}
          className="fixed z-50 cursor-pointer transition-opacity duration-500"
          style={{ bottom: 76, right: 24, opacity: 0, background: "#fff", borderRadius: 12, padding: "10px 16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", maxWidth: 220 }}
        >
          <p className="text-sm font-semibold text-[#1A1818]">Ana <span className="font-normal text-[#9CA3AF]">de Fábrica de Lentes</span></p>
          <p className="text-sm text-[#4B5563] mt-0.5">¿Te ayudo a encontrar tus lentes ideales?</p>
          <div style={{ position: "absolute", bottom: -6, right: 32, width: 12, height: 12, background: "#fff", transform: "rotate(45deg)", boxShadow: "2px 2px 4px rgba(0,0,0,0.05)" }} />
        </div>
      )}

      {/* Toggle button */}
      {(!open || true) && (
        <button
          onClick={() => { if (open) setOpen(false); else handleOpen(); }}
          className={`fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 hover:scale-105 ${open ? "hidden md:flex" : "flex"}`}
          style={{ width: 56, height: 56, borderRadius: "50%", background: "#1A1818", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
          aria-label={open ? "Cerrar chat" : "Hablar con Ana, asesora óptica"}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
          )}
          {!open && !hasOpened && (
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500" />
            </span>
          )}
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className="fixed z-50 flex flex-col bg-white overflow-hidden top-0 left-0 right-0 bottom-0 md:top-auto md:left-auto md:right-6 md:bottom-[80px] md:w-[400px] md:h-[600px] md:rounded-2xl"
          style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.12)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 flex-shrink-0" style={{ padding: "calc(16px + env(safe-area-inset-top, 0px)) 20px 16px", borderBottom: "1px solid #F0F0F0" }}>
            <div className="relative flex-shrink-0">
              <div className="flex items-center justify-center text-sm font-semibold" style={{ width: 40, height: 40, borderRadius: "50%", background: "#1A1818", color: "#fff" }}>A</div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#1A1818]">Ana — Asesora Óptica</p>
              <p className="text-xs text-green-500">En línea ahora</p>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 -mr-1 rounded-full hover:bg-gray-100 transition-colors" aria-label="Cerrar chat">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={msgsRef} className="flex-1 overflow-y-auto" style={{ padding: "16px 14px 8px" }}>
            {messages.length === 0 && (
              <div>
                <div className="flex gap-2.5 mb-3">
                  <div className="flex-shrink-0 flex items-center justify-center text-xs font-semibold" style={{ width: 28, height: 28, borderRadius: "50%", background: "#1A1818", color: "#fff" }}>A</div>
                  <div className="text-sm" style={{ background: "#F3F4F6", borderRadius: "4px 14px 14px 14px", padding: "10px 14px", maxWidth: "82%", lineHeight: 1.6, color: "#374151" }}>
                    <p>¡Hola! Soy <strong>Ana</strong>, tu asesora óptica.</p>
                    <p className="mt-1.5">¿Qué te gustaría hacer hoy?</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 ml-9 mb-2">
                  {FLOWS.welcome.options!.map((opt) => (
                    <button key={opt.value} onClick={() => handleOption(opt)} className="text-sm transition-all duration-150 hover:border-[#1A1818] hover:text-[#1A1818]" style={{ padding: "8px 14px", borderRadius: 20, border: "1px solid #E5E7EB", background: "#fff", color: "#4B5563", cursor: "pointer" }}>
                      {opt.emoji} {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => {
              if (msg.role === "user") {
                return (
                  <div key={i} className="flex justify-end mb-3">
                    <div className="text-sm" style={{ maxWidth: "82%", borderRadius: "14px 14px 4px 14px", padding: "10px 14px", lineHeight: 1.6, background: "#1A1818", color: "#fff" }}>
                      {msg.text}
                    </div>
                  </div>
                );
              }
              return (
                <div key={i}>
                  <div className="flex gap-2.5 mb-1.5">
                    {(i === 0 || messages[i - 1]?.role !== "bot") ? (
                      <div className="flex-shrink-0 flex items-center justify-center text-xs font-semibold" style={{ width: 28, height: 28, borderRadius: "50%", background: "#1A1818", color: "#fff" }}>A</div>
                    ) : (
                      <div className="flex-shrink-0" style={{ width: 28 }} />
                    )}
                    <div className="text-sm" style={{ maxWidth: "82%", borderRadius: "4px 14px 14px 14px", padding: "10px 14px", lineHeight: 1.7, background: "#F3F4F6", color: "#374151" }}>
                      {msg.text.split("\n").map((line, j) => (
                        <span key={j}>{line}{j < msg.text.split("\n").length - 1 && <br />}</span>
                      ))}
                    </div>
                  </div>
                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 ml-9 mb-3">
                      {msg.options.map((opt) => (
                        <button key={opt.value} onClick={() => handleOption(opt)} className="text-sm transition-all duration-150 hover:border-[#1A1818] hover:text-[#1A1818]" style={{ padding: "8px 14px", borderRadius: 20, border: "1px solid #E5E7EB", background: "#fff", color: "#4B5563", cursor: "pointer" }}>
                          {opt.emoji} {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {typing && (
              <div className="flex gap-2.5 mb-3">
                <div className="flex-shrink-0 flex items-center justify-center text-xs font-semibold" style={{ width: 28, height: 28, borderRadius: "50%", background: "#1A1818", color: "#fff" }}>A</div>
                <div style={{ background: "#F3F4F6", borderRadius: "4px 14px 14px 14px", padding: "14px 18px", display: "flex", gap: 5 }}>
                  {[0, 1, 2].map((d) => (
                    <span key={d} style={{ width: 7, height: 7, borderRadius: "50%", background: "#9CA3AF", display: "inline-block", animation: "typingDot 1.4s ease-in-out infinite", animationDelay: `${d * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex-shrink-0" style={{ padding: "10px 14px calc(14px + env(safe-area-inset-bottom, 0px))", borderTop: "1px solid #F0F0F0" }}>
            <div className="flex items-center gap-2" style={{ background: "#F3F4F6", borderRadius: 24, padding: "4px 4px 4px 16px" }}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="O escribe tu pregunta..."
                className="flex-1 text-sm text-[#1A1818] placeholder:text-[#9CA3AF]"
                style={{ border: "none", background: "none", outline: "none" }}
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="flex items-center justify-center transition-colors"
                style={{ width: 36, height: 36, borderRadius: "50%", background: input.trim() ? "#1A1818" : "#D1D5DB", border: "none", cursor: input.trim() ? "pointer" : "default" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes typingDot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </>
  );
}
