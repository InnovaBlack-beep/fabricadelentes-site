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
      style={{
        background: "#FAF8F5",
        borderBottom: "0.5px solid #E8E0D8",
      }}
    >
      <div className="flex items-center justify-between h-full px-12 max-w-[1440px] mx-auto">
        {/* Left */}
        <div className="flex items-center gap-5">
          <a
            href="https://maps.google.com/?q=Zona+Minerva+Guadalajara"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "#6A5A4A",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#111110")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#6A5A4A")
            }
          >
            Visítanos en GDL
          </a>
          <a
            href="https://wa.me/523314257226"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "#6A5A4A",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#111110")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#6A5A4A")
            }
          >
            Atención al cliente
          </a>
        </div>

        {/* Center carousel */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "#6A5A4A",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 2px",
            }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "#6A5A4A",
              minWidth: 260,
              textAlign: "center",
            }}
          >
            {messages[idx]}
          </span>
          <button
            onClick={next}
            className="transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "#6A5A4A",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 2px",
            }}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "#6A5A4A",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#111110")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#6A5A4A")
            }
          >
            Favoritos
          </a>
          <a
            href="#"
            className="transition-colors"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              color: "#6A5A4A",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#111110")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#6A5A4A")
            }
          >
            Mi cuenta
          </a>
        </div>
      </div>
    </div>
  );
}
