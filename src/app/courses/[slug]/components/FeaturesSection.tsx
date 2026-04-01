import React from "react";

interface FeaturesSectionProps {
  features: string[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-12">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-1 w-full shadow-2xl">
        <div className="bg-slate-900 rounded-[22px] p-10 md:p-14">
          <div className="mb-12">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Why This Course Stands Out
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <span className="material-icons text-lg">check</span>
                </div>
                <p className="text-lg text-slate-300 group-hover:text-white transition-colors duration-300 py-1">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-slate-800 flex flex-wrap gap-10">
            <div className="flex items-center gap-3">
              <span className="material-icons text-orange-500">verified</span>
              <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                High Quality Content
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-orange-500">schedule</span>
              <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                Self-Paced Learning
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-orange-500">group</span>
              <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                Community Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
