"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/lentes-graduados", label: "Graduados" },
  { href: "/lentes-de-contacto", label: "De Contacto" },
  { href: "/lentes-de-sol", label: "De Sol" },
  { href: "/laboratorio", label: "Laboratorio" },
  { href: "/empresas", label: "Empresas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#f5f5f5] border-b border-[#e0e0e0] text-xs text-[#666666]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-8">
          <span>Guadalajara, Jal.</span>
          <a href="tel:+523314257226" className="hover:text-[#1a1a1a] transition-colors">
            331 425 7226
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#e0e0e0]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[#1a1a1a] text-lg font-bold tracking-[-0.02em]">
              Fabrica de Lentes
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-[#333333] hover:text-[#0057FF] transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contacto"
              className="text-sm text-[#333333] hover:text-[#0057FF] transition-colors font-medium"
            >
              Contacto
            </Link>
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#0057FF] text-white text-sm font-semibold rounded-md hover:bg-[#0044cc] transition-colors"
            >
              Agendar Cita
            </a>
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
          <div className="lg:hidden bg-white border-t border-[#e0e0e0]">
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[#1a1a1a] hover:text-[#0057FF] transition-colors border-b border-[#e0e0e0] last:border-0 text-base font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="py-3 text-[#1a1a1a] hover:text-[#0057FF] transition-colors border-b border-[#e0e0e0] text-base font-medium"
              >
                Contacto
              </Link>
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-6 py-3 bg-[#0057FF] text-white text-center font-semibold rounded-md"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
