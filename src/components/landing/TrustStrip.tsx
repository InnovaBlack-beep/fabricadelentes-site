export function TrustStrip() {
  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Listos en 1 Hora",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Examen Gratis",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Garantía Total",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Sucursal Minerva",
    },
  ];

  return (
    <section className="border-y border-border bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center py-5 md:py-6 px-4"
          >
            <div className="text-fg mb-2">{item.icon}</div>
            <h2 className="text-sm font-semibold text-fg">{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
