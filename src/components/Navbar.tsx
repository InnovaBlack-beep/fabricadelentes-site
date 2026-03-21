"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/lentes-de-contacto", label: "LENTES DE CONTACTO" },
  { href: "/lentes-graduados", label: "GRADUADOS" },
  { href: "/lentes-de-sol", label: "SOL" },
  { href: "/laboratorio", label: "LABORATORIO" },
  { href: "/empresas", label: "EMPRESAS" },
  { href: "/contacto", label: "CONTACTO" },
];

const rotatingMessages = [
  "Lentes listos en 1 hora \u00b7 Sucursal Minerva",
  "Examen de la vista gratis",
  "Desde $590 MXN \u00b7 Distribuidor Ray-Ban",
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── UtilityBar ── */}
      <div className="h-9 bg-[#FAF8F5] border-b-[0.5px] border-[#E8E0D8] text-[11px] text-[#6A5A4A] hidden lg:block">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-full">
          <div className="flex items-center gap-3 font-[family-name:var(--font-sans)]" style={{ fontWeight: 500 }}>
            <a
              href="https://maps.google.com/?q=Guadalajara+Jalisco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111110] transition-colors"
            >
              Vis&iacute;tanos en GDL
            </a>
            <span className="text-[#C8C0B8]">|</span>
            <Link href="/contacto" className="hover:text-[#111110] transition-colors">
              Atenci&oacute;n al cliente
            </Link>
          </div>

          {/* Rotating messages */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMsgIndex((prev) => (prev - 1 + rotatingMessages.length) % rotatingMessages.length)}
              className="text-[#A09080] hover:text-[#6A5A4A] transition-colors text-[13px]"
              aria-label="Mensaje anterior"
            >
              &lsaquo;
            </button>
            <span className="min-w-[260px] text-center font-[family-name:var(--font-sans)]" style={{ fontWeight: 400 }}>
              {rotatingMessages[msgIndex]}
            </span>
            <button
              onClick={() => setMsgIndex((prev) => (prev + 1) % rotatingMessages.length)}
              className="text-[#A09080] hover:text-[#6A5A4A] transition-colors text-[13px]"
              aria-label="Siguiente mensaje"
            >
              &rsaquo;
            </button>
          </div>

          <div className="flex items-center gap-3 font-[family-name:var(--font-sans)]" style={{ fontWeight: 500 }}>
            <span className="cursor-default">Favoritos &hearts;</span>
            <span className="text-[#C8C0B8]">|</span>
            <span className="cursor-default">Mi cuenta</span>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="h-16 bg-[#FAF8F5] border-b-[0.5px] border-[#E8E0D8] sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Fábrica de Lentes"
              width={180}
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
                className="text-[11px] tracking-[0.07em] font-medium text-[#6A5A4A] hover:text-[#111110] transition-colors uppercase"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Search */}
            <button aria-label="Buscar" className="text-[#6A5A4A] hover:text-[#111110] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px]">
                <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            {/* WhatsApp */}
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#6A5A4A] hover:text-[#25D366] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#111110]" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-[#FAF8F5] border-t-[0.5px] border-[#E8E0D8]">
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[11px] tracking-[0.07em] text-[#6A5A4A] hover:text-[#111110] transition-colors border-b-[0.5px] border-[#E8E0D8] last:border-0 font-medium uppercase"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-[#111110] text-[#F5F0EA] text-center text-[11px] tracking-[0.07em] uppercase font-medium rounded-full hover:bg-[#C8A040] hover:text-[#1A1000] transition-colors"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── PromoBanner ── */}
      <div className="h-10 bg-[#1A1818] flex items-center justify-center text-[11px] tracking-[0.06em]">
        <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-center gap-2">
          <span className="text-[rgba(245,240,234,0.80)]">
            Examen de la vista gratuito &middot; Desde $590 MXN
          </span>
          <a
            href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C8A040] hover:text-[#E8D090] transition-colors font-medium"
          >
            Agendar ahora &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
