"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/logo_vydhra_dark.png"
      : "/logo_vydhra_light.png";

  return (
    <footer className="border-t border-border pt-20 pb-28 lg:pb-20 bg-card text-foreground">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="group inline-flex items-center">
              <Image
                alt="Vydhra Logo"
                className="h-9 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                src={logoSrc}
                width={851}
                height={248}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Redefining tech education through real capability, hands-on
              production systems, and mentor-led bootcamps.
            </p>
            <div className="pt-2">
              <span className="text-xs font-black uppercase tracking-wider text-muted-foreground/60 block">
                Parent Company
              </span>
              <span className="text-sm font-bold text-foreground/80 mt-1 block">
                Ramesys Private Limited
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary">
              Explore
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary">
              Support & Legal
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:support@vydhra.com"
                  className="inline-flex items-center gap-2 text-xs font-black text-muted-foreground hover:text-primary transition-colors bg-background px-4 py-2 rounded-full border border-border"
                >
                  <span className="material-icons text-xs">email</span>
                  support@vydhra.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 text-center md:text-left">
          <p>© {new Date().getFullYear()} Vydhra. All rights reserved.</p>
          <p>A Wholly Owned Subsidiary of Ramesys Private Limited</p>
        </div>
      </div>
    </footer>
  );
}
