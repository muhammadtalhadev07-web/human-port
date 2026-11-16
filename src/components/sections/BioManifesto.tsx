"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import ImageSlot from "@/components/ui/ImageSlot";

export default function BioManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-bio-left]", { x: -40, opacity: 0 });
      gsap.set("[data-bio-right]", { x: 40, opacity: 0, rotateY: -6 });
      gsap.set("[data-bio-tag]", { y: 14, opacity: 0 });

      gsap.to("[data-bio-left]", {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-bio-left]", start: "top 82%" },
      });

      gsap.to("[data-bio-right]", {
        x: 0,
        opacity: 1,
        rotateY: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-bio-right]", start: "top 82%" },
      });

      gsap.to("[data-bio-tag]", {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-bio-tags]", start: "top 88%" },
      });

      gsap.to("[data-bio-right]", {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
        },
      });

      const svgPaths = gsap.utils.toArray<SVGElement>("[data-bio-svg] circle, [data-bio-svg] path");
      svgPaths.forEach((el) => {
        const len = (el as SVGGeometryElement).getTotalLength?.();
        if (len) {
          gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(el, {
            strokeDashoffset: 0,
            duration: 2.2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: "[data-bio-right]", start: "top 80%" },
          });
        }
      });

      gsap.to("[data-bio-glow]", {
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="praxis"
      className="editorial-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-16"
    >
      {/* Left 8 Columns */}
      <div data-bio-left className="lg:col-span-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hovs-surface border border-hovs-border text-xs font-menutal text-hovs-emerald uppercase tracking-widest">
          <span>✣ THE PRAXIS MANIFESTO</span>
        </div>
        <h2 className="font-nehomi editorial-lead font-bold text-hovs-cream">
          I&apos;m the founder & principal creator at{" "}
          <span className="text-hovs-emerald">✣ HOUSE OF DESIGN</span>,
          bridging{" "}
          <span className="underline decoration-hovs-emerald decoration-2 underline-offset-8">
            Figma UI/UX & Graphic Design
          </span>{" "}
          with production{" "}
          <span className="text-hovs-emerald">
            Mobile & Web Development
          </span>
          .
        </h2>
        <p className="font-menutal text-base sm:text-lg text-hovs-muted leading-relaxed max-w-2xl">
          We believe in digital products and graphic systems that have a strong
          point of view. By combining Swiss editorial grid precision with modern
          Figma component architecture and full-stack engineering, every app and
          brand is built to endure.
        </p>
        <div
          data-bio-tags
          className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-hovs-border text-xs font-menutal text-hovs-cream"
        >
          <div data-bio-tag className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hovs-emerald" />
            <span>Figma UI/UX Systems</span>
          </div>
          <div data-bio-tag className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hovs-warm" />
            <span>Brand & Graphic Art</span>
          </div>
          <div data-bio-tag className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hovs-emerald" />
            <span>iOS & Android Apps</span>
          </div>
          <div data-bio-tag className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hovs-warm" />
            <span>Next.js Web Platforms</span>
          </div>
        </div>
      </div>

      {/* Right 4 Columns — Portrait Card */}
      <div data-bio-right className="lg:col-span-4">
        <div className="interactive-card rounded-2xl bg-hovs-surface border border-hovs-border p-5 relative group overflow-hidden">
          <div className="portrait-inner-box aspect-[4/4.3] rounded-xl border border-hovs-border relative overflow-hidden flex flex-col justify-between">
            <Image
              src="/images/portrait.png"
              alt="Creative Director portrait"
              fill
              className="object-cover object-top"
              priority
            />

            {/* decorative corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-hovs-emerald/50 rounded-tl z-20" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-hovs-emerald/50 rounded-tr z-20" />
            <div className="absolute bottom-14 left-3 w-5 h-5 border-b-2 border-l-2 border-hovs-emerald/50 rounded-bl z-20" />
            <div className="absolute bottom-14 right-3 w-5 h-5 border-b-2 border-r-2 border-hovs-emerald/50 rounded-br z-20" />

            <div className="relative z-20 p-5 flex justify-between items-center text-[11px] font-menutal text-hovs-emerald uppercase tracking-widest">
              <span className="bg-hovs-bg/70 backdrop-blur-sm px-2 py-0.5 rounded">✣ PRINCIPAL</span>
              <span className="bg-hovs-bg/70 backdrop-blur-sm px-2 py-0.5 rounded">DESIGN + CODE</span>
            </div>

            <div className="relative z-20 mt-auto p-5 pt-3 border-t border-hovs-border/60 flex items-end justify-between bg-gradient-to-t from-hovs-bg/80 to-transparent">
              <div>
                <h3 className="font-nehomi text-lg font-extrabold text-hovs-cream">
                  CREATIVE DIRECTOR
                </h3>
                <p className="font-menutal text-xs text-hovs-muted">
                  Figma, Graphics, Mobile & Web
                </p>
              </div>
              <span className="theme-pill-lime px-2.5 py-1 rounded bg-hovs-lime text-hovs-bg font-nehomi font-black text-[10px]">
                PRO
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
