import Image from "next/image";
import React from "react";

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
}

export default function CourseCard({
  title,
  category,
  description,
  price,
  originalPrice,
  image,
}: CourseCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-200 dark:bg-card-dark rounded-none mb-4">
        <Image
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          src={image}
          width={400}
          height={300}
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
          {category}
        </div>
      </div>
      <h3 className="text-xl font-extrabold uppercase mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {originalPrice && (
            <span className="text-gray-400 line-through mr-2 text-base font-black">
              {originalPrice}
            </span>
          )}
          <span className="text-2xl font-black">{price}</span>
        </div>
        <span className="material-icons text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          arrow_forward
        </span>
      </div>
    </div>
  );
}
