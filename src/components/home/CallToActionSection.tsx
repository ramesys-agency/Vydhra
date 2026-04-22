import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CallToActionSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-background relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none uppercase text-foreground">
          The AI Industry Is Growing Fast. <br/>
          <span className="text-primary">So Is the Skill Gap.</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          The next 6 months can either move you forward—or leave you behind. The choice is yours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/courses" className="bg-primary hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-full text-xl transition-all shadow-xl shadow-primary/30 flex items-center gap-2 group">
            Apply Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="bg-background hover:bg-muted text-foreground font-bold py-5 px-12 rounded-full text-xl border border-border transition-all">
            Talk to a Mentor
          </Link>
        </div>
      </div>
    </section>
  );
}
