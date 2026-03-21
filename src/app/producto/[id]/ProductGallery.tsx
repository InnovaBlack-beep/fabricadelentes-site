"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const containerRef = useRef<HTMLDivElement>(null);

  const activeImage = images[activeIndex] ?? images[0];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  }, []);

  if (!activeImage) return null;

  return (
    <div>
      {/* Main image with zoom */}
      <div
        ref={containerRef}
        className="relative aspect-square bg-white border border-[#F3F4F6] rounded-lg overflow-hidden mb-3 cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={activeImage}
          alt={alt}
          fill
          className="object-contain p-6 transition-transform duration-300 ease-out"
          style={{
            transform: isZoomed ? "scale(2)" : "scale(1)",
            transformOrigin,
          }}
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
          unoptimized
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveIndex(i)}
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-colors bg-white"
              style={{
                borderColor: i === activeIndex ? "#242424" : "#F3F4F6",
              }}
            >
              <Image
                src={img}
                alt={`${alt} - vista ${i + 1}`}
                fill
                className="object-contain p-1"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
