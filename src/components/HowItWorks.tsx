"use client";

export function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6A5A4A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      num: "1",
      title: "Llega a la tienda",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6A5A4A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        </svg>
      ),
      num: "2",
      title: "Examen gratis",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6A5A4A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a4 4 0 00-8 0v2" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
      ),
      num: "3",
      title: "Fabricamos aquí",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6A5A4A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
      num: "4",
      title: "Listos en 1 hora",
    },
  ];

  return (
    <section
      className="text-center"
      style={{
        padding: "68px 48px",
        background: "#FAF8F5",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.20em",
          color: "#6A5A4A",
          marginBottom: 56,
        }}
      >
        ASÍ DE FÁCIL ES PEDIR TUS LENTES
      </p>

      <div
        className="relative mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8"
        style={{ maxWidth: 920 }}
      >
        {/* Dashed connecting line */}
        <div
          className="hidden lg:block absolute"
          style={{
            top: 28,
            left: "12%",
            right: "12%",
            height: 0,
            borderTop: "1.5px dashed #D0C8C0",
          }}
        />

        {steps.map((step) => (
          <div key={step.num} className="flex flex-col items-center relative z-10">
            <div
              className="flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#FAF8F5",
                border: "1px solid #D8D0C8",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                marginBottom: 16,
              }}
            >
              {step.icon}
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
              }}
            >
              <span style={{ color: "#A09080" }}>{step.num}</span>
              <span style={{ color: "#A09080", margin: "0 6px" }}>|</span>
              <span style={{ color: "#111110", fontWeight: 700 }}>{step.title}</span>
            </p>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <a
          href="/lentes-graduados"
          className="rounded-full transition-colors"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            padding: "0 28px",
            background: "#111110",
            color: "#F5F0EA",
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.10em",
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
          Ver Productos
        </a>
        <a
          href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full transition-colors"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 44,
            padding: "0 28px",
            background: "transparent",
            color: "#111110",
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            border: "1px solid #C8C0B8",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#111110";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#C8C0B8";
          }}
        >
          Agendar Examen
        </a>
      </div>
    </section>
  );
}
