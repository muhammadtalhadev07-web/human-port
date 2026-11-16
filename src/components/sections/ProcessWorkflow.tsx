"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const steps = [
  {
    num: "STEP 01",
    label: "STRATEGY & BRAND",
    title: "Discovery & Visual Direction",
    desc: "Defining brand positioning, Swiss grid architecture, custom typography pairing, and user journeys.",
    deliverable: "Moodboard & Identity",
    deliverableColor: "text-hovs-emerald",
    accentColor: "text-hovs-emerald",
  },
  {
    num: "STEP 02",
    label: "FIGMA SYSTEMS",
    title: "Figma UI/UX & Prototyping",
    desc: "Crafting responsive Auto-Layout 5.0 components, Dark/Light variables, and interactive prototypes.",
    deliverable: "Figma Master File",
    deliverableColor: "text-hovs-emerald",
    accentColor: "text-hovs-emerald",
  },
  {
    num: "STEP 03",
    label: "APP & WEB CODE",
    title: "Full-Stack Development",
    desc: "Translating designs into clean React, Next.js, and React Native/Flutter code with silky 60fps animations.",
    deliverable: "Production Repo",
    deliverableColor: "text-hovs-warm",
    accentColor: "text-hovs-warm",
  },
  {
    num: "STEP 04",
    label: "LAUNCH & SCALE",
    title: "QA, Polish & Global Launch",
    desc: "Performance optimization, App Store & Play Store deployment, and continuous design system scaling.",
    deliverable: "Live Product ↗",
    deliverableColor: "text-hovs-emerald",
    accentColor: "text-hovs-emerald",
  },
];

export default function ProcessWorkflow() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-pw-header]", { y: 40, opacity: 0 });
      gsap.set("[data-pw-card]", { y: 55, opacity: 0, rotateX: -6 });
      gsap.set("[data-pw-line]", { scaleX: 0 });

      gsap.to("[data-pw-header]", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-pw-header]", start: "top 85%" },
      });

      gsap.to("[data-pw-card]", {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-pw-grid]", start: "top 82%" },
      });

      gsap.to("[data-pw-line]", {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: { trigger: "[data-pw-grid]", start: "top 78%" },
      });

      gsap.set("[data-pw-num]", { scale: 0, rotation: -30 });
      gsap.to("[data-pw-num]", {
        scale: 1,
        rotation: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: { trigger: "[data-pw-grid]", start: "top 76%" },
      });

      gsap.set("[data-pw-deliverable]", { x: 20, opacity: 0 });
      gsap.to("[data-pw-deliverable]", {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-pw-grid]", start: "top 68%" },
      });

      const pwCards = gsap.utils.toArray<HTMLElement>("[data-pw-card]");
      pwCards.forEach((card) => {
        gsap.to(card, {
          y: -6,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process-workflow"
      className="editorial-container py-8 overflow-hidden"
    >
      <div
        data-pw-header
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-hovs-border pb-6 gap-4"
      >
        <div>
          <span className="text-xs font-menutal uppercase tracking-widest text-hovs-emerald block mb-2">
            // 07 • HOW WE WORK
          </span>
          <h2 className="font-nehomi section-heading font-black text-hovs-cream">
            From Sketch &amp; Figma to Live App.
          </h2>
        </div>
        <span className="font-menutal text-xs sm:text-sm text-hovs-muted">
          Zero handoff friction — one seamless creative &amp; technical pipeline.
        </span>
      </div>

      <div
        data-pw-line
        className="hidden lg:block h-px mb-8 origin-left"
        style={{
          background: "linear-gradient(90deg, var(--emerald), var(--lime), var(--emerald))",
        }}
      />
      <div
        data-pw-grid
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {steps.map((step) => (
          <div
            key={step.num}
            data-pw-card
            className="rounded-3xl bg-hovs-surface border border-hovs-border p-7 relative flex flex-col justify-between glow-border-hover hover:border-hovs-emerald/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div
                className={`flex items-center justify-between text-xs font-menutal ${step.accentColor} mb-6`}
              >
                <span data-pw-num>{step.num}</span>
                <span>{step.label}</span>
              </div>
              <h3 className="font-nehomi text-xl font-extrabold text-hovs-cream">
                {step.title}
              </h3>
              <p className="font-menutal text-sm text-hovs-muted mt-3 leading-relaxed">
                {step.desc}
              </p>
            </div>
            <div data-pw-deliverable className="mt-6 pt-4 border-t border-hovs-border text-xs font-menutal text-hovs-cream flex justify-between">
              <span>Deliverable</span>
              <span className={step.deliverableColor}>{step.deliverable}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
