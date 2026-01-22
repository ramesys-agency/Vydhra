import React from "react";

export default function StudentAreasSection() {
  return (
    <section className="py-32 px-4 md:px-8 bg-white dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-primary">
          Students from these areas <br /> have already finished the course
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 dark:opacity-60">
        <span className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
          Webdesigner
        </span>
        <span className="text-xl md:text-2xl font-medium text-slate-500">
          Marketing
        </span>
        <span className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-200">
          Kommunikationsdesign
        </span>
        <span className="text-lg md:text-xl font-medium text-slate-400">
          BWL
        </span>
        <span className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
          Grafikdesign
        </span>
        <span className="text-xl md:text-2xl font-medium text-slate-500">
          Medieninformatik
        </span>
        <span className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200">
          Schüler
        </span>
        <span className="text-lg md:text-xl font-medium text-slate-400">
          Psychologie
        </span>
        <span className="text-2xl md:text-3xl font-medium text-slate-500">
          IT-Systemelektroniker
        </span>
        <span className="text-lg md:text-xl font-medium text-slate-400">
          Informatik
        </span>
        <span className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
          Studenten
        </span>
      </div>
    </section>
  );
}
