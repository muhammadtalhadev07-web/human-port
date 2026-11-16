"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ImageSlot from "@/components/ui/ImageSlot";

interface Project {
  num: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: { label: string; accent: boolean }[];
  imageFile: string;
  imageMeta: [string, string];
  badgeBg: string;
  badgeText: string;
  accentText: string;
  year: string;
  role: string;
  stats: { val: string; label: string }[];
  highlights: string[];
}

const projects: Project[] = [
  {
    num: "01 / 04",
    category: "MOBILE APP DEVELOPMENT (IOS & ANDROID)",
    title: "PULSE FINTECH — Cross-Platform Banking Super-App",
    shortDesc:
      "Engineered in React Native with 60fps Reanimated gesture physics, biometric vault security, and a complete Figma component library.",
    fullDesc:
      "Pulse Fintech is a full-featured banking super-app engineered from zero to App Store. The entire design system was built in Figma first — 420+ components across 6 screen sizes — then bridged to React Native via a custom token pipeline. Biometric vault security uses hardware-backed Keystore/Keychain, gesture physics are powered by Reanimated 3, and all charts are native SVG for 60 FPS scroll.",
    tags: [
      { label: "React Native", accent: false },
      { label: "Figma UI Kit", accent: false },
      { label: "1.2M+ Downloads", accent: true },
    ],
    imageFile: "project-pulse.jpg",
    imageMeta: ["IOS / ANDROID v4.2", "60 FPS • 4.95 ★"],
    badgeBg: "bg-hovs-lime",
    badgeText: "text-hovs-bg",
    accentText: "text-hovs-lime",
    year: "2024",
    role: "Lead Designer & React Native Engineer",
    stats: [
      { val: "1.2M+", label: "Downloads" },
      { val: "60 FPS", label: "Gesture Engine" },
      { val: "4.95 ★", label: "App Store" },
      { val: "420+", label: "Figma Components" },
    ],
    highlights: [
      "Hardware-backed biometric vault (Face ID / Fingerprint)",
      "Reanimated 3 physics — rubber-band scroll, spring modals",
      "Real-time portfolio charts in native SVG",
      "420-component Figma UI Kit with auto Dark/Light modes",
      "Zero-friction Figma → React Native token pipeline",
    ],
  },
  {
    num: "02 / 04",
    category: "FULL-STACK WEB DEVELOPMENT",
    title: "HYPERION AI — Next.js SaaS & Real-Time Canvas Web App",
    shortDesc:
      "High-velocity web platform built with Next.js 15, TypeScript, Tailwind CSS, and WebGL shaders — sub-40ms page transitions and 100/100 Lighthouse.",
    fullDesc:
      "Hyperion AI is a real-time collaborative canvas platform built on Next.js 15 App Router with Edge Runtime. Every route is fully server-streamed; heavy canvas operations run in Web Workers with OffscreenCanvas. WebGL shaders handle particle effects and blur compositing. The command palette (⌘K) gives power users keyboard-first navigation across 80+ actions.",
    tags: [
      { label: "Next.js 15", accent: false },
      { label: "TypeScript & Tailwind", accent: false },
      { label: "100 Lighthouse Score", accent: true },
    ],
    imageFile: "project-hyperion.jpg",
    imageMeta: ["NEXT.JS 15 · EDGE", "100 Lighthouse •"],
    badgeBg: "bg-hovs-emerald",
    badgeText: "text-hovs-bg",
    accentText: "text-hovs-emerald",
    year: "2024",
    role: "Full-Stack Engineer & UI Designer",
    stats: [
      { val: "100/100", label: "Lighthouse" },
      { val: "< 40ms", label: "Edge TTFB" },
      { val: "WebGL", label: "Canvas Shaders" },
      { val: "80+", label: "⌘K Actions" },
    ],
    highlights: [
      "Next.js 15 App Router with full Edge Runtime streaming",
      "WebGL particle engine — 10K particles at 60 FPS",
      "Web Workers + OffscreenCanvas for zero-jank rendering",
      "Command palette with 80+ keyboard-driven actions",
      "100/100 Core Web Vitals on Vercel Edge Network",
    ],
  },
  {
    num: "03 / 04",
    category: "FIGMA DESIGN SYSTEM ARCHITECTURE",
    title: "PRISM TOKENS — Multi-Brand Figma Component OS",
    shortDesc:
      "A comprehensive 650+ component Figma library featuring automated Dark/Light variable modes, Auto-Layout 5.0 responsiveness, and direct GitHub token sync.",
    fullDesc:
      "PRISM is a living design system serving 4 product brands from one Figma source. Variable Modes power instant Dark/Light/High-Contrast switching. All 650+ components use Auto-Layout 5.0 for true responsive behaviour inside frames. A custom Style Dictionary pipeline exports Figma variables directly into CSS/JSON tokens committed to GitHub on every publish.",
    tags: [
      { label: "650+ Components", accent: false },
      { label: "Figma Variables", accent: false },
      { label: "Zero Handoff Friction", accent: true },
    ],
    imageFile: "project-prism.jpg",
    imageMeta: ["FIGMA MASTER LIBRARY", "650+ Components ✦"],
    badgeBg: "bg-hovs-warm",
    badgeText: "text-white",
    accentText: "text-hovs-warm",
    year: "2023",
    role: "Design Systems Architect",
    stats: [
      { val: "650+", label: "Components" },
      { val: "4", label: "Variable Modes" },
      { val: "100%", label: "GitHub Token Sync" },
      { val: "3s", label: "Brand Switch" },
    ],
    highlights: [
      "650+ components spanning 4 product brands in one library",
      "Variable Modes: Dark / Light / High-Contrast / Brand",
      "Auto-Layout 5.0 — truly responsive inside every frame",
      "Style Dictionary pipeline: Figma → CSS tokens on publish",
      "Interactive Figma prototype for every component state",
    ],
  },
  {
    num: "04 / 04",
    category: "GRAPHIC DESIGN & BRAND IDENTITY",
    title: "MONOLITH LABS — Complete Brand & Packaging Identity",
    shortDesc:
      "Bespoke geometric logomark, tactile foil-stamped packaging dielines, Swiss exhibition posters, and comprehensive brand guidelines.",
    fullDesc:
      "Monolith Labs needed an identity that felt as engineered as their hardware. The logomark is a 12-point geometric construction built on a 72pt modular grid. Packaging uses matte-black uncoated stock with acid-lime foil stamping — every dieline was precision-engineered in Illustrator for flat-pack efficiency. The exhibition poster series ran across 3 trade shows and won a D&AD Wood Pencil.",
    tags: [
      { label: "Vector Identity", accent: false },
      { label: "Print & Packaging", accent: false },
      { label: "Swiss Typography", accent: true },
    ],
    imageFile: "project-monolith.jpg",
    imageMeta: ["BRAND BOOK & PACKAGING", "Award Winner •"],
    badgeBg: "bg-hovs-lime",
    badgeText: "text-hovs-bg",
    accentText: "text-hovs-lime",
    year: "2023",
    role: "Brand Designer & Art Director",
    stats: [
      { val: "D&AD", label: "Wood Pencil" },
      { val: "12-pt", label: "Grid System" },
      { val: "3", label: "Trade Shows" },
      { val: "Full", label: "Brand Book" },
    ],
    highlights: [
      "12-point geometric logomark built on a 72pt modular grid",
      "Acid-lime foil-stamp packaging on matte-black uncoated stock",
      "Swiss grid exhibition poster series — 3 trade shows",
      "Complete brand book: type, color, motion, photography",
      "D&AD Wood Pencil — Graphic Design / Brand Identity",
    ],
  },
];

