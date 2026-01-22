import React from "react";

const modules = [
  {
    id: "01",
    title: "Webflow Grundlagen",
    meta: "12 Lektionen • 2h 45min",
    lessons: [
      { title: "Interface & Box Model verstehen", duration: "12:30", type: "video" },
      { title: "Klassen & Vererbung", duration: "15:45", type: "video" },
      { title: "Responsive Design Best Practices", duration: "22:10", type: "locked" },
    ],
    isOpen: true,
  },
  {
    id: "02",
    title: "Advanced Layouts & CMS",
    meta: "15 Lektionen • 4h 20min",
    lessons: [],
    isLocked: true,
  },
  {
    id: "03",
    title: "Animationen & Interaktionen",
    meta: "8 Lektionen • 3h 15min",
    lessons: [],
    isLocked: true,
  },
];

export default function Curriculum() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-8">Kursinhalte</h2>
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
                <p className="text-gray-400 italic">
                  Inhalt wird nach dem Kauf freigeschaltet.
                </p>
              ) : (
                mod.lessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm py-2 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-gray-400 text-sm">
                        {lesson.type === "video" ? "play_circle" : "lock"}
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
                    <span className="text-gray-400">{lesson.duration}</span>
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
          <h4 className="text-xl font-bold mb-3">Praxisnahes Lernen</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Keine Theorie-Wüste. Wir bauen echte Projekte von Grund auf.
          </p>
        </div>
        <div className="p-8 bg-gray-100 dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-border-dark">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary">
            <span className="material-icons">update</span>
          </div>
          <h4 className="text-xl font-bold mb-3">Lifetime Updates</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Der Kurs wird ständig aktualisiert, sobald neue Features erscheinen.
          </p>
        </div>
      </div>
    </section>
  );
}
