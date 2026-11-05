"use client";

import { useState } from "react";
import { SiRazorpay, SiGooglepay, SiPhonepe, SiPaytm, SiVisa, SiMastercard } from "react-icons/si";
import { WORKSHOP, getPaymentUrl } from "./workshop.config";

const PROFILES = ["College student", "Fresher / job seeker", "Working developer", "Non-tech professional", "Other"];

type Status = "idle" | "submitting" | "redirecting";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function RegisterForm({ id }: { id?: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profile: PROFILES[0] });
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const phone = form.phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
    if (form.name.trim().length < 2) return setError("Please enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError("Please enter a valid email.");
    if (!/^[6-9]\d{9}$/.test(phone)) return setError("Please enter a valid 10-digit WhatsApp number.");

    setStatus("submitting");
    const details = { name: form.name.trim(), email: form.email.trim(), phone: `+91${phone}` };

    // Save the lead first so we can follow up even if payment is abandoned.
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...details,
          message: `[WORKSHOP REGISTRATION] ${WORKSHOP.shortTitle} · ${WORKSHOP.dateLabel} · ₹${WORKSHOP.price}\nProfile: ${form.profile}`,
        }),
      });
    } catch {
      // Don't block the user from paying if lead capture fails.
    }
    window.gtag?.("event", "generate_lead", { currency: "INR", value: WORKSHOP.price, workshop: WORKSHOP.shortTitle });

    setStatus("redirecting");
    window.location.href = getPaymentUrl(details);
  }

  const input =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="space-y-3 scroll-mt-28">
      <input className={input} placeholder="Full name" autoComplete="name" value={form.name} onChange={set("name")} />
      <input
        className={input}
        type="email"
        placeholder="Email address"
        autoComplete="email"
        value={form.email}
        onChange={set("email")}
      />
      <div className="flex">
        <span className="flex items-center rounded-l-xl border border-r-0 border-border bg-muted px-3 text-sm font-semibold text-muted-foreground">
          +91
        </span>
        <input
          className={`${input} rounded-l-none`}
          type="tel"
          inputMode="numeric"
          placeholder="WhatsApp number"
          autoComplete="tel-national"
          value={form.phone}
          onChange={set("phone")}
        />
      </div>
      <select className={input} value={form.profile} onChange={set("profile")} aria-label="I am a">
        {PROFILES.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </select>

      {error && (
        <p className="flex items-center gap-1 text-sm font-semibold text-red-500" role="alert">
          <span className="material-icons text-base">error</span>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status !== "idle"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-lg font-black text-white shadow-xl shadow-primary/25 transition-all hover:bg-orange-600 active:scale-[0.98] disabled:opacity-70"
      >
        {status === "idle" && (
          <>
            Pay ₹{WORKSHOP.price} &amp; Reserve Seat
            <span className="material-icons">arrow_forward</span>
          </>
        )}
        {status === "submitting" && "Saving your details…"}
        {status === "redirecting" && "Taking you to secure payment…"}
      </button>

      <div className="flex items-center justify-center gap-1.5 pt-1 text-xs text-muted-foreground">
        <span className="material-icons text-sm text-green-600">lock</span>
        100% secure payment powered by <SiRazorpay className="h-3.5 w-3.5 text-[#3395FF]" />
        <span className="font-bold text-foreground">Razorpay</span>
      </div>
      <div className="flex items-center justify-center gap-4 text-muted-foreground">
        <SiGooglepay className="h-6 w-6" title="Google Pay" />
        <SiPhonepe className="h-5 w-5" title="PhonePe" />
        <SiPaytm className="h-7 w-7" title="Paytm" />
        <SiVisa className="h-7 w-7" title="Visa" />
        <SiMastercard className="h-6 w-6" title="Mastercard" />
        <span className="text-xs font-black">UPI</span>
      </div>
    </form>
  );
}
