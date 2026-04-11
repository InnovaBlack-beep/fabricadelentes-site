"use client";

import { useEffect } from "react";
import { captureUTMs } from "@/lib/utm";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";

export function TrackingProvider() {
  useEffect(() => {
    // Capture UTM params on page load
    captureUTMs();

    // Track all WhatsApp link clicks globally via event delegation
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";

      if (href.includes("wa.me") || href.includes("whatsapp")) {
        // GA4 event
        window.gtag?.("event", "whatsapp_click", {
          link_url: href,
          page_location: window.location.pathname,
          cta_text: target.textContent?.trim().slice(0, 50),
        });

        // Meta Pixel
        window.fbq?.("track", "Contact", {
          content_name: "WhatsApp Click",
          content_category: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Meta Pixel init script (only if ID is configured)
  if (!META_PIXEL_ID && !GADS_ID) return null;

  return (
    <>
      {META_PIXEL_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
          }}
        />
      )}
      {META_PIXEL_ID && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
      {GADS_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('config','${GADS_ID}');`,
            }}
          />
        </>
      )}
    </>
  );
}
