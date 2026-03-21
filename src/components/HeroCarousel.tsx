"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    video: "/images/hero-video.mp4",
    image: "/images/hero-1.png",
    alt: "Laboratorio óptico Fábrica de Lentes Guadalajara",
    tagline: "Laboratorio Propio",
    headline: "Aquí se fabrican\ntus lentes.",
    description:
      "Óptica con laboratorio propio en Guadalajara. Lentes listos en 1 hora. Examen de la vista gratis.",
    cta: "Agendar Examen Gratis",
    ctaSecondary: "Ver Armazones",
    align: "left" as const,
  },
  {
    video: "/images/hero-video-2.mp4",
    image: "/images/hero-2.png",
    alt: "Armazones de moda en Fábrica de Lentes",
    tagline: "Nueva Colección",
    headline: "Armazones\ncon Estilo",
    description:
      "Encuentra el armazón perfecto. Más de 500 modelos desde $590 MXN con garantía.",
    cta: "Explorar Colección",
    ctaSecondary: "Lentes de Sol",
    align: "right" as const,
  },
  {
    image: "/images/hero-3.png",
    alt: "Entrega express de lentes en 1 hora",
    tagline: "Entrega Express",
    headline: "Lentes listos\nen 1 hora.",
    description:
      "Fabricamos tus lentes el mismo día. Sin esperas, sin intermediarios.",
    cta: "Cotizar por WhatsApp",
    ctaSecondary: "Conoce el Lab",
    align: "left" as const,
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden bg-warm-graphite">
      <h1 className="sr-only">Fábrica de Lentes — Óptica con Laboratorio Propio en Guadalajara</h1>
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {"video" in s && s.video ? (
            <video
              src={s.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={s.image}
            />
          ) : (
            <Image
              src={s.image}
              alt={s.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
          )}
          <div className="absolute inset-0 bg-warm-graphite/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center">
        <div
          className={`max-w-xl ${
            slide.align === "right" ? "ml-auto text-right" : ""
          }`}
        >
          <span
            className="inline-block text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--color-gold)" }}
          >
            {slide.tagline}
          </span>

          <p
            role="heading"
            aria-level={2}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line mb-5"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-on-dark)",
            }}
          >
            {slide.headline}
          </p>

          <p
            className="text-lg md:text-xl mb-8 max-w-md leading-relaxed"
            style={{ color: "rgba(245,240,234,0.85)" }}
          >
            {slide.description}
          </p>

          <div
            className={`flex gap-4 flex-wrap ${
              slide.align === "right" ? "justify-end" : ""
            }`}
          >
            <a
              href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold px-8 py-3.5 text-sm tracking-wide transition-colors duration-300"
              style={{
                background: "var(--color-gold)",
                color: "var(--color-warm-graphite)",
              }}
            >
              {slide.cta}
            </a>
            <button
              className="font-semibold px-8 py-3.5 text-sm tracking-wide transition-colors duration-300"
              style={{
                border: "2px solid var(--color-text-on-dark)",
                color: "var(--color-text-on-dark)",
                background: "transparent",
              }}
            >
              {slide.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 size-12 flex items-center justify-center rounded-full transition-colors"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(4px)",
          color: "var(--color-text-on-dark)",
        }}
        aria-label="Anterior"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 size-12 flex items-center justify-center rounded-full transition-colors"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(4px)",
          color: "var(--color-text-on-dark)",
        }}
        aria-label="Siguiente"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
