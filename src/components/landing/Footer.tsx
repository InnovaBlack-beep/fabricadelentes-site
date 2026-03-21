import Link from "next/link";

const footerLinks = {
  Productos: [
    { label: "Lentes de contacto", href: "/lentes-de-contacto" },
    { label: "Armazones graduados", href: "/lentes-graduados" },
    { label: "Lentes de sol", href: "/lentes-de-sol" },
    { label: "Micas antirreflectantes", href: "/lentes-graduados" },
  ],
  Servicios: [
    { label: "Examen de la vista gratis", href: "/contacto" },
    { label: "Laboratorio propio", href: "/laboratorio" },
    { label: "Convenios empresariales", href: "/empresas" },
    { label: "Reparaciones", href: "/contacto" },
  ],
  Empresa: [
    { label: "Nosotros", href: "/laboratorio" },
    { label: "Sucursales GDL", href: "/contacto" },
    { label: "Laboratorio", href: "/laboratorio" },
    { label: "Trabaja con nosotros", href: "/contacto" },
  ],
};

const contactInfo = [
  {
    label: "WhatsApp 33 1425 7226",
    href: "https://wa.me/523314257226",
    external: true,
  },
  { label: "Zona Minerva · GDL" },
  { label: "Lun–Sáb · 10:00–20:00" },
  { label: "contacto@fabricadelentes.mx", href: "mailto:contacto@fabricadelentes.mx" },
];

export function Footer() {
  return (
    <footer className="bg-dark-deep pt-16 pb-8 px-5 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold text-white">
              Fábrica de Lentes<span className="text-white/50">®</span>
            </span>
            <p className="text-xs text-white/38 mt-3 leading-relaxed max-w-[200px]">
              Óptica con laboratorio propio en Guadalajara. Lentes listos en 1 hora.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com/fabricadelentesmex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/38 hover:text-white transition-colors"
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
                className="text-white/38 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.17v-3.44a4.85 4.85 0 01-3.39-1.44 4.83 4.83 0 01-1.41-3.6h3.39z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/fabricadelentesmex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/38 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white mb-4">
                {category}
              </p>
              <ul className="space-y-0">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block text-xs text-white/38 hover:text-white transition-colors leading-[2]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white mb-4">
              Contacto
            </p>
            <ul className="space-y-0">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.external ? "_blank" : undefined}
                      rel={info.external ? "noopener noreferrer" : undefined}
                      className="block text-xs text-white/38 hover:text-white transition-colors leading-[2]"
                    >
                      {info.label}
                    </a>
                  ) : (
                    <span className="block text-xs text-white/38 leading-[2]">
                      {info.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/7 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © 2026 Fábrica de Lentes® · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://fabricadelentes.mx/PolíticadeGarantía"
              className="text-xs text-white/30 hover:text-white transition-colors"
            >
              Garantías
            </a>
            <a
              href="https://fabricadelentes.mx/AvisodePrivacidad"
              className="text-xs text-white/30 hover:text-white transition-colors"
            >
              Privacidad
            </a>
            <span className="text-xs text-white/20">·</span>
            <a
              href="https://innovablack.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white transition-colors"
            >
              Hecho por InnovaBlack
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
