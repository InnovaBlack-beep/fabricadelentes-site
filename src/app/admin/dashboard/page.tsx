"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated, logout, getStats, getAppointments, getLeads, seedIfEmpty, type Appointment, type Lead, updateAppointment } from "@/lib/admin-store";

const nav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { label: "Clientes", href: "/admin/clientes", icon: "👥" },
  { label: "Citas", href: "/admin/citas", icon: "📅" },
  { label: "Leads", href: "/admin/leads", icon: "💬" },
];

const typeLabels: Record<string, string> = { examen: "Examen", compra: "Compra", ajuste: "Ajuste", garantia: "Garantía", otro: "Otro" };
const statusColors: Record<string, string> = {
  pendiente: "bg-yellow-100 text-yellow-700",
  confirmada: "bg-blue-100 text-blue-700",
  completada: "bg-green-100 text-green-700",
  cancelada: "bg-red-100 text-red-700",
};

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<ReturnType<typeof getStats> | null>(null);
  const [todayAppts, setTodayAppts] = useState<Appointment[]>([]);
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/admin"); return; }
    seedIfEmpty();
    refresh();
  }, [router]);

  function refresh() {
    setStats(getStats());
    const today = new Date().toISOString().slice(0, 10);
    setTodayAppts(getAppointments().filter((a) => a.date === today).slice(0, 5));
    setRecentLeads(getLeads().filter((l) => !l.convertedToClient).slice(0, 5));
  }

  function markComplete(id: string) {
    updateAppointment(id, { status: "completada" });
    refresh();
  }

  if (!stats) return <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center"><p className="text-[#9CA3AF]">Cargando...</p></div>;

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Buenos días" : hour < 18 ? "Buenas tardes" : "Buenas noches";

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#1A1818] flex flex-col flex-shrink-0 min-h-screen hidden md:flex">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-bold">FL</div>
            <div>
              <p className="text-white text-sm font-semibold">Fábrica de Lentes</p>
              <p className="text-white/40 text-[10px]">Panel Admin</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${item.href === "/admin/dashboard" ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <button onClick={() => { logout(); router.push("/admin"); }} className="flex items-center gap-2 px-3 py-2 text-white/40 text-sm hover:text-white transition-colors w-full">
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-8 overflow-auto">
        {/* Mobile nav */}
        <div className="flex md:hidden gap-2 mb-6 overflow-x-auto">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs whitespace-nowrap ${item.href === "/admin/dashboard" ? "bg-[#1A1818] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280]"}`}>
              <span>{item.icon}</span>{item.label}
            </Link>
          ))}
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#1A1818]">{greeting} 👋</h1>
          <p className="text-sm text-[#9CA3AF] mt-1">Aquí tienes el resumen de hoy</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Clientes", value: stats.totalClients, sub: `+${stats.clientsThisMonth} este mes`, color: "#1A1818" },
            { label: "Citas hoy", value: stats.todayAppointments, sub: `${stats.pendingAppointments} pendientes`, color: "#2563EB" },
            { label: "Leads activos", value: stats.unconvertedLeads, sub: `${stats.totalLeads} total`, color: "#B5956E" },
            { label: "Citas completadas", value: stats.completedAppointments, sub: `de ${stats.totalAppointments} total`, color: "#16A34A" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 border border-[#F0F0F0]">
              <p className="text-xs text-[#9CA3AF] mb-1">{s.label}</p>
              <p className="text-3xl font-semibold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-xs text-[#9CA3AF] mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Today's appointments */}
          <div className="bg-white rounded-xl border border-[#F0F0F0] overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-[#F0F0F0]">
              <h2 className="text-sm font-semibold text-[#1A1818]">Citas de hoy</h2>
              <Link href="/admin/citas" className="text-xs text-[#B5956E] hover:underline">Ver todas</Link>
            </div>
            {todayAppts.length === 0 ? (
              <p className="p-5 text-sm text-[#9CA3AF]">No hay citas programadas para hoy</p>
            ) : (
              <div className="divide-y divide-[#F0F0F0]">
                {todayAppts.map((a) => (
                  <div key={a.id} className="flex items-center gap-4 p-4">
                    <div className="flex-shrink-0 w-12 text-center">
                      <p className="text-sm font-semibold text-[#1A1818]">{a.time}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#1A1818] truncate">{a.clientName}</p>
                      <p className="text-xs text-[#9CA3AF]">{typeLabels[a.type]} · {a.clientPhone}</p>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${statusColors[a.status]}`}>
                      {a.status}
                    </span>
                    {a.status !== "completada" && a.status !== "cancelada" && (
                      <button onClick={() => markComplete(a.id)} className="text-xs text-green-600 hover:underline">✓</button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent leads */}
          <div className="bg-white rounded-xl border border-[#F0F0F0] overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-[#F0F0F0]">
              <h2 className="text-sm font-semibold text-[#1A1818]">Leads recientes (chatbot)</h2>
              <Link href="/admin/leads" className="text-xs text-[#B5956E] hover:underline">Ver todos</Link>
            </div>
            {recentLeads.length === 0 ? (
              <p className="p-5 text-sm text-[#9CA3AF]">No hay leads nuevos</p>
            ) : (
              <div className="divide-y divide-[#F0F0F0]">
                {recentLeads.map((l) => (
                  <div key={l.id} className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-[#1A1818]">{l.name || "Sin nombre"}</p>
                      <span className="text-[10px] text-[#9CA3AF]">{new Date(l.createdAt).toLocaleDateString("es-MX")}</span>
                    </div>
                    <p className="text-xs text-[#9CA3AF] mb-1">{l.phone || "Sin teléfono"}</p>
                    <p className="text-xs text-[#6B7280] truncate">&ldquo;{l.messages[l.messages.length - 1]}&rdquo;</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/admin/citas" className="px-5 py-2.5 rounded-full bg-[#1A1818] text-white text-sm font-medium hover:bg-[#333] transition-colors">+ Nueva cita</Link>
          <Link href="/admin/clientes" className="px-5 py-2.5 rounded-full border border-[#E5E7EB] text-sm text-[#6B7280] hover:border-[#1A1818] hover:text-[#1A1818] transition-colors">+ Nuevo cliente</Link>
          <Link href="/admin/leads" className="px-5 py-2.5 rounded-full border border-[#E5E7EB] text-sm text-[#6B7280] hover:border-[#1A1818] hover:text-[#1A1818] transition-colors">Ver leads</Link>
        </div>
      </main>
    </div>
  );
}
