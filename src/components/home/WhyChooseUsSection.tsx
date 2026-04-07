import { Rocket, FileCode2, Users } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Rocket,
    title: "AI-Powered Stack",
    description: "Learn how to significantly accelerate your career by leveraging AI tools to write modern stack application code.",
  },
  {
    icon: FileCode2,
    title: "Career Transition Focus",
    description: "Our syllabus is explicitly designed for working professionals stepping out of non-tech fields.",
  },
  {
    icon: Users,
    title: "Live Mentorship",
    description: "Gain clarity fast. Get unblocked instantly instead of debugging alone for hours in an empty room.",
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
            We offer the highest-ROI learning method for aspiring developers ready for the modern job landscape.
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
