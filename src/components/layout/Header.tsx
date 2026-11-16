"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { useCursor } from "@/components/ui/CustomCursor";
import { gsap } from "@/lib/gsap";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const { isLight, toggleTheme } = useTheme();
  const { setCursorLabel, resetCursor } = useCursor();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-header-logo]", { opacity: 0, x: -16 });
      gsap.set("[data-header-nav]", { opacity: 0, y: -10 });
      gsap.set("[data-header-actions]", { opacity: 0, x: 16 });

      const tl = gsap.timeline({ delay: 0.1 });

      tl.to("[data-header-logo]", {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          "[data-header-nav]",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          "[data-header-actions]",
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-hovs-bg/90 backdrop-blur-xl border-b border-hovs-border py-4 transition-colors duration-300"
    >
      <div className="editorial-container grid grid-cols-2 lg:grid-cols-12 items-center gap-4">
        <div data-header-logo className="lg:col-span-3 flex items-center gap-3">
          <a href="#" className="group flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-hovs-lime text-hovs-bg flex items-center justify-center font-nehomi font-black text-base group-hover:rotate-90 transition-transform duration-500">
              ✣
            </span>
            <div>
              <span className="font-nehomi font-extrabold text-sm tracking-tight block leading-none text-hovs-cream">
                HOUSE OF DESIGN
              </span>
              <span className="font-menutal text-[11px] text-hovs-muted tracking-wider uppercase mt-0.5 block">
                Figma • Graphic • Web • App
              </span>
            </div>
          </a>
        </div>

        <div
          data-header-nav
          className="hidden lg:grid lg:col-span-6 grid-cols-3 gap-6 text-xs font-menutal border-x border-hovs-border px-6"
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-hovs-muted block mb-1">
              Design Craft
            </span>
            <div className="flex items-center gap-3 text-hovs-cream">
              <a
                href="#services-bento"
                className="hover:text-hovs-emerald transition"
              >
                figma ui/ux
              </a>
              <a
                href="#work-04"
                className="hover:text-hovs-emerald transition"
              >
                graphics
              </a>
            </div>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-hovs-muted block mb-1">
              Engineering
            </span>
            <div className="flex items-center gap-3 text-hovs-cream">
              <a
                href="#app-web-lab"
                className="hover:text-hovs-emerald transition"
              >
                mobile apps
              </a>
              <a
                href="#app-web-lab"
                className="hover:text-hovs-emerald transition"
              >
                web dev
              </a>
            </div>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-hovs-muted block mb-1">
              Narrative
            </span>
            <div className="flex items-center gap-3 text-hovs-cream">
              <a
                href="#process-workflow"
                className="hover:text-hovs-emerald transition"
              >
                workflow
              </a>
              <a
                href="#client-reviews"
                className="hover:text-hovs-emerald transition"
              >
                reviews
              </a>
            </div>
          </div>
        </div>

        <div
          data-header-actions
          className="lg:col-span-3 flex items-center justify-end gap-2.5"
        >
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setCursorLabel("THEME")}
            onMouseLeave={resetCursor}
            className="px-3.5 py-2 rounded-full bg-hovs-surface border border-hovs-border hover:border-hovs-emerald text-xs font-menutal text-hovs-cream transition flex items-center gap-2 shadow-sm"
            aria-label="Toggle Light and Dark Mode"
          >
            {isLight ? (
              <span className="text-amber-500 text-sm">☀</span>
            ) : (
              <span className="text-hovs-emerald text-sm">☾</span>
            )}
            <span className="font-medium">
              {isLight ? "Dark Mode" : "Light Mode"}
            </span>
          </button>

          <button
            onClick={onMenuToggle}
            onMouseEnter={() => setCursorLabel("INDEX")}
            onMouseLeave={resetCursor}
            className="theme-pill-lime px-4 py-2 rounded-full bg-hovs-lime text-hovs-bg font-nehomi font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition flex items-center gap-2"
          >
            <span>Index</span>
            <Menu className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
