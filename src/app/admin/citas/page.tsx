"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated, logout, getAppointments, addAppointment, updateAppointment, deleteAppointment, seedIfEmpty, type Appointment } from "@/lib/admin-store";

const nav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { label: "Clientes", href: "/admin/clientes", icon: "👥" },
  { label: "Citas", href: "/admin/citas", icon: "📅" },
  { label: "Leads", href: "/admin/leads", icon: "💬" },
];

const typeLabels: Record<string, string> = { examen: "Examen de la vista", compra: "Compra de lentes", ajuste: "Ajuste/Reparación", garantia: "Garantía", otro: "Otro" };
const statusColors: Record<string, string> = { pendiente: "bg-yellow-100 text-yellow-700", confirmada: "bg-blue-100 text-blue-700", completada: "bg-green-100 text-green-700", cancelada: "bg-red-100 text-red-700" };

const emptyForm: { clientName: string; clientPhone: string; clientId: string; type: "examen" | "compra" | "ajuste" | "garantia" | "otro"; date: string; time: string; status: "pendiente" | "confirmada" | "completada" | "cancelada"; notes: string } = { clientName: "", clientPhone: "", clientId: "", type: "examen", date: "", time: "", status: "pendiente", notes: "" };

export default function CitasPage() {
  const router = useRouter();
  const [appts, setAppts] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState("todas");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/admin"); return; }
    seedIfEmpty();
    setAppts(getAppointments());
  }, [router]);

  function refresh() { setAppts(getAppointments()); }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.clientName || !form.date || !form.time) return;
    addAppointment(form);
    setForm(emptyForm);
    setShowForm(false);
    refresh();
  }

  function changeStatus(id: string, status: Appointment["status"]) {
    updateAppointment(id, { status });
    refresh();
  }

  const today = new Date().toISOString().slice(0, 10);
  const filtered = appts.filter((a) => {
    if (filter === "hoy") return a.date === today;
    if (filter === "pendientes") return a.status === "pendiente" || a.status === "confirmada";
    if (filter === "completadas") return a.status === "completada";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      <aside className="w-56 bg-[#1A1818] flex-col flex-shrink-0 min-h-screen hidden md:flex">
        <div className="p-5 border-b border-white/10"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-bold">FL</div><div><p className="text-white text-sm font-semibold">Fábrica de Lentes</p><p className="text-white/40 text-[10px]">Panel Admin</p></div></div></div>
        <nav className="flex-1 p-3 space-y-1">{nav.map((item) => (<Link key={item.href} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${item.href === "/admin/citas" ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"}`}><span>{item.icon}</span>{item.label}</Link>))}</nav>
        <div className="p-3 border-t border-white/10"><button onClick={() => { logout(); router.push("/admin"); }} className="flex items-center gap-2 px-3 py-2 text-white/40 text-sm hover:text-white transition-colors w-full">Cerrar sesión</button></div>
      </aside>

      <main className="flex-1 p-6 md:p-8 overflow-auto">
        <div className="flex md:hidden gap-2 mb-6 overflow-x-auto">{nav.map((item) => (<Link key={item.href} href={item.href} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs whitespace-nowrap ${item.href === "/admin/citas" ? "bg-[#1A1818] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280]"}`}><span>{item.icon}</span>{item.label}</Link>))}</div>

        <div className="flex items-center justify-between mb-6">
          <div><h1 className="text-2xl font-semibold text-[#1A1818]">Citas</h1><p className="text-sm text-[#9CA3AF]">{appts.length} registradas</p></div>
          <button onClick={() => { setForm({ ...emptyForm, date: today }); setShowForm(true); }} className="px-5 py-2.5 rounded-full bg-[#1A1818] text-white text-sm font-medium hover:bg-[#333] transition-colors">+ Nueva cita</button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {["todas", "hoy", "pendientes", "completadas"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${filter === f ? "bg-[#1A1818] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#1A1818]"}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Form modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
            <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
              <h2 className="text-lg font-semibold text-[#1A1818] mb-4">Nueva cita</h2>
              <div className="space-y-3">
                <div><label className="block text-xs font-medium text-[#6B7280] mb-1">Nombre del cliente *</label><input value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818]" required autoFocus /></div>
                <div><label className="block text-xs font-medium text-[#6B7280] mb-1">Teléfono</label><input value={form.clientPhone} onChange={(e) => setForm({ ...form, clientPhone: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818]" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="block text-xs font-medium text-[#6B7280] mb-1">Fecha *</label><input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818]" required /></div>
                  <div><label className="block text-xs font-medium text-[#6B7280] mb-1">Hora *</label><input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818]" required /></div>
                </div>
                <div><label className="block text-xs font-medium text-[#6B7280] mb-1">Tipo</label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as "examen" | "compra" | "ajuste" | "garantia" | "otro" })} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818] bg-white">
                    {Object.entries(typeLabels).map(([k, v]) => (<option key={k} value={k}>{v}</option>))}
                  </select>
                </div>
                <div><label className="block text-xs font-medium text-[#6B7280] mb-1">Notas</label><textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={2} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818] resize-none" /></div>
              </div>
              <div className="flex gap-3 mt-5">
                <button type="submit" className="flex-1 py-2.5 rounded-lg bg-[#1A1818] text-white text-sm font-semibold hover:bg-[#333] transition-colors">Crear cita</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-5 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#6B7280]">Cancelar</button>
              </div>
            </form>
          </div>
        )}

        {/* Appointments list */}
        <div className="space-y-3">
          {filtered.map((a) => (
            <div key={a.id} className="bg-white rounded-xl border border-[#F0F0F0] p-5 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#F9FAFB] flex flex-col items-center justify-center">
                  <p className="text-xs text-[#9CA3AF]">{new Date(a.date + "T12:00").toLocaleDateString("es-MX", { day: "numeric", month: "short" })}</p>
                  <p className="text-sm font-semibold text-[#1A1818]">{a.time}</p>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#1A1818]">{a.clientName}</p>
                  <p className="text-xs text-[#9CA3AF]">{typeLabels[a.type]} · {a.clientPhone}</p>
                  {a.notes && <p className="text-xs text-[#9CA3AF] mt-0.5 truncate">{a.notes}</p>}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${statusColors[a.status]}`}>{a.status}</span>
                {a.status === "pendiente" && <button onClick={() => changeStatus(a.id, "confirmada")} className="text-xs text-blue-600 hover:underline">Confirmar</button>}
                {(a.status === "pendiente" || a.status === "confirmada") && <button onClick={() => changeStatus(a.id, "completada")} className="text-xs text-green-600 hover:underline">Completar</button>}
                {a.status !== "cancelada" && a.status !== "completada" && <button onClick={() => changeStatus(a.id, "cancelada")} className="text-xs text-red-400 hover:underline">Cancelar</button>}
                <button onClick={() => { deleteAppointment(a.id); refresh(); }} className="text-xs text-[#9CA3AF] hover:text-red-400 ml-2">🗑</button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center py-12 text-sm text-[#9CA3AF]">No hay citas {filter !== "todas" ? `(${filter})` : ""}</p>}
        </div>
      </main>
    </div>
  );
}
