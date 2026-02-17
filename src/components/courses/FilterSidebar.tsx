import React from "react";

interface Category {
  name: string;
  count: number;
}

interface FilterSidebarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function FilterSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
}: FilterSidebarProps) {
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
                onClick={() => onSelectCategory(cat.name)}
                className={`flex items-center justify-between w-full group text-left cursor-pointer ${
                  selectedCategory === cat.name
                    ? "text-slate-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <span
                  className={`font-bold text-lg transition-colors ${
                    selectedCategory === cat.name
                      ? "text-primary"
                      : "group-hover:text-primary"
                  }`}
                >
                  {cat.name}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    selectedCategory === cat.name
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-card-dark"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
