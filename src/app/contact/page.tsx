"use client";

import React, { useState } from "react";
import { toast } from "sonner";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const empty: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
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
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone || undefined,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSubmitted(true);
      setForm(empty);
      toast.success("Message sent! We'll get back to you soon.");
    } catch (err: unknown) {
      toast.error(
        err instanceof Error ? err.message : "Failed to send message",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (err?: string) =>
    `w-full bg-background border ${err ? "border-red-500" : "border-border"} rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground`;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Info */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            We&apos;re Online
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter text-foreground mb-6">
            Let&apos;s build <br className="hidden md:block" />
            <span className="text-primary">something great.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
            Have questions about the bootcamps? Need help with your enrollment?
            Our team is ready to help you take the next step.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card p-6 rounded-3xl border border-border group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons text-primary text-2xl">
                    email
                  </span>
                </div>
                <h3 className="text-lg font-black mb-2 text-foreground">
                  Email
                </h3>
                <p className="text-muted-foreground mb-6 text-xs leading-relaxed">
                  For general inquiries and support.
                </p>
              </div>
              <a
                href="mailto:info@vydhra.com"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-orange-600 transition-colors text-xs break-all"
              >
                info@vydhra.com
                <span className="material-icons text-sm">arrow_forward</span>
              </a>
            </div>

            <div className="bg-card p-6 rounded-3xl border border-border group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons text-primary text-2xl">
                    phone
                  </span>
                </div>
                <h3 className="text-lg font-black mb-2 text-foreground">
                  Phone
                </h3>
                <p className="text-muted-foreground mb-6 text-xs leading-relaxed">
                  Call us directly to speak with an advisor.
                </p>
              </div>
              <a
                href="tel:+917980624524"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-orange-600 transition-colors text-xs whitespace-nowrap"
              >
                +91 79806 24524
                <span className="material-icons text-sm">arrow_forward</span>
              </a>
            </div>

            <div className="bg-card p-6 rounded-3xl border border-border group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons text-primary text-2xl">
                    chat
                  </span>
                </div>
                <h3 className="text-lg font-black mb-2 text-foreground">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground mb-6 text-xs leading-relaxed">
                  Chat with us directly for quick answers.
                </p>
              </div>
              <a
                href="https://wa.me/917980624524"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-orange-600 transition-colors text-xs whitespace-nowrap"
              >
                Start Chat
                <span className="material-icons text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-[2.5rem] blur-2xl -z-10" />
          <div className="bg-card p-8 md:p-10 rounded-[2.5rem] border border-border shadow-2xl backdrop-blur-xl relative z-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center mb-6">
                  <span className="material-icons text-green-500 text-4xl">
                    check_circle
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-3">Message Sent!</h3>
                <p className="text-muted-foreground mb-8 max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you at{" "}
                  <span className="text-primary font-bold">
                    {form.email || "your email"}
                  </span>{" "}
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-bold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black mb-8 text-foreground">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className={inputClass(errors.firstName)}
                        value={form.firstName}
                        onChange={set("firstName")}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className={inputClass()}
                        value={form.lastName}
                        onChange={set("lastName")}
                      />
                    </div>
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
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={inputClass()}
                      value={form.phone}
                      onChange={set("phone")}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                      How can we help? *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your goals..."
                      className={inputClass(errors.message) + " resize-none"}
                      value={form.message}
                      onChange={set("message")}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white font-bold py-5 rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3 cursor-pointer mt-4"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="material-icons text-xl">send</span>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
