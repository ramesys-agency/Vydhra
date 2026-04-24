"use client";

import Link from "next/link";
import React from "react";

interface PricingSidebarProps {
  price: string;
  priceINR?: number;
  priceUSD?: number;
  slug: string;
}

export default function PricingSidebar({ price, priceINR, priceUSD, slug }: PricingSidebarProps) {
  const displayPrice = priceUSD ? `$${priceUSD}` : price;

  return (
    <aside className="sticky top-28">
      <div className="bg-card p-8 rounded-2xl border border-border shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
              One-time payment
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black">{displayPrice}</span>
            </div>
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
            -45% OFF
          </div>
        </div>
        <Link
          href={`/courses/${slug}/enroll`}
          className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all mb-8 shadow-lg shadow-primary/25 cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center no-underline"
        >
          ENROLL NOW
        </Link>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-sm">
            <span className="material-icons text-green-500">check_circle</span>
            <span>Live Interactive Classes</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="material-icons text-green-500">check_circle</span>
            <span>Community Access</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="material-icons text-green-500">check_circle</span>
            <span>Certificate of Completion</span>
          </div>
        </div>
        <div className="pt-8 border-t border-border">
          <div className="flex items-center gap-4 bg-muted p-4 rounded-xl">
            <span className="material-icons text-primary text-3xl">
              verified_user
            </span>
            <div className="text-[12px] font-bold leading-tight uppercase">
              14-DAY MONEY-BACK GUARANTEE
              <br />
              <span className="text-muted-foreground font-medium normal-case">
                No questions asked.
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
