"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface LabInfo {
  badge: string;
  title: string;
  desc: string;
  s1Val: string;
  s1Lbl: string;
  s2Val: string;
  s2Lbl: string;
  features: string[];
}

const labData: Record<string, LabInfo> = {
  mobile: {
    badge: "REACT NATIVE & FLUTTER • IOS & ANDROID",
    title: "NOVA WALLET — Mobile Banking & Crypto Super-App",
    desc: "Designed from scratch in Figma and developed for iOS and Android with smooth biometric authentication, real-time portfolio charts, and tactile haptic feedback.",
    s1Val: "60 FPS",
    s1Lbl: "Native Gesture Engine",
    s2Val: "4.9 ★",
    s2Lbl: "App Store Rating",
    features: ["Biometric Vault Security", "Real-time Portfolio Charts", "Reanimated 3 Gesture Physics"],
  },
  web: {
    badge: "NEXT.JS 15 • TYPESCRIPT • TAILWIND • MOTION",
    title: "NEXUS CLOUD — High-Velocity Web SaaS Platform",
    desc: "Full-stack web application engineered with Next.js, interactive data visualizations, instant keyboard command palettes, and 100/100 Lighthouse performance.",
    s1Val: "100/100",
    s1Lbl: "Core Web Vitals",
    s2Val: "< 40ms",
    s2Lbl: "Edge Response Time",
    features: ["Sub-40ms Edge Deployment", "Interactive WebGL Canvas", "Command Palette + Shortcuts"],
  },
  figma: {
    badge: "FIGMA AUTO-LAYOUT 5.0 • MULTI-BRAND TOKENS",
    title: "PRISM UI — 480+ Component Design System",
    desc: "Unified Figma architecture bridging Graphic Design and Engineering with automated Dark/Light mode variables and custom typography tokens.",
    s1Val: "480+",
    s1Lbl: "Figma Components",
    s2Val: "100%",
    s2Lbl: "Code Token Sync",
    features: ["Dark / Light Variable Modes", "GitHub Design Token Pipeline", "Auto-Layout 5.0 Responsive"],
  },
};

type TabKey = "mobile" | "web" | "figma";

const tabs: { key: TabKey; label: string; short: string; accentBg: string; accentText: string; dot: string }[] = [
  { key: "mobile",  label: "Mobile App UI",     short: "iOS & Android",      accentBg: "bg-hovs-emerald",  accentText: "text-hovs-emerald", dot: "bg-hovs-emerald" },
  { key: "web",     label: "Web SaaS Platform", short: "Next.js 15",         accentBg: "bg-hovs-lime",     accentText: "text-hovs-lime",    dot: "bg-hovs-lime"    },
  { key: "figma",   label: "Figma Design Sys.", short: "480+ Components",    accentBg: "bg-hovs-warm",     accentText: "text-hovs-warm",    dot: "bg-hovs-warm"    },
];

