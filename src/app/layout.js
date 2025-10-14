"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // smoothness strength
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional — handle resize or destroy cleanly
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-gray-50">
        {children}
      </body>
    </html>
  );
}
