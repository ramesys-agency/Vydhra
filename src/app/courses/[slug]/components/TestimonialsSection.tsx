import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "SVEN",
    role: "DIPLOMA DESIGNER, WEB DESIGNER",
    text: "I can't emphasize enough how valuable this course is. Learning Webflow through Jonas' course completely shifted my professional focus.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOdBRCWmTBTRC_HZfFKGkpWp-HFz3BLIUTk5nerVlvHn1pS4QO-wGcatYu_kz7AXb4kvjAU4O7ie68XhcjoySty9C_xzr0fCbsgwRXye-GR1HjpqVdrvax-u34X_kboSum5S9exzrSc6_hHM_4aZVrrwJRLA9xEdDg8vZJAkgNJBM0WZeyeJ6iorvJOj0s1Czz2-75U-bJn7VlkbJsh8FL11wahHhCLK8Mf6OOtSuc313j_xg4OcHKxaM2RuXCTk50DGR0OFhjrx6q",
  },
  {
    name: "SABINE R.",
    role: "MARKETING AUTOMATION EXPERT",
    text: "I would recommend the course to anyone who truly wants to understand and learn Webflow. The approach is unique and super practical.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjJBpf46PJIhqsp_LpD8G6wjoioe0aaDdROUv9Dtd8oWGpBVI93hEfVDmsoKuzm-trRoXFpiyyyO5vJA5RTBY7lX3YwbkCilkde6BDi5mZLzRJQql80J-yNlEBTRpyq3exfo9O7csBhanW6wtzcpBSYd90bS_mOXQIfIOOI4sfCKhwj8IrlFHpEpKAwesqpZmY5DWK566ZNRl0i18PiIGLFiwXih-5ybk3tUHwkkOBTpbD0FE7ekoZOiMKh-4MZVDaVq39XdBtJ9Yg",
  },
  {
    name: "LUCA",
    role: "WEB DESIGNER & SEO EXPERT",
    text: "Better than the Webflow University. Jonas' course is much closer to the real workday of a web designer.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADMrsfBz5NMZhRw8pgPN8NRsj9OKK96CGkrpkNFG1V1P9tZjsn6GklKSxJkLVv4aIFpH9HIsgx5C5vpL85IEnBBEWLJ7BfZ5k7ut940xcsN9w5tp9O2Ou5mkN7I5OhhT09tnBgA_CVs-zJD7YidZFIgcYvfReWMZd8GIjc1PKiIyD9rDK91zw8QKD9orIwsh6cVHHqAvEHn566rahEwovnLqMVexVfeab5x15i41FTvqpltQzIC3myQ99fJVyaSRHFdkqsmSgN493Z",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white dark:bg-[#111] py-24 border-t border-gray-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">Was andere sagen</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-card-dark p-10 rounded-3xl border border-gray-200 dark:border-border-dark flex flex-col"
            >
              <Image
                alt={t.name}
                className="w-20 h-20 rounded-2xl object-cover grayscale mb-8"
                src={t.image}
                width={80}
                height={80}
              />
              <p className="text-lg leading-relaxed mb-10 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="mt-auto">
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border border-gray-300 dark:border-border-dark rounded-full font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
            Alle 791 Reviews lesen
          </button>
        </div>
      </div>
    </section>
  );
}
