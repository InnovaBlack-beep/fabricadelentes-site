"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { addLead } from "@/lib/admin-store";

// ═══════════════════════════════════════════════════════════════
// ASESOR ÓPTICO — FÁBRICA DE LENTES
// Conversacional, cálido, humano. Como hablar con un amigo que
// sabe mucho de lentes.
// ═══════════════════════════════════════════════════════════════

type KBEntry = {
  keys: string[];
  replies: string[]; // Multiple reply variants for natural feel
  followUp?: string; // Follow-up question to keep conversation going
};

const KB: KBEntry[] = [
  {
    keys: ["hola","buenas","buen dia","buenos dias","buenas tardes","buenas noches","hey","ola","hi","hello","que tal","qué tal"],
    replies: [
      "¡Hola! 👋 Soy Ana, tu asesora óptica. ¿En qué te puedo ayudar hoy? Si buscas lentes nuevos, quieres saber sobre tu graduación, o simplemente tienes una duda — aquí estoy.",
      "¡Hola! Qué gusto saludarte. Soy Ana de Fábrica de Lentes. Cuéntame, ¿qué te trae por aquí hoy?",
      "¡Hey! Bienvenido 👋 Soy Ana, asesora óptica. ¿Buscas lentes nuevos, tienes una receta que quieres cotizar, o necesitas un examen de la vista?",
    ],
  },
  {
    keys: ["examen","examen de la vista","revision","revisión","consulta","optometrista","oculista","checar vista","revisar ojos","no veo bien","veo borroso","necesito lentes"],
    replies: [
      "¡Claro! El examen de la vista es completamente gratis y sin compromiso. 🆓\n\nTarda unos 15-20 minutos. Nuestro optometrista revisa tu agudeza visual, mide tu graduación y te da tu receta al momento.\n\nPuedes venir sin cita a nuestra sucursal en Zona Minerva (Lun-Sáb 10:00 a 20:00). Aunque si quieres asegurar tu horario, te puedo ayudar a agendar. ¿Qué prefieres?",
      "¡Por supuesto! El examen es gratis, sin letra chica ni compromiso de compra.\n\nEs rapidísimo — en 15 minutos sales con tu receta. Y si decides quedarte con unos lentes, los fabricamos aquí mismo.\n\n¿Te gustaría agendar una cita o prefieres llegar directo a sucursal?",
    ],
    followUp: "¿Tienes algún síntoma en particular? Por ejemplo, ¿ves borroso de lejos, de cerca, o te duele la cabeza al leer?",
  },
  {
    keys: ["agendar","agenda","cita","reservar","reserva","apartar","cuando puedo ir","cuándo puedo ir","disponibilidad","turno"],
    replies: [
      "¡Perfecto! Para agendarte solo necesito:\n\n1. Tu nombre\n2. Día y hora que te acomode\n3. ¿Es para examen de la vista, compra de lentes, o ambos?\n\nEscríbeme esos datos y yo te confirmo. O si prefieres, también puedes escribirnos directo al WhatsApp y mi compañera Liz te agenda al momento 📱",
      "¡Con todo gusto! Los mejores horarios para que no esperes son entre 10:00 y 12:00, de martes a jueves. Pero si esos no te funcionan, dime qué día y hora te conviene y lo hacemos caber.\n\n¿Para cuándo te gustaría venir?",
    ],
  },
  {
    keys: ["rostro","cara","forma de cara","que armazon","qué armazón","cual me queda","cuál me queda","elegir","recomien","asesoria","asesoría","no se cual","no sé cuál","estilo"],
    replies: [
      "¡Esa es mi parte favorita! 😄 Para recomendarte el armazón perfecto, cuéntame:\n\n¿Cómo describirías la forma de tu cara?\n\n🔵 Redonda (mejillas llenas, sin ángulos marcados)\n🔲 Cuadrada (mandíbula marcada, frente ancha)\n🔷 Ovalada (equilibrada, ligeramente más larga)\n❤️ Corazón (frente ancha, mentón angosto)\n\nO si prefieres, mándame una selfie por WhatsApp y te digo exactamente qué te queda mejor. ¡Sin pena!",
      "¡Me encanta ayudar con esto! La forma de tu cara es clave.\n\nPor ejemplo, si tienes cara redonda, los armazones rectangulares o angulares te van increíble porque dan estructura. Si tienes cara cuadrada, los redondos suavizan los rasgos.\n\nPero lo mejor es que vengas a probártelos — tenemos Brizzant, Frida Kahlo, Nobleman y Massimo. ¿Quieres que te cuente de alguna marca en particular?",
    ],
    followUp: "¿Tienes algún estilo en mente? ¿Algo discreto y clásico, o más llamativo y moderno?",
  },
  {
    keys: ["miopia","miopía","miope","no veo de lejos","lejos","corto de vista"],
    replies: [
      "La miopía es súper común — es cuando ves borroso de lejos pero bien de cerca. Se corrige con micas graduadas (dioptrías negativas, tipo -2.00).\n\nSi tu graduación es alta (más de -4.00), te recomendaría micas de alto índice para que no queden gruesas.\n\n¿Ya tienes tu receta o necesitas que te hagamos el examen? Es gratis 😊",
    ],
    followUp: "¿Sabes tu graduación actual? Si me la compartes te puedo recomendar el tipo de mica ideal.",
  },
  {
    keys: ["astigmatismo","astigma","cilindro","eje","veo doble"],
    replies: [
      "El astigmatismo es cuando la visión se ve borrosa tanto de lejos como de cerca — como si todo tuviera una sombra. Es muy común, más del 30% de la gente lo tiene.\n\nEn tu receta aparece como CIL (cilindro) y EJE. Se corrige con micas cilíndricas o con lentes de contacto tóricos.\n\nLo bueno es que con la graduación correcta se ve perfecto. ¿Ya te hicieron examen recientemente?",
    ],
  },
  {
    keys: ["hipermetropia","hipermetropía","no veo de cerca","cerca","presbicia","vista cansada","lentes para leer","bifocal","progresivo","multifocal"],
    replies: [
      "Si te cuesta trabajo enfocar de cerca — leer el celular, un libro, la etiqueta del súper — puede ser presbicia (vista cansada). Es natural después de los 40.\n\nLa mejor solución son los lentes progresivos: corrigen lejos y cerca sin la línea fea de los bifocales. Se ven como lentes normales.\n\nLos fabricamos aquí en nuestro lab, así que el precio es mucho mejor que en cadenas. Empiezan desde $2,500 con armazón.\n\n¿Te interesa que te cotice unos progresivos?",
    ],
    followUp: "¿Ya usas lentes actualmente o serían tus primeros?",
  },
  {
    keys: ["receta","prescripcion","prescripción","como leer","esfera","od","oi","dip","distancia pupilar","que significa","entender receta"],
    replies: [
      "¡Te explico tu receta de forma sencilla!\n\n👁 OD = ojo derecho, OI = ojo izquierdo\n\n• ESF (Esfera): si es negativo (-) es miopía, si es positivo (+) es hipermetropía\n• CIL: astigmatismo (si está vacío, no tienes)\n• EJE: la dirección del astigmatismo\n• ADD: si aparece, necesitas progresivos\n• DIP: distancia entre tus pupilas\n\nSi quieres, mándame foto de tu receta por WhatsApp y te la interpreto y cotizo al momento. ¿Te late?",
    ],
  },
  {
    keys: ["mica","micas","cristal","cristales","antirreflejante","antireflejante","blue","azul","luz azul","fotocromatico","fotocromático","transition","transitions","tratamiento","proteccion","protección","uv","alto indice"],
    replies: [
      "¡Buena pregunta! Te cuento las opciones:\n\n🔹 Antirreflejante — el básico que todos deberían tener. Quita reflejos molestos.\n\n🔹 Blue (luz azul) — si pasas mucho tiempo en compu o celular, este es tu aliado. Reduce la fatiga visual.\n\n🔹 Fotocromáticas — se oscurecen con el sol y se aclaran adentro. Básicamente son 2 lentes en 1.\n\n🔹 Alto índice — si tu graduación es alta, estas micas quedan delgaditas en vez de gruesas.\n\nTodas nuestras micas ya traen AR + UV de serie. ¿Cuál te interesa más?",
    ],
    followUp: "¿Cuántas horas al día pasas frente a pantallas? Así te recomiendo el tratamiento ideal.",
  },
  {
    keys: ["marca","marcas","brizzant","frida kahlo","nobleman","massimo","catalogo","catálogo","coleccion","colección"],
    replies: [
      "Tenemos 4 marcas exclusivas, cada una con su personalidad:\n\n✦ Brizzant ($1,349) — Moderno, ligero, metálico. Para quien busca algo discreto pero con estilo.\n\n✦ Frida Kahlo ($1,650) — Nuestra joya. Diseño mexicano, elegante, artístico. La más pedida.\n\n✦ Nobleman ($1,499) — Clásico atemporal. Si te gustan los looks sobrios y premium.\n\n✦ Massimo ($1,499) — Inspiración italiana. Líneas contemporáneas.\n\n¿Alguna te llamó la atención? Te puedo contar más de cualquiera 😊",
    ],
    followUp: "¿Buscas algo para uso diario, para la oficina, o para una ocasión especial?",
  },
  {
    keys: ["precio","precios","cuanto cuesta","cuánto cuesta","costo","costos","cuanto vale","cuánto vale","barato","económico","economico","presupuesto","rango"],
    replies: [
      "Te doy los rangos para que te des una idea:\n\n🏷 Solo armazón:\n• Brizzant: $1,349\n• Nobleman / Massimo: $1,499\n• Frida Kahlo: $1,650\n\n📦 Paquete completo (armazón + micas):\n• Con AR básicas: desde $1,849\n• Con blue (luz azul): desde $2,149\n• Con fotocromáticas: desde $2,649\n• Progresivos: desde $2,500\n\nTodo incluye examen gratis + estuche + garantía.\n\n¿Tienes un presupuesto en mente? Te puedo armar opciones que se ajusten.",
    ],
    followUp: "¿Necesitas micas graduadas o solo el armazón?",
  },
  {
    keys: ["contacto","lentes de contacto","lente de contacto","pupilente","pupilentes","air optix","alcon","frecuent","total 1","desechable","mensual","diario"],
    replies: [
      "¡Sí manejamos! Estas son nuestras opciones:\n\n🔹 Air Optix HydraGlyde ($1,120) — mensuales, súper cómodos, los más vendidos.\n🔹 Alcon Frecuent ($1,064) — buena relación calidad-precio.\n🔹 Alcon Total 1 ($1,200) — lo más premium en comodidad.\n\nImportante: necesitas receta con parámetros de contacto (curva base y diámetro). Si nunca has usado, te hacemos la adaptación aquí.\n\n¿Ya has usado lentes de contacto antes?",
    ],
  },
  {
    keys: ["sol","lentes de sol","solar","solares","polarizado","polarizados"],
    replies: [
      "Nuestra colección de sol es la línea Frida Kahlo Solar — 21 modelos increíbles a $1,650 cada uno.\n\nTodos traen protección UV 400 y los puedes pedir polarizados. Y lo mejor: ¡también los graduamos! Así que si necesitas corrección visual, no tienes que elegir entre ver bien y protegerte del sol.\n\n¿Quieres que te muestre algunos modelos? También puedes ver la colección completa en fabricadelentes.mx/lentes-de-sol",
    ],
  },
  {
    keys: ["laboratorio","fabrican","fabricacion","fabricación","donde hacen","dónde hacen","cuanto tardan","cuánto tardan","tiempo de entrega","entrega","rapido","rápido","urgente","mismo dia","mismo día","express","1 hora","una hora"],
    replies: [
      "¡Este es nuestro superpoder! 💪 Tenemos laboratorio óptico propio aquí en Guadalajara.\n\n⚡ Tiempos reales:\n• Monofocales: desde 1 hora (sí, en serio)\n• Con blue o AR especial: 24-48 hrs\n• Progresivos: 2-3 días\n• Reparaciones: mismo día\n\nEn la mayoría de ópticas esperas 5-7 días porque mandan tus micas a fabricar a otro lado. Nosotros las hacemos aquí mismo. Eso también nos permite darte mejor precio.\n\n¿Necesitas unos lentes urgentes?",
    ],
  },
  {
    keys: ["sucursal","sucursales","donde estan","dónde están","ubicacion","ubicación","direccion","dirección","como llego","cómo llego","mapa","minerva","guadalajara","gdl","horario","horarios","abren","cierran"],
    replies: [
      "¡Te esperamos! 📍\n\nEstamos en Zona Minerva, Guadalajara, Jalisco.\n\n🕐 Horario: Lunes a Sábado de 10:00 a 20:00\n📞 WhatsApp: 33 1425 7226\n\nHay estacionamiento en la zona y es fácil llegar. Si vienes en Uber solo pon \"Fábrica de Lentes Minerva\".\n\n¿Necesitas que te comparta la ubicación por WhatsApp?",
    ],
  },
  {
    keys: ["garantia","garantía","devolucion","devolución","cambio","defecto","se rompieron","roto","rompió"],
    replies: [
      "Tenemos garantía real, no de esas que nadie respeta 😉\n\n🛡 Armazones: 1 año contra defectos de fabricación\n🛡 Graduación: 60 días — si no ves bien, te cambiamos las micas gratis\n🛡 Tratamiento AR: 6 meses\n\nSolo necesitas tu comprobante de compra. Vienes a sucursal, evaluamos, y lo resolvemos en 3-7 días.\n\n¿Tienes algún problema con unos lentes que compraste con nosotros?",
    ],
  },
  {
    keys: ["empresa","empresas","convenio","corporativo","empleados","rh","recursos humanos"],
    replies: [
      "¡Sí! Hacemos convenios empresariales. Llevamos el servicio a tu empresa:\n\n✅ Examen gratis para todos los empleados\n✅ Descuentos especiales por volumen\n✅ Podemos ir a sus instalaciones\n\nYa atendemos empresas con +150 colaboradores. Si eres de RR.HH., escríbenos al 33 1425 7226 y te armamos una propuesta.\n\n¿De cuántos empleados estamos hablando?",
    ],
  },
  {
    keys: ["cuidar","cuidado","limpiar","limpieza","lavar","rayan","rayar","mantenimiento","empañan"],
    replies: [
      "¡Buen tema! La mayoría de la gente los limpia mal sin saber 😅\n\n✅ Lo correcto:\n• Agua tibia + jabón neutro (sin fragancia)\n• Secar con paño de microfibra\n• Guardarlos siempre en su estuche\n\n❌ Lo que debes evitar:\n• Limpiar con la playera (raya las micas aunque no lo creas)\n• Dejarlos boca abajo\n• El tablero del carro (el calor deforma el armazón)\n\nY si se te chuecaron o aflojaron, tráelos a sucursal — te los ajustamos gratis en 5 minutos. ¿Necesitas algún otro tip?",
    ],
  },
  {
    keys: ["niño","niños","niña","niñas","hijo","hija","infantil","pequeños","chiquitos"],
    replies: [
      "¡Claro que atendemos niños! Desde los 3 años.\n\nSeñales de que tu hijo podría necesitar lentes:\n• Se acerca mucho a la pantalla o libros\n• Entrecierra los ojos\n• Dolores de cabeza frecuentes\n• Bajo rendimiento escolar\n\nPara niños recomendamos armazones flexibles (casi irrompibles 😄) y micas de policarbonato que resisten impactos.\n\nEl examen es gratis también para ellos. ¿Quieres traerlo para una revisión?",
    ],
  },
  {
    keys: ["promocion","promoción","promociones","oferta","ofertas","descuento","descuentos","2x1"],
    replies: [
      "Las promos cambian cada mes, pero lo que SIEMPRE tenemos:\n\n🆓 Examen de la vista gratis\n🎁 Estuche + paño incluidos con cualquier compra\n🛡 Garantía incluida\n\nPara las promos del mes, lo mejor es que nos escribas al 33 1425 7226 o nos sigas en Instagram (@fabricadelentesmex) — ahí publicamos todo primero.\n\n¿Te interesa que te avise cuando haya una promo especial?",
    ],
  },
  {
    keys: ["por que","por qué","porque","diferencia","mejor","ventaja","vs","versus","devlyn","sears","optica","óptica","competencia"],
    replies: [
      "Te la hago corta: lo que nos hace diferentes es que fabricamos aquí.\n\n🏭 Laboratorio propio = mejor precio + entrega rápida\n⚡ Lentes desde 1 hora (no 5-7 días)\n🆓 Examen gratis de verdad\n👤 Equipo pequeño = te conocemos, no eres un número\n🛡 Garantía que sí respetamos\n\nEn las cadenas grandes, tus micas viajan a otro estado para fabricarse y tú esperas una semana. Aquí las haces y te las llevas.\n\n¿Quieres venir a conocernos? Puedes probarte todos los armazones sin compromiso.",
    ],
  },
  {
    keys: ["comprar","quiero comprar","como compro","cómo compro","proceso","pedido","encargar","quiero unos"],
    replies: [
      "¡Qué bueno! El proceso es súper fácil:\n\n1️⃣ Vienes a sucursal y te pruebas los armazones (o me dices por aquí cuál te gusta y te lo aparto)\n2️⃣ Te hacemos el examen gratis — 15 min\n3️⃣ Elegimos juntos las micas ideales\n4️⃣ Las fabricamos aquí mismo\n5️⃣ ¡Te vas con tus lentes!\n\nPara monofocales, todo el proceso toma como 1-2 horas. Literalmente entras y sales con lentes nuevos el mismo día.\n\n¿Ya tienes algún modelo en mente?",
    ],
  },
  {
    keys: ["cotizar","cotizacion","cotización","cuanto me saldria","cuánto me saldría","enviar receta","tengo receta","foto receta"],
    replies: [
      "¡Con todo gusto te cotizo! 📋\n\nSolo necesito tu receta. Me la puedes escribir aquí o mejor aún, mándame una foto por WhatsApp al 33 1425 7226 — así me aseguro de leerla correctamente.\n\nTe respondo en minutos con:\n• Opciones de armazón\n• Micas recomendadas\n• Precio exacto\n• Tiempo de entrega\n\nSi no tienes receta, ven por tu examen gratis y te cotizamos en el momento. ¿Qué prefieres?",
    ],
  },
  {
    keys: ["pago","pagar","tarjeta","efectivo","transferencia","credito","crédito","debito","débito","meses sin intereses"],
    replies: [
      "Aceptamos de todo:\n\n💵 Efectivo\n💳 Tarjeta débito y crédito (Visa, Mastercard, Amex)\n🏦 Transferencia\n\nSobre meses sin intereses — depende de las promos vigentes. Pregunta en sucursal con qué tarjetas aplica.\n\n¿Algo más en lo que te pueda ayudar?",
    ],
  },
  {
    keys: ["instagram","tiktok","facebook","redes","redes sociales"],
    replies: [
      "¡Síguenos! Ahí subimos modelos nuevos, tips y promos:\n\n📸 @fabricadelentesmex (Instagram)\n🎵 @fabricadelentes (TikTok)\n\n¿Quieres que te ayude con algo más?",
    ],
  },
  {
    keys: ["gracias","muchas gracias","genial","perfecto","excelente","ok","vale","listo","adios","adiós","bye","nos vemos","hasta luego","chido","va"],
    replies: [
      "¡Con mucho gusto! Me dio gusto ayudarte 😊\n\nRecuerda que estamos en Zona Minerva y puedes venir sin cita. Si necesitas algo más, aquí estaré.\n\n¡Que tengas excelente día! 👋",
      "¡De nada! Cualquier cosa que necesites, aquí ando. ¡Te esperamos en sucursal! 👋",
      "¡Fue un placer! Si te surge otra duda, solo escríbeme. ¡Cuídate mucho! 🙌",
    ],
  },
];

