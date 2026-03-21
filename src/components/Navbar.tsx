"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/lentes-de-contacto", label: "De Contacto" },
  { href: "/lentes-graduados", label: "Graduados" },
  { href: "/lentes-de-sol", label: "De Sol" },
  { href: "/laboratorio", label: "Laboratorio" },
  { href: "/empresas", label: "Empresas" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-foreground tracking-tight">
            Fabrica <span className="text-gold italic">de Lentes</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-[13px] text-muted hover:text-foreground transition-colors duration-200 font-medium tracking-wide uppercase"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 px-6 py-2.5 bg-foreground text-white text-sm font-medium tracking-wide hover:bg-dark transition-colors duration-200"
          >
            Cotizar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
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
        <div className="lg:hidden bg-white border-t border-border animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground hover:text-gold transition-colors border-b border-border/50 last:border-0 text-lg font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3.5 bg-foreground text-white text-center font-medium"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
