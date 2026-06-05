import React from "react";

export default function GuaranteeSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-card border-y border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase text-primary mb-8 tracking-tighter">
          Our Guarantee
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed">
          Attend the first two live sessions. If you don&apos;t feel like this is the right path for your career transition, send us an email and we will refund 100% of your tuition. No questions asked.
        </p>
        <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-5 md:px-12 rounded-full text-base md:text-xl transition-all shadow-xl shadow-primary/20 mb-20 cursor-pointer">
          Invest in your future now
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-0 md:mb-6 text-primary shrink-0">
              <span className="material-icons">videocam</span>
            </div>
            <h4 className="font-bold text-lg">Live Session Recordings</h4>
          </div>
          <div className="flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-0 md:mb-6 text-primary shrink-0">
              <span className="material-icons">groups</span>
            </div>
            <h4 className="font-bold text-lg">Alumni Community Access</h4>
          </div>
          <div className="flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-0">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-0 md:mb-6 text-primary shrink-0">
              <span className="material-icons">verified</span>
            </div>
            <h4 className="font-bold text-lg">14 Day Money-Back Guarantee</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
