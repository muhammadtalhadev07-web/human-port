"use client";

interface RepertoireDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RepertoireDrawer({
  isOpen,
  onClose,
}: RepertoireDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-hovs-bg/98 backdrop-blur-2xl overflow-y-auto flex flex-col justify-between p-6 sm:p-10 lg:p-14 border-b border-hovs-border ${
        isOpen ? "drawer-open" : "drawer-closed"
      }`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-hovs-border pb-6">
        <div className="flex items-center gap-3">
          <span className="text-hovs-lime text-xl">✣</span>
          <span className="font-nehomi font-extrabold text-sm tracking-widest uppercase">
            HOUSE OF FIGMA & GRAPHIC PRAXIS
          </span>
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-full border border-hovs-border hover:border-hovs-lime text-hovs-cream font-menutal text-xs uppercase tracking-widest flex items-center gap-2 transition"
        >
          <span>Close Index</span>
          <span className="text-hovs-lime text-lg leading-none">×</span>
        </button>
      </div>

      {/* 3-Column Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-auto py-6">
        <div className="space-y-3">
          <span className="text-xs font-menutal uppercase tracking-widest text-hovs-muted block">
            01 // Core Capabilities
          </span>
          <a
            href="#services-bento"
            onClick={onClose}
            className="block font-nehomi text-2xl sm:text-4xl font-extrabold hover:text-hovs-emerald transition"
          >
            01 4-Pillar Services{" "}
            <sup className="text-xs font-menutal text-hovs-emerald">NEW</sup>
          </a>
          <a
            href="#app-web-lab"
            onClick={onClose}
            className="block font-nehomi text-2xl sm:text-4xl font-extrabold hover:text-hovs-emerald transition"
          >
            02 Mobile & Web Lab
          </a>
          <a
            href="#work-01"
            onClick={onClose}
            className="block font-nehomi text-2xl sm:text-4xl font-extrabold hover:text-hovs-emerald transition"
          >
            03 Case Studies
          </a>
        </div>
        <div className="space-y-3">
          <span className="text-xs font-menutal uppercase tracking-widest text-hovs-muted block">
            02 // Architecture & Craft
          </span>
          <a
            href="#process-workflow"
            onClick={onClose}
            className="block font-nehomi text-2xl sm:text-4xl font-extrabold hover:text-hovs-emerald transition"
          >
            04 Design-to-Code
          </a>
          <a
            href="#scroll-stack-showcase"
            onClick={onClose}
            className="block font-nehomi text-2xl sm:text-4xl font-extrabold hover:text-hovs-emerald transition"
          >
            05 Project Stack
          </a>
          <a
            href="#experience-praxis"
            onClick={onClose}
            className="block font-nehomi text-2xl sm:text-4xl font-extrabold hover:text-hovs-emerald transition"
          >
            06 Experience & Reviews
          </a>
        </div>
        <div className="bg-hovs-surface border border-hovs-border rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="px-2.5 py-1 rounded bg-hovs-emerald/15 text-hovs-emerald text-xs font-menutal">
              Full-Stack Creative Studio
            </span>
            <h4 className="font-nehomi text-xl font-bold mt-4 text-hovs-cream">
              Figma • Graphic • Web • Mobile
            </h4>
            <p className="font-menutal text-sm text-hovs-muted mt-2 leading-relaxed">
              Set in monumental display headings and refined body
              typography—bridging design systems, brand identity, and
              full-stack web & mobile apps.
            </p>
          </div>
          <a
            href="#footer-house"
            onClick={onClose}
            className="mt-6 inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-hovs-lime text-hovs-bg font-nehomi font-extrabold text-xs uppercase tracking-wider"
          >
            <span>Commission New Project</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-wrap items-center justify-between text-xs font-menutal text-hovs-muted border-t border-hovs-border pt-4 gap-4">
        <span>EST. 2020 — FIGMA UI/UX • GRAPHIC DESIGN • WEB & MOBILE APPS</span>
        <span>DISPLAY & BODY TYPOGRAPHY SYSTEM</span>
      </div>
    </div>
  );
}
