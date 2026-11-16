"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

type CursorContextType = {
  setCursorLabel: (label: string) => void;
  resetCursor: () => void;
};

const CursorContext = createContext<CursorContextType>({
  setCursorLabel: () => {},
  resetCursor: () => {},
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const setCursorLabel = useCallback((text: string) => {
    setLabel(text);
    setActive(true);
  }, []);

  const resetCursor = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <CursorContext.Provider value={{ setCursorLabel, resetCursor }}>
      {children}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-hovs-lime pointer-events-none z-[120] hidden lg:block transition-transform duration-75"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-20 h-20 -ml-10 -mt-10 rounded-full border border-hovs-lime/50 bg-hovs-lime/10 backdrop-blur-sm pointer-events-none z-[119] hidden lg:flex items-center justify-center transition-all duration-200 ease-out ${
          active ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <span className="font-nehomi text-[11px] font-extrabold tracking-widest uppercase text-hovs-lime">
          {label}
        </span>
      </div>
    </CursorContext.Provider>
  );
}
