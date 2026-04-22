import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-foreground">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative h-24 w-auto flex items-center justify-center">
            <Image
              alt="Vydhra Logo"
              className="h-full w-auto object-contain scale-[2.5] group-hover:scale-[2.6] transition-transform duration-300"
              src="/logo_vydhra.png"
              width={240}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <Link
            href="/courses"
            className="hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:support@vydhra.com"
            className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors bg-card px-4 py-2 rounded-full border border-border"
          >
            <span className="material-icons text-sm">email</span>
            support@vydhra.com
          </a>
        </div>
      </div>
    </footer>
  );
}
