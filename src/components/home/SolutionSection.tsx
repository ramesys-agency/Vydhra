import { CheckCircle2 } from "lucide-react";
import React from "react";

const solutions = [
  "Live Mentorship: Instructor-led interactive classes.",
  "AI-First Stack: Learn to code with tools like Cursor and Copilot.",
  "Production Ready: Focus on enterprise-grade architecture.",
  "Job Referrals: Build a real world portfolio that gets you hired.",
];

export default function SolutionSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            The Solution
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none uppercase text-slate-900 dark:text-white">
            Designed for Career <span className="text-primary">Transition</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Stop learning like it&apos;s 2015. We teach you modern stack development heavily powered by AI to give you an unfair advantage in the tech job market.
          </p>
          <ul className="space-y-6">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-slate-200 uppercase tracking-tight">
                  {solution}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
            {/* Abstract visual representation of the solution/platform */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden">
             
             <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
                {/* Mock UI Element 1 */}
                <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                      {/* Avatar placeholder */}
                      <div className="absolute bottom-0 h-3/4 bg-slate-400 rounded-t-full inset-x-0 mx-auto w-3/4"></div>
                      <div className="absolute top-1 w-5 h-5 bg-slate-400 rounded-full inset-x-0 mx-auto text-center overflow-hidden"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 w-40 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                        <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800/50 rounded-full"></div>
                    </div>
                    <div className="ml-auto bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 text-xs px-3 py-1 rounded-full font-bold">
                        LIVE
                    </div>
                </div>

                {/* Mock UI Element 2 - The AI Cursor element */}
                <div className="bg-white dark:bg-black p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 font-mono text-sm">
                    <div className="flex items-center opacity-50 mb-2 space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400 mt-1"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 mt-1"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400 mt-1"></div>
                    </div>
                    <div>
                        <span className="text-purple-500">export const</span> <span className="text-blue-500">generate</span> = <span className="text-yellow-600">async</span> () <span className="text-blue-500">=&gt;</span> {"{"}
                    </div>
                    <div className="pl-4 text-slate-400 border-l-2 border-primary ml-1 my-1">
                        {`// AI generating backend logic...`}
                    </div>
                    <div className="pl-4 opacity-30 text-green-600">
                        const aiResponse = await openai.chat();
                    </div>
                    <div>{"}"}</div>
                </div>

                {/* Mock UI Element 3 */}
                 <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <div className="flex -space-x-2">
                         <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                         <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                         <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Interactive Cohort Chat</div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
