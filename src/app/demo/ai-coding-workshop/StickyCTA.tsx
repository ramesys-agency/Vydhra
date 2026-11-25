"use client";

import { useEffect, useState } from "react";
import { WORKSHOP, hasFee } from "./workshop.config";

/** Compact mobile-only bar that links to the single registration form in the hero. */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show once the user scrolls past the hero, hide whenever the registration form is on screen.
    const form = document.querySelector("[data-register-form]");
    let formVisible = false;
    let pastHero = false;
    const update = () => setShow(pastHero && !formVisible);

    const io = new IntersectionObserver(([e]) => {
      formVisible = e.isIntersecting;
      update();
    });
    if (form) io.observe(form);

    const onScroll = () => {
      pastHero = window.scrollY > 900;
      update();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 backdrop-blur-xl transition-transform duration-300 motion-reduce:transition-none lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-foreground">
            {WORKSHOP.dateShort} · {WORKSHOP.durationLabel}
            {hasFee && ` · ₹${WORKSHOP.price}`}
          </p>
          <p className="truncate text-xs text-muted-foreground">{WORKSHOP.format} · No coding required</p>
        </div>
        <a
          href="#register"
          tabIndex={show ? undefined : -1}
          className="shrink-0 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-orange-600"
        >
          Reserve My Seat
        </a>
      </div>
    </div>
  );
}
