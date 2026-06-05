"use client";

import { useRef } from "react";

type ProjectMediaProps = {
  image: string;
  video?: string;
  alt: string;
};

/**
 * Shows a project screenshot inside the card frame. If a video is provided,
 * it sits on top of the image and plays (muted, looped) while the visitor
 * hovers the card, then resets when they leave.
 */
export default function ProjectMedia({ image, video, alt }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      void v.play();
    }
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <div
      className="group/media relative w-full max-w-[760px] rounded-[14px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] bg-white"
      onMouseEnter={video ? handleEnter : undefined}
      onMouseLeave={video ? handleLeave : undefined}
    >
      {/* Static screenshot (also the video's poster frame) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} className="block w-full h-auto" loading="lazy" />

      {/* Optional hover video, fades in on top of the image */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover/media:opacity-100"
        />
      )}
    </div>
  );
}
