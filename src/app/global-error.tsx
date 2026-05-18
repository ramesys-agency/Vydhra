"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-zinc-950 antialiased">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <span className="material-icons text-orange-600 text-5xl">error_outline</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            A critical error occurred
          </h1>
          
          <p className="text-zinc-600 max-w-md mb-8 text-lg">
            The application encountered a major issue. We've been notified and are working on it.
          </p>

          {error.digest && (
            <p className="text-xs text-zinc-400 mb-8 font-mono">
              Error Digest: {error.digest}
            </p>
          )}
          
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-all active:scale-95 shadow-lg shadow-orange-600/25"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
