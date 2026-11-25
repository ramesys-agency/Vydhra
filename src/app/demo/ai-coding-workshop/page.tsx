import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { SiCanva, SiClaude, SiGithubcopilot, SiGooglegemini } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import WorkshopHeader from "./WorkshopHeader";
import RegisterForm from "./RegisterForm";
import StickyCTA from "./StickyCTA";
import SyllabusModule from "./SyllabusModule";
import {
  WORKSHOP,
  PRESENTER,
  HERO_POINTS,
  BEFORE_AFTER,
  SKILLS,
  DEMOS,
  SYLLABUS,
  TIMING,
  AUDIENCE,
  INCLUSIONS,
  OPTIONAL_RESOURCES,
  FAQS,
  hasFee,
  type DemoTool,
} from "./workshop.config";

const META_TITLE = "Beyond ChatGPT: AI Power User Workshop | Vydhra";
const META_DESCRIPTION =
  "Go beyond basic ChatGPT with practical AI prompting, context engineering, smarter tools, reusable assistants and AI agents in a live Vydhra workshop.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: { title: META_TITLE, description: META_DESCRIPTION, type: "website", siteName: "Vydhra" },
  // Kept out of search results until the event details are confirmed (WORKSHOP.confirmed).
  robots: WORKSHOP.confirmed
    ? undefined
    : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

const TOOL_ICONS: Record<DemoTool, { Icon: IconType; name: string }> = {
  chatgpt: { Icon: RiOpenaiFill, name: "ChatGPT" },
  claude: { Icon: SiClaude, name: "Claude" },
  gemini: { Icon: SiGooglegemini, name: "Gemini" },
  canva: { Icon: SiCanva, name: "Canva" },
  copilot: { Icon: SiGithubcopilot, name: "GitHub Copilot" },
};

const SECTION = "scroll-mt-16 px-4 py-20 sm:px-6 md:scroll-mt-20 md:px-12 md:py-24";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`material-icons ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] sm:text-sm ${dark ? "text-orange-400" : "text-primary"}`}>
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`text-balance text-3xl font-black tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1] ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {children && (
        <div className={`mt-5 space-y-3 text-base leading-relaxed md:text-lg ${dark ? "text-zinc-300" : "text-muted-foreground"}`}>
          {children}
        </div>
      )}
    </div>
  );
}

function ReserveButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#register"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:text-lg ${className}`}
    >
      Reserve My Seat
      <Icon name="arrow_forward" className="text-xl" />
    </a>
  );
}

