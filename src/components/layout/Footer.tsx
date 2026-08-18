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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            <div className="pt-2 space-y-3">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-muted-foreground/60 block">
                  Parent Company
                </span>
                <span className="text-sm font-bold text-foreground/80 mt-1 block">
                  Owned and Operated by <a href="https://www.ramesys.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">Ramesys Private Limited</a>
                </span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                <span><strong className="text-foreground/70">CIN:</strong> U62011WR2026PTC292702</span>
                <span><strong className="text-foreground/70">GST:</strong> 19AAPCR6449A1Z2</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-muted-foreground/60 block">
                    Corporate Address
                  </span>
                  <span className="text-xs font-medium text-muted-foreground mt-0.5 block leading-relaxed">
                    Godrej Genesis, 16th Floor Unit 1604, Street Number 18, EP & GP Block, Salt Lake Sector V, Bidhannagar, Kolkata, West Bengal - 700091
                  </span>
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-muted-foreground/60 block">
                    Registered Address
                  </span>
                  <span className="text-xs font-medium text-muted-foreground mt-0.5 block leading-relaxed">
                    Uttarpara, Hooghly,712258, 1 Radhika Charan Chatter, Uttarpara, Hooghly, Serampur Uttarpara, West Bengal, India, 712258
                  </span>
                </div>
              </div>
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
                  href="/referrals"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Referral Program
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

        {/* Disclaimer Note */}
        <div className="border-t border-border/60 pt-6 pb-2 text-[11px] text-muted-foreground/80 leading-relaxed italic">
          <p><strong className="text-primary not-italic font-bold">Disclaimer:</strong> Vydhra is a brand solely owned and operated by Ramesys Pvt. Ltd. All certificates, acknowledgments, and other official documents issued under the Vydhra brand are issued by Ramesys Pvt. Ltd. on behalf of Vydhra and shall be deemed valid and legally binding. References to &quot;Vydhra&quot; on this website are made in its capacity as a brand operated by Ramesys Pvt. Ltd.</p>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 text-center md:text-left">
          <p>© {new Date().getFullYear()} Vydhra. All rights reserved.</p>
          <p>Owned and Operated by <a href="https://www.ramesys.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">Ramesys Private Limited</a></p>
        </div>
      </div>
    </footer>
  );
}
