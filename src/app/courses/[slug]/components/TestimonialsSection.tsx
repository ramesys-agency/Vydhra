import Image from "next/image";
import React from "react";
import { Testimonial } from "@/data/courses";
import Link from "next/link";

const defaultTestimonials: Testimonial[] = [
  {
    name: "SVEN",
    role: "SOFTWARE ENGINEER",
    text: "I can't emphasize enough how valuable this course is. Learning Python through this course completely shifted my professional focus.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOdBRCWmTBTRC_HZfFKGkpWp-HFz3BLIUTk5nerVlvHn1pS4QO-wGcatYu_kz7AXb4kvjAU4O7ie68XhcjoySty9C_xzr0fCbsgwRXye-GR1HjpqVdrvax-u34X_kboSum5S9exzrSc6_hHM_4aZVrrwJRLA9xEdDg8vZJAkgNJBM0WZeyeJ6iorvJOj0s1Czz2-75U-bJn7VlkbJsh8FL11wahHhCLK8Mf6OOtSuc313j_xg4OcHKxaM2RuXCTk50DGR0OFhjrx6q",
  },
  {
    name: "SABINE R.",
    role: "DATA SCIENTIST",
    text: "I would recommend the course to anyone who truly wants to understand and learn Python. The approach is unique and super practical.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjJBpf46PJIhqsp_LpD8G6wjoioe0aaDdROUv9Dtd8oWGpBVI93hEfVDmsoKuzm-trRoXFpiyyyO5vJA5RTBY7lX3YwbkCilkde6BDi5mZLzRJQql80J-yNlEBTRpyq3exfo9O7csBhanW6wtzcpBSYd90bS_mOXQIfIOOI4sfCKhwj8IrlFHpEpKAwesqpZmY5DWK566ZNRl0i18PiIGLFiwXih-5ybk3tUHwkkOBTpbD0FE7ekoZOiMKh-4MZVDaVq39XdBtJ9Yg",
  },
  {
    name: "LUCA",
    role: "BACKEND DEVELOPER",
    text: "Better than any university course. This course is much closer to the real workday of a software developer.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADMrsfBz5NMZhRw8pgPN8NRsj9OKK96CGkrpkNFG1V1P9tZjsn6GklKSxJkLVv4aIFpH9HIsgx5C5vpL85IEnBBEWLJ7BfZ5k7ut940xcsN9w5tp9O2Ou5mkN7I5OhhT09tnBgA_CVs-zJD7YidZFIgcYvfReWMZd8GIjc1PKiIyD9rDK91zw8QKD9orIwsh6cVHHqAvEHn566rahEwovnLqMVexVfeab5x15i41FTvqpltQzIC3myQ99fJVyaSRHFdkqsmSgN493Z",
  },
];

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <section className="bg-white dark:bg-[#111] py-24 border-t border-gray-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            What others say
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-card-dark p-10 rounded-3xl border border-gray-200 dark:border-border-dark flex flex-col hover:border-primary/30 transition-all group"
            >
              {t.image ? (
                <Image
                  alt={t.name}
                  className="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all mb-8 shadow-lg shadow-slate-200/50"
                  src={t.image}
                  width={80}
                  height={80}
                />
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary font-black text-2xl border border-primary/20 shadow-lg shadow-orange-100">
                  {t.name[0]}
                </div>
              )}
              <p className="text-lg leading-relaxed mb-10 italic text-slate-600 dark:text-slate-300">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="font-bold text-[#1E293B] dark:text-white text-xl">
                  {t.name}
                </p>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href={"/reviews"}
            className="px-10 py-5 border border-gray-200 dark:border-border-dark bg-white dark:bg-transparent rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-sm cursor-pointer"
          >
            Read all reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
