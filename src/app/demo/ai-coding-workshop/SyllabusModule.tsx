"use client";

import { useId, useState } from "react";

type Props = {
  index: number;
  title: string;
  minutes: number;
  text: string;
  detailLabel?: string;
  detail?: string;
  topics?: string[];
};

/** Timeline item on desktop (always expanded); collapsible accordion item on mobile. */
export default function SyllabusModule({ index, title, minutes, text, detailLabel, detail, topics }: Props) {
  const [open, setOpen] = useState(index === 0);
  const panelId = useId();
  const num = String(index + 1).padStart(2, "0");

  return (
    <li className="relative md:pl-16">
      <span
        aria-hidden="true"
        className="absolute left-0 top-5 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-black text-primary md:flex"
      >
        {num}
      </span>

      <div className="rounded-2xl border border-border bg-card transition-colors hover:border-primary/40">
        <h3 className="text-base font-bold text-foreground md:text-lg">
          {/* Mobile: accordion toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-center gap-3 p-4 text-left md:hidden"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-black text-primary">
              {num}
            </span>
            <span className="flex-1">
              <span className="sr-only">Module {index + 1}: </span>
              {title}
            </span>
            <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">
              {minutes} min
            </span>
            <span
              aria-hidden="true"
              className={`material-icons shrink-0 text-primary transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
            >
              expand_more
            </span>
          </button>
          {/* Desktop: static heading */}
          <span className="hidden items-center justify-between gap-4 px-6 pt-5 md:flex">
            <span>
              <span className="sr-only">Module {index + 1}: </span>
              {title}
            </span>
            <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
              {minutes} min
            </span>
          </span>
        </h3>

        <div id={panelId} className={`${open ? "block" : "hidden"} px-4 pb-5 md:block md:px-6 md:pt-2`}>
          <p className="leading-relaxed text-muted-foreground">{text}</p>
          {detail && (
            <p className="mt-3 text-sm">
              <span className="font-bold text-primary">{detailLabel}: </span>
              <span className="text-foreground">{detail}</span>
            </p>
          )}
          {topics && (
            <ul className="mt-3 grid gap-1.5 text-sm text-foreground sm:grid-cols-2">
              {topics.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="material-icons mt-0.5 text-base text-primary" aria-hidden="true">
                    chevron_right
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
