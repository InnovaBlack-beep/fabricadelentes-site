"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/admin-store";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(user, pass)) {
      router.push("/admin/dashboard");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="w-full max-w-sm mx-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1A1818] text-white text-xl font-bold mb-4">FL</div>
          <h1 className="text-xl font-semibold text-[#1A1818]">Fábrica de Lentes</h1>
          <p className="text-sm text-[#9CA3AF] mt-1">Panel de Administración</p>
        </div>
        <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 shadow-sm border border-[#F0F0F0]">
          <div className="mb-4">
            <label className="block text-xs font-medium text-[#6B7280] mb-1.5">Usuario</label>
            <input
              type="text"
              value={user}
              onChange={(e) => { setUser(e.target.value); setError(""); }}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] text-sm text-[#1A1818] focus:outline-none focus:border-[#1A1818] transition-colors"
              placeholder="admin"
              autoFocus
            />
          </div>
          <div className="mb-6">
            <label className="block text-xs font-medium text-[#6B7280] mb-1.5">Contraseña</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => { setPass(e.target.value); setError(""); }}
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] text-sm text-[#1A1818] focus:outline-none focus:border-[#1A1818] transition-colors"
              placeholder="••••••"
            />
          </div>
          {error && <p className="text-xs text-red-500 mb-4">{error}</p>}
          <button type="submit" className="w-full py-3 rounded-lg bg-[#1A1818] text-white text-sm font-semibold hover:bg-[#333] transition-colors">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