export default function AIPowerUserWorkshopPage() {
  const resources = OPTIONAL_RESOURCES.filter((r) => r.confirmed);
  const total = TIMING.teaching + TIMING.flexibility + TIMING.qa;
  const details = [
    { icon: "event", k: "Date", v: WORKSHOP.dateLabel },
    { icon: "schedule", k: "Time", v: WORKSHOP.timeLabel },
    { icon: "videocam", k: "Format", v: WORKSHOP.meetingPlatform ? `${WORKSHOP.format} · ${WORKSHOP.meetingPlatform}` : WORKSHOP.format },
    { icon: "hourglass_bottom", k: "Duration", v: WORKSHOP.durationLabel },
  ];

  return (
    <>
      <WorkshopHeader />
      <main className="min-h-screen bg-background">
        {/* ───────────── 1. HERO + REGISTRATION ───────────── */}
        <section id="overview" className="relative scroll-mt-16 overflow-hidden px-4 pb-20 pt-10 sm:px-6 md:scroll-mt-20 md:px-12 md:pt-16">
          <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7 lg:pt-4">
              <p className="mb-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-primary sm:text-xs">
                <span>Live online AI workshop</span>
                <span aria-hidden="true">•</span>
                <span>2 hours</span>
                <span aria-hidden="true">•</span>
                <span>No coding required</span>
              </p>

              <h1 className="mb-5 text-balance text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                Beyond ChatGPT: <span className="text-primary">Become an AI Power User</span>
              </h1>
              <p className="mb-6 text-xl font-bold text-foreground sm:text-2xl">{WORKSHOP.tagline}</p>

              <div className="mb-8 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  You already know how to ask AI questions. Now learn how to get better results, manage context, create
                  reusable assistants, choose the right AI tools, and understand AI agents.
                </p>
                <p>
                  Go beyond basic prompting with practical techniques and real demonstrations you can apply to your
                  studies, career, or business.
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                {HERO_POINTS.map((t) => (
                  <li key={t} className="flex items-start gap-3 font-medium text-foreground">
                    <Icon name="check_circle" className="text-primary" />
                    {t}
                  </li>
                ))}
              </ul>

              <dl className="grid max-w-2xl grid-cols-2 gap-3">
                {details.map((m) => (
                  <div key={m.k} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 sm:p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon name={m.icon} />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{m.k}</dt>
                      <dd className="text-sm font-bold leading-snug text-foreground">{m.v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div id="register" className="scroll-mt-24 lg:sticky lg:top-28 lg:col-span-5">
              <div data-register-form className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 md:p-8">
                <div className="mb-6 border-b border-border pb-5">
                  <h2 className="text-2xl font-black tracking-tight text-foreground">Reserve your seat</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {WORKSHOP.dateLabel} · {WORKSHOP.timeLabel}
                  </p>
                  {hasFee && (
                    <p className="mt-4 flex items-baseline gap-2">
                      <span className="text-4xl font-black text-foreground">₹{WORKSHOP.price}</span>
                      <span className="text-sm font-medium text-muted-foreground">workshop fee</span>
                    </p>
                  )}
                </div>
                <RegisterForm />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── 2. WHY THIS WORKSHOP ───────────── */}
        <section id="why" className={`${SECTION} border-y border-border/60 bg-muted`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Why this workshop?" title="You're Already Using AI. But Are You Using It Effectively?">
              <p>Most people know how to ask ChatGPT to write emails, summarise information, or generate ideas.</p>
              <p>
                But using AI effectively goes further than asking questions. It&apos;s about giving the right context,
                improving outputs, choosing appropriate tools, and turning repetitive tasks into reusable processes.
              </p>
            </SectionHeading>

            <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {BEFORE_AFTER.map((c) => (
                <li key={c.before} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Before</p>
                    <p className="font-medium text-muted-foreground">{c.before}</p>
                  </div>
                  <div className="relative flex-1 border-t border-primary/20 bg-primary/5 p-6">
                    <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-md">
                      <Icon name="arrow_downward" className="text-lg" />
                    </span>
                    <p className="mb-2 mt-1 text-xs font-bold uppercase tracking-widest text-primary">After</p>
                    <p className="font-semibold text-foreground">{c.after}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-xl font-bold text-foreground md:text-2xl">
              The difference isn&apos;t just which AI tool you use. <span className="text-primary">It&apos;s how you use it.</span>
            </p>
          </div>
        </section>

        {/* ───────────── 3. WHAT YOU'LL LEARN ───────────── */}
        <section id="learn" className={SECTION}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="What you'll learn" title="Six Skills That Change How You Use AI">
              <p>Practical techniques that help you get more value from the AI tools you already use.</p>
            </SectionHeading>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((s) => (
                <li
                  key={s.title}
                  className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg motion-safe:hover:-translate-y-1"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon name={s.icon} className="text-2xl" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">{s.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────── 4. LIVE DEMONSTRATIONS ───────────── */}
        <section id="demos" className={`${SECTION} relative overflow-hidden bg-zinc-950 text-white`}>
          <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHeading dark eyebrow="See AI in action" title="Real Problems. Smarter AI Workflows.">
              <p>
                No basic chatbot tutorials. Discover useful techniques through familiar situations and practical
                demonstrations.
              </p>
            </SectionHeading>

            <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DEMOS.map((d, i) => (
                <li
                  key={d.title}
                  className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-primary/60 hover:bg-white/[0.06]"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                      <Icon name={d.icon} className="text-2xl" />
                    </span>
                    <span className="font-mono text-xs font-bold text-zinc-400">Demo {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">{d.topic}</p>
                  <h3 className="mb-3 text-xl font-bold tracking-tight">{d.title}</h3>
                  <p className="mb-6 flex-1 leading-relaxed text-zinc-300">{d.text}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-orange-300">{d.technique}</span>
                    {d.tools.length > 0 && (
                      <span className="flex items-center gap-2.5 text-zinc-300">
                        {d.tools.map((t) => {
                          const { Icon: ToolIcon, name } = TOOL_ICONS[t];
                          return <ToolIcon key={t} className="h-5 w-5" title={name} aria-label={name} />;
                        })}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-center text-sm text-zinc-400">
              Demonstrations are presented live by the instructor. You&apos;ll see how each technique works and can try
              it on your own afterward.
            </p>
          </div>
        </section>

        {/* ───────────── 5. SYLLABUS ───────────── */}
        <section id="syllabus" className={SECTION}>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Eyebrow>The workshop roadmap</Eyebrow>
                <h2 className="mb-5 text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  2 Hours. From Better Prompts to AI Agents.
                </h2>
                <p className="mb-8 leading-relaxed text-muted-foreground md:text-lg">
                  A structured learning journey combining explanations, live demonstrations, and practical takeaways.
                </p>

                <div className="mb-8 rounded-2xl border border-border bg-card p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">How the 2 hours are spent</p>
                  <div className="mb-4 flex h-3 overflow-hidden rounded-full bg-muted" aria-hidden="true">
                    <span className="bg-primary" style={{ width: `${(TIMING.teaching / total) * 100}%` }} />
                    <span className="bg-orange-300" style={{ width: `${(TIMING.flexibility / total) * 100}%` }} />
                    <span className="bg-foreground" style={{ width: `${(TIMING.qa / total) * 100}%` }} />
                  </div>
                  <dl className="space-y-2 text-sm">
                    {[
                      { k: "Planned teaching", v: TIMING.teaching, dot: "bg-primary" },
                      { k: "Flexibility", v: TIMING.flexibility, dot: "bg-orange-300" },
                      { k: "Questions & discussion", v: TIMING.qa, dot: "bg-foreground" },
                    ].map((r) => (
                      <div key={r.k} className="flex items-center justify-between gap-3">
                        <dt className="flex items-center gap-2 text-muted-foreground">
                          <span className={`h-2.5 w-2.5 rounded-full ${r.dot}`} aria-hidden="true" />
                          {r.k}
                        </dt>
                        <dd className="font-bold text-foreground">{r.v} min</dd>
                      </div>
                    ))}
                    <div className="flex items-center justify-between gap-3 border-t border-border pt-2">
                      <dt className="font-bold text-foreground">Total</dt>
                      <dd className="font-black text-foreground">{total} min</dd>
                    </div>
                  </dl>
                </div>
                <ReserveButton className="hidden lg:inline-flex" />
              </div>
            </div>

            <ol className="relative space-y-4 md:before:absolute md:before:bottom-6 md:before:left-5 md:before:top-6 md:before:w-px md:before:bg-border lg:col-span-8">
              {SYLLABUS.map((m, i) => (
                <SyllabusModule key={m.title} index={i} {...m} />
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── 6. AUDIENCE + ABOUT VYDHRA ───────────── */}
        <section id="audience" className={`${SECTION} border-y border-border/60 bg-muted`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Who is this for?" title="Built for Anyone Who Wants to Use AI More Effectively." />
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCE.map((a) => (
                <li key={a.title} className="rounded-3xl border border-border bg-card p-6">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={a.icon} />
                  </span>
                  <h3 className="mb-2 font-bold text-foreground">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center font-medium text-foreground">
              <Icon name="info" className="text-primary" />
              No programming knowledge is required. Basic familiarity with AI tools is helpful but not essential.
            </p>

            <div className="mt-16 grid grid-cols-1 items-center gap-10 rounded-3xl border border-border bg-card p-7 md:p-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <Eyebrow>Learn with Vydhra</Eyebrow>
                <h2 className="mb-5 text-balance text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  Practical Technology Learning, Built Around Real-World Skills.
                </h2>
                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  <p>Vydhra focuses on practical, mentor-led technology education.</p>
                  <p>
                    Operated by{" "}
                    <a
                      href="https://www.ramesys.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:text-primary"
                    >
                      Ramesys Private Limited
                    </a>
                    , Vydhra brings technology concepts and real-world workflows into structured learning experiences.
                  </p>
                  <p>
                    This workshop focuses on useful techniques, realistic demonstrations, and skills you can continue
                    applying afterward.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2">
                {PRESENTER ? (
                  <figure className="flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center">
                    <Image
                      src={PRESENTER.photo}
                      alt={`Photo of ${PRESENTER.name}`}
                      width={96}
                      height={96}
                      className="mb-4 h-24 w-24 rounded-full object-cover"
                    />
                    <figcaption>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">Your presenter</p>
                      <p className="mt-1 text-lg font-bold text-foreground">{PRESENTER.name}</p>
                      <p className="text-sm font-medium text-foreground">{PRESENTER.designation}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{PRESENTER.experience}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{PRESENTER.intro}</p>
                    </figcaption>
                  </figure>
                ) : (
                  <div className="rounded-2xl border border-border bg-background p-6">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                      <Icon name="groups" />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">Presented by</p>
                    <p className="mt-1 text-lg font-bold text-foreground">The Vydhra workshop team</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Vydhra is owned and operated by Ramesys Private Limited.
                    </p>
                    <Link href="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                      About Vydhra <Icon name="arrow_forward" className="text-base" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── 7. WHAT YOU GET + FAQ ───────────── */}
        <section id="faqs" className={SECTION}>
          <div className="mx-auto max-w-5xl">
            <SectionHeading eyebrow="The workshop experience" title="Learn Practical AI Skills in One Focused Session." />

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUSIONS.map((x) => (
                <li key={x.text} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={x.icon} />
                  </span>
                  <span className="font-medium text-foreground">{x.text}</span>
                </li>
              ))}
            </ul>

            {resources.length > 0 && (
              <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Also included</p>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {resources.map((r) => (
                    <li key={r.text} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Icon name={r.icon} className="text-lg text-primary" />
                      {r.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mx-auto mt-20 max-w-3xl">
              <h2 className="mb-8 text-center text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQS.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-border bg-card open:shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:px-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base">{f.q}</h3>
                      <Icon
                        name="expand_more"
                        className="shrink-0 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
                      />
                    </summary>
                    <div className="px-5 pb-5 leading-relaxed text-muted-foreground md:px-6">
                      <p>{f.a}</p>
                      {f.link && (
                        <Link href={f.link.href} className="mt-2 inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                          {f.link.label} <Icon name="arrow_forward" className="text-base" />
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-muted-foreground">
                Still have a question?{" "}
                <a
                  href={`https://wa.me/${WORKSHOP.whatsappNumber}?text=${encodeURIComponent(`Hi Vydhra, I have a question about "${WORKSHOP.title}" on ${WORKSHOP.dateShort}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  Chat with us on WhatsApp
                </a>{" "}
                or email{" "}
                <a href={`mailto:${WORKSHOP.supportEmail}`} className="font-bold text-primary hover:underline">
                  {WORKSHOP.supportEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ───────────── 8. FINAL CTA ───────────── */}
        <section id="register-bottom" className={`${SECTION} bg-zinc-950 text-white`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 text-balance text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              You Already Use AI. <span className="text-orange-400">Now Learn to Use It Better.</span>
            </h2>
            <div className="mb-8 space-y-2 text-base leading-relaxed text-zinc-300 md:text-lg">
              <p>Better prompts. Smarter tools. Reusable AI workflows. A practical introduction to AI agents.</p>
              <p>Discover how to use AI more effectively in your studies, professional work, or business.</p>
            </div>
            <p className="mb-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
              {WORKSHOP.format} • {WORKSHOP.durationLabel} • No coding required
            </p>
            <ReserveButton />
          </div>
        </section>
      </main>
      <StickyCTA />
    </>
  );
}
