import React, { useRef } from 'react';
import { ExternalLink, Camera, ArrowRight, Shield, Sparkles, Code, CheckCircle, Award, Terminal, CheckCircle2 } from 'lucide-react';
import { CANDIDATE_INFO, OFFICIAL_LINKS } from '../data/portfolioData';
import { HolographicIdCard } from './HolographicIdCard';
import { cyberAudio } from '../utils/cyberSoundEffects';
import { useOwner } from '../context/OwnerContext';

interface HeroSectionProps {
  onOpenPitch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPitch }) => {
  const hiddenUploadRef = useRef<HTMLInputElement>(null);
  const { isOwnerMode, isPublicLocked } = useOwner();

  const handleTriggerUpload = () => {
    cyberAudio.playClick();
    const cardInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (cardInput) {
      cardInput.click();
    } else if (hiddenUploadRef.current) {
      hiddenUploadRef.current.click();
    }
  };

  const handleOpenPitch = () => {
    cyberAudio.playModalOpen();
    onOpenPitch();
  };

  const canEditPhoto = isOwnerMode || !isPublicLocked;

  return (
    <section id="overview" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background ambient cyber glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top HUD Telemetry Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>SSASIT SURAT · GDG ON CAMPUS 2026 CANDIDATE DOSSIER</span>
          <span className="text-cyan-500/50">|</span>
          <span className="text-emerald-400 font-bold">STATUS: READY</span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio, Domains, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative">
            
            {/* Subtle cyber background grid accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-500/20 pointer-events-none" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance">
              Daksh Jayeshbhai <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                Patel
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              1st Year <span className="text-white font-semibold">B.Tech in Information Technology</span> (Roll No: <span className="font-mono text-cyan-300 font-bold bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/40">IT20</span>) at <span className="text-white font-medium">Shri Swami Atmanand Saraswati Institute of Technology (SSASIT), Surat</span>. 
              Founder of <span className="text-purple-300 font-semibold">ALTIVOX</span>, bridging modern frontend web applications, applied generative AI pipelines, and database-level security.
            </p>

            {/* Target Role & Selected Domains Matrix Badges */}
            <div className="mt-6 w-full">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Selected Domains for GDG SSASIT 2026:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  Web Developer
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-purple-950/90 border border-purple-400/50 text-purple-300 font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  AI / ML
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-emerald-950/90 border border-emerald-400/50 text-emerald-300 font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Cybersecurity
                </span>
              </div>
            </div>

            {/* CTAs Group */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full">
              {/* Primary CTA: Launch Live Web Platform */}
              <a
                href={OFFICIAL_LINKS.webPlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playClick()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-tight flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Launch Live Platform</span>
                <ExternalLink className="w-4 h-4 text-slate-950" />
              </a>

              {/* Upload My Photo Action Button - ONLY shown in Owner Mode */}
              {canEditPhoto ? (
                <button
                  type="button"
                  onClick={handleTriggerUpload}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-medium text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <Camera className="w-4 h-4 text-cyan-400" />
                  <span>Upload / Change My Photo</span>
                </button>
              ) : (
                /* Public Deployment Mode: Direct Jump to 3-Domain Proof */
                <a
                  href="#domains"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-medium text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Inspect 3-Domain Proof</span>
                </a>
              )}

              {/* Read 60s Pitch */}
              <button
                type="button"
                onClick={handleOpenPitch}
                onMouseEnter={() => cyberAudio.playHover()}
                className="px-4 py-3 rounded-xl bg-transparent hover:bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Why 3 Domains?</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick Trust / Verification Badges */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Roll No: IT20
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" /> ALTIVOX Founder
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> SSASIT Surat 2026
              </span>
            </div>

          </div>

          {/* Right Column: 3D Holographic ID Card with Gyroscope */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HolographicIdCard />
          </div>

        </div>

        {/* Claim-to-Proof Metric Strip below the split with HUD framing */}
        <div className="mt-14 pt-8 border-t border-cyan-500/20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#090d16]/80 border border-cyan-500/20 text-center sm:text-left relative group hover:border-cyan-400/50 transition-colors shadow-lg">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            <span className="block text-3xl font-black text-cyan-400 font-mono tabular-nums">3</span>
            <span className="text-xs font-bold text-white tracking-tight">Integrated Domains</span>
            <span className="block text-[11px] text-slate-400 mt-0.5">Web + AI/ML + Cyber</span>
          </div>

          <div className="p-4 rounded-xl bg-[#090d16]/80 border border-purple-500/20 text-center sm:text-left relative group hover:border-purple-400/50 transition-colors shadow-lg">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            <span className="block text-3xl font-black text-purple-400 font-mono tabular-nums">4</span>
            <span className="text-xs font-bold text-white tracking-tight">ALTIVOX Video Series</span>
            <span className="block text-[11px] text-slate-400 mt-0.5">Tech education pipeline</span>
          </div>

          <div className="p-4 rounded-xl bg-[#090d16]/80 border border-emerald-500/20 text-center sm:text-left relative group hover:border-emerald-400/50 transition-colors shadow-lg">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            <span className="block text-3xl font-black text-emerald-400 font-mono tabular-nums">100%</span>
            <span className="text-xs font-bold text-white tracking-tight">Live Deployed Code</span>
            <span className="block text-[11px] text-slate-400 mt-0.5">Vercel &amp; Supabase</span>
          </div>

          <div className="p-4 rounded-xl bg-[#090d16]/80 border border-amber-500/20 text-center sm:text-left relative group hover:border-amber-400/50 transition-colors shadow-lg">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            <span className="block text-3xl font-black text-amber-400 font-mono tabular-nums">IT20</span>
            <span className="text-xs font-bold text-white tracking-tight">SSASIT Surat</span>
            <span className="block text-[11px] text-slate-400 mt-0.5">1st Year B.Tech IT</span>
          </div>
        </div>

      </div>
    </section>
  );
};
