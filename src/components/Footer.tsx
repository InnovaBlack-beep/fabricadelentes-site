import Link from "next/link";

export function Footer() {
  return (
    <footer>
      {/* ── Subscribe section ── */}
      <div className="bg-white border-t border-b border-[#eee]">
        <div className="max-w-[1280px] mx-auto px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-[family-name:var(--font-playfair)] text-[#111] text-4xl font-normal">
            Recibe ofertas exclusivas
          </h3>
          <form className="flex w-full md:w-auto" action="#" method="POST">
            <input
              type="email"
              placeholder="Tu correo electr&oacute;nico"
              className="px-5 py-3 border border-[#ddd] border-r-0 rounded-l-full text-sm text-[#222] placeholder:text-[#999] w-full md:w-72 focus:outline-none focus:border-[#0057A8]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0057A8] text-white text-[12px] tracking-[0.12em] uppercase font-semibold rounded-r-full hover:bg-[#003F7A] transition-colors whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="bg-[#3D4F5C] py-14">
        <div className="max-w-[1280px] mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Productos */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] font-bold text-white mb-4">
              Productos
            </h4>
            <ul className="space-y-0">
              {[
                { label: "Lentes de contacto", href: "/lentes-de-contacto" },
                { label: "Lentes graduados", href: "/lentes-graduados" },
                { label: "Lentes de sol", href: "/lentes-de-sol" },
                { label: "Armazones", href: "/lentes-graduados" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#A8B8C4] hover:text-white transition-colors leading-[2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] font-bold text-white mb-4">
              Servicios
            </h4>
            <ul className="space-y-0">
              {[
                { label: "Examen de la vista", href: "/lentes-graduados" },
                { label: "Asesor\u00eda", href: "/contacto" },
                { label: "Convenios empresariales", href: "/empresas" },
                { label: "Reparaciones", href: "/contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#A8B8C4] hover:text-white transition-colors leading-[2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] font-bold text-white mb-4">
              Empresa
            </h4>
            <ul className="space-y-0">
              {[
                { label: "Nosotros", href: "/laboratorio" },
                { label: "Laboratorio propio", href: "/laboratorio" },
                { label: "Blog", href: "/" },
                { label: "Trabaja con nosotros", href: "/contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#A8B8C4] hover:text-white transition-colors leading-[2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.1em] font-bold text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-0">
              <li>
                <a
                  href="https://wa.me/523314257226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#A8B8C4] hover:text-white transition-colors leading-[2]"
                >
                  WhatsApp 331 425 7226
                </a>
              </li>
              <li>
                <a
                  href="tel:+523314257226"
                  className="text-[13px] text-[#A8B8C4] hover:text-white transition-colors leading-[2]"
                >
                  Tel: 331 425 7226
                </a>
              </li>
              <li className="text-[13px] text-[#A8B8C4] leading-[2]">
                Guadalajara, Jalisco
              </li>
              <li className="text-[13px] text-[#A8B8C4] leading-[2]">
                Lun-S&aacute;b 10-19h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-[1280px] mx-auto px-10 border-t border-white/10 pt-6 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#7A8A96]">
            <p>&copy; 2026 F&aacute;brica de Lentes&reg; &middot; Todos los derechos reservados</p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/fabricadelentesmex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7A8A96] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@fabricadelentes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7A8A96] hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.13a8.16 8.16 0 004.77 1.53v-3.44a4.85 4.85 0 01-.81-.07 4.83 4.83 0 01-.38-3.88z" />
                </svg>
              </a>
            </div>

            <p>
              Hecho por{" "}
              <a
                href="https://innovablack.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                InnovaBlack
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
