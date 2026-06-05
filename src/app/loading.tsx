import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-4 bg-background">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring with primary brand color */}
        <div className="w-16 h-16 rounded-full border-4 border-muted border-t-primary animate-spin" />
        
        {/* Inner Pulsing Glow */}
        <div className="absolute w-8 h-8 rounded-full bg-primary/10 border border-primary/30 animate-pulse" />
      </div>
      <p className="mt-6 text-sm font-medium tracking-widest text-muted-foreground uppercase animate-pulse">
        Loading Vydhra
      </p>
    </div>
  );
}
