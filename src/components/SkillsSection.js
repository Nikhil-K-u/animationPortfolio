"use client";

import React from "react";
import portfolioData from "@/data/portfolioData.json";

/**
 * SkillsSection — displays categorized technical skills.
 */
export default function SkillsSection() {
  const skills = portfolioData.skills || {
    languages: ["Python", "Java", "C"],
    frameworks: ["LangChain", "Streamlit", "Pandas", "NumPy", "Selenium"],
    databases: ["MongoDB", "MySQL", "Oracle SQL"],
    tools: ["Git", "Linux", "VS Code", "Postman", "Jupyter"],
    cloud: ["Microsoft Azure", "Google Cloud Platform (GCP)"]
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800 px-6 md:px-20"
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Technical Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white border border-gray-100 rounded-2xl shadow-md p-5 hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold capitalize mb-3 text-indigo-600">
                {category.replace(/([A-Z])/g, " $1")}
              </h3>
              <ul className="text-gray-700 space-y-1">
                {items.map((item, i) => (
                  <li key={i} className="text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
