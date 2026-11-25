// Single source of truth for the "Beyond ChatGPT: Become an AI Power User" workshop page.
// Event details, pricing, inclusions and FAQ copy all live here. Update this file, not page.tsx.
//
// ⚠️ Values marked PROVISIONAL must be confirmed by the organisers before promotion.

export const WORKSHOP = {
  title: "Beyond ChatGPT: Become an AI Power User",
  shortTitle: "AI Power User Workshop",
  tagline: "Stop Just Chatting. Start Getting Things Done.",
  supportingTagline: "Better Prompts. Smarter Tools. Real AI Workflows.",

  // PROVISIONAL: date, time and price carried over from the previous page, pending confirmation.
  dateLabel: "Sunday, 29 November 2026",
  dateShort: "29 Nov",
  startsAt: "2026-11-29T11:00:00+05:30",
  endsAt: "2026-11-29T13:00:00+05:30",
  timeLabel: "11:00 AM – 1:00 PM IST",
  timezone: "IST",
  durationLabel: "2 Hours",
  format: "Live Online",

  // Fee in INR. Set to 0 to show a plain "Reserve My Seat" button.
  price: 99,

  // e.g. "Zoom" or "Google Meet". null = show only "Live Online".
  meetingPlatform: null as string | null,

  // Set to true only when date, time and price are confirmed (allows search indexing).
  confirmed: false,

  // Set NEXT_PUBLIC_WORKSHOP_PAYMENT_URL to a Razorpay Payment Page link (e.g. https://rzp.io/l/xxxx).
  // Until then, the form opens WhatsApp with a pre-filled registration message.
  paymentUrl: process.env.NEXT_PUBLIC_WORKSHOP_PAYMENT_URL || "",
  whatsappNumber: "919477912256",
  supportEmail: "support@vydhra.com",

  // ── Conditional content: leave null until confirmed. null = not shown anywhere on the page. ──
  // e.g. "All registered attendees get access to the recording for 7 days after the session."
  recording: null as string | null,
  // e.g. "Attendees who join the live session receive a digital certificate of participation by email."
  certificate: null as string | null,
  // Official refund terms. null hides the refund FAQ.
  refundPolicyUrl: "/terms" as string | null,
};

export const hasFee = WORKSHOP.price > 0;
export const payLabel = hasFee ? `Pay ₹${WORKSHOP.price} & Reserve My Seat` : "Reserve My Seat";

