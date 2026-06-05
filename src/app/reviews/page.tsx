"use client";

import React, { useState, useMemo } from "react";
import RatingSummary from "./components/RatingSummary";
import ReviewFilters from "./components/ReviewFilters";
import ReviewGrid from "./components/ReviewGrid";
import { reviews } from "@/data/reviews";

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState("All Reviews");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredReviews = useMemo(() => {
    if (activeCategory === "All Reviews") return reviews;
    return reviews.filter((r) => {
      const category = r.category;
      if (activeCategory === "AI & Machine Learning") {
        return category === "AI & ML" || category === "AI Engineering";
      }
      if (activeCategory === "Fullstack Development") {
        return category === "Fullstack Development" || category === "Programming";
      }
      if (activeCategory === "Data & Analytics") {
        return category === "Data Engineering" || category === "Data Analytics" || category === "Cybersecurity";
      }
      return false;
    });
  }, [activeCategory]);

  const displayedReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset pagination on category change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const hasMore = visibleCount < filteredReviews.length;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 text-foreground">
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
                Wall of Love
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-foreground">
                Trusted by <br className="hidden md:inline" />{" "}
                <span className="text-primary">students across the globe</span>
              </h1>
            </div>
          </div>

          <RatingSummary />

          <ReviewFilters
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          <ReviewGrid reviews={displayedReviews} />

          {hasMore && (
            <div className="flex justify-center py-10">
              <button
                onClick={handleLoadMore}
                className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                Load More Stories
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
