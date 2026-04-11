import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { products } from "@/lib/products";

const BASE = "https://fabricadelentes.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/lentes-graduados`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/lentes-de-sol`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/lentes-de-contacto`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/laboratorio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/empresas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/promo/examen-gratis`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/aviso-de-privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/politica-de-garantia`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Products
  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/producto/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...productPages];
}
