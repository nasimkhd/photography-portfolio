"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type VimeoBackgroundProps = {
  videoId?: string;
  title?: string;
  startSeconds?: number;
  loopSeconds?: number;
  posterSrc?: string;
};

export function VimeoBackground({
  videoId = "267069364",
  title = "Anthony Saleh timelapse reel",
  startSeconds = 8,
  loopSeconds = 70,
  posterSrc = "/images/photography/Drone/3417A.jpg.webp",
}: VimeoBackgroundProps) {
  const [loopKey, setLoopKey] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const loopDuration = Math.max(loopSeconds - startSeconds, 1);
  const src = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&muted=1&loop=0&playsinline=1#t=${startSeconds}s`;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIsIframeLoaded(false);
      setLoopKey((key) => key + 1);
    }, loopDuration * 1000);

    return () => window.clearInterval(timer);
  }, [loopDuration]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <Image
        src={posterSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${
          isIframeLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <iframe
        key={loopKey}
        src={src}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        loading="eager"
        onLoad={() => setIsIframeLoaded(true)}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/35 to-transparent" />
    </div>
  );
}
