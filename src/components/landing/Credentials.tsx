export function Credentials() {
  return (
    <section className="py-16 md:py-24 bg-[#FAFAF8]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#B5956E] mb-3">Por qué elegirnos</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1818]">
            La óptica de confianza en Guadalajara
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { number: "+8", label: "Años de experiencia", sub: "en el mercado óptico" },
            { number: "+12,000", label: "Clientes satisfechos", sub: "y creciendo cada mes" },
            { number: "1 hora", label: "Entrega express", sub: "con laboratorio propio" },
            { number: "100%", label: "Garantía real", sub: "en graduación y armazón" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1A1818] mb-2">{stat.number}</p>
              <p className="text-sm font-semibold text-[#1A1818] mb-1">{stat.label}</p>
              <p className="text-sm text-[#9CA3AF]">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-[#6B7280]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#B5956E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>Optometristas certificados</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#B5956E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              <span>Laboratorio óptico propio</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#B5956E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Entrega desde 1 hora</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#B5956E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              <span>Todas las formas de pago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
