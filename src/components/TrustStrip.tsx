export function TrustStrip() {
  const items = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Listos en 1 Hora",
      description: "Lentes graduados el mismo día",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Examen Gratis",
      description: "Con optometristas certificados",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      ),
      title: "Garantía Total",
      description: "En todos nuestros productos",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Sucursal Minerva",
      description: "Guadalajara, Jalisco",
    },
  ];

  return (
    <section className="border-y border-border bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center py-8 md:py-10 px-4">
              <div className="mb-3 text-accent">{item.icon}</div>
              <h3 className="text-sm font-semibold text-fg mb-1">{item.title}</h3>
              <p className="text-xs text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
