import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-primary mb-6">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground mb-12 uppercase tracking-widest font-bold">Last Updated: June 2026</p>

        <div className="prose dark:prose-invert max-w-none space-y-12">
          {/* Section 1: Intro */}
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Welcome to Vydhra (“we”, “our”, “us”). Vydhra is a brand owned and operated by <strong>Ramesys Private Limited</strong>, a company incorporated under the laws of India, with its registered office in Kolkata, India.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
              By accessing our website, enrolling in our courses, and purchasing our training programs, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          {/* Section 2: Eligibility & Enrollment */}
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">2. Course Enrollment & Fees</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              To enroll in a course, you are required to provide accurate, complete, and current information as prompted during the checkout process. Course availability and schedules are subject to change.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
              All fees are payable in the currency specified during checkout (INR or USD). You agree to pay all charges incurred by you or on your behalf through the payment gateway (Razorpay) at the prices in effect when such charges are incurred.
            </p>
          </section>

          {/* Section 3: Payment Gateway */}
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">3. Payment & Security</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              We process payments securely using the <strong>Razorpay</strong> payment gateway. We do not store or host any card details or transaction credentials on our servers. You agree to abide by the terms and policies of the payment gateway processor used to complete your transaction.
            </p>
          </section>

          {/* Section 4: Refund Policy (CRITICALLY HIGHLIGHTED) */}
          <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-primary/5 dark:from-orange-500/20 dark:to-primary/10 p-6 md:p-10 rounded-3xl border-2 border-primary shadow-xl">
            <div className="absolute top-0 right-0 bg-primary text-white font-black text-xs uppercase px-4 py-2 rounded-bl-2xl tracking-widest animate-pulse">
              Important Policy
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight text-primary flex items-center gap-2">
              <span className="text-3xl sm:text-4xl">⚠️</span> 4. Refund & Cancellation Policy
            </h2>
            
            <div className="h-1 w-20 bg-primary mb-6" />

            <p className="text-foreground font-extrabold text-base md:text-lg mb-6 leading-relaxed">
              We strive to offer premium educational experiences. Refunds for enrollment fees are subject to strict eligibility criteria. A refund can be claimed ONLY if the following condition is met:
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

            <p className="text-xs text-muted-foreground mt-6 italic font-bold">
              To request a refund, please send an email to <a href="mailto:support@vydhra.com" className="text-primary hover:underline font-bold">support@vydhra.com</a> with your enrollment ID, payment receipt, and reason for refund.
            </p>
          </section>

          {/* Section 5: Intellectual Property */}
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              All content provided in our courses, including slides, videos, code challenges, documentation, and exercises, is the intellectual property of Vydhra and Ramesys Private Limited. You are granted a limited, non-transferable, revocable license to access the materials for your personal learning. Sharing, distributing, or copying course materials is strictly prohibited.
            </p>
          </section>

          {/* Section 6: User Conduct */}
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">6. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              You agree to behave in a respectful manner within our community spaces, Slack/WhatsApp groups, and live classes. Harassment, hate speech, spamming, or sharing malicious software will result in immediate termination of your enrollment without any refund.
            </p>
          </section>

          {/* Section 7: Limitation of Liability */}
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              To the maximum extent permitted by law, Vydhra and Ramesys Private Limited shall not be liable for any indirect, incidental, special, or consequential damages resulting from your participation in or inability to participate in our courses.
            </p>
          </section>

          {/* Section 8: Governing Law */}
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">8. Governing Law & Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Kolkata, India.
            </p>
          </section>

          {/* Section 9: Contact */}
          <section className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">9. Contact Us</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              If you have any questions or clarifications regarding these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-3 text-foreground font-bold text-sm md:text-base">
                <span className="text-primary font-bold">Email:</span>
                support@vydhra.com
              </p>
              <p className="flex items-center gap-3 text-foreground font-bold text-sm md:text-base">
                <span className="text-primary font-bold">Location:</span>
                Kolkata, West Bengal, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
