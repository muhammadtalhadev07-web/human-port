"use client";

interface ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectIndex: number;
}

export default function ReaderModal({
  isOpen,
  onClose,
  projectIndex,
}: ReaderModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] bg-hovs-bg/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
      <div className="bg-hovs-surface border border-hovs-border rounded-3xl max-w-3xl w-full p-8 sm:p-12 relative shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="sticky top-2 float-right px-3.5 py-1.5 rounded-full bg-hovs-bg border border-hovs-border text-xs font-menutal text-hovs-cream hover:border-hovs-lime"
        >
          Close ×
        </button>
        <div>
          <span className="text-xs font-menutal text-hovs-emerald uppercase tracking-widest">
            CASE STUDY SPECIFICATION // 0{projectIndex + 1}
          </span>
          <h2 className="font-nehomi text-3xl sm:text-5xl font-black text-hovs-cream mt-3 mb-6">
            Complete Figma & Brand Architecture
          </h2>
          <p className="font-menutal text-base text-hovs-muted leading-relaxed mb-6">
            Engineered from the ground up with multi-brand Figma variable tokens,
            custom vector logomarks, and responsive Auto-Layout 5.0 components.
            All display headings utilize a bold geometric typeface while all
            technical telemetry and descriptions use a refined sans-serif
            body face.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs font-menutal">
            <div className="p-4 rounded-xl bg-hovs-bg border border-hovs-border text-hovs-lime">
              ✓ 320+ Figma Component Variants
            </div>
            <div className="p-4 rounded-xl bg-hovs-bg border border-hovs-border text-hovs-emerald">
              ✓ Golden-Ratio Vector Brand Grid
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
