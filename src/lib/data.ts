// ── Lab Switcher Data ──
export const labData = {
  mobile: {
    badge: "REACT NATIVE & FLUTTER • IOS & ANDROID",
    title: "NOVA WALLET — Mobile Banking & Crypto Super-App",
    desc: "Designed from scratch in Figma and developed for iOS and Android with smooth biometric authentication, real-time portfolio charts, and tactile haptic feedback.",
    s1Val: "60 FPS",
    s1Lbl: "Native Gesture Engine",
    s2Val: "4.9 ★",
    s2Lbl: "App Store Rating",
  },
  web: {
    badge: "NEXT.JS 15 • TYPESCRIPT • TAILWIND • MOTION",
    title: "NEXUS CLOUD — High-Velocity Web SaaS Platform",
    desc: "Full-stack web application engineered with Next.js, interactive data visualizations, instant keyboard command palettes, and 100/100 Lighthouse performance.",
    s1Val: "100/100",
    s1Lbl: "Core Web Vitals",
    s2Val: "< 40ms",
    s2Lbl: "Edge Response Time",
  },
  figma: {
    badge: "FIGMA AUTO-LAYOUT 5.0 • MULTI-BRAND TOKENS",
    title: "PRISM UI — 480+ Component Design System",
    desc: "Unified Figma architecture bridging Graphic Design and Engineering with automated Dark/Light mode variables and custom typography tokens.",
    s1Val: "480+",
    s1Lbl: "Figma Components",
    s2Val: "100%",
    s2Lbl: "Code Token Sync",
  },
} as const;

export type LabMode = keyof typeof labData;

// ── Client Reviews ──
export const reviews = [
  {
    quote:
      "Rarely do you find someone who can design a world-class brand and Figma system, then build the entire mobile app and web platform with zero compromise.",
    name: "Marcus Vance",
    role: "Founder & CEO, Vanguard Fintech",
  },
  {
    quote:
      "Our conversion rate jumped 140% after the redesign. The typography hierarchy and fluid animations feel like an Apple-grade product.",
    name: "Elena Rostova",
    role: "VP of Design, Kinetix AI",
  },
  {
    quote:
      "From our exhibition posters and packaging dielines to our custom Next.js storefront — every pixel is aligned to perfection.",
    name: "Sora Takahashi",
    role: "Creative Director, Botanica Labs",
  },
] as const;

// ── Horizontal Slider Projects ──

