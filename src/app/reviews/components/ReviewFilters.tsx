"use client";

import React from "react";

const categories = [
  "All Reviews",
  "AI & ML",
  "Fullstack Development",
  "Data Engineering",
  "Programming",
];

interface ReviewFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ReviewFilters({ activeCategory, onCategoryChange }: ReviewFiltersProps) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
      <div className="flex gap-8 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`flex flex-col items-center justify-center border-b-2 pb-4 pt-2 font-bold text-sm tracking-wide transition-colors cursor-pointer ${
              activeCategory === cat
                ? "border-primary text-slate-900 dark:text-white"
                : "border-transparent text-slate-400 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
