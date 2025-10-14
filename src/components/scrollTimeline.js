// src/utils/scrollTimeline.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollTimeline(sections, characterRef) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sections[0],
      start: "top top",
      end: () => `+=${window.innerHeight * (sections.length - 1)}`,
      scrub: 1,
      pin: true,
    },
  });

  // 🧍 Character moves across each section
  tl.to(characterRef.current, {
    xPercent: 500,
    duration: sections.length,
    ease: "none",
  });

  // ✨ Background transitions per section
  sections.forEach((section, i) => {
    tl.to(
      section,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      i // place at section start
    );
  });

  return tl;
}
