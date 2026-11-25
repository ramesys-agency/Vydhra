"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#learn", label: "What You'll Learn" },
  { href: "#demos", label: "Live Demos" },
  { href: "#syllabus", label: "Syllabus" },
  { href: "#faqs", label: "FAQs" },
];

/** Workshop-specific header: Vydhra logo, in-page anchors and one CTA (replaces the site Navbar on /demo). */
export default function WorkshopHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 md:h-20 md:px-12">
        <Link href="/" className="mr-auto inline-flex shrink-0" aria-label="Vydhra home">
          <Image alt="Vydhra" src="/logo_vydhra_light.png" width={851} height={248} priority className="h-7 w-auto md:h-8 [.dark_&]:hidden" />
          <Image alt="Vydhra" src="/logo_vydhra_dark.png" width={851} height={248} className="hidden h-7 w-auto md:h-8 [.dark_&]:block" />
        </Link>

        <nav aria-label="Workshop sections" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />

        <a
          href="#register"
          className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-colors hover:bg-orange-600 sm:inline-flex"
        >
          Reserve Your Seat
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="workshop-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          <span className="material-icons" aria-hidden="true">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open && (
        <nav id="workshop-mobile-nav" aria-label="Workshop sections (mobile)" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground hover:bg-primary/5 hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pb-2 pt-1 sm:hidden">
              <a
                href="#register"
                onClick={close}
                className="block rounded-xl bg-primary px-4 py-3 text-center text-base font-bold text-white"
              >
                Reserve Your Seat
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
