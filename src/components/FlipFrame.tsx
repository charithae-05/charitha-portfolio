"use client";

import { useState } from "react";
import type { Clip } from "@/data/content";

type FlipFrameProps = {
  image: string;
  alt: string;
  clips: Clip[];
};

/**
 * A flip card: the front shows the project screenshot, and flipping it reveals
 * a grid of small looping functionality demos. Click anywhere on the frame (or
 * the labelled button) to flip. Works on tap for mobile.
 */
export default function FlipFrame({ image, alt, clips }: FlipFrameProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-full max-w-[760px] [perspective:2000px]">
      <div
        className={`relative transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ---------- FRONT: screenshot ---------- */}
        <div className="[backface-visibility:hidden]">
          <div className="relative rounded-[14px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={alt} className="block w-full h-auto" loading="lazy" />
            <button
              type="button"
              onClick={() => setFlipped(true)}
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-ink/90 text-white text-[13px] font-medium px-4 py-2 rounded-full backdrop-blur-sm hover:bg-ink transition-colors"
            >
              See it in action
              <span aria-hidden>↻</span>
            </button>
          </div>
        </div>

        {/* ---------- BACK: functionality demos ---------- */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full overflow-auto rounded-[14px] bg-[#0d0d0d] p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/70 text-[12px] tracking-[0.14em] uppercase">
                Functionality
              </span>
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className="inline-flex items-center gap-1.5 text-white/80 text-[13px] font-medium hover:text-white transition-colors"
              >
                <span aria-hidden>↺</span> Back
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {clips.map((c) => (
                <figure key={c.src} className="m-0">
                  <video
                    poster={c.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full rounded-lg bg-black aspect-video object-cover"
                  >
                    {c.webm && <source src={c.webm} type="video/webm" />}
                    <source src={c.src} type="video/mp4" />
                  </video>
                  <figcaption className="mt-1.5 text-white/70 text-[11px]">{c.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
