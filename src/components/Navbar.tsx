"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/lentes-de-contacto", label: "Lentes de Contacto" },
  { href: "/lentes-graduados", label: "Lentes Graduados" },
  { href: "/lentes-de-sol", label: "Lentes de Sol" },
  { href: "/laboratorio", label: "Laboratorio" },
  { href: "/empresas", label: "Empresas" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4 text-navy"
            >
              <circle cx="8" cy="12" r="5" />
              <circle cx="16" cy="12" r="5" />
              <path d="M13 12h-2" />
            </svg>
          </div>
          <span className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-white tracking-tight">
            Fábrica <span className="text-amber">de Lentes</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-white/70 hover:text-amber transition-colors duration-200 font-medium"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20información%20sobre%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2.5 bg-amber text-navy text-sm font-semibold rounded-full hover:bg-amber-light transition-colors duration-200"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menú"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
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
        <div className="lg:hidden bg-navy border-t border-white/5 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white/80 hover:text-amber transition-colors border-b border-white/5 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20me%20interesa%20información%20sobre%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-5 py-3 bg-amber text-navy text-center font-semibold rounded-full"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
