import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";
import CourseHero from "./components/CourseHero";
import Curriculum from "./components/Curriculum";
import PricingSidebar from "./components/PricingSidebar";
import TestimonialsSection from "./components/TestimonialsSection";

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-gray-100 dark:bg-[#111] py-3 overflow-hidden whitespace-nowrap border-b border-gray-200 dark:border-border-dark">
          <div className="flex items-center gap-8 animate-pulse">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary shrink-0 ml-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>{" "}
              RECENTLY JOINED
            </span>
            <div className="flex gap-12 text-xs font-medium text-gray-500 dark:text-gray-400">
              <span>
                RALF — WEBDESIGNER{" "}
                <span className="text-gray-300 dark:text-gray-600">JOINED</span>
              </span>
              <span>
                VLAD CIRNEALA — LEAD DEVELOPER{" "}
                <span className="text-gray-300 dark:text-gray-600">JOINED</span>
              </span>
              <span>
                CHRISTIAN B. — WEB STRATEGIST{" "}
                <span className="text-gray-300 dark:text-gray-600">JOINED</span>
              </span>
              <span>
                SARAH M. — UI DESIGNER{" "}
                <span className="text-gray-300 dark:text-gray-600">JOINED</span>
              </span>
            </div>
          </div>
        </div>

        <CourseHero />

        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-12">
              <Curriculum />
            </div>
            <PricingSidebar />
          </div>
        </div>

        <TestimonialsSection />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
