import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { LineChart, MousePointerClick, Share2, FileText, Check, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div data-testid="services-page">
      {/* HERO */}
      <section className="relative bg-hero bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 text-center">
          <span className="tag-pill anim-fade-up">Data-Driven Creative Agency</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white anim-fade-up anim-delay-1">
            Strategic <span className="text-cyan-400 glow-cyan">Dominance</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg anim-fade-up anim-delay-2">
            We engineer digital ecosystems where high-technology performance meets avant-garde
            creative artistry to scale your market presence exponentially.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-16 relative z-10">
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Precision SEO */}
          <article className="glass-card rounded-2xl p-7" data-testid="service-seo">
            <div className="flex items-start justify-between">
              <div>
                <LineChart className="text-cyan-400" />
                <h3 className="mt-5 text-3xl font-bold text-white">Precision SEO</h3>
                <p className="mt-3 text-slate-400 text-sm">
                  Move beyond keywords into semantic authority. Our algorithmic approach ensures
                  your brand dominates the high-intent search landscape.
                </p>
              </div>
              <img alt="" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" className="hidden sm:block w-40 h-28 object-cover rounded-lg grayscale" />
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Check size={14} className="text-cyan-400" /> Technical Infrastructure Audits</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-cyan-400" /> AI-Powered Content Clustering</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-cyan-400" /> Hyper-Local Authority Mapping</li>
            </ul>
          </article>

          {/* Elite PPC */}
          <article className="glass-card rounded-2xl p-7" data-testid="service-ppc">
            <MousePointerClick className="text-orange-400" />
            <h3 className="mt-5 text-3xl font-bold text-white">Elite PPC</h3>
            <p className="mt-3 text-slate-400 text-sm">
              Maximizing ROAS through high-frequency optimization and predictive bidding models.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><ArrowRight size={14} className="text-orange-400" /> Multi-Channel Retargeting</li>
              <li className="flex items-center gap-2"><ArrowRight size={14} className="text-orange-400" /> Dynamic Search Ads</li>
              <li className="flex items-center gap-2"><ArrowRight size={14} className="text-orange-400" /> Negative Keyword Laser-Focus</li>
            </ul>
          </article>

          {/* Social Synergy */}
          <article className="glass-card rounded-2xl p-7" data-testid="service-social">
            <Share2 className="text-cyan-400" />
            <h3 className="mt-5 text-3xl font-bold text-white">Social Synergy</h3>
            <p className="mt-3 text-slate-400 text-sm">
              We don't just post content; we engineer viral loops and community prestige.
            </p>
            <img alt="" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80" className="mt-6 w-full h-40 object-cover rounded-lg" />
          </article>

          {/* Avant-Garde Content */}
          <article className="glass-card rounded-2xl p-7" data-testid="service-content">
            <FileText className="text-orange-400" />
            <h3 className="mt-5 text-3xl font-bold text-white">Avant-Garde Content</h3>
            <p className="mt-3 text-slate-400 text-sm">
              Narratives that command attention. From cinematic video to thought-leadership articles,
              we craft the voice of industry leaders.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Video Production", "Visual Design", "Editorial Design"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-orange-400/30 text-orange-300 text-xs">{t}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* PERFORMANCE WORKFLOW */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <Reveal variant="up">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">The Performance Workflow</h2>
            <p className="mt-3 text-slate-400">How we translate data into market dominance.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {[
            { n: "01", t: "Diagnosis", d: "Deep audit of existing assets and competitive landscape mapping." },
            { n: "02", t: "Blueprint", d: "Architecting a bespoke multi-channel strategy for rapid scaling." },
            { n: "03", t: "Execution", d: "Precision implementation with real-time optimization cycles." },
            { n: "04", t: "Optimization", d: "Scaling winners and refining creative for maximum efficiency." },
          ].map((s, i) => (
            <Reveal key={s.n} variant="up" delay={i * 130}>
              <div className="glass-card rounded-2xl p-6 text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-full grid place-items-center bg-cyan-400 text-[#06121a] font-bold float-y">
                  {s.n}
                </div>
                <h4 className="mt-4 text-xl font-semibold text-white">{s.t}</h4>
                <p className="mt-2 text-slate-400 text-sm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-hero-soft py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center glass-card rounded-3xl p-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Ready for <span className="text-orange-400 glow-orange">Ascension?</span></h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Partner with the agency that turns digital noise into a symphony of conversion.
            Let's build your dominance today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-cyan">Contact Amorevia</Link>
            <Link to="/portfolio" className="btn-ghost">View Success Stories</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
