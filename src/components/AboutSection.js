"use client";

import React from "react";
import portfolioData from "@/data/portfolioData.json";

/**
 * AboutSection — displays personal intro and summary.
 * Designed to work inside the ScrollScene animation timeline.
 */
export default function AboutSection() {
  const about = portfolioData.about || {
    name: "Nikhil Kumar",
    title: "Software Engineer & Cloud Enthusiast",
    summary:
      "Passionate about building smart, efficient, and scalable applications — blending creativity, technology, and problem-solving to craft impactful digital experiences.",
    highlights: [
      "B.Tech in Computer Science (SOA University, 2025)",
      "Hands-on with Cloud, AI, and Full-Stack projects",
      "Focused on innovation and product engineering",
    ],
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 px-6 md:px-20"
    >
      <div className="max-w-4xl text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-6">{about.summary}</p>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-4 text-left">
          {about.highlights.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
