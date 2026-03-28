"use client";

import { useState, useEffect, useCallback } from "react";

const messages = [
  "Lentes listos en 1 hora · Sucursal Minerva",
  "Examen de la vista gratis",
  "Brizzant · Frida Kahlo · Nobleman · Massimo",
];

export function UtilityBar() {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % messages.length), []);
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + messages.length) % messages.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div
      className="hidden lg:block h-9"
      style={{ background: "#FFFFFF", borderBottom: "0.5px solid #F0F0F0" }}
    >
      <div className="flex items-center justify-between h-full px-12 max-w-[1440px] mx-auto text-xs tracking-wide text-warm-brown">
        <div className="flex items-center gap-5">
          <a href="https://maps.google.com/?q=Zona+Minerva+Guadalajara" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            Visítanos en GDL
          </a>
          <a href="https://wa.me/523314257226" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
            Atención al cliente
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={prev} className="px-1 hover:text-text-primary transition-colors" aria-label="Anterior">‹</button>
          <span className="min-w-[260px] text-center">{messages[idx]}</span>
          <button onClick={next} className="px-1 hover:text-text-primary transition-colors" aria-label="Siguiente">›</button>
        </div>

        <div className="flex items-center gap-5">
          <a href="/lentes-graduados" className="hover:text-text-primary transition-colors">Catálogo</a>
          <a href="/contacto" className="hover:text-text-primary transition-colors">Contacto</a>
        </div>
      </div>
    </div>
  );
}
