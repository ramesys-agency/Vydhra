import type { Metadata } from "next";
import Link from "next/link";
import AgentApplyForm from "./AgentApplyForm";

export const metadata: Metadata = {
  title: "Referral Program – Vydhra",
  description:
    "Refer friends to Vydhra bootcamps and earn rewards. Students get a referral code automatically on enrollment; industry professionals can apply to become referral agents.",
};

const ADMIN_API_URL =
  process.env.ADMIN_API_URL ||
  process.env.NEXT_PUBLIC_ADMIN_API_URL ||
  "http://127.0.0.1:3002";

type RateType = "PERCENTAGE" | "FLAT";

interface ProgramRates {
  studentReferralEnabled: boolean;
  studentDiscountType: RateType;
  studentDiscountValue: number;
  studentCommissionType: RateType;
  studentCommissionValue: number;
  agentDiscountType: RateType;
  agentDiscountValue: number;
  agentCommissionType: RateType;
  agentCommissionValue: number;
}

// Matches the schema defaults in the admin backend — used when the
// backend is unreachable so the page still renders.
const fallbackRates: ProgramRates = {
  studentReferralEnabled: true,
  studentDiscountType: "PERCENTAGE",
  studentDiscountValue: 10,
  studentCommissionType: "PERCENTAGE",
  studentCommissionValue: 10,
  agentDiscountType: "PERCENTAGE",
  agentDiscountValue: 10,
  agentCommissionType: "PERCENTAGE",
  agentCommissionValue: 10,
};

// FLAT rates are denominated in USD.
const fmtRate = (type: RateType, value: number) =>
  type === "PERCENTAGE" ? `${value}%` : `$${value}`;

