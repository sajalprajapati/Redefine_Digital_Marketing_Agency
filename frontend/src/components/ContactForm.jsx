import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const ContactForm = ({ compact = false }) => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and a brief message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. We'll be in touch shortly.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not send. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      data-testid="contact-form"
      className={`glass-card rounded-2xl p-6 sm:p-8 ${compact ? "" : "max-w-3xl w-full"}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          data-testid="contact-name"
          className="input-dark"
          placeholder="Your Name"
          value={form.name}
          onChange={update("name")}
        />
        <input
          data-testid="contact-email"
          type="email"
          className="input-dark"
          placeholder="Email Address"
          value={form.email}
          onChange={update("email")}
        />
      </div>
      <input
        data-testid="contact-company"
        className="input-dark mt-4"
        placeholder="Company (optional)"
        value={form.company}
        onChange={update("company")}
      />
      <textarea
        data-testid="contact-message"
        rows={5}
        className="input-dark mt-4 resize-none"
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={update("message")}
      />
      <button
        type="submit"
        disabled={loading}
        data-testid="contact-submit-btn"
        className="btn-cyan mt-6 w-full inline-flex items-center justify-center gap-2"
      >
        {loading ? "Sending..." : (<><Send size={16} /> Send Message</>)}
      </button>
      <p className="text-xs text-slate-500 mt-3 text-center">
        Your message will be sent to <span className="text-cyan-400">Amoreviamediaagency@gmail.com</span>
      </p>
    </form>
  );
};
