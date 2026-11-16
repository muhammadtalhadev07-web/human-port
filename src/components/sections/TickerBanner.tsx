"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function TickerBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-ticker-wrap]", { opacity: 0, y: 10 });

      gsap.to("[data-ticker-wrap]", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 92%",
        },
      });

      const track1 = track1Ref.current;
      const track2 = track2Ref.current;
      if (track1 && track2) {
        const w = track1.offsetWidth;
        gsap.set(track2, { x: w });

        const tl = gsap.timeline({ repeat: -1 });
        tl.to([track1, track2], {
          x: `-=${w}`,
          duration: 30,
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize((x: number) => parseFloat(String(x)) % w),
          },
        });
      }
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  const tickerItems = (
    <>
      <span className="flex items-center gap-3 shrink-0">
        <span className="theme-pill-lime px-2 py-0.5 bg-hovs-lime text-hovs-bg font-bold rounded text-[11px] uppercase">
          FULL-STACK STUDIO
        </span>{" "}
        Figma UI/UX &middot; Graphic Design &middot; Mobile Apps &middot; Web Development &rarr;
      </span>
      <span className="text-hovs-emerald shrink-0">&#10019;</span>
      <span className="shrink-0">
        Every detail aligned to a strict 12-column Swiss architectural grid &rarr;
      </span>
      <span className="text-hovs-emerald shrink-0">&#10019;</span>
      <span className="shrink-0">
        Full-Stack Creative Studio &mdash; Design &bull; Code &bull; Ship &rarr;
      </span>
      <span className="text-hovs-emerald shrink-0">&#10019;</span>
    </>
  );

  return (
    <div
      ref={bannerRef}
      className="relative z-10 w-full mt-12 border-y border-hovs-border py-3.5 bg-hovs-surface/85 backdrop-blur-md overflow-hidden"
    >
      <div data-ticker-wrap className="relative whitespace-nowrap">
        <div
          ref={track1Ref}
          className="inline-flex items-center gap-10 text-xs sm:text-sm font-menutal text-hovs-cream"
        >
          {tickerItems}
          {tickerItems}
        </div>
        <div
          ref={track2Ref}
          className="inline-flex items-center gap-10 text-xs sm:text-sm font-menutal text-hovs-cream absolute top-0 left-0"
        >
          {tickerItems}
          {tickerItems}
        </div>
      </div>
    </div>
  );
}
