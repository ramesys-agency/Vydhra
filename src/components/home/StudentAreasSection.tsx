import React from "react";

export default function StudentAreasSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-white dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-primary">
          Master Modern Tech <br /> And AI-Driven Workflows
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 dark:opacity-60">
        <span className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
          Python & LLMs
        </span>
        <span className="text-xl md:text-2xl font-medium text-slate-500">
          MERN + AI
        </span>
        <span className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-200">
          Machine Learning
        </span>
        <span className="text-lg md:text-xl font-medium text-slate-400">
          Fullstack Development
        </span>
        <span className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
          AI Agents
        </span>
        <span className="text-xl md:text-2xl font-medium text-slate-500">
          SQL & Databases
        </span>
        <span className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200">
          Deep Learning
        </span>
        <span className="text-lg md:text-xl font-medium text-slate-400">
          LangChain & RAG
        </span>
        <span className="text-2xl md:text-3xl font-medium text-slate-500">
          Production APIs
        </span>
        <span className="text-lg md:text-xl font-medium text-slate-400">
          Data Engineering
        </span>
        <span className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
          Predictive Models
        </span>
      </div>
    </section>
  );
}
