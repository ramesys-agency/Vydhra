"use client";

import { useEffect, useState } from "react";

export function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
    done: ms === 0,
  };
}

export function useCountdown(iso: string) {
  const target = new Date(iso).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);
  useEffect(() => {
    const tick = () => setT(diff(target));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [target]);
  return t;
}

const pad = (n?: number) => (n === undefined ? "--" : String(n).padStart(2, "0"));

type Props = {
  to: string;
  doneText?: string;
  variant?: "boxes" | "inline";
  tone?: "default" | "dark";
};

export default function Countdown({ to, doneText = "Workshop is live", variant = "boxes", tone = "default" }: Props) {
  const t = useCountdown(to);

  if (t?.done) {
    return <span className="text-sm font-bold uppercase tracking-widest text-primary">{doneText}</span>;
  }

  if (variant === "inline") {
    return (
      <span className="font-mono font-black tabular-nums">
        {t && t.days > 0 ? `${t.days}d ` : ""}
        {pad(t?.hours)}h : {pad(t?.minutes)}m : {pad(t?.seconds)}s
      </span>
    );
  }

  const units = [
    { label: "Days", value: t?.days },
    { label: "Hrs", value: t?.hours },
    { label: "Min", value: t?.minutes },
    { label: "Sec", value: t?.seconds },
  ];
  const box =
    tone === "dark" ? "border-white/10 bg-white/5 text-white" : "border-border bg-background text-foreground";

  return (
    <div className="flex gap-2" aria-label="Countdown">
      {units.map((u) => (
        <div key={u.label} className={`min-w-[56px] flex-1 rounded-xl border px-2 py-2 text-center ${box}`}>
          <div className="text-xl font-black tabular-nums sm:text-2xl">{pad(u.value)}</div>
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">{u.label}</div>
        </div>
      ))}
    </div>
  );
}
