import Image from "next/image";
import React from "react";

export default function SocialProofSection() {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-9xl font-black tracking-tighter mb-4">791</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              More than 791 students from a wide variety of industries have
              already joined!
            </p>
            <button className="w-fit border-2 border-slate-900 dark:border-white py-3 px-8 rounded-full font-bold uppercase text-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer">
              Read all reviews
            </button>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm">
                <Image
                  alt="Sven"
                  className="w-20 h-20 rounded-2xl mb-6 bg-slate-100 dark:bg-slate-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPOWBZnJH2YfknkpPzSRa6cBk4CYgA8B3llAD4eWDjNHrHdtaotXY3KbXPjDP_YdsY1VLz_8ylVQ4keqI7zrD2oLaF8rQ6j7Al0Jx1X_JGh-mw8NjDIluNzPuzSa-GMHRMlSpM66QCGu6aoHJOEnx1M9pK6JCZstYp1AimbFUR9Ry1gXa-MIx1WziZqO0vuXFKZcd_ME80N4Aby6VDP7RLKctfFGYUoj9xhTN-NIWvgsuj56ExiD19hi8cweOv2-plsSrrMRIVytZA"
                  width={80}
                  height={80}
                />
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  &quot;I can&apos;t emphasize enough how valuable this course
                  is. Learning Webflow through this course completely shifted my
                  professional focus and opened up business opportunities.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase">Sven</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Diploma Designer, Web Designer
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm">
                <Image
                  alt="Miriam"
                  className="w-20 h-20 rounded-2xl mb-6 bg-slate-100 dark:bg-slate-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbDS9aW4fOfDeoFohFgTu8c_Piquw2IF4zj-s8rHaHTgAzuD-yUwYSyzGTNttOlXb-cfnLS4oFi2u4iopMXkTTE2Hlw-EkZpzAwf_n3Z_PFZPbncAPhmLZld7mWqn9VtigckpWyJY3pHkXQ6v9vYQ3-fuoxr9drj_OKhs1IiylNXzS61aUk11q9UA3YI_qcEuLgDT7wgFI7sgUjwHDiXtZLMeXRy9dYuRAz1oahiagfKgkxtdM8qiAaz9H8c7Ld-EGFPeCzittnUXa"
                  width={80}
                  height={80}
                />
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  &quot;Webflow makes it possible for me, as a designer, to
                  fully realize my web projects from start to finish — exactly
                  the way I envisioned them.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase">Miriam K.</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-0 md:mt-12">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm">
                <Image
                  alt="Sabine"
                  className="w-20 h-20 rounded-2xl mb-6 bg-slate-100 dark:bg-slate-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR7VusoMoKkBIajUzVEZfIQAniP0YB-aEnXt4QVpvnofssxbs1MQeQEwhkzHcqdMXBlll5waWTyrwxXUnCsmWwkupUUkhDZysggmNFq6OzRoyJfr8xiLhmzI6OCurb4zobkqjV39fh3j5X1hUyLps_D-F3gs50Nr_pfyc_IhFvbQH0UWNnPdmAHP8UkN9K05hvH2FWItCbbZehegTtlWQnmluOZ8qjjeu6KTZB5QdSvG8v2-52Hzd7TvyjBxyYAU_d46rotgvwNhzU"
                  width={80}
                  height={80}
                />
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  &quot;I really like Jonas&apos; videos and his approach. I
                  would recommend the course to anyone who truly wants to
                  understand and learn the craft.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase">Sabine R.</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Marketing Automation Expert
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm">
                <Image
                  alt="Lukas"
                  className="w-20 h-20 rounded-2xl mb-6 bg-slate-100 dark:bg-slate-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2-FkQS2Z-02251cs7Ycn00kRn4LONew9yIBfsJ79aows0S4RJTpy-gc8BtzP3NVWx0ZiA7mjvMKnsziNYtrSaYY6WTCZmW9I01QUggcZJwqllx-Grs15Z4l1T3DEbSkz7Dse9w4c4-wVaskjpqv23EbfP5t1sKjwJzQlhNn5Hupqzkhur2UlWuR0pbDhQpAzXDkpBFIFkkg8TEmFV0UFJeqS2dygfwbXklwSwk20fd0HL7v8eRRmxRA7pWfdrPs5yXbuTSnevjFuh"
                  width={80}
                  height={80}
                />
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  &quot;The best investment I made for my career this year. The
                  structure is logical and the practical examples are perfect.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase">Lukas M.</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Freelance Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
