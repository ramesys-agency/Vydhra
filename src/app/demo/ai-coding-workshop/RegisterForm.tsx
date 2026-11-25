"use client";

import { useId, useState } from "react";
import { SiRazorpay } from "react-icons/si";
import { WORKSHOP, getPaymentUrl, hasFee, payLabel } from "./workshop.config";

const PROFILES = [
  "Student / fresher",
  "Working professional",
  "Freelancer / creator",
  "Entrepreneur / business owner",
  "Other",
];

type Status = "idle" | "submitting" | "redirecting";
type Field = "name" | "email" | "phone";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function RegisterForm({ id }: { id?: string }) {
  const uid = useId();
  const [form, setForm] = useState({ name: "", email: "", phone: "", profile: PROFILES[0] });
  const [error, setError] = useState<{ field: Field; msg: string } | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const viaPaymentPage = Boolean(WORKSHOP.paymentUrl);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const phone = form.phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
    if (form.name.trim().length < 2) return setError({ field: "name", msg: "Please enter your full name." });
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError({ field: "email", msg: "Please enter a valid email." });
    if (!/^[6-9]\d{9}$/.test(phone))
      return setError({ field: "phone", msg: "Please enter a valid 10-digit WhatsApp number." });

    setStatus("submitting");
    const details = { name: form.name.trim(), email: form.email.trim(), phone: `+91${phone}` };

    // Save the lead first so we can follow up even if payment is abandoned.
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...details,
          message: `[WORKSHOP REGISTRATION] ${WORKSHOP.title} · ${WORKSHOP.dateLabel} · ${WORKSHOP.timeLabel} · ₹${WORKSHOP.price}\nProfile: ${form.profile}`,
        }),
      });
    } catch {
      // Don't block the user from paying if lead capture fails.
    }
    window.gtag?.("event", "generate_lead", { currency: "INR", value: WORKSHOP.price, workshop: WORKSHOP.shortTitle });

    setStatus("redirecting");
    window.location.href = getPaymentUrl(details);
  }

  const errId = `${uid}-error`;
  const fieldProps = (f: Field) => ({
    id: `${uid}-${f}`,
    "aria-invalid": error?.field === f || undefined,
    "aria-describedby": error?.field === f ? errId : undefined,
  });
  const input =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 aria-[invalid=true]:border-red-500";
  const label = "mb-1.5 block text-sm font-semibold text-foreground";

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Workshop registration">
      <div>
        <label htmlFor={`${uid}-name`} className={label}>
          Full name
        </label>
        <input
          {...fieldProps("name")}
          className={input}
          placeholder="e.g. Priya Sharma"
          autoComplete="name"
          value={form.name}
          onChange={set("name")}
        />
      </div>
      <div>
        <label htmlFor={`${uid}-email`} className={label}>
          Email address
        </label>
        <input
          {...fieldProps("email")}
          className={input}
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={form.email}
          onChange={set("email")}
        />
      </div>
      <div>
        <label htmlFor={`${uid}-phone`} className={label}>
          WhatsApp number
        </label>
        <div className="flex">
          <span
            aria-hidden="true"
            className="flex items-center rounded-l-xl border border-r-0 border-border bg-muted px-3 text-sm font-semibold text-muted-foreground"
          >
            +91
          </span>
          <input
            {...fieldProps("phone")}
            className={`${input} rounded-l-none`}
            type="tel"
            inputMode="numeric"
            placeholder="10-digit mobile number"
            autoComplete="tel-national"
            value={form.phone}
            onChange={set("phone")}
          />
        </div>
      </div>
      <div>
        <label htmlFor={`${uid}-profile`} className={label}>
          I am a
        </label>
        <select id={`${uid}-profile`} className={input} value={form.profile} onChange={set("profile")}>
          {PROFILES.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {error && (
        <p id={errId} className="flex items-center gap-1 text-sm font-semibold text-red-500" role="alert">
          <span className="material-icons text-base" aria-hidden="true">
            error
          </span>
          {error.msg}
        </p>
      )}

      <button
        type="submit"
        disabled={status !== "idle"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-70 sm:text-lg"
      >
        {status === "idle" && (
          <>
            {payLabel}
            <span className="material-icons" aria-hidden="true">
              arrow_forward
            </span>
          </>
        )}
        {status === "submitting" && "Saving your details…"}
        {status === "redirecting" && (viaPaymentPage ? "Taking you to secure payment…" : "Opening WhatsApp…")}
      </button>

      {hasFee && (
        <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          <span className="material-icons text-sm text-green-600" aria-hidden="true">
            lock
          </span>
          {viaPaymentPage ? (
            <>
              Secure payment via <SiRazorpay className="h-3.5 w-3.5 text-[#3395FF]" aria-hidden="true" />
              <span className="font-semibold text-foreground">Razorpay</span> · UPI, cards &amp; netbanking
            </>
          ) : (
            <>Our team will share a secure payment link with you on WhatsApp.</>
          )}
        </p>
      )}
    </form>
  );
}
