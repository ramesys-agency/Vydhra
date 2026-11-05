// Single source of truth for the AI-in-Coding workshop landing page.
// Edit copy, timings, pricing and the registration link here.

export const WORKSHOP = {
  title: "AI in Coding: Build 10x Faster with AI",
  shortTitle: "AI in Coding Workshop",
  dateLabel: "Sunday, 29 November 2026",
  dateShort: "29 Nov",
  timeLabel: "11:00 AM – 2:00 PM IST",
  durationLabel: "3 Hours · Live on Zoom",
  // ISO start time, used by the countdown
  startsAt: "2026-11-29T11:00:00+05:30",
  price: 99,
  originalPrice: 1999,
  seatCap: 300,
  // Manually update as registrations come in (shows a "seats booked" bar). null = hidden.
  seatsFilled: null as number | null,

  // Urgency: early-bird bonuses expire at this time, then registration closes.
  // Make sure the team actually honours these deadlines.
  earlyBirdEndsAt: "2026-11-25T23:59:59+05:30",
  earlyBirdLabel: "25 Nov, 11:59 PM",
  registrationClosesAt: "2026-11-28T23:59:59+05:30",
  registrationClosesLabel: "28 Nov, 11:59 PM",

  // Set NEXT_PUBLIC_WORKSHOP_PAYMENT_URL to a Razorpay Payment Page link
  // (e.g. https://rzp.io/l/xxxx) to collect ₹99 directly.
  // Until then, the CTA opens WhatsApp with a pre-filled registration message.
  paymentUrl: process.env.NEXT_PUBLIC_WORKSHOP_PAYMENT_URL || "",
  whatsappNumber: "919477912256",
};