export default function AppWebLab() {
  const [activeTab, setActiveTab] = useState<TabKey>("mobile");
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const info = labData[activeTab];
  const activeTabMeta = tabs.find(t => t.key === activeTab)!;

  /* Animate content on tab switch */
  const handleTab = (key: TabKey) => {
    if (key === activeTab) return;
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(key);
          gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" });
        },
      });
    } else {
      setActiveTab(key);
    }
  };

  /* Entrance animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-lab-top]",      { y: 30, opacity: 0 });
      gsap.set("[data-lab-tabstrip]", { y: 20, opacity: 0 });
      gsap.set("[data-lab-info]",     { x: -30, opacity: 0 });
      gsap.set("[data-lab-viewport]", { x:  30, opacity: 0 });

      gsap.to("[data-lab-top]", {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });
      gsap.to("[data-lab-tabstrip]", {
        y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.to("[data-lab-info]", {
        x: 0, opacity: 1, duration: 0.85, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });
      gsap.to("[data-lab-viewport]", {
        x: 0, opacity: 1, duration: 0.85, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="app-web-lab" className="editorial-container py-16 overflow-hidden">
      <div className="rounded-3xl bg-hovs-surface border border-hovs-border overflow-hidden">

        {/* ── TOP HEADER ───────────────────────────────────────────── */}
        <div data-lab-top className="px-8 sm:px-12 lg:px-14 pt-10 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-hovs-border">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-menutal uppercase tracking-widest text-hovs-emerald">
                // 02 &bull; LIVE INTERACTIVE DEVICE LAB
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-hovs-emerald/15 text-hovs-emerald text-[10px] font-menutal uppercase tracking-widest">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hovs-emerald opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-hovs-emerald" />
                </span>
                Live Demo
              </span>
            </div>
            <h2 className="font-nehomi section-heading font-black text-hovs-cream leading-tight">
              Mobile App &amp; Web<br className="hidden sm:block" /> Engineering Studio
            </h2>
          </div>
          <p className="font-menutal text-xs sm:text-sm text-hovs-muted max-w-xs leading-relaxed">
            Switch between disciplines — each tab previews a real production project from design through deployment.
          </p>
        </div>

        {/* ── FULL-WIDTH TAB STRIP ─────────────────────────────────── */}
        <div data-lab-tabstrip className="grid grid-cols-3 border-b border-hovs-border">
          {tabs.map((t) => {
            const isActive = activeTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => handleTab(t.key)}
                className={`group relative flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 sm:py-5 text-left transition-all duration-300 border-r last:border-r-0 border-hovs-border ${
                  isActive
                    ? "bg-hovs-bg"
                    : "bg-hovs-surface hover:bg-hovs-bg/60"
                }`}
              >
                {/* active accent bar at top */}
                <span className={`absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                  isActive ? t.accentBg : "bg-transparent"
                }`} />

                <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 text-[14px] transition-all duration-300 ${
                  isActive
                    ? `${t.accentBg} shadow-lg`
                    : "bg-hovs-border/30 group-hover:bg-hovs-border/50"
                }`}>
                  {t.key === "mobile" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`w-3.5 h-3.5 ${isActive ? "text-hovs-bg" : "text-hovs-muted"}`}>
                      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2.5} strokeLinecap="round" />
                    </svg>
                  )}
                  {t.key === "web" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`w-3.5 h-3.5 ${isActive ? "text-hovs-bg" : "text-hovs-muted"}`}>
                      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  )}
                  {t.key === "figma" && (
                    <span className={`font-nehomi font-black text-[11px] ${isActive ? "text-hovs-bg" : "text-hovs-muted"}`}>❖</span>
                  )}
                </span>

                <div className="min-w-0">
                  <span className={`block font-nehomi font-extrabold text-xs sm:text-sm uppercase tracking-wide leading-tight transition-colors duration-300 ${
                    isActive ? "text-hovs-cream" : "text-hovs-muted group-hover:text-hovs-cream"
                  }`}>
                    {t.label}
                  </span>
                  <span className={`hidden sm:block font-menutal text-[10px] mt-0.5 transition-colors duration-300 ${
                    isActive ? t.accentText : "text-hovs-muted/60"
                  }`}>
                    {t.short}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── CONTENT AREA ─────────────────────────────────────────── */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

          {/* Left: Info panel */}
          <div data-lab-info className="lg:col-span-5 px-8 sm:px-12 lg:px-14 py-10 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-hovs-border">
            <div className="space-y-5">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-menutal uppercase tracking-widest ${activeTabMeta.accentBg === "bg-hovs-emerald" ? "bg-hovs-emerald/15 text-hovs-emerald" : activeTabMeta.accentBg === "bg-hovs-lime" ? "bg-hovs-lime/20 text-hovs-lime" : "bg-hovs-warm/15 text-hovs-warm"}`}>
                {info.badge}
              </span>
              <h3 className="font-nehomi text-2xl sm:text-3xl font-black text-hovs-cream leading-tight">
                {info.title}
              </h3>
              <p className="font-menutal text-sm sm:text-base text-hovs-muted leading-relaxed">
                {info.desc}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-hovs-bg border border-hovs-border">
                <span className={`font-nehomi text-2xl sm:text-3xl font-black block ${activeTabMeta.accentText}`}>
                  {info.s1Val}
                </span>
                <span className="font-menutal text-xs text-hovs-muted mt-0.5 block">{info.s1Lbl}</span>
              </div>
              <div className="p-4 rounded-2xl bg-hovs-bg border border-hovs-border">
                <span className="font-nehomi text-2xl sm:text-3xl font-black text-hovs-cream block">
                  {info.s2Val}
                </span>
                <span className="font-menutal text-xs text-hovs-muted mt-0.5 block">{info.s2Lbl}</span>
              </div>
            </div>

            {/* Feature list */}
            <div className="space-y-2.5 pt-1 border-t border-hovs-border">
              {info.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-xs font-menutal text-hovs-cream">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeTabMeta.dot}`} />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Viewport */}
          <div data-lab-viewport className="lg:col-span-7 relative overflow-hidden min-h-[420px] flex items-center justify-center p-8 sm:p-10">
            {/* ambient glow behind mockup */}
            <div className={`absolute inset-0 opacity-[0.06] blur-3xl pointer-events-none ${
              activeTab === "mobile" ? "bg-hovs-emerald" : activeTab === "web" ? "bg-hovs-lime" : "bg-hovs-warm"
            }`} style={{ transform: "scale(0.6)" }} />
            {/* subtle grid */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(to right, #00E599 1px, transparent 1px), linear-gradient(to bottom, #00E599 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

            <div className="relative z-10 w-full">
              {activeTab === "mobile" && <MobileView />}
              {activeTab === "web"    && <WebView />}
              {activeTab === "figma"  && <FigmaView />}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── MOBILE VIEW ─────────────────────────────────────────────── */
function MobileView() {
  return (
    <div className="flex items-center justify-center gap-5 sm:gap-8 flex-wrap sm:flex-nowrap">
      {/* Phone 1 — Wallet Home */}
      <div className="relative shrink-0" style={{ width: 200 }}>
        <div className="rounded-[32px] border-[3px] border-hovs-border bg-hovs-bg shadow-2xl overflow-hidden" style={{ height: 380 }}>
          {/* status bar */}
          <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[9px] font-menutal text-hovs-muted">
            <span>9:41</span>
            <div className="w-16 h-3.5 rounded-full bg-hovs-surface/80 border border-hovs-border/60" />
            <span className="text-hovs-emerald">5G ●</span>
          </div>

          <div className="px-4 pb-4 flex flex-col gap-3 h-full">
            <div className="pt-1 pb-2 border-b border-hovs-border/40 flex justify-between items-center">
              <span className="font-nehomi text-[11px] font-black text-hovs-cream">NOVA</span>
              <div className="w-6 h-6 rounded-full bg-hovs-emerald/20 border border-hovs-emerald/30 flex items-center justify-center">
                <span className="text-[8px] text-hovs-emerald font-bold">●●●</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-hovs-surface border border-hovs-border/60">
              <span className="text-[9px] font-menutal text-hovs-muted uppercase block">Total Balance</span>
              <div className="font-nehomi text-xl font-black text-hovs-cream mt-0.5">$84,920.50</div>
              <span className="text-[10px] font-menutal text-hovs-emerald mt-0.5 block">+14.2% This Month</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-hovs-surface border border-hovs-border/50 text-center">
                <span className="text-[9px] font-menutal text-hovs-muted block">Sent</span>
                <span className="font-nehomi text-sm font-black text-hovs-warm">$3,200</span>
              </div>
              <div className="p-2.5 rounded-xl bg-hovs-surface border border-hovs-border/50 text-center">
                <span className="text-[9px] font-menutal text-hovs-muted block">Received</span>
                <span className="font-nehomi text-sm font-black text-hovs-emerald">$9,800</span>
              </div>
            </div>

            <div className="space-y-1.5 flex-1">
              {[
                { n: "Apple Studio", v: "+$2,400", c: "text-hovs-emerald" },
                { n: "Figma Sub", v: "−$45", c: "text-hovs-warm" },
                { n: "Dribbble Pro", v: "−$19", c: "text-hovs-warm" },
              ].map(tx => (
                <div key={tx.n} className="px-3 py-2 rounded-xl bg-hovs-surface border border-hovs-border/40 flex justify-between items-center text-[10px] font-menutal">
                  <span className="text-hovs-cream">{tx.n}</span>
                  <span className={`font-nehomi font-bold ${tx.c}`}>{tx.v}</span>
                </div>
              ))}
            </div>

            <div className="p-2.5 rounded-xl bg-hovs-lime text-hovs-bg text-center font-nehomi font-extrabold text-[10px] uppercase tracking-wider">
              Send Transfer →
            </div>
          </div>
        </div>
        <div className="mt-3 text-center text-[10px] font-menutal text-hovs-muted uppercase tracking-widest">Wallet Home</div>
      </div>

      {/* Phone 2 — Analytics */}
      <div className="relative shrink-0" style={{ width: 200 }}>
        <div className="rounded-[32px] border-[3px] border-hovs-border bg-hovs-bg shadow-2xl overflow-hidden" style={{ height: 380 }}>
          <div className="flex justify-between items-center px-5 pt-3 pb-1 text-[9px] font-menutal text-hovs-muted">
            <span>9:41</span>
            <div className="w-16 h-3.5 rounded-full bg-hovs-surface/80 border border-hovs-border/60" />
            <span className="text-hovs-emerald">5G ●</span>
          </div>

          <div className="px-4 pb-4 flex flex-col gap-3 h-full">
            <div className="flex justify-between items-center text-[10px] font-menutal">
              <span className="text-hovs-emerald font-semibold uppercase tracking-widest">Analytics</span>
              <span className="text-hovs-muted">7D ▾</span>
            </div>

            {/* Chart */}
            <div className="p-3 rounded-2xl bg-hovs-surface border border-hovs-border/60">
              <div className="flex items-end justify-between gap-1.5 h-24">
                {[40, 65, 50, 80, 60, 92, 75].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md" style={{
                    height: `${h}%`,
                    background: i === 5 ? "var(--emerald)" : i === 6 ? "var(--lime)" : "rgba(0,229,153,0.3)"
                  }} />
                ))}
              </div>
              <div className="flex justify-between text-[8px] font-menutal text-hovs-muted mt-1.5">
                {["M","T","W","T","F","S","S"].map((d, i) => <span key={i}>{d}</span>)}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-hovs-surface border border-hovs-border/60 space-y-2">
              <div className="flex justify-between text-[10px] font-menutal">
                <span className="text-hovs-muted">Portfolio Growth</span>
                <span className="text-hovs-emerald font-bold">+28.4%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-hovs-bg overflow-hidden">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-hovs-emerald to-hovs-lime" />
              </div>
            </div>

            <div className="mt-auto text-center space-y-1">
              <div className="font-nehomi text-2xl font-black text-hovs-emerald">4.9 ★</div>
              <div className="font-menutal text-[9px] text-hovs-muted uppercase tracking-widest">App Store Rating</div>
            </div>
          </div>
        </div>
        <div className="mt-3 text-center text-[10px] font-menutal text-hovs-muted uppercase tracking-widest">Analytics</div>
      </div>
    </div>
  );
}

