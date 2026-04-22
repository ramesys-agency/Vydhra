import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-primary mb-6">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12 uppercase tracking-widest font-bold">Last Updated: April 2024</p>

        <div className="prose dark:prose-invert max-w-none space-y-12">
          <section className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Vydhra (“we”, “our”, “us”) is a brand operating under <strong>Ramesys Private Limited</strong>, based in Kolkata, India.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </p>
          </section>

          <section className="bg-card p-8 rounded-3xl border border-border shadow-sm">
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

          <section className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">3. How We Use Your Information</h2>
            <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex gap-3"><span className="text-primary">●</span> Provide and manage course enrollments</li>
                <li className="flex gap-3"><span className="text-primary">●</span> Process payments securely</li>
                <li className="flex gap-3"><span className="text-primary">●</span> Communicate with you (support, updates, notifications)</li>
                <li className="flex gap-3"><span className="text-primary">●</span> Improve our platform and learning experience</li>
                <li className="flex gap-3"><span className="text-primary">●</span> Analyze user behavior for better service delivery</li>
            </ul>
          </section>

          <section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-3xl border border-primary/20 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-primary">9. Refund Policy (Important)</h2>
            <p className="text-foreground font-bold mb-6 italic">
                Refunds are subject to strict eligibility criteria. A refund can be claimed only if BOTH conditions are met:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-muted-foreground font-medium">
                <li>The request is made within <strong>7 days of payment</strong>, AND</li>
                <li>The request is made at least <strong>7 days before the course batch start date</strong></li>
            </ol>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                    <h4 className="text-green-700 dark:text-green-400 font-bold uppercase text-xs tracking-widest mb-2">Eligible Scenario</h4>
                    <p className="text-green-600 dark:text-green-400 text-sm">Paid 1st June, Starts 20th June, Request 5th June. (Refund Allowed)</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
                    <h4 className="text-red-700 dark:text-red-400 font-bold uppercase text-xs tracking-widest mb-2">Not Eligible</h4>
                    <p className="text-red-600 dark:text-red-400 text-sm">Requested after 7 days of payment OR less than 7 days before batch start.</p>
                </div>
            </div>
          </section>

          <section className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">11. Contact Us</h2>
            <p className="text-muted-foreground text-lg">
              For any questions regarding this Privacy Policy:
            </p>
            <div className="mt-4 space-y-2">
                <p className="flex items-center gap-3 text-foreground font-bold">
                    <span className="material-icons text-primary">email</span>
                    support@vydhra.com
                </p>
                <p className="flex items-center gap-3 text-foreground font-bold">
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
