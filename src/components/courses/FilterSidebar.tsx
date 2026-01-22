import React from "react";

const categories = [
  { name: "All Courses", count: 12, active: true },
  { name: "Web Design", count: 5 },
  { name: "Development", count: 4 },
  { name: "Marketing", count: 3 },
];

export default function FilterSidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-32">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-primary">
          Filter Categories
        </h2>
        <ul className="space-y-6">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                className={`flex items-center justify-between w-full group text-left ${
                  cat.active
                    ? "text-slate-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <span className="font-bold text-lg group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
                <span className="text-xs bg-gray-100 dark:bg-card-dark px-2 py-1 rounded">
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-12 pt-12 border-t border-gray-100 dark:border-border-dark">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-400">
            Price Range
          </h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                className="form-checkbox rounded border-gray-300 dark:border-border-dark text-primary focus:ring-primary bg-transparent"
                type="checkbox"
              />
              <span className="text-sm font-medium">Free</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                defaultChecked
                className="form-checkbox rounded border-gray-300 dark:border-border-dark text-primary focus:ring-primary bg-transparent"
                type="checkbox"
              />
              <span className="text-sm font-medium">Premium</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
