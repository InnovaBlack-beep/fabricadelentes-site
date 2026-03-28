"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { isAuthenticated, logout, getClients, addClient, updateClient, deleteClient, seedIfEmpty, type Client } from "@/lib/admin-store";

const nav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "📊" },
  { label: "Clientes", href: "/admin/clientes", icon: "👥" },
  { label: "Citas", href: "/admin/citas", icon: "📅" },
  { label: "Leads", href: "/admin/leads", icon: "💬" },
];

const emptyForm: { name: string; phone: string; email: string; notes: string; source: "chatbot" | "manual" | "whatsapp" } = { name: "", phone: "", email: "", notes: "", source: "manual" };

export default function ClientesPage() {
  const router = useRouter();
  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/admin"); return; }
    seedIfEmpty();
    setClients(getClients());
  }, [router]);

  function refresh() { setClients(getClients()); }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    if (editId) {
      updateClient(editId, form);
    } else {
      addClient(form);
    }
    setForm(emptyForm);
    setShowForm(false);
    setEditId(null);
    refresh();
  }

  function handleEdit(c: Client) {
    setForm({ name: c.name, phone: c.phone, email: c.email, notes: c.notes, source: c.source });
    setEditId(c.id);
    setShowForm(true);
  }

  function handleDelete(id: string) {
    if (confirm("¿Eliminar este cliente?")) { deleteClient(id); refresh(); }
  }

  const filtered = clients.filter((c) => {
    const q = search.toLowerCase();
    return c.name.toLowerCase().includes(q) || c.phone.includes(q) || c.email.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      <aside className="w-56 bg-[#1A1818] flex-col flex-shrink-0 min-h-screen hidden md:flex">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white text-xs font-bold">FL</div>
            <div><p className="text-white text-sm font-semibold">Fábrica de Lentes</p><p className="text-white/40 text-[10px]">Panel Admin</p></div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${item.href === "/admin/clientes" ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"}`}><span>{item.icon}</span>{item.label}</Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10"><button onClick={() => { logout(); router.push("/admin"); }} className="flex items-center gap-2 px-3 py-2 text-white/40 text-sm hover:text-white transition-colors w-full">Cerrar sesión</button></div>
      </aside>

      <main className="flex-1 p-6 md:p-8 overflow-auto">
        <div className="flex md:hidden gap-2 mb-6 overflow-x-auto">
          {nav.map((item) => (<Link key={item.href} href={item.href} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs whitespace-nowrap ${item.href === "/admin/clientes" ? "bg-[#1A1818] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280]"}`}><span>{item.icon}</span>{item.label}</Link>))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-[#1A1818]">Clientes</h1>
            <p className="text-sm text-[#9CA3AF]">{clients.length} registrados</p>
          </div>
          <button onClick={() => { setForm(emptyForm); setEditId(null); setShowForm(true); }} className="px-5 py-2.5 rounded-full bg-[#1A1818] text-white text-sm font-medium hover:bg-[#333] transition-colors">+ Nuevo</button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por nombre, teléfono o email..." className="w-full max-w-md px-4 py-3 rounded-lg border border-[#E5E7EB] text-sm text-[#1A1818] focus:outline-none focus:border-[#1A1818] bg-white" />
        </div>

        {/* Form modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
            <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
              <h2 className="text-lg font-semibold text-[#1A1818] mb-4">{editId ? "Editar" : "Nuevo"} cliente</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-[#6B7280] mb-1">Nombre *</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818]" required autoFocus />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6B7280] mb-1">Teléfono *</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818]" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6B7280] mb-1">Email</label>
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6B7280] mb-1">Notas (graduación, preferencias, etc.)</label>
                  <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#1A1818] resize-none" />
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <button type="submit" className="flex-1 py-2.5 rounded-lg bg-[#1A1818] text-white text-sm font-semibold hover:bg-[#333] transition-colors">{editId ? "Guardar" : "Crear"}</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-5 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#6B7280] hover:text-[#1A1818] transition-colors">Cancelar</button>
              </div>
            </form>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl border border-[#F0F0F0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#F0F0F0] bg-[#F9FAFB]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9CA3AF]">Nombre</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9CA3AF]">Teléfono</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9CA3AF] hidden md:table-cell">Email</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9CA3AF] hidden lg:table-cell">Notas</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9CA3AF]">Origen</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-[#9CA3AF]">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="px-4 py-3 font-medium text-[#1A1818]">{c.name}</td>
                    <td className="px-4 py-3 text-[#6B7280]">
                      <a href={`https://wa.me/52${c.phone}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">{c.phone}</a>
                    </td>
                    <td className="px-4 py-3 text-[#6B7280] hidden md:table-cell">{c.email || "—"}</td>
                    <td className="px-4 py-3 text-[#9CA3AF] hidden lg:table-cell max-w-[200px] truncate">{c.notes || "—"}</td>
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${c.source === "chatbot" ? "bg-purple-100 text-purple-700" : c.source === "whatsapp" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>{c.source}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => handleEdit(c)} className="text-xs text-[#B5956E] hover:underline mr-3">Editar</button>
                      <button onClick={() => handleDelete(c.id)} className="text-xs text-red-400 hover:underline">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && <p className="p-6 text-center text-sm text-[#9CA3AF]">No se encontraron clientes</p>}
        </div>
      </main>
    </div>
  );
}
