"use client";

import { useState } from "react";

export function BookingSection() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const msg = value.trim()
      ? `Hola, soy ${value}. Quiero agendar un examen de la vista.`
      : "Hola, quiero agendar un examen de la vista.";
    window.open(
      `https://wa.me/523314257226?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section
      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      style={{
        padding: "52px 48px",
        background: "#FAF8F5",
        borderBottom: "0.5px solid #E8E0D8",
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 600,
            fontSize: 28,
            color: "#111110",
          }}
        >
          Agenda tu examen de la vista
        </h2>
        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "#A09080",
          }}
        >
          Gratuito · Para ti y tu familia · Guadalajara
        </p>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Tu nombre o número de WhatsApp"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-l-full outline-none"
          style={{
            height: 46,
            width: "100%",
            minWidth: 220,
            maxWidth: 256,
            border: "1px solid #C8C0B8",
            borderRight: "none",
            padding: "0 20px",
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "#111110",
            background: "#FAF8F5",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#C8A040")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#C8C0B8")}
        />
        <button
          onClick={handleSubmit}
          className="rounded-r-full transition-colors shrink-0"
          style={{
            height: 46,
            background: "#111110",
            color: "#F5F0EA",
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            padding: "0 24px",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#C8A040";
            e.currentTarget.style.color = "#1A1000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#111110";
            e.currentTarget.style.color = "#F5F0EA";
          }}
        >
          Agendar
        </button>
      </div>
    </section>
  );
}
