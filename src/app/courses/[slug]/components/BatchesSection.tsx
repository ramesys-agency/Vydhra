import Link from "next/link";
import { CourseBatch } from "@/types/course";

interface BatchesSectionProps {
  batches?: CourseBatch[];
  slug: string;
  coursePrice: string;
  coursePriceUSD?: number;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BatchesSection({
  batches,
  slug,
  coursePrice,
  coursePriceUSD,
}: BatchesSectionProps) {
  const activeBatches = (batches ?? []).filter((b) => b.status === "ACTIVE" || b.status === "UPCOMING");

  if (activeBatches.length === 0) return null;

  const displayCoursePrice = coursePriceUSD ? `$${coursePriceUSD}` : coursePrice;

  return (
    <section>
      <h2 className="text-3xl font-bold mb-2">Available Batches</h2>
      <p className="text-muted-foreground mb-8">
        Enroll in an upcoming cohort and learn alongside peers with live sessions.
      </p>

      <div className="grid gap-4">
        {activeBatches.map((batch) => {
          const batchPrice = batch.priceUSD
            ? `$${batch.priceUSD}`
            : batch.price
            ? `$${batch.price}`
            : displayCoursePrice;

          const seatsLeft =
            batch.maxSeats != null
              ? batch.maxSeats - (batch.enrollmentCount ?? 0)
              : null;

          const isFull = seatsLeft !== null && seatsLeft <= 0;

          return (
            <div
              key={batch.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-border rounded-2xl px-6 py-5 hover:border-primary/40 transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Active
                  </span>
                  {seatsLeft !== null && (
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        isFull
                          ? "bg-red-500/10 text-red-500"
                          : seatsLeft <= 5
                          ? "bg-orange-500/10 text-orange-500"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isFull ? "Full" : `${seatsLeft} seat${seatsLeft !== 1 ? "s" : ""} left`}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-lg">{batch.name}</h3>
                <p className="text-sm text-muted-foreground">
                  <span className="material-icons text-[14px] align-middle mr-1">calendar_today</span>
                  {formatDate(batch.startDate)} &rarr; {formatDate(batch.endDate)}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <p className="text-2xl font-black">{batchPrice}</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    One-time
                  </p>
                </div>
                <Link
                  href={`/courses/${slug}/enroll`}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all no-underline ${
                    isFull
                      ? "bg-muted text-muted-foreground cursor-not-allowed pointer-events-none"
                      : "bg-primary text-white hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
                  }`}
                >
                  {isFull ? "Batch Full" : "Enroll Now"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
