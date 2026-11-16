"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "@/lib/gsap";
import ImageSlot from "@/components/ui/ImageSlot";

const ParticleField = dynamic(() => import("@/components/webgl/ParticleField"), { ssr: false });

const reviews = [
  {
    quote:
      "Rarely do you find someone who can design a world-class brand and Figma system, and then build the entire mobile app and web platform with zero compromise.",
    name: "Marcus Vance",
    role: "Founder & CEO, Vanguard Fintech",
    avatar: "avatar-marcus.jpg",
  },
  {
    quote:
      "Our conversion rate jumped 140% after the redesign. The typography hierarchy and fluid animations feel like an Apple-grade product.",
    name: "Elena Rostova",
    role: "VP of Design, Kinetix AI",
    avatar: "avatar-elena.jpg",
  },
  {
    quote:
      "From our exhibition posters and packaging dielines to our custom Next.js storefront — every pixel is aligned to perfection.",
    name: "Sora Takahashi",
    role: "Creative Director, Botanica Labs",
    avatar: "avatar-sora.jpg",
  },
];

export default function ClientReviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("[data-cr-heading]", { y: 35, opacity: 0 });
      gsap.set("[data-cr-card]", { y: 50, opacity: 0, rotateX: -6 });

      gsap.to("[data-cr-heading]", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.to("[data-cr-card]", {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });

      const cards = gsap.utils.toArray<HTMLElement>("[data-cr-card]");
      cards.forEach((card) => {
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
      id="client-reviews"
      className="editorial-container py-8 overflow-hidden"
    >
      <div className="rounded-3xl bg-hovs-surface border border-hovs-border p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <ParticleField count={40} color="#D2FF28" speed={0.1} className="opacity-20" />
        <div
          data-cr-heading
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-hovs-border pb-6 gap-4"
        >
          <div>
            <span className="text-xs font-menutal uppercase tracking-widest text-hovs-emerald block mb-2">
              // 08 &bull; PARTNER ENDORSEMENTS
            </span>
            <h2 className="font-nehomi section-heading font-black text-hovs-cream">
              Trusted by Founders &amp; Product Leaders.
            </h2>
          </div>
          <span className="font-menutal text-xs sm:text-sm text-hovs-muted">
            100% On-Time Delivery &bull; Design + Code
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              data-cr-card
              className="rounded-2xl bg-hovs-bg border border-hovs-border p-7 flex flex-col justify-between glow-border-hover hover:border-hovs-emerald/40 transition-all duration-300"
            >
              <div>
                <div className="text-hovs-emerald text-sm mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="font-menutal text-sm sm:text-base text-hovs-cream leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-hovs-border flex items-center gap-3">
                {/* ── AVATAR SLOT ──────────────────────────────────
                    Drop client photo into /public/images/{r.avatar}
                    Replace <ImageSlot> with:
                      <Image src={`/images/${r.avatar}`} alt={r.name}
                             width={40} height={40} className="w-10 h-10 rounded-full object-cover shrink-0" />
                ─────────────────────────────────────────────────── */}
                <ImageSlot
                  file={r.avatar}
                  alt={r.name}
                  className="w-10 h-10 rounded-full shrink-0"
                  imgClassName="object-cover w-full h-full"
                />
                <div>
                  <div className="font-nehomi text-base font-bold text-hovs-cream">
                    {r.name}
                  </div>
                  <div className="font-menutal text-xs text-hovs-muted">
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
