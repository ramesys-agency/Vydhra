"use client";

import React, { useState } from "react";
import { toast } from "sonner";

interface FormState {
  name: string;
  email: string;
  phone: string;
  background: string;
}

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  background: "",
};

export default function AgentApplyForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/referral-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          background: form.background.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSubmitted(true);
      toast.success("Application submitted! Our team will reach out soon.");
    } catch (err: unknown) {
      toast.error(
        err instanceof Error ? err.message : "Failed to submit application",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (err?: string) =>
    `w-full bg-background border ${err ? "border-red-500" : "border-border"} rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center mb-6">
          <span className="material-icons text-green-500 text-4xl">
            check_circle
          </span>
        </div>
        <h3 className="text-2xl font-black mb-3">Application Received!</h3>
        <p className="text-muted-foreground mb-8 max-w-xs">
          Thanks for applying to become a Vydhra referral agent. Our team will
          review your application and get back to you at{" "}
          <span className="text-primary font-bold">
            {form.email || "your email"}
          </span>{" "}
          within 2-3 business days.
        </p>
        <button
          onClick={() => {
            setForm(empty);
            setSubmitted(false);
          }}
          className="text-sm font-bold text-primary hover:underline cursor-pointer"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-black mb-2 text-foreground">
        Apply as a Referral Agent
      </h3>
      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
        For professionals in the education, training, and career-services
        industry. Fill out the form and our team will get in touch to onboard
        you with your unique agent code.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className={inputClass(errors.name)}
            value={form.name}
            onChange={set("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className={inputClass(errors.email)}
            value={form.email}
            onChange={set("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className={inputClass(errors.phone)}
            value={form.phone}
            onChange={set("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
            Your Industry Background (optional)
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your experience in the education / training industry, your network, and how you plan to refer students..."
            className={inputClass() + " resize-none"}
            value={form.background}
            onChange={set("background")}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-fit sm:px-8 py-3 sm:py-5 rounded-xl sm:rounded-2xl bg-primary text-white font-bold text-sm sm:text-base hover:bg-orange-600 transition-all shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3 cursor-pointer mt-4"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <span className="material-icons text-xl">handshake</span>
              Apply Now
            </>
          )}
        </button>
      </form>
    </>
  );
}
