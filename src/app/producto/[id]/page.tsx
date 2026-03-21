import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, getProductById, getBadgeColors } from "@/lib/products";
import { ProductGallery } from "./ProductGallery";
import { StickyBuyBar } from "./StickyBuyBar";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Producto no encontrado | Fábrica de Lentes" };
  }

  const title = `${product.model} ${product.brand} | Fábrica de Lentes`;
  const description = product.description.slice(0, 155);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: product.images[0]
        ? [{ url: product.images[0], width: 800, height: 800, alt: `${product.brand} ${product.model}` }]
        : [],
      locale: "es_MX",
      siteName: "Fábrica de Lentes",
    },
    other: {
      "og:type": "product",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.images[0] ? [product.images[0]] : [],
    },
    alternates: {
      canonical: `https://fabricadelentes.mx/producto/${product.id}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const categoryMap: Record<string, { label: string; href: string }> = {
    Graduados: { label: "Graduados", href: "/lentes-graduados" },
    Sol: { label: "Lentes de Sol", href: "/lentes-de-sol" },
    Contacto: { label: "Lentes de Contacto", href: "/lentes-de-contacto" },
  };

  const cat = categoryMap[product.category] ?? {
    label: product.category,
    href: "/",
  };

  // Related products: same category, exclude current, take 4
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://fabricadelentes.mx",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cat.label,
        item: `https://fabricadelentes.mx${cat.href}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${product.brand} ${product.model}`,
        item: `https://fabricadelentes.mx/producto/${product.id}`,
      },
    ],
  };

  const whatsappMsg = encodeURIComponent(
    `Hola, me interesa el modelo ${product.model} de ${product.brand} (${product.price}). ¿Tienen disponibilidad?`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.brand} ${product.model}`,
    description: product.description,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Fábrica de Lentes",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-8 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-8">
            <Link href="/" className="hover:text-[#242424] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href={cat.href} className="hover:text-[#242424] transition-colors">
              {cat.label}
            </Link>
            <span>/</span>
            <span className="text-[#242424]">{product.brand}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* LEFT — Gallery */}
            <div className="w-full lg:w-[60%] p-4 md:p-8">
              <ProductGallery images={product.images} alt={`${product.brand} ${product.model}`} />
            </div>

            {/* RIGHT — Details */}
            <div className="w-full lg:w-[40%]">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#9CA3AF] font-medium mb-2">
                {product.brand}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-[#242424] mb-4">
                {product.model}
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-[#242424] mb-6">
                {product.price}
                <span className="text-sm font-normal text-[#9CA3AF] ml-2">
                  MXN
                </span>
              </p>

              <div className="border-t border-[#E5E7EB] mb-6" />

              <p className="text-sm leading-relaxed text-[#6B7280] mb-8">
                {product.description}
              </p>

              {/* Incluye */}
              <div className="mb-8 rounded-lg bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#242424] mb-3">
                  Incluye
                </p>
                <ul className="space-y-2">
                  {[
                    "Examen de la vista gratis",
                    "Garantía de 1 año",
                    "Estuche y paño incluidos",
                    "Ajuste personalizado",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-[#374151]"
                    >
                      <svg
                        className="w-4 h-4 text-[#31E7AB] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div id="product-cta" className="flex flex-col gap-3 mb-6">
                <a
                  href={`https://wa.me/523314257226?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-12 rounded-full bg-[#F9DC4B] text-[#242424] text-sm font-semibold uppercase tracking-[0.1em] hover:brightness-95 transition-all"
                >
                  Comprar por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="flex items-center justify-center h-12 rounded-full border border-[#E5E7EB] text-[#242424] text-sm font-medium uppercase tracking-[0.1em] hover:border-[#242424] transition-colors"
                >
                  Agendar Examen Gratis
                </Link>
              </div>

              <p className="text-xs text-[#9CA3AF] text-center">
                Envío a toda la República Mexicana &middot; Lentes listos en 1
                hora
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#E5E7EB]">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-14 md:py-20">
              <h2 className="text-xl md:text-2xl font-bold text-fg mb-8">
                También te puede gustar
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                {relatedProducts.map((rp) => {
                  const badgeColors = getBadgeColors(rp.badge);
                  const hasSecondImage = rp.images.length >= 2;
                  return (
                    <Link
                      key={rp.id}
                      href={`/producto/${rp.id}`}
                      className="group block bg-white hover:opacity-90 transition-opacity"
                    >
                      <div className="relative aspect-square bg-white overflow-hidden">
                        <Image
                          src={rp.images[0]}
                          alt={`${rp.brand} ${rp.model}`}
                          fill
                          className={`object-contain p-6 transition-all duration-500 ${
                            hasSecondImage ? "group-hover:opacity-0" : "group-hover:scale-105"
                          }`}
                          unoptimized
                        />
                        {hasSecondImage && (
                          <Image
                            src={rp.images[1]}
                            alt={`${rp.brand} ${rp.model} - vista 2`}
                            fill
                            className="object-contain p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                            unoptimized
                          />
                        )}
                        <span
                          className={`absolute top-3 left-3 ${badgeColors.bg} ${badgeColors.text} text-[10px] font-semibold px-2.5 py-1 rounded-full border border-border/30`}
                        >
                          {rp.badge}
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="text-[10px] uppercase tracking-widest text-muted">
                          {rp.brand}
                        </p>
                        <p className="text-sm font-semibold text-fg truncate">
                          {rp.model}
                        </p>
                        <p className="text-sm font-bold text-fg mt-1">
                          {rp.price}
                          <span className="text-[10px] font-normal text-muted ml-1">
                            MXN
                          </span>
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Sticky mobile buy bar */}
      <StickyBuyBar
        model={product.model}
        price={product.price}
        whatsappUrl={`https://wa.me/523314257226?text=${whatsappMsg}`}
      />
    </>
  );
}
