import React, { useEffect, useRef } from "react";
import portfolioData from "../data/portfolioData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCharacter from "./AnimatedCharacter";

gsap.registerPlugin(ScrollTrigger);

const ExperienceScene = () => {
  const sceneRef = useRef(null);
  const characterRef = useRef(null);
  const experiences = portfolioData.experience;

  useEffect(() => {
    gsap.to(characterRef.current, {
      x: "60vw",
      scrollTrigger: {
        trigger: sceneRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sceneRef}
      className="h-screen relative bg-gray-100 flex flex-col justify-center items-start overflow-hidden px-10"
    >
      <AnimatedCharacter className="w-32 h-32 absolute bottom-10 left-0" ref={characterRef} />

      <div className="max-w-3xl z-10">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="italic text-sm mb-2">{exp.location}</p>

            {exp.roles ? (
              exp.roles.map((role, j) => (
                <div key={j} className="ml-4 mb-4">
                  <p className="font-medium">
                    {role.title} — <span className="text-gray-600">{role.period}</span>
                  </p>
                  <ul className="list-disc ml-6">
                    {role.items.map((item, k) => (
                      <li key={k} className="text-sm text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="list-disc ml-6">
                {exp.items.map((item, j) => (
                  <li key={j} className="text-sm text-gray-700">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceScene;
