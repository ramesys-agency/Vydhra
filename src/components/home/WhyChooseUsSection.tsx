import { Rocket, FileCode2, Users } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Rocket,
    title: "Accelerated Learning",
    description: "Skip the fluff. Learn exactly what you need to build professional websites in record time.",
  },
  {
    icon: FileCode2,
    title: "Real-World Projects",
    description: "Build a portfolio that gets you hired. No toy apps—only production-ready code.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Join hundreds of developers helping each other grow. You'll never code alone again.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase text-slate-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just teach code; we teach you how to think like a developer and build products that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-slate-900 dark:text-white group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
