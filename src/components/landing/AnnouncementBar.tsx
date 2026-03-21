"use client";

import { useState } from "react";

const messages = [
  "Examen de la vista gratuito · Lentes listos en 1 hora",
  "Envíos a toda la República Mexicana",
  "Armazones desde $590 MXN · Garantía total",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative h-10 bg-warm-graphite flex items-center justify-center overflow-hidden">
      <button
        onClick={() => setIndex((i) => (i - 1 + messages.length) % messages.length)}
        className="absolute left-4 text-text-on-dark/50 hover:text-text-on-dark text-xs"
        aria-label="Mensaje anterior"
      >
        ‹
      </button>

      <p className="text-xs tracking-wide text-text-on-dark/80 text-center px-12">
        {messages[index]}
        <a
          href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
          className="ml-3 text-gold hover:underline"
        >
          Agendar ahora →
        </a>
      </p>

      <button
        onClick={() => setIndex((i) => (i + 1) % messages.length)}
        className="absolute right-4 text-text-on-dark/50 hover:text-text-on-dark text-xs"
        aria-label="Siguiente mensaje"
      >
        ›
      </button>
    </div>
  );
}
