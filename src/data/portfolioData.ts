export interface SocialLink {
  label: string;
  url: string;
  handle: string;
  icon: string;
  description: string;
}

export interface DomainProof {
  id: 'web' | 'aiml' | 'cybersecurity';
  title: string;
  badge: string;
  tagline: string;
  color: string;
  glowColor: string;
  stack: string[];
  proof: string[];
  gdgContribution: string;
  highlights: {
    label: string;
    value: string;
    sub: string;
  }[];
}

export const PERMANENT_ASSETS = {
  // Public deployment mode lock: When true, public visitors on GitHub/Vercel CANNOT upload or cancel photos
  isPublicDeploymentLocked: true,
  
  // Permanent default photo URL for Daksh (can be replaced with your real photo base64 or direct asset path)
  profilePhoto: null as string | null,
  
  // Permanent default photo URL for Alti
  altiPhoto: null as string | null,
  
  // Permanent default photo URL for Pix
  pixPhoto: null as string | null,
};

export const CANDIDATE_INFO = {
  fullName: "Daksh Jayeshbhai Patel",
  shortName: "Daksh Patel",
  rollNo: "IT20",
  institute: "Shri Swami Atmanand Saraswati Institute of Technology (SSASIT), Surat",
  instituteShort: "SSASIT, Surat",
  degree: "1st Year B.Tech in Information Technology",
  batch: "Class of 2028 (Recruitment '26)",
  targetRole: "GDG on Campus SSASIT 2026 Core Recruitment",
  venture: "Founder of ALTIVOX",
  email: "jayeshbhai190808@gmail.com",
  selectedDomains: [
    { name: "Web Developer", key: "web", color: "from-cyan-500 to-blue-500", text: "text-cyan-400" },
    { name: "AI / ML", key: "aiml", color: "from-purple-500 to-pink-500", text: "text-purple-400" },
    { name: "Cybersecurity", key: "cybersecurity", color: "from-emerald-500 to-teal-500", text: "text-emerald-400" }
  ]
};

export const OFFICIAL_LINKS = {
  linkedin: {
    label: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/daksh-patel-a05ab3273?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    handle: "daksh-patel-a05ab3273",
    role: "Professional Network",
    type: "LinkedIn"
  },
  github: {
    label: "GitHub Account",
    url: "https://github.com/altivox-alti",
    handle: "altivox-alti",
    role: "Open Source & Code",
    type: "GitHub"
  },
  webPlatform: {
    label: "Live Web Platform",
    url: "https://altivox-ai-ten.vercel.app",
    handle: "altivox-ai-ten.vercel.app",
    type: "Platform"
  },
  youtube: {
    label: "Official YouTube Channel",
    url: "https://youtube.com/@altivox_ai",
    handle: "@altivox_ai",
    subscribers: "Educational Series",
    type: "YouTube"
  },
  instagram: {
    label: "Official Instagram Account",
    url: "https://www.instagram.com/altivox_ai",
    handle: "@altivox_ai",
    reach: "Short-form Tech",
    type: "Instagram"
  }
};

export const INTERVIEW_PITCH = {
  headline: "Why I Applied for All 3 Domains: The Full-Stack AI Engineer Synergy",
  summary: "Modern software engineering does not exist in silos. An AI model is useless without a fast web interface, and an AI web application is a liability without rigorous database security.",
  pillars: [
    {
      title: "1. Web Dev as the Delivery Vehicle",
      desc: "React, Tailwind, and Vite allow me to build lightning-fast interactive interfaces, dashboards, and event registration portals that turn complex backend algorithms into seamless human experiences."
    },
    {
      title: "2. AI/ML as the Intelligence Multiplier",
      desc: "Through ALTIVOX, I bridge cutting-edge LLMs and prompt automation with real-world developer tools, teaching peers how to harness GenAI for productivity and problem-solving."
    },
    {
      title: "3. Cybersecurity as the Uncompromised Armor",
      desc: "Building with Supabase, PostgreSQL Row-Level Security (RLS), and JWT authentication ensures that every app deployed for students and events is resilient against unauthorized data leaks and session hijacking."
    }
  ],
  gdgCommitment: "For GDG on Campus SSASIT 2026, I will act as a versatile builder who can code production-ready hackathon portals overnight, conduct hands-on GenAI workshops, and enforce security hygiene across all chapter projects."
};

