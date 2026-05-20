import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <div data-testid="contact-page">
      <section className="bg-hero bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 text-center">
          <span className="tag-pill">Get in Touch</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white">
            Start the <span className="text-orange-400 glow-orange">Ascent</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl mx-auto">
            Tell us where you want to dominate. We'll architect the strategy to get you there.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-24 relative z-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex justify-center">
            <ContactForm />
          </div>
          <aside className="space-y-4">
            <div className="glass-card rounded-2xl p-6">
              <Mail className="text-cyan-400" />
              <h4 className="mt-4 text-white font-semibold">Email</h4>
              <a href="mailto:Amoreviamediaagency@gmail.com" className="text-slate-300 text-sm hover:text-cyan-400 transition break-all">
                Amoreviamediaagency@gmail.com
              </a>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <Phone className="text-orange-400" />
              <h4 className="mt-4 text-white font-semibold">Office Hours</h4>
              <p className="text-slate-400 text-sm">Mon — Fri · 9:00 to 18:00</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <MapPin className="text-cyan-400" />
              <h4 className="mt-4 text-white font-semibold">Remote First</h4>
              <p className="text-slate-400 text-sm">Operating globally with teams across three continents.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
