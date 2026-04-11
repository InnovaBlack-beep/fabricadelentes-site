import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Consejos de Salud Visual | Fábrica de Lentes",
  description:
    "Artículos sobre salud visual, lentes, armazones y cuidado de los ojos. Tips de optometría, tendencias en eyewear y guías prácticas para Guadalajara.",
  alternates: { canonical: "https://fabricadelentes.mx/blog" },
  openGraph: {
    title: "Blog — Fábrica de Lentes",
    description:
      "Consejos de salud visual, guías de lentes y armazones, y todo lo que necesitas saber sobre el cuidado de tu visión.",
    url: "https://fabricadelentes.mx/blog",
    siteName: "Fábrica de Lentes",
    locale: "es_MX",
    type: "website",
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-[860px] mx-auto px-5 md:px-10 py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#242424] mb-3">
          Blog
        </h1>
        <p className="text-lg text-[#9CA3AF] mb-12">
          Consejos de salud visual, guías y todo lo que necesitas saber sobre
          tus lentes.
        </p>

        <div className="space-y-10">
          {sorted.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <time className="text-sm text-[#9CA3AF]">
                  {new Date(post.date).toLocaleDateString("es-MX", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="text-xl md:text-2xl font-bold text-[#242424] mt-1 group-hover:text-[#B5956E] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B7280] mt-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 mt-3 text-sm text-[#9CA3AF]">
                  <span>{post.author}</span>
                  <span>&middot;</span>
                  <span>{post.readTime} min de lectura</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
