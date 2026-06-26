"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-warm-white rounded-2xl p-10 border border-gold/30 text-center">
        <div className="w-14 h-14 rounded-full bg-gold/15 text-gold flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-navy mb-3">Message Sent</h3>
        <p className="font-body text-slate">
          Thank you for reaching out. Our team will respond within one business day (Mon–Fri, 9AM–6PM).
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full font-body text-sm bg-warm-white border border-navy/20 rounded-xl px-4 py-3 text-navy placeholder-slate/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-body text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={fields.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            value={fields.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block font-body text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={fields.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-body text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={fields.subject}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a topic</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Referral / Admissions">Referral / Admissions</option>
            <option value="Donation / Partnership">Donation / Partnership</option>
            <option value="In-Kind Donation">In-Kind Donation</option>
            <option value="Career Opportunities">Career Opportunities</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-xs font-semibold text-navy uppercase tracking-wide mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          value={fields.message}
          onChange={handleChange}
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-red-600">
          Something went wrong. Please try again or email us directly at info@thebrotherhoodacademy.org.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full font-body font-semibold bg-navy text-warm-white py-3.5 rounded-xl hover:bg-navy-light transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
