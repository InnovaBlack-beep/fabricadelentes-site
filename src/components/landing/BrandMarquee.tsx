const brands = [
  "Ray-Ban",
  "Oakley",
  "Vogue Eyewear",
  "Arnette",
  "Guess",
  "Polo Ralph Lauren",
  "Michael Kors",
  "Coach",
  "Frida Kahlo",
  "Brizzant",
  "Nobleman",
  "Massimo",
];

export function BrandMarquee() {
  return (
    <section className="py-10 border-y border-border-light bg-warm-cream overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="mx-8 md:mx-12 text-lg md:text-xl font-serif font-semibold text-warm-stone/60"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
