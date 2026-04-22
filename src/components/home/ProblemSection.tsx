import { AlertTriangle, Clock, Frown } from "lucide-react";
import React from "react";

const problems = [
  {
    icon: AlertTriangle,
    title: "AI is replacing low-skill roles",
    description: "The market is shifting fast. Only skilled professionals stay relevant in an AI-driven economy.",
  },
  {
    icon: Clock,
    title: "Career growth has stalled",
    description: "Without in-demand tech skills, progression becomes limited and opportunities pass you by.",
  },
  {
    icon: Frown,
    title: "The tutorial trap is real",
    description: "Watching content feels productive—but doesn’t create the capability to build real systems.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block p-2 px-4 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 font-bold text-xs uppercase tracking-wider mb-6">
              The Challenges
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-foreground uppercase leading-none">
              Why Most People <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Fail</span> to Break Into Tech
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              The gap isn’t opportunity—it’s preparation. Watching content feels productive—but doesn’t create capability.
            </p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-muted-foreground font-medium">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                    <span className="material-icons text-sm">close</span>
                  </div>
                  <span>You’ve watched courses but still can’t build independently</span>
               </div>
               <div className="flex items-center gap-3 text-muted-foreground font-medium">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                    <span className="material-icons text-sm">close</span>
                  </div>
                  <span>You don’t have real projects to prove your skills</span>
               </div>
               <div className="flex items-center gap-3 text-muted-foreground font-medium">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
                    <span className="material-icons text-sm">close</span>
                  </div>
                  <span>You’re unsure how to enter AI, data, or development roles</span>
               </div>
            </div>
          </div>
          
          <div className="space-y-6 relative">
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
            
            {problems.map((problem, index) => (
              <div key={index} className="bg-card p-8 rounded-3xl flex items-start space-x-6 border border-border hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <div className="bg-background p-4 rounded-2xl shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground uppercase tracking-tight">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
