/**
 * Tracking centralizado — GA4 + Meta Pixel + Google Ads
 *
 * Uso:
 *   import { trackEvent, trackConversion } from "@/lib/analytics";
 *   trackEvent("whatsapp_click", { page: "/", cta: "hero" });
 *   trackConversion("lead");  // dispara Meta + Google Ads conversion
 */

/* ---------- types ---------- */
type EventParams = Record<string, string | number | boolean>;

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/* ---------- GA4 ---------- */
function ga4(event: string, params?: EventParams) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }
}

/* ---------- Meta Pixel ---------- */
function fbq(event: string, params?: EventParams) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("track", event, params);
    } else {
      window.fbq("track", event);
    }
  }
}

/* ---------- Google Ads Conversion ---------- */
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";
const GADS_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || "";

function gadsConversion() {
  if (typeof window !== "undefined" && window.gtag && GADS_ID && GADS_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${GADS_ID}/${GADS_LABEL}`,
    });
  }
}

/* ---------- Public API ---------- */

/**
 * Track a custom event across all platforms
 */
export function trackEvent(event: string, params?: EventParams) {
  ga4(event, params);

  // Map custom events to Meta standard events
  const metaMap: Record<string, string> = {
    whatsapp_click: "Contact",
    form_submit: "Lead",
    product_view: "ViewContent",
    booking_submit: "Schedule",
    blog_read: "ViewContent",
    collection_view: "ViewContent",
  };

  const metaEvent = metaMap[event];
  if (metaEvent) {
    fbq(metaEvent, params);
  }
}

/**
 * Track a conversion (lead, purchase, etc.)
 * Fires on all platforms: GA4 + Meta + Google Ads
 */
export function trackConversion(type: "lead" | "booking" | "whatsapp_lead", params?: EventParams) {
  // GA4
  ga4("conversion", { conversion_type: type, ...params });
  ga4(`generate_lead`, { lead_type: type, ...params });

  // Meta
  fbq("Lead", { lead_type: type, ...params });

  // Google Ads
  gadsConversion();
}

/**
 * Track WhatsApp click with full context
 */
export function trackWhatsApp(cta: string, page: string) {
  trackEvent("whatsapp_click", { cta, page });
  trackConversion("whatsapp_lead", { cta, page });
}

/**
 * Track product view
 */
export function trackProductView(productName: string, category: string, price?: number) {
  trackEvent("product_view", {
    product_name: productName,
    category,
    ...(price !== undefined && { value: price, currency: "MXN" }),
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string, page: string) {
  trackEvent("form_submit", { form_name: formName, page });
  trackConversion("lead", { form_name: formName, page });
}
