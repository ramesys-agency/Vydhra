import type { Metadata } from "next";
import Image from "next/image";
import { SiClaude, SiGithubcopilot, SiGooglegemini, SiVercel, SiGithub, SiReplit, SiZoom } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { reviews } from "@/data/reviews";
import Countdown from "./Countdown";
import StickyCTA from "./StickyCTA";
import UrgencyBar from "./UrgencyBar";
import RegisterForm from "./RegisterForm";
import {
  WORKSHOP,
  PROOF,
  RAMESYS_SERVICES,
  TEAM_ROLES,
  OUTCOMES,
  AGENDA,
  BONUSES,
  EARLY_BIRD_VALUE,
  FOR_YOU,
  NOT_FOR_YOU,
  FAQS,
} from "./workshop.config";

// Demo / campaign page: intentionally hidden from search engines and not linked from the site.
export const metadata: Metadata = {
  title: `${WORKSHOP.shortTitle} · ₹${WORKSHOP.price} · ${WORKSHOP.dateShort} | Vydhra`,
  description: `Live 3-hour hands-on workshop on using AI to code faster: Claude Code, Cursor, Copilot, prompting, debugging and shipping real apps. ${WORKSHOP.dateLabel}, ${WORKSHOP.timeLabel}. Only ₹${WORKSHOP.price}.`,
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

const TOOLS = [
  { name: "Claude Code", Icon: SiClaude },
  { name: "ChatGPT", Icon: RiOpenaiFill },
  { name: "GitHub Copilot", Icon: SiGithubcopilot },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "v0 by Vercel", Icon: SiVercel },
  { name: "GitHub", Icon: SiGithub },
  { name: "Replit", Icon: SiReplit },
];

const AI_KEYWORDS = /AI|Agents|Prompt|Machine Learning|MERN|Python/i;
const isDev = process.env.NODE_ENV === "development";
const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/** Shown only in local dev, so the team knows where real proof should go. Renders nothing in production. */
function FillMe({ what, dark = false }: { what: string; dark?: boolean }) {
  if (!isDev) return null;
  return (
    <div
      className={`rounded-2xl border-2 border-dashed p-4 text-center text-xs font-bold uppercase tracking-widest ${
        dark ? "border-white/20 text-white/50" : "border-primary/40 text-primary/70"
      }`}
    >
      Dev only · add real {what} in workshop.config.ts → PROOF (hidden in production until filled)
    </div>
  );
}

