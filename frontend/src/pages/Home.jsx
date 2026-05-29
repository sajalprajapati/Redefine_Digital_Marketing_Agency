import React from "react";
import { Link } from "react-router-dom";
import { ContactSection } from "../components/ContactSection";
import { BrandMarquee } from "../components/BrandMarquee";
import { ClientLogoWall } from "../components/ClientLogoWall";
import { Reveal } from "../components/Reveal";
import {
  ArrowRight, Search, Megaphone, Share2, PenTool, BarChart3,
  Mail, Quote
} from "lucide-react";

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
            Marketing that <span className="text-cyan-400 glow-cyan">Converts.</span>
          </h1>
          <p className="anim-fade-up anim-delay-2 mt-6 text-[#BFC3C7] max-w-2xl mx-auto text-base sm:text-lg">
            A digital marketing agency for ambitious brands. We blend performance media, sharp
            creative and conversion-focused strategy to grow your revenue — not your follower count.
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

      {/* QUICK STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-4 mb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: "120+", l: "Brands Scaled" },
            { v: "$8M+", l: "Ad Spend Managed" },
            { v: "4.2x", l: "Average ROAS" },
            { v: "12+", l: "Industries Served" },
          ].map((s, i) => (
            <Reveal key={s.l} variant="up" delay={i * 100}>
              <div className="glass-card rounded-2xl p-5 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.v}</div>
                <div className="text-[10px] tracking-[0.3em] text-[#8D8D8D] mt-1 uppercase">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRECISION SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal variant="up">
          <div className="text-center mb-14">
            <span className="tag-pill">What We Do</span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold text-white">Full-Stack Digital Marketing</h2>
            <p className="mt-3 text-[#BFC3C7] max-w-2xl mx-auto text-base">
              Performance-driven campaigns, brand storytelling and conversion engineering — engineered
              to grow ambitious businesses.
            </p>
          </div>
        </Reveal>
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Megaphone size={22} />,
              title: "Performance Marketing",
              body: "Meta, Google & YouTube Ads engineered for measurable ROAS. We scale spend with predictive bidding and creative-led campaign architecture.",
              tags: ["Meta Ads", "Google Ads", "YouTube Ads"],
              color: "text-cyan-400",
            },
            {
              icon: <Search size={22} />,
              title: "SEO & Content Strategy",
              body: "Topical authority, technical SEO and content that ranks. We turn search demand into a compounding owned channel.",
              tags: ["Technical SEO", "Content", "Local SEO"],
              color: "text-orange-400",
            },
            {
              icon: <Share2 size={22} />,
              title: "Social Media Management",
              body: "Daily content, community engagement and platform strategy across Instagram, LinkedIn, X and TikTok.",
              tags: ["Instagram", "LinkedIn", "TikTok"],
              color: "text-cyan-400",
            },
            {
              icon: <PenTool size={22} />,
              title: "Branding & Creative",
              body: "Identity systems, ad creatives, reels, motion graphics and packaging. Brand-led visuals that stop the scroll.",
              tags: ["Identity", "Reels", "Motion"],
              color: "text-orange-400",
            },
            {
              icon: <Mail size={22} />,
              title: "Email & CRM Funnels",
              body: "Lifecycle email, lead nurturing and retention sequences. Turn first-time buyers into long-term revenue.",
              tags: ["Klaviyo", "Mailchimp", "HubSpot"],
              color: "text-cyan-400",
            },
            {
              icon: <BarChart3 size={22} />,
              title: "Analytics & CRO",
              body: "GA4, Mixpanel, server-side tracking and on-page experiments. Decisions backed by data, not guesses.",
              tags: ["GA4", "A/B Tests", "Attribution"],
              color: "text-orange-400",
            },
          ].map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 110}>
              <article
                data-testid={`home-service-${i}`}
                className="glass-card rounded-2xl p-7 group cursor-pointer h-full"
              >
                <div className={`w-12 h-12 rounded-xl grid place-items-center bg-white/5 border border-[#3A3A3A] ${s.color} group-hover:scale-110 transition-transform duration-500`}>
                  {s.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-[#BFC3C7] text-sm leading-relaxed">{s.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] tracking-wider px-2.5 py-1 rounded-full border border-[#3A3A3A] text-[#8D8D8D] uppercase">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/services" className="inline-flex items-center gap-2 mt-6 text-cyan-400 text-sm hover:gap-3 transition-all">
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

      {/* TRUSTED BY — horizontal brand marquee */}
      <BrandMarquee />
      <ClientLogoWall />

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal variant="up">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-12">Client Perspectives</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Adrian K.", role: "CMO, Aurora Watches", text: "Amorevia rebuilt our paid social from the ground up and 3x'd our ROAS in 90 days. Creative + numbers in equal measure.", initial: "A" },
            { name: "Mei Tanaka", role: "Founder, Vortex Capital", text: "Our cost-per-lead dropped 62% while volume doubled. They actually understand fintech audiences and the compliance landscape.", initial: "M" },
            { name: "Daniel R.", role: "VP Growth, Nexus SaaS", text: "From SEO to lifecycle email, they own our full-funnel. Best agency partnership we've had in 8 years.", initial: "D" },
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

      {/* GET A SERVICE / CONTACT */}
      <ContactSection sectionNo="05" />
    </div>
  );
};

export default Home;
