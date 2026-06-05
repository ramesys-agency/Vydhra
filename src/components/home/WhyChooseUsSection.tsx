import { Rocket, FileCode2, Users } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Rocket,
    title: "Industry-Relevant Skill Stack",
    description:
      "Learn AI, ML, full-stack, and data skills that companies actively hire for in today's competitive market.",
  },
  {
    icon: FileCode2,
    title: "Career-Focused Training",
    description:
      "Every module and project is designed to align with real job requirements, moving beyond just theoretical concepts.",
  },
  {
    icon: Users,
    title: "Live Mentorship Model",
    description:
      "Direct access to industry professionals who guide you in real time, ensuring you gain true capability.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-muted border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase text-foreground">
            What Makes Vydhra Different
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            The difference isn’t what we teach. It’s how deeply you learn it.
            Every module is aligned with real job requirements—not theory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl bg-card shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-foreground group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 uppercase tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
