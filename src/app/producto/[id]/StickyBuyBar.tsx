"use client";

import { useState, useEffect } from "react";

type StickyBuyBarProps = {
  model: string;
  price: string;
  whatsappUrl: string;
};

export function StickyBuyBar({ model, price, whatsappUrl }: StickyBuyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ctaEl = document.getElementById("product-cta");
      if (!ctaEl) return;
      const rect = ctaEl.getBoundingClientRect();
      setVisible(rect.bottom < 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E5E7EB] px-4 py-3 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3 max-w-[640px] mx-auto">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#242424] truncate">{model}</p>
          <p className="text-sm font-bold text-[#242424]">{price} <span className="text-xs font-normal text-[#9CA3AF]">MXN</span></p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center justify-center h-10 px-6 rounded-full bg-[#B5956E] text-[#242424] text-sm font-semibold hover:brightness-95 transition-all"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
