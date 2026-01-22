"use client";

import React, { useState } from "react";

const categories = [
  "All Reviews",
  "UI/UX Design",
  "Web Development",
  "Motion Graphics",
  "Strategy",
];

export default function ReviewFilters() {
  const [active, setActive] = useState("All Reviews");

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
      <div className="flex gap-8 min-w-max">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex flex-col items-center justify-center border-b-2 pb-4 pt-2 font-bold text-sm tracking-wide transition-colors ${
              active === cat
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