/* ── WEB VIEW ────────────────────────────────────────────────── */
function WebView() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Browser chrome */}
      <div className="rounded-2xl border border-hovs-border overflow-hidden shadow-2xl">
        <div className="px-4 py-3 bg-hovs-bg border-b border-hovs-border flex items-center gap-3">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-hovs-warm" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-hovs-emerald" />
          </div>
          <div className="flex-1 px-3 py-1 rounded-full bg-hovs-surface border border-hovs-border text-[10px] font-menutal text-hovs-muted flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-hovs-emerald" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/></svg>
            <span>nexus-cloud.app/dashboard</span>
          </div>
          <span className="text-[10px] font-menutal text-hovs-lime shrink-0">NEXT.JS 15</span>
        </div>

        {/* Sidebar + main layout */}
        <div className="flex bg-hovs-surface">
          {/* Sidebar */}
          <div className="w-12 sm:w-14 bg-hovs-bg border-r border-hovs-border py-4 flex flex-col items-center gap-3">
            {["⬛","◈","◉","◎","⬦"].map((icon, i) => (
              <div key={i} className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] ${i === 0 ? "bg-hovs-lime text-hovs-bg" : "text-hovs-muted hover:text-hovs-cream"}`}>{icon}</div>
            ))}
          </div>

          {/* Dashboard content */}
          <div className="flex-1 p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-nehomi text-xs font-black text-hovs-cream">NEXUS CLOUD — Dashboard</span>
              <span className="px-2 py-0.5 rounded bg-hovs-emerald/15 text-hovs-emerald text-[9px] font-menutal">● Edge Deployed</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Active Teams", val: "84.2K", color: "text-hovs-cream" },
                { label: "Uptime", val: "99.99%", color: "text-hovs-emerald" },
                { label: "Lighthouse", val: "100", color: "text-hovs-lime" },
              ].map(stat => (
                <div key={stat.label} className="p-3 rounded-xl bg-hovs-bg border border-hovs-border">
                  <span className="text-[9px] font-menutal text-hovs-muted block">{stat.label}</span>
                  <span className={`font-nehomi text-base font-black ${stat.color} block mt-0.5`}>{stat.val}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-hovs-bg border border-hovs-border space-y-2">
              <div className="flex justify-between text-[10px] font-menutal text-hovs-muted">
                <span>REAL-TIME WORKSPACES</span>
                <span className="text-hovs-emerald">+185% Growth</span>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[30,45,38,60,52,72,65,88,74,95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{
                    height: `${h}%`,
                    background: i >= 8 ? "var(--lime)" : "rgba(210,255,40,0.25)"
                  }} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-xl bg-hovs-bg border border-hovs-border">
                <span className="text-[9px] font-menutal text-hovs-muted block">Response Time</span>
                <span className="font-nehomi text-sm font-black text-hovs-lime block mt-0.5">&lt; 40ms</span>
              </div>
              <div className="p-3 rounded-xl bg-hovs-bg border border-hovs-border">
                <span className="text-[9px] font-menutal text-hovs-muted block">Core Web Vitals</span>
                <span className="font-nehomi text-sm font-black text-hovs-emerald block mt-0.5">100/100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-[10px] font-menutal text-hovs-muted uppercase tracking-widest">Web SaaS Dashboard</div>
    </div>
  );
}

/* ── FIGMA VIEW ──────────────────────────────────────────────── */
function FigmaView() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Figma toolbar */}
      <div className="rounded-2xl border border-hovs-border overflow-hidden shadow-2xl">
        <div className="px-4 py-2.5 bg-hovs-bg border-b border-hovs-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-nehomi font-black text-hovs-warm text-sm">❖</span>
            <span className="font-nehomi text-xs font-black text-hovs-cream">PRISM UI — Design System</span>
          </div>
          <span className="px-2.5 py-1 rounded bg-hovs-emerald/15 text-hovs-emerald text-[10px] font-menutal">Synced with GitHub ✓</span>
        </div>

        <div className="p-4 bg-hovs-surface grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Typography tokens */}
          <div className="p-4 rounded-xl bg-hovs-bg border border-hovs-border space-y-3">
            <div className="text-[9px] font-menutal text-hovs-muted uppercase tracking-widest">TYPOGRAPHY TOKENS</div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <span className="font-nehomi text-lg font-black text-hovs-cream">Display Heavy</span>
                <span className="text-[9px] font-menutal text-hovs-muted">64pt</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-menutal text-sm font-semibold text-hovs-cream">Body Regular</span>
                <span className="text-[9px] font-menutal text-hovs-muted">16pt</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-menutal text-xs text-hovs-muted">Caption Small</span>
                <span className="text-[9px] font-menutal text-hovs-muted">11pt</span>
              </div>
            </div>
          </div>

          {/* Color tokens */}
          <div className="p-4 rounded-xl bg-hovs-bg border border-hovs-border space-y-3">
            <div className="text-[9px] font-menutal text-hovs-muted uppercase tracking-widest">COLOR TOKENS</div>
            <div className="grid grid-cols-5 gap-1.5">
              {[
                { bg: "bg-hovs-lime",    label: "Lime"    },
                { bg: "bg-hovs-emerald", label: "Emerald" },
                { bg: "bg-hovs-warm",    label: "Warm"    },
                { bg: "bg-hovs-surface", label: "Surface" },
                { bg: "bg-hovs-muted",   label: "Muted"   },
              ].map(c => (
                <div key={c.label} className="space-y-1 text-center">
                  <div className={`${c.bg} h-7 rounded-lg border border-hovs-border/50`} />
                  <span className="text-[8px] font-menutal text-hovs-muted block leading-none">{c.label}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2 rounded-lg bg-hovs-surface border border-hovs-border text-center">
                <span className="font-nehomi text-sm font-black text-hovs-cream block">480+</span>
                <span className="text-[9px] font-menutal text-hovs-muted">Components</span>
              </div>
              <div className="p-2 rounded-lg bg-hovs-surface border border-hovs-border text-center">
                <span className="font-nehomi text-sm font-black text-hovs-warm block">4 Modes</span>
                <span className="text-[9px] font-menutal text-hovs-muted">Variables</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[10px] font-menutal text-hovs-muted uppercase tracking-widest">Figma Token Matrix — PRISM UI</div>
    </div>
  );
}
