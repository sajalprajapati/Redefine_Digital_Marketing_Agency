import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Briefcase, ArrowRight } from "lucide-react";

const ALL_PROJECTS = [
  { tag: "LUXURY", title: "Aurelius Chronos", desc: "Global Rebranding & E-commerce Strategy", metric: "+340%", metricLabel: "CONVERSION", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80", cat: "Luxury" },
  { tag: "FINTECH", title: "Vortex Capital", desc: "Acquisition Funnel & Brand Identity", metric: "2.4M", metricLabel: "USER ACQUISITION", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80", cat: "Fintech" },
  { tag: "SAAS", title: "Nexus Analytics", desc: "Performance Marketing & Web Architecture", metric: "+200% ROI", metricLabel: "GROWTH", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80", cat: "SaaS" },
  { tag: "STRATEGY", title: "Prime Meridian", desc: "Investor Relations & Series B Positioning", metric: "$12M RAISED", metricLabel: "FUNDING", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80", cat: "Fintech" },
];

const FILTERS = ["All Work", "Luxury", "Fintech", "SaaS"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All Work");
  const items = useMemo(() => filter === "All Work" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.cat === filter), [filter]);

  return (
    <div data-testid="portfolio-page">
      {/* HEADER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
          <span className="tag-pill"><Briefcase size={14} /> Portfolio</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white">
            The Evidence of <span className="text-cyan-400 glow-cyan">Impact</span>
          </h1>
          <p className="mt-5 text-slate-400 max-w-2xl">
            We merge data-driven strategies with avant-garde creativity to engineer digital
            experiences that redefine markets and shatter benchmarks.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              data-testid={`filter-${f.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                filter === f
                  ? "bg-cyan-400 text-[#06121a] border-cyan-400 font-semibold"
                  : "border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={i * 120}
              className={i === 0 ? "lg:col-span-2" : ""}>
              <article
                data-testid={`project-${i}`}
                className="relative rounded-2xl overflow-hidden border border-white/5 group h-full"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className={`w-full ${i === 0 ? "h-[360px]" : "h-[280px]"} object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                  <div>
                    <div className="text-xs tracking-widest text-orange-400">{p.tag}</div>
                    <h3 className="text-2xl font-bold text-white mt-1">{p.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{p.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{p.metric}</div>
                    <div className="text-[10px] tracking-widest text-slate-400">{p.metricLabel}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-20">
        <div className="glass-card rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs tracking-widest text-slate-400">— FEATURED CASE STUDY</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">The Future of Digital Banking</h2>
            <p className="mt-4 text-slate-400">
              How we transformed a legacy financial institution into a digital-first powerhouse,
              resulting in record-breaking user engagement and complete market repositioning.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 max-w-sm">
              <div>
                <div className="text-3xl font-bold text-white">1.2M</div>
                <div className="text-xs text-slate-500">Active Mobile Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-xs text-slate-500">Positive Sentiment</div>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 text-cyan-400 hover:gap-3 transition-all">
              Read Full Study <ArrowRight size={14} />
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
            alt="Featured case"
            className="rounded-2xl border border-cyan-400/30 w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-20">
        <div className="glass-card rounded-3xl p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Scale Your Impact?</h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Join the elite companies leveraging our data-driven creative strategies to dominate their industry.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-cyan">Start Your Project</Link>
            <Link to="/services" className="btn-ghost">View Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
