import React from "react";

interface FeaturesSectionProps {
  features: string[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-12">
      <div className="bg-card rounded-3xl p-10 md:p-14 border border-border shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
        <div className="mb-12">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-2">
            Why This Course Stands Out
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-5 group">
              <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                <span className="material-icons text-lg text-orange-500 group-hover:text-white transition-colors duration-300">
                  check
                </span>
              </div>
              <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300 py-1">
                {feature}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-border flex flex-wrap gap-10">
          <div className="flex items-center gap-3">
            <span className="material-icons text-orange-500">verified</span>
            <span className="text-muted-foreground font-bold uppercase text-xs tracking-widest">
              High Quality Content
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-icons text-orange-500">schedule</span>
            <span className="text-muted-foreground font-bold uppercase text-xs tracking-widest">
              Self-Paced Learning
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-icons text-orange-500">group</span>
            <span className="text-muted-foreground font-bold uppercase text-xs tracking-widest">
              Community Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
