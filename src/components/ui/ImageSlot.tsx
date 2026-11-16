"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageSlotProps {
  /** Pass the real path once you drop the file into /public/images/ e.g. "/images/portrait.jpg" */
  src?: string;
  alt: string;
  /** Filename shown in the placeholder label */
  file: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
}

export default function ImageSlot({
  src,
  alt,
  file,
  fill = false,
  width,
  height,
  className = "",
  imgClassName = "object-cover",
}: ImageSlotProps) {
  const [error, setError] = useState(false);

  if (src && !error) {
    if (fill) {
      return (
        <div className={`relative overflow-hidden ${className}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className={imgClassName}
            onError={() => setError(true)}
          />
        </div>
      );
    }
    return (
      <Image
        src={src}
        alt={alt}
        width={width ?? 400}
        height={height ?? 400}
        className={`${imgClassName} ${className}`}
        onError={() => setError(true)}
      />
    );
  }

  /* ── Styled placeholder shown until a real image is provided ── */
  return (
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center gap-2 bg-hovs-bg border-2 border-dashed border-hovs-emerald/25 ${className}`}
    >
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00E599 1px, transparent 1px), linear-gradient(to bottom, #00E599 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* photo icon */}
      <svg
        className="w-7 h-7 text-hovs-emerald/35 relative z-10 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      {/* label */}
      <div className="relative z-10 text-center px-3 space-y-0.5">
        <span className="block text-[9px] font-menutal text-hovs-emerald/60 uppercase tracking-[0.18em]">
          Add Image Here
        </span>
        <span className="block text-[11px] font-menutal text-hovs-cream/75 font-semibold leading-tight">
          {file}
        </span>
        <span className="block text-[9px] font-menutal text-hovs-muted/40">
          → /public/images/
        </span>
      </div>
    </div>
  );
}
