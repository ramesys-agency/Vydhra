import React from "react";

export default function CoursesLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[1440px] mx-auto px-6 py-12 text-foreground">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="mb-12 space-y-4">
            {/* Title lines */}
            <div className="h-10 md:h-14 bg-muted rounded-2xl animate-pulse w-3/4 max-w-2xl" />
            <div className="h-10 md:h-14 bg-muted rounded-2xl animate-pulse w-1/2 max-w-md" />

            {/* Description lines */}
            <div className="pt-2 space-y-2 max-w-3xl">
              <div className="h-4 bg-muted rounded-lg animate-pulse w-full" />
              <div className="h-4 bg-muted rounded-lg animate-pulse w-5/6" />
            </div>
          </div>

          {/* Grid of Skeleton Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-4xl p-5 shadow-sm h-full flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="relative aspect-4/3 rounded-2xl mb-6 bg-muted animate-pulse overflow-hidden">
                  {/* Category tag skeleton */}
                  <div className="absolute top-4 left-4 bg-background/50 backdrop-blur-md w-24 h-6 rounded-full border border-border/50 animate-pulse" />
                </div>

                {/* Content Placeholder */}
                <div className="flex flex-col grow px-1 space-y-3">
                  {/* Title skeleton */}
                  <div className="h-6 bg-muted rounded-xl animate-pulse w-5/6" />

                  {/* Description skeleton */}
                  <div className="space-y-2 grow">
                    <div className="h-4 bg-muted rounded-lg animate-pulse w-full" />
                    <div className="h-4 bg-muted rounded-lg animate-pulse w-4/5" />
                  </div>

                  {/* Footer skeleton */}
                  <div className="flex items-center justify-between pt-5 border-t border-border mt-4">
                    {/* Price skeleton */}
                    <div className="h-8 bg-muted rounded-lg animate-pulse w-24" />

                    {/* Button skeleton */}
                    <div className="w-12 h-12 rounded-2xl bg-muted animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
