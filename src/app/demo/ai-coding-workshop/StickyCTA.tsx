"use client";

import { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { WORKSHOP } from "./workshop.config";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show once the user scrolls past the hero, hide whenever a registration form is on screen.
    const forms = Array.from(document.querySelectorAll("[data-register-form]"));
    const visible = new Set<Element>();
    let pastHero = false;
    const update = () => setShow(pastHero && visible.size === 0);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      update();
    });
    forms.forEach((f) => io.observe(f));

    const onScroll = () => {
      pastHero = window.scrollY > 700;
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
      className={`fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 backdrop-blur-xl transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-12">
        <div className="min-w-0">
          <p className="text-lg font-black leading-tight text-foreground">
            ₹{WORKSHOP.price}{" "}
            <span className="text-sm font-semibold text-muted-foreground line-through">
              ₹{WORKSHOP.originalPrice.toLocaleString("en-IN")}
            </span>
          </p>
          <p className="truncate text-xs font-semibold text-muted-foreground">
            Bonuses end in{" "}
            <span className="text-primary">
              <Countdown to={WORKSHOP.earlyBirdEndsAt} variant="inline" doneText="soon" />
            </span>
          </p>
        </div>
        <a
          href="#register"
          className="shrink-0 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 md:px-8 md:text-base"
        >
          Reserve My Seat
        </a>
      </div>
    </div>
  );
}