export interface ProjectSlide {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export interface ProjectData {
  id: string;
  number: string;
  total: string;
  accentColor: "lime" | "emerald" | "warm";
  category: string;
  slides: {
    label: string;
    sublabel: string;
  }[];
  caption: {
    tag: string;
    title: string;
    description: string;
  };
  thumbs: {
    title: string;
    titleColor: string;
    description: string;
  }[];
}

export const projects: ProjectData[] = [
  {
    id: "slider-1",
    number: "01",
    total: "03",
    accentColor: "lime",
    category: "FIGMA DESIGN SYSTEM & MISSION BRANDING",
    slides: [
      {
        label: "01 // ORBIT TELEMETRY",
        sublabel: "01",
      },
      {
        label: "02 // FIGMA TOKENS",
        sublabel: "02",
      },
      {
        label: "03 // FLIGHT PATCHES",
        sublabel: "03",
      },
    ],
    caption: {
      tag: "Brand Identity, Figma UI/UX System",
      title:
        "AETHER — Branding & Interface Architecture for Orbital Telemetry",
      description:
        "We were commissioned to craft both the iconic mission symbol and the multi-screen Figma control room interface. The logomark reflects elliptical orbital dips, while the interface uses strict typographic hierarchy for zero-latency legibility.",
    },
    thumbs: [
      {
        title: "[ AETHER // 01 ]",
        titleColor: "text-hovs-lime",
        description: "The mission type identifier on the launch fuselage.",
      },
      {
        title: "❖ 99.8% FPS",
        titleColor: "text-hovs-emerald",
        description: "Figma Smart-Animate telemetry widgets.",
      },
    ],
  },
  {
    id: "slider-2",
    number: "02",
    total: "03",
    accentColor: "emerald",
    category: "PRODUCT DESIGN, BRAND IDENTITY & PACKAGING",
    slides: [
      {
        label: "01 // VISUAL ENGINE",
        sublabel: "01",
      },
      {
        label: "02 // MASCOT VECTOR",
        sublabel: "02",
      },
      {
        label: "03 // MOBILE PROTOTYPE",
        sublabel: "03",
      },
    ],
    caption: {
      tag: "Brand Identity, Figma Product Design",
      title:
        "KINETIX — Building a Peaceful Oasis Within the Chaos of the Internet",
      description:
        "Kinetix is a private visual bookmarking engine for designers and researchers. I led the complete product design in Figma, the custom mascot illustration, and the editorial typography pairing — bold display for expressive cards and a refined sans-serif for frictionless reading.",
    },
    thumbs: [
      {
        title: "A Better Place.",
        titleColor: "text-hovs-emerald",
        description: "Editorial campaign slogan & print postcard series.",
      },
      {
        title: "The Mind Guy™",
        titleColor: "text-hovs-lime",
        description: "Our beloved vector mascot & enamel pin.",
      },
    ],
  },
  {
    id: "slider-3",
    number: "03",
    total: "03",
    accentColor: "warm",
    category: "GRAPHIC POSTER DESIGN, BRANDING & WEB EXPERIENCE",
    slides: [
      {
        label: "01 // SWISS POSTERS",
        sublabel: "01",
      },
      {
        label: "02 // PACKAGING SYSTEM",
        sublabel: "02",
      },
      {
        label: "03 // AR MOBILE & WEB",
        sublabel: "03",
      },
    ],
    caption: {
      tag: "Graphic Design, Brand Identity & Web Storefront",
      title:
        "AD ASTRA & BOTANICA — Graphic Poster Systems & Interactive Commerce",
      description:
        "Combining classic Swiss typographic poster design with custom packaging dielines and an interactive Next.js + iOS AR storefront. Every headline uses bold display type with archival specifications in a refined body face.",
    },
    thumbs: [
      {
        title: "LOS // POSTER",
        titleColor: "text-hovs-warm",
        description: "Limited museum-grade screenprint series.",
      },
      {
        title: "AR PREVIEW ↗",
        titleColor: "text-hovs-emerald",
        description: "Mobile AR wall framing & Next.js checkout.",
      },
    ],
  },
];

// ── Scroll-Stack Showcase Projects ──
export interface StackProject {
  number: string;
  total: string;
  accent: "lime" | "emerald" | "warm";
  pillStyle: "lime" | "emerald" | "warm";
  category: string;
  title: string;
  description: string;
  tags: { label: string; highlight?: boolean }[];
  topLeft: string;
  topRight: string;
  topRightColor: string;
  bottomLeft: string;
  bottomRight: string;
  stats: { label: string; value: string; valueColor: string }[];
  midContent?: {
    type: "grid" | "single";
    items: { label: string; value: string; valueColor: string; extra?: string }[];
  };
  stickyTop: string;
}

export const stackProjects: StackProject[] = [
  {
    number: "01",
    total: "04",
    accent: "lime",
    pillStyle: "lime",
    category: "MOBILE APP DEVELOPMENT (IOS & ANDROID)",
    title: "PULSE FINTECH — Cross-Platform Banking Super-App",
    description:
      "Engineered in React Native with 60fps Reanimated gesture physics, biometric vault security, and a complete Figma component library.",
    tags: [
      { label: "React Native" },
      { label: "Figma UI Kit" },
      { label: "1.2M+ Downloads", highlight: true },
    ],
    topLeft: "IOS / ANDROID BUILD v4.2",
    topRight: "● 60 FPS NATIVE",
    topRightColor: "text-hovs-emerald",
    bottomLeft: "DESIGNED IN FIGMA • BUILT IN REACT NATIVE",
    bottomRight: "Live on App Store ↗",
    stats: [],
    midContent: {
      type: "grid",
      items: [
        {
          label: "INSTANT CARD SPEND",
          value: "$12,480.00",
          valueColor: "text-hovs-emerald",
        },
        {
          label: "APP STORE RATING",
          value: "4.95 ★",
          valueColor: "text-hovs-cream",
        },
      ],
    },
    stickyTop: "top-24",
  },
  {
    number: "02",
    total: "04",
    accent: "emerald",
    pillStyle: "emerald",
    category: "FULL-STACK WEB DEVELOPMENT",
    title: "HYPERION AI — Next.js SaaS & Real-Time Canvas Web App",
    description:
      "High-velocity web platform built with Next.js 15, TypeScript, Tailwind CSS, and WebGL shaders—delivering sub-40ms page transitions and 100/100 Lighthouse scores.",
    tags: [
      { label: "Next.js 15" },
      { label: "TypeScript & Tailwind" },
      { label: "100 Lighthouse Score", highlight: true },
    ],
    topLeft: "HTTPS://HYPERION.AI",
    topRight: "● EDGE DEPLOYED",
    topRightColor: "text-hovs-emerald",
    bottomLeft: "FULL-STACK NEXT.JS ARCHITECTURE",
    bottomRight: "Launch Web App ↗",
    stats: [],
    midContent: {
      type: "single",
      items: [
        {
          label: "ACTIVE CLOUD WORKSPACES",
          value: "84,200+ Teams",
          valueColor: "text-hovs-cream",
          extra: "+185% Growth",
        },
      ],
    },
    stickyTop: "top-28",
  },
  {
    number: "03",
    total: "04",
    accent: "warm",
    pillStyle: "warm",
    category: "FIGMA DESIGN SYSTEM ARCHITECTURE",
    title: "PRISM TOKENS — Multi-Brand Figma Component OS",
    description:
      "A comprehensive 650+ component Figma library featuring automated Dark/Light variable modes, Auto-Layout 5.0 responsiveness, and direct GitHub token sync.",
    tags: [
      { label: "650+ Components" },
      { label: "Figma Variables" },
      { label: "Zero Handoff Friction", highlight: true },
    ],
    topLeft: "FIGMA MASTER LIBRARY",
    topRight: "❖ AUTO-LAYOUT 5.0",
    topRightColor: "text-hovs-warm",
    bottomLeft: "DESIGN SYSTEM & TOKEN PIPELINE",
    bottomRight: "Inspect Figma File ↗",
    stats: [],
    midContent: {
      type: "grid",
      items: [
        { label: "Variants", value: "650+", valueColor: "text-hovs-cream" },
        { label: "Variables", value: "4 Modes", valueColor: "text-hovs-emerald" },
        { label: "Dev Speed", value: "2.4x", valueColor: "text-hovs-warm" },
      ],
    },
    stickyTop: "top-32",
  },
  {
    number: "04",
    total: "04",
    accent: "lime",
    pillStyle: "lime",
    category: "GRAPHIC DESIGN & BRAND IDENTITY",
    title: "MONOLITH LABS — Complete Brand & Packaging Identity",
    description:
      "Bespoke geometric logomark, tactile foil-stamped packaging dielines, Swiss exhibition posters, and comprehensive brand guidelines.",
    tags: [
      { label: "Vector Identity" },
      { label: "Print & Packaging" },
      { label: "Swiss Typography", highlight: true },
    ],
    topLeft: "BRAND BOOK & PACKAGING",
    topRight: "● PRINT & VECTOR",
    topRightColor: "text-hovs-emerald",
    bottomLeft: "DISPLAY + BODY TYPE EDITION",
    bottomRight: "View Brand Book ↗",
    stats: [],
    midContent: {
      type: "single",
      items: [
        {
          label: "",
          value: "✣ MONOLITH // 26",
          valueColor: "text-hovs-cream",
          extra: "Award Winner",
        },
      ],
    },
    stickyTop: "top-36",
  },
];

// ── Experience Timeline Roles ──
export interface TimelineRole {
  period: string;
  badge: string;
  badgeStyle: "emerald" | "cream" | "warm";
  title: string;
  description: string;
  dotColor: string;
  hoverBorder: string;
}

export const timelineRoles: TimelineRole[] = [
  {
    period: "2023 — PRESENT",
    badge: "PRINCIPAL & FOUNDER",
    badgeStyle: "emerald",
    title:
      "House of Design — Principal UI/UX, Graphic & Full-Stack Director",
    description:
      "Leading end-to-end product architecture across Figma design systems, brand identity, React Native mobile apps, and Next.js web platforms for global clients.",
    dotColor: "bg-hovs-emerald shadow-[0_0_15px_#00E599]",
    hoverBorder: "hover:border-hovs-emerald",
  },
  {
    period: "2021 — 2023",
    badge: "SENIOR PRODUCT & BRAND DESIGNER",
    badgeStyle: "cream",
    title:
      "Kinetix & Vanguard Studio — Lead Figma Systems & Frontend Architect",
    description:
      "Architected multi-brand Figma token libraries and developed interactive web and mobile interfaces serving over 420,000 active creatives.",
    dotColor: "bg-hovs-lime",
    hoverBorder: "hover:border-hovs-emerald",
  },
  {
    period: "2019 — 2021",
    badge: "GRAPHIC & VISUAL DESIGNER",
    badgeStyle: "warm",
    title:
      "Monolith Press — Brand Identity, Typography & Exhibition Systems",
    description:
      "Created bespoke logomarks, Swiss editorial posters, custom packaging dielines, and digital art direction for cultural and technology brands.",
    dotColor: "bg-hovs-warm",
    hoverBorder: "hover:border-hovs-warm",
  },
];

// ── Mastery Bars ──
export const masteryBars = [
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
] as const;

// ── Workflow Steps ──
export const workflowSteps = [
  {
    step: "01",
    rightLabel: "STRATEGY & BRAND",
    accentColor: "emerald" as const,
    title: "Discovery & Visual Direction",
    description:
      "Defining brand positioning, Swiss grid architecture, custom typography pairing, and user journeys.",
    deliverable: "Moodboard & Identity",
    deliverableColor: "text-hovs-emerald",
  },
  {
    step: "02",
    rightLabel: "FIGMA SYSTEMS",
    accentColor: "emerald" as const,
    title: "Figma UI/UX & Prototyping",
    description:
      "Crafting responsive Auto-Layout 5.0 components, Dark/Light variables, and interactive prototypes.",
    deliverable: "Figma Master File",
    deliverableColor: "text-hovs-emerald",
  },
  {
    step: "03",
    rightLabel: "APP & WEB CODE",
    accentColor: "warm" as const,
    title: "Full-Stack Development",
    description:
      "Translating designs into clean React, Next.js, and React Native/Flutter code with silky 60fps animations.",
    deliverable: "Production Repo",
    deliverableColor: "text-hovs-warm",
  },
  {
    step: "04",
    rightLabel: "LAUNCH & SCALE",
    accentColor: "emerald" as const,
    title: "QA, Polish & Global Launch",
    description:
      "Performance optimization, App Store & Play Store deployment, and continuous design system scaling.",
    deliverable: "Live Product ↗",
    deliverableColor: "text-hovs-emerald",
  },
] as const;

// ── Artifacts Archive ──
export const artifacts = [
  {
    title: "JPL // 80",
    titleColor: "text-hovs-lime",
    label: "Artifact 01 • Vector Badge",
    labelColor: "text-hovs-lime",
    description:
      "Commemorative anniversary emblem designed on a radial grid.",
  },
  {
    title: "SNEAKER.01",
    titleColor: "text-hovs-emerald",
    label: "Artifact 02 • Custom Concept",
    labelColor: "text-hovs-emerald",
    description:
      "Bespoke industrial footwear tag & technical blueprint packaging.",
  },
  {
    title: "MACBA // BCN",
    titleColor: "text-hovs-warm",
    label: "Artifact 03 • Book Cover",
    labelColor: "text-hovs-warm",
    description:
      "Exploratory architectural monograph cover with bold display typography.",
  },
  {
    title: "WAVE // OS",
    titleColor: "text-hovs-cream",
    label: "Artifact 04 • Figma Prototype",
    labelColor: "text-hovs-lime",
    description:
      "Minimalist sound-wave meditation app interface & haptics.",
  },
  {
    title: "FOIL // CARD",
    titleColor: "text-hovs-emerald",
    label: "Artifact 05 • Print Identity",
    labelColor: "text-hovs-emerald",
    description:
      "Matte-black cotton business cards with acid-lime edge painting.",
  },
] as const;

// ── Services Bento Pillars ──
export const servicePillars = [
  {
    number: "01",
    accentColor: "emerald" as const,
    badge: "Auto-Layout 5.0",
    title: "Figma UI/UX Design",
    description:
      "Scalable multi-brand design systems, variable token architectures, interactive wireframes, and high-fidelity prototypes.",
    items: [
      "Design Systems & Tokens",
      "Interactive Smart Prototypes",
      "UX Research & Wireframing",
    ],
    hoverBorder: "hover:border-hovs-emerald",
  },
  {
    number: "02",
    accentColor: "warm" as const,
    badge: "Vector & Print",
    title: "Graphic & Brand Identity",
    description:
      "Bespoke vector logomarks, Swiss editorial posters, tactile packaging dielines, and unmistakable brand guidelines.",
    items: [
      "Logo & Visual Identity",
      "Editorial Posters & Key Art",
      "Packaging & Print Systems",
    ],
    hoverBorder: "hover:border-hovs-warm",
  },
  {
    number: "03",
    accentColor: "emerald" as const,
    badge: "iOS & Android",
    title: "Mobile App Development",
    description:
      "Fluid 60fps cross-platform and native mobile applications engineered with React Native, Flutter, and smooth gesture physics.",
    items: [
      "React Native & Flutter Apps",
      "Micro-Animations & Haptics",
      "App Store & Play Store Launch",
    ],
    hoverBorder: "hover:border-hovs-emerald",
  },
  {
    number: "04",
    accentColor: "emerald" as const,
    badge: "Full-Stack Web",
    title: "Modern Web Development",
    description:
      "High-converting SaaS web apps, interactive WebGL/Canvas portfolios, and blazing-fast Next.js & Tailwind architectures.",
    items: [
      "React, Next.js & TypeScript",
      "Interactive Motion & GSAP",
      "Responsive SEO Architecture",
    ],
    hoverBorder: "hover:border-hovs-emerald",
  },
] as const;