/* ── PROJECT DETAIL MODAL ────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  /* open animation */
  useEffect(() => {
    if (!mounted) return;
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.fromTo(panelRef.current,
      { opacity: 0, y: 60, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
    );
    gsap.fromTo(
      panelRef.current?.querySelectorAll("[data-modal-item]") ?? [],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power3.out", delay: 0.2 }
    );
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [mounted]);

  const close = useCallback(() => {
    gsap.to(panelRef.current, { opacity: 0, y: 40, scale: 0.97, duration: 0.28, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.28, onComplete: onClose });
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  if (!mounted) return null;

  const accentDot =
    project.badgeBg === "bg-hovs-lime"    ? "bg-hovs-lime" :
    project.badgeBg === "bg-hovs-emerald" ? "bg-hovs-emerald" : "bg-hovs-warm";

  /* Portal renders directly on document.body — escapes any
     filter/transform stacking context from GSAP scroll animations */
  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-6 cursor-zoom-out"
      onClick={(e) => { if (e.target === overlayRef.current) close(); }}
    >
      {/* Blur layer is pointer-events-none so it never touches cursor rendering */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
      />
      {/* Panel: flex-col so header never scrolls, body scrolls independently */}
      <div
        ref={panelRef}
        className="relative z-10 w-full sm:max-w-4xl max-h-[96dvh] sm:max-h-[90vh] flex flex-col rounded-t-3xl sm:rounded-3xl bg-hovs-bg border border-hovs-border shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
        style={{ cursor: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Non-scrolling close bar */}
        <div className="shrink-0 flex justify-end px-5 pt-4 pb-2">
          <button
            onClick={close}
            className="cursor-pointer w-9 h-9 rounded-full bg-hovs-surface border border-hovs-border flex items-center justify-center text-hovs-muted hover:text-hovs-cream hover:border-hovs-emerald/50 transition-all duration-200 shadow-lg"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1" style={{ cursor: "auto" }}>

        {/* Image hero */}
        <div data-modal-item className="relative h-48 sm:h-72 w-full overflow-hidden bg-hovs-surface">
          <ImageSlot
            file={project.imageFile}
            alt={project.title}
            fill
            className="absolute inset-0"
            imgClassName="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hovs-bg via-hovs-bg/30 to-transparent" />
          <div className="absolute bottom-5 left-7 right-16 flex items-end justify-between">
            <span className={`${project.badgeBg} ${project.badgeText} px-3 py-1 rounded-full font-nehomi font-extrabold text-xs`}>
              PROJECT {project.num}
            </span>
            <span className="font-menutal text-xs text-hovs-muted">{project.year}</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 sm:px-10 pb-10 pt-5 space-y-6">

          {/* Category + title */}
          <div data-modal-item>
            <span className={`font-menutal text-xs uppercase tracking-widest ${project.accentText}`}>
              {project.category}
            </span>
            <h2 className="font-nehomi text-2xl sm:text-3xl font-black text-hovs-cream leading-tight mt-2">
              {project.title}
            </h2>
            <p className="font-menutal text-xs text-hovs-muted mt-1">{project.role}</p>
          </div>

          {/* Stats row */}
          <div data-modal-item className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.stats.map(s => (
              <div key={s.label} className="p-4 rounded-2xl bg-hovs-surface border border-hovs-border text-center">
                <span className={`font-nehomi text-xl sm:text-2xl font-black block ${project.accentText}`}>{s.val}</span>
                <span className="font-menutal text-[10px] text-hovs-muted mt-0.5 block">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Full description */}
          <div data-modal-item className="p-5 rounded-2xl bg-hovs-surface border border-hovs-border">
            <p className="font-menutal text-sm text-hovs-muted leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Highlights */}
          <div data-modal-item className="space-y-3">
            <span className="font-menutal text-[10px] uppercase tracking-widest text-hovs-muted">Key Highlights</span>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 text-sm font-menutal text-hovs-cream">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${accentDot}`} />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div data-modal-item className="flex flex-wrap gap-2 pt-4 border-t border-hovs-border">
            {project.tags.map(t => (
              <span key={t.label} className={`px-3 py-1.5 rounded-xl text-xs font-menutal border ${
                t.accent
                  ? `border-transparent ${project.badgeBg} ${project.badgeText}`
                  : "bg-hovs-surface border-hovs-border text-hovs-cream"
              }`}>
                {t.label}
              </span>
            ))}
          </div>

        </div>
        </div>{/* end scrollable body */}
      </div>
    </div>,
    document.body
  );
}

/* ── SCROLL-STACK SHOWCASE ───────────────────────────────────── */
export default function ScrollStackShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".stack-card"));

    const ctx = gsap.context(() => {
      gsap.set("[data-ss-heading]", { y: 35, opacity: 0 });
      gsap.set("[data-ss-desc]",    { y: 25, opacity: 0 });
      cards.forEach((card) => gsap.set(card, { y: 50, opacity: 0 }));

      gsap.to("[data-ss-heading]", { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%" } });
      gsap.to("[data-ss-desc]", { y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 78%" } });

      cards.forEach((card, i) => {
        gsap.to(card, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" } });
        if (i === cards.length - 1) return;
        const next = cards[i + 1];
        ScrollTrigger.create({
          trigger: next, start: "top bottom", end: "top 30%", scrub: 0.4,
          onUpdate: (self) => {
            gsap.set(card, {
              scale: 1 - self.progress * 0.06,
              filter: `brightness(${1 - self.progress * 0.4})`,
            });
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <section id="scroll-stack-showcase" className="editorial-container py-12" ref={sectionRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-hovs-border pb-6 gap-4">
          <div data-ss-heading>
            <span className="text-xs font-menutal uppercase tracking-widest text-hovs-emerald block mb-2">
              // 04 &bull; INTERACTIVE SCROLL-STACK PORTFOLIO
            </span>
            <h2 className="font-nehomi section-heading font-black text-hovs-cream">
              Selected Mobile, Web, Figma &amp; Brand Works.
            </h2>
          </div>
          <p data-ss-desc className="font-menutal text-xs sm:text-sm text-hovs-muted max-w-sm">
            Click any card to view full project details &mdash; scroll to stack each project in 3D depth.
          </p>
        </div>

        <div className="space-y-10 relative">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.num}
              project={project}
              idx={idx}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

/* ── PROJECT CARD ────────────────────────────────────────────── */
function ProjectCard({ project, onClick }: { project: Project; idx: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  /* subtle scale on hover via CSS — CTA arrow animates with GSAP */
  return (
    <div
      ref={cardRef}
      className="stack-card group cursor-pointer top-24 rounded-3xl bg-hovs-surface border border-hovs-border p-7 sm:p-12 shadow-2xl hover:border-hovs-emerald/40 transition-colors duration-300"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }}
      aria-label={`View details for ${project.title}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left: text */}
        <div className="lg:col-span-6 space-y-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`${project.badgeBg} ${project.badgeText} px-3 py-1 rounded-full font-nehomi font-extrabold text-xs`}>
              PROJECT {project.num}
            </span>
            <span className={`text-xs font-menutal uppercase tracking-widest ${project.accentText}`}>
              {project.category}
            </span>
          </div>
          <h3 className="font-nehomi text-3xl sm:text-5xl font-black text-hovs-cream leading-tight">
            {project.title}
          </h3>
          <p className="font-menutal text-sm sm:text-base text-hovs-muted leading-relaxed">
            {project.shortDesc}
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-menutal">
            {project.tags.map(t => (
              <span key={t.label} className={`px-3 py-1.5 rounded-xl border ${
                t.accent
                  ? `border-transparent ${project.badgeBg} ${project.badgeText}`
                  : "bg-hovs-bg border-hovs-border text-hovs-cream"
              }`}>
                {t.label}
              </span>
            ))}
          </div>

          {/* Click-to-view CTA */}
          <div className="inline-flex items-center gap-2 text-xs font-menutal text-hovs-muted group-hover:text-hovs-cream transition-colors duration-200 pt-1">
            <span>View full project</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Right: image */}
        <div className="lg:col-span-6 rounded-2xl overflow-hidden relative min-h-[270px] border border-hovs-border group-hover:border-hovs-emerald/30 transition-colors duration-300">
          <ImageSlot
            file={project.imageFile}
            alt={project.title}
            fill
            className="absolute inset-0"
            imgClassName="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hovs-bg/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end text-xs font-menutal">
            <span className="text-hovs-muted">{project.imageMeta[0]}</span>
            <span className={`font-semibold ${project.accentText}`}>{project.imageMeta[1]}</span>
          </div>
          {/* hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-hovs-bg/20 backdrop-blur-[1px]">
            <span className="px-5 py-2.5 rounded-full bg-hovs-bg/80 border border-hovs-border font-menutal text-xs text-hovs-cream backdrop-blur-sm">
              View Details →
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
