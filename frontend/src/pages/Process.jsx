import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const PROCESS_STEPS = [
  {
    n: "01",
    t: "Discover",
    d: "Brand, customer, and competitor audits help us understand your market, identify gaps, and uncover the opportunities that drive real business growth.",
  },
  {
    n: "02",
    t: "Research",
    d: "We study audience behavior, industry trends, platform insights, and performance data to build a strong foundation for campaign success.",
  },
  {
    n: "03",
    t: "Blueprint",
    d: "A bespoke growth strategy is crafted with channel planning, creative direction, KPI mapping, funnel structure, and a 90-day execution roadmap.",
  },
  {
    n: "04",
    t: "Execute",
    d: "Campaigns are launched with precision across the right platforms while our team manages targeting, creatives, budgets, and daily optimization.",
  },
  {
    n: "05",
    t: "Scale",
    d: "Winning campaigns are scaled aggressively by doubling down on top-performing strategies, refining targeting, and compounding ROAS month over month.",
  },
];

const Process = () => {
  return (
    <div data-testid="process-page">
      <section className="relative bg-hero bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 text-center">
          <Reveal variant="up">
            <span className="tag-pill">How We Work</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white">
              The Growth <span className="text-cyan-400 glow-cyan">Workflow</span>
            </h1>
            <p className="mt-6 text-[#BFC3C7] max-w-2xl mx-auto text-base sm:text-lg">
              From discovery to scale, our disciplined process turns marketing into a measurable growth engine.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.n} variant="up" delay={i * 80}>
              <div className="glass-card rounded-2xl p-6 text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-full grid place-items-center bg-cyan-400 text-[#06121a] font-bold float-y">
                  {s.n}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white">{s.t}</h2>
                <p className="mt-2 text-[#BFC3C7] text-sm leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative bg-hero-soft py-24">
        <Reveal variant="scale">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center glass-card rounded-3xl p-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Ready to <span className="text-orange-400 glow-orange">Grow?</span>
            </h2>
            <p className="mt-3 text-[#BFC3C7] max-w-xl mx-auto">
              Tell us your goal and we will map the workflow that gets you there.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact#contact-form" className="btn-cyan">Get a Service</Link>
              <Link to="/services" className="btn-ghost">Explore Services</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Process;
