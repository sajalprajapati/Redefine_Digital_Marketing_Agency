import React from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { Reveal } from "../components/Reveal";
import { ArrowRight, LineChart, MousePointerClick, Share2, FileText, Quote } from "lucide-react";

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative bg-hero bg-grain overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-40 text-center">
          <div className="anim-fade-up">
            <span className="tag-pill">Data-Driven Creative Agency</span>
          </div>
          <h1
            data-testid="hero-title"
            className="anim-fade-up anim-delay-1 mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white"
          >
            Next-Gen <span className="text-cyan-400 glow-cyan">Marketing</span>
          </h1>
          <p className="anim-fade-up anim-delay-2 mt-6 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            We architect digital ecosystems where high-performance technology meets avant-garde
            creativity. Engineering measurable dominance for ambitious brands.
          </p>
          <div className="anim-fade-up anim-delay-3 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" data-testid="hero-get-started" className="btn-cyan inline-flex items-center gap-2">
              Get Started <ArrowRight size={16} />
            </Link>
            <Link to="/services" data-testid="hero-explore" className="btn-ghost">
              Explore Services
            </Link>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#050608]" />
      </section>

      {/* PRECISION SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal variant="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Precision Services</h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-base">
              A full-stack growth arsenal engineered for category-leading brands.
            </p>
          </div>
        </Reveal>
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <LineChart size={22} />, title: "SEO Architecture", body: "Semantic authority and algorithmic dominance for high-intent organic capture.", color: "text-cyan-400" },
            { icon: <MousePointerClick size={22} />, title: "Precision PPC", body: "Predictive bidding and multi-channel retargeting that compounds ROAS.", color: "text-orange-400" },
            { icon: <Share2 size={22} />, title: "Social Ecosystems", body: "Viral loops and community prestige — not just content, but cultural impact.", color: "text-cyan-400" },
            { icon: <FileText size={22} />, title: "Neural Content", body: "AI-augmented editorial, cinematic video and thought leadership at scale.", color: "text-orange-400" },
          ].map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 120}>
              <article
                data-testid={`home-service-${i}`}
                className="glass-card rounded-2xl p-7 group cursor-pointer h-full"
              >
                <div className={`w-11 h-11 rounded-xl grid place-items-center bg-white/5 border border-white/10 ${s.color}`}>
                  {s.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{s.body}</p>
                <Link to="/services" className="inline-flex items-center gap-2 mt-5 text-cyan-400 text-sm hover:gap-3 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THE WORK */}
      <section className="section-deep py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal variant="up">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold text-white">The Work</h2>
                <p className="mt-3 text-slate-400 max-w-xl">Selected case studies from category-defining brands.</p>
              </div>
              <Link to="/portfolio" className="btn-ghost text-sm">View Full Portfolio</Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: "LUXURY", title: "Project Zenith", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80" },
              { tag: "FINTECH", title: "Cipher Global", img: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?w=800&q=80" },
              { tag: "SAAS", title: "Vector Labs", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
            ].map((p, i) => (
              <Reveal key={p.title} variant="up" delay={i * 140}>
                <article data-testid={`home-work-${i}`} className="group relative rounded-2xl overflow-hidden border border-white/5">
                  <img src={p.img} alt={p.title} className="h-64 w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-xs text-orange-400 tracking-widest">{p.tag}</div>
                    <h3 className="text-xl font-bold text-white mt-1">{p.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal variant="up">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-12">Client Perspectives</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Adrian K.", role: "CMO, Aurora Watches", text: "Amorevia didn't just rebrand us — they engineered a 340% lift in conversion within two quarters. Surgical precision.", initial: "A" },
            { name: "Mei Tanaka", role: "Founder, Vortex Capital", text: "From positioning to performance, the team operates with the rigor of a top-tier consultancy.", initial: "M" },
            { name: "Daniel R.", role: "VP Growth, Nexus", text: "A rare blend of design taste and ruthless execution. They are now our default growth partner.", initial: "D" },
          ].map((t, i) => (
            <Reveal key={t.name} variant="up" delay={i * 140}>
              <blockquote data-testid={`testimonial-${i}`} className="glass-card rounded-2xl p-7 h-full">
                <Quote className="text-cyan-400" size={22} />
                <p className="mt-4 text-slate-200 text-sm leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-orange-500 grid place-items-center text-white font-bold">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="relative bg-hero-soft py-24" id="contact">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <Reveal variant="blur">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Start the <span className="text-orange-400 glow-orange">Ascent</span></h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto">
              Tell us about your ambitions. We respond within one business day.
            </p>
          </Reveal>
          <Reveal variant="scale" delay={160}>
            <div className="mt-10 flex justify-center">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
