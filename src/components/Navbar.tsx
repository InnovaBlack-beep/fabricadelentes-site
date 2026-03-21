"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/lentes-graduados", label: "GRADUADOS" },
  { href: "/lentes-de-sol", label: "LENTES DE SOL" },
  { href: "/lentes-de-contacto", label: "DE CONTACTO" },
  { href: "/laboratorio", label: "LABORATORIO" },
  { href: "/lentes-graduados", label: "EXAMEN DE LA VISTA" },
  { href: "/empresas", label: "EMPRESAS" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Utility bar ── */}
      <div className="bg-[#f7f7f7] border-b border-[#e5e5e5] text-[11px] text-[#666] hidden lg:block">
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[30px]">
          <div className="flex items-center gap-4">
            <a href="https://maps.google.com/?q=Guadalajara+Jalisco" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a] transition-colors tracking-wide">
              Encuentra una tienda
            </a>
            <span className="text-[#e5e5e5]">|</span>
            <Link href="/contacto" className="hover:text-[#1a1a1a] transition-colors tracking-wide">
              Atenci&oacute;n al cliente
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="tracking-wide cursor-default">Artículos guardados &#9825;</span>
            <span className="text-[#e5e5e5]">|</span>
            <span className="tracking-wide cursor-default">Mi cuenta</span>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="font-[family-name:var(--font-playfair)] text-[#1a1a1a] text-lg tracking-[0.2em] uppercase font-normal">
              Fábrica de Lentes
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[12px] text-[#1a1a1a] tracking-[0.1em] hover:text-[#2d1b69] transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Search icon */}
            <button aria-label="Buscar" className="text-[#1a1a1a] hover:text-[#2d1b69] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            {/* Cart icon */}
            <button aria-label="Carrito" className="text-[#1a1a1a] hover:text-[#2d1b69] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[#1a1a1a]"
            aria-label="Menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-6 h-6"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-[#e5e5e5]">
            <div className="px-8 py-6 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[12px] tracking-[0.1em] text-[#1a1a1a] hover:text-[#2d1b69] transition-colors border-b border-[#e5e5e5] last:border-0 font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="py-3 text-[12px] tracking-[0.1em] text-[#1a1a1a] hover:text-[#2d1b69] transition-colors font-medium"
              >
                CONTACTO
              </Link>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-[#2d1b69] text-white text-center text-[12px] tracking-[0.15em] uppercase font-medium rounded-none"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Promo bar ── */}
      <div className="bg-[#4a2c8a] text-white text-center py-2.5 text-[13px] tracking-wide">
        <div className="max-w-[1280px] mx-auto px-8">
          <span>Laboratorio propio &middot; Entrega el mismo día&nbsp;&nbsp;</span>
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
