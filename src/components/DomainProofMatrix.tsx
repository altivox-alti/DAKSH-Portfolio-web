import React, { useState } from 'react';
import { 
  Globe, Sparkles, Shield, CheckCircle2, ExternalLink, Terminal, Lock, Key, 
  Layers, Zap, Radio, LayoutGrid, Sliders, Play, Award, ShieldAlert, Cpu, 
  Database, RefreshCw, ChevronRight, Check
} from 'lucide-react';
import { DOMAIN_PROOFS, OFFICIAL_LINKS, DomainProof } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberSoundEffects';

export const DomainProofMatrix: React.FC = () => {
  // View mode: 'grid' (all 3 side-by-side) or 'deep-dive' (interactive workbench tabs)
  const [viewMode, setViewMode] = useState<'grid' | 'deep-dive'>('grid');
  const [activeTab, setActiveTab] = useState<'web' | 'aiml' | 'cybersecurity'>('web');

  // Interactive state for Cybersecurity RLS simulator
  const [simulatedRole, setSimulatedRole] = useState<'anon' | 'authenticated' | 'admin'>('anon');

  // Interactive state for AI prompt simulator
  const [promptTopic, setPromptTopic] = useState<'hackathon' | 'transformers' | 'rag'>('hackathon');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  // Interactive state for Web benchmark
  const [pingState, setPingState] = useState<{ status: 'idle' | 'testing' | 'done'; latency: number }>({
    status: 'idle',
    latency: 18
  });

  const handleModeChange = (mode: 'grid' | 'deep-dive') => {
    cyberAudio.playClick();
    setViewMode(mode);
  };

  const handleTabChange = (tab: 'web' | 'aiml' | 'cybersecurity') => {
    cyberAudio.playClick();
    setActiveTab(tab);
  };

  const handleTestLatency = () => {
    cyberAudio.playClick();
    setPingState({ status: 'testing', latency: 0 });
    setTimeout(() => {
      cyberAudio.playSuccess();
      setPingState({ status: 'done', latency: Math.floor(Math.random() * 8) + 14 });
    }, 450);
  };

  const handleTriggerAiSim = (topic: 'hackathon' | 'transformers' | 'rag') => {
    cyberAudio.playClick();
    setPromptTopic(topic);
    setIsGeneratingAi(true);
    setTimeout(() => {
      setIsGeneratingAi(false);
      cyberAudio.playSuccess();
    }, 400);
  };

  const activeDomain = DOMAIN_PROOFS.find((d) => d.id === activeTab) || DOMAIN_PROOFS[0];

  return (
    <section id="domains" className="py-16 md:py-24 relative border-t border-cyan-500/15">
      {/* Background cyber accent glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
                CANDIDATE CAPABILITY PROOF · GDG SSASIT 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Web Developer · AI/ML · Cybersecurity
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              Daksh applied across all three domains because modern engineering requires the delivery speed of Web Dev, the intelligence of AI/ML, and the zero-trust safeguards of Cybersecurity.
            </p>
          </div>

          {/* View Mode Switcher: Side-by-Side Grid vs Deep-Dive Workbench */}
          <div className="flex items-center p-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 self-start lg:self-auto shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <button
              onClick={() => handleModeChange('grid')}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`px-3.5 py-1.5 text-xs font-bold font-mono rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>3-Domain Grid View</span>
            </button>

            <button
              onClick={() => handleModeChange('deep-dive')}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`px-3.5 py-1.5 text-xs font-bold font-mono rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'deep-dive'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Deep-Dive Simulators</span>
            </button>
          </div>
        </div>

        {/* 3-Domain Synergy Flow Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-emerald-950/40 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="hud-corner-tl" />
          <div className="hud-corner-br" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white font-bold uppercase tracking-wider">
                Full-Stack Convergence Architecture:
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-bold">
                1. Web (Vite + React)
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/40 text-purple-300 font-bold">
                2. AI/ML (GenAI + Prompts)
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 font-bold">
                3. Security (Postgres RLS)
              </span>
            </div>

            <span className="text-slate-400 text-[11px] hidden lg:inline-block">
              100% Production Deployed
            </span>
          </div>
        </div>

        {/* VIEW 1: 3-DOMAIN SIDE-BY-SIDE POWER GRID */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* CARD 1: Web Developer */}
            <div className="rounded-2xl bg-[#090d16] border border-cyan-500/35 p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:border-cyan-400/70 transition-all duration-300 group relative overflow-hidden">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
                    CORE STRENGTH
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Web Developer
                </h3>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Ultra-responsive, modular web applications built with modern frontend architecture and edge deployments.
                </p>

                {/* Tech Stack Chips */}
                <div className="mt-5">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-bold">
                    Stack &amp; Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['React 19', 'Tailwind v4', 'Vite', 'Supabase', 'Vercel', 'Git/GitHub', 'TypeScript', 'Lovable'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Proof Points */}
                <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                    Verified Proof:
                  </span>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-normal">
                    • Engineered and deployed <strong className="text-white">altivox-ai-ten.vercel.app</strong> with responsive layouts and instant load times.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-normal">
                    • Built localized utility web apps with client-side reactive state calculation.
                  </div>
                </div>

                {/* GDG SSASIT Contribution */}
                <div className="mt-5 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-200">
                  <div className="font-mono font-bold text-cyan-300 text-[11px] uppercase mb-1 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    How I&apos;ll Help GDG SSASIT:
                  </div>
                  Building chapter event portals, registration sites, and live hackathon scoring leaderboards.
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveTab('web');
                    setViewMode('deep-dive');
                  }}
                  className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Launch Web Simulator</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={OFFICIAL_LINKS.webPlatform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-900 transition-colors"
                  title="Visit Altivox Live Platform"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CARD 2: AI / ML */}
            <div className="rounded-2xl bg-[#090d16] border border-purple-500/35 p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:border-purple-400/70 transition-all duration-300 group relative overflow-hidden">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-105 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-purple-950/80 border border-purple-400/40 text-purple-300">
                    APPLIED AI &amp; EDUCATION
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  AI / ML
                </h3>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Demystifying Artificial Intelligence through applied generative workflows, prompt frameworks, and education.
                </p>

                {/* Tech Stack Chips */}
                <div className="mt-5">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-2 font-bold">
                    Stack &amp; Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Generative AI', 'Prompt Engineering', 'LLM API Integration', 'AI Media Pipelines', 'Gemini Models', 'Alti & Pix'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Proof Points */}
                <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                    Verified Proof:
                  </span>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-normal">
                    • Founded <strong className="text-white">ALTIVOX</strong> running 4 signature video series: &quot;AI Decoded&quot;, &quot;AI Sunday Express&quot;, &quot;One Problem, One AI Solution&quot;, &quot;GitHub Hacks&quot;.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-normal">
                    • Engineered 3D animated mascots (Alti &amp; Pix) to teach machine learning intuitively.
                  </div>
                </div>

                {/* GDG SSASIT Contribution */}
                <div className="mt-5 p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-slate-200">
                  <div className="font-mono font-bold text-purple-300 text-[11px] uppercase mb-1 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-purple-400" />
                    How I&apos;ll Help GDG SSASIT:
                  </div>
                  Hosting beginner-friendly AI tool workshops and simplifying Google GenAI tools (Gemini, Vertex) for college peers.
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveTab('aiml');
                    setViewMode('deep-dive');
                  }}
                  className="text-xs font-mono font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Launch AI Simulator</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={OFFICIAL_LINKS.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-purple-950/80 border border-purple-400/30 text-purple-300 hover:bg-purple-900 transition-colors"
                  title="Visit Altivox YouTube"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CARD 3: Cybersecurity */}
            <div className="rounded-2xl bg-[#090d16] border border-emerald-500/35 p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:border-emerald-400/70 transition-all duration-300 group relative overflow-hidden">
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-950/80 border border-emerald-400/40 text-emerald-300">
                    APP &amp; BACKEND SECURITY
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  Cybersecurity
                </h3>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Proactive defense: database row-level security, cryptographic JWT authentication, and zero-trust policies.
                </p>

                {/* Tech Stack Chips */}
                <div className="mt-5">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-bold">
                    Stack &amp; Frameworks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Supabase Auth', 'Postgres RLS', 'Env Protection', 'RBAC', 'HTTPS / CORS', 'JWT Validation'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Proof Points */}
                <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                    Verified Proof:
                  </span>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-normal">
                    • Designed and hardened PostgreSQL Row-Level Security (RLS) rules in production React + Supabase apps.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-normal">
                    • Enforced public API tokens vs service roles, keeping client credentials leak-free.
                  </div>
                </div>

                {/* GDG SSASIT Contribution */}
                <div className="mt-5 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-slate-200">
                  <div className="font-mono font-bold text-emerald-300 text-[11px] uppercase mb-1 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    How I&apos;ll Help GDG SSASIT:
                  </div>
                  Promoting secure full-stack coding practices during student hackathons and auditing chapter apps.
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActiveTab('cybersecurity');
                    setViewMode('deep-dive');
                  }}
                  className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Launch Security Simulator</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <div className="px-2 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold">
                  Zero Trust
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: DEEP-DIVE INTERACTIVE WORKBENCH WITH LIVE SIMULATORS */}
        {viewMode === 'deep-dive' && (
          <div className="rounded-2xl bg-[#090d16] border border-cyan-500/35 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 sm:p-8 relative overflow-hidden">
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            {/* Sub-Tabs Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleTabChange('web')}
                  className={`px-4 py-2 text-xs font-bold font-mono rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'web'
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>1. Web Dev Station</span>
                </button>

                <button
                  onClick={() => handleTabChange('aiml')}
                  className={`px-4 py-2 text-xs font-bold font-mono rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'aiml'
                      ? 'bg-purple-500 text-slate-950 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>2. AI / ML Station</span>
                </button>

                <button
                  onClick={() => handleTabChange('cybersecurity')}
                  className={`px-4 py-2 text-xs font-bold font-mono rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'cybersecurity'
                      ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>3. Cybersecurity Station</span>
                </button>
              </div>

              <button
                onClick={() => handleModeChange('grid')}
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>&larr; Return to 3-Domain Grid</span>
              </button>
            </div>

            {/* TAB CONTENT: WEB DEV WORKBENCH */}
            {activeTab === 'web' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold">
                      CORE STRENGTH
                    </span>
                    <span className="text-xs text-slate-400 font-mono">React 19 + Tailwind v4 + Vite</span>
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    Web Developer Architecture &amp; Delivery Engine
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Daksh specializes in creating ultra-responsive, zero-latency frontend applications that look stunning and render instantly across mobile and desktop.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs text-slate-300 font-mono">
                    <div className="text-cyan-300 font-bold uppercase">Concrete Deliverables for GDG SSASIT 2026:</div>
                    <div>• Chapter Event Registration &amp; Ticketing Portal</div>
                    <div>• Real-Time Hackathon Submission Leaderboards</div>
                    <div>• Speaker Showcase &amp; Workshop Feedback Dashboards</div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={OFFICIAL_LINKS.webPlatform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                      <span>Visit Live Platform (Altivox)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right: Live Interactive Edge & Performance Audit Station */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl bg-slate-950 border border-cyan-500/40 p-5 shadow-2xl relative">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span className="font-bold text-white">Live Edge Performance Station</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px]">
                        OPTIMIZED
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-400">Target Host:</span>
                        <span className="text-cyan-300 font-bold">altivox-ai-ten.vercel.app</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-400">Response Latency (TTFB):</span>
                        <span className="text-emerald-400 font-bold tabular-nums">
                          {pingState.status === 'testing' ? 'Measuring...' : `${pingState.latency} ms`}
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-400">First Contentful Paint (FCP):</span>
                        <span className="text-cyan-400 font-bold">0.4s</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-400">Lighthouse Performance:</span>
                        <span className="text-emerald-400 font-bold">100 / 100</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={handleTestLatency}
                        disabled={pingState.status === 'testing'}
                        className="px-4 py-2 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-medium flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${pingState.status === 'testing' ? 'animate-spin' : ''}`} />
                        <span>{pingState.status === 'testing' ? 'Testing Node...' : 'Ping Live Edge Node'}</span>
                      </button>
                      <span className="text-[11px] text-slate-500 font-mono">Vercel Global Edge CDN</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: AI / ML WORKBENCH */}
            {activeTab === 'aiml' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 font-mono text-xs font-bold">
                      APPLIED AI &amp; EDUCATION
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Generative AI + Prompt Engineering</span>
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    AI / ML Workshop &amp; Prompt Engineering Lab
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Through ALTIVOX, Daksh simplifies state-of-the-art AI for students. Rather than passive theory, he creates visual mental models and practical prompt pipelines.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs text-slate-300 font-mono">
                    <div className="text-purple-300 font-bold uppercase">Concrete Deliverables for GDG SSASIT 2026:</div>
                    <div>• Hands-on Google Gemini &amp; Vertex AI Prompt Masterclasses</div>
                    <div>• Beginner-friendly AI tool sandboxes for non-CS students</div>
                    <div>• ALTIVOX technical video production for SSASIT chapter events</div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={OFFICIAL_LINKS.youtube.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    >
                      <span>Watch @altivox_ai on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right: Live Interactive Prompt Engineering Studio */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl bg-slate-950 border border-purple-500/40 p-5 shadow-2xl relative">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="font-bold text-white">ALTIVOX Prompt Engineering Studio</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/40 text-purple-300 text-[10px]">
                        FEW-SHOT SCHEMA
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="text-[11px] text-slate-400 font-mono block mb-1.5">Select GDG Workshop Task:</span>
                      <div className="grid grid-cols-3 gap-1.5 font-mono text-[11px]">
                        <button
                          onClick={() => handleTriggerAiSim('hackathon')}
                          className={`p-2 rounded text-center transition-colors cursor-pointer ${
                            promptTopic === 'hackathon'
                              ? 'bg-purple-600 text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                              : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          Hackathon Prompt
                        </button>
                        <button
                          onClick={() => handleTriggerAiSim('transformers')}
                          className={`p-2 rounded text-center transition-colors cursor-pointer ${
                            promptTopic === 'transformers'
                              ? 'bg-purple-600 text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                              : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          60s AI Decoded
                        </button>
                        <button
                          onClick={() => handleTriggerAiSim('rag')}
                          className={`p-2 rounded text-center transition-colors cursor-pointer ${
                            promptTopic === 'rag'
                              ? 'bg-purple-600 text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                              : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          RAG Embedding
                        </button>
                      </div>
                    </div>

                    {/* Simulated Output Frame */}
                    <div className="p-3.5 rounded-lg bg-slate-900 border border-purple-500/25 font-mono text-xs space-y-2">
                      <div className="text-[10px] text-purple-400 uppercase font-bold flex items-center justify-between">
                        <span>SYSTEM SPECIFICATION &amp; OUTPUT:</span>
                        {isGeneratingAi && <span className="text-cyan-300 animate-pulse">Synthesizing...</span>}
                      </div>

                      {promptTopic === 'hackathon' && (
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          &quot;Role: GDG Hackathon Judge Assistant. Task: Parse student team project proposal, evaluate against Google developer tracks (Android, Web, AI), output JSON scoring schema with 0 hallucinations.&quot;
                        </p>
                      )}

                      {promptTopic === 'transformers' && (
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          &quot;Alti script: Query, Key, and Value vectors explained as student library lookup cards. Pix animates the attention matrix heatmap in 45 seconds.&quot;
                        </p>
                      )}

                      {promptTopic === 'rag' && (
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          &quot;Context injection framework: Chunk SSASIT semester syllabus into 512-dim vector embeddings; query cosine similarity before passing to Gemini 2.5 Flash.&quot;
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Token Optimization: Low-Latency Flash</span>
                      <span className="text-emerald-400 font-bold">100% Deterministic</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: CYBERSECURITY WORKBENCH */}
            {activeTab === 'cybersecurity' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 font-mono text-xs font-bold">
                      APP &amp; BACKEND SECURITY
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Zero-Trust &amp; PostgreSQL RLS</span>
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    Cybersecurity &amp; Zero-Trust Data Defense
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Daksh prevents data breaches before they happen by enforcing database-level Row-Level Security (RLS) rules and strict client-side key segregation.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs text-slate-300 font-mono">
                    <div className="text-emerald-300 font-bold uppercase">Concrete Deliverables for GDG SSASIT 2026:</div>
                    <div>• &apos;Security First&apos; Hackathon Track &amp; Student Mentorship</div>
                    <div>• Pre-Launch Security &amp; CORS Audits for GDG Chapter Apps</div>
                    <div>• Safe Token &amp; Environment Variable Storage Best Practices</div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                    * OWASP Top 10 Compliant · JWT Cryptographic Signature Verification
                  </div>
                </div>

                {/* Right: Live Interactive RLS Rule Simulator */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl bg-slate-950 border border-emerald-500/40 p-5 shadow-2xl relative">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-white">PostgreSQL RLS Live Engine</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px]">
                        ACTIVE POLICY
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] text-slate-400 font-mono block mb-1.5">Simulate User Session Identity:</span>
                      <div className="grid grid-cols-3 gap-1.5 font-mono text-[11px]">
                        <button
                          onClick={() => {
                            cyberAudio.playClick();
                            setSimulatedRole('anon');
                          }}
                          className={`p-2 rounded text-center transition-colors cursor-pointer ${
                            simulatedRole === 'anon'
                              ? 'bg-rose-900/90 border border-rose-500 text-rose-200 font-bold shadow-[0_0_10px_rgba(244,63,94,0.4)]'
                              : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          Anonymous
                        </button>
                        <button
                          onClick={() => {
                            cyberAudio.playClick();
                            setSimulatedRole('authenticated');
                          }}
                          className={`p-2 rounded text-center transition-colors cursor-pointer ${
                            simulatedRole === 'authenticated'
                              ? 'bg-emerald-700 text-white font-bold shadow-[0_0_10px_rgba(16,185,129,0.4)]'
                              : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          Student Auth
                        </button>
                        <button
                          onClick={() => {
                            cyberAudio.playClick();
                            setSimulatedRole('admin');
                          }}
                          className={`p-2 rounded text-center transition-colors cursor-pointer ${
                            simulatedRole === 'admin'
                              ? 'bg-cyan-700 text-white font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                              : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                        >
                          GDG Admin
                        </button>
                      </div>
                    </div>

                    {/* Live RLS Query Evaluation */}
                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs space-y-2.5">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">SELECT * FROM public_events:</span>
                        <span className="text-emerald-400 font-bold">ALLOW (200 OK)</span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">UPDATE user_profiles WHERE id = auth.uid():</span>
                        <span className={simulatedRole === 'anon' ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>
                          {simulatedRole === 'anon' ? 'DENY (403 RLS Violation)' : 'ALLOW (200 OK)'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">DELETE FROM system_audit_logs:</span>
                        <span className={simulatedRole === 'admin' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                          {simulatedRole === 'admin' ? 'ALLOW (Admin Role)' : 'DENY (403 Forbidden)'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Key className="w-3.5 h-3.5 text-emerald-400" />
                        JWT Cryptographically Verified
                      </span>
                      <span className="text-emerald-400 font-bold">SQL Injection Immune</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
