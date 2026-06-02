"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroImages } from "@/content/projects";

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % heroImages.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition duration-[1400ms] ease-out ${
            index === activeIndex
              ? "scale-100 opacity-100"
              : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/45 to-stone-950/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(180,112,73,0.25),transparent_32%)]" />
    </div>
  );
}
