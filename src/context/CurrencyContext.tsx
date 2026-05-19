"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type SupportedCurrency = "USD" | "INR";

export interface CurrencyInfo {
  code: SupportedCurrency;
  symbol: string;
  label: string;
}

export const SUPPORTED_CURRENCIES: CurrencyInfo[] = [
  { code: "USD", symbol: "$", label: "USD" },
  { code: "INR", symbol: "₹", label: "INR" },
];

interface CurrencyContextValue {
  currency: SupportedCurrency;
  currencyInfo: CurrencyInfo;
  setCurrency: (c: SupportedCurrency) => void;
  getPrice: (pricing: Record<string, number> | undefined) => number | null;
  formatPrice: (pricing: Record<string, number> | undefined) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<SupportedCurrency>("USD");

  useEffect(() => {
    const stored = localStorage.getItem("vydhra_currency") as SupportedCurrency | null;
    if (stored && SUPPORTED_CURRENCIES.some((c) => c.code === stored)) {
      setCurrencyState(stored);
    }
  }, []);

  const setCurrency = (c: SupportedCurrency) => {
    setCurrencyState(c);
    localStorage.setItem("vydhra_currency", c);
  };

  const currencyInfo = SUPPORTED_CURRENCIES.find((c) => c.code === currency)!;

  const getPrice = (pricing: Record<string, number> | undefined): number | null => {
    if (!pricing) return null;
    return pricing[currency] ?? pricing["USD"] ?? null;
  };

  const formatPrice = (pricing: Record<string, number> | undefined): string => {
    const amount = getPrice(pricing);
    if (amount == null) return "Contact for Pricing";
    return `${currencyInfo.symbol}${amount.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, currencyInfo, setCurrency, getPrice, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
