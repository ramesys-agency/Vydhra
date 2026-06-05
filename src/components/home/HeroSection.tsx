import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative lg:h-screen min-h-screen lg:min-h-0 flex items-center overflow-hidden py-12 lg:py-0 px-6 md:px-12">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20 dark:opacity-30"></div>
      {/* <div className="absolute top-0 left-0 w-full bg-muted/50 border-b border-border py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[scroll_30s_linear_infinite] uppercase text-[10px] font-bold tracking-widest text-muted-foreground">
          <span className="mx-8">
            <span className="text-primary">●</span> Live Cohort
          </span>
          <span className="mx-8">Priya — Educator to Web Developer</span>
          <span className="mx-8">Vikram — Sales to AI Engineer</span>
          <span className="mx-8">Sarah — Accountant to Full-Stack</span>
          <span className="mx-8">James — Retail to Software Engineer</span>
        </div>
      </div> */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 lg:h-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Next Cohort Starting Soon
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-foreground mb-6">
            Live AI Bootcamps That Turn Beginners Into{" "}
            <span className="text-primary">Job-Ready Engineers</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
            Stop consuming tutorials. Start building real systems. Vydhra’s
            live, mentor-led AI, Data Science, and Full-Stack bootcamps are
            engineered to make you outperform professionals in just 2–6 months.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/courses"
              className="bg-primary text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-xl text-base md:text-lg transition-all shadow-xl shadow-primary/20 cursor-pointer hover:scale-105 active:scale-95"
            >
              Enroll Courses
            </Link>
            <Link
              href="/about"
              className="bg-background/80 backdrop-blur-md hover:bg-muted text-foreground font-bold py-3 px-6 md:py-4 md:px-10 rounded-xl text-base md:text-lg border border-border transition-all cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Know More About Us
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end w-full">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          <div className="relative w-full max-w-[600px] group">
            <div className="relative rounded-[2.5rem] bg-card border border-border shadow-2xl overflow-hidden aspect-square">
              <Image
                alt="AI Agent Workflow"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out dark:brightness-90"
                src="/home_hero_section.png"
                width={800}
                height={800}
                priority
              />
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-background/90 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons text-primary text-2xl">
                    rocket_launch
                  </span>
                </div>
                <div>
                  <p className="text-base font-black text-foreground uppercase tracking-tight">
                    Accelerated Growth
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    Your Path To Success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
