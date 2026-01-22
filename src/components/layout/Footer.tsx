import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-border-dark mt-24 py-12 bg-white dark:bg-background-dark">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter">
          <span className="bg-primary p-1 rounded text-white material-icons text-sm">
            layers
          </span>
          FORMBURG
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Imprint
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-border-dark hover:bg-primary hover:text-white transition-all"
          >
            <span className="material-icons text-sm">facebook</span>
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-border-dark hover:bg-primary hover:text-white transition-all"
          >
            <span className="material-icons text-sm">camera</span>
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-gray-200 dark:border-border-dark hover:bg-primary hover:text-white transition-all"
          >
            <span className="material-icons text-sm">alternate_email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
