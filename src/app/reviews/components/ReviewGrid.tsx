import React from "react";
import ReviewCard from "./ReviewCard";

import { Review } from "@/data/reviews";

interface ReviewGridProps {
  reviews: Review[];
}

export default function ReviewGrid({ reviews }: ReviewGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 py-6">
      {reviews.map((r, idx) => (
        <ReviewCard key={idx} {...r} />
      ))}
    </div>
  );
}
