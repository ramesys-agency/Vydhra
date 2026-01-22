import React from "react";

export default function MobileNav() {
  return (
    <>
      <button className="fixed bottom-4 left-4 bg-white dark:bg-slate-800 text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-lg z-[100] hover:scale-105 transition-transform cursor-pointer">
        Cookie-Einstellungen
      </button>
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 p-4 flex justify-around items-center z-50">
        <button className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-primary transition-colors cursor-pointer">
          <span className="material-icons">school</span>
          <span className="text-[10px] font-bold mt-1">COURSES</span>
        </button>
        <button className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-primary transition-colors cursor-pointer">
          <span className="material-icons">star</span>
          <span className="text-[10px] font-bold mt-1">REVIEWS</span>
        </button>
        <button className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-primary transition-colors cursor-pointer">
          <span className="material-icons">lightbulb</span>
          <span className="text-[10px] font-bold mt-1">TRICKS</span>
        </button>
      </div>
    </>
  );
}
