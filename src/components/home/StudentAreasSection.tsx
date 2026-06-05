import React from "react";

export default function StudentAreasSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-primary">
          Master High-Demand <br /> AI & Tech Skills
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 dark:opacity-60">
        <span className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground">
          Python for AI & ML
        </span>
        <span className="text-lg md:text-2xl font-medium text-muted-foreground">
          Machine Learning Systems
        </span>
        <span className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground">
          MERN with AI Integration
        </span>
        <span className="text-base md:text-xl font-medium text-muted-foreground opacity-80">
          AI Agents & Automation
        </span>
        <span className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground">
          LangChain & RAG
        </span>
        <span className="text-lg md:text-2xl font-medium text-muted-foreground">
          SQL & Data Engineering
        </span>
        <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Cybersecurity & Cloud
        </span>
        <span className="text-base md:text-xl font-medium text-muted-foreground opacity-80">
          Deep Learning
        </span>
        <span className="text-lg sm:text-2xl md:text-3xl font-medium text-muted-foreground">
          Data Analytics
        </span>
        <span className="text-base md:text-xl font-medium text-muted-foreground opacity-80">
          Production Systems
        </span>
      </div>
    </section>
  );
}
