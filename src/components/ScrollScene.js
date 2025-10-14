"use client";

import React, { useEffect, useRef } from "react";
import { initScrollTimeline } from "./scrollTimeline";
import AnimatedCharacter from "@/components/AnimatedCharacter";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceScene from "@/components/ExperienceScene";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function ScrollScene() {
  const sectionsRef = useRef([]);
  const characterRef = useRef(null);

  useEffect(() => {
    // ✅ Prevent running before refs are ready
    if (!sectionsRef.current.length || !characterRef.current) return;

    const tl = initScrollTimeline(sectionsRef.current, characterRef);

    // ✅ Cleanup GSAP timeline on unmount
    return () => {
      if (tl && typeof tl.kill === "function") tl.kill();
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* Floating character */}
      <div
        ref={characterRef}
        className="fixed bottom-20 left-10 z-50 w-32 h-32 pointer-events-none"
      >
        <AnimatedCharacter />
      </div>

      {/* Scrollable scenes */}
      <div className="h-[600vh]">
        {[
          <HeroSection key="hero" />,
          <AboutSection key="about" />,
          <ExperienceScene key="experience" />,
          <ProjectsSection key="projects" />,
          <SkillsSection key="skills" />,
        ].map((Section, idx) => (
          <div
            key={idx}
            ref={(el) => (sectionsRef.current[idx] = el)}
            className="min-h-screen"
          >
            {Section}
          </div>
        ))}
      </div>
    </div>
  );
}
