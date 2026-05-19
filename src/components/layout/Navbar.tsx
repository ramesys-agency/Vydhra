"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../common/ThemeToggle";
import CurrencySelector from "../ui/CurrencySelector";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { getCourses } from "@/lib/api";

export default function Navbar() {
  const pathname = usePathname();

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [coursesCount, setCoursesCount] = useState(13);

  useEffect(() => {
    setMounted(true);

    // Dynamically query courses count in background, falling back to 13 if offline/error
    getCourses()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setCoursesCount(data.length);
        }
      })
      .catch((err) => {
        console.error("Navbar dynamic courses count load failed:", err);
      });
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/logo_vydhra_dark.png"
      : "/logo_vydhra_light.png";
  // const logoSrc = "/logo_vydhra_light.png";

  const activeLinkClass = "relative bg-primary/5 dark:bg-primary/10";
  const activeTextClass = "text-primary";
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto flex items-center h-20 px-4 md:px-8 text-foreground">
        <div className="flex items-center mr-auto px-6 h-full border-border">
          <Link href="/" className="group inline-flex">
            <Image
              alt="Vydhra Logo"
              className="h-16 w-auto object-contain scale-[3] group-hover:scale-[3.1] transition-transform duration-300"
              src={logoSrc}
              width={200}
              height={250}
              priority
            />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center h-full border-border">
          <Link
            className={`px-6 h-full flex flex-col justify-center border-border hover:bg-primary/5 dark:hover:bg-primary/10 group transition-colors ${isActive("/") ? activeLinkClass : ""}`}
            href="/"
          >
            <span
              className={`font-semibold text-sm transition-colors group-hover:text-primary ${isActive("/") ? activeTextClass : ""}`}
            >
              Home
            </span>
          </Link>
          <Link
            className={`px-6 h-full flex flex-col justify-center border-border hover:bg-primary/5 dark:hover:bg-primary/10 relative group transition-colors ${isActive("/courses") ? activeLinkClass : ""}`}
            href="/courses"
          >
            <span className="absolute top-4 right-4 bg-primary text-[9px] font-black text-white px-1.5 py-0.5 rounded-sm leading-none">
              NEW
            </span>
            <span className="absolute top-4 left-6 text-[10px] font-bold text-muted-foreground transition-colors group-hover:text-primary/70">
              {coursesCount}
            </span>
            <span
              className={`font-semibold text-sm transition-colors group-hover:text-primary ${isActive("/courses") ? activeTextClass : ""}`}
            >
              Courses
            </span>
          </Link>
          <Link
            className={`px-6 h-full flex flex-col justify-center border-border hover:bg-primary/5 dark:hover:bg-primary/10 relative group transition-colors ${isActive("/reviews") ? activeLinkClass : ""}`}
            href="/reviews"
          >
            <span className="absolute top-4 left-6 text-[10px] font-bold text-muted-foreground transition-colors group-hover:text-primary/70">
              15+
            </span>
            <span
              className={`font-semibold text-sm transition-colors group-hover:text-primary ${isActive("/reviews") ? activeTextClass : ""}`}
            >
              Reviews
            </span>
          </Link>
          <Link
            className={`px-6 h-full flex flex-col justify-center border-border hover:bg-primary/5 dark:hover:bg-primary/10 group transition-colors ${isActive("/about") ? activeLinkClass : ""}`}
            href="/about"
          >
            <span
              className={`font-semibold text-sm transition-colors group-hover:text-primary ${isActive("/about") ? activeTextClass : ""}`}
            >
              About
            </span>
          </Link>
          <Link
            className={`px-6 h-full flex flex-col justify-center border-border hover:bg-primary/5 dark:hover:bg-primary/10 group transition-colors ${isActive("/contact") ? activeLinkClass : ""}`}
            href="/contact"
          >
            <span
              className={`font-semibold text-sm transition-colors group-hover:text-primary ${isActive("/contact") ? activeTextClass : ""}`}
            >
              Contact
            </span>
          </Link>
        </nav>
        <div className="flex items-center gap-3 ml-6">
          <CurrencySelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
