"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";

const socialLinks = [
  { label: "Behance", abbr: "Be", href: "#" },
  { label: "Dribbble", abbr: "Dr", href: "#" },
  { label: "LinkedIn", abbr: "Li", href: "#" },
  { label: "GitHub", abbr: "Gh", href: "#" },
];

const navLinks = [
  { label: "Services", href: "#services-bento" },
  { label: "Lab", href: "#app-web-lab" },
  { label: "Projects", href: "#work-01" },
  { label: "Experience", href: "#experience-praxis" },
  { label: "Process", href: "#process-workflow" },
  { label: "Reviews", href: "#client-reviews" },
];

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const mouseXRef = useRef(0.5);
  const [copied, setCopied] = useState(false);
  const [year, setYear] = useState(2024);

  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let tick = 0;
    let animId: number;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      w = canvas!.width = rect.width;
      h = canvas!.height = rect.height;
    }

    function draw() {
      tick += 0.012;
      ctx!.clearRect(0, 0, w, h);

      const isLight = document.documentElement.classList.contains("light-mode");
      const horizonY = h * 0.22;
      const vanishX = w * (0.5 + (mouseXRef.current - 0.5) * 0.18);

      const coreRadius = 55 + Math.sin(tick * 2.5) * 18;
      const coreGrad = ctx!.createRadialGradient(vanishX, horizonY, 2, vanishX, horizonY, coreRadius);
      if (isLight) {
        coreGrad.addColorStop(0, "rgba(0, 158, 102, 0.5)");
        coreGrad.addColorStop(0.5, "rgba(0, 158, 102, 0.15)");
        coreGrad.addColorStop(1, "rgba(0, 158, 102, 0)");
      } else {
        coreGrad.addColorStop(0, "rgba(210, 255, 40, 0.7)");
        coreGrad.addColorStop(0.4, "rgba(0, 229, 153, 0.35)");
        coreGrad.addColorStop(1, "rgba(6, 8, 7, 0)");
      }
      ctx!.fillStyle = coreGrad;
      ctx!.fillRect(0, 0, w, h);

      const numLines = 24;
      for (let i = -numLines; i <= numLines; i++) {
        const bottomX = vanishX + (i / numLines) * (w * 1.6);
        ctx!.beginPath();
        ctx!.moveTo(vanishX, horizonY);
        ctx!.lineTo(bottomX, h);
        ctx!.strokeStyle = isLight ? "rgba(0, 158, 102, 0.1)" : "rgba(0, 229, 153, 0.12)";
        ctx!.lineWidth = i === 0 ? 1.5 : 0.8;
        ctx!.stroke();
      }

      const planes = 10;
      for (let p = 0; p < planes; p++) {
        const norm = (p + ((tick * 1.2) % 1)) / planes;
        const py = horizonY + Math.pow(norm, 2.2) * (h - horizonY);
        const alpha = norm * (isLight ? 0.22 : 0.3);
        ctx!.beginPath();
        ctx!.moveTo(0, py);
        ctx!.lineTo(w, py);
        ctx!.strokeStyle = isLight ? `rgba(17, 26, 21, ${alpha})` : `rgba(210, 255, 40, ${alpha})`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const handler = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      mouseXRef.current = (e.clientX - rect.left) / Math.max(1, rect.width);
    };
    footer.addEventListener("mousemove", handler);
    return () => footer.removeEventListener("mousemove", handler);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-footer-label]", { y: 16, opacity: 0 });
      gsap.set("[data-footer-heading]", { y: 40, opacity: 0 });
      gsap.set("[data-footer-desc]", { y: 20, opacity: 0 });
      gsap.set("[data-footer-cta]", { y: 20, opacity: 0, scale: 0.96 });
      gsap.set("[data-footer-email]", { y: 14, opacity: 0 });
      gsap.set("[data-footer-link]", { y: 12, opacity: 0 });
      gsap.set("[data-footer-social]", { y: 10, opacity: 0, scale: 0.9 });
      gsap.set("[data-footer-bottom]", { opacity: 0 });

      const trigger = footerRef.current;
      gsap.to("[data-footer-label]", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger, start: "top 88%" } });
      gsap.to("[data-footer-heading]", { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger, start: "top 85%" } });
      gsap.to("[data-footer-desc]", { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger, start: "top 80%" } });
      gsap.to("[data-footer-cta]", { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)", scrollTrigger: { trigger, start: "top 75%" } });
      gsap.to("[data-footer-email]", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger, start: "top 70%" } });
      gsap.to("[data-footer-link]", { y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger, start: "top 62%" } });
      gsap.to("[data-footer-social]", { y: 0, opacity: 1, scale: 1, stagger: 0.06, duration: 0.5, ease: "back.out(1.6)", scrollTrigger: { trigger, start: "top 55%" } });
      gsap.to("[data-footer-bottom]", { opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger, start: "top 45%" } });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("studio@houseofdesign.fig").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, []);

  return (
    <footer id="footer-house" ref={footerRef} className="relative pt-24 sm:pt-32 pb-16 border-t border-hovs-border overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="editorial-container relative z-10">
        {/* CTA section */}
        <div className="max-w-4xl mx-auto text-center pb-14 sm:pb-20">
          <span data-footer-label className="inline-flex items-center gap-3 text-[11px] font-menutal uppercase tracking-[0.22em] text-hovs-emerald mb-6">
            <span className="w-8 h-px bg-hovs-emerald" />
            Let&apos;s collaborate
            <span className="w-8 h-px bg-hovs-emerald" />
          </span>

          <h2 data-footer-heading className="font-nehomi hero-display font-bold text-hovs-cream leading-none">
            Ready to build<br />
            <span className="text-shimmer">something great?</span>
          </h2>

          <p data-footer-desc className="font-menutal text-sm sm:text-base text-hovs-muted leading-relaxed mt-6 max-w-lg mx-auto">
            From design systems to production apps &mdash; let&apos;s turn your vision into a polished, high-performance product.
          </p>

          <div data-footer-cta className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              onClick={copyEmail}
              className="theme-pill-lime group px-8 py-4 rounded-full bg-hovs-lime text-hovs-bg font-nehomi font-bold text-sm uppercase tracking-wider hover:scale-[1.03] active:scale-[0.97] transition-transform duration-300 shadow-[0_0_60px_rgba(0,229,153,0.12)] flex items-center gap-3"
            >
              <span>{copied ? "Copied!" : "Copy Email"}</span>
              <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
            <a
              href="mailto:studio@houseofdesign.fig"
              className="group px-8 py-4 rounded-full bg-hovs-surface/70 border border-hovs-border/60 hover:border-hovs-emerald/60 text-hovs-cream font-menutal text-sm transition-all duration-300 backdrop-blur-xl flex items-center gap-3"
            >
              <span>Send a Message</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <div data-footer-email className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-hovs-surface/50 border border-hovs-border/40 backdrop-blur-xl">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hovs-emerald opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-hovs-emerald" />
            </span>
            <span className="font-menutal text-xs text-hovs-muted tracking-wider">studio@houseofdesign.fig</span>
          </div>
        </div>

        {/* Navigation + Social row */}
        <div className="border-t border-hovs-border/40 pt-10 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a key={link.label} data-footer-link href={link.href} className="text-xs font-menutal text-hovs-muted hover:text-hovs-emerald transition-colors uppercase tracking-widest">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                data-footer-social
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-xl bg-hovs-surface border border-hovs-border/60 hover:border-hovs-emerald/60 flex items-center justify-center font-nehomi font-black text-xs text-hovs-muted hover:text-hovs-emerald transition-all duration-300"
              >
                {s.abbr}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          data-footer-bottom
          className="pt-6 border-t border-hovs-border/30 flex flex-wrap items-center justify-between gap-4 text-[10px] font-menutal text-hovs-muted/50 uppercase tracking-[0.2em]"
        >
          <span className="text-hovs-cream/70 font-semibold tracking-wider">&#10019; HOUSE OF DESIGN</span>
          <span className="text-hovs-muted/40">Figma &bull; Graphics &bull; Mobile &bull; Web</span>
          <span>&copy; {year} All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
