"use client";

import React from "react";
import portfolioData from "@/data/portfolioData.json";

/**
 * ProjectsSection — displays featured projects from portfolioData.json.
 */
export default function ProjectsSection() {
  const projects = portfolioData.projects || [
    {
      title: "JalDristi",
      tech: "Python, Selenium, Azure, OpenAI",
      description:
        "Crowd-powered AI tool to identify and classify water-related issues using Azure Cognitive Services and OpenAI.",
      link: "https://github.com/Nikhil-K-u/jaldristi"
    },
    {
      title: "PdfSol + Qdrant",
      tech: "Python, LangChain, Streamlit, Qdrant",
      description:
        "Chatbot that answers questions from PDFs using LangChain and Qdrant as vector DB for retrieval.",
      link: "https://github.com/Nikhil-K-u/pdfSol"
    }
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-6 md:px-20"
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1 text-left"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{project.tech}</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
