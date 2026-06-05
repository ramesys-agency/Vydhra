import React from "react";

const ratings = [
  { stars: 5, percentage: 84 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 1 },
  { stars: 2, percentage: 0 },
  { stars: 1, percentage: 0 },
];

export default function RatingSummary() {
  return (
    <div className="flex flex-wrap gap-x-12 gap-y-8 p-10 bg-card border border-border rounded-2xl shadow-sm">
      <div className="flex flex-col gap-2 justify-center border-r border-border pr-12">
        <p className="text-foreground text-7xl font-black tracking-tighter">
          4.9
        </p>
        <div className="flex gap-1 text-primary">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star_half</span>
        </div>
        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-1">
          15+ Reviews
        </p>
      </div>
      <div className="grid min-w-[280px] max-w-[500px] flex-1 grid-cols-[30px_1fr_45px] items-center gap-y-3">
        {ratings.map((r) => (
          <React.Fragment key={r.stars}>
            <span className="text-foreground text-sm font-bold">{r.stars}</span>
            <div className="flex h-3 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="rounded-full bg-primary"
                style={{ width: `${r.percentage}%` }}
              ></div>
            </div>
            <p className="text-muted-foreground text-xs font-bold text-right">
              {r.percentage}%
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
