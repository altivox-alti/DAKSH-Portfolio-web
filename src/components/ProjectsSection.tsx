import React, { useState, useMemo } from 'react';
import { ExternalLink, Shield, Calculator, Check, ArrowRight, X, Lock, Database, Code, RefreshCw, Sparkles, Layers, Droplets } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberSoundEffects';

export const ProjectsSection: React.FC = () => {
  // Modal state for ALTIVOX Architecture
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);
  const [activeArchStep, setActiveArchStep] = useState<number>(1);

  // State for Daily Milk Purchasing & Household Expense Tracker
  const [dailyLiters, setDailyLiters] = useState<number>(1.5);
  const [pricePerLiter, setPricePerLiter] = useState<number>(64);
  const [daysInMonth, setDaysInMonth] = useState<number>(30);
  const [skippedDays, setSkippedDays] = useState<number>(0);
  const [extraLitersTotal, setExtraLitersTotal] = useState<number>(0);

  // Monthly Bill Calculation
  const calculation = useMemo(() => {
    const activeDays = Math.max(0, daysInMonth - skippedDays);
    const regularLiters = activeDays * dailyLiters;
    const totalLiters = regularLiters + extraLitersTotal;
    const totalBill = totalLiters * pricePerLiter;
    const dailyAverageCost = daysInMonth > 0 ? (totalBill / daysInMonth) : 0;

    return {
      activeDays,
      regularLiters: regularLiters.toFixed(1),
      totalLiters: totalLiters.toFixed(1),
      totalBill: Math.round(totalBill),
      dailyAverageCost: Math.round(dailyAverageCost),
      fillPercent: Math.min(100, Math.round((totalLiters / 90) * 100))
    };
  }, [dailyLiters, pricePerLiter, daysInMonth, skippedDays, extraLitersTotal]);

  const handleApplyPreset = (preset: 'standard' | 'student' | 'family') => {
    cyberAudio.playClick();
    if (preset === 'standard') {
      setDailyLiters(1.5);
      setPricePerLiter(64);
      setSkippedDays(0);
      setExtraLitersTotal(2);
    } else if (preset === 'student') {
      setDailyLiters(0.5);
      setPricePerLiter(60);
      setSkippedDays(2);
      setExtraLitersTotal(0);
    } else if (preset === 'family') {
      setDailyLiters(3.0);
      setPricePerLiter(66);
      setSkippedDays(0);
      setExtraLitersTotal(5);
    }
  };

  const handleOpenArchModal = () => {
    cyberAudio.playModalOpen();
    setIsArchModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative border-t border-cyan-500/15">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/4 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
                PRODUCTION WORK &amp; UTILITY APPS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects &amp; Live Demos
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              From full-stack multi-user platforms to high-utility consumer mathematical tools.
            </p>
          </div>

          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            All code optimized for zero-latency client execution
          </span>
        </div>

        {/* Project 1: ALTIVOX Full-Stack Platform */}
        <div className="rounded-3xl bg-[#090d16] border border-cyan-500/35 p-6 sm:p-8 lg:p-10 mb-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Project Details & Actions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                  FLAGSHIP PLATFORM
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
                  Production · Vercel + Supabase
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                ALTIVOX — Full-Stack AI Education Platform
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                The official web platform powering the ALTIVOX community. Provides structured video roadmaps, interactive prompt templates, community discussions, and curated resource kits for student developers.
              </p>

              {/* Architecture highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Frontend Layer</span>
                  <span className="text-xs font-bold text-cyan-300">React + Vite + Tailwind</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Auth &amp; Session</span>
                  <span className="text-xs font-bold text-purple-300">Supabase Auth (JWT)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Database Guard</span>
                  <span className="text-xs font-bold text-emerald-300">PostgreSQL RLS Rules</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={OFFICIAL_LINKS.webPlatform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-[0.98]"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* View Security & Architecture Modal Trigger */}
                <button
                  type="button"
                  onClick={handleOpenArchModal}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer active:scale-95"
                >
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>View Security &amp; Architecture</span>
                </button>
              </div>

            </div>

            {/* Right: Isometric Platform Mockup Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#080c14] border border-cyan-500/40 p-5 shadow-2xl relative overflow-hidden">
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                {/* Browser-like Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-300">
                    altivox-ai-ten.vercel.app
                  </div>
                  <span className="w-3" />
                </div>

                {/* Stylized Visual Representation of the Platform */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-cyan-400 font-mono block">ACTIVE VIDEO LESSON</span>
                      <h5 className="text-xs font-bold text-white">AI Decoded: Ep 04 — Transformer Attention</h5>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      LIVE
                    </span>
                  </div>

                  {/* Mock Curriculum Cards */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-purple-300 font-bold block">1. Prompts Library</span>
                      <span className="text-slate-500 text-[10px]">Zero-Shot &amp; CoT</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-cyan-300 font-bold block">2. GitHub Hacks</span>
                      <span className="text-slate-500 text-[10px]">Rebase &amp; CI/CD</span>
                    </div>
                  </div>

                  {/* Micro Terminal Bar */}
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">auth_session:</span>
                    <span className="text-emerald-400 font-bold">JWT_VALIDATED (200 OK)</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Project 2: Daily Milk Purchasing & Household Expense Tracker */}
        <div className="rounded-3xl bg-[#090d16] border border-purple-500/35 p-6 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Problem Statement & Engineering Context */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 font-mono text-xs font-bold shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  LOCALIZED UTILITY TOOL
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
                  Working Interactive Demo
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Daily Milk Purchasing &amp; Household Expense Tracker
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Built to solve the common Indian household calculation problem: monthly dairy vendors use fluctuating daily quantities, skipped delivery days, and extra holiday orders, leading to manual bill disputes.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="font-bold text-white font-mono flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-purple-400" />
                  Engineering Highlights:
                </div>
                <p>
                  • Reactive state calculation with memoized formula derivations.<br />
                  • Instant edge case handling (0 skipped days, extra festival liters).<br />
                  • Tabular figures with zero layout shift during real-time adjustments.
                </p>
              </div>

              {/* Household Presets */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">Quick Test Presets for Interviewer:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleApplyPreset('standard')}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-purple-500/40 text-purple-300 text-xs font-mono transition-colors cursor-pointer"
                  >
                    Standard (1.5L @ ₹64)
                  </button>
                  <button
                    onClick={() => handleApplyPreset('student')}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
                  >
                    Single Student (0.5L @ ₹60)
                  </button>
                  <button
                    onClick={() => handleApplyPreset('family')}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
                  >
                    Large Family (3.0L @ ₹66)
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Working Interactive Mini-Calculator with Visual Fluid Meter */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-slate-950 border border-purple-500/35 p-5 sm:p-6 shadow-xl relative overflow-hidden">
                
                {/* Calculator Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Live Monthly Bill Engine</h4>
                      <span className="text-[10px] text-slate-400 font-mono">Real-time reactive calculation</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleApplyPreset('standard')}
                    className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-mono transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset
                  </button>
                </div>

                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  
                  {/* Daily Liters Input */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Daily Liters (L)</label>
                      <span className="text-sm font-bold font-mono text-purple-300 tabular-nums">{dailyLiters} L</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="10.0"
                      step="0.5"
                      value={dailyLiters}
                      onChange={(e) => {
                        cyberAudio.playHover();
                        setDailyLiters(parseFloat(e.target.value));
                      }}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>0.5 L</span>
                      <span>5.0 L</span>
                      <span>10.0 L</span>
                    </div>
                  </div>

                  {/* Price Per Liter Input */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Price per Liter (₹)</label>
                      <span className="text-sm font-bold font-mono text-purple-300 tabular-nums">₹{pricePerLiter}</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="120"
                      step="1"
                      value={pricePerLiter}
                      onChange={(e) => {
                        cyberAudio.playHover();
                        setPricePerLiter(parseInt(e.target.value));
                      }}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>₹40/L</span>
                      <span>₹80/L</span>
                      <span>₹120/L</span>
                    </div>
                  </div>

                  {/* Days in Month Switcher */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <label className="text-xs font-mono text-slate-300 font-semibold block mb-2">Billing Month Days</label>
                    <div className="grid grid-cols-3 gap-1.5 font-mono text-xs">
                      {[28, 30, 31].map((days) => (
                        <button
                          key={days}
                          onClick={() => {
                            cyberAudio.playClick();
                            setDaysInMonth(days);
                          }}
                          className={`py-1.5 rounded transition-colors cursor-pointer ${
                            daysInMonth === days
                              ? 'bg-purple-600 text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                              : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                          }`}
                        >
                          {days} Days
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Skipped / Vacation Days */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Skipped / Absent Days</label>
                      <span className="text-sm font-bold font-mono text-rose-400 tabular-nums">{skippedDays} days</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="1"
                      value={skippedDays}
                      onChange={(e) => {
                        cyberAudio.playHover();
                        setSkippedDays(parseInt(e.target.value));
                      }}
                      className="w-full accent-rose-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>0 days</span>
                      <span>7 days</span>
                      <span>15 days</span>
                    </div>
                  </div>

                </div>

                {/* Live Monthly Bill Result Box with Fluid Visual Indicator */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-950/70 via-slate-900 to-slate-950 border border-purple-500/40 relative overflow-hidden">
                  
                  {/* Subtle fluid wave level indicator in background */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-purple-500/10 transition-all duration-300 pointer-events-none"
                    style={{ height: `${calculation.fillPercent}%` }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <div>
                      <span className="text-xs font-mono text-purple-300 uppercase tracking-wider block flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5 text-purple-400" />
                        Estimated Monthly Household Bill:
                      </span>
                      <div className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums mt-1 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        ₹{calculation.totalBill.toLocaleString('en-IN')}
                      </div>
                      <span className="text-xs text-slate-400">
                        (~₹{calculation.dailyAverageCost}/day over {daysInMonth} days)
                      </span>
                    </div>

                    <div className="space-y-1 text-xs font-mono border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Delivered Days:</span>
                        <span className="text-white font-bold">{calculation.activeDays} days</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Total Liters:</span>
                        <span className="text-purple-300 font-bold">{calculation.totalLiters} L</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-slate-400">Rate:</span>
                        <span className="text-white">₹{pricePerLiter}/L</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Security & Architecture Modal / Drawer */}
      {isArchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-cyan-500/40 shadow-[0_0_60px_rgba(6,182,212,0.3)] p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-cyan-500/25">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
                    SECURITY ARCHITECTURE SPECIFICATION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  ALTIVOX Full-Stack Data &amp; Auth Pipeline
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  How React Frontend &rarr; Supabase Auth &rarr; PostgreSQL RLS enforce Zero-Trust Data Isolation
                </p>
              </div>

              <button
                onClick={() => {
                  cyberAudio.playClick();
                  setIsArchModalOpen(false);
                }}
                className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Architecture Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Steps Switcher */}
            <div className="my-6 grid grid-cols-3 gap-2 font-mono text-xs">
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveArchStep(1);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  activeArchStep === 1 
                    ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="block text-[10px] text-cyan-400 font-bold">LAYER 1</span>
                <span className="font-bold">React Frontend</span>
              </button>

              <button
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveArchStep(2);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  activeArchStep === 2 
                    ? 'bg-purple-950/80 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="block text-[10px] text-purple-400 font-bold">LAYER 2</span>
                <span className="font-bold">Supabase Auth (JWT)</span>
              </button>

              <button
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveArchStep(3);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  activeArchStep === 3 
                    ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="block text-[10px] text-emerald-400 font-bold">LAYER 3</span>
                <span className="font-bold">PostgreSQL RLS</span>
              </button>
            </div>

            {/* Active Layer Details */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
              {activeArchStep === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-cyan-300 font-mono text-sm font-bold">
                    <Code className="w-4 h-4 text-cyan-400" />
                    <span>Layer 1: React 19 Frontend Client</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    The client never holds administrative or Postgres service role keys. It only initializes the public Supabase client using public anonymized keys. User session JWTs are kept in memory and synchronized via secure storage.
                  </p>
                  <pre className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto">
{`// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Public anon keys are safe in client bundle
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: true, autoRefreshToken: true }
});`}
                  </pre>
                </div>
              )}

              {activeArchStep === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-purple-300 font-mono text-sm font-bold">
                    <Lock className="w-4 h-4 text-purple-400" />
                    <span>Layer 2: Supabase Auth &amp; Cryptographic JWT</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Upon login, Supabase returns a cryptographically signed JSON Web Token (JWT). Every query automatically attaches this token in the Authorization header. The token payload contains <code className="text-purple-300">auth.uid()</code> and role claims.
                  </p>
                  <pre className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-purple-300 overflow-x-auto">
{`// Sample Verified JWT Payload parsed by PostgreSQL
{
  "iss": "supabase",
  "sub": "b2f4c391-9e2a-4c22-b5b6-7c9e0d1f34a1",
  "aud": "authenticated",
  "role": "authenticated",
  "email": "student@ssasit.ac.in",
  "exp": 1793284000
}`}
                  </pre>
                </div>
              )}

              {activeArchStep === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-300 font-mono text-sm font-bold">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>Layer 3: PostgreSQL Row-Level Security (RLS)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Even if an attacker manipulates the client-side JavaScript or attempts direct SQL injection, PostgreSQL drops unauthorized queries at the kernel level because RLS enforces strict ownership policies.
                  </p>
                  <pre className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto">
{`-- Production PostgreSQL RLS Policy for ALTIVOX
ALTER TABLE user_saved_roadmaps ENABLE ROW LEVEL SECURITY;

-- Allow users to read and update ONLY their own rows
CREATE POLICY "Users can only access own roadmaps"
ON user_saved_roadmaps
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);`}
                  </pre>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">
                Security Hygiene: OWASP compliant · Zero client secret leakage
              </span>
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  setIsArchModalOpen(false);
                }}
                className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                Close Architecture View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
