import Image from "next/image";
import React from "react";

interface CourseHeroProps {
  title: string;
  subtitle: string;
  description: string;
  live: boolean;
  image: string;
  price: string;
}

export default function CourseHero({
  title,
  subtitle,
  description,
  live,
  image,
  price,
}: CourseHeroProps) {
  return (
    <section className="relative hero-gradient overflow-hidden py-24">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-6 flex items-center gap-4">
            {live && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                Live Interactive Classes
              </span>
            )}
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {subtitle}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-primary leading-[0.9] tracking-tighter mb-8 uppercase">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-primary/20 cursor-pointer">
              Enroll Now - {price}
            </button>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  alt="Student"
                  className="w-10 h-10 rounded-full border-2 border-background-dark"
                  src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDi7_tFib3FMI8n6oyKaCWfoJ03FXj7_fOuMyOHK-0IXV4I7H1ZDOVp248bkBrCPwBzeU7oYtDlAJ8bIde02tsLlzmVcGwA7PRE7-jMDcm7N9rnPUCKSnX3QmNmUoRxEd_DicUbBHu2qK_qSjykOClcadnZlboeyAuxiKs8EK10U-h5e2mI-P7JbtFd_JN78Zoso8uYRKcytJSNzWLXz0L53LSgyqsM582z-STsh0IK2GLfktZU4w8Y3_7IzO3-LpNXjdd7lhEovlKo`}
                  width={40}
                  height={40}
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white">
                +791
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative flex items-center justify-center">
            <Image
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              src={image}
              width={640}
              height={360}
            />
            <button className="z-20 w-24 h-24 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group/play transition-all cursor-pointer">
              <span className="material-icons text-white text-5xl translate-x-1 group-hover/play:scale-110 transition-transform">
                play_arrow
              </span>
            </button>
          </div>
          <div className="absolute -top-10 -right-10 animate-bounce duration-[3000ms]">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 p-[1px]">
              <div className="w-full h-full rounded-full bg-background-dark flex flex-col items-center justify-center text-center p-4">
                <span className="material-icons text-primary mb-1">verified</span>
                <span className="text-[10px] font-bold leading-tight text-white uppercase">
                  CERTIFIED<br />COURSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
