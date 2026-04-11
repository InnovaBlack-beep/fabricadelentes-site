"use client";

import { useState, useEffect } from "react";
import { trackWhatsApp, trackProductView } from "@/lib/analytics";
import { buildLeadMetadata } from "@/lib/utm";

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL || "";

type StickyBuyBarProps = {
  model: string;
  price: string;
  whatsappUrl: string;
};

export function StickyBuyBar({ model, price, whatsappUrl }: StickyBuyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Track product view on mount
    trackProductView(model, "producto", parseFloat(price.replace(/[^0-9.]/g, "")));

    const handleScroll = () => {
      const ctaEl = document.getElementById("product-cta");
      if (!ctaEl) return;
      const rect = ctaEl.getBoundingClientRect();
      setVisible(rect.bottom < 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [model, price]);

  const handleClick = () => {
    trackWhatsApp("product_buy", window.location.pathname);
    if (BACKOFFICE_URL) {
      fetch(`${BACKOFFICE_URL}/api/public/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "producto",
          messages: [`Interesado en: ${model} (${price})`],
          metadata: buildLeadMetadata({ event: "product_buy_click", product: model, price, page: window.location.pathname }),
        }),
      }).catch(() => {});
    }
  };

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
          onClick={handleClick}
          className="flex-shrink-0 flex items-center justify-center h-10 px-6 rounded-full bg-[#B5956E] text-[#242424] text-sm font-semibold hover:brightness-95 transition-all"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}
