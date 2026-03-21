export function PromoBanner() {
  return (
    <div
      className="flex items-center justify-center gap-2 h-10 text-xs tracking-wide"
      style={{ background: "#1A1818" }}
    >
      <span style={{ color: "rgba(245,240,234,0.80)" }}>
        Examen de la vista gratuito · Desde $590 MXN
      </span>
      <a
        href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        style={{ color: "#C8A040" }}
      >
        Agendar ahora →
      </a>
    </div>
  );
}
