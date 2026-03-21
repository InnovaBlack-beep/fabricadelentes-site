"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero.jpg",
    video: "/images/hero-video.mp4",
    tagline: "Laboratorio Propio",
    headline: "Aquí se fabrican\ntus lentes.",
    description: "Óptica con laboratorio propio en Guadalajara.",
    cta: "Agendar Examen Gratis",
    ctaHref:
      "https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista",
    secondary: "Ver Armazones",
    secondaryHref: "/lentes-graduados",
  },
  {
    image: "/images/hero-2.png",
    video: "/images/hero-video-2.mp4",
    tagline: "Nueva Colección",
    headline: "Armazones\ncon Estilo",
    description: "Más de 500 modelos con garantía.",
    cta: "Explorar Colección",
    ctaHref: "/lentes-graduados",
    secondary: "Lentes de Sol",
    secondaryHref: "/lentes-de-sol",
  },
  {
    image: "/images/hero-3.png",
    tagline: "Entrega Express",
    headline: "Lentes listos\nen 1 hora.",
    description: "Fabricamos tus lentes el mismo día.",
    cta: "Cotizar por WhatsApp",
    ctaHref:
      "https://wa.me/523314257226?text=Hola%2C%20quiero%20cotizar%20mis%20lentes",
    secondary: "Conoce el Lab",
    secondaryHref: "/laboratorio",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[320px] sm:h-[380px] md:h-[480px] overflow-hidden bg-dark">
      {/* Background */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {s.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={s.image}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={s.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={s.image}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content - positioned at bottom-left */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-10 flex items-end pb-8 md:pb-12">
        <div className="max-w-xl animate-fade-in-up">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
            {slide.tagline}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-5 whitespace-pre-line">
            {slide.headline}
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-md mb-8 leading-relaxed">
            {slide.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={slide.ctaHref}
              className="inline-flex items-center h-12 px-7 rounded-full bg-accent text-dark text-sm font-semibold uppercase tracking-[0.1em] hover:bg-accent/85 transition-colors"
            >
              {slide.cta}
            </a>
            <a
              href={slide.secondaryHref}
              className="inline-flex items-center h-12 px-7 rounded-full border border-white/30 text-white text-sm font-medium uppercase tracking-[0.1em] hover:bg-white/10 transition-colors"
            >
              {slide.secondary}
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent((c) => (c - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
        aria-label="Anterior"
      >
        &lsaquo;
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
        aria-label="Siguiente"
      >
        &rsaquo;
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="h-[3px] rounded-full transition-all duration-300"
            style={{
              width: i === current ? 32 : 10,
              background: i === current ? "#FFFFFF" : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
