"use client";

import { useEffect, useState } from "react";

type VimeoBackgroundProps = {
  videoId?: string;
  title?: string;
  startSeconds?: number;
  loopSeconds?: number;
};

export function VimeoBackground({
  videoId = "267069364",
  title = "Anthony Saleh timelapse reel",
  startSeconds = 13,
  loopSeconds = 70,
}: VimeoBackgroundProps) {
  const [loopKey, setLoopKey] = useState(0);
  const loopDuration = Math.max(loopSeconds - startSeconds, 1);
  const src = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&muted=1&loop=0&playsinline=1#t=${startSeconds}s`;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLoopKey((key) => key + 1);
    }, loopDuration * 1000);

    return () => window.clearInterval(timer);
  }, [loopDuration]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <iframe
        key={loopKey}
        src={src}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/35 to-transparent" />
    </div>
  );
}
