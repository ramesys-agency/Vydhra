import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-border-dark mt-24 py-12 bg-white dark:bg-background-dark">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden border border-gray-100 dark:border-gray-800">
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
        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <Link href="/courses" className="hover:text-primary transition-colors">
            Courses
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:support@vydhra.com"
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors bg-gray-50 dark:bg-card-dark px-4 py-2 rounded-full border border-gray-200 dark:border-border-dark"
          >
            <span className="material-icons text-sm">email</span>
            support@vydhra.com
          </a>
        </div>
      </div>
    </footer>
  );
}
