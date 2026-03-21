import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      {/* ── Subscribe bar ── */}
      <div className="bg-white border-t border-[#e5e5e5]">
        <div className="max-w-[1280px] mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-xl tracking-[0.15em] uppercase font-normal">
            Suscríbete
          </h3>
          <form className="flex w-full md:w-auto" action="#" method="POST">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-3 border border-[#e5e5e5] border-r-0 text-sm text-[#1a1a1a] placeholder:text-[#999] w-full md:w-72 focus:outline-none focus:border-[#004AAD]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#004AAD] text-white text-[12px] tracking-[0.15em] uppercase font-medium hover:bg-[#003580] transition-colors whitespace-nowrap"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="bg-[#0a1628] text-white">
        <div className="max-w-[1280px] mx-auto px-8 py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Marcas */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-medium text-white mb-5">
              Marcas
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              <li><span>Ray-Ban</span></li>
              <li><span>Oakley</span></li>
              <li><span>Acuvue</span></li>
              <li><span>Vogue Eyewear</span></li>
              <li><span>Meta (Ray-Ban)</span></li>
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-medium text-white mb-5">
              Productos
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              <li>
                <Link href="/lentes-graduados" className="hover:text-white transition-colors">
                  Graduados
                </Link>
              </li>
              <li>
                <Link href="/lentes-de-sol" className="hover:text-white transition-colors">
                  Lentes de Sol
                </Link>
              </li>
              <li>
                <Link href="/lentes-de-contacto" className="hover:text-white transition-colors">
                  De Contacto
                </Link>
              </li>
              <li><span>Armazones</span></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-medium text-white mb-5">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              <li>
                <Link href="/lentes-graduados" className="hover:text-white transition-colors">
                  Examen de la Vista
                </Link>
              </li>
              <li>
                <Link href="/laboratorio" className="hover:text-white transition-colors">
                  Laboratorio
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="hover:text-white transition-colors">
                  Convenios Empresariales
                </Link>
              </li>
            </ul>
          </div>

          {/* Atencion al cliente */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-medium text-white mb-5">
              Atenci&oacute;n al Cliente
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              <li>
                <a
                  href="https://wa.me/523314257226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+523314257226" className="hover:text-white transition-colors">
                  331 425 7226
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-medium text-white mb-5">
              Legal
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              <li><span>Aviso de Privacidad</span></li>
              <li><span>T&eacute;rminos y Condiciones</span></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] uppercase font-medium text-white mb-5">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-[13px] text-white/50">
              <li>
                <Link href="/laboratorio" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/laboratorio" className="hover:text-white transition-colors">
                  Nuestro Laboratorio
                </Link>
              </li>
              <li><span>Guadalajara, Jalisco</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1280px] mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Image
                src="/images/logo.png"
                alt="Fábrica de Lentes"
                width={120}
                height={20}
                className="h-5 w-auto brightness-0 invert"
              />
              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/fabricadelentesmex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
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
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.13a8.16 8.16 0 004.77 1.53v-3.44a4.85 4.85 0 01-.81-.07 4.83 4.83 0 01-.38-3.88z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-white/30">
              <p>
                &copy; {new Date().getFullYear()} Fábrica de Lentes. Todos los derechos reservados.
              </p>
              <span>|</span>
              <p>
                Hecho por{" "}
                <a
                  href="https://innovablack.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  InnovaBlack
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
