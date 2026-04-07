import Image from "next/image";
import React from "react";

export default function SocialProofSection() {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white">
              Student <br /> Success
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              See what working professionals are saying about their transition into tech with our live cohorts.
            </p>
            <button className="w-fit border-2 border-slate-900 dark:border-white py-3 px-8 rounded-full font-bold uppercase text-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer">
              Read all alumni stories
            </button>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm">
                <Image
                  alt="Priya"
                  className="w-20 h-20 rounded-2xl mb-6 bg-slate-100 dark:bg-slate-700 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPOWBZnJH2YfknkpPzSRa6cBk4CYgA8B3llAD4eWDjNHrHdtaotXY3KbXPjDP_YdsY1VLz_8ylVQ4keqI7zrD2oLaF8rQ6j7Al0Jx1X_JGh-mw8NjDIluNzPuzSa-GMHRMlSpM66QCGu6aoHJOEnx1M9pK6JCZstYp1AimbFUR9Ry1gXa-MIx1WziZqO0vuXFKZcd_ME80N4Aby6VDP7RLKctfFGYUoj9xhTN-NIWvgsuj56ExiD19hi8cweOv2-plsSrrMRIVytZA"
                  width={80}
                  height={80}
                />
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  &quot;After 5 years of teaching, I thought it was too late to switch careers. The live mentor sessions and focus on real-world AI tools made the transition incredibly smooth. Within four months, I built a portfolio project that ultimately landed me my first developer role.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase">Priya K.</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Former Teacher, Now Full-Stack Dev
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-0 md:mt-12">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm">
                <Image
                  alt="Lukas"
                  className="w-20 h-20 rounded-2xl mb-6 bg-slate-100 dark:bg-slate-700 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2-FkQS2Z-02251cs7Ycn00kRn4LONew9yIBfsJ79aows0S4RJTpy-gc8BtzP3NVWx0ZiA7mjvMKnsziNYtrSaYY6WTCZmW9I01QUggcZJwqllx-Grs15Z4l1T3DEbSkz7Dse9w4c4-wVaskjpqv23EbfP5t1sKjwJzQlhNn5Hupqzkhur2UlWuR0pbDhQpAzXDkpBFIFkkg8TEmFV0UFJeqS2dygfwbXklwSwk20fd0HL7v8eRRmxRA7pWfdrPs5yXbuTSnevjFuh"
                  width={80}
                  height={80}
                />
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  &quot;This isn&apos;t just another pre-recorded tutorial where you copy syntax. Learning how to architect a production-ready application while pair programming with AI was the missing piece for me. It gave me the confidence to apply for senior roles.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase">Lukas M.</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Retail Manager to AI Engineer
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
