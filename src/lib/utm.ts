/**
 * UTM Tracking — captura, persiste y adjunta UTMs a leads
 *
 * Uso:
 *   import { captureUTMs, getUTMs } from "@/lib/utm";
 *   captureUTMs();           // llamar en layout/mount
 *   const utms = getUTMs();  // adjuntar al payload del lead
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "fdl_utm";

/**
 * Capture UTM params from current URL and save to sessionStorage.
 * Only overwrites if new UTMs are present (preserves first-touch attribution).
 */
export function captureUTMs(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utms: UTMParams = {};
  let hasUTM = false;

  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) {
      utms[key] = val;
      hasUTM = true;
    }
  }

  if (hasUTM) {
    utms.landing_page = window.location.pathname;
    utms.referrer = document.referrer || undefined;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
  } else if (!sessionStorage.getItem(STORAGE_KEY)) {
    // No UTMs and no previous data — store organic referrer
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        utm_source: "organic",
        utm_medium: "none",
        landing_page: window.location.pathname,
        referrer: document.referrer || undefined,
      })
    );
  }
}

/**
 * Get stored UTM params (to attach to lead payloads)
 */
export function getUTMs(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Build a lead metadata object with UTMs included
 */
export function buildLeadMetadata(extra: Record<string, string | number | boolean> = {}) {
  return {
    ...getUTMs(),
    ...extra,
    timestamp: new Date().toISOString(),
  };
}
