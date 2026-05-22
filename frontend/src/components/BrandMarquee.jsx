const BRANDS = [
  "LUMEN", "VECTOR LABS", "STUDIO FORGE", "PARALLAX",
  "OBJECT&CO", "HALIDE", "LODHA", "AURORA",
  "NEXUS", "CIPHER", "ZENITH", "MERIDIAN",
];

export const BrandMarquee = () => {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-black/40 backdrop-blur-sm overflow-hidden" data-testid="brand-marquee">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-3">
        <div className="text-[11px] tracking-[0.34em] uppercase text-[#8D8D8D]">
          <span className="text-orange-500 mr-3">♦</span>03 · Trusted By
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__track">
          {items.map((b, i) => (
            <span key={i} className="marquee__item">
              <span className="marquee__item-label">{b}</span>
              <span className="marquee__bullet" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
