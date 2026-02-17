import React from "react";

export default function ProgramComparison() {
  return (
    <div className="py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Loopholes Column */}
        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
          <h3 className="flex items-center gap-2 text-xl font-bold text-red-600 dark:text-red-400 mb-6">
            <span className="material-icons text-2xl">warning</span>
            Identified Loopholes
          </h3>
          <ul className="space-y-4">
            {[
              "Lack of structured progression across Python → Analytics → ML.",
              "Limited practice & real-world case studies.",
              "Few opportunities for revision, quizzes, and interview prep.",
              "Missing exposure to AI and modern industry workflows.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="material-icons text-red-400 shrink-0 mt-0.5 text-base">
                  close
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Column */}
        <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/20">
          <h3 className="flex items-center gap-2 text-xl font-bold text-green-600 dark:text-green-400 mb-6">
            <span className="material-icons text-2xl">check_circle</span>
            Proposed Solutions
          </h3>
          <ul className="space-y-4">
            {[
              "Structured 6-Month Roadmap with phased learning.",
              "Interview-Oriented Exercises in every phase.",
              "MCQs & Recap Sessions after each module.",
              "Homework Assignments & Timed Challenges.",
              "Mini Projects & Capstone for building a portfolio.",
              "Bonus AI/LLM Sessions to future-proof learners.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="material-icons text-green-500 shrink-0 mt-0.5 text-base">
                  check
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