export const DOMAIN_PROOFS: DomainProof[] = [
  {
    id: "web",
    title: "Web Developer",
    badge: "Core Strength",
    tagline: "Ultra-responsive, modular web applications built with modern frontend architecture",
    color: "cyan",
    glowColor: "rgba(6, 182, 212, 0.4)",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Supabase",
      "Vercel",
      "Git & GitHub",
      "TypeScript",
      "Lovable Engine"
    ],
    proof: [
      "Engineered & deployed the official Altivox AI platform (altivox-ai-ten.vercel.app) featuring dynamic routing and responsive layouts.",
      "Built localized utility applications including real-time mathematical household calculation tools.",
      "Optimized client bundles for near-instant Time to Interactive (TTI) with strict zero-runtime layout shift standards."
    ],
    gdgContribution: "Build the official GDG on Campus SSASIT event registration portal, real-time hackathon submission leaderboards, and speaker showcase dashboards.",
    highlights: [
      { label: "Lighthouse Performance", value: "99+", sub: "Vite + Edge optimized" },
      { label: "Production Platforms", value: "Live", sub: "Vercel deployments" },
      { label: "Stack Velocity", value: "React 19", sub: "Tailwind CSS modern pipeline" }
    ]
  },
  {
    id: "aiml",
    title: "AI / ML",
    badge: "Applied AI & Tech Education",
    tagline: "Demystifying Artificial Intelligence through applied generative workflows and education",
    color: "purple",
    glowColor: "rgba(168, 85, 247, 0.4)",
    stack: [
      "Generative AI Workflows",
      "Prompt Engineering",
      "LLM API Integration",
      "AI Media Pipelines",
      "Multimodal Tooling",
      "Curated Video Syntheses"
    ],
    proof: [
      "Founded ALTIVOX (@altivox_ai on YouTube & Instagram) creating high-retention technical education videos on AI breakthroughs.",
      "Authored 4 dedicated video series: 'AI Decoded', 'AI Sunday Express', 'One Problem, One AI Solution', and 'GitHub Hacks'.",
      "Created 3D animated AI mascot personalities ('Alti' & 'Pix') to humanize machine learning concepts for college peers."
    ],
    gdgContribution: "Host hands-on beginner-friendly AI tool workshops, conduct live prompt engineering masterclasses, and demystify Google's GenAI tools (Gemini, Vertex) for SSASIT students.",
    highlights: [
      { label: "Signature Series", value: "4 Tracks", sub: "AI Decoded, Express & Hacks" },
      { label: "Community Brand", value: "ALTIVOX", sub: "YouTube & Instagram hub" },
      { label: "Mascot Universe", value: "Alti & Pix", sub: "Visual storytelling engine" }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    badge: "App & Backend Security",
    tagline: "Proactive security posture: bulletproof authorization, data boundaries, and safe deployments",
    color: "emerald",
    glowColor: "rgba(16, 185, 129, 0.4)",
    stack: [
      "Supabase Auth",
      "PostgreSQL Row-Level Security (RLS)",
      "Environment Protection (.env)",
      "Role-Based Access Control (RBAC)",
      "HTTPS / Strict CORS",
      "JWT Session Validation"
    ],
    proof: [
      "Designed and hardened database schemas using PostgreSQL Row-Level Security (RLS) rules so users can strictly only mutate their own records.",
      "Enforced client/server boundary separation: public API tokens vs service roles, stopping credential leaks in frontend bundles.",
      "Audited web application data flows against OWASP Top 10 client risks (XSS, insecure direct object references, and state tampering)."
    ],
    gdgContribution: "Lead the 'Security First' track in GDG hackathons, mentor participants on safe authentication practices, and audit chapter web applications before launch.",
    highlights: [
      { label: "Database Layer", value: "Postgres RLS", sub: "Strict identity isolation" },
      { label: "Auth Framework", value: "JWT + Supabase", sub: "Stateful session guards" },
      { label: "Protection", value: "Zero Trust", sub: "No hardcoded client secrets" }
    ]
  }
];

export const ALTIVOX_SERIES = [
  {
    id: "ai-decoded",
    title: "AI Decoded",
    focus: "Deep dive into state-of-the-art AI architectures, transformers, and multimodal vision models in simple terms.",
    tag: "Core Concepts",
    icon: "Cpu"
  },
  {
    id: "sunday-express",
    title: "AI Sunday Express",
    focus: "Weekly curated breakdown of the biggest artificial intelligence announcements, research papers, and open-source models.",
    tag: "Weekly Tech Digest",
    icon: "Zap"
  },
  {
    id: "one-problem-one-solution",
    title: "One Problem, One AI Solution",
    focus: "Practical problem solving: taking real-world bottlenecks (workflow, transcription, coding) and fixing them with AI tools.",
    tag: "Applied Engineering",
    icon: "Wrench"
  },
  {
    id: "github-hacks",
    title: "GitHub Hacks",
    focus: "Essential developer productivity tricks, Git command mastery, Actions automation, and open-source project management.",
    tag: "Developer Tools",
    icon: "GitBranch"
  }
];

export const COURSEWORK_SEMESTER_1 = [
  { code: "3110003", name: "Programming for Problem Solving in C", focus: "Algorithms, control flow, pointers, memory management, data structures" },
  { code: "3110013", name: "Engineering Graphics & Design", focus: "Spatial geometry, isometric projection, CAD modeling standards" },
  { code: "3110005", name: "Basic Electrical Engineering", focus: "AC/DC circuits, electromagnetic machines, energy flow theorems" },
  { code: "3110014", name: "Mathematics - 1", focus: "Calculus, matrix decomposition, partial derivatives, infinite series" },
  { code: "3110017", name: "IPDC (Integrated Personality Dev.)", focus: "Leadership ethics, active collaboration, professional resilience" },
  { code: "3110018", name: "Project-Based Learning (PBL)", focus: "Hands-on engineering problem framing, prototyping, and team delivery" }
];
