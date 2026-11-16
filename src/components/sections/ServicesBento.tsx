"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const pillars = [
  {
    num: "01",
    tag: "Auto-Layout 5.0",
    title: "Figma UI/UX Design",
    accent: "emerald",
    desc: "Scalable multi-brand design systems, variable token architectures, interactive wireframes, and high-fidelity prototypes.",
    items: [
      "Design Systems & Tokens",
      "Interactive Smart Prototypes",
      "UX Research & Wireframing",
    ],
    hoverBorder: "hover:border-hovs-emerald",
  },
  {
    num: "02",
    tag: "Vector & Print",
    title: "Graphic & Brand Identity",
    accent: "warm",
    desc: "Bespoke vector logomarks, Swiss editorial posters, tactile packaging dielines, and unmistakable brand guidelines.",
    items: [
      "Logo & Visual Identity",
      "Editorial Posters & Key Art",
      "Packaging & Print Systems",
    ],
    hoverBorder: "hover:border-hovs-warm",
  },
  {
    num: "03",
    tag: "iOS & Android",
    title: "Mobile App Development",
    accent: "emerald",
    desc: "Fluid 60fps cross-platform and native mobile applications engineered with React Native, Flutter, and smooth gesture physics.",
    items: [
      "React Native & Flutter Apps",
      "Micro-Animations & Haptics",
      "App Store & Play Store Launch",
    ],
    hoverBorder: "hover:border-hovs-emerald",
  },
  {
    num: "04",
    tag: "Full-Stack Web",
    title: "Modern Web Development",
    accent: "emerald",
    desc: "High-converting SaaS web apps, interactive WebGL/Canvas portfolios, and blazing-fast Next.js & Tailwind architectures.",
    items: [
      "React, Next.js & TypeScript",
      "Interactive Motion & GSAP",
      "Responsive SEO Architecture",
    ],
    hoverBorder: "hover:border-hovs-emerald",
  },
];

export default function ServicesBento() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-svc-header]", { y: 40, opacity: 0 });
      gsap.set("[data-svc-card]", { y: 60, opacity: 0, rotateX: -8 });
      gsap.set("[data-svc-num]", { scale: 0, rotation: -20 });
      gsap.set("[data-svc-item]", { x: -15, opacity: 0 });

      gsap.to("[data-svc-header]", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-svc-header]", start: "top 85%" },
      });

      gsap.to("[data-svc-card]", {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-svc-grid]", start: "top 82%" },
      });

      gsap.to("[data-svc-num]", {
        scale: 1,
        rotation: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: { trigger: "[data-svc-grid]", start: "top 78%" },
      });

      gsap.to("[data-svc-item]", {
        x: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-svc-grid]", start: "top 70%" },
      });

      const cards = gsap.utils.toArray<HTMLElement>("[data-svc-card]");
      cards.forEach((card, i) => {
        gsap.to(card, {
          y: -8,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });

        gsap.to(card, {
          y: "random(-5, 5)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const dotColor = (accent: string) =>
    accent === "warm" ? "text-hovs-warm" : "text-hovs-emerald";
  const numBg = (accent: string) =>
    accent === "warm"
      ? "bg-hovs-warm/15 text-hovs-warm"
      : "bg-hovs-emerald/15 text-hovs-emerald";
  const titleHover = (accent: string) =>
    accent === "warm"
      ? "group-hover:text-hovs-warm"
      : "group-hover:text-hovs-emerald";

  return (
    <section
      ref={sectionRef}
      id="services-bento"
      className="editorial-container pt-24 pb-12 overflow-hidden"
    >
      <div
        data-svc-header
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-hovs-border pb-6 gap-4"
      >
        <div>
          <span className="text-xs font-menutal uppercase tracking-widest text-hovs-emerald block mb-2">
            // 01 &bull; END-TO-END DIGITAL ARCHITECTURE
          </span>
          <h2 className="font-nehomi section-heading font-black text-hovs-cream">
            Four Disciplines. One Unified Vision.
          </h2>
        </div>
        <p className="font-menutal text-xs sm:text-sm text-hovs-muted max-w-sm">
          Everything designed in Figma &amp; Illustrator and engineered into
          production-ready Mobile and Web applications.
        </p>
      </div>

      <div
        data-svc-grid
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {pillars.map((p) => (
          <div
            key={p.num}
            data-svc-card
            className={`group rounded-3xl bg-hovs-surface border border-hovs-border ${p.hoverBorder} p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 glow-border-hover`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span
                  data-svc-num
                  className={`w-11 h-11 rounded-2xl ${numBg(p.accent)} flex items-center justify-center font-nehomi font-black text-sm`}
                >
                  {p.num}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-hovs-bg border border-hovs-border text-[11px] font-menutal text-hovs-muted">
                  {p.tag}
                </span>
              </div>
              <h3
                className={`font-nehomi text-2xl font-extrabold text-hovs-cream ${titleHover(p.accent)} transition`}
              >
                {p.title}
              </h3>
              <p className="font-menutal text-sm text-hovs-muted mt-3 leading-relaxed">
                {p.desc}
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-hovs-border space-y-2 text-xs font-menutal text-hovs-cream">
              {p.items.map((item) => (
                <div key={item} data-svc-item className="flex items-center gap-2">
                  <span className={dotColor(p.accent)}>&#9679;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
