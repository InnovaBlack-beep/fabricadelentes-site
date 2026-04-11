"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { addLead } from "@/lib/admin-store";

// ═══════════════════════════════════════════════════════════════
// ASESOR OPTICO v3 — FABRICA DE LENTES
// Flujo guiado con botones. Asesores rotativos, tono premium.
// ═══════════════════════════════════════════════════════════════

const ADVISORS = [
  { name: "Ana", initial: "A", role: "Asesora Optica" },
  { name: "Carlos", initial: "C", role: "Especialista en Graduacion" },
  { name: "Sofia", initial: "S", role: "Asesora de Imagen" },
  { name: "Diego", initial: "D", role: "Asesor de Lentes de Contacto" },
];

type Option = { label: string; value: string };
type Msg = { role: "user" | "bot"; text: string; options?: Option[] };

// ── FLUJOS GUIADOS ──────────────────────────────────────

const FLOWS: Record<string, { text: string; options?: Option[]; next?: string }> = {
  // ─── INICIO ───
  welcome: {
    text: "__GREETING__",
    options: [
      { label: "Necesito lentes nuevos", value: "need_glasses" },
      { label: "Quiero agendar examen gratis", value: "book_exam" },
      { label: "Tengo una receta y quiero cotizar", value: "quote_rx" },
      { label: "Ya tengo lentes y necesito ayuda", value: "existing" },
      { label: "Quiero saber precios", value: "prices" },
    ],
  },

  // ─── NECESITO LENTES NUEVOS ───
  need_glasses: {
    text: "Perfecto, vamos paso a paso. Lo primero es saber tu graduacion. Ya la tienes?",
    options: [
      { label: "Si, tengo mi receta", value: "has_rx" },
      { label: "No, necesito que me revisen", value: "book_exam" },
      { label: "No estoy seguro", value: "symptoms" },
    ],
  },

  symptoms: {
    text: "No te preocupes, vamos a descubrirlo juntos. Cual de estos te describe mejor?",
    options: [
      { label: "Veo borroso de lejos", value: "symptom_far" },
      { label: "Me cuesta leer de cerca", value: "symptom_near" },
      { label: "Me duele la cabeza al usar pantallas", value: "symptom_screen" },
      { label: "Veo borroso de lejos y de cerca", value: "symptom_both" },
      { label: "Solo quiero proteccion para pantallas", value: "symptom_bluecut" },
    ],
  },

  symptom_far: {
    text: "Eso suena a miopia, es muy comun y se corrige facilmente con lentes graduados. Lo ideal es hacer un examen para conocer tu graduacion exacta.\n\nEl examen es completamente gratuito y sin compromiso. Tarda unos 15 minutos y sales con tu receta en la mano. Te agendo?",
    options: [
      { label: "Si, quiero agendar", value: "book_exam" },
      { label: "Puedo ir sin cita?", value: "walkin" },
    ],
  },

  symptom_near: {
    text: "Si te cuesta enfocar de cerca (celular, libros, etiquetas), puede ser presbicia o vista cansada. Es algo muy normal despues de los 40.\n\nLa solucion son lentes progresivos: corrigen lejos y cerca sin la linea visible de los bifocales.\n\nQuieres que te revisemos sin costo?",
    options: [
      { label: "Si, quiero agendar examen", value: "book_exam" },
      { label: "Cuanto cuestan los progresivos?", value: "price_progressive" },
    ],
  },

  symptom_screen: {
    text: "Los dolores de cabeza frente a pantallas pueden ser por fatiga visual digital. Lentes con blue cut (proteccion de luz azul) ayudan mucho.\n\nTe recomiendo un examen para descartar que necesites graduacion. Es gratuito y rapido.",
    options: [
      { label: "Quiero agendar examen", value: "book_exam" },
      { label: "Solo quiero lentes con blue cut", value: "symptom_bluecut" },
    ],
  },

  symptom_both: {
    text: "Si ves borroso tanto de lejos como de cerca, puede ser astigmatismo o una combinacion con presbicia. Se corrige con lentes graduados, pero necesitamos hacer un examen para determinar exactamente que necesitas.\n\nEl examen es gratuito y tarda 15 minutos.",
    options: [
      { label: "Agendar mi examen gratis", value: "book_exam" },
      { label: "Puedo ir sin cita?", value: "walkin" },
    ],
  },

  symptom_bluecut: {
    text: "Buena decision. Los lentes con blue cut protegen tus ojos de la luz azul de pantallas.\n\nTenemos lentes graduados a $1,949 que ya incluyen antirreflejante y blue cut. Si no necesitas graduacion, tambien podemos colocar micas planas con blue cut.\n\nQue prefieres?",
    options: [
      { label: "Quiero con graduacion (examen gratis)", value: "book_exam" },
      { label: "Solo blue cut sin graduacion", value: "choose_frame" },
      { label: "Ver armazones disponibles", value: "choose_frame" },
    ],
  },

  // ─── TENGO RECETA ───
  has_rx: {
    text: "Muy bien. Para cotizarte necesito tu receta. Como me la quieres compartir?",
    options: [
      { label: "Enviar foto por WhatsApp", value: "whatsapp_rx" },
      { label: "La escribo aqui", value: "type_rx" },
      { label: "La llevo directo a sucursal", value: "walkin" },
    ],
  },

  whatsapp_rx: {
    text: "Perfecto. Mandame foto de tu receta al WhatsApp y te respondo en minutos con:\n\n- Opciones de armazon\n- Tipo de micas recomendadas\n- Precio exacto\n- Tiempo de entrega\n\nDa click aqui abajo para abrir WhatsApp:",
    options: [
      { label: "Abrir WhatsApp", value: "__whatsapp_rx__" },
      { label: "Prefiero ir a sucursal", value: "walkin" },
    ],
  },

  type_rx: {
    text: "Escribeme los datos de tu receta. Necesito:\n\n- OD (ojo derecho): esfera, cilindro, eje\n- OI (ojo izquierdo): esfera, cilindro, eje\n- ADD (si aparece)\n- DIP (distancia pupilar)\n\nSi no entiendes tu receta, no te preocupes. Mandame una foto por WhatsApp y yo la interpreto.",
    options: [
      { label: "Mejor la envio por WhatsApp", value: "whatsapp_rx" },
      { label: "No entiendo mi receta", value: "explain_rx" },
    ],
  },

  explain_rx: {
    text: "Te explico:\n\nOD = ojo derecho, OI = ojo izquierdo\n\n- ESF (Esfera): negativo (-) = miopia, positivo (+) = hipermetropia\n- CIL (Cilindro): astigmatismo. Si esta vacio, no tienes\n- EJE: direccion del astigmatismo (0-180)\n- ADD: si aparece, necesitas progresivos\n- DIP: distancia entre pupilas\n\nLo mas facil: mandame una foto y yo la leo por ti.",
    options: [
      { label: "Enviar foto por WhatsApp", value: "whatsapp_rx" },
      { label: "Ir a sucursal con mi receta", value: "walkin" },
    ],
  },

  // ─── ELEGIR ARMAZON ───
  choose_frame: {
    text: "Tenemos 5 marcas con estilos muy distintos. Que estilo te va mas?",
    options: [
      { label: "Moderno y ligero", value: "brand_brizzant" },
      { label: "Elegante y artistico", value: "brand_fk" },
      { label: "Clasico y sobrio", value: "brand_nobleman" },
      { label: "Contemporaneo italiano", value: "brand_massimo" },
      { label: "No se, ayudame a elegir", value: "face_shape" },
    ],
  },

  brand_brizzant: {
    text: "Brizzant es nuestra linea moderna: armazones metalicos ultraligeros con diseno minimalista. Perfectos para uso diario.\n\nA $1,949 incluye armazon + graduacion + antirreflejante + blue cut.\n\nQuieres verlos en el sitio o prefieres probartelos en sucursal?",
    options: [
      { label: "Ver coleccion en el sitio", value: "__link_graduados__" },
      { label: "Ir a probarmelos", value: "walkin" },
      { label: "Ver otras marcas", value: "choose_frame" },
    ],
  },

  brand_fk: {
    text: "Frida Kahlo es nuestra joya: diseno mexicano, elegante y artistico. Es la mas pedida por nuestras clientas.\n\nNueva coleccion: Ines, Bonito, Maria, Picasso, Casa Azul y Matilde. A $1,949 incluye todo (graduacion + AR + blue cut).\n\nQuieres verlos?",
    options: [
      { label: "Ver coleccion en el sitio", value: "__link_graduados__" },
      { label: "Ir a probarmelos", value: "walkin" },
      { label: "Ver otras marcas", value: "choose_frame" },
    ],
  },

  brand_nobleman: {
    text: "Nobleman es para quien busca un look clasico y profesional. Armazones de alta calidad con acabados premium.\n\nA $1,949 incluye todo: armazon + graduacion + antirreflejante + blue cut.\n\nTe gustaria verlos?",
    options: [
      { label: "Ver coleccion en el sitio", value: "__link_graduados__" },
      { label: "Ir a probarmelos", value: "walkin" },
      { label: "Ver otras marcas", value: "choose_frame" },
    ],
  },

  brand_massimo: {
    text: "Massimo tiene inspiracion italiana: lineas contemporaneas y materiales de primera. Para quien busca estilo y comodidad.\n\nA $1,949 incluye armazon + graduacion + antirreflejante + blue cut.\n\nQuieres verlos?",
    options: [
      { label: "Ver coleccion en el sitio", value: "__link_graduados__" },
      { label: "Ir a probarmelos", value: "walkin" },
      { label: "Ver otras marcas", value: "choose_frame" },
    ],
  },

  face_shape: {
    text: "Te ayudo. La forma de tu cara es clave para elegir el armazon perfecto. Como describirias tu rostro?",
    options: [
      { label: "Redondo", value: "face_round" },
      { label: "Cuadrado", value: "face_square" },
      { label: "Ovalado", value: "face_oval" },
      { label: "Corazon", value: "face_heart" },
      { label: "No se, quiero asesoria en persona", value: "walkin" },
    ],
  },

  face_round: {
    text: "Para cara redonda te van muy bien los armazones rectangulares o angulares. Dan estructura y alargan el rostro.\n\nTe recomiendo Brizzant (moderno, metalico) o Nobleman (clasico, angular).\n\nPero lo mejor es que te los pruebes. Vienes a sucursal?",
    options: [
      { label: "Si, quiero ir", value: "walkin" },
      { label: "Ver Brizzant", value: "brand_brizzant" },
      { label: "Ver Nobleman", value: "brand_nobleman" },
    ],
  },

  face_square: {
    text: "Para cara cuadrada los armazones redondos u ovalados suavizan los rasgos. Se ven muy bien.\n\nTe recomiendo Frida Kahlo (redondos artisticos) o Massimo (ovalados contemporaneos).",
    options: [
      { label: "Ir a probarmelos", value: "walkin" },
      { label: "Ver Frida Kahlo", value: "brand_fk" },
      { label: "Ver Massimo", value: "brand_massimo" },
    ],
  },

  face_oval: {
    text: "La cara ovalada es la mas versatil. Practicamente cualquier forma de armazon te queda bien. Puedes elegir por estilo.\n\nQue prefieres?",
    options: [
      { label: "Algo discreto y clasico", value: "brand_nobleman" },
      { label: "Algo moderno y ligero", value: "brand_brizzant" },
      { label: "Algo llamativo y artistico", value: "brand_fk" },
      { label: "Quiero probarmelos todos", value: "walkin" },
    ],
  },

  face_heart: {
    text: "Para cara de corazon (frente ancha, menton angosto), los armazones con parte inferior mas ancha equilibran el rostro.\n\nTe recomiendo Massimo (cat-eye suave) o Frida Kahlo nueva coleccion (Bonito, Ines).",
    options: [
      { label: "Ir a probarmelos", value: "walkin" },
      { label: "Ver Frida Kahlo", value: "brand_fk" },
      { label: "Ver Massimo", value: "brand_massimo" },
    ],
  },

  // ─── AGENDAR EXAMEN ───
  book_exam: {
    text: "El examen de la vista es completamente gratuito y sin compromiso. Tarda unos 15 minutos y sales con tu receta en la mano.\n\nPuedes venir sin cita, pero si quieres asegurar tu horario, como prefieres agendar?",
    options: [
      { label: "Agendar por WhatsApp", value: "__whatsapp_book__" },
      { label: "Ir sin cita (walk-in)", value: "walkin" },
      { label: "Cuales son los horarios?", value: "schedule" },
    ],
  },

  schedule: {
    text: "Nuestro horario:\n\nZona Minerva, Guadalajara\nLunes a Sabado: 10:00 - 20:00\nDomingos: cerrado\n\nLos mejores horarios para que no esperes: martes a jueves, entre 10:00 y 12:00.\n\nTe animas a venir?",
    options: [
      { label: "Agendar por WhatsApp", value: "__whatsapp_book__" },
      { label: "Voy sin cita", value: "walkin" },
      { label: "Como llego?", value: "location" },
    ],
  },

  walkin: {
    text: "Claro, puedes venir sin cita. Te esperamos:\n\nZona Minerva, Guadalajara, Jalisco\nLun-Sab 10:00 a 20:00\nWhatsApp: 33 1425 7226\n\nHay estacionamiento en la zona. Si vienes en Uber, pon \"Fabrica de Lentes Minerva\".\n\nAlgo mas en lo que te pueda ayudar?",
    options: [
      { label: "Como llego?", value: "location" },
      { label: "Ver precios antes de ir", value: "prices" },
      { label: "Listo, gracias", value: "bye" },
    ],
  },

  location: {
    text: "Estamos en Zona Minerva, Guadalajara, Jalisco.\n\nPuedes buscarnos en Google Maps como \"Fabrica de Lentes Minerva\" o te comparto la ubicacion por WhatsApp.",
    options: [
      { label: "Enviame la ubicacion por WhatsApp", value: "__whatsapp_location__" },
      { label: "Ya se donde es, gracias", value: "bye" },
    ],
  },

  // ─── PRECIOS ───
  prices: {
    text: "Aqui van nuestros precios:\n\nLentes graduados: $1,949\nIncluye: armazon + graduacion + antirreflejante + blue cut + examen gratis + estuche + garantia\n\nLentes de sol: $1,649\nFrida Kahlo y Andre Badi. Proteccion UV 400.\n\nUpgrades:\n- Fotocromaticas: +$500\n- Progresivos: desde $2,500\n\nLentes de contacto: desde $1,064\n\nQue te interesa?",
    options: [
      { label: "Quiero graduados", value: "need_glasses" },
      { label: "Quiero lentes de sol", value: "sunglasses" },
      { label: "Quiero lentes de contacto", value: "contacts" },
      { label: "Cuanto cuestan los progresivos?", value: "price_progressive" },
    ],
  },

  price_progressive: {
    text: "Los lentes progresivos empiezan desde $2,500 con armazon incluido. Corrigen lejos y cerca, como bifocales pero sin la linea visible.\n\nEl precio varia segun el rango de vision y calidad de la mica. Lo mejor es que vengas a que te revisemos gratis y te cotizamos exacto.\n\nTe agendo?",
    options: [
      { label: "Si, agendar examen gratis", value: "book_exam" },
      { label: "Ver armazones primero", value: "choose_frame" },
    ],
  },

  sunglasses: {
    text: "Nuestra coleccion de sol:\n\nFrida Kahlo — 21 modelos, diseno mexicano\nAndre Badi — 16 modelos, estilo cosmopolita\n\nTodos a $1,649 con proteccion UV 400. Tambien los podemos graduar.\n\nQuieres verlos?",
    options: [
      { label: "Ver coleccion en el sitio", value: "__link_sol__" },
      { label: "Quiero sol + graduacion", value: "has_rx" },
      { label: "Ir a probarmelos", value: "walkin" },
    ],
  },

  contacts: {
    text: "Manejamos 3 opciones:\n\nAir Optix HydraGlyde — $1,120 (mensuales, los mas comodos)\nAlcon Frecuent — $1,064 (buena relacion calidad-precio)\nAlcon Total 1 — $1,200 (lo mas premium)\n\nNecesitas receta con parametros de contacto. Si nunca has usado, te hacemos la adaptacion aqui.\n\nYa has usado lentes de contacto?",
    options: [
      { label: "Si, ya uso y tengo receta", value: "whatsapp_rx" },
      { label: "No, quiero empezar", value: "book_exam" },
      { label: "Ver mas info en el sitio", value: "__link_contacto__" },
    ],
  },

  // ─── YA TENGO LENTES ───
  existing: {
    text: "Que necesitas?",
    options: [
      { label: "Renovar graduacion", value: "book_exam" },
      { label: "Reparar o ajustar mis lentes", value: "repair" },
      { label: "Problema con garantia", value: "warranty" },
      { label: "Tips de cuidado y limpieza", value: "care" },
    ],
  },

  repair: {
    text: "Traelos a sucursal. Ajustes y reparaciones menores son gratis y en el momento.\n\nSi necesitan un arreglo mayor, lo evaluamos y te damos precio. Generalmente es mismo dia.\n\nZona Minerva, Lun-Sab 10-20h",
    options: [
      { label: "Como llego?", value: "location" },
      { label: "Escribir por WhatsApp", value: "__whatsapp__" },
    ],
  },

  warranty: {
    text: "Nuestra garantia:\n\nArmazon: 1 ano contra defectos de fabricacion\nGraduacion: 60 dias — si no ves bien, cambiamos micas gratis\nTratamiento AR: 6 meses\n\nSolo necesitas tu comprobante de compra. Ven a sucursal y lo resolvemos.\n\nTienes tu ticket?",
    options: [
      { label: "Si, voy a sucursal", value: "walkin" },
      { label: "No lo encuentro", value: "__whatsapp__" },
    ],
  },

  care: {
    text: "Tips para que tus lentes duren mas:\n\nCorrecto:\n- Agua tibia + jabon neutro (sin fragancia)\n- Secar con pano de microfibra\n- Guardarlos siempre en su estuche\n\nEvita:\n- Limpiar con la playera (raya las micas)\n- Dejarlos boca abajo\n- El tablero del carro (el calor deforma el armazon)\n\nSi se te chuecaron o aflojaron, traelos a sucursal y te los ajustamos gratis.",
    options: [
      { label: "Gracias, todo claro", value: "bye" },
      { label: "Necesito otra cosa", value: "welcome" },
    ],
  },

  // ─── DESPEDIDA ───
  bye: {
    text: "Fue un gusto ayudarte. Recuerda:\n\nZona Minerva, Guadalajara\nLun-Sab 10:00-20:00\nWhatsApp: 33 1425 7226\n\nTe esperamos.",
    options: [
      { label: "Tengo otra duda", value: "welcome" },
      { label: "Escribir por WhatsApp", value: "__whatsapp__" },
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
  { keys: ["laboratorio","fabrican","cuanto tardan","entrega","rapido","urgente","mismo dia","1 hora"], reply: "Tenemos laboratorio propio. Lentes monofocales desde 1 hora. Con blue o AR especial: 24-48 hrs. Progresivos: 2-3 dias.", next: "prices" },
  { keys: ["sucursal","ubicacion","direccion","donde estan","como llego","mapa","minerva","horario"], reply: "", next: "walkin" },
  { keys: ["garantia","devolucion","cambio","defecto","rompió"], reply: "", next: "warranty" },
  { keys: ["empresa","convenio","corporativo","empleados","rh"], reply: "Si hacemos convenios empresariales. Examen gratis para empleados y descuentos por volumen. Escribenos al WhatsApp para armar tu propuesta.", next: "__whatsapp__" },
  { keys: ["niño","niños","hijo","hija","infantil"], reply: "Atendemos ninos desde los 3 anos. Recomendamos armazones flexibles y micas de policarbonato. Examen gratis para ellos tambien.", next: "book_exam" },
  { keys: ["pago","tarjeta","efectivo","transferencia","meses sin intereses"], reply: "Aceptamos efectivo, tarjeta (debito/credito) y transferencia. Pregunta en sucursal por meses sin intereses.", next: "walkin" },
  { keys: ["limpiar","cuidar","cuidado","mantenimiento","rayan"], reply: "", next: "care" },
  { keys: ["gracias","perfecto","ok","vale","listo","adios","bye","chido"], reply: "", next: "bye" },
  { keys: ["comprar","quiero comprar","proceso","quiero unos"], reply: "", next: "need_glasses" },
  { keys: ["andre badi"], reply: "", next: "sunglasses" },
  { keys: ["blue","luz azul","pantalla","computadora"], reply: "", next: "symptom_bluecut" },
  { keys: ["mica","micas","antirreflejante","fotocromatico","transitions","tratamiento"], reply: "Todas nuestras micas ya incluyen antirreflejante y blue cut. Upgrades: fotocromaticas (+$500), progresivos (desde $2,500).", next: "prices" },
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
  const [advisor] = useState(() => ADVISORS[Math.floor(Math.random() * ADVISORS.length)]);
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

  const resolveText = useCallback((text: string): string => {
    if (text === "__GREETING__") {
      return `Hola, soy ${advisor.name}, tu ${advisor.role.toLowerCase()} en Fabrica de Lentes. En que te puedo ayudar hoy?`;
    }
    return text;
  }, [advisor]);

  const addBotMsg = useCallback((text: string, options?: Option[], delay = 800) => {
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: resolveText(text), options }]);
      setTyping(false);
    }, delay + Math.random() * 600);
  }, [resolveText]);

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

    const resolved = resolveText(flow.text);
    const text = userName && !resolved.startsWith("Hola, soy")
      ? resolved.replace(/^/, `${userName}, `)
      : resolved;

    addBotMsg(text, flow.options);
  }, [userName, addBotMsg, resolveText]);

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
        addBotMsg(`Mucho gusto, ${cap}. En que te puedo ayudar?`, FLOWS.welcome.options);
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
          setTimeout(() => addBotMsg(resolveText(flow.text), flow.options), match.reply ? 2000 : 0);
        }
      }
      setTimeout(() => {
        addBotMsg("Por cierto, como te llamas? Asi te doy una atencion mas personal.");
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
        if (flow) setTimeout(() => addBotMsg(resolveText(flow.text), flow.options), 2000);
      } else if (flow) {
        addBotMsg(resolveText(flow.text), flow.options);
      }
    } else {
      // Fallback — show main menu + WhatsApp
      addBotMsg(
        userName
          ? `${userName}, no estoy seguro de entender tu pregunta. Pero puedo ayudarte con esto:`
          : "No estoy seguro de entender tu pregunta, pero puedo ayudarte con esto:",
        [
          ...FLOWS.welcome.options!,
          { label: "Hablar con alguien por WhatsApp", value: "__whatsapp__" },
        ]
      );
    }
  }, [askedName, userName, msgCount, addBotMsg, resolveText]);

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
          <p className="text-sm font-semibold text-[#1A1818]">{advisor.name} <span className="font-normal text-[#9CA3AF]">de Fabrica de Lentes</span></p>
          <p className="text-sm text-[#4B5563] mt-0.5">Te ayudo a encontrar tus lentes?</p>
          <div style={{ position: "absolute", bottom: -6, right: 32, width: 12, height: 12, background: "#fff", transform: "rotate(45deg)", boxShadow: "2px 2px 4px rgba(0,0,0,0.05)" }} />
        </div>
      )}

      {/* Toggle button */}
      {(!open || true) && (
        <button
          onClick={() => { if (open) setOpen(false); else handleOpen(); }}
          className={`fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 hover:scale-105 ${open ? "hidden md:flex" : "flex"}`}
          style={{ width: 56, height: 56, borderRadius: "50%", background: "#1A1818", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
          aria-label={open ? "Cerrar chat" : `Hablar con ${advisor.name}, ${advisor.role.toLowerCase()}`}
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
              <div className="flex items-center justify-center text-sm font-semibold" style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #B5956E 0%, #8B7355 100%)", color: "#fff" }}>{advisor.initial}</div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#1A1818]">{advisor.name} — {advisor.role}</p>
              <p className="text-xs text-green-500">Disponible</p>
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
                  <div className="flex-shrink-0 flex items-center justify-center text-xs font-semibold" style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #B5956E 0%, #8B7355 100%)", color: "#fff" }}>{advisor.initial}</div>
                  <div className="text-sm" style={{ background: "#F3F4F6", borderRadius: "4px 14px 14px 14px", padding: "10px 14px", maxWidth: "82%", lineHeight: 1.6, color: "#374151" }}>
                    <p>Hola, soy <strong>{advisor.name}</strong>, tu {advisor.role.toLowerCase()}.</p>
                    <p className="mt-1.5">En que te puedo ayudar hoy?</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 ml-9 mb-2">
                  {FLOWS.welcome.options!.map((opt) => (
                    <button key={opt.value} onClick={() => handleOption(opt)} className="text-sm transition-all duration-150 hover:border-[#1A1818] hover:text-[#1A1818]" style={{ padding: "8px 14px", borderRadius: 20, border: "1px solid #E5E7EB", background: "#fff", color: "#4B5563", cursor: "pointer" }}>
                      {opt.label}
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
                      <div className="flex-shrink-0 flex items-center justify-center text-xs font-semibold" style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #B5956E 0%, #8B7355 100%)", color: "#fff" }}>{advisor.initial}</div>
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
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {typing && (
              <div className="flex gap-2.5 mb-3">
                <div className="flex-shrink-0 flex items-center justify-center text-xs font-semibold" style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #B5956E 0%, #8B7355 100%)", color: "#fff" }}>{advisor.initial}</div>
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
