"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/lentes-graduados", label: "GRADUADOS" },
  { href: "/lentes-de-sol", label: "LENTES DE SOL" },
  { href: "/lentes-de-contacto", label: "DE CONTACTO" },
  { href: "/laboratorio", label: "LABORATORIO" },
  { href: "/lentes-graduados", label: "EXAMEN" },
  { href: "/empresas", label: "EMPRESAS" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Utility bar ── */}
      <div className="h-9 bg-[#F4F4F4] border-b border-[#eee] text-[12px] text-[#666] hidden lg:block">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            <a
              href="https://maps.google.com/?q=Guadalajara+Jalisco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#222] transition-colors"
            >
              Encuentra una tienda
            </a>
            <span className="text-[#ccc]">|</span>
            <Link href="/contacto" className="hover:text-[#222] transition-colors">
              Atenci&oacute;n al cliente
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="cursor-default">Art&iacute;culos guardados &hearts;</span>
            <span className="text-[#ccc]">|</span>
            <span className="cursor-default">Mi cuenta</span>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="h-16 bg-white border-b border-[#eee] sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Fabrica de Lentes"
              width={200}
              height={24}
              className="h-6 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12px] tracking-[0.05em] font-medium text-[#222] hover:text-[#0057A8] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Search */}
            <button aria-label="Buscar" className="text-[#222] hover:text-[#0057A8] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            {/* WhatsApp */}
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#222] hover:text-[#25D366] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#222]" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-[#eee]">
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[12px] tracking-[0.05em] text-[#222] hover:text-[#0057A8] transition-colors border-b border-[#eee] last:border-0 font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="py-3 text-[12px] tracking-[0.05em] text-[#222] hover:text-[#0057A8] transition-colors font-medium"
              >
                CONTACTO
              </Link>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-[#0057A8] text-white text-center text-[12px] tracking-[0.15em] uppercase font-medium rounded-full hover:bg-[#003F7A] transition-colors"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Promo bar ── */}
      <div className="py-2.5 bg-[#0057A8] text-white text-[13px] text-center">
        <div className="max-w-[1280px] mx-auto px-10">
          <span>Laboratorio propio &middot; Entrega el mismo d&iacute;a&nbsp;&nbsp;</span>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-white/80 transition-colors"
          >
            Cotizar ahora
          </a>
        </div>
      </div>
    </>
  );
}
