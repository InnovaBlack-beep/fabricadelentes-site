"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hola, quiero suscribirme al newsletter de Fábrica de Lentes. Mi correo es: ${email}`
    );
    window.open(`https://wa.me/523314257226?text=${message}`, "_blank");
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-dark">
      <div className="max-w-[640px] mx-auto text-center">
        <span className="inline-block w-8 h-1 bg-accent-secondary rounded-full mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ofertas exclusivas directo a tu inbox
        </h2>
        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-8">
          Promociones, nuevos modelos y tips para el cuidado de tu visión. Sin spam.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 h-12 px-5 rounded-full bg-dark-deep border border-[#3a3a3a] text-white text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="h-12 px-8 rounded-full bg-accent text-dark text-sm font-semibold uppercase tracking-[0.1em] hover:brightness-95 transition-all whitespace-nowrap cursor-pointer"
          >
            Suscribirme
          </button>
        </form>
        <p className="text-xs text-[#6B7280]">
          Únete a +500 personas que cuidan su visión con nosotros
        </p>
      </div>
    </section>
  );
}
