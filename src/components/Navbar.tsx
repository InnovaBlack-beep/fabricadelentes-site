"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UtilityBar } from "./UtilityBar";
import { PromoBanner } from "./PromoBanner";

const navItems = [
  { label: "Lentes de contacto", href: "/lentes-de-contacto" },
  { label: "Graduados", href: "/lentes-graduados" },
  { label: "Sol", href: "/lentes-de-sol" },
  { label: "Laboratorio", href: "/laboratorio" },
  { label: "Empresas", href: "/empresas" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <UtilityBar />
      <PromoBanner />
      <header
        className="sticky top-0 z-50 transition-shadow duration-200"
        style={{
          height: 64,
          background: "#FFFFFF",
          borderBottom: "1px solid #F0F0F0",
          boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="flex items-center justify-between h-full px-6 lg:px-12 max-w-[1440px] mx-auto">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-muted p-2 -ml-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="lg:flex-shrink-0">
            <Image src="/images/logo-black.png" alt="Fábrica de Lentes" width={180} height={40} className="h-auto" style={{ width: 180 }} priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-widest text-muted hover:text-fg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 text-muted">
            <button aria-label="Buscar" className="hidden lg:block hover:text-fg transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <a href="https://wa.me/523314257226" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-fg transition-colors p-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 flex flex-col" style={{ background: "#FFFFFF" }}>
            <div className="flex items-center justify-end p-5">
              <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú" className="text-muted">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium uppercase tracking-widest text-muted border-b border-border"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 mt-8">
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-12 rounded-full text-xs font-bold uppercase tracking-widest transition-colors"
                style={{ background: "#111110", color: "#F5F0EA" }}
              >
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
