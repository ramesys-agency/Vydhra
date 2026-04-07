import { AlertTriangle, Clock, Frown } from "lucide-react";
import React from "react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Fear of AI Replacing You",
    description: "You're constantly worried that new AI tools are going to make your current skills obsolete in the job market.",
  },
  {
    icon: Clock,
    title: "Stuck in a Plateau",
    description: "You're in a stable but unfulfilling career. You want to move into tech, but you just can't afford to waste years going back to college.",
  },
  {
    icon: Frown,
    title: "The Tutorial Trap",
    description: "Pre-recorded bootcamps teach basic syntax, but not how to use modern AI to build scalable, real-world applications.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white dark:bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block p-2 px-4 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
              The Reality
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white uppercase leading-none">
              Is This <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">You?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
              Switching careers into tech used to mean spending years alone at a computer. Now, without mastering AI development tools, new engineers are falling behind.
            </p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                    <span className="material-icons text-sm">close</span>
                  </div>
                  <span>Unsure where to start your career transition</span>
               </div>
               <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                    <span className="material-icons text-sm">close</span>
                  </div>
                  <span>Learning outdated, non-AI-augmented tech stacks</span>
               </div>
               <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                    <span className="material-icons text-sm">close</span>
                  </div>
                  <span>Missing expert mentorship to guide you</span>
               </div>
            </div>
          </div>
          
          <div className="space-y-6 relative">
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
            
            {problems.map((problem, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl flex items-start space-x-6 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white uppercase tracking-tight">{problem.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
