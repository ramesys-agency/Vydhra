import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Header and Contact Info */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            We're Online
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter text-foreground mb-6">
            Let's build <br className="hidden md:block" />
            <span className="text-primary">something great.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
            Have questions about the bootcamps? Need help with your enrollment? Our team is ready to help you take the next step.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="bg-card p-8 rounded-3xl border border-border group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-icons text-primary text-2xl">email</span>
              </div>
              <h3 className="text-xl font-black mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                For general inquiries and support requests.
              </p>
              <a
                href="mailto:support@vydhra.com"
                className="inline-flex items-center gap-2 font-bold text-primary hover:text-orange-600 transition-colors"
              >
                Email Support
                <span className="material-icons text-sm">arrow_forward</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-card p-8 rounded-3xl border border-border group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-icons text-primary text-2xl">chat</span>
              </div>
              <h3 className="text-xl font-black mb-2 text-foreground">WhatsApp</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Chat with us directly for quick answers.
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-primary hover:text-orange-600 transition-colors"
              >
                Start Chat
                <span className="material-icons text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-[2.5rem] blur-2xl -z-10"></div>
          <div className="bg-card p-8 md:p-10 rounded-[2.5rem] border border-border shadow-2xl backdrop-blur-xl h-full flex flex-col justify-center relative z-10">
            <h3 className="text-2xl font-black mb-8 text-foreground">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full bg-background border border-border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full bg-background border border-border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background border border-border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2 text-muted-foreground">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-background border border-border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground resize-none"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary text-white font-bold py-5 rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
