"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "@/components/common/Icon";

interface CourseHeroProps {
  title: string;
  subtitle: string;
  description: string;
  live: boolean;
  image: string;
  heroImage?: string;
  price: string;
  priceINR?: number;
  priceUSD?: number;
  level: string;
  duration: string;
  requirements: string[];
  slug: string;
}

export default function CourseHero({
  title,
  subtitle,
  description,
  live,
  image,
  heroImage,
  price,
  priceINR,
  priceUSD,
  level,
  slug,
}: CourseHeroProps) {
  const displayPrice = priceUSD ? `$${priceUSD}` : price;

  return (
    <section className="relative overflow-hidden pt-20 pb-32 bg-background">
      {/* Background Graphics (Blobs & Swishes) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blurred Blobs - Increased brightness */}
        <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[65%] bg-blue-400/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-15%] left-[-5%] w-[35%] h-[55%] bg-orange-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[10%] left-[5%] w-[25%] h-[35%] bg-purple-300/15 rounded-full blur-[100px]"></div>

        {/* Curved Swish Lines - Increased stroke opacity */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.5] dark:opacity-[0.2]"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 600C100 500 400 700 700 500C1000 300 1300 500 1500 400"
            stroke="url(#paint0_linear)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M-50 700C250 600 550 800 850 600C1150 400 1450 600 1650 500"
            stroke="url(#paint1_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-100"
              y1="500"
              x2="1500"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="0.5" stopColor="#FF6B00" stopOpacity="0.1" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="-50"
              y1="600"
              x2="1650"
              y2="600"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6B00" stopOpacity="0.1" />
              <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="1" stopColor="#FF6B00" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-10 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-orange-600 dark:text-orange-400 font-semibold text-lg tracking-tight">
                {level}-Friendly {title.split(" ")[0]} Course
              </span>
              {live && (
                <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
                  Live
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tight mb-4">
              {title}
            </h1>

            <p className="text-blue-600/60 dark:text-blue-400/60 font-bold uppercase tracking-widest text-xs mb-8">
              {subtitle}
            </p>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href={`/courses/${slug}/enroll`}
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#E56000] transition-all shadow-xl shadow-orange-500/20 cursor-pointer hover:scale-105 active:scale-95 no-underline"
              >
                Enroll Now - {displayPrice}
              </Link>
              <a
                href="#curriculum"
                className="bg-background text-foreground px-10 py-5 rounded-2xl font-bold text-lg border border-border hover:bg-muted transition-all shadow-sm cursor-pointer no-underline inline-block"
              >
                View Curriculum
              </a>
            </div>

            {/* Feature Sub-line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12 text-muted-foreground text-sm font-medium">
              <div className="flex items-center gap-2">
                <Icon name="verified" className="text-blue-500" size={18} />
                <span>Certificate included</span>
              </div>
              <span className="opacity-40 select-none">•</span>
              <div className="flex items-center gap-2">
                <Icon
                  name="sentiment_satisfied_alt"
                  className="text-blue-500"
                  size={18}
                />
                <span>{level} friendly</span>
              </div>
              <span className="opacity-40 select-none">•</span>
              <div className="flex items-center gap-2">
                <Icon name="psychology" className="text-blue-500" size={18} />
                <span>Practical learning</span>
              </div>
            </div>
          </div>

          {/* Right Visuals (Static Hero Photo/Graphic) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background Glow for Blend */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-400/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="relative w-full max-w-[850px] rounded-3xl overflow-hidden border border-border shadow-lg">
              <Image
                src={heroImage || image}
                alt="Course Hero Visual"
                width={1400}
                height={1400}
                className="w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 dark:brightness-110 rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
