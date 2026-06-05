import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-primary mb-6">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12 uppercase tracking-widest font-bold">Last Updated: April 2024</p>

        <div className="prose dark:prose-invert max-w-none space-y-12">
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Vydhra (“we”, “our”, “us”) is a brand operating under <strong>Ramesys Private Limited</strong>, based in Kolkata, India.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
              We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </p>
          </section>

          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">2. Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                    <h3 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">Personal Information</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">Payment Information</h3>
                    <p className="text-muted-foreground">Payment details processed securely via Razorpay. We do not store your full payment details.</p>
                </div>
                <div>
                    <h3 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">Technical Data</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">Usage Data</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Pages visited</li>
                        <li>Time spent on website</li>
                        <li>Interaction with content</li>
                    </ul>
                </div>
            </div>
          </section>

          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">3. How We Use Your Information</h2>
            <ul className="space-y-3 text-muted-foreground text-base md:text-lg">
                <li className="flex gap-3"><span className="text-primary">●</span> Provide and manage course enrollments</li>
                <li className="flex gap-3"><span className="text-primary">●</span> Process payments securely</li>
                <li className="flex gap-3"><span className="text-primary">●</span> Communicate with you (support, updates, notifications)</li>
                <li className="flex gap-3"><span className="text-primary">●</span> Improve our platform and learning experience</li>
                <li className="flex gap-3"><span className="text-primary">●</span> Analyze user behavior for better service delivery</li>
            </ul>
          </section>

          <section className="bg-primary/5 dark:bg-primary/10 p-6 md:p-8 rounded-3xl border border-primary/20 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-primary">9. Refund Policy (Important)</h2>
            <p className="text-foreground font-bold mb-6 italic text-base md:text-lg">
                Refunds are subject to strict eligibility criteria. A refund can be claimed ONLY if the following condition is met:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex items-start gap-3 bg-background/80 p-5 rounded-2xl border border-primary/20 shadow-sm">
                <span className="text-emerald-500 font-bold text-2xl mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-foreground">Refund Eligibility Condition</h4>
                  <p className="text-muted-foreground text-sm mt-1">The refund request must be made within <strong>7 days of payment</strong>.</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground font-semibold mb-6 text-sm md:text-base">
              If this condition is not met, your payment becomes fully non-refundable. Please make sure to submit any requests within the 7-day window.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-emerald-500/10 dark:bg-emerald-950/30 p-6 rounded-2xl border border-emerald-500/30">
                <h4 className="text-emerald-600 dark:text-emerald-400 font-black uppercase text-xs tracking-widest mb-2">Refund Eligible Scenario</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You make your payment on <strong>June 1st</strong>, and request a refund on <strong>June 5th</strong> (within 7 days of payment).
                </p>
              </div>
              <div className="bg-red-500/10 dark:bg-red-950/30 p-6 rounded-2xl border border-red-500/30">
                <h4 className="text-red-600 dark:text-red-400 font-black uppercase text-xs tracking-widest mb-2">Refund Ineligible Scenario</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You make your payment on <strong>June 1st</strong>, and request a refund on <strong>June 10th</strong> (outside the 7-day payment window).
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">11. Contact Us</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              For any questions regarding this Privacy Policy:
            </p>
            <div className="mt-4 space-y-2">
                <p className="flex items-center gap-3 text-foreground font-bold text-sm md:text-base">
                    <span className="material-icons text-primary">email</span>
                    support@vydhra.com
                </p>
                <p className="flex items-center gap-3 text-foreground font-bold text-sm md:text-base">
                    <span className="material-icons text-primary">location_on</span>
                    Kolkata, India
                </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
