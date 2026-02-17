import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden py-20 px-4 md:px-8">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20 dark:opacity-30"></div>
      <div className="absolute top-0 left-0 w-full bg-slate-100 dark:bg-black/40 border-b border-slate-200 dark:border-slate-800 py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[scroll_30s_linear_infinite] uppercase text-[10px] font-bold tracking-widest text-slate-400">
          <span className="mx-8">
            <span className="text-primary">●</span> Recently Joined
          </span>
          <span className="mx-8">Ralf — Web Designer Joined</span>
          <span className="mx-8">Vlad Cirneala — Lead Developer Joined</span>
          <span className="mx-8">Christian B. — Web Strategist Joined</span>
          <span className="mx-8">Sarah Miller — UI/UX Designer Joined</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase leading-none tracking-tighter text-primary mb-6">
            Master Your <br /> Craft
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
            Everything you need to go from zero to professional websites. Learn
            how to design, structure, animate and publish responsive,
            professional projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg shadow-primary/20 cursor-pointer">
              Get Started
            </button>
            <button className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-4 px-10 rounded-full text-lg border border-slate-200 dark:border-slate-700 transition-all cursor-pointer">
              View Curriculum
            </button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center relative overflow-hidden group">
            <Image
              alt="Decorative Shape"
              className="w-3/4 h-3/4 opacity-80 group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPf9d3O_sOjMGIWNBA-tXASBo67BvACGNmdW1AxUyFJ5osa6nI4LdOpgVGhs0bLeVjvxq4Fnry3SMxgMICKwmhpOnwOp-gxmwCTCg5IIsWxzgcIoYzWNNUv9SmXIS5b0cRn5JwesF9Vj-f7mzWuFsLdrWVpjn4ZOHn1vGe876po54p4016mKJtefyQAH78hm_UqBbsNnL8z4m-h3Y3I6Qs-Y1AOi9wVMQ8_fUobrDs6hgufrCV11KpOoYTDqv74-7xnJJFyBKbJ2mP"
              width={384}
              height={384}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