async function getProgramRates(): Promise<ProgramRates> {
  try {
    const res = await fetch(`${ADMIN_API_URL}/api/public/vydhra/referral-program`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return fallbackRates;
    return (await res.json()) as ProgramRates;
  } catch {
    return fallbackRates;
  }
}

export default async function ReferralsPage() {
  const rates = await getProgramRates();

  const studentDiscount = fmtRate(rates.studentDiscountType, rates.studentDiscountValue);
  const studentCommission = fmtRate(rates.studentCommissionType, rates.studentCommissionValue);
  const agentDiscount = fmtRate(rates.agentDiscountType, rates.agentDiscountValue);
  const agentCommission = fmtRate(rates.agentCommissionType, rates.agentCommissionValue);

  const studentSteps = [
    {
      icon: "shopping_cart",
      title: "Enroll in any course",
      text: "Purchase any Vydhra bootcamp. No sign-up, no forms — enrolling makes you part of the referral program automatically.",
    },
    {
      icon: "mark_email_read",
      title: "Get your code by email",
      text: "Right after your payment succeeds, your enrollment confirmation email includes your personal referral code with instructions.",
    },
    {
      icon: "share",
      title: "Share with friends",
      text: `Your friend enters your code in the "coupon or referral code" field at checkout and instantly gets ${studentDiscount} off their course.`,
    },
    {
      icon: "payments",
      title: "Earn on every enrollment",
      text: `You earn ${rates.studentCommissionType === "PERCENTAGE" ? `${rates.studentCommissionValue}% of the course fee` : `$${rates.studentCommissionValue}`} (credited in USD) every time someone enrolls with your code — and we email you each time it happens.`,
    },
  ];

  const agentPerks = [
    {
      icon: "badge",
      title: "Your own agent code",
      text: "Once approved, you get a unique agent code to share with your audience and network.",
    },
    {
      icon: "sell",
      title: `${agentDiscount} discount for your referrals`,
      text: `Everyone who enrolls with your code gets ${agentDiscount} off their course fee — a real incentive to use your code.`,
    },
    {
      icon: "account_balance_wallet",
      title: `${agentCommission} commission per enrollment`,
      text: `Earn ${rates.agentCommissionType === "PERCENTAGE" ? `${rates.agentCommissionValue}% of the course fee` : `$${rates.agentCommissionValue}`} on every successful enrollment. Earnings are tracked in USD and settled as per your payout schedule.`,
    },
    {
      icon: "insights",
      title: "Transparent tracking",
      text: "Every enrollment through your code is recorded automatically at payment time, and you're notified by email for each earning.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase mb-6 border border-primary/20">
            Referral Program
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-foreground mb-6">
            Share Vydhra. <span className="text-primary">Earn rewards.</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our referral program rewards the people who help others level up.
            Whether you&apos;re a <strong className="text-foreground">student</strong> who
            loved a bootcamp or an <strong className="text-foreground">industry
            professional</strong> with a network to share, there&apos;s a track for you —
            and both sides win: your referral gets a discount, you earn a commission.
          </p>
        </div>
      </section>

      {/* Two tracks summary */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <a
            href="#students"
            className="bg-card p-8 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-icons text-primary text-2xl">school</span>
            </div>
            <h2 className="text-xl font-black text-foreground mb-2">For Students</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Enrolled in a Vydhra course? You&apos;re already in. Your personal
              referral code arrives by email the moment your enrollment is
              confirmed — no application needed.
            </p>
            <span className="inline-flex items-center gap-1 font-bold text-primary text-sm">
              See how it works
              <span className="material-icons text-sm">arrow_downward</span>
            </span>
          </a>
          <a
            href="#agents"
            className="bg-card p-8 rounded-[2rem] border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-icons text-primary text-2xl">handshake</span>
            </div>
            <h2 className="text-xl font-black text-foreground mb-2">For Agents</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              In the education, training, or career-services industry? Apply to
              become an official Vydhra referral agent and earn a commission on
              every enrollment you bring in.
            </p>
            <span className="inline-flex items-center gap-1 font-bold text-primary text-sm">
              Apply below
              <span className="material-icons text-sm">arrow_downward</span>
            </span>
          </a>
        </div>
      </section>

      {/* Students */}
      <section id="students" className="px-6 md:px-12 py-20 bg-card border-y border-border scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase mb-6 border border-primary/20">
              Student Referrals
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4">
              Every student is a <span className="text-primary">referrer</span>. Automatically.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              There is <strong className="text-foreground">no form to fill and nothing
              to apply for</strong>. When you purchase any Vydhra course, you will
              receive an email containing your personal referral code along with
              instructions on how to use it. Share that code with friends: they
              save <strong className="text-foreground">{studentDiscount}</strong> on
              their course, and you earn{" "}
              <strong className="text-foreground">{studentCommission}</strong>{" "}
              {rates.studentCommissionType === "PERCENTAGE" ? "of the course fee " : ""}
              on every enrollment made with your code.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {studentSteps.map((step, i) => (
              <div
                key={step.title}
                className="bg-background p-6 rounded-[2rem] border border-border relative overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-4xl font-black text-primary/10">
                  {i + 1}
                </span>
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="material-icons text-primary text-xl">{step.icon}</span>
                </div>
                <h3 className="text-base font-black text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* No-form instruction callout */}
          <div className="bg-primary/5 border border-primary/20 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-icons text-primary text-3xl">mark_email_unread</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-black text-foreground mb-1">
                No form needed — just enroll
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                On purchase of a course, you will get an email having your
                referral code and everything you need to start sharing it. Your
                earnings are tracked in USD and paid out periodically by the
                Vydhra team.
              </p>
            </div>
            <Link
              href="/courses"
              className="shrink-0 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-orange-600 transition-all shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
            >
              Browse Courses
              <span className="material-icons text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section id="agents" className="px-6 md:px-12 py-20 scroll-mt-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase mb-6 border border-primary/20">
              Agent Referrals
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4">
              Partner with us as a <span className="text-primary">referral agent</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              The agent track is built for people <strong className="text-foreground">already
              working in this industry</strong> — trainers, career counselors,
              placement consultants, edtech creators, and community leaders who
              regularly guide learners toward the right courses. Unlike the
              student track, agents apply and are onboarded by our team with a
              dedicated agent code and a payout schedule.
            </p>
            <div className="space-y-6">
              {agentPerks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-icons text-primary text-xl">{perk.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-foreground mb-1">{perk.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{perk.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-[2.5rem] blur-2xl -z-10" />
            <div className="bg-card p-8 md:p-10 rounded-[2.5rem] border border-border shadow-2xl backdrop-blur-xl relative z-10">
              <AgentApplyForm />
            </div>
          </div>
        </div>
      </section>

      {/* Fine print */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto bg-card border border-border rounded-[2rem] p-8 md:p-10">
          <h2 className="text-lg font-black text-foreground mb-6 uppercase tracking-tight">
            Good to know
          </h2>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary text-base mt-0.5">check_circle</span>
              Referral codes are applied in the &quot;coupon or referral code&quot;
              field at checkout. One code can be used per purchase.
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary text-base mt-0.5">check_circle</span>
              Rewards are credited only after the referred payment completes
              successfully. Self-referrals are not eligible.
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary text-base mt-0.5">check_circle</span>
              All referral earnings are tracked in USD, regardless of the
              currency the course was purchased in.
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary text-base mt-0.5">check_circle</span>
              Payouts are settled periodically by the Vydhra team. For payout
              questions, write to{" "}
              <a href="mailto:support@vydhra.com" className="text-primary font-bold hover:underline ml-1">
                support@vydhra.com
              </a>.
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary text-base mt-0.5">check_circle</span>
              Discount and commission rates shown on this page are the current
              program defaults and may be revised by Vydhra.
            </li>
            <li className="flex items-start gap-3">
              <span className="material-icons text-primary text-base mt-0.5">check_circle</span>
              Agent applications are reviewed manually — expect a response
              within 2-3 business days.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
