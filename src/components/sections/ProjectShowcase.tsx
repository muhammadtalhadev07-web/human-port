"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import ImageSlot from "@/components/ui/ImageSlot";

interface ProjectShowcaseProps {
  onOpenCase: (index: number) => void;
}

/* ════════════════════════════════════════════════
   PROJECT 01 — AETHER ORBITAL (Horizontal Slider)
   ════════════════════════════════════════════════ */

function AetherSlides() {
  return (
    <>
      <div className="hero-adaptive-slide min-w-[85vw] sm:min-w-[720px] lg:min-w-[860px] h-[420px] sm:h-[500px] rounded-3xl bg-gradient-to-br from-[#0E1914] via-[#09100D] to-[#060807] border border-hovs-border p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-hovs-emerald/10 blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: "linear-gradient(to right, #D2FF28 1px, transparent 1px), linear-gradient(to bottom, #D2FF28 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="flex justify-between items-center relative z-10 text-xs font-menutal text-hovs-emerald uppercase tracking-widest">
          <span>SLIDE 01 // MISSION LOGOMARK &amp; TELEMETRY</span>
          <span>FIGMA AUTO-LAYOUT 5.0</span>
        </div>
        <div className="my-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xs font-menutal text-hovs-emerald mb-2 uppercase tracking-wider">Vector Geometry Grid</div>
            <div className="font-nehomi text-4xl sm:text-6xl font-black tracking-tight text-hovs-cream leading-none">
              AETHER<br /><span className="text-hovs-emerald">IX-ORBIT</span>
            </div>
            <p className="font-menutal text-sm text-hovs-muted mt-4 max-w-sm leading-relaxed">
              Custom logomark &amp; cockpit interface engineered to visualize deep-space orbital trajectories in real time.
            </p>
          </div>
          <div className="h-56 sm:h-64 rounded-2xl bg-hovs-bg/90 border border-hovs-border p-6 flex items-center justify-center relative">
            <svg viewBox="0 0 260 220" className="w-full h-full">
              <ellipse cx="130" cy="110" rx="105" ry="48" transform="rotate(-24 130 110)" stroke="#D2FF28" strokeWidth="2.5" fill="none" />
              <ellipse cx="130" cy="110" rx="105" ry="48" transform="rotate(24 130 110)" stroke="#00E599" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
              <circle cx="130" cy="110" r="34" fill="#D2FF28" />
              <circle cx="130" cy="110" r="18" fill="#060807" />
              <circle cx="212" cy="74" r="7" fill="#FF5E36" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs font-menutal text-hovs-muted relative z-10">
          <span>1.8 BILLION MILES DEEP</span>
          <span>DRAG FOR MORE SLIDES &rarr;</span>
        </div>
      </div>

      <div className="min-w-[82vw] sm:min-w-[560px] lg:min-w-[640px] h-[420px] sm:h-[500px] rounded-3xl bg-hovs-surface border border-hovs-border p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
        <div className="flex justify-between items-center text-xs font-menutal text-hovs-emerald uppercase tracking-widest">
          <span>SLIDE 02 // FIGMA COMPONENT MATRIX</span>
          <span>320+ TOKENS</span>
        </div>
        <div className="my-auto space-y-4">
          <div className="p-5 rounded-2xl bg-hovs-bg border border-hovs-border flex items-center justify-between">
            <div>
              <span className="text-[11px] font-menutal text-hovs-muted block">PRIMARY DISPLAY HEADING</span>
              <span className="font-nehomi text-2xl sm:text-3xl font-bold text-hovs-cream">Display Heavy &mdash; 64pt</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-hovs-lime/20 text-hovs-lime text-xs font-menutal">Aa</span>
          </div>
          <div className="p-5 rounded-2xl bg-hovs-bg border border-hovs-border flex items-center justify-between">
            <div>
              <span className="text-[11px] font-menutal text-hovs-muted block">EDITORIAL &amp; UI BODY SYSTEM</span>
              <span className="font-menutal text-base sm:text-lg font-medium text-hovs-cream">Body Regular &mdash; 16pt / 150%</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-hovs-emerald/20 text-hovs-emerald text-xs font-menutal">Body</span>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-hovs-lime text-hovs-bg font-nehomi font-bold text-xs text-center">Acid<br />Gold</div>
            <div className="p-4 rounded-xl bg-hovs-emerald text-hovs-bg font-nehomi font-bold text-xs text-center">Studio<br />Emerald</div>
            <div className="p-4 rounded-xl bg-hovs-warm text-white font-nehomi font-bold text-xs text-center">Signal<br />Red</div>
          </div>
        </div>
        <div className="text-xs font-menutal text-hovs-muted">VARIABLE MODES: ORBIT DARK / DAYLIGHT HIGH-CONTRAST</div>
      </div>

      <div className="min-w-[82vw] sm:min-w-[520px] lg:min-w-[580px] h-[420px] sm:h-[500px] rounded-3xl bg-gradient-to-tr from-[#18120E] to-[#0D1210] border border-hovs-border p-8 sm:p-12 flex flex-col justify-between">
        <div className="text-xs font-menutal text-hovs-warm uppercase tracking-widest">SLIDE 03 // TACTILE FLIGHT PATCHES &amp; PRINT</div>
        <div className="my-auto flex flex-col items-center text-center">
          <div className="w-44 h-44 rounded-full border-4 border-hovs-lime bg-hovs-bg flex flex-col items-center justify-center p-6 shadow-[0_0_60px_rgba(210,255,40,0.2)]">
            <span className="text-[10px] font-menutal tracking-widest text-hovs-emerald">FLIGHT CREW</span>
            <span className="font-nehomi text-3xl font-black text-hovs-cream my-1">IX-26</span>
            <span className="text-[10px] font-menutal text-hovs-lime">GRAPHIC EMBLEM</span>
          </div>
          <p className="font-menutal text-sm text-hovs-muted mt-6 max-w-xs leading-relaxed">
            Embroidered mission patches, security access cards, and vertical rocket fuselage stencils.
          </p>
        </div>
        <div className="text-xs font-menutal text-hovs-muted">PRINT &amp; PHYSICAL PRODUCTION</div>
      </div>
    </>
  );
}

function AetherProjectBlock({ onOpenCase }: { onOpenCase: (idx: number) => void }) {
  const blockRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const pausedRef = useRef(false);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const slideCount = 3;

  const jumpToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }, []);

  const slideProject = useCallback((direction: number) => {
    trackRef.current?.scrollBy({ left: direction * 650, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          const nextSlide = (currentSlide + 1) % slideCount;
          setTimeout(() => jumpToSlide(nextSlide), 0);
          return 0;
        }
        return next;
      });
    }, 90);
    return () => clearInterval(interval);
  }, [currentSlide, jumpToSlide]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-ae-topbar]", { y: 25, opacity: 0 });
      gsap.set("[data-ae-slider]", { y: 35, opacity: 0 });
      gsap.set("[data-ae-caption]", { y: 25, opacity: 0 });
      gsap.set("[data-ae-thumbs]", { x: 25, opacity: 0 });

      gsap.to("[data-ae-topbar]", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: blockRef.current, start: "top 82%" } });
      gsap.to("[data-ae-slider]", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: blockRef.current, start: "top 78%" } });
      gsap.to("[data-ae-caption]", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: blockRef.current, start: "top 60%" } });
      gsap.to("[data-ae-thumbs]", { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: blockRef.current, start: "top 58%" } });
    }, blockRef);
    return () => ctx.revert();
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { isDown: true, startX: e.pageX - track.offsetLeft, scrollLeft: track.scrollLeft };
    track.style.transform = "scale(0.99) skewX(-1.5deg)";
  };
  const onMouseUp = () => {
    dragRef.current.isDown = false;
    if (trackRef.current) trackRef.current.style.transform = "scale(1) skewX(0deg)";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.isDown) return;
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = dragRef.current.scrollLeft - (x - dragRef.current.startX) * 1.8;
  };

  const progressLabels = ["01 // ORBIT TELEMETRY", "02 // FIGMA TOKENS", "03 // FLIGHT PATCHES"];

  return (
    <section ref={blockRef} id="work-01" className="overflow-hidden">
      <div data-ae-topbar className="editorial-container mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-hovs-lime text-hovs-bg font-nehomi font-black text-xs">01 / 03</span>
          <span className="font-menutal text-xs uppercase tracking-widest text-hovs-muted">FIGMA DESIGN SYSTEM &amp; MISSION BRANDING</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => slideProject(-1)} className="w-10 h-10 rounded-full border border-hovs-border hover:border-hovs-lime flex items-center justify-center text-hovs-cream transition" aria-label="Previous slide">&larr;</button>
          <button onClick={() => slideProject(1)} className="w-10 h-10 rounded-full border border-hovs-border hover:border-hovs-lime flex items-center justify-center text-hovs-cream transition" aria-label="Next slide">&rarr;</button>
        </div>
      </div>

      <div data-ae-slider className="editorial-container">
        <div
          ref={trackRef}
          className="gallery-track flex gap-6 overflow-x-auto pb-2 select-none"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => { pausedRef.current = false; onMouseUp(); }}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          <AetherSlides />
        </div>
      </div>

      <div className="editorial-container mt-4">
        <div className="grid grid-cols-3 gap-4">
          {progressLabels.map((label, idx) => (
            <button key={label} onClick={() => jumpToSlide(idx)} className="group py-2 text-left">
              <div className="flex justify-between text-[11px] font-menutal text-hovs-muted mb-1.5">
                <span className="group-hover:text-hovs-lime transition">{label}</span>
                <span>{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="w-full h-1 bg-hovs-border rounded-full overflow-hidden">
                <div
                  className="slide-progress-fill"
                  style={{ width: idx < currentSlide ? "100%" : idx === currentSlide ? `${progress}%` : "0%" }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="editorial-container pt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div data-ae-caption className="lg:col-span-7 space-y-4">
          <div className="text-xs font-menutal uppercase tracking-widest text-hovs-lime">Brand Identity, Figma UI/UX System</div>
          <h2 className="font-nehomi section-heading font-extrabold text-hovs-cream">AETHER &mdash; Branding &amp; Interface Architecture for Orbital Telemetry</h2>
          <p className="font-menutal text-base text-hovs-muted leading-relaxed max-w-2xl">
            We were commissioned to craft both the iconic mission symbol and the multi-screen Figma control room interface. The logomark reflects elliptical orbital dips, while the interface uses a strict typographic hierarchy for zero-latency legibility.
          </p>
          <button onClick={() => onOpenCase(0)} className="inline-flex items-center gap-2 font-nehomi font-bold text-sm text-hovs-lime hover:underline">
            <span>View project details &amp; Figma specs</span><span>&rarr;</span>
          </button>
        </div>
        <div data-ae-thumbs className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { text: "[ AETHER // 01 ]", textColor: "text-hovs-lime", desc: "The mission type identifier on the launch fuselage." },
            { text: "❖ 99.8% FPS", textColor: "text-hovs-emerald", desc: "Figma Smart-Animate telemetry widgets." },
          ].map((thumb) => (
            <div key={thumb.text} className="rounded-2xl bg-hovs-surface border border-hovs-border p-5 flex flex-col justify-between">
              <div className={`h-28 rounded-xl bg-hovs-bg border border-hovs-border flex items-center justify-center font-nehomi text-xl font-bold ${thumb.textColor}`}>{thumb.text}</div>
              <p className="font-menutal text-xs text-hovs-muted mt-3 leading-relaxed">{thumb.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   PROJECT 02 — KINETIX STUDIO (Editorial Split Layout)
   ════════════════════════════════════════════════ */

function KinetixEditorial({ onOpenCase }: { onOpenCase: (idx: number) => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-ke-label]", { y: 20, opacity: 0 });
      gsap.set("[data-ke-featured]", { x: -50, opacity: 0, rotateY: 4 });
      gsap.set("[data-ke-info]", { x: 50, opacity: 0 });
      gsap.set("[data-ke-tile]", { y: 30, opacity: 0, scale: 0.96 });

      gsap.to("[data-ke-label]", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } });
      gsap.to("[data-ke-featured]", { x: 0, opacity: 1, rotateY: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } });
      gsap.to("[data-ke-info]", { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 78%" } });
      gsap.to("[data-ke-tile]", { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 65%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work-02" className="overflow-hidden">
      <div data-ke-label className="editorial-container mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-hovs-emerald text-hovs-bg font-nehomi font-black text-xs">02 / 03</span>
          <span className="font-menutal text-xs uppercase tracking-widest text-hovs-muted">PRODUCT DESIGN, BRAND IDENTITY &amp; PACKAGING</span>
        </div>
        <button onClick={() => onOpenCase(1)} className="hidden sm:inline-flex items-center gap-2 text-xs font-menutal text-hovs-muted hover:text-hovs-emerald transition-colors uppercase tracking-widest">
          <span>Inspect Case Study</span><span>&rarr;</span>
        </button>
      </div>

      <div className="editorial-container grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Large featured card */}
        <div data-ke-featured className="lg:col-span-7 relative rounded-3xl bg-gradient-to-br from-[#0B1F19] via-[#071511] to-[#060807] border border-hovs-border overflow-hidden min-h-[520px] lg:min-h-[600px] p-8 sm:p-10 flex flex-col justify-between group">
          {/* ── IMAGE SLOT: kinetix-featured.jpg ───────────────────────
              Drop a Kinetix project image into /public/images/kinetix-featured.jpg
              Then replace <ImageSlot> with:
                <Image src="/images/kinetix-featured.jpg" alt="Kinetix Studio"
                       fill className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
          ─────────────────────────────────────────────────────────────── */}
          <ImageSlot
            file="kinetix-featured.jpg"
            alt="Kinetix Studio project visual"
            fill
            className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700"
            imgClassName="object-cover"
          />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, #00E599 1px, transparent 1px), linear-gradient(to bottom, #00E599 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-hovs-emerald/[0.08] blur-3xl" />
          <div className="absolute -left-10 bottom-20 w-56 h-56 rounded-full bg-hovs-lime/[0.05] blur-3xl" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-hovs-emerald/20 text-hovs-emerald text-xs font-menutal uppercase tracking-widest">Zero-Noise Interface</span>
            <span className="text-xs font-menutal text-hovs-muted uppercase tracking-widest">FIGMA + ILLUSTRATOR</span>
          </div>

          <div className="relative z-10 my-auto flex flex-col items-center justify-center py-8">
            <svg className="w-36 h-36 mb-6 opacity-90 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="78" stroke="#00E599" strokeWidth="2" strokeDasharray="6 4" />
              <circle cx="100" cy="100" r="58" fill="url(#keGrad)" opacity="0.3" />
              <path d="M65 95 C65 75, 135 75, 135 95" stroke="#D2FF28" strokeWidth="4" strokeLinecap="round" />
              <circle cx="80" cy="85" r="6" fill="#F4F3EF" />
              <circle cx="120" cy="85" r="6" fill="#F4F3EF" />
              <path d="M75 125 Q100 148 125 125" stroke="#00E599" strokeWidth="4" strokeLinecap="round" />
              <circle cx="100" cy="30" r="5" fill="#D2FF28" />
              <circle cx="167" cy="68" r="4" fill="#FF5E36" />
              <circle cx="167" cy="132" r="4" fill="#00E599" />
              <defs>
                <radialGradient id="keGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00E599" />
                  <stop offset="100%" stopColor="#060807" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <h3 className="font-nehomi text-3xl sm:text-4xl lg:text-5xl font-black text-hovs-cream text-center leading-[0.95] tracking-tight">
              SAVING<br />EVERYTHING<br /><span className="text-hovs-emerald">YOU CARE</span><br />ABOUT.
            </h3>
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {["420,000+ Creatives", "iOS · macOS · Web", "Figma Component OS"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-hovs-bg/60 border border-hovs-border/60 text-xs font-menutal text-hovs-muted backdrop-blur-sm">{tag}</span>
              ))}
            </div>
            <div className="flex justify-between items-center text-xs font-menutal text-hovs-muted">
              <span>BRAND IDENTITY &amp; PRODUCT DESIGN</span>
              <span>KINETIX STUDIO</span>
            </div>
          </div>
        </div>

        {/* Right info panel */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div data-ke-info className="space-y-4">
            <div className="text-xs font-menutal text-hovs-emerald uppercase tracking-widest">Brand Identity, Figma Product Design</div>
            <h2 className="font-nehomi text-2xl sm:text-3xl font-extrabold text-hovs-cream leading-tight">
              KINETIX &mdash; Building a Peaceful Oasis Within the Chaos of the Internet
            </h2>
            <p className="font-menutal text-sm text-hovs-muted leading-relaxed">
              I led the complete product design in Figma, the custom mascot illustration, and an editorial typography pairing optimized for expressive cards and frictionless reading.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 flex-1">
            {[
              { title: "Instant Tagging", sub: "Micro-animated pill interactions built with Figma variants.", icon: "01", color: "text-hovs-emerald", bg: "bg-hovs-emerald/15" },
              { title: "Serendipity Mode", sub: "Distraction-free full-bleed reading canvas with haptic support.", icon: "02", color: "text-hovs-lime", bg: "bg-hovs-lime/15" },
              { title: "The Mind Guy™", sub: "Hand-crafted vector mascot & enamel pin merchandise stamp.", icon: "03", color: "text-hovs-warm", bg: "bg-hovs-warm/15" },
              { title: "A Better Place.", sub: "Editorial campaign slogan & print postcard series.", icon: "04", color: "text-hovs-cream", bg: "bg-hovs-surface" },
            ].map((tile) => (
              <div key={tile.title} data-ke-tile className="rounded-2xl bg-hovs-surface border border-hovs-border p-5 flex flex-col gap-3 hover:border-hovs-emerald/40 transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <span className={`w-8 h-8 rounded-xl ${tile.bg} ${tile.color} flex items-center justify-center font-nehomi font-black text-xs`}>{tile.icon}</span>
                </div>
                <div>
                  <div className={`font-nehomi text-base font-bold ${tile.color}`}>{tile.title}</div>
                  <p className="font-menutal text-xs text-hovs-muted mt-1 leading-relaxed">{tile.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <button data-ke-tile onClick={() => onOpenCase(1)} className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-hovs-surface border border-hovs-border hover:border-hovs-emerald/60 text-hovs-cream font-nehomi font-bold text-sm transition-all duration-300 group">
            <span>Inspect Kinetix Case Study</span>
            <span className="ml-auto text-hovs-emerald group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   PROJECT 03 — AD ASTRA & BOTANICA (Magazine Masonry Grid)
   ════════════════════════════════════════════════ */

function AdAstraMasonry({ onOpenCase }: { onOpenCase: (idx: number) => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-am-label]", { y: 20, opacity: 0 });
      gsap.set("[data-am-title]", { y: 40, opacity: 0, skewY: 2 });
      gsap.set("[data-am-tile]", { y: 40, opacity: 0, scale: 0.95 });
      gsap.set("[data-am-quote]", { y: 25, opacity: 0 });

      gsap.to("[data-am-label]", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } });
      gsap.to("[data-am-title]", { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
      gsap.to("[data-am-tile]", { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 72%" } });
      gsap.to("[data-am-quote]", { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 50%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work-03" className="overflow-hidden">
      {/* Header */}
      <div data-am-label className="editorial-container mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-hovs-warm text-white font-nehomi font-black text-xs">03 / 03</span>
          <span className="font-menutal text-xs uppercase tracking-widest text-hovs-muted">GRAPHIC POSTER DESIGN, BRANDING &amp; WEB EXPERIENCE</span>
        </div>
        <button onClick={() => onOpenCase(2)} className="hidden sm:inline-flex items-center gap-2 text-xs font-menutal text-hovs-muted hover:text-hovs-warm transition-colors uppercase tracking-widest">
          <span>View Case Study</span><span>&rarr;</span>
        </button>
      </div>

      {/* Big editorial title */}
      <div data-am-title className="editorial-container mb-8 overflow-hidden">
        <div className="flex flex-wrap items-baseline gap-4 sm:gap-8">
          <span className="font-nehomi font-black text-hovs-cream" style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>AD ASTRA</span>
          <span className="font-nehomi font-black text-hovs-warm" style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>&amp; BOTANICA</span>
          <span className="font-menutal text-xs text-hovs-muted uppercase tracking-widest self-end pb-3">Swiss Type &middot; Print &middot; AR Web</span>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="editorial-container grid grid-cols-6 gap-4">
        {/* Large hero tile */}
        <div data-am-tile className="col-span-6 sm:col-span-4 lg:col-span-3 row-span-2 rounded-3xl bg-gradient-to-br from-[#1B100E] via-[#0F1311] to-[#060807] border border-hovs-border overflow-hidden relative group min-h-[420px] flex flex-col justify-between p-8 sm:p-10">
          {/* ── IMAGE SLOT: adastra-poster.jpg ──────────────────────
              Drop an Ad Astra poster image into /public/images/adastra-poster.jpg
              Then replace <ImageSlot> with:
                <Image src="/images/adastra-poster.jpg" alt="Ad Astra Poster"
                       fill className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
          ───────────────────────────────────────────────────────── */}
          <ImageSlot
            file="adastra-poster.jpg"
            alt="Ad Astra exhibition poster"
            fill
            className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700"
            imgClassName="object-cover"
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, #FF5E36 1px, transparent 1px), linear-gradient(to bottom, #FF5E36 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-hovs-warm/10 blur-3xl" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-hovs-warm/20 text-hovs-warm text-xs font-menutal uppercase tracking-widest">Loss of Signal</span>
            <span className="text-xs font-menutal text-hovs-muted">PRINT + DIGITAL EXHIBITION</span>
          </div>

          <div className="relative z-10 my-auto">
            <div className="text-[10px] font-menutal text-hovs-muted mb-3 uppercase tracking-widest">SWISS TYPOGRAPHIC POSTER SERIES</div>
            <div className="font-nehomi font-black text-hovs-cream leading-none tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
              L O S<br /><span className="text-hovs-warm">&mdash; 2026</span>
            </div>
            <div className="mt-6 w-full h-1.5 rounded-full bg-gradient-to-r from-hovs-warm via-hovs-lime to-hovs-emerald opacity-70" />
            <p className="font-menutal text-sm text-hovs-muted mt-5 leading-relaxed max-w-sm">
              High-contrast brutalist exhibition posters and interactive WebGL microsite celebrating deep-space cinema and Swiss grid tension.
            </p>
          </div>

          <div className="relative z-10 flex justify-between items-center text-xs font-menutal text-hovs-muted">
            <span>MUSEUM ARCHIVAL PAPER + WEBGL SITE</span>
            <span className="text-hovs-warm">&#9679; LIVE PRINT</span>
          </div>
        </div>

        {/* Top right: Poster Edition */}
        <div data-am-tile className="col-span-6 sm:col-span-2 lg:col-span-2 rounded-3xl bg-hovs-surface border border-hovs-border overflow-hidden p-6 flex flex-col justify-between group hover:border-hovs-warm/40 transition-colors duration-300">
          <div className="flex justify-between items-start text-[10px] font-menutal text-hovs-muted uppercase tracking-widest">
            <span>POSTER EDITION</span>
            <span className="text-hovs-warm">500 PRINTS</span>
          </div>
          <div className="my-auto text-center py-4">
            <div className="font-nehomi text-4xl sm:text-5xl font-black text-hovs-cream tracking-tighter">AD<br />ASTRA</div>
            <div className="font-nehomi text-sm font-bold text-hovs-warm mt-1">MONOLITH SERIES</div>
          </div>
          <div className="text-[10px] font-menutal text-hovs-muted">SCREENPRINT &middot; FOIL STAMP</div>
        </div>

        {/* Bottom right: Packaging */}
        <div data-am-tile className="col-span-6 sm:col-span-2 lg:col-span-2 rounded-3xl bg-hovs-bg border border-hovs-border p-6 flex flex-col justify-between group hover:border-hovs-emerald/40 transition-colors duration-300">
          <div className="flex justify-between items-start text-[10px] font-menutal text-hovs-muted uppercase tracking-widest">
            <span>PACKAGING SYSTEM</span>
            <span>DIELINE 01</span>
          </div>
          <div className="my-auto">
            <div className="w-14 h-14 rounded-2xl bg-hovs-emerald/15 border border-hovs-emerald/30 flex items-center justify-center mb-3">
              <span className="font-nehomi font-black text-hovs-emerald text-sm">B™</span>
            </div>
            <div className="font-nehomi text-2xl font-black text-hovs-emerald">BOTANICA™</div>
            <div className="font-menutal text-xs text-hovs-muted mt-1">Foil Stamped Box &middot; Embossed Sleeve</div>
          </div>
          <div className="flex gap-2">
            <span className="px-2.5 py-1 rounded-full bg-hovs-surface border border-hovs-border text-[10px] font-menutal text-hovs-muted">Illustrator</span>
            <span className="px-2.5 py-1 rounded-full bg-hovs-surface border border-hovs-border text-[10px] font-menutal text-hovs-muted">Blender 3D</span>
          </div>
        </div>

        {/* Stats tile */}
        <div data-am-tile className="col-span-6 sm:col-span-6 lg:col-span-1 rounded-3xl bg-hovs-surface border border-hovs-border p-6 flex flex-col justify-between">
          <span className="text-[10px] font-menutal text-hovs-muted uppercase tracking-widest">STOREFRONT</span>
          <div className="text-center py-4">
            <div className="font-nehomi text-4xl font-black text-hovs-lime">+210%</div>
            <div className="font-menutal text-xs text-hovs-muted mt-1">Sales Growth</div>
          </div>
          <div className="space-y-2">
            <div className="text-[10px] font-menutal text-hovs-muted">NEXT.JS + ARKIT</div>
            <div className="text-[10px] font-menutal text-hovs-emerald">AR PREVIEW &#8599;</div>
          </div>
        </div>
      </div>

      {/* Full-width caption strip */}
      <div data-am-quote className="editorial-container mt-6 rounded-2xl bg-hovs-surface/60 border border-hovs-border/60 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="max-w-2xl">
          <div className="text-xs font-menutal text-hovs-warm uppercase tracking-widest mb-2">Graphic Design, Brand Identity &amp; Web Storefront</div>
          <p className="font-menutal text-base sm:text-lg text-hovs-muted leading-relaxed">
            &ldquo;Combining classic Swiss typographic poster design with custom packaging dielines and an interactive Next.js + iOS AR storefront. Every headline uses bold display type with archival specifications.&rdquo;
          </p>
        </div>
        <button onClick={() => onOpenCase(2)} className="shrink-0 inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-hovs-warm/40 hover:border-hovs-warm/80 text-hovs-warm font-nehomi font-bold text-sm transition-all duration-300 group">
          <span>Explore Specifications</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════════ */

export default function ProjectShowcase({ onOpenCase }: ProjectShowcaseProps) {
  return (
    <div className="space-y-28 sm:space-y-36">
      <AetherProjectBlock onOpenCase={onOpenCase} />
      <KinetixEditorial onOpenCase={onOpenCase} />
      <AdAstraMasonry onOpenCase={onOpenCase} />
    </div>
  );
}
