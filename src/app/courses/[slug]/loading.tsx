export default function CourseDetailLoading() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section Skeleton */}
        <section className="relative overflow-hidden pt-20 pb-32 bg-background border-b border-border/55">
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[65%] bg-blue-400/10 rounded-full blur-[140px] animate-pulse"></div>
            <div className="absolute bottom-[-15%] left-[-5%] w-[35%] h-[55%] bg-orange-400/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid lg:grid-cols-10 gap-16 items-center">
              {/* Left Column Skeleton */}
              <div className="lg:col-span-5 space-y-6">
                {/* Level Tag and Live badge skeleton */}
                <div className="flex items-center gap-3">
                  <div className="h-6 w-40 bg-muted rounded-full animate-pulse" />
                  <div className="h-5 w-12 bg-muted/60 rounded-full animate-pulse" />
                </div>

                {/* Title Skeleton */}
                <div className="space-y-3">
                  <div className="h-12 md:h-14 bg-muted rounded-2xl animate-pulse w-11/12" />
                  <div className="h-12 md:h-14 bg-muted rounded-2xl animate-pulse w-2/3" />
                </div>

                {/* Subtitle Skeleton */}
                <div className="h-5 bg-muted rounded-lg animate-pulse w-3/4 max-w-sm" />

                {/* Description Skeleton */}
                <div className="space-y-2 pt-2">
                  <div className="h-4 bg-muted rounded-lg animate-pulse w-full" />
                  <div className="h-4 bg-muted rounded-lg animate-pulse w-11/12" />
                  <div className="h-4 bg-muted rounded-lg animate-pulse w-4/5" />
                </div>

                {/* Action Buttons Skeleton */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <div className="h-[60px] w-[220px] bg-muted rounded-2xl animate-pulse" />
                  <div className="h-[60px] w-[180px] bg-muted rounded-2xl animate-pulse" />
                </div>

                {/* Subline metrics skeleton */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
                  <div className="h-5 w-36 bg-muted rounded-lg animate-pulse" />
                  <div className="h-5 w-32 bg-muted rounded-lg animate-pulse" />
                  <div className="h-5 w-36 bg-muted rounded-lg animate-pulse" />
                </div>
              </div>

              {/* Right Visual Image Skeleton */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="absolute w-full h-full bg-orange-400/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative w-full aspect-4/3 rounded-3xl bg-muted animate-pulse border border-border/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid Skeleton */}
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-16">
              {/* Curriculum Module Skeleton */}
              <div className="space-y-6">
                <div className="h-8 w-48 bg-muted rounded-xl animate-pulse" />
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-border/50 rounded-2xl p-6 bg-card space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="h-6 w-2/3 bg-muted rounded-lg animate-pulse" />
                        <div className="h-6 w-6 bg-muted rounded-full animate-pulse" />
                      </div>
                      <div className="h-4 w-1/3 bg-muted/65 rounded-md animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features / Benefits Skeleton */}
              <div className="space-y-6">
                <div className="h-8 w-56 bg-muted rounded-xl animate-pulse" />
                <div className="grid sm:grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-border/50 rounded-2xl p-6 bg-card flex gap-4"
                    >
                      <div className="h-10 w-10 bg-muted rounded-full shrink-0 animate-pulse" />
                      <div className="space-y-2 w-full">
                        <div className="h-5 w-2/3 bg-muted rounded-md animate-pulse" />
                        <div className="h-4 w-full bg-muted/70 rounded-md animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Batches Skeleton */}
              <div className="space-y-6">
                <div className="h-8 w-44 bg-muted rounded-xl animate-pulse" />
                <div className="border border-border/50 rounded-3xl p-6 space-y-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-muted/30 rounded-2xl animate-pulse"
                    >
                      <div className="space-y-2">
                        <div className="h-5 w-32 bg-muted rounded-md" />
                        <div className="h-4 w-48 bg-muted/75 rounded-md" />
                      </div>
                      <div className="h-[48px] w-[140px] bg-muted rounded-xl" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Column */}
            <div className="lg:col-span-1 sticky top-28">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-2xl space-y-6">
                {/* Title and price info */}
                <div className="space-y-3">
                  <div className="h-4 w-28 bg-muted rounded animate-pulse" />
                  <div className="flex items-baseline gap-2">
                    <div className="h-12 w-32 bg-muted rounded-xl animate-pulse" />
                  </div>
                  <div className="h-3 w-16 bg-muted/65 rounded animate-pulse" />
                </div>

                {/* CTA Button Skeleton */}
                <div className="h-[60px] w-full bg-primary/20 rounded-xl animate-pulse" />

                {/* Highlight Checkmarks */}
                <div className="space-y-4 pt-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-muted rounded-full animate-pulse" />
                      <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
                    </div>
                  ))}
                </div>

                {/* Refund Policy badge */}
                <div className="pt-6 border-t border-border">
                  <div className="h-[68px] w-full bg-muted rounded-xl animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
