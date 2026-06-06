"use client";

import { useState } from "react";
import type { Clip } from "@/data/content";

function Sources({ clip }: { clip: Clip }) {
  return (
    <>
      {clip.webm && <source src={clip.webm} type="video/webm" />}
      <source src={clip.src} type="video/mp4" />
    </>
  );
}

type FlipFrameProps = {
  image: string;
  alt: string;
  clips: Clip[];
};

/**
 * Flip card. Front = project screenshot (whole image is clickable, with a
 * centered hover hint). Flip it to reveal a large "highlight" video with a
 * clickable thumbnail strip — tap a thumbnail to promote it to the highlight.
 * Videos only mount once flipped, to keep idle cards light.
 */
export default function FlipFrame({ image, alt, clips }: FlipFrameProps) {
  const [flipped, setFlipped] = useState(false);
  const [active, setActive] = useState(0);
  const current = clips[active] ?? clips[0];

  return (
    <div className="relative w-full max-w-[760px] [perspective:2000px]">
      <div
        className={`relative transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ---------- FRONT: screenshot ---------- */}
        <div className="[backface-visibility:hidden]">
          <button
            type="button"
            onClick={() => setFlipped(true)}
            aria-label="See it in action — flip to view functionality demos"
            className="group/front relative block w-full text-left rounded-[14px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] bg-white cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={alt} className="block w-full h-auto" loading="lazy" />

            {/* Hover overlay hint — the single, centered affordance */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/front:bg-black/40 transition-colors duration-300">
              <span className="inline-flex items-center gap-2 bg-white text-ink text-[15px] font-semibold px-6 py-3 rounded-full shadow-xl opacity-0 scale-95 group-hover/front:opacity-100 group-hover/front:scale-100 transition-all duration-300">
                <span aria-hidden className="text-[18px] leading-none">↻</span>
                See it in action
              </span>
            </span>
          </button>
        </div>

        {/* ---------- BACK: highlight + thumbnails ---------- */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full rounded-[14px] bg-[#0d0d0d] p-3 flex flex-col">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-white text-[12.5px] font-medium truncate pr-2">
                {current.label}
              </span>
              <button
                type="button"
                onClick={() => setFlipped(false)}
                className="shrink-0 inline-flex items-center gap-1.5 text-white/80 text-[12.5px] font-medium hover:text-white transition-colors"
              >
                <span aria-hidden>↺</span> Back
              </button>
            </div>

            {flipped && (
              <>
                {/* Highlight player */}
                <div className="relative flex-1 min-h-0 rounded-lg overflow-hidden bg-black">
                  <video
                    key={current.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  >
                    <Sources clip={current} />
                  </video>
                </div>

                {/* Thumbnail strip */}
                {clips.length > 1 && (
                  <div className="mt-2 flex gap-2">
                    {clips.map((c, i) => (
                      <button
                        key={c.src}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-label={`Play: ${c.label}`}
                        title={c.label}
                        className={`relative flex-1 rounded-md overflow-hidden aspect-video bg-black ring-2 transition-all ${
                          i === active
                            ? "ring-accent"
                            : "ring-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <video
                          muted
                          loop
                          autoPlay
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover pointer-events-none"
                        >
                          <Sources clip={c} />
                        </video>
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
