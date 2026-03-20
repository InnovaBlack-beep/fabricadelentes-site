import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-navy">
                <circle cx="8" cy="12" r="5" />
                <circle cx="16" cy="12" r="5" />
                <path d="M13 12h-2" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
              Fábrica <span className="text-amber">de Lentes</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Óptica con laboratorio propio en Guadalajara. Fabricamos tus lentes y te los entregamos el mismo día.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com/fabricadelentesmex" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber/20 hover:text-amber transition-colors" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://tiktok.com/@fabricadelentes" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber/20 hover:text-amber transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.13a8.16 8.16 0 004.77 1.53v-3.44a4.85 4.85 0 01-.81-.07 4.83 4.83 0 01-.38-3.88z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Productos</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/lentes-de-contacto" className="hover:text-amber transition-colors">Lentes de Contacto</Link></li>
            <li><Link href="/lentes-graduados" className="hover:text-amber transition-colors">Lentes Graduados</Link></li>
            <li><Link href="/lentes-de-sol" className="hover:text-amber transition-colors">Lentes de Sol</Link></li>
            <li><Link href="/laboratorio" className="hover:text-amber transition-colors">Laboratorio</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Servicios</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/lentes-graduados" className="hover:text-amber transition-colors">Examen de la Vista</Link></li>
            <li><Link href="/empresas" className="hover:text-amber transition-colors">Convenios Empresariales</Link></li>
            <li><Link href="/contacto" className="hover:text-amber transition-colors">Agendar Cita</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 mt-0.5 text-amber shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Guadalajara, Jalisco, México
            </li>
            <li className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-amber shrink-0"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              <a href="tel:+523314257226" className="hover:text-amber transition-colors">331 425 7226</a>
            </li>
            <li className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-amber shrink-0"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
              Lun – Sáb: 10:00 – 19:00
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Fábrica de Lentes. Todos los derechos reservados.</p>
          <p>
            Hecho por{" "}
            <a href="https://innovablack.ai" target="_blank" rel="noopener noreferrer" className="text-amber/60 hover:text-amber transition-colors">
              InnovaBlack
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
