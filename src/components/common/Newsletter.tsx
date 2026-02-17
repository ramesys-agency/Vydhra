import React from "react";

export default function Newsletter() {
  return (
    <div className="mt-24 bg-card-dark p-12 relative overflow-hidden">
      <div className="relative z-10 max-w-xl">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
          Stay always up to date
        </h2>
        <p className="text-gray-400 mb-8">
          Sign up for our newsletter and get exclusive discounts and new tutorial
          updates directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-grow bg-background-dark border-border-dark text-white focus:ring-primary focus:border-primary px-6 py-4 outline-none"
            placeholder="Your email address"
            type="email"
          />
          <button className="bg-primary text-white font-bold px-8 py-4 uppercase tracking-widest hover:bg-orange-600 transition-colors cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <span className="material-icons text-[400px]">auto_awesome</span>
      </div>
    </div>
  );
}
