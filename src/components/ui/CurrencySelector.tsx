"use client";

import { useState, useRef, useEffect } from "react";
import { useCurrency, SUPPORTED_CURRENCIES, SupportedCurrency } from "@/context/CurrencyContext";

export default function CurrencySelector() {
  const { currency, currencyInfo, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 bg-muted text-foreground text-xs font-bold pl-3 pr-2 py-1.5 rounded-lg border border-transparent hover:border-border focus:outline-none focus:border-primary transition-colors"
      >
        <span>{currencyInfo.symbol} {currencyInfo.label}</span>
        <span className="text-muted-foreground text-[10px]">{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-max bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {SUPPORTED_CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => { setCurrency(c.code as SupportedCurrency); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-xs font-bold transition-colors hover:bg-muted ${
                currency === c.code ? "text-primary bg-primary/10" : "text-foreground"
              }`}
            >
              {c.symbol} {c.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
