import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICES = [
  "Performance Marketing",
  "SEO & Content Strategy",
  "Social Media Management",
  "Branding & Creative",
  "Video & Reels Production",
  "Email & Lifecycle Marketing",
  "Analytics & CRO",
  "Web Design & Development",
];

const BUDGETS = [
  "Under ₹2 Lakh / month",
  "₹2 – 5 Lakh / month",
  "₹5 – 10 Lakh / month",
  "₹10 Lakh+ / month",
  "Project-based / One-off",
];

export const ContactSection = ({ id = "contact", sectionNo = "05" }) => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.service) {
      toast.error("Please fill in name, email, the service and your brief.");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        company: form.company,
        message:
          `Service: ${form.service}\n` +
          `Phone: +91 ${form.phone || "—"}\n` +
          `Budget: ${form.budget || "Not specified"}\n\n` +
          `Brief:\n${form.message}`,
      };
      await axios.post(`${API}/contact`, payload);
      toast.success("Brief sent. We'll reply within 24 business hours.");
      setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not send. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} data-testid="get-service-section" className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-[11px] tracking-[0.34em] uppercase text-[#8D8D8D]">
          <span className="text-orange-500 mr-3">♦</span>{sectionNo} · Get A Service
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT: Heading + Direct info */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              Pick a service.<br />
              Tell us the goal.<br />
              <em className="not-italic text-white" style={{ fontStyle: "italic" }}>We'll do the rest.</em>
            </h2>

            <div className="mt-12 space-y-7 max-w-md">
              <InfoRow label="Direct">
                <a href="mailto:Amoreviamediaagency@gmail.com" className="text-cyan-400 hover:underline break-all">
                  Amoreviamediaagency@gmail.com
                </a>
              </InfoRow>
              <InfoRow label="Studios">
                <div className="text-[#F4F4F4]">Mumbai, Maharashtra · Bengaluru, Karnataka</div>
                <div className="text-[#8D8D8D] text-xs mt-1">Mon — Sat · 10:00 — 19:00 IST</div>
              </InfoRow>
              <InfoRow label="Response">
                <div className="text-[#BFC3C7]">Within 24 business hours, every time.</div>
              </InfoRow>
            </div>
          </div>

          {/* RIGHT: Form */}
          <form onSubmit={submit} data-testid="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
            <FormField label="Your Name *" required>
              <input
                data-testid="contact-name"
                className="form-line"
                value={form.name}
                onChange={update("name")}
                placeholder="Anaya Mehta"
              />
            </FormField>
            <FormField label="Email *" required>
              <input
                data-testid="contact-email"
                type="email"
                className="form-line"
                value={form.email}
                onChange={update("email")}
                placeholder="anaya@brand.com"
              />
            </FormField>

            <FormField label="Phone (+91)">
              <input
                data-testid="contact-phone"
                className="form-line"
                value={form.phone}
                onChange={update("phone")}
                placeholder="98XXX XXXXX"
              />
            </FormField>
            <FormField label="Company">
              <input
                data-testid="contact-company"
                className="form-line"
                value={form.company}
                onChange={update("company")}
                placeholder="Lodha Estates"
              />
            </FormField>

            <FormField label="Service interested in *" required>
              <select
                data-testid="contact-service"
                className="form-line"
                value={form.service}
                onChange={update("service")}
              >
                <option value="">— Select a service —</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </FormField>
            <FormField label="Budget range (INR)">
              <select
                data-testid="contact-budget"
                className="form-line"
                value={form.budget}
                onChange={update("budget")}
              >
                <option value="">— Select budget —</option>
                {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </FormField>

            <FormField label="The Brief *" required className="md:col-span-2">
              <textarea
                data-testid="contact-message"
                className="form-line resize-none"
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us about the brand, the goal, and the deadline."
              />
            </FormField>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#8D8D8D] max-w-sm">
                GST invoiced. No spam — ever. We respond from a real human inbox.
              </p>
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit-btn"
                className="send-brief-btn"
              >
                <span className="leading-tight text-left">{loading ? "Sending…" : <>SEND<br />THE<br />BRIEF</>}</span>
                <span className="send-brief-btn__arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ label, children }) => (
  <div className="grid grid-cols-[110px_1fr] gap-6 items-start border-b border-white/10 pb-5">
    <div className="text-[10px] tracking-[0.34em] uppercase text-[#8D8D8D] pt-1">{label}</div>
    <div className="text-sm">{children}</div>
  </div>
);

const FormField = ({ label, children, className = "" }) => (
  <label className={`flex flex-col ${className}`}>
    <span className="text-[10px] tracking-[0.34em] uppercase text-[#8D8D8D] mb-3">{label}</span>
    {children}
  </label>
);
