import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center h-20 px-4 md:px-8">
        <div className="flex items-center gap-2 mr-auto">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden">
            <Image
              alt="Logo"
              className="w-6 h-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuE0To0y_zcJcxByqCQbWQLz93K6f0EciXJvjL0Mh7BjoTJL0aEgCVlbsa31LbskUfKLtMolPGHkVMOuNlQZ05q2qEoRh2eDopy1JEKPPhRSca0J2cwQcJ31cmCw4-WREQsZi7cS1pOruVKqKatnXZZx3-RCaSBy-gt0aEwk2Oa5OoEdGT8a0LnCjKxdpky7SRdn5S3CfiiLMCbxxdCHqArFZ-_t6viyD5m_ZcsLS5JSK9iIoTKz0ktjlRsrt4fMEtOUiswxgPFv2y"
              width={24}
              height={24}
            />
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase">
            Formburg
          </span>
        </div>
        <nav className="hidden lg:flex items-center h-full border-x border-slate-200 dark:border-slate-800">
          <Link
            className="px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
            href="/"
          >
            <span className="font-semibold text-sm">Home</span>
          </Link>
          <Link
            className="px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 group"
            href="/"
          >
            <span className="text-xs text-slate-500 dark:text-slate-400">
              209
            </span>
            <span className="font-semibold text-sm">Tutorials</span>
          </Link>
          <Link
            className="px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 relative bg-primary/5"
            href="/courses"
          >
            <span className="absolute top-4 right-4 bg-primary text-[10px] font-bold text-white px-1 rounded">
              NEW
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                4
              </span>
            </div>
            <span className="font-semibold text-sm text-primary">Courses</span>
          </Link>
          <Link
            className="px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 group"
            href="/reviews"
          >
            <span className="text-xs text-slate-500 dark:text-slate-400">
              50+
            </span>
            <span className="font-semibold text-sm">Reviews</span>
          </Link>
        </nav>
        <div className="flex items-center gap-6 ml-4">
          <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded uppercase tracking-wide text-sm transition-all cursor-pointer">
            Buy Course
          </button>
          <button className="lg:hidden text-2xl cursor-pointer">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
