import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/insights", label: "Insights" },
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
            className="font-[Outfit] font-extrabold text-[1.35rem] tracking-tight text-white"
          >
            Amorevia<span className="text-cyan-400">.</span>
            <span className="text-[0.95rem] font-medium text-slate-300 ml-1">Media</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-${l.label.toLowerCase()}`}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              data-testid="nav-get-started-btn"
              className="hidden sm:inline-flex btn-cyan text-sm"
            >
              Get Started
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
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block text-base ${isActive ? "text-white" : "text-slate-400"}`}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-cyan inline-block text-sm">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-[Outfit] font-extrabold text-xl text-white">
            Amorevia<span className="text-cyan-400">.</span>
            <span className="text-sm text-slate-300 ml-1 font-medium">Media Agency</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">© 2025 Amoreviamediaagency. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export const PageShell = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[72px]">{children}</main>
    <Footer />
  </div>
);
