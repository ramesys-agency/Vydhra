import Image from "next/image";
import React from "react";

interface ReviewCardProps {
  name: string;
  course: string;
  text: string;
  rating: number;
  image?: string;
  verified?: boolean;
}

export default function ReviewCard({
  name,
  course,
  text,
  rating,
  image,
  verified,
}: ReviewCardProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="break-inside-avoid bg-card rounded-2xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300 mb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="size-12 shrink-0 rounded-full border-2 border-primary/10 overflow-hidden relative bg-primary/5 flex items-center justify-center">
            {image ? (
              <Image src={image} alt={name} fill className="object-cover" unoptimized />
            ) : (
              <span className="material-icons text-primary/50 text-2xl">
                person
              </span>
            )}
          </div>
          <div>
            <p className="text-foreground font-bold text-base">{name}</p>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest leading-tight">
              {course}
            </p>
          </div>
        </div>
        <div className="flex text-primary">
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="material-icons text-[20px]">
              star
            </span>
          ))}
          {halfStar && (
            <span className="material-icons text-[20px]">star_half</span>
          )}
        </div>
      </div>

      {verified && (
        <div className="flex items-center gap-1.5 bg-primary/5 text-primary px-2.5 py-1 rounded-full border border-primary/20 w-fit">
          <span className="material-icons text-[14px]">verified</span>
          <span className="text-[10px] font-black uppercase">
            Verified Purchase
          </span>
        </div>
      )}

      <p className="text-foreground text-sm leading-relaxed font-medium">
        &quot;{text}&quot;
      </p>
    </div>
  );
}
