import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import {
  Megaphone, Search, Share2, PenTool, Mail, BarChart3,
  Video, Globe, Check, ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Megaphone size={22} />,
    title: "Performance Marketing",
    body: "Meta, Google and YouTube Ads engineered for measurable ROAS. We scale spend predictively, with creative-led campaign architecture.",
    points: ["Meta & Google Ads", "Predictive bidding", "Multi-channel retargeting"],
    accent: "text-cyan-400",
  },
  {
    icon: <Search size={22} />,
    title: "SEO & Content Strategy",
    body: "Topical authority, technical SEO and editorial that ranks and converts. We turn search into a compounding owned channel.",
    points: ["Technical SEO audits", "Content clusters", "Local & E-E-A-T"],
    accent: "text-orange-400",
  },
  {
    icon: <Share2 size={22} />,
    title: "Social Media Management",
    body: "Daily content, community engagement and platform strategy across Instagram, LinkedIn, X, TikTok and YouTube Shorts.",
    points: ["Editorial calendar", "Community ops", "Influencer collabs"],
    accent: "text-cyan-400",
  },
  {
    icon: <PenTool size={22} />,
    title: "Branding & Creative Direction",
    body: "Identity systems, ad creatives, packaging and brand guidelines. Brand-led visuals that stop the scroll and build trust.",
    points: ["Brand identity", "Ad creatives", "Visual systems"],
    accent: "text-orange-400",
  },
  {
    icon: <Video size={22} />,
    title: "Video & Reels Production",
    body: "Short-form reels, long-form YouTube, ad films and motion graphics. Story-led production at performance-marketing speed.",
    points: ["UGC & Reels", "Ad films", "Motion graphics"],
    accent: "text-cyan-400",
  },
  {
    icon: <Mail size={22} />,
    title: "Email & Lifecycle Marketing",
    body: "Lead-nurture, welcome flows and retention campaigns via Klaviyo, Mailchimp and HubSpot. Squeeze more revenue from existing customers.",
    points: ["Klaviyo / Mailchimp", "Lifecycle automations", "Retention strategy"],
    accent: "text-orange-400",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Analytics & CRO",
    body: "GA4, Mixpanel, server-side tracking and on-page experiments. Decisions backed by data, not opinions.",
    points: ["GA4 + Server-side", "A/B testing", "Attribution"],
    accent: "text-cyan-400",
  },
  {
    icon: <Globe size={22} />,
    title: "Web Design & Development",
    body: "Conversion-focused landing pages and full marketing websites. Built fast, indexed clean, and ready to scale.",
    points: ["Landing pages", "Webflow / Next.js", "Core Web Vitals"],
    accent: "text-orange-400",
  },
];

const Services = () => {
  return (
    <div data-testid="services-page">
      {/* HERO */}
      <section className="relative bg-hero bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 text-center">
          <Reveal variant="up">
            <span className="tag-pill">Services</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white">
              Growth, <span className="text-cyan-400 glow-cyan">Engineered.</span>
            </h1>
            <p className="mt-6 text-[#BFC3C7] max-w-2xl mx-auto text-base sm:text-lg">
              A full-stack digital marketing partner — from performance media to brand storytelling,
              SEO to creative production. One team. One growth engine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-16 relative z-10">
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 90}>
              <article
                data-testid={`service-${i}`}
                className="glass-card rounded-2xl p-7 h-full group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl grid place-items-center bg-white/5 border border-[#3A3A3A] ${s.accent} group-hover:scale-110 transition-transform duration-500`}>
                  {s.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-[#BFC3C7] text-sm leading-relaxed">{s.body}</p>
                <ul className="mt-5 space-y-2 text-sm text-[#F4F4F4]">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Check size={14} className={s.accent} /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PERFORMANCE WORKFLOW */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <Reveal variant="up">
          <div className="text-center">
            <span className="tag-pill">How We Work</span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold text-white">The Growth Workflow</h2>
            <p className="mt-3 text-[#BFC3C7]">From kick-off to scale in four disciplined stages.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {[
            { n: "01", t: "Discover", d: "Brand, customer & competitor audits. We map your market and the levers that move it." },
            { n: "02", t: "Blueprint", d: "A bespoke channel mix, creative brief and KPI ladder for the next 90 days." },
            { n: "03", t: "Execute", d: "Daily campaign management, creative production and optimization sprints." },
            { n: "04", t: "Scale", d: "Doubling down on winners, retiring losers, and compounding ROAS month over month." },
          ].map((s, i) => (
            <Reveal key={s.n} variant="up" delay={i * 130}>
              <div className="glass-card rounded-2xl p-6 text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-full grid place-items-center bg-cyan-400 text-[#06121a] font-bold float-y">
                  {s.n}
                </div>
                <h4 className="mt-4 text-xl font-semibold text-white">{s.t}</h4>
                <p className="mt-2 text-[#BFC3C7] text-sm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-hero-soft py-24">
        <Reveal variant="scale">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center glass-card rounded-3xl p-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Ready to <span className="text-orange-400 glow-orange">Grow?</span></h2>
            <p className="mt-3 text-[#BFC3C7] max-w-xl mx-auto">
              Book a 30-min strategy call and we'll show you exactly where the growth is hiding in your funnel.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-cyan">Book a Strategy Call</Link>
              <Link to="/portfolio" className="btn-ghost">See Our Work</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Services;