// Where the user goes after submitting the on-page form.
export function getPaymentUrl(details?: { name: string; email: string; phone: string }) {
  if (WORKSHOP.paymentUrl) return WORKSHOP.paymentUrl;
  const who = details ? `\n\nName: ${details.name}\nEmail: ${details.email}\nWhatsApp: ${details.phone}` : "";
  const fee = hasFee ? ` for ₹${WORKSHOP.price}. Please share the payment link.` : ".";
  const msg = `Hi Vydhra,\n\nI'd like to register for "${WORKSHOP.title}" on ${WORKSHOP.dateLabel} (${WORKSHOP.timeLabel})${fee}${who}\n\nThank you!`;
  return `https://wa.me/${WORKSHOP.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// Verified presenter details only. null = show a "Vydhra workshop team" attribution instead.
export const PRESENTER = null as null | {
  name: string;
  designation: string;
  experience: string;
  photo: string; // path under /public
  intro: string;
};

export const HERO_POINTS = [
  "Better prompts, context engineering & reusable workflows",
  "Real demonstrations with AI tools and integrations",
  "Practical AI skills for everyday work and learning",
];

export const BEFORE_AFTER = [
  {
    before: "Ask AI to write an email.",
    after: "Draft, critique, refine, and verify the message using a structured prompt loop.",
  },
  {
    before: "Keep using one long AI conversation for everything.",
    after: "Manage context, identify outdated instructions, and create structured handoffs.",
  },
  {
    before: "Generate an image again whenever something needs changing.",
    after: "Use AI with an editable design workflow to make targeted changes.",
  },
];

export const SKILLS = [
  {
    icon: "tune",
    title: "Advanced Prompt Engineering",
    text: "Use context, examples, structured instructions, XML-style organisation, and iterative prompt loops to get better results.",
  },
  {
    icon: "layers",
    title: "Context Engineering",
    text: "Understand context windows, why long AI conversations can become confusing, and how to organise important information for ongoing work.",
  },
  {
    icon: "fact_check",
    title: "AI Reliability & Evaluation",
    text: "Test prompts, question AI outputs, check sources, and identify incorrect or unsupported answers.",
  },
  {
    icon: "assistant",
    title: "Reusable AI Assistants",
    text: "Explore Projects, reusable instructions, Skills, and task-specific workflows so you don't have to repeat the same prompts.",
  },
  {
    icon: "hub",
    title: "The AI Ecosystem",
    text: "Learn which tools are useful for writing, research, image generation, editable designs, coding, and connected workflows.",
  },
  {
    icon: "smart_toy",
    title: "AI Agents",
    text: "Understand how AI agents can use permitted tools, perform multi-step tasks, and support real-world work with human oversight.",
  },
];

export type DemoTool = "chatgpt" | "claude" | "gemini" | "canva" | "copilot";

export const DEMOS = [
  {
    icon: "mail",
    topic: "Professional emails using prompt loops",
    title: "Don't Accept the First AI Draft.",
    text: "Watch an ordinary professional email become clearer and more effective through drafting, criticism, refinement, and verification.",
    technique: "Prompt Loops",
    tools: [] as DemoTool[],
  },
  {
    icon: "forum",
    topic: "Managing long AI conversations",
    title: "When Your AI Chat Gets Too Long.",
    text: "See how conflicting instructions and outdated requirements affect responses, then prepare a structured context handoff and continue with clearer information.",
    technique: "Context Engineering",
    tools: [] as DemoTool[],
  },
  {
    icon: "inventory_2",
    topic: "Reusable AI assistants",
    title: "Stop Rewriting the Same Prompts.",
    text: "See how reusable instructions, Projects, and Skills turn repeatable tasks into organised AI workflows.",
    technique: "Reusable Instructions & AI Assistants",
    tools: [] as DemoTool[],
  },
  {
    icon: "palette",
    topic: "ChatGPT + Canva",
    title: "Stop Regenerating. Start Editing.",
    text: "See how an AI-connected design workflow creates an editable poster, changes its wording, and refines the layout without rebuilding everything.",
    technique: "AI Integrations",
    tools: ["chatgpt", "canva"] as DemoTool[],
  },
  {
    icon: "alt_route",
    topic: "Choosing the right AI tool",
    title: "Use the Right AI for the Right Job.",
    text: "When to use general AI assistants, Gemini's image capabilities, Canva for editable designs, and GitHub Copilot with VS Code for software development.",
    technique: "AI Tool Selection",
    tools: ["claude", "gemini", "copilot"] as DemoTool[],
  },
  {
    icon: "support_agent",
    topic: "AI agents in action",
    title: "From Answering Questions to Taking Action.",
    text: "A controlled demonstration where an AI agent uses permitted tools to investigate a fictional customer issue and prepare its next steps.",
    technique: "AI Agents & Tool Use",
    tools: [] as DemoTool[],
  },
];

export const SYLLABUS = [
  {
    title: "Beyond Basic ChatGPT",
    minutes: 6,
    text: "Move beyond basic questions and use AI for meaningful everyday work.",
    detailLabel: "Includes",
    detail: "AI capabilities, choosing useful outcomes, and the workshop roadmap.",
  },
  {
    title: "Advanced Prompt Engineering",
    minutes: 18,
    text: "Prompt structure, context, examples, XML-style organisation, and iterative prompting.",
    detailLabel: "Featured example",
    detail: "Professional email prompt loop.",
  },
  {
    title: "Context Windows & Context Engineering",
    minutes: 10,
    text: "Context limits, long-chat challenges, conflicting instructions, and structured context handoffs.",
    detailLabel: "Featured example",
    detail: "Continuing a complex project in a fresh conversation.",
  },
  {
    title: "AI Reliability & Evaluation",
    minutes: 9,
    text: "Why AI makes mistakes, how to test prompts, verify important claims, and improve consistency.",
    detailLabel: "Featured example",
    detail: "Testing a reusable prompt across several situations.",
  },
  {
    title: "Projects, Skills & Reusable AI Assistants",
    minutes: 15,
    text: "Reusable instructions, organised project context, and task-specific AI capabilities.",
    detailLabel: "Featured example",
    detail: "Turning a repeated email-writing process into a reusable assistant workflow.",
  },
  {
    title: "Choosing the Right AI Tools",
    minutes: 12,
    text: "The strengths and appropriate uses of different AI tools. An ecosystem overview, not a full training course on every tool.",
    topics: [
      "ChatGPT and Claude for general AI assistance",
      "Gemini for multimodal and image-related capabilities",
      "Canva for editable design",
      "Research-enabled AI tools for evidence gathering",
      "VS Code, GitHub and GitHub Copilot for developer workflows",
    ],
  },
  {
    title: "AI Integrations & Smart Workflows",
    minutes: 13,
    text: "How AI becomes more useful when connected to the tools where you actually work, and the difference between a one-off prompt and a repeatable process.",
    detailLabel: "Featured example",
    detail: "ChatGPT and Canva editable design workflow.",
  },
  {
    title: "AI Agents",
    minutes: 12,
    text: "The difference between chatbots, workflows, and agents, including permissions, approval, and safety considerations.",
    detailLabel: "Featured example",
    detail: "A prepared tool-using agent investigating a fictional customer issue.",
  },
  {
    title: "Key Takeaways",
    minutes: 5,
    text: "Review the most useful skills and leave with a practical starting plan.",
  },
] as {
  title: string;
  minutes: number;
  text: string;
  detailLabel?: string;
  detail?: string;
  topics?: string[];
}[];

export const TIMING = {
  teaching: SYLLABUS.reduce((s, m) => s + m.minutes, 0), // 100
  flexibility: 5,
  qa: 15,
};

export const AUDIENCE = [
  {
    icon: "school",
    title: "Students & Freshers",
    text: "Use AI to improve learning, research, career preparation, project planning, and problem-solving.",
  },
  {
    icon: "work",
    title: "Working Professionals",
    text: "Improve communication, documentation, planning, analysis, and everyday productivity.",
  },
  {
    icon: "brush",
    title: "Freelancers & Creators",
    text: "Create content, refine designs, manage client communication, and reuse successful workflows.",
  },
  {
    icon: "storefront",
    title: "Entrepreneurs & Business Owners",
    text: "See how AI can support customer communication, business decisions, research, and operational efficiency.",
  },
];

export const INCLUSIONS = [
  { icon: "live_tv", text: "Live online workshop" },
  { icon: "slideshow", text: "Practical AI demonstrations" },
  { icon: "tune", text: "Advanced prompting techniques" },
  { icon: "layers", text: "Context engineering and reliability concepts" },
  { icon: "hub", text: "AI tool ecosystem overview" },
  { icon: "smart_toy", text: "Introduction to reusable assistants and AI agents" },
  { icon: "question_answer", text: "Audience questions and discussion" },
];

// Set confirmed: true only once the resource is prepared and will actually be delivered.
export const OPTIONAL_RESOURCES = [
  { icon: "description", text: "Reusable prompt templates", confirmed: false },
  { icon: "swap_horiz", text: "Context handoff template", confirmed: false },
  { icon: "checklist", text: "AI Power User checklist", confirmed: false },
  { icon: "rule", text: "Prompt testing checklist", confirmed: false },
  { icon: "replay", text: "Workshop recording", confirmed: WORKSHOP.recording !== null },
  { icon: "workspace_premium", text: "Certificate of participation", confirmed: WORKSHOP.certificate !== null },
];

export type Faq = { q: string; a: string; link?: { href: string; label: string } };

export const FAQS: Faq[] = [
  {
    q: "Do I need coding knowledge?",
    a: "No. This workshop is designed for students, professionals, freelancers, and business owners. No programming knowledge is required.",
  },
  {
    q: "Do I need previous AI experience?",
    a: "Basic familiarity with ChatGPT, Gemini, or another AI assistant is helpful. The session introduces advanced techniques using understandable examples.",
  },
  {
    q: "Is this a hands-on workshop?",
    a: "It is a live, presentation-led workshop featuring practical demonstrations and opportunities for audience interaction. You can try the techniques afterward.",
  },
  {
    q: "Which AI tools will be covered?",
    a: "We will discuss ChatGPT, Claude, Gemini, Canva, GitHub Copilot, and other relevant tools. Selected workflows will be demonstrated, but this is not a full training course for every product.",
  },
  {
    q: "Will we build an AI agent?",
    a: "You will learn how agents work and see a prepared demonstration. Building a production-grade agent is not part of this introductory two-hour session.",
  },
  {
    q: "Do I need paid AI subscriptions?",
    a: "No paid subscription is required to understand the workshop concepts. Some demonstrated features may depend on the presenter's account, tool availability, or paid access.",
  },
  {
    q: "Can I ask questions during the session?",
    a: "Yes. There will be opportunities for brief questions and a dedicated discussion period toward the end.",
  },
  {
    q: "How will I receive the joining details?",
    a: "After registration, joining instructions will be shared with you by the Vydhra team using the contact details you provide.",
  },
  ...(WORKSHOP.recording ? [{ q: "Will a recording be available?", a: WORKSHOP.recording }] : []),
  ...(WORKSHOP.certificate ? [{ q: "Will I receive a certificate?", a: WORKSHOP.certificate }] : []),
  ...(WORKSHOP.refundPolicyUrl
    ? [
        {
          q: "What is the refund policy?",
          a: "Refunds are handled under the Refund & Cancellation Policy in our Terms & Conditions.",
          link: { href: WORKSHOP.refundPolicyUrl, label: "Read the refund policy" },
        },
      ]
    : []),
];
