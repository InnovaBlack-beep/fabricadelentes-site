// ═══════════════════════════════════════════════════════════════
// ADMIN STORE — localStorage-based data store for MVP
// Replace with Supabase when ready for production
// ═══════════════════════════════════════════════════════════════

export type Client = {
  id: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  source: "chatbot" | "manual" | "whatsapp";
  createdAt: string;
};

export type Appointment = {
  id: string;
  clientId: string;
  clientName: string;
  clientPhone: string;
  type: "examen" | "compra" | "ajuste" | "garantia" | "otro";
  date: string;
  time: string;
  status: "pendiente" | "confirmada" | "completada" | "cancelada";
  notes: string;
  createdAt: string;
};

export type Lead = {
  id: string;
  name: string;
  phone: string;
  messages: string[];
  source: "chatbot";
  convertedToClient: boolean;
  createdAt: string;
};

function genId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getStore<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function setStore<T>(key: string, data: T[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
}

// ── CLIENTS ──
export function getClients(): Client[] { return getStore<Client>("fdl_clients"); }
export function addClient(c: Omit<Client, "id" | "createdAt">): Client {
  const clients = getClients();
  const newClient: Client = { ...c, id: genId(), createdAt: new Date().toISOString() };
  clients.unshift(newClient);
  setStore("fdl_clients", clients);
  return newClient;
}
export function updateClient(id: string, updates: Partial<Client>): void {
  const clients = getClients().map((c) => (c.id === id ? { ...c, ...updates } : c));
  setStore("fdl_clients", clients);
}
export function deleteClient(id: string): void {
  setStore("fdl_clients", getClients().filter((c) => c.id !== id));
}

// ── APPOINTMENTS ──
export function getAppointments(): Appointment[] { return getStore<Appointment>("fdl_appointments"); }
export function addAppointment(a: Omit<Appointment, "id" | "createdAt">): Appointment {
  const appts = getAppointments();
  const newAppt: Appointment = { ...a, id: genId(), createdAt: new Date().toISOString() };
  appts.unshift(newAppt);
  setStore("fdl_appointments", appts);
  return newAppt;
}
export function updateAppointment(id: string, updates: Partial<Appointment>): void {
  const appts = getAppointments().map((a) => (a.id === id ? { ...a, ...updates } : a));
  setStore("fdl_appointments", appts);
}
export function deleteAppointment(id: string): void {
  setStore("fdl_appointments", getAppointments().filter((a) => a.id !== id));
}

// ── LEADS ──
export function getLeads(): Lead[] { return getStore<Lead>("fdl_leads"); }
export function addLead(l: Omit<Lead, "id" | "createdAt" | "convertedToClient">): Lead {
  const leads = getLeads();
  // Don't duplicate by phone
  const existing = leads.find((e) => e.phone === l.phone);
  if (existing) {
    existing.messages = [...existing.messages, ...l.messages];
    existing.name = l.name || existing.name;
    setStore("fdl_leads", leads);
    return existing;
  }
  const newLead: Lead = { ...l, id: genId(), convertedToClient: false, createdAt: new Date().toISOString() };
  leads.unshift(newLead);
  setStore("fdl_leads", leads);
  return newLead;
}
export function convertLeadToClient(leadId: string): Client | null {
  const leads = getLeads();
  const lead = leads.find((l) => l.id === leadId);
  if (!lead) return null;
  lead.convertedToClient = true;
  setStore("fdl_leads", leads);
  return addClient({ name: lead.name, phone: lead.phone, email: "", notes: `Lead del chatbot. Mensajes: ${lead.messages.join(" | ")}`, source: "chatbot" });
}

// ── AUTH ──
const ADMIN_USER = "admin";
const ADMIN_PASS = "fdl2026";

export function login(user: string, pass: string): boolean {
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    if (typeof window !== "undefined") sessionStorage.setItem("fdl_auth", "1");
    return true;
  }
  return false;
}
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem("fdl_auth") === "1";
}
export function logout(): void {
  if (typeof window !== "undefined") sessionStorage.removeItem("fdl_auth");
}

// ── STATS ──
export function getStats() {
  const clients = getClients();
  const appts = getAppointments();
  const leads = getLeads();
  const today = new Date().toISOString().slice(0, 10);
  return {
    totalClients: clients.length,
    totalLeads: leads.length,
    unconvertedLeads: leads.filter((l) => !l.convertedToClient).length,
    totalAppointments: appts.length,
    todayAppointments: appts.filter((a) => a.date === today).length,
    pendingAppointments: appts.filter((a) => a.status === "pendiente").length,
    completedAppointments: appts.filter((a) => a.status === "completada").length,
    clientsThisMonth: clients.filter((c) => c.createdAt.slice(0, 7) === new Date().toISOString().slice(0, 7)).length,
  };
}

// ── SEED DATA (for demo) ──
export function seedIfEmpty(): void {
  if (getClients().length > 0) return;
  const clients = [
    { name: "María García López", phone: "3312345678", email: "maria.garcia@gmail.com", notes: "Miopía -3.50 ambos ojos. Prefiere armazones Frida Kahlo.", source: "manual" as const },
    { name: "Carlos Hernández", phone: "3398765432", email: "carlos.h@hotmail.com", notes: "Astigmatismo. Usa lentes de contacto Air Optix.", source: "whatsapp" as const },
    { name: "Ana Martínez", phone: "3356781234", email: "ana.mtz@outlook.com", notes: "Presbicia. Progresivos. Cliente frecuente.", source: "manual" as const },
    { name: "Roberto Sánchez", phone: "3343218765", email: "", notes: "Lentes de sol graduados Frida Kahlo.", source: "chatbot" as const },
    { name: "Laura Díaz", phone: "3378904321", email: "laura.diaz@empresa.com", notes: "Convenio empresarial. 15 empleados.", source: "manual" as const },
  ];
  clients.forEach(addClient);

  const now = new Date();
  const tomorrow = new Date(now); tomorrow.setDate(now.getDate() + 1);
  const dayAfter = new Date(now); dayAfter.setDate(now.getDate() + 2);
  const appts = [
    { clientId: "", clientName: "María García López", clientPhone: "3312345678", type: "examen" as const, date: now.toISOString().slice(0, 10), time: "10:30", status: "confirmada" as const, notes: "Primera visita" },
    { clientId: "", clientName: "Carlos Hernández", clientPhone: "3398765432", type: "compra" as const, date: now.toISOString().slice(0, 10), time: "12:00", status: "pendiente" as const, notes: "Recoger lentes de contacto" },
    { clientId: "", clientName: "Ana Martínez", clientPhone: "3356781234", type: "ajuste" as const, date: tomorrow.toISOString().slice(0, 10), time: "11:00", status: "pendiente" as const, notes: "Ajustar armazón" },
    { clientId: "", clientName: "Roberto Sánchez", clientPhone: "3343218765", type: "examen" as const, date: dayAfter.toISOString().slice(0, 10), time: "16:00", status: "pendiente" as const, notes: "" },
  ];
  appts.forEach(addAppointment);

  const leads2 = [
    { name: "Pedro Ramírez", phone: "3367891234", messages: ["Hola quiero saber precios", "Me interesan los Brizzant"], source: "chatbot" as const },
    { name: "Sofia Torres", phone: "3345678901", messages: ["Busco lentes de contacto para astigmatismo"], source: "chatbot" as const },
    { name: "", phone: "3323456789", messages: ["Cuanto cuestan los lentes de sol?"], source: "chatbot" as const },
  ];
  leads2.forEach(addLead);
}
