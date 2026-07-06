"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type VideoBackgroundProps = {
  src?: string;
  posterSrc?: string;
};

export function VideoBackground({
  src = "/video/hero.mp4",
  posterSrc = "/images/photography/Drone/3417A.jpg.webp",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    void video.play().catch(() => {});
  }, [src]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <Image
        src={posterSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={() => setIsPlaying(true)}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/35 to-transparent" />
    </div>
  );
}
