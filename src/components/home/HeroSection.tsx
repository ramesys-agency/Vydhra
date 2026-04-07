import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden py-20 px-4 md:px-8">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20 dark:opacity-30"></div>
      <div className="absolute top-0 left-0 w-full bg-slate-100 dark:bg-black/40 border-b border-slate-200 dark:border-slate-800 py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[scroll_30s_linear_infinite] uppercase text-[10px] font-bold tracking-widest text-slate-400">
          <span className="mx-8">
            <span className="text-primary">●</span> Live Cohort
          </span>
          <span className="mx-8">Priya — Educator to Web Developer</span>
          <span className="mx-8">Vikram — Sales to AI Engineer</span>
          <span className="mx-8">Sarah — Accountant to Full-Stack</span>
          <span className="mx-8">James — Retail to Software Engineer</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 items-center relative z-10">
        <div>
          <h1 className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter text-primary mb-6">
            MASTER THE <br /> AI REVOLUTION
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed font-medium">
            Learn to build, orchestrate, and deploy autonomous AI agents. Go
            from zero to production-ready with intensive, live, instructor-led
            courses.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-xl shadow-primary/20 cursor-pointer hover:scale-105 active:scale-95">
              Explore Live Courses
            </button>
            <button className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-4 px-10 rounded-xl text-lg border border-slate-200 dark:border-slate-700 transition-all cursor-pointer hover:shadow-lg">
              View Curriculum
            </button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-square rounded-[2rem] bg-slate-100 dark:bg-card-dark p-3 shadow-2xl border border-white/20 dark:border-white/5 group overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/10">
              <Image
                alt="AI Agent Workflow"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out"
                src="/home_hero_section.png"
                width={600}
                height={600}
              />
            </div>
            {/* Added a floating tag to the image for detail */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  Your Path To Success
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
