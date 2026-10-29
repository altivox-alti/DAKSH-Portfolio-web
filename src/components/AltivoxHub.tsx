import React, { useState, useRef, useEffect } from 'react';
import { Youtube, Instagram, ExternalLink, Play, Sparkles, Cpu, Zap, Wrench, GitBranch, Camera, Trash2, CheckCircle2, RefreshCw, ShieldCheck } from 'lucide-react';
import { ALTIVOX_SERIES, OFFICIAL_LINKS, PERMANENT_ASSETS } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberSoundEffects';
import { useOwner } from '../context/OwnerContext';

const ALTI_STORAGE_KEY = 'altivox_alti_photo_v1';
const PIX_STORAGE_KEY = 'altivox_pix_photo_v1';

export const AltivoxHub: React.FC = () => {
  const [activeSeries, setActiveSeries] = useState<string>('ai-decoded');
  const [altiPhotoUrl, setAltiPhotoUrl] = useState<string | null>(PERMANENT_ASSETS.altiPhoto);
  const [pixPhotoUrl, setPixPhotoUrl] = useState<string | null>(PERMANENT_ASSETS.pixPhoto);

  const altiInputRef = useRef<HTMLInputElement>(null);
  const pixInputRef = useRef<HTMLInputElement>(null);

  const { isOwnerMode, isPublicLocked } = useOwner();

  // Load saved mascot photos from localStorage or permanent assets
  useEffect(() => {
    try {
      const savedAlti = localStorage.getItem(ALTI_STORAGE_KEY);
      if (savedAlti) {
        setAltiPhotoUrl(savedAlti);
      } else if (PERMANENT_ASSETS.altiPhoto) {
        setAltiPhotoUrl(PERMANENT_ASSETS.altiPhoto);
      }

      const savedPix = localStorage.getItem(PIX_STORAGE_KEY);
      if (savedPix) {
        setPixPhotoUrl(savedPix);
      } else if (PERMANENT_ASSETS.pixPhoto) {
        setPixPhotoUrl(PERMANENT_ASSETS.pixPhoto);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, []);

  // Handle Alti Photo Upload
  const handleAltiUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setAltiPhotoUrl(result);
        cyberAudio.playSuccess();
        try {
          localStorage.setItem(ALTI_STORAGE_KEY, result);
        } catch (err) {
          console.warn('Failed to save Alti photo:', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle Pix Photo Upload
  const handlePixUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPixPhotoUrl(result);
        cyberAudio.playSuccess();
        try {
          localStorage.setItem(PIX_STORAGE_KEY, result);
        } catch (err) {
          console.warn('Failed to save Pix photo:', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAlti = (e: React.MouseEvent) => {
    e.stopPropagation();
    cyberAudio.playClick();
    setAltiPhotoUrl(null);
    try {
      localStorage.removeItem(ALTI_STORAGE_KEY);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleRemovePix = (e: React.MouseEvent) => {
    e.stopPropagation();
    cyberAudio.playClick();
    setPixPhotoUrl(null);
    try {
      localStorage.removeItem(PIX_STORAGE_KEY);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleSelectSeries = (id: string) => {
    cyberAudio.playClick();
    setActiveSeries(id);
  };

  const canEditMascots = isOwnerMode || !isPublicLocked;

  return (
    <section id="altivox" className="py-16 md:py-24 relative border-t border-cyan-500/15">
      {/* Hidden File Inputs for Alti and Pix */}
      <input
        ref={altiInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleAltiUpload}
      />
      <input
        ref={pixInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handlePixUpload}
      />

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-r from-purple-500/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>FOUNDER &amp; CONTENT CREATOR ENGINE · 4 SIGNATURE TRACKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ALTIVOX Creator Hub
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded by <span className="text-white font-semibold">Daksh Patel</span> to make high-level AI breakthroughs, developer productivity hacks, and modern web architectures intuitive for students through visual storytelling.
          </p>
        </div>

        {/* Brand Showcase with Mascots Alti & Pix */}
        <div className="rounded-3xl bg-[#090d16] border border-purple-500/30 p-6 sm:p-8 lg:p-10 mb-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* HUD Corner Reticles */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Top Mascot Bar - Upload buttons rendered ONLY in Owner Mode */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Official Mascot Personalities: Alti &amp; Pix
              </span>
            </div>

            {canEditMascots ? (
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    cyberAudio.playClick();
                    altiInputRef.current?.click();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-medium flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{altiPhotoUrl ? 'Change Alti Photo' : 'Upload Alti Photo'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    cyberAudio.playClick();
                    pixInputRef.current?.click();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-purple-950/80 hover:bg-purple-900 border border-purple-400/40 text-purple-300 text-xs font-mono font-medium flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  <Camera className="w-3.5 h-3.5 text-purple-400" />
                  <span>{pixPhotoUrl ? 'Change Pix Photo' : 'Upload Pix Photo'}</span>
                </button>

                {(altiPhotoUrl || pixPhotoUrl) && (
                  <button
                    type="button"
                    onClick={() => {
                      cyberAudio.playClick();
                      setAltiPhotoUrl(null);
                      setPixPhotoUrl(null);
                      try {
                        localStorage.removeItem(ALTI_STORAGE_KEY);
                        localStorage.removeItem(PIX_STORAGE_KEY);
                      } catch (e) {
                        console.warn(e);
                      }
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
                    title="Reset to 3D Mascot Vectors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span className="hidden sm:inline">Reset</span>
                  </button>
                )}
              </div>
            ) : (
              /* Public Deployment Mode: Read-Only Official Brand Status */
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-purple-950/70 border border-purple-400/40 text-purple-300 text-[11px] font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <span>OFFICIAL ALTIVOX MASCOTS</span>
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Mascot Showcase Display (Read-Only on Public Deployment) */}
            <div className="lg:col-span-6 flex flex-col items-center sm:flex-row justify-center gap-6 p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#080c14] border border-cyan-500/30 relative shadow-inner">
              
              {/* Mascot 1: Alti (The Cyan AI Brain) */}
              <div 
                className={`flex flex-col items-center text-center relative ${canEditMascots ? 'cursor-pointer group' : ''}`}
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => {
                  if (canEditMascots) {
                    cyberAudio.playClick();
                    altiInputRef.current?.click();
                  }
                }}
              >
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Glowing halo */}
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/50 transition-all duration-300" />
                  
                  {altiPhotoUrl ? (
                    /* Custom Uploaded Alti Photo */
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform duration-300 bg-slate-950">
                      <img
                        src={altiPhotoUrl}
                        alt="Alti Mascot"
                        className="w-full h-full object-cover"
                        onError={() => setAltiPhotoUrl(null)}
                      />
                      {canEditMascots && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-cyan-300 text-[10px] font-mono">
                          <Camera className="w-5 h-5 mb-1" />
                          <span>Change Photo</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Default Alti Robot Visual SVG */
                    <div className="w-32 h-36 relative">
                      <svg viewBox="0 0 120 130" className="w-full h-full drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-transform duration-300 group-hover:scale-110">
                        {/* Head Antenna */}
                        <line x1="60" y1="28" x2="60" y2="12" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="60" cy="10" r="6" fill="#38bdf8" />
                        <circle cx="60" cy="10" r="9" fill="none" stroke="#06b6d4" strokeWidth="1.5" className="animate-ping" />

                        {/* Robot Head Body */}
                        <rect x="22" y="28" width="76" height="56" rx="20" fill="#0f172a" stroke="#06b6d4" strokeWidth="3" />
                        
                        {/* Visor Screen */}
                        <rect x="30" y="38" width="60" height="34" rx="10" fill="#020617" stroke="#38bdf8" strokeWidth="1.5" />
                        
                        {/* Glowing Cyan Eyes */}
                        <ellipse cx="45" cy="54" rx="6" ry="7" fill="#06b6d4" />
                        <circle cx="47" cy="52" r="2" fill="#ffffff" />
                        <ellipse cx="75" cy="54" rx="6" ry="7" fill="#06b6d4" />
                        <circle cx="77" cy="52" r="2" fill="#ffffff" />

                        {/* Friendly Smile Indicator */}
                        <path d="M52 64 Q60 69 68 64" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

                        {/* Torso & Collar */}
                        <path d="M38 86 L32 110 Q60 120 88 110 L82 86 Z" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
                        <rect x="52" y="94" width="16" height="12" rx="3" fill="#0284c7" />
                        <circle cx="60" cy="100" r="3" fill="#ffffff" />
                      </svg>
                      
                      {canEditMascots && (
                        <div className="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-cyan-300 text-[10px] font-mono">
                          <Camera className="w-5 h-5 mb-1" />
                          <span>Upload Photo</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Remove custom Alti button - ONLY in Owner Mode */}
                  {canEditMascots && altiPhotoUrl && (
                    <button
                      onClick={handleRemoveAlti}
                      title="Remove Alti Photo"
                      className="absolute -top-1 -right-1 p-1 bg-rose-950/90 border border-rose-500/60 rounded-full text-rose-300 hover:bg-rose-900 transition-colors z-20 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="mt-2">
                  <span className="font-extrabold text-white text-sm font-mono tracking-wider flex items-center justify-center gap-1">
                    ALTI
                    <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/90 px-1.5 py-0.5 rounded border border-cyan-400/40 shadow-xs">AI LEAD</span>
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">The Technical Guide</p>
                </div>
              </div>

              {/* Separator / Energy Spark */}
              <div className="hidden sm:flex flex-col items-center justify-center text-slate-600">
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                <span className="text-[10px] font-mono mt-1 text-slate-400">&amp;</span>
              </div>

              {/* Mascot 2: Pix (The Purple Creative Droid) */}
              <div 
                className={`flex flex-col items-center text-center relative ${canEditMascots ? 'cursor-pointer group' : ''}`}
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => {
                  if (canEditMascots) {
                    cyberAudio.playClick();
                    pixInputRef.current?.click();
                  }
                }}
              >
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Glowing halo */}
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/50 transition-all duration-300" />

                  {pixPhotoUrl ? (
                    /* Custom Uploaded Pix Photo */
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform duration-300 bg-slate-950">
                      <img
                        src={pixPhotoUrl}
                        alt="Pix Mascot"
                        className="w-full h-full object-cover"
                        onError={() => setPixPhotoUrl(null)}
                      />
                      {canEditMascots && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-purple-300 text-[10px] font-mono">
                          <Camera className="w-5 h-5 mb-1" />
                          <span>Change Photo</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Default Pix Droid Visual SVG */
                    <div className="w-32 h-36 relative">
                      <svg viewBox="0 0 120 130" className="w-full h-full drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-transform duration-300 group-hover:scale-110">
                        {/* Dual Wing Antennas */}
                        <line x1="42" y1="28" x2="30" y2="12" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="28" cy="10" r="4.5" fill="#c084fc" />
                        <line x1="78" y1="28" x2="90" y2="12" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="92" cy="10" r="4.5" fill="#c084fc" />

                        {/* Sleek Droid Body */}
                        <circle cx="60" cy="58" r="36" fill="#0f172a" stroke="#a855f7" strokeWidth="3" />
                        
                        {/* Glowing Purple Panoramic Visor */}
                        <rect x="32" y="44" width="56" height="26" rx="12" fill="#020617" stroke="#c084fc" strokeWidth="1.5" />

                        {/* Creative Sensor Eyes */}
                        <circle cx="48" cy="57" r="5" fill="#a855f7" />
                        <circle cx="49" cy="55" r="1.5" fill="#ffffff" />
                        <circle cx="72" cy="57" r="5" fill="#a855f7" />
                        <circle cx="73" cy="55" r="1.5" fill="#ffffff" />

                        {/* Floating Thruster Base */}
                        <ellipse cx="60" cy="100" rx="16" ry="6" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
                        <polygon points="52,106 68,106 60,118" fill="#c084fc" className="animate-pulse" />
                      </svg>

                      {canEditMascots && (
                        <div className="absolute inset-0 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-purple-300 text-[10px] font-mono">
                          <Camera className="w-5 h-5 mb-1" />
                          <span>Upload Photo</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Remove custom Pix button - ONLY in Owner Mode */}
                  {canEditMascots && pixPhotoUrl && (
                    <button
                      onClick={handleRemovePix}
                      title="Remove Pix Photo"
                      className="absolute -top-1 -right-1 p-1 bg-rose-950/90 border border-rose-500/60 rounded-full text-rose-300 hover:bg-rose-900 transition-colors z-20 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="mt-2">
                  <span className="font-extrabold text-white text-sm font-mono tracking-wider flex items-center justify-center gap-1">
                    PIX
                    <span className="text-[10px] text-purple-300 font-bold bg-purple-950/90 px-1.5 py-0.5 rounded border border-purple-400/40 shadow-xs">CREATIVE</span>
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">The Visual Storyteller</p>
                </div>
              </div>

            </div>

            {/* Right: Mascot Story & Educational Mission */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-block px-2.5 py-1 rounded bg-slate-900 border border-purple-500/40 text-purple-300 font-mono text-xs font-semibold shadow-xs">
                  Original 3D Animated Mascots
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Official Characters
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Meet Alti &amp; Pix: The Visual Storytellers
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than dry terminal text, Daksh engineered <strong className="text-cyan-300">Alti</strong> and <strong className="text-purple-300">Pix</strong> to host every episode of ALTIVOX. Alti translates complex mathematics into intuitive real-world metaphors, while Pix visualizes data transformations in real time.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-xs font-bold text-white block">Student Friendly</span>
                  <span className="text-[11px] text-slate-400">Zero jargon gatekeeping</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-xs font-bold text-white block">Applied Demos</span>
                  <span className="text-[11px] text-slate-400">Live code &amp; GitHub repos</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Two Prominent Interactive Cards: YouTube & Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          
          {/* Card 1: Official YouTube Channel */}
          <div className="rounded-2xl bg-gradient-to-br from-[#12080c] via-[#090d16] to-[#090d16] border border-rose-500/40 p-6 sm:p-8 flex flex-col justify-between hover:border-rose-400/70 transition-all duration-300 shadow-xl group relative overflow-hidden">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)] group-hover:scale-105 transition-transform">
                  <Youtube className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-[11px] font-mono text-rose-300 font-semibold shadow-xs">
                  Long-form &amp; Masterclasses
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Official YouTube Channel</span>
                <h3 className="text-2xl font-black text-white group-hover:text-rose-400 transition-colors">
                  ALTIVOX AI (@altivox_ai)
                </h3>
              </div>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                In-depth video tutorials on transformers, modern web development with React &amp; Supabase, AI API pipelines, and engineering productivity tools.
              </p>

              {/* YouTube Highlights */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Play className="w-3.5 h-3.5 text-rose-500" /> 4 Signature Tracks
                </span>
                <span className="text-slate-600">·</span>
                <span>Surat, Gujarat</span>
              </div>
            </div>

            {/* Direct Channel Link */}
            <a
              href={OFFICIAL_LINKS.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm tracking-tight flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(225,29,72,0.35)] active:scale-[0.98]"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe to @altivox_ai on YouTube</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Card 2: Official Instagram Account */}
          <div className="rounded-2xl bg-gradient-to-br from-[#120814] via-[#090d16] to-[#090d16] border border-purple-500/40 p-6 sm:p-8 flex flex-col justify-between hover:border-purple-400/70 transition-all duration-300 shadow-xl group relative overflow-hidden">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-[11px] font-mono text-purple-300 font-semibold shadow-xs">
                  Tech Reels &amp; Byte-Sized AI
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Official Instagram Account</span>
                <h3 className="text-2xl font-black text-white group-hover:text-purple-400 transition-colors">
                  @altivox_ai
                </h3>
              </div>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Fast-paced 60-second tech carousels and reels covering prompt templates, quick Git workflows, emerging developer tools, and campus tech insights.
              </p>

              {/* Instagram Highlights */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Daily AI Reels
                </span>
                <span className="text-slate-600">·</span>
                <span>SSASIT Campus Community</span>
              </div>
            </div>

            {/* Direct Instagram Link */}
            <a
              href={OFFICIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="mt-6 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-sm tracking-tight flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)] active:scale-[0.98]"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @altivox_ai on Instagram</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

        </div>

        {/* 4 Signature Series Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Content Architecture</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">The 4 Signature Series</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">Curated Tech Education Tracks</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ALTIVOX_SERIES.map((series) => {
              const isSelected = activeSeries === series.id;
              return (
                <div
                  key={series.id}
                  onClick={() => handleSelectSeries(series.id)}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected 
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
                      : 'bg-[#090d16] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-xs">
                      {series.id === 'ai-decoded' && <Cpu className="w-4 h-4" />}
                      {series.id === 'sunday-express' && <Zap className="w-4 h-4" />}
                      {series.id === 'one-problem-one-solution' && <Wrench className="w-4 h-4" />}
                      {series.id === 'github-hacks' && <GitBranch className="w-4 h-4" />}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 font-semibold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                      {series.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {series.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {series.focus}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>Explore Track</span>
                    <Play className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
