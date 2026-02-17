"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const activeClass = "text-primary";
  const inactiveClass = "text-slate-400 dark:text-slate-500";

  return (
    <>
      {/* <button className="fixed bottom-4 left-4 bg-white dark:bg-slate-800 text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-lg z-[100] hover:scale-105 transition-transform cursor-pointer">
        Cookie Settings
      </button> */}
      <div className="lg:hidden fixed bottom-1 left-0 w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 p-4 flex justify-around items-center z-50">
        <Link href="/" className={`flex flex-col items-center hover:text-primary transition-colors cursor-pointer ${isActive("/") ? activeClass : inactiveClass}`}>
          <span className="material-icons">home</span>
          <span className="text-[10px] font-bold mt-1">HOME</span>
        </Link>
        <Link href="/courses" className={`flex flex-col items-center hover:text-primary transition-colors cursor-pointer ${isActive("/courses") ? activeClass : inactiveClass}`}>
          <span className="material-icons">school</span>
          <span className="text-[10px] font-bold mt-1">COURSES</span>
        </Link>
        <Link href="/reviews" className={`flex flex-col items-center hover:text-primary transition-colors cursor-pointer ${isActive("/reviews") ? activeClass : inactiveClass}`}>
          <span className="material-icons">star</span>
          <span className="text-[10px] font-bold mt-1">REVIEWS</span>
        </Link>
        <Link href="/about" className={`flex flex-col items-center hover:text-primary transition-colors cursor-pointer ${isActive("/about") ? activeClass : inactiveClass}`}>
          <span className="material-icons">info</span>
          <span className="text-[10px] font-bold mt-1">ABOUT</span>
        </Link>
        <Link href="/contact" className={`flex flex-col items-center hover:text-primary transition-colors cursor-pointer ${isActive("/contact") ? activeClass : inactiveClass}`}>
          <span className="material-icons">mail</span>
          <span className="text-[10px] font-bold mt-1">CONTACT</span>
        </Link>
      </div>
    </>
  );
}
