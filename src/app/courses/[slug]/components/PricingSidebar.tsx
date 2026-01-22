import React from "react";

export default function PricingSidebar() {
  return (
    <aside className="sticky top-28">
      <div className="bg-white dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-border-dark shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">
              Einmalzahlung
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black">€499</span>
              <span className="text-gray-400 line-through text-lg">€899</span>
            </div>
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
            -45% SALE
          </div>
        </div>
        <button className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all mb-8 shadow-lg shadow-primary/25 cursor-pointer">
          JETZT ENROLLEN
        </button>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-sm">
            <span className="material-icons text-green-500">check_circle</span>
            <span>Lebenslanger Zugriff</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="material-icons text-green-500">check_circle</span>
            <span>Community-Zugang (Discord)</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="material-icons text-green-500">check_circle</span>
            <span>Zertifikat nach Abschluss</span>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 dark:border-border-dark">
          <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
            <span className="material-icons text-primary text-3xl">verified_user</span>
            <div className="text-[12px] font-bold leading-tight uppercase">
              14 TAGE GELD-ZURÜCK-GARANTIE<br />
              <span className="text-gray-500 dark:text-gray-400 font-medium normal-case">
                Ohne Wenn und Aber.
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
