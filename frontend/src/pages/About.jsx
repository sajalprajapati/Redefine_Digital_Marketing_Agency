import React from "react";
import { Link } from "react-router-dom";
import { Target, Sparkles, Rocket, Globe, BookOpen, Palette } from "lucide-react";

const About = () => {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="relative bg-hero bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 text-center">
          <span className="tag-pill">About the Agency</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white">
            The Architects of <span className="text-cyan-400 glow-cyan">Digital Prestige</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            We don't just build websites or run ads; we engineer digital ecosystems that command
            authority and drive unparalleled growth through the fusion of data and high-art creativity.
          </p>
        </div>
      </section>

      {/* OUR ETHOS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Ethos</h2>
            <p className="mt-4 text-slate-400">
              The principles that guide our every pixel and line of code. We operate at the
              intersection of logic and imagination.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-7">
            <div className="w-11 h-11 rounded-xl grid place-items-center bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
              <Target size={20} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">Hyper-Precision</h3>
            <p className="mt-3 text-slate-400 text-sm">
              Every decision is backed by granular data analysis, ensuring your digital presence
              performs with mathematical certainty.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-7">
            <div className="w-11 h-11 rounded-xl grid place-items-center bg-orange-500/10 border border-orange-400/30 text-orange-300">
              <Sparkles size={20} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">Avant-Garde Art</h3>
            <p className="mt-3 text-slate-400 text-sm">
              Functional utility meets aesthetic mastery. We create interfaces that evoke
              emotion and represent the pinnacle of luxury design.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/5 bg-[#080a0d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { v: "12+", l: "Years of Prestige" },
            { v: "98%", l: "Client Success Rate" },
            { v: "250+", l: "Projects Launched" },
            { v: "15", l: "Industry Awards" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400">{s.v}</div>
              <div className="mt-2 text-[11px] tracking-widest text-slate-400">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIONARIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">The Visionaries</h2>
          <p className="mt-3 text-slate-400">Led by a team of industry veterans dedicated to redefining the digital landscape.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { n: "Adrian Thorne", r: "FOUNDER & CREATIVE DIRECTOR", d: "Pioneering digital aesthetics for over a decade with a focus on luxury brand positioning.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
            { n: "Elena Vance", r: "CHIEF OF OPERATIONS", d: "Expert in scaling digital infrastructure and optimizing complex marketing ecosystems.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
            { n: "Marcus Sterling", r: "CHIEF TECHNOLOGY OFFICER", d: "Architecting next-gen web technologies and AI integrations for global enterprises.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
          ].map((m) => (
            <article key={m.n} className="rounded-2xl overflow-hidden border border-white/5">
              <img src={m.img} alt={m.n} className="w-full h-80 object-cover grayscale" />
              <div className="p-6 bg-[#0a0c10]">
                <h4 className="text-lg font-semibold text-white">{m.n}</h4>
                <div className="text-[10px] tracking-widest text-cyan-400 mt-1">{m.r}</div>
                <p className="mt-3 text-slate-400 text-sm">{m.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BUILD THE FUTURE */}
      <section className="bg-hero-soft py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Build the Future of Digital</h2>
            <p className="mt-4 text-slate-300 max-w-xl">
              We are always looking for obsessive thinkers, radical designers, and code poets.
              Join our remote-first team and work on projects that define the standard of excellence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-cyan">View Open Roles</Link>
              <Link to="/services" className="btn-ghost">Our Culture Manual</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { i: <Rocket />, t: "Rapid Growth" },
              { i: <Globe />, t: "Remote Freedom" },
              { i: <BookOpen />, t: "Constant Learning" },
              { i: <Palette />, t: "Creative Liberty" },
            ].map((b) => (
              <div key={b.t} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-cyan-400 mx-auto w-fit">{b.i}</div>
                <div className="mt-3 text-white font-medium">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
