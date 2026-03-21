export function AdvisorCTA() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-surface">
      <div className="max-w-[640px] mx-auto text-center">
        {/* Mint accent icon */}
        <div className="w-14 h-14 rounded-full bg-accent-secondary/15 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-7 h-7 text-accent-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-fg mb-4">
          ¿No sabes cuál lente es para ti?
        </h2>
        <p className="text-sm text-muted leading-relaxed mb-8">
          Nuestros optometristas te asesoran gratis por WhatsApp
        </p>
        <a
          href="https://wa.me/523314257226?text=Hola%2C%20quiero%20asesor%C3%ADa%20para%20elegir%20mis%20lentes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-accent text-dark text-sm font-semibold hover:brightness-95 transition-all"
        >
          Recibir Asesoría Gratis
        </a>
      </div>
    </section>
  );
}
