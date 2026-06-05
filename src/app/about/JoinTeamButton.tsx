"use client";

import React, { useState, useEffect } from "react";

export default function JoinTeamButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:bg-orange-600 hover:shadow-primary/30 transition-all cursor-pointer hover:scale-105 active:scale-95 uppercase tracking-widest text-xs sm:text-sm"
      >
        Join Our Team
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-md bg-card border border-border p-8 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-10">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <span className="material-icons text-xl">close</span>
            </button>

            {/* Content */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="material-icons text-primary text-3xl">work_outline</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">
                  Work With Us
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We are always on the lookout for talented individuals to join Vydhra. If you think you can be a great fit for our company, we want to hear from you!
                </p>
              </div>

              <div className="bg-muted/50 p-5 rounded-2xl border border-border text-center space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Send your resume & details to:
                </p>
                <a
                  href="mailto:info@vydhra.com"
                  className="block font-black text-primary hover:text-orange-600 transition-colors text-lg break-all"
                >
                  info@vydhra.com
                </a>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-secondary text-secondary-foreground font-bold py-3.5 rounded-2xl hover:bg-muted transition-all border border-border cursor-pointer text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