function CTA({ label = `Reserve My Seat for ₹${WORKSHOP.price}`, className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href="#register"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-xl shadow-primary/25 transition-all hover:scale-[1.03] hover:bg-orange-600 active:scale-95 md:px-10 md:text-lg ${className}`}
    >
      {label}
      <span className="material-icons text-xl">arrow_forward</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">{children}</p>;
}

function SeatsBar() {
  if (WORKSHOP.seatsFilled === null) return null;
  const pct = Math.min(100, Math.round((WORKSHOP.seatsFilled / WORKSHOP.seatCap) * 100));
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex justify-between text-xs font-bold">
        <span className="text-foreground">
          {WORKSHOP.seatsFilled} / {WORKSHOP.seatCap} seats booked
        </span>
        <span className="text-primary">{WORKSHOP.seatCap - WORKSHOP.seatsFilled} left</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-primary" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function RegistrationCard({ id }: { id?: string }) {
  return (
    <div
      data-register-form
      className="relative rounded-[2rem] border border-border bg-card p-6 shadow-2xl shadow-primary/10 md:p-8"
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
        {Math.round((1 - WORKSHOP.price / WORKSHOP.originalPrice) * 100)}% off · Early bird
      </div>
      <div className="mb-4 flex items-end justify-between gap-4 pt-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Workshop fee</p>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-black text-foreground">₹{WORKSHOP.price}</span>
            <span className="mb-1.5 text-lg font-semibold text-muted-foreground line-through">
              {inr(WORKSHOP.originalPrice)}
            </span>
          </div>
        </div>
        <p className="mb-1 text-right text-xs text-muted-foreground">
          Less than
          <br />a pizza slice 🍕
        </p>
      </div>

      <SeatsBar />

      <div className="mb-5 rounded-2xl bg-primary/5 p-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
          🎁 Bonuses worth {inr(EARLY_BIRD_VALUE)} end in
        </p>
        <Countdown to={WORKSHOP.earlyBirdEndsAt} doneText="Early-bird bonuses have ended" />
      </div>

      <RegisterForm id={id} />

      <ol className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5 text-center text-[11px] font-semibold text-muted-foreground">
        {[
          { icon: "edit_note", t: "Fill details" },
          { icon: "payments", t: `Pay ₹${WORKSHOP.price}` },
          { icon: "mark_chat_read", t: "Zoom link on WhatsApp" },
        ].map((s, i) => (
          <li key={s.t} className="flex flex-col items-center gap-1">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-primary">
              <span className="material-icons text-base">{s.icon}</span>
            </span>
            <span>
              {i + 1}. {s.t}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function AICodingWorkshopPage() {
  const totalValue = BONUSES.reduce((s, b) => s + b.value, 0);
  const avgRating = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const testimonials = reviews.filter((r) => AI_KEYWORDS.test(r.course)).slice(0, 6);
  const avatars = reviews.filter((r) => r.image).slice(0, 5);
  const included = BONUSES.filter((b) => !b.earlyBird);
  const earlyBird = BONUSES.filter((b) => b.earlyBird);

  const stats = [
    PROOF.learnersTrained && { big: PROOF.learnersTrained, small: "Learners trained by Vydhra & Ramesys" },
    { big: "13", small: "Live, mentor-led bootcamps in AI, data & full-stack" },
    { big: `${avgRating.toFixed(1)}★`, small: `Average rating across ${reviews.length}+ verified learner reviews` },
    { big: "100%", small: "Live & hands-on: you build, not just watch" },
  ].filter(Boolean) as { big: string; small: string }[];

  return (
    <main className="min-h-screen bg-background pb-24">
      <UrgencyBar />

      {/* ───────────── HERO + FORM ───────────── */}
      <section className="relative overflow-hidden px-6 pb-20 pt-10 md:px-12 md:pt-14">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:pt-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Live Online Workshop · {WORKSHOP.dateShort}
            </div>

            <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tighter text-foreground sm:text-5xl lg:text-[3.6rem]">
              Stop copy-pasting from ChatGPT. <span className="text-primary">Learn to code with AI like a pro.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              In 3 live hours, engineers from{" "}
              <a
                href="https://www.ramesys.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-foreground underline decoration-primary/40 underline-offset-4"
              >
                Ramesys
              </a>{" "}
              show you the exact AI workflow they use on client projects. You&apos;ll build, debug and ship a real app with
              Claude Code, Cursor &amp; Copilot, on your own laptop.
            </p>

            <div className="mb-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: "event", k: "Date", v: WORKSHOP.dateLabel.replace(" 2026", "") },
                { icon: "schedule", k: "Time", v: WORKSHOP.timeLabel },
                { icon: "videocam", k: "Where", v: "Live on Zoom" },
              ].map((m) => (
                <div key={m.k} className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-3 backdrop-blur">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-icons">{m.icon}</span>
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{m.k}</p>
                    <p className="text-sm font-bold leading-tight text-foreground">{m.v}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="mb-8 space-y-3">
              {[
                "Build & deploy a full-stack app live, with AI writing most of the code",
                "50+ battle-tested prompts you can reuse at work or in projects",
                "Certificate + recording + source code, even if you miss it live",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 font-medium text-foreground">
                  <span className="material-icons text-primary">check_circle</span>
                  {t}
                </li>
              ))}
            </ul>

            {/* micro social proof */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((r) => (
                  <Image
                    key={r.name}
                    src={r.image!}
                    alt={r.name}
                    width={44}
                    height={44}
                    unoptimized
                    className="h-11 w-11 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-icons text-base">star</span>
                  ))}
                  <span className="ml-1 font-bold text-foreground">{avgRating.toFixed(1)}/5</span>
                </div>
                <p className="text-muted-foreground">
                  {PROOF.learnersTrained ? `Trusted by ${PROOF.learnersTrained} learners` : "Loved by learners in our live bootcamps"}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" id="register">
            <RegistrationCard />
          </div>
        </div>
      </section>

      {/* ───────────── TRUST STRIP ───────────── */}
      <section className="border-y border-border/50 bg-muted px-6 py-10 md:px-12">
        <div className="mx-auto max-w-7xl space-y-8">
          {PROOF.alumniCompanies.length > 0 ? (
            <div>
              <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Our learners now work at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {PROOF.alumniCompanies.map((c) => (
                  <span key={c} className="text-lg font-black tracking-tight text-muted-foreground md:text-xl">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <FillMe what="alumni company names" />
          )}
          <div>
            <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Hands-on with the AI tools top engineering teams use
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {TOOLS.map(({ name, Icon }) => (
                <div key={name} className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-bold">{name}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="material-icons">code</span>
                <span className="text-sm font-bold">Cursor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PROBLEM → SOLUTION ───────────── */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              AI won&apos;t replace developers. <span className="text-primary">Developers using AI will.</span>
            </h2>
            <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
              Recruiters now expect freshers to be productive with AI from day one. Most people use it like a search
              engine: paste error, copy answer, hope it works. That&apos;s not what gets you hired.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">😩 Without a real AI workflow</p>
              <ul className="space-y-4">
                {[
                  "Copy-pasting code between ChatGPT and your editor",
                  "AI output that looks right but breaks the moment you run it",
                  "Hours lost debugging code you don't understand",
                  "Watching peers ship projects twice as fast",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-muted-foreground">
                    <span className="material-icons text-red-500">close</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-primary/40 bg-primary/5 p-8 md:p-10">
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">🚀 After this workshop</p>
              <ul className="space-y-4">
                {[
                  "AI agents that edit, run and test code inside your project",
                  "Prompts that produce clean, reviewed, production-ready code",
                  "A review checklist that catches AI mistakes before they ship",
                  "A real project + workflow to show in interviews",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-medium text-foreground">
                    <span className="material-icons text-primary">check_circle</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── OUTCOMES ───────────── */}
      <section className="border-y border-border/50 bg-muted px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <SectionLabel>What you&apos;ll walk away with</SectionLabel>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Skills you&apos;ll use the next morning
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((o) => (
              <div
                key={o.title}
                className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <span className="material-icons text-3xl">{o.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">{o.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── WHO'S TEACHING (TEAM) ───────────── */}
      <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-12">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>Who&apos;s teaching</SectionLabel>
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Learn from engineers who <span className="text-primary">build with AI every day</span>
            </h2>
            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              Your session is led by the engineering team at{" "}
              <a
                href="https://www.ramesys.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline decoration-primary underline-offset-4 hover:text-primary"
              >
                Ramesys Private Limited
              </a>
              , the software company behind Vydhra. Vydhra began as Ramesys&apos;s in-house training programme for
              developers, and this workshop uses the same playbook.
            </p>
          </div>

          {/* Stats band */}
          <div
            className={`mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 ${
              stats.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {stats.map((s, i) => (
              <div
                key={s.small}
                className={`bg-zinc-950 p-6 text-center md:p-8 ${
                  stats.length % 2 === 1 && i === stats.length - 1 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-2 text-3xl font-black text-primary md:text-5xl">{s.big}</div>
                <p className="mx-auto max-w-[220px] text-xs text-zinc-400 md:text-sm">{s.small}</p>
              </div>
            ))}
          </div>

          {/* Team roles */}
          <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TEAM_ROLES.map((r) => (
              <div
                key={r.role}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-primary/50"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <span className="material-icons">{r.icon}</span>
                </span>
                <h3 className="mb-2 text-lg font-bold">{r.role}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{r.text}</p>
              </div>
            ))}
          </div>

          {/* What Ramesys builds */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-zinc-500">
              What our team builds for clients
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RAMESYS_SERVICES.map((s) => (
                <div key={s.title} className="flex items-start gap-3">
                  <span className="material-icons text-primary">{s.icon}</span>
                  <div>
                    <p className="text-sm font-bold">{s.title}</p>
                    <p className="text-xs leading-relaxed text-zinc-400">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {PROOF.ramesysProjects.length > 0 && (
              <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 border-t border-white/10 pt-5 text-sm">
                {PROOF.ramesysProjects.map((p) => (
                  <p key={p.name}>
                    <span className="font-bold text-white">{p.name}</span>{" "}
                    <span className="text-zinc-400">· {p.work}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────────── AGENDA ───────────── */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Workshop agenda</SectionLabel>
              <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                3 hours. <br /> Zero fluff.
              </h2>
              <p className="mb-8 text-muted-foreground md:text-lg">
                Every segment is hands-on. Keep your laptop open: you&apos;ll build alongside the mentor, not just watch.
              </p>
              <CTA />
            </div>
          </div>
          <ol className="relative space-y-6 border-l-2 border-border pl-8 lg:col-span-8">
            {AGENDA.map((a, i) => (
              <li key={a.title} className="relative">
                <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-black text-primary">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                  <p className="mb-1 font-mono text-xs font-bold text-primary">{a.time} IST</p>
                  <h3 className="mb-2 text-lg font-bold text-foreground md:text-xl">{a.title}</h3>
                  <p className="text-muted-foreground">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section className="border-y border-border/50 bg-muted px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <SectionLabel>Social proof</SectionLabel>
            <h2 className="mb-4 text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Learners who trusted Vydhra
            </h2>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm">
              <span className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-icons text-base">star</span>
                ))}
              </span>
              <span className="font-bold text-foreground">{avgRating.toFixed(1)} out of 5</span>
              <span className="text-muted-foreground">· {reviews.length}+ verified reviews</span>
            </div>
          </div>
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {testimonials.map((r) => (
              <figure key={r.name} className="mb-6 break-inside-avoid rounded-3xl border border-border bg-card p-7 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex text-primary">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i} className="material-icons text-lg">star</span>
                    ))}
                  </div>
                  <span className="material-icons text-4xl leading-none text-primary/15">format_quote</span>
                </div>
                <blockquote className="mb-6 leading-relaxed text-foreground">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                  {r.image ? (
                    <Image src={r.image} alt={r.name} width={44} height={44} unoptimized className="h-11 w-11 rounded-full object-cover" />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                      {r.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="flex items-center gap-1 text-sm font-bold text-foreground">
                      {r.name}
                      {r.verified && (
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-green-500/10 px-1.5 py-0.5 text-[10px] font-bold text-green-600">
                          <span className="material-icons text-[12px]">verified</span>Verified
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground">{r.course}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── VALUE STACK + EARLY-BIRD ───────────── */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <SectionLabel>Everything you get</SectionLabel>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              {inr(totalValue)} of value. <span className="text-primary">Yours for ₹{WORKSHOP.price}.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">Included for everyone</p>
              <ul className="space-y-4">
                {included.map((b) => (
                  <li key={b.item} className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3 font-medium text-foreground">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                        <span className="material-icons">{b.icon}</span>
                      </span>
                      {b.item}
                    </span>
                    <span className="shrink-0 text-sm text-muted-foreground line-through">{inr(b.value)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-3xl border-2 border-primary bg-primary/5 p-6 md:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  🎁 Early-bird bonuses · until {WORKSHOP.earlyBirdLabel}
                </p>
              </div>
              <ul className="space-y-4">
                {earlyBird.map((b) => (
                  <li key={b.item} className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3 font-medium text-foreground">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                        <span className="material-icons">{b.icon}</span>
                      </span>
                      {b.item}
                    </span>
                    <span className="shrink-0 text-sm text-muted-foreground line-through">{inr(b.value)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-primary/20 pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">These bonuses disappear in</p>
                <Countdown to={WORKSHOP.earlyBirdEndsAt} doneText="Early-bird bonuses have ended" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-lg text-muted-foreground">
              Total value <span className="font-bold line-through">{inr(totalValue)}</span> → Today{" "}
              <span className="text-3xl font-black text-primary">₹{WORKSHOP.price}</span>
            </p>
            <CTA label="Claim My Seat + Bonuses" />
          </div>
        </div>
      </section>

      {/* ───────────── CERTIFICATE ───────────── */}
      <section className="border-y border-border/50 bg-muted px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Get certified</SectionLabel>
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Add it to your LinkedIn &amp; resume
            </h2>
            <p className="mb-6 text-muted-foreground md:text-lg">
              Every attendee gets a Vydhra certificate of participation in AI-Assisted Software Development, with a unique
              ID, ready to share on LinkedIn.
            </p>
            <ul className="space-y-3">
              {["Shareable on LinkedIn in one click", "Shows recruiters you're current with AI tooling", "Issued by Vydhra, operated by Ramesys Pvt. Ltd."].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium text-foreground">
                  <span className="material-icons text-primary">done</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Certificate preview (illustrative) */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -rotate-2 rounded-2xl bg-primary/20 blur-2xl" />
            <div className="relative rotate-1 rounded-2xl border-[10px] border-zinc-900 bg-white p-2 shadow-2xl">
              <div className="rounded-lg border-2 border-orange-300 px-6 py-8 text-center text-zinc-900 md:px-10 md:py-10">
                <Image src="/logo_vydhra_light.png" alt="Vydhra" width={120} height={36} className="mx-auto mb-4 h-8 w-auto" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Certificate of Participation</p>
                <p className="mt-4 text-xs text-zinc-500">This is to certify that</p>
                <p className="my-2 font-serif text-2xl italic text-zinc-900 md:text-3xl">Your Name</p>
                <p className="mx-auto max-w-xs text-xs text-zinc-600">
                  has successfully participated in the live workshop
                  <br />
                  <span className="font-bold text-zinc-900">AI in Coding: Build 10x Faster with AI</span>
                  <br />
                  held on {WORKSHOP.dateLabel.replace("Sunday, ", "")}
                </p>
                <div className="mt-6 flex items-end justify-between text-[10px] text-zinc-500">
                  <div className="text-left">
                    <div className="mb-1 h-px w-20 bg-zinc-400" />
                    Vydhra Academy
                  </div>
                  <span className="material-icons text-4xl text-primary">workspace_premium</span>
                  <div className="text-right">
                    <div className="mb-1 h-px w-20 bg-zinc-400" />
                    Ramesys Pvt. Ltd.
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">Sample certificate · illustrative</p>
          </div>
        </div>
      </section>

      {/* ───────────── WHO IT'S FOR ───────────── */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 lg:col-span-3">
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">
              This workshop is for you if…
            </h2>
            <ul className="space-y-4">
              {FOR_YOU.map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <span className="material-icons text-primary">done</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-muted p-8 md:p-10 lg:col-span-2">
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">Skip it if…</h2>
            <ul className="space-y-4">
              {NOT_FOR_YOU.map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground">
                  <span className="material-icons text-muted-foreground">remove</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── GUARANTEE + LEGITIMACY ───────────── */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col items-center gap-6 rounded-[2rem] border-2 border-dashed border-primary/40 bg-primary/5 p-10 text-center md:flex-row md:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <span className="material-icons text-5xl">verified_user</span>
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">
                Zero-risk, 100% refund guarantee
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Attend the first 30 minutes. If you don&apos;t feel it&apos;s worth far more than ₹{WORKSHOP.price}, message
                us and we&apos;ll refund every rupee. No questions asked.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: "business", t: "Registered company", d: "Operated by Ramesys Private Limited" },
              { icon: "lock", t: "Secure payments", d: "Processed by Razorpay · UPI, cards, netbanking" },
              { icon: "support_agent", t: "Real humans", d: "WhatsApp support before & after the workshop" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="material-icons text-primary">{x.icon}</span>
                <div>
                  <p className="font-bold text-foreground">{x.t}</p>
                  <p className="text-sm text-muted-foreground">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="border-t border-border/50 bg-muted px-6 py-24 md:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Questions? Answered.
          </h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card px-6 py-5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-foreground [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="material-icons text-primary transition-transform group-open:rotate-45">add</span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Still unsure?{" "}
            <a
              href={`https://wa.me/${WORKSHOP.whatsappNumber}?text=${encodeURIComponent(`Hi Vydhra, I have a question about the ${WORKSHOP.shortTitle} on ${WORKSHOP.dateShort}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* ───────────── FINAL CTA + FORM ───────────── */}
      <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-12">
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[600px] -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-5xl">
              The developers who learn AI now <span className="text-primary">win the next decade</span>
            </h2>
            <p className="mb-8 text-lg text-zinc-400">
              {WORKSHOP.dateLabel} · {WORKSHOP.timeLabel}. Registration closes {WORKSHOP.registrationClosesLabel} or when{" "}
              {WORKSHOP.seatCap} seats fill, whichever comes first.
            </p>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">Workshop starts in</p>
            <div className="max-w-sm">
              <Countdown to={WORKSHOP.startsAt} tone="dark" />
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-zinc-400">
              <SiZoom className="h-6 w-6 text-[#2D8CFF]" />
              Zoom link + reminders sent on WhatsApp &amp; email
            </div>
          </div>
          <div className="text-foreground">
            <RegistrationCard id="register-bottom" />
          </div>
        </div>
      </section>

      <StickyCTA />
    </main>
  );
}
