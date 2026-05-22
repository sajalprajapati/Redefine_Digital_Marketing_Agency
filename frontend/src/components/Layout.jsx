import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SiteBackground } from "./SiteBackground";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [
    { to: "/portfolio", label: "Work" },
    { to: "/services", label: "Services" },
    { to: "/services#process", label: "Process" },
    { to: "/about", label: "Studio" },
  ];

  return (
    <header
      data-testid="site-navbar"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <Link
            to="/"
            data-testid="brand-logo"
            className="group inline-flex items-center gap-3"
          >
            <span className="logo-tile">
              <img
                src="https://customer-assets.emergentagent.com/job_webpage-replica-tool/artifacts/iy6st2rv_IMG_0512.jpg"
                alt="Amorevia Media"
              />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-[Outfit] font-extrabold tracking-[0.18em] text-white text-[0.92rem]">AMOREVIA</span>
              <span className="text-[0.62rem] tracking-[0.32em] text-[#8D8D8D] mt-1">MEDIA AGENCY</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => {
              const [path, hash] = l.to.split("#");
              const isActive =
                location.pathname === path &&
                (hash ? location.hash === `#${hash}` : !location.hash);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              data-testid="nav-get-started-btn"
              className="hidden sm:inline-flex nav-cta"
            >
              <span>GET A SERVICE</span>
              <span className="nav-cta__arrow">→</span>
            </Link>
            <button
              data-testid="mobile-menu-toggle"
              aria-label="Toggle menu"
              className="md:hidden text-white p-2"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/5 px-6 py-4 space-y-4" data-testid="mobile-menu">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-base text-slate-400 hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-cyan inline-block text-sm">
              Get a service
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block float-y" />
              <span className="font-[Outfit] font-extrabold tracking-[0.18em] text-white text-sm">AMOREVIA MEDIA</span>
            </div>
            <p className="mt-5 text-[#BFC3C7] text-sm leading-relaxed">
              An independent digital marketing studio building films, social systems and paid
              engines for ambitious brands.
            </p>
            <div className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block animate-pulse" />
              <span className="text-[#8D8D8D]">Live ·</span>
              <span className="text-white">59 visitors on site</span>
            </div>
          </div>

          {/* Studio links */}
          <div>
            <div className="text-[11px] tracking-[0.34em] uppercase text-[#8D8D8D] mb-5">Studio</div>
            <ul className="space-y-3 text-sm text-[#F4F4F4]">
              <li><Link to="/portfolio" className="hover:text-cyan-400 transition">Work</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Get a service</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="text-[11px] tracking-[0.34em] uppercase text-[#8D8D8D] mb-5">Social</div>
            <ul className="space-y-3 text-sm text-[#F4F4F4]">
              <li><a href="#" className="hover:text-cyan-400 transition">YouTube</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Admin</a></li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <div className="text-[11px] tracking-[0.34em] uppercase text-[#8D8D8D] mb-5">Get in touch</div>
            <a href="mailto:Amoreviamediaagency@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition text-sm break-all">
              Amoreviamediaagency@gmail.com
            </a>
            <p className="text-sm text-[#BFC3C7] mt-3">Mumbai · Bengaluru, India</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-[10px] tracking-[0.30em] uppercase text-[#8D8D8D]">
            © 2026 Amorevia Media Pvt. Ltd. All rights reserved.
          </div>
          <div className="text-[10px] tracking-[0.30em] uppercase text-[#8D8D8D]">
            Crafted with too much filter coffee
          </div>
          <div className="flex items-center gap-2 text-[10px] tracking-[0.30em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span className="text-[#8D8D8D]">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const PageShell = ({ children }) => (
  <div className="min-h-screen flex flex-col relative">
    <SiteBackground />
    <Navbar />
    <main className="flex-1 pt-[72px]">{children}</main>
    <Footer />
  </div>
);
