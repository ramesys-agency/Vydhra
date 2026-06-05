import Image from "next/image";
import React from "react";

export default function SocialProofSection() {
  return (
    <section className="bg-muted py-24 px-4 md:px-8 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-foreground">
              Student <br /> Success
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See what working professionals are saying about their transition
              into tech with our live cohorts.
            </p>
            <button className="w-fit border-2 border-foreground py-3 px-8 rounded-full font-bold uppercase text-sm hover:bg-foreground hover:text-background transition-all cursor-pointer">
              Read all alumni stories
            </button>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <div className="bg-card p-8 rounded-3xl shadow-sm border border-border">
                <Image
                  alt="Priya"
                  className="w-20 h-20 rounded-2xl mb-6 bg-muted object-cover"
                  src="https://res.cloudinary.com/daafchadi/image/upload/v1780644705/casual-clothes-portrait-attractive-young-woman-standing-office-with-black-bag_zumlxs.jpg"
                  width={80}
                  height={80}
                />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;After 5 years of teaching, I thought it was too late to
                  switch careers. The live mentor sessions and focus on
                  real-world AI tools made the transition incredibly smooth.
                  Within four months, I built a portfolio project that
                  ultimately landed me my first developer role.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase text-foreground">
                    Priya K.
                  </h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Former Teacher, Now Full-Stack Dev
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-0 md:mt-12">
              <div className="bg-card p-8 rounded-3xl shadow-sm border border-border">
                <Image
                  alt="Lukas"
                  className="w-20 h-20 rounded-2xl mb-6 bg-muted object-cover"
                  src="https://res.cloudinary.com/daafchadi/image/upload/v1780644827/krzhck-gMg3zSOdlgE-unsplash_ckli2k.jpg"
                  width={80}
                  height={80}
                />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;This isn&apos;t just another pre-recorded tutorial where
                  you copy syntax. Learning how to architect a production-ready
                  application while pair programming with AI was the missing
                  piece for me. It gave me the confidence to apply for senior
                  roles.&quot;
                </p>
                <div>
                  <h4 className="font-bold text-sm uppercase text-foreground">
                    Lukas M.
                  </h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
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
