import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CallToActionSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-white dark:bg-black relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none uppercase text-slate-900 dark:text-white">
          Ready to <br/>
          <span className="text-primary">Level Up?</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of students who are already building their dream careers. Don&apos;t wait for the perfect time—it&apos;s now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/courses" className="bg-primary hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-full text-xl transition-all shadow-xl shadow-primary/30 flex items-center gap-2 group">
            Browse Courses
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/about" className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-5 px-12 rounded-full text-xl border border-slate-200 dark:border-slate-700 transition-all">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
