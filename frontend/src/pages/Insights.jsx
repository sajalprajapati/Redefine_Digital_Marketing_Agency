import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const INSIGHTS = [
  { title: "The Death of Generic Branding", date: "Dec 2025", read: "6 min", excerpt: "Why category-defining brands abandon the 'safe' playbook — and what that means for your launch strategy." },
  { title: "Engineering ROAS in 2026", date: "Nov 2025", read: "8 min", excerpt: "A practical framework for compounding paid-channel returns when CPM inflation refuses to relent." },
  { title: "Editorial Design as a Growth Lever", date: "Oct 2025", read: "5 min", excerpt: "How treating your content like a magazine — not a feed — re-engineers attention and trust." },
];

const Insights = () => (
  <div data-testid="insights-page">
    <section className="bg-hero bg-grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-24 text-center">
        <span className="tag-pill">Insights</span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
          The Editorial of <span className="text-cyan-400 glow-cyan">Excellence</span>
        </h1>
        <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
          Long-form thinking on strategy, design, and the future of digital prestige.
        </p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INSIGHTS.map((i, idx) => (
          <article key={i.title} data-testid={`insight-${idx}`} className="glass-card rounded-2xl p-7 hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Calendar size={12} /> {i.date} · {i.read}
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">{i.title}</h3>
            <p className="mt-3 text-slate-400 text-sm">{i.excerpt}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-cyan-400 text-sm hover:gap-3 transition-all">
              Continue Reading <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Insights;
