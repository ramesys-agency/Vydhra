import React from "react";
import { Module } from "@/data/courses";

interface CurriculumProps {
  modules: Module[];
}

export default function Curriculum({ modules }: CurriculumProps) {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-8">Course Content</h2>
      <div className="space-y-4">
        {modules.map((mod) => (
          <details
            key={mod.id}
            className="group bg-gray-50 dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark overflow-hidden"
            open={mod.isOpen}
          >
            <summary className="list-none cursor-pointer p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {mod.id}
                </span>
                <div>
                  <h3 className="font-bold text-lg">{mod.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {mod.meta}
                  </p>
                </div>
              </div>
              <span className="material-icons transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="p-6 pt-0 border-t border-gray-200 dark:border-border-dark space-y-4">
              {mod.isLocked ? (
                // Show lessons even if locked for visibility in this demo
                mod.lessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm py-2 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-gray-400 text-sm">
                        lock
                      </span>
                      <span className="font-medium text-gray-500">
                        {lesson.title}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                mod.lessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm py-2 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-gray-400 text-sm">
                        {lesson.type === "video"
                          ? "play_circle"
                          : lesson.type === "live"
                          ? "videocam"
                          : "lock"}
                      </span>
                      <span
                        className={`font-medium ${
                          lesson.type === "video"
                            ? "group-hover/item:text-primary transition-colors"
                            : ""
                        }`}
                      >
                        {lesson.title}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </details>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-12">
        <div className="p-8 bg-gray-100 dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-border-dark">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
            <span className="material-icons">auto_awesome</span>
          </div>
          <h4 className="text-xl font-bold mb-3">Practical Learning</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            No dry theory. We build real projects from scratch.
          </p>
        </div>
        <div className="p-8 bg-gray-100 dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-border-dark">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
            <span className="material-icons">update</span>
          </div>
          <h4 className="text-xl font-bold mb-3">Lifetime Updates</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            The course is constantly updated as soon as new features appear.
          </p>
        </div>
      </div>
    </section>
  );
}
