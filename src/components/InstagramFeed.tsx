"use client";

import { useEffect, useState } from "react";

const instagramPostUrls = [
  "https://www.instagram.com/p/DBsMIYtM_Ny/",
  "https://www.instagram.com/p/DBcC3AWPg4h/",
  "https://www.instagram.com/p/C51eypIrMXg/",
  "https://www.instagram.com/p/C5g2YaEuCKc/",
  "https://www.instagram.com/p/C4oJh4mOwWI/",
];

function getEmbedUrl(url: string) {
  return `${url.replace(/\/$/, "")}/embed`;
}

export function InstagramFeed() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === instagramPostUrls.length - 1 ? 0 : current + 1,
      );
    }, 12000);

    return () => window.clearInterval(interval);
  }, []);

  const activeUrl = instagramPostUrls[activeIndex];

  return (
    <aside aria-label="Instagram posts" className="flex flex-1">
      <div className="relative min-h-[520px] flex-1 overflow-hidden bg-white">
        <iframe
          key={activeUrl}
          src={getEmbedUrl(activeUrl)}
          title={`Instagram post ${activeIndex + 1}`}
          className="absolute inset-0 h-full w-full border-0"
          scrolling="no"
          allow="encrypted-media"
        />
      </div>
    </aside>
  );
}
