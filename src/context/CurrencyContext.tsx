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
  formatAmount: (usdAmount: number | null | undefined) => string;
  usdToInrRate: number;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<SupportedCurrency>("USD");
  const [usdToInrRate, setUsdToInrRate] = useState<number>(83.5);

  useEffect(() => {
    // 1. Fetch real-time exchange rate
    const fetchExchangeRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        if (res.ok) {
          const data = await res.json();
          if (data?.rates?.INR) {
            setUsdToInrRate(data.rates.INR);
          }
        }
      } catch (err) {
        console.error("Failed to fetch USD to INR exchange rate:", err);
      }
    };

    // 2. Fetch country via IP geolocation
    const detectLocation = async () => {
      const apis = [
        "https://ipapi.co/json/",
        "https://ip-api.com/json/",
        "https://api.country.is/"
      ];

      for (const api of apis) {
        try {
          const res = await fetch(api);
          if (res.ok) {
            const data = await res.json();
            const countryCode = (
              data.country_code || 
              data.countryCode || 
              data.country || 
              ""
            ).toUpperCase();

            if (countryCode) {
              if (countryCode === "IN") {
                setCurrencyState("INR");
              } else {
                setCurrencyState("USD");
              }
              break; // Stop trying other APIs if one succeeds
            }
          }
        } catch (err) {
          console.warn(`Geolocation api ${api} failed:`, err);
        }
      }
    };

    fetchExchangeRate();
    detectLocation();
  }, []);

  const setCurrency = (c: SupportedCurrency) => {
    setCurrencyState(c);
  };

  const currencyInfo = SUPPORTED_CURRENCIES.find((c) => c.code === currency)!;

  const getPrice = (pricing: Record<string, number> | undefined): number | null => {
    if (!pricing) return null;
    if (pricing[currency] !== undefined && pricing[currency] !== null) {
      return pricing[currency];
    }
    const usdAmount = pricing["USD"] ?? null;
    if (usdAmount === null) return null;

    if (currency === "INR") {
      return Math.round(usdAmount * usdToInrRate);
    }
    return usdAmount;
  };

  const formatPrice = (pricing: Record<string, number> | undefined): string => {
    const amount = getPrice(pricing);
    if (amount == null) return "Contact for Pricing";
    return `${currencyInfo.symbol}${amount.toLocaleString()}`;
  };

  const formatAmount = (usdAmount: number | null | undefined): string => {
    if (usdAmount == null || isNaN(usdAmount)) return "";
    let amount = usdAmount;
    if (currency === "INR") {
      amount = Math.round(usdAmount * usdToInrRate);
    }
    return `${currencyInfo.symbol}${amount.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, currencyInfo, setCurrency, getPrice, formatPrice, formatAmount, usdToInrRate }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
