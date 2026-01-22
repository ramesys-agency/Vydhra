import React from "react";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import RatingSummary from "./components/RatingSummary";
import ReviewFilters from "./components/ReviewFilters";
import ReviewGrid from "./components/ReviewGrid";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen grid-bg">
      <main className="flex flex-col items-center">
        <div className="w-full max-w-[1200px] px-6 lg:px-10 py-12 flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-primary text-4xl lg:text-6xl font-black leading-tight tracking-tight uppercase">
                WHAT OUR STUDENTS SAY
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-normal max-w-xl">
                Join 2,500+ professionals who transformed their careers through
                our industry-leading design and development programs.
              </p>
            </div>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95">
              <span className="material-icons">edit_note</span>
              <span className="truncate">Write a Review</span>
            </button>
          </div>

          <RatingSummary />
          
          <ReviewFilters />
          
          <ReviewGrid />

          <div className="flex justify-center py-10">
            <button className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
              Load More Stories
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
