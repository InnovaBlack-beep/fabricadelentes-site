"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated, logout, getLeads, convertLeadToClient, seedIfEmpty, type Lead } from "@/lib/admin-store";

const nav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { label: "Clientes", href: "/admin/clientes", icon: "👥" },
  { label: "Citas", href: "/admin/citas", icon: "📅" },
  { label: "Leads", href: "/admin/leads", icon: "💬" },
];

export default function LeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState("activos");

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/admin"); return; }
    seedIfEmpty();
    setLeads(getLeads());
  }, [router]);

  function refresh() { setLeads(getLeads()); }

  function handleConvert(id: string) {
    convertLeadToClient(id);
    refresh();
  }

  const filtered = leads.filter((l) => {
    if (filter === "activos") return !l.convertedToClient;
    if (filter === "convertidos") return l.convertedToClient;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      <aside className="w-56 bg-[#1A1818] flex-col flex-shrink-0 min-h-screen hidden md:flex">
        <div className="p-5 border-b border-white/10"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-bold">FL</div><div><p className="text-white text-sm font-semibold">Fábrica de Lentes</p><p className="text-white/40 text-[10px]">Panel Admin</p></div></div></div>
        <nav className="flex-1 p-3 space-y-1">{nav.map((item) => (<Link key={item.href} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${item.href === "/admin/leads" ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"}`}><span>{item.icon}</span>{item.label}</Link>))}</nav>
        <div className="p-3 border-t border-white/10"><button onClick={() => { logout(); router.push("/admin"); }} className="flex items-center gap-2 px-3 py-2 text-white/40 text-sm hover:text-white transition-colors w-full">Cerrar sesión</button></div>
      </aside>

      <main className="flex-1 p-6 md:p-8 overflow-auto">
        <div className="flex md:hidden gap-2 mb-6 overflow-x-auto">{nav.map((item) => (<Link key={item.href} href={item.href} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs whitespace-nowrap ${item.href === "/admin/leads" ? "bg-[#1A1818] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280]"}`}><span>{item.icon}</span>{item.label}</Link>))}</div>

        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#1A1818]">Leads del chatbot</h1>
          <p className="text-sm text-[#9CA3AF] mt-1">Personas que interactuaron con el asesor virtual Ana</p>
        </div>

        <div className="flex gap-2 mb-6">
          {["activos", "convertidos", "todos"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${filter === f ? "bg-[#1A1818] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#1A1818]"}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)} ({leads.filter((l) => f === "activos" ? !l.convertedToClient : f === "convertidos" ? l.convertedToClient : true).length})
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((l) => (
            <div key={l.id} className={`bg-white rounded-xl border border-[#F0F0F0] p-5 ${l.convertedToClient ? "opacity-60" : ""}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#1A1818]">{l.name || "Sin nombre"}</p>
                    {l.convertedToClient && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">Convertido</span>}
                    {!l.convertedToClient && !l.name && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">Sin datos</span>}
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">
                    {l.phone ? (
                      <a href={`https://wa.me/52${l.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">{l.phone}</a>
                    ) : "Sin teléfono"}
                    {" · "}
                    {new Date(l.createdAt).toLocaleDateString("es-MX", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                {!l.convertedToClient && l.name && l.phone && (
                  <button onClick={() => handleConvert(l.id)} className="px-4 py-2 rounded-full bg-[#1A1818] text-white text-xs font-medium hover:bg-[#333] transition-colors">
                    Convertir a cliente
                  </button>
                )}
              </div>

              {/* Chat messages */}
              <div className="bg-[#F9FAFB] rounded-lg p-3 space-y-1.5">
                <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Conversación</p>
                {l.messages.map((msg, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[10px] text-[#9CA3AF] mt-0.5 flex-shrink-0">💬</span>
                    <p className="text-xs text-[#4B5563]">{msg}</p>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              {!l.convertedToClient && l.phone && (
                <div className="flex gap-2 mt-3">
                  <a href={`https://wa.me/52${l.phone}?text=Hola${l.name ? " " + l.name : ""}, soy de Fábrica de Lentes. Vi que nos contactaste por nuestra página. ¿En qué te puedo ayudar?`} target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline">Contactar por WhatsApp</a>
                  <span className="text-[#E5E7EB]">·</span>
                  <Link href="/admin/citas" className="text-xs text-[#B5956E] hover:underline">Agendar cita</Link>
                </div>
              )}
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center py-12 text-sm text-[#9CA3AF]">No hay leads {filter !== "todos" ? `(${filter})` : ""}</p>}
        </div>
      </main>
    </div>
  );
}
