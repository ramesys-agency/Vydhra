import React from "react";
import { Module } from "@/types/course";

interface CurriculumProps {
  modules: Module[];
}

export default function Curriculum({ modules }: CurriculumProps) {
  return (
    <section id="curriculum">
      <h2 className="text-4xl font-bold mb-8">Course Content</h2>
      <div className="space-y-4">
        {modules.map((mod) => (
          <details
            key={mod.id}
            className="group bg-card rounded-xl border border-border overflow-hidden"
            open={mod.isOpen}
          >
            <summary className="list-none cursor-pointer p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {mod.id}
                </span>
                <div>
                  <h3 className="font-bold text-lg">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {mod.meta}
                  </p>
                </div>
              </div>
              <span className="material-icons transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="p-6 pt-6 border-t border-border space-y-6">
              {/* Topics Covered */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Topics Covered</h4>
                <div className="space-y-2">
                  {mod.lessons.map((lesson, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="material-icons text-primary/60 text-sm">
                        play_circle
                      </span>
                      <span className="font-medium text-foreground">
                        {lesson.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-12">
        <div className="p-8 bg-card rounded-2xl border border-border">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
            <span className="material-icons">auto_awesome</span>
          </div>
          <h4 className="text-xl font-bold mb-3">Practical Learning</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            No dry theory. We build real projects from scratch.
          </p>
        </div>
        <div className="p-8 bg-card rounded-2xl border border-border">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
            <span className="material-icons">update</span>
          </div>
          <h4 className="text-xl font-bold mb-3">Lifetime Updates</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The course is constantly updated as soon as new features appear.
          </p>
        </div>
      </div>
    </section>
  );
}
