"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import ImageSlot from "@/components/ui/ImageSlot";

const artifacts = [
  { file: "artifact-01.jpg", label: "Artifact 01 • Vector Badge", labelColor: "text-hovs-lime", desc: "Commemorative anniversary emblem designed on a radial grid." },
  { file: "artifact-02.jpg", label: "Artifact 02 • Custom Concept", labelColor: "text-hovs-emerald", desc: "Bespoke industrial footwear tag & technical blueprint packaging." },
  { file: "artifact-03.jpg", label: "Artifact 03 • Book Cover", labelColor: "text-hovs-warm", desc: "Exploratory architectural monograph cover with bold display typography." },
  { file: "artifact-04.jpg", label: "Artifact 04 • Figma Prototype", labelColor: "text-hovs-lime", desc: "Minimalist sound-wave meditation app interface & haptics." },
  { file: "artifact-05.jpg", label: "Artifact 05 • Print Identity", labelColor: "text-hovs-emerald", desc: "Matte-black cotton business cards with acid-lime edge painting." },
];

function ArtifactCard({ file, label, labelColor, desc }: (typeof artifacts)[number]) {
  return (
    <div className="w-72 shrink-0 rounded-2xl bg-hovs-bg border border-hovs-border p-5 flex flex-col justify-between hover:border-hovs-emerald/50 transition-colors duration-300 group">
      {/* ── IMAGE SLOT ─────────────────────────────────────────
          Drop your design work image into /public/images/{file}
          Then replace <ImageSlot> with:
            <Image src={`/images/${file}`} alt={label}
                   width={280} height={160} className="h-40 w-full object-cover rounded-xl" />
      ──────────────────────────────────────────────────────── */}
      <ImageSlot
        file={file}
        alt={label}
        className="h-40 rounded-xl"
        imgClassName="object-cover w-full h-full"
      />
      <div className="mt-4">
        <span className={`text-[11px] font-menutal ${labelColor} uppercase`}>{label}</span>
        <p className="font-menutal text-xs text-hovs-muted mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ArtifactsArchive() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-artifacts-label]", { y: 18, opacity: 0 });
      gsap.set("[data-artifacts-heading]", { y: 28, opacity: 0 });
      gsap.set("[data-artifacts-meta]", { opacity: 0 });
      gsap.set("[data-artifacts-stream]", { x: 50, opacity: 0 });

      gsap.to("[data-artifacts-label]", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

      gsap.to("[data-artifacts-heading]", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.to("[data-artifacts-meta]", {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.to("[data-artifacts-stream]", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="artifacts-vault"
      className="py-14 border-y border-hovs-border bg-hovs-surface/40 overflow-hidden"
    >
      <div className="editorial-container mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span
            data-artifacts-label
            className="text-xs font-menutal uppercase tracking-widest text-hovs-lime block mb-1"
          >
            // 06 • CURATED ARTIFACTS ARCHIVE
          </span>
          <h3
            data-artifacts-heading
            className="font-nehomi text-2xl sm:text-3xl font-extrabold text-hovs-cream"
          >
            Playground, Badges, Packaging &amp; Visual Experiments
          </h3>
        </div>
        <span
          data-artifacts-meta
          className="text-xs font-menutal text-hovs-muted"
        >
          Hover to pause stream • 100% Vector &amp; Figma Craft
        </span>
      </div>

      <div data-artifacts-stream className="animate-ticker-reverse flex gap-6 px-4">
        {artifacts.map((a) => (
          <ArtifactCard key={a.file} {...a} />
        ))}
        {artifacts.map((a) => (
          <ArtifactCard key={`dup-${a.file}`} {...a} />
        ))}
      </div>
    </section>
  );
}
