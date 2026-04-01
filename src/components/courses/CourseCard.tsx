import Link from "next/link";
import Image from "next/image";
import React from "react";
import Icon from "@/components/common/Icon";

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  link: string;
}

export default function CourseCard({
  title,
  category,
  description,
  price,
  originalPrice,
  image,
  link,
}: CourseCardProps) {
  return (
    <Link href={link} className="group cursor-pointer block">
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
        <Icon 
          name="arrow_forward" 
          className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" 
          size={20}
        />
      </div>
    </Link>
  );
}