// Where the user goes after submitting the on-page form.
export function getPaymentUrl(details?: { name: string; email: string; phone: string }) {
  if (WORKSHOP.paymentUrl) return WORKSHOP.paymentUrl;
  const who = details ? `\n\nName: ${details.name}\nEmail: ${details.email}\nWhatsApp: ${details.phone}` : "";
  const msg = `Hi Vydhra,\n\nI'd like to register for the "${WORKSHOP.shortTitle}" on ${WORKSHOP.dateLabel} (${WORKSHOP.timeLabel}) for ₹${WORKSHOP.price}. Please share the payment link.${who}\n\nThank you!`;
  return `https://wa.me/${WORKSHOP.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// ── Real proof. Leave empty to hide; fill with REAL figures only. ──
export const PROOF = {
  // e.g. "2,500+"
  learnersTrained: "",
  // Companies where Vydhra / Ramesys-trained learners now work, e.g. ["TCS", "Infosys"]
  alumniCompanies: [] as string[],
  // Named clients / projects Ramesys has delivered, e.g. [{ name: "Acme Retail", work: "AI demand forecasting" }]
  ramesysProjects: [] as { name: string; work: string }[],
};

// What Ramesys builds (from ramesys.co.uk)
export const RAMESYS_SERVICES = [
  { icon: "language", title: "Website Engineering", text: "Code-first, production web platforms." },
  { icon: "smartphone", title: "Web & Mobile Apps", text: "Full-stack applications for real clients." },
  { icon: "psychology", title: "Data Science & AI/ML", text: "LLM training, ML models and AI integrations." },
  { icon: "insights", title: "Analytics & BI", text: "Power BI dashboards and data pipelines." },
];

export const TEAM_ROLES = [
  { icon: "smart_toy", role: "AI / ML Engineers", text: "Build and fine-tune LLM-powered features for clients." },
  { icon: "dns", role: "Full-Stack Developers", text: "Ship web & mobile apps with AI agents in the loop daily." },
  { icon: "query_stats", role: "Data Engineers", text: "Run the pipelines and dashboards behind AI products." },
];

export const OUTCOMES = [
  {
    icon: "bolt",
    title: "Ship features in hours, not days",
    text: "A repeatable AI workflow to go from idea → working code → tested PR, without copy-pasting from chat windows.",
  },
  {
    icon: "terminal",
    title: "Use AI coding agents properly",
    text: "Hands-on with Claude Code, Cursor and GitHub Copilot: when to use which, and how to steer them on real codebases.",
  },
  {
    icon: "bug_report",
    title: "Debug & refactor with confidence",
    text: "Let AI trace bugs, write tests and refactor legacy code, while you stay in control of what ships.",
  },
  {
    icon: "verified_user",
    title: "Spot bad AI code instantly",
    text: "Catch hallucinated APIs, security holes and silent bugs before they reach production.",
  },
  {
    icon: "chat",
    title: "Prompt like a senior engineer",
    text: "Context, constraints and examples: the prompt patterns that turn vague output into production-grade code.",
  },
  {
    icon: "work",
    title: "Stand out in interviews",
    text: "How hiring teams now evaluate AI-assisted developers, and how to show it in your portfolio.",
  },
];

export const AGENDA = [
  {
    time: "11:00",
    title: "The AI-native developer workflow",
    text: "How working engineers actually use AI day-to-day. What's hype, what's real, and where AI saves (and wastes) time.",
  },
  {
    time: "11:25",
    title: "Prompting for code that works",
    text: "Context windows, specs, constraints and few-shot examples. Live before/after comparisons on the same task.",
  },
  {
    time: "12:00",
    title: "Live build: a full-stack app from zero",
    text: "We build and deploy a working app on screen using an AI coding agent. You follow along on your laptop.",
  },
  {
    time: "12:50",
    title: "Debugging, tests & refactoring with AI",
    text: "Feed AI a real bug, have it write tests, then refactor messy code safely, step by step.",
  },
  {
    time: "13:25",
    title: "Reviewing AI code: security & pitfalls",
    text: "A checklist to review AI output: hallucinated packages, injection risks, leaked secrets and edge cases.",
  },
  {
    time: "13:45",
    title: "Career roadmap + live Q&A",
    text: "Which AI skills companies hire for in 2026, how to build proof of work, and your questions answered.",
  },
];

// earlyBird: true → only for those who register before WORKSHOP.earlyBirdEndsAt
export const BONUSES = [
  { item: "3-hour live, hands-on workshop", value: 1999, icon: "live_tv", earlyBird: false },
  { item: "7-day access to the full recording", value: 999, icon: "replay", earlyBird: false },
  { item: "Certificate of participation from Vydhra", value: 499, icon: "workspace_premium", earlyBird: false },
  { item: "AI Coding Prompt Playbook (50+ tested prompts)", value: 799, icon: "menu_book", earlyBird: true },
  { item: "Source code of the app we build live", value: 499, icon: "folder_zip", earlyBird: true },
  { item: "Code-review checklist for AI-generated code", value: 299, icon: "fact_check", earlyBird: true },
  { item: "Exclusive attendee discount on Vydhra bootcamps", value: 2000, icon: "local_offer", earlyBird: true },
];

export const EARLY_BIRD_VALUE = BONUSES.filter((b) => b.earlyBird).reduce((s, b) => s + b.value, 0);

export const FOR_YOU = [
  "Students and freshers who want to code faster and stand out to recruiters",
  "Working developers who use ChatGPT occasionally but don't have a real AI workflow",
  "Career switchers learning to code who want to skip months of trial-and-error",
  "Tech leads and founders evaluating how AI tools fit into their team",
];

export const NOT_FOR_YOU = [
  "You want a passive lecture: this is hands-on, keep your laptop open",
  "You expect AI to replace learning fundamentals: it amplifies skills, it doesn't replace them",
];

export const FAQS = [
  {
    q: "Do I need coding experience?",
    a: "Basic familiarity with any programming language helps. Absolute beginners can still follow along: we explain every step, and you get the recording to revisit.",
  },
  {
    q: "Which tools do I need installed?",
    a: "A laptop with VS Code and a free GitHub account. We'll share a short setup guide on WhatsApp/email after you register. Free tiers of every tool we use are enough.",
  },
  {
    q: "Is it live or pre-recorded?",
    a: `100% live on ${WORKSHOP.dateLabel}, ${WORKSHOP.timeLabel}. You can ask questions in real time. A recording is shared with all registered attendees for 7 days.`,
  },
  {
    q: "Why is it only ₹99?",
    a: "We want serious learners in the room, not freebie collectors. The ₹99 keeps attendance high and lets you experience how Vydhra teaches before considering a full bootcamp.",
  },
  {
    q: "How will I receive the joining link?",
    a: "Right after payment you'll get a confirmation, and the Zoom link + reminders are sent on WhatsApp and email before the session.",
  },
  {
    q: "What if I can't attend live?",
    a: "Register anyway: you'll receive the recording, the source code and the prompt playbook.",
  },
  {
    q: "Is my payment secure?",
    a: "Yes. Payments are processed by Razorpay, India's leading payment gateway, via UPI, cards or netbanking. Vydhra never sees your card or UPI details. Vydhra is operated by Ramesys Private Limited, a registered software company.",
  },
  {
    q: "Is there a refund?",
    a: "Yes. If you attend the first 30 minutes and feel it's not worth it, message us and we'll refund your ₹99. No questions asked.",
  },
];
