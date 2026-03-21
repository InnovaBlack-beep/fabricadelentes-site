"use client";

import { useState, useEffect, useCallback } from "react";

const messages = [
  "Lentes listos en 1 hora · Sucursal Minerva",
  "Examen de la vista gratis",
  "Desde $590 MXN · Distribuidor Ray-Ban",
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
      style={{ background: "#FAF8F5", borderBottom: "0.5px solid #E8E0D8" }}
    >
      <div className="flex items-center justify-between h-full px-12 max-w-[1440px] mx-auto text-xs tracking-wide text-muted">
        <div className="flex items-center gap-5">
          <a href="https://maps.google.com/?q=Zona+Minerva+Guadalajara" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
            Visítanos en GDL
          </a>
          <a href="https://wa.me/523314257226" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">
            Atención al cliente
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={prev} className="px-1 hover:text-fg transition-colors" aria-label="Anterior">‹</button>
          <span className="min-w-[260px] text-center">{messages[idx]}</span>
          <button onClick={next} className="px-1 hover:text-fg transition-colors" aria-label="Siguiente">›</button>
        </div>

        <div className="flex items-center gap-5">
          <a href="/lentes-graduados" className="hover:text-fg transition-colors">Favoritos</a>
          <a href="/contacto" className="hover:text-fg transition-colors">Mi cuenta</a>
        </div>
      </div>
    </div>
  );
}
