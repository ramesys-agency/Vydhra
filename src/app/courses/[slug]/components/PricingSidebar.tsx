"use client";

import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";

interface PricingSidebarProps {
  pricing: Record<string, number>;
  slug: string;
  originalPrice?: number;
  originalPricing?: Record<string, number>;
}

export default function PricingSidebar({
  pricing,
  slug,
  originalPrice,
  originalPricing,
}: PricingSidebarProps) {
  const { formatPrice, formatAmount, getPrice, currencyInfo } = useCurrency();
  const displayPrice = formatPrice(pricing);

  const originalAmount = originalPricing ? getPrice(originalPricing) : null;
  const formattedOriginalPrice =
    originalAmount !== null
      ? `${currencyInfo.symbol}${originalAmount.toLocaleString()}`
      : originalPrice
        ? formatAmount(originalPrice)
        : null;

  return (
    <aside className="sticky top-28">
      <div className="bg-card p-8 rounded-2xl border border-border shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
              Price
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-5xl font-black">{displayPrice}</span>
              {formattedOriginalPrice && (
                <span className="text-muted-foreground line-through text-lg font-medium opacity-70">
                  {formattedOriginalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest block mt-1">
              excl. GST
            </span>
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
              7-DAY MONEY-BACK GUARANTEE
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
