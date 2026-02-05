"use client";

import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  const [offsetY, setOffsetY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: "url(/brand/logos/IMG_0122.PNG)",
        backgroundSize: "175%",
        backgroundPosition: `center ${reducedMotion ? "center" : `${offsetY}px`}`,
        opacity: 0.35,
      }}
    />
  );
}
