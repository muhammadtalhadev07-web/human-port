"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const ParticleField = dynamic(() => import("@/components/webgl/ParticleField"), { ssr: false });

export default function ExperiencePraxis() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const glowLineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    const glowLine = glowLineRef.current;
    if (!section || !timeline || !glowLine) return;

    const ctx = gsap.context(() => {
      gsap.to(glowLine, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 0.5,
        },
      });

      gsap.utils
        .toArray<HTMLElement>(section.querySelectorAll(".mastery-fill"))
        .forEach((bar) => {
          const target = bar.dataset.width || "0%";
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: target,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                once: true,
              },
            }
          );
        });

      gsap.set("[data-exp-header]", { y: 35, opacity: 0 });
      gsap.set("[data-exp-mastery]", { x: -40, opacity: 0 });
      gsap.set("[data-exp-role]", { x: 40, opacity: 0 });
      gsap.set("[data-exp-stat]", { y: 25, opacity: 0 });

      gsap.to("[data-exp-header]", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-exp-header]",
          start: "top 85%",
        },
      });

      gsap.to("[data-exp-mastery]", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-exp-mastery]",
          start: "top 85%",
        },
      });

      gsap.to("[data-exp-role]", {
        x: 0,
        opacity: 1,
        stagger: 0.18,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 85%",
        },
      });

      gsap.to("[data-exp-stat]", {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-exp-stat]",
          start: "top 88%",
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-exp-counter]").forEach((el) => {
        const target = parseInt(el.dataset.target || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => { el.textContent = Math.round(obj.val) + (el.dataset.suffix || ""); },
        });
      });

      const roles = gsap.utils.toArray<HTMLElement>("[data-exp-role]");
      roles.forEach((role) => {
        gsap.to(role, {
          y: -6,
          ease: "none",
          scrollTrigger: {
            trigger: role,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience-praxis"
      ref={sectionRef}
      className="editorial-container py-12 overflow-hidden"
    >
      <div className="rounded-3xl bg-hovs-surface border border-hovs-border p-7 sm:p-12 lg:p-16 relative overflow-hidden">
        <ParticleField count={50} color="#00E599" speed={0.15} className="opacity-30" />
        <div
          data-exp-header
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-hovs-border pb-6 gap-4"
        >
          <div>
            <span className="text-xs font-menutal uppercase tracking-widest text-hovs-emerald block mb-2">
              // 05 &bull; EXPERIENCE &amp; TECHNICAL MASTERY
            </span>
            <h2 className="font-nehomi section-heading font-black text-hovs-cream">
              6+ Years of Design &amp; Engineering Leadership.
            </h2>
          </div>
          <span className="font-menutal text-xs sm:text-sm text-hovs-muted">
            Figma UI/UX &bull; Graphic Design &bull; Mobile Apps &bull; Web Dev
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Mastery Bars */}
          <div data-exp-mastery className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-hovs-bg border border-hovs-border space-y-5">
              <h3 className="font-nehomi text-xl font-extrabold text-hovs-cream">
                Core Discipline Mastery
              </h3>

              {[
                {
                  label: "Figma UI/UX & Design Systems",
                  value: 99,
                  gradient: "from-hovs-lime to-hovs-emerald",
                },
                {
                  label: "Graphic Design, Branding & Print",
                  value: 97,
                  gradient: "from-hovs-warm to-hovs-lime",
                },
                {
                  label: "Full-Stack Web Dev (Next.js / React)",
                  value: 96,
                  gradient: "from-hovs-emerald to-hovs-lime",
                },
                {
                  label: "Mobile App Dev (React Native / Flutter)",
                  value: 95,
                  gradient: "from-hovs-lime to-hovs-warm",
                },
              ].map((bar) => (
                <div key={bar.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-menutal">
                    <span className="text-hovs-cream font-medium">
                      {bar.label}
                    </span>
                    <span className="text-hovs-emerald font-bold">
                      {bar.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-hovs-surface overflow-hidden">
                    <div
                      className={`mastery-fill h-full bg-gradient-to-r ${bar.gradient} rounded-full`}
                      data-width={`${bar.value}%`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                data-exp-stat
                className="p-5 rounded-2xl bg-hovs-bg border border-hovs-border"
              >
                <span data-exp-counter data-target="85" data-suffix="+" className="font-nehomi text-3xl sm:text-4xl font-black text-hovs-emerald block">
                  0+
                </span>
                <span className="font-menutal text-xs text-hovs-muted mt-1 block">
                  Shipped Products &amp; Brands
                </span>
              </div>
              <div
                data-exp-stat
                className="p-5 rounded-2xl bg-hovs-bg border border-hovs-border"
              >
                <span data-exp-counter data-target="14" data-suffix="" className="font-nehomi text-3xl sm:text-4xl font-black text-hovs-cream block">
                  0
                </span>
                <span className="font-menutal text-xs text-hovs-muted mt-1 block">
                  International Design Awards
                </span>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div
            ref={timelineRef}
            className="lg:col-span-7 relative pl-8 sm:pl-10 space-y-8"
          >
            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-hovs-border">
              <div
                ref={glowLineRef}
                className="w-full bg-gradient-to-b from-hovs-lime via-hovs-emerald to-hovs-warm"
                style={{ height: "15%" }}
              />
            </div>

            <div
              data-exp-role
              className="relative rounded-2xl bg-hovs-bg border border-hovs-border hover:border-hovs-emerald p-6 sm:p-7 transition"
            >
              <span className="absolute -left-[35px] sm:-left-[43px] top-7 w-4 h-4 rounded-full bg-hovs-emerald border-4 border-hovs-surface shadow-[0_0_15px_#00E599]" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-menutal text-hovs-emerald mb-2">
                <span>2023 &mdash; PRESENT</span>
                <span className="px-2.5 py-0.5 rounded-full bg-hovs-emerald/15">
                  PRINCIPAL &amp; FOUNDER
                </span>
              </div>
              <h4 className="font-nehomi text-xl sm:text-2xl font-extrabold text-hovs-cream">
                House of Design &mdash; Principal UI/UX, Graphic &amp;
                Full-Stack Director
              </h4>
              <p className="font-menutal text-sm text-hovs-muted mt-2 leading-relaxed">
                Leading end-to-end product architecture across Figma design
                systems, brand identity, React Native mobile apps, and Next.js
                web platforms for global clients.
              </p>
            </div>

            <div
              data-exp-role
              className="relative rounded-2xl bg-hovs-bg border border-hovs-border hover:border-hovs-emerald p-6 sm:p-7 transition"
            >
              <span className="absolute -left-[35px] sm:-left-[43px] top-7 w-4 h-4 rounded-full bg-hovs-lime border-4 border-hovs-surface" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-menutal text-hovs-muted mb-2">
                <span>2021 &mdash; 2023</span>
                <span className="text-hovs-cream">
                  SENIOR PRODUCT &amp; BRAND DESIGNER
                </span>
              </div>
              <h4 className="font-nehomi text-xl sm:text-2xl font-extrabold text-hovs-cream">
                Kinetix &amp; Vanguard Studio &mdash; Lead Figma Systems &amp;
                Frontend Architect
              </h4>
              <p className="font-menutal text-sm text-hovs-muted mt-2 leading-relaxed">
                Architected multi-brand Figma token libraries and developed
                interactive web and mobile interfaces serving over 420,000
                active creatives.
              </p>
            </div>

            <div
              data-exp-role
              className="relative rounded-2xl bg-hovs-bg border border-hovs-border hover:border-hovs-warm p-6 sm:p-7 transition"
            >
              <span className="absolute -left-[35px] sm:-left-[43px] top-7 w-4 h-4 rounded-full bg-hovs-warm border-4 border-hovs-surface" />
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-menutal text-hovs-muted mb-2">
                <span>2019 &mdash; 2021</span>
                <span className="text-hovs-warm">
                  GRAPHIC &amp; VISUAL DESIGNER
                </span>
              </div>
              <h4 className="font-nehomi text-xl sm:text-2xl font-extrabold text-hovs-cream">
                Monolith Press &mdash; Brand Identity, Typography &amp;
                Exhibition Systems
              </h4>
              <p className="font-menutal text-sm text-hovs-muted mt-2 leading-relaxed">
                Created bespoke logomarks, Swiss editorial posters, custom
                packaging dielines, and digital art direction for cultural and
                technology brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
