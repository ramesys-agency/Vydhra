"use client";

import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/common/Icon";
import { useCurrency } from "@/context/CurrencyContext";

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  pricing: Record<string, number>;
  originalPrice?: number | string;
  originalPricing?: Record<string, number>;
  image: string;
  link: string;
}

export default function CourseCard({
  title,
  category,
  description,
  pricing,
  originalPrice,
  originalPricing,
  image,
  link,
}: CourseCardProps) {
  const { formatPrice, formatAmount, getPrice, currencyInfo } = useCurrency();
  const displayPrice = formatPrice(pricing);

  const originalAmount = originalPricing ? getPrice(originalPricing) : null;
  const formattedOriginalPrice = originalAmount !== null
    ? `${currencyInfo.symbol}${originalAmount.toLocaleString()}`
    : typeof originalPrice === "number"
      ? formatAmount(originalPrice)
      : originalPrice && !isNaN(parseFloat(originalPrice))
        ? formatAmount(parseFloat(originalPrice))
        : null;

  return (
    <Link href={link} className="group cursor-pointer block h-full">
      <div className="bg-card border border-border rounded-4xl p-5 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
        <div className="relative overflow-hidden aspect-4/3 rounded-2xl mb-6">
          <Image
            alt={title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
            src={image || "/courses/ai-agents.png"}
            width={400}
            height={300}
          />
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-primary px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg border border-border">
            {category}
          </div>
        </div>

        <div className="flex flex-col grow px-1">
          <h3 className="text-xl font-black uppercase mb-3 text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 line-clamp-2 grow leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between pt-5 border-t border-border">
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-primary">
                  {displayPrice}
                </span>
                {formattedOriginalPrice && (
                  <span className="text-muted-foreground opacity-70 line-through text-sm font-bold">
                    {formattedOriginalPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                excl. GST
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:rotate-[-10deg] transition-all duration-500 shadow-inner text-foreground">
              <Icon
                name="arrow_forward"
                className="transform group-hover:translate-x-0.5 transition-transform"
                size={22}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
