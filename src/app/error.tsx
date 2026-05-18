"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <span className="material-icons text-primary text-5xl">error_outline</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
        Something went wrong
      </h1>
      
      <p className="text-muted-foreground max-w-md mb-8 text-lg">
        We encountered an unexpected error. This might be due to a temporary backend issue. Please try again later.
      </p>

      {error.digest && (
        <p className="text-xs text-muted-foreground/50 mb-8 font-mono">
          Error Digest: {error.digest}
        </p>
      )}
      
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/25"
        >
          Try Again
        </button>
        
        <Link
          href="/"
          className="px-8 py-3 bg-muted text-foreground rounded-full font-semibold hover:bg-border transition-all active:scale-95"
        >
          Go Back Home
        </Link>
      </div>

      <div className="mt-12 p-6 border border-border rounded-2xl bg-card max-w-sm">
        <h3 className="font-semibold mb-2">Need Help?</h3>
        <p className="text-sm text-muted-foreground">
          If this issue persists, please reach out to our support team on WhatsApp.
        </p>
        <a 
          href="https://wa.me/919946811222" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary mt-3 font-medium hover:underline text-sm"
        >
          Contact Support <span className="material-icons text-sm">open_in_new</span>
        </a>
      </div>
    </div>
  );
}
