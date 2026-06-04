"use client";

import { useEffect, useState } from "react";

const instagramPostUrls = [
  "https://www.instagram.com/p/DBsMIYtM_Ny/",
  "https://www.instagram.com/p/DBcC3AWPg4h/",
  "https://www.instagram.com/p/C51eypIrMXg/",
  "https://www.instagram.com/p/C5g2YaEuCKc/",
  "https://www.instagram.com/p/C4oJh4mOwWI/",
];

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export function InstagramFeed() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scriptId = "instagram-embed-script";
    const processEmbeds = () => window.instgrm?.Embeds?.process();

    if (document.getElementById(scriptId)) {
      processEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = processEmbeds;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === instagramPostUrls.length - 1 ? 0 : current + 1,
      );
    }, 12000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <aside aria-label="Instagram posts" className="flex flex-1">
      <div className="grid flex-1 overflow-hidden bg-white">
        {instagramPostUrls.map((url, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={url}
              className={`col-start-1 row-start-1 transition duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100 blur-0"
                  : "pointer-events-none translate-y-4 scale-[0.96] opacity-0 blur-sm"
              }`}
              aria-hidden={!isActive}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#fff",
                  border: 0,
                  margin: "0 auto",
                  maxWidth: "100%",
                  minWidth: 0,
                  width: "100%",
                }}
              >
                <a href={url} target="_blank" rel="noreferrer">
                  View this post on Instagram
                </a>
              </blockquote>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
