import { CheckCircle2 } from "lucide-react";
import React from "react";

const solutions = [
  "Comprehensive Curriculum: From zero to hero.",
  "Community Support: Get help when you need it.",
  "Expert Instructors: Learn from the best.",
  "Project-Based: Build real portfolio pieces.",
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
            Designed for <br/> Your <span className="text-primary">Success</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Stop guessing and start building. Our structured program gives you
            the clarity and confidence to master web development.
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
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                    <div className="space-y-2">
                        <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                        <div className="h-3 w-20 bg-slate-100 dark:bg-slate-800/50 rounded-full"></div>
                    </div>
                </div>

                {/* Mock UI Element 2 - The Course Card */}
                <div className="bg-white dark:bg-black p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="h-32 w-full bg-slate-100 dark:bg-slate-900 rounded-2xl mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-primary border-b-[6px] border-b-transparent ml-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-full mb-3"></div>
                    <div className="flex justify-between items-center">
                        <div className="h-3 w-1/4 bg-slate-100 dark:bg-slate-900 rounded-full"></div>
                        <div className="h-8 w-20 bg-primary rounded-full"></div>
                    </div>
                </div>

                {/* Mock UI Element 3 */}
                 <div className="flex justify-between items-center bg-slate-100 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <div className="flex -space-x-2">
                         <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                         <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                         <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase">300+ Students</div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