// ── MATCHING ──
function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function matchKB(input: string): { entry: KBEntry; score: number } | null {
  const q = normalize(input);
  let best: KBEntry | null = null;
  let bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const key of entry.keys) {
      const nk = normalize(key);
      if (q.includes(nk)) { score += nk.split(" ").length * 3; }
      else { for (const w of nk.split(" ")) { if (w.length > 2 && q.includes(w)) score += 1; } }
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  return best && bestScore >= 1 ? { entry: best, score: bestScore } : null;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── COMPONENT ──
type Msg = { role: "user" | "bot"; text: string };

const quickActions = [
  { label: "Quiero un examen gratis", emoji: "👁" },
  { label: "Ayúdame a elegir armazón", emoji: "✨" },
  { label: "¿Qué marcas tienen?", emoji: "🏷" },
  { label: "Necesito cotizar", emoji: "💰" },
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [askedName, setAskedName] = useState(false);
  const [askedPhone, setAskedPhone] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inactivityRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages, typing]);

  useEffect(() => {
    if (open && inputRef.current) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // Auto-open hint after 8 seconds
  useEffect(() => {
    if (hasOpened) return;
    const t = setTimeout(() => {
      const hint = document.getElementById("chat-hint");
      if (hint) hint.style.opacity = "1";
    }, 8000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  // Reset inactivity timer on each message
  const resetInactivity = useCallback(() => {
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    inactivityRef.current = setTimeout(() => {
      setMessages((prev) => {
        if (prev.length === 0) return prev;
        const last = prev[prev.length - 1];
        if (last.role === "bot" && last.text.includes("sigues ahí")) return prev;
        return [...prev, { role: "bot", text: userName ? `¿${userName}, sigues ahí? 😊 Si necesitas más tiempo no te preocupes, aquí sigo cuando quieras.` : "¡Hey! ¿Sigues ahí? 😊 No te preocupes, tómate tu tiempo. Aquí sigo cuando me necesites." }];
      });
    }, 45000); // 45 seconds
  }, [userName]);

  const respond = useCallback((text: string) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setTyping(true);
    setMsgCount((c) => c + 1);
    resetInactivity();

    const delay = 1000 + Math.random() * 1500;
    const trimmed = text.trim();

    // ── Detect name if we asked for it ──
    if (askedName && !userName) {
      const nameGuess = trimmed.replace(/^(me llamo|soy|mi nombre es)\s*/i, "").split(" ")[0];
      if (nameGuess && nameGuess.length >= 2 && !/\d/.test(nameGuess)) {
        const capitalized = nameGuess.charAt(0).toUpperCase() + nameGuess.slice(1).toLowerCase();
        setUserName(capitalized);
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: "bot", text: `¡Mucho gusto, ${capitalized}! 😊 Y para que te pueda contactar si se corta la conversación... ¿me compartes tu número de celular?` }]);
          setAskedPhone(true);
          setTyping(false);
        }, delay);
        return;
      }
    }

    // ── Detect phone if we asked for it ──
    if (askedPhone && !userPhone) {
      const digits = trimmed.replace(/\D/g, "");
      if (digits.length >= 10) {
        setUserPhone(digits);
        // Save lead to admin store
        try { addLead({ name: userName || "", phone: digits, messages: messages.filter((m) => m.role === "user").map((m) => m.text), source: "chatbot" }); } catch {}
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: "bot", text: `¡Perfecto, ${userName || ""}! Ya tengo tu número. Ahora sí, cuéntame: ¿en qué te puedo ayudar hoy? 😊` }]);
          setTyping(false);
        }, delay);
        return;
      }
    }

    setTimeout(() => {
      const currentCount = msgCount + 1;

      // ── Ask for name after 2nd message if we don't have it ──
      if (currentCount === 2 && !userName && !askedName) {
        const match = matchKB(text);
        if (match) {
          const reply = pick(match.entry.replies);
          setMessages((prev) => [...prev, { role: "bot", text: reply }]);
        }
        setTimeout(() => {
          setTyping(true);
          setTimeout(() => {
            setMessages((prev) => [...prev, { role: "bot", text: "Por cierto, ¿cómo te llamas? Para darte una atención más personal 😊" }]);
            setAskedName(true);
            setTyping(false);
          }, 1200);
        }, 1800);
        setTyping(false);
        return;
      }

      const match = matchKB(text);
      if (match) {
        let reply = pick(match.entry.replies);
        // Personalize with name
        if (userName && Math.random() > 0.5) {
          const personalizations = [
            `${userName}, `, `Mira ${userName}, `, `Ok ${userName}, `, `Claro ${userName}, `,
          ];
          reply = pick(personalizations) + reply.charAt(0).toLowerCase() + reply.slice(1);
        }
        setMessages((prev) => [...prev, { role: "bot", text: reply }]);
        if (match.entry.followUp) {
          setTimeout(() => {
            setTyping(true);
            setTimeout(() => {
              setMessages((prev) => [...prev, { role: "bot", text: match.entry.followUp! }]);
              setTyping(false);
            }, 800 + Math.random() * 700);
          }, 1500);
        }
      } else {
        const fallback = userName
          ? `Mmm ${userName}, esa no me la sé del todo 😅 Pero déjame conectarte con alguien de nuestro equipo que sí te puede ayudar:`
          : "Mmm, esa no me la sé del todo 😅 Pero te conecto con alguien que sí. Escríbenos por WhatsApp:";
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: fallback },
          { role: "bot", text: "__whatsapp__" },
        ]);
      }
      setTyping(false);
    }, delay);
  }, [askedName, askedPhone, userName, userPhone, msgCount, resetInactivity]);

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setInput("");
    respond(t);
  };

  const handleOpen = () => {
    setOpen(true);
    setHasOpened(true);
    const hint = document.getElementById("chat-hint");
    if (hint) hint.style.opacity = "0";
  };

  return (
    <>
      {/* Hint bubble */}
      {!open && (
        <div
          id="chat-hint"
          onClick={handleOpen}
          className="fixed z-50 cursor-pointer transition-opacity duration-500"
          style={{
            bottom: 76,
            right: 24,
            opacity: 0,
            background: "#fff",
            borderRadius: 12,
            padding: "10px 16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            fontSize: 13,
            color: "#1A1818",
            maxWidth: 220,
          }}
        >
          <span style={{ fontWeight: 600 }}>Ana</span>
          <span style={{ color: "#9CA3AF" }}> de Fábrica de Lentes</span>
          <br />
          <span style={{ color: "#4B5563" }}>¿Te ayudo a encontrar tus lentes ideales?</span>
          <div style={{ position: "absolute", bottom: -6, right: 32, width: 12, height: 12, background: "#fff", transform: "rotate(45deg)", boxShadow: "2px 2px 4px rgba(0,0,0,0.05)" }} />
        </div>
      )}

      {/* Toggle button — hidden on mobile when chat is open (fullscreen) */}
      {(!open || true) && (
        <button
          onClick={() => { if (open) setOpen(false); else handleOpen(); }}
          className={`fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 hover:scale-105 ${open ? "hidden md:flex" : "flex"}`}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#1A1818",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}
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
          className="fixed z-50 flex flex-col bg-white overflow-hidden top-0 left-0 right-0 bottom-0 md:top-auto md:left-auto md:right-6 md:bottom-[80px] md:w-[400px] md:h-[560px] md:rounded-2xl"
          style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.12)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 flex-shrink-0" style={{ padding: "calc(16px + env(safe-area-inset-top, 0px)) 20px 16px", borderBottom: "1px solid #F0F0F0" }}>
            <div className="relative flex-shrink-0">
              <div className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: "50%", background: "#1A1818", color: "#fff", fontSize: 14, fontWeight: 600 }}>A</div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1818" }}>Ana</p>
              <p style={{ fontSize: 11, color: "#22C55E" }}>En línea ahora</p>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 -mr-1 rounded-full hover:bg-gray-100 transition-colors" aria-label="Cerrar chat">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={msgsRef} className="flex-1 overflow-y-auto" style={{ padding: "16px 14px 8px" }}>
            {messages.length === 0 && (
              <div>
                {/* Welcome */}
                <div className="flex gap-2.5 mb-3">
                  <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: "50%", background: "#1A1818", color: "#fff", fontSize: 11, fontWeight: 600 }}>A</div>
                  <div style={{ background: "#F3F4F6", borderRadius: "4px 14px 14px 14px", padding: "10px 14px", maxWidth: "82%", fontSize: 13, lineHeight: 1.6, color: "#374151" }}>
                    <p>¡Hola! 👋 Soy <strong>Ana</strong>, tu asesora óptica.</p>
                    <p style={{ marginTop: 6 }}>Puedo ayudarte a elegir lentes, entender tu receta, cotizarte, o agendar tu examen gratis. ¿Qué necesitas?</p>
                  </div>
                </div>
                {/* Quick actions */}
                <div className="flex flex-wrap gap-1.5 ml-9 mb-2">
                  {quickActions.map((qa) => (
                    <button
                      key={qa.label}
                      onClick={() => respond(qa.label)}
                      className="transition-all duration-150 hover:border-[#1A1818] hover:text-[#1A1818]"
                      style={{ fontSize: 12, padding: "7px 12px", borderRadius: 20, border: "1px solid #E5E7EB", background: "#fff", color: "#4B5563", cursor: "pointer" }}
                    >
                      {qa.emoji} {qa.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => {
              // WhatsApp button
              if (msg.role === "bot" && msg.text === "__whatsapp__") {
                return (
                  <div key={i} className="flex gap-2.5 mb-3">
                    <div className="flex-shrink-0" style={{ width: 28 }} />
                    <a
                      href="https://wa.me/523314257226?text=Hola%2C%20quiero%20información%20sobre%20lentes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-all hover:brightness-110"
                      style={{ padding: "10px 20px", borderRadius: 24, background: "#25D366", color: "#fff", fontSize: 13, fontWeight: 600, textDecoration: "none" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Escribir a WhatsApp
                    </a>
                  </div>
                );
              }

              if (msg.role === "user") {
                return (
                  <div key={i} className="flex justify-end mb-3">
                    <div style={{ maxWidth: "82%", borderRadius: "14px 14px 4px 14px", padding: "10px 14px", fontSize: 13, lineHeight: 1.6, background: "#1A1818", color: "#fff" }}>
                      {msg.text}
                    </div>
                  </div>
                );
              }

              // Bot message
              return (
                <div key={i} className="flex gap-2.5 mb-3">
                  {/* Show avatar only if previous message is not bot */}
                  {(i === 0 || messages[i - 1]?.role !== "bot") ? (
                    <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: "50%", background: "#1A1818", color: "#fff", fontSize: 11, fontWeight: 600 }}>A</div>
                  ) : (
                    <div className="flex-shrink-0" style={{ width: 28 }} />
                  )}
                  <div style={{ maxWidth: "82%", borderRadius: "4px 14px 14px 14px", padding: "10px 14px", fontSize: 13, lineHeight: 1.7, background: "#F3F4F6", color: "#374151" }}>
                    {msg.text.split("\n").map((line, j) => (
                      <span key={j}>{line}{j < msg.text.split("\n").length - 1 && <br />}</span>
                    ))}
                  </div>
                </div>
              );
            })}

            {typing && (
              <div className="flex gap-2.5 mb-3">
                <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: "50%", background: "#1A1818", color: "#fff", fontSize: 11, fontWeight: 600 }}>A</div>
                <div style={{ background: "#F3F4F6", borderRadius: "4px 14px 14px 14px", padding: "14px 18px", display: "flex", gap: 5 }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#9CA3AF", display: "inline-block", animation: "typingDot 1.4s ease-in-out infinite", animationDelay: `${i * 0.2}s` }} />
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
                placeholder="Escribe tu mensaje..."
                className="flex-1 text-[13px] text-[#1A1818] placeholder:text-[#9CA3AF]"
                style={{ border: "none", background: "none", outline: "none" }}
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="flex items-center justify-center transition-colors"
                style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: input.trim() ? "#1A1818" : "#D1D5DB",
                  border: "none", cursor: input.trim() ? "pointer" : "default",
                }}
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
