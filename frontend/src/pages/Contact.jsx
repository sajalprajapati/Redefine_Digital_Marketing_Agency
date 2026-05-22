import React from "react";
import { ContactSection } from "../components/ContactSection";
import { BrandMarquee } from "../components/BrandMarquee";

const Contact = () => {
  return (
    <div data-testid="contact-page">
      <section className="bg-hero bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 text-center">
          <div className="text-[11px] tracking-[0.34em] uppercase text-[#8D8D8D]">
            <span className="text-orange-500 mr-3">♦</span>05 · Get In Touch
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Let's build something <span className="text-cyan-400 glow-cyan">measurable.</span>
          </h1>
          <p className="mt-6 text-[#BFC3C7] max-w-2xl mx-auto">
            One form. One human reply. Within 24 business hours, every time.
          </p>
        </div>
      </section>

      <BrandMarquee />

      <ContactSection sectionNo="06" />
    </div>
  );
};

export default Contact;
