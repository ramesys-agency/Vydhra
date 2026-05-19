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

export default function ReviewFilters({
  activeCategory,
  onCategoryChange,
}: ReviewFiltersProps) {
  return (
    <div className="mt-8 border-b border-border overflow-x-auto">
      <div className="flex gap-8 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`flex flex-col items-center justify-center border-b-2 pb-4 pt-2 font-bold text-sm tracking-wide transition-colors cursor-pointer ${
              activeCategory === cat
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
