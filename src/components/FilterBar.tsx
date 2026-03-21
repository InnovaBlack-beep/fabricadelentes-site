"use client";

export function FilterBar() {
  const chips = [
    "Más vendidos",
    "Entrega en 1hr ▾",
    "Por forma ▾",
    "Por material ▾",
    "Por marca ▾",
    "Lentes de contacto",
  ];

  return (
    <div
      className="flex items-center gap-3 overflow-x-auto scrollbar-hide"
      style={{
        height: 52,
        background: "#FAF8F5",
        borderBottom: "0.5px solid #E8E0D8",
        padding: "0 48px",
      }}
    >
      <span
        className="shrink-0 text-base font-semibold"
        style={{
          fontFamily: "var(--font-serif)",
          color: "#111110",
          borderRight: "2px solid #111110",
          paddingRight: 8,
          marginRight: 8,
        }}
      >
        Destacados
      </span>
      {chips.map((chip) => (
        <button
          key={chip}
          className="shrink-0 rounded-full transition-colors text-xs"
          style={{
            color: "#6A5A4A",
            border: "0.5px solid #C8C0B8",
            padding: "7px 14px",
            background: "#FAF8F5",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#111110";
            e.currentTarget.style.color = "#111110";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#C8C0B8";
            e.currentTarget.style.color = "#6A5A4A";
          }}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
