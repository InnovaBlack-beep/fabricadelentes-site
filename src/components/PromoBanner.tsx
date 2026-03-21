export function PromoBanner() {
  return (
    <div
      className="flex items-center justify-center gap-2"
      style={{
        height: 40,
        background: "#1A1818",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          color: "rgba(245,240,234,0.80)",
          letterSpacing: "0.06em",
        }}
      >
        Examen de la vista gratuito · Desde $590 MXN
      </span>
      <a
        href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          color: "#C8A040",
          letterSpacing: "0.06em",
        }}
      >
        Agendar ahora →
      </a>
    </div>
  );
}
