import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getAllSlugs } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: `${post.title} | Fábrica de Lentes`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://fabricadelentes.mx/blog/${post.slug}`,
      siteName: "Fábrica de Lentes",
      locale: "es_MX",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://fabricadelentes.mx/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Related posts: exclude current, take 3
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Fábrica de Lentes",
      url: "https://fabricadelentes.mx",
    },
    mainEntityOfPage: `https://fabricadelentes.mx/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://fabricadelentes.mx" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://fabricadelentes.mx/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://fabricadelentes.mx/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="bg-white min-h-screen">
        <div className="max-w-[760px] mx-auto px-5 md:px-10 py-14 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#9CA3AF] mb-8">
            <Link href="/" className="hover:text-[#242424] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#242424] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#242424] truncate max-w-[200px]">{post.title.split(":")[0]}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#242424] leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
              <span>{post.author}</span>
              <span>&middot;</span>
              <time>
                {new Date(post.date).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>&middot;</span>
              <span>{post.readTime} min de lectura</span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#242424] prose-headings:font-bold prose-p:text-[#374151] prose-p:leading-relaxed prose-li:text-[#374151] prose-a:text-[#B5956E] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#242424] prose-table:text-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-[#F9F7F4] text-center">
            <h3 className="text-xl font-bold text-[#242424] mb-2">
              ¿Necesitas un examen de la vista?
            </h3>
            <p className="text-[#6B7280] mb-5">
              En Fábrica de Lentes ofrecemos examen gratis, sin compromiso.
              Lentes listos en 1 hora.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/523314257226?text=Hola%2C%20quiero%20agendar%20un%20examen%20de%20la%20vista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#B5956E] text-white font-semibold text-sm hover:brightness-95 transition-all"
              >
                Agendar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#1A1818] text-white font-semibold text-sm hover:bg-[#333] transition-colors"
              >
                Agendar en línea
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="border-t border-[#E5E7EB]">
            <div className="max-w-[760px] mx-auto px-5 md:px-10 py-14">
              <h2 className="text-2xl font-bold text-[#242424] mb-8">
                También te puede interesar
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block"
                  >
                    <h3 className="text-base font-semibold text-[#242424] group-hover:text-[#B5956E] transition-colors leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] mt-1">
                      {r.readTime} min &middot; {r.author}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
