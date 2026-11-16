"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import HeroGL from "@/components/webgl/HeroGL";

export default function HeroSection() {
  const { toggleTheme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set("[data-h-line]", { yPercent: 120, rotateX: -40, opacity: 0 });
      gsap.set("[data-h-pill]", { y: 20, opacity: 0, scale: 0.95 });
      gsap.set("[data-h-rule]", { scaleX: 0 });
      gsap.set("[data-h-sub]", { y: 16, opacity: 0 });
      gsap.set("[data-h-cta]", { y: 20, opacity: 0 });
      gsap.set("[data-h-badge]", { scale: 0, opacity: 0 });
      gsap.set("[data-h-bottom]", { y: 10, opacity: 0 });
      gsap.set("[data-h-mesh]", { opacity: 0 });
      gsap.set("[data-h-glow]", { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({ delay: 0.1 });

      tl.to("[data-h-mesh]", {
        opacity: 1,
        duration: 2.4,
        ease: "power2.inOut",
      })
        .to(
          "[data-h-glow]",
          { opacity: 1, scale: 1, duration: 2, ease: "power2.out" },
          0
        )
        .to(
          "[data-h-line]",
          {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.14,
            ease: "expo.out",
          },
          0.2
        )
        .to(
          "[data-h-pill]",
          { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" },
          0.5
        )
        .to(
          "[data-h-rule]",
          { scaleX: 1, duration: 1.4, ease: "power2.inOut" },
          0.6
        )
        .to(
          "[data-h-sub]",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.8
        )
        .to(
          "[data-h-cta]",
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          1.0
        )
        .to(
          "[data-h-badge]",
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "elastic.out(1, 0.6)",
          },
          1.0
        )
        .to(
          "[data-h-bottom]",
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          1.2
        );

      gsap.to("[data-h-heading]", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to("[data-h-mesh]", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });

      gsap.to("[data-h-emerald]", {
        textShadow: "0 0 40px rgba(0,229,153,0.4)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      const badges = gsap.utils.toArray<HTMLElement>("[data-h-badge]");
      badges.forEach((badge, i) => {
        gsap.to(badge, {
          y: "random(-8, 8)",
          x: "random(-4, 4)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = e.clientX - window.innerWidth / 2;
      const cy = e.clientY - window.innerHeight / 2;
      const badges = document.querySelectorAll<HTMLElement>("[data-h-badge]");
      badges.forEach((badge, i) => {
        const depth = i % 2 === 0 ? 0.028 : 0.042;
        gsap.to(badge, {
          x: cx * depth,
          y: cy * depth,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative w-full min-h-screen flex flex-col justify-between pt-6 sm:pt-10 pb-8 overflow-hidden bg-hovs-bg"
    >
      <div
        data-h-mesh
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <HeroGL />
      </div>

      <div
        data-h-glow
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 50% 45%, rgba(0,229,153,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-[2] bg-hovs-bg"
        style={{
          maskImage:
            "radial-gradient(ellipse 55% 60% at 50% 48%, transparent 20%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.85) 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 60% at 50% 48%, transparent 20%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.85) 80%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-[3]"
        style={{
          background: "linear-gradient(to top, var(--bg), transparent)",
        }}
      />

      <div className="editorial-container relative z-10 flex-1 flex flex-col justify-between">
        <div
          data-h-pill
          className="w-full flex flex-col items-center justify-center pt-4"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-hovs-surface/60 border border-hovs-border/40 backdrop-blur-2xl text-[10px] sm:text-[11px] font-menutal text-hovs-muted uppercase tracking-[0.22em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hovs-emerald opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-hovs-emerald" />
            </span>
            Available for Projects &bull; 2025
          </div>
        </div>

        <div className="my-auto py-8 sm:py-12 flex flex-col items-center text-center max-w-5xl mx-auto relative">
          {[
            {
              pos: "-left-20 top-4 sm:-left-28 sm:top-8",
              float: "float-badge-1",
              dot: "bg-hovs-emerald",
              t: "UI/UX",
              sub: "Design Systems",
            },
            {
              pos: "-right-20 top-2 sm:-right-28 sm:top-6",
              float: "float-badge-2",
              dot: "bg-hovs-warm",
              t: "Mobile",
              sub: "iOS & Android",
            },
            {
              pos: "-left-12 bottom-8 sm:-left-20 sm:bottom-12",
              float: "float-badge-3",
              dot: "bg-hovs-lime",
              t: "Graphics",
              sub: "Brand & Print",
            },
            {
              pos: "-right-12 bottom-6 sm:-right-20 sm:bottom-10",
              float: "float-badge-4",
              dot: "bg-hovs-warm",
              t: "Web Dev",
              sub: "Next.js & React",
            },
          ].map((b, i) => (
            <div
              key={i}
              data-h-badge
              className={`hidden xl:flex ${b.float} absolute ${b.pos} items-center gap-2 px-3.5 py-2 rounded-xl bg-hovs-surface/70 border border-hovs-border/30 backdrop-blur-2xl shadow-2xl`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${b.dot}`} />
              <div className="text-left">
                <span className="font-nehomi text-[11px] font-semibold text-hovs-cream block leading-none">
                  {b.t}
                </span>
                <span className="font-menutal text-[9px] text-hovs-muted">
                  {b.sub}
                </span>
              </div>
            </div>
          ))}

          <div data-h-heading style={{ perspective: "800px" }}>
            <h1 className="font-nehomi hero-display font-bold uppercase text-hovs-cream select-none tracking-tight text-center">
              <span className="block overflow-hidden pb-1">
                <span
                  data-h-line
                  className="inline-block will-change-transform origin-bottom"
                >
                  I DESIGN;
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span
                  data-h-line
                  data-h-emerald
                  className="inline-block will-change-transform origin-bottom text-hovs-emerald"
                >
                  THEREFORE
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span
                  data-h-line
                  className="inline-block will-change-transform origin-bottom"
                >
                  I AM.
                </span>
              </span>
            </h1>
          </div>

          <div
            data-h-rule
            className="mt-6 h-px w-56 mx-auto origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--emerald), transparent)",
            }}
          />

          <p
            data-h-sub
            className="font-menutal text-sm sm:text-base lg:text-lg text-hovs-muted leading-relaxed max-w-xl mx-auto mt-6"
          >
            Crafting{" "}
            <span className="text-hovs-cream font-medium">
              design systems
            </span>
            ,{" "}
            <span className="text-hovs-cream font-medium">
              brand identities
            </span>
            , and{" "}
            <span className="text-hovs-cream font-medium">
              production applications
            </span>{" "}
            for ambitious teams.
          </p>

          <div
            data-h-sub
            className="flex items-center gap-6 mt-4 text-[11px] font-menutal text-hovs-muted/70 uppercase tracking-[0.2em]"
          >
            <span>Figma</span>
            <span className="w-1 h-1 rounded-full bg-hovs-border" />
            <span>Graphics</span>
            <span className="w-1 h-1 rounded-full bg-hovs-border" />
            <span>Mobile</span>
            <span className="w-1 h-1 rounded-full bg-hovs-border" />
            <span>Web</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <a
              data-h-cta
              href="#services-bento"
              className="group theme-pill-lime inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-hovs-lime text-hovs-bg font-nehomi font-bold text-xs sm:text-sm uppercase tracking-wider hover:scale-[1.03] active:scale-[0.97] transition-transform duration-300 shadow-[0_0_60px_rgba(0,229,153,0.12)]"
            >
              <span>View Work</span>
              <svg
                className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            <a
              data-h-cta
              href="#app-web-lab"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-hovs-surface/50 border border-hovs-border/40 hover:border-hovs-emerald/40 text-hovs-cream font-menutal text-xs sm:text-sm transition-all duration-300 backdrop-blur-xl"
            >
              Live Lab
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>

        <div
          data-h-bottom
          className="w-full pt-5 border-t border-hovs-border/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-[10px] font-menutal text-hovs-muted/60 uppercase tracking-[0.25em]">
              <span>Creative Studio</span>
              <span className="hidden sm:block w-px h-3 bg-hovs-border" />
              <div className="hidden sm:flex items-center gap-2 text-hovs-muted/80">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hovs-emerald opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-hovs-emerald" />
                </span>
                <span>Scroll to explore</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-menutal text-hovs-muted/70 uppercase tracking-[0.2em]">
              <div className="text-center">
                <span className="font-nehomi text-hovs-emerald font-black text-sm block">85+</span>
                <span>Products Shipped</span>
              </div>
              <span className="w-px h-6 bg-hovs-border" />
              <div className="text-center">
                <span className="font-nehomi text-hovs-lime font-black text-sm block">6+</span>
                <span>Years Active</span>
              </div>
              <span className="w-px h-6 bg-hovs-border" />
              <div className="text-center">
                <span className="font-nehomi text-hovs-cream font-black text-sm block">14</span>
                <span>Design Awards</span>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="text-[10px] font-menutal text-hovs-muted/60 uppercase tracking-[0.25em] hover:text-hovs-emerald transition-colors cursor-pointer"
            >
              Toggle Theme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
