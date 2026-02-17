"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const activeLinkClass = "relative bg-primary/5";
  const activeTextClass = "text-primary";
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto flex items-center h-20 px-4 md:px-8">
        <div className="flex items-center gap-2 mr-auto px-6 h-full border-x border-slate-200 dark:border-slate-800">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden">
            <Image
              alt="Logo"
              className="w-6 h-6 scale-200"
              src="/logo_vydhra.png"
              width={24}
              height={24}
            />
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase">
            vydhra
          </span>
        </div>
        <nav className="hidden lg:flex items-center h-full border-x border-slate-200 dark:border-slate-800">
          <Link
            className={`px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors ${isActive("/") ? activeLinkClass : ""}`}
            href="/"
          >
            <span className={`font-semibold text-sm ${isActive("/") ? activeTextClass : ""}`}>Home</span>
          </Link>
          {/* <Link
            className={`px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 group transition-colors ${isActive("/tutorials") ? activeLinkClass : ""}`}
            href="/"
          >
            <span className="text-xs text-slate-500 dark:text-slate-400">
              209
            </span>
            <span className={`font-semibold text-sm ${isActive("/tutorials") ? activeTextClass : ""}`}>Tutorials</span>
          </Link> */}
          <Link
            className={`px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 relative transition-colors ${isActive("/courses") ? activeLinkClass : ""}`}
            href="/courses"
          >
            <span className="absolute top-4 right-4 bg-primary text-[10px] font-bold text-white px-1 rounded">
              NEW
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                3
              </span>
            </div>
            <span className={`font-semibold text-sm ${isActive("/courses") ? activeTextClass : ""}`}>Courses</span>
          </Link>
          <Link
            className={`px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors ${isActive("/reviews") ? activeLinkClass : ""}`}
            href="/reviews"
          >
            <span className="text-xs text-slate-500 dark:text-slate-400">
              50+
            </span>
            <span className={`font-semibold text-sm ${isActive("/reviews") ? activeTextClass : ""}`}>Reviews</span>
          </Link>
          <Link
            className={`px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors ${isActive("/about") ? activeLinkClass : ""}`}
            href="/about"
          >
            <span className={`font-semibold text-sm ${isActive("/about") ? activeTextClass : ""}`}>About</span>
          </Link>
          <Link
            className={`px-6 h-full flex flex-col justify-center border-r border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors ${isActive("/contact") ? activeLinkClass : ""}`}
            href="/contact"
          >
            <span className={`font-semibold text-sm ${isActive("/contact") ? activeTextClass : ""}`}>Contact</span>
          </Link>
        </nav>
        {/* <div className="flex items-center gap-6 ml-4">
          <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded uppercase tracking-wide text-sm transition-all cursor-pointer">
            Buy Course
          </button>
          <button className="lg:hidden text-2xl cursor-pointer">
            <span className="material-icons">menu</span>
          </button>
        </div> */}
      </div>
    </header>
  );
}
