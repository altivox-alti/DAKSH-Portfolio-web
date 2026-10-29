import React, { useState, useEffect } from 'react';
import { Globe, Youtube, Instagram, Sparkles, Volume2, VolumeX, Linkedin, Github } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberSoundEffects';

interface NavbarProps {
  onOpenPitch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPitch }) => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(cyberAudio.isMuted());
  }, []);

  const handleToggleAudio = () => {
    const newMuted = cyberAudio.toggleMute();
    setIsMuted(newMuted);
  };

  const handleOpenPitch = () => {
    cyberAudio.playModalOpen();
    onOpenPitch();
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#080c14]/90 border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand Lockup with Pulsing cyan dot + DAKSH.IT20 + badge GDG SSASIT 2026 */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#06b6d4]" />
          <a
            href="#overview"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="font-mono text-sm sm:text-base font-extrabold tracking-tight text-white hover:text-cyan-400 transition-colors"
          >
            DAKSH.IT20
          </a>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            GDG SSASIT 2026
          </span>
        </div>

        {/* Center: Clean Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-mono text-slate-400">
          <a
            href="#overview"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            Overview
          </a>
          <a
            href="#domains"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            3-Domain Proof
          </a>
          <a
            href="#altivox"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            ALTIVOX Hub
          </a>
          <a
            href="#projects"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            Projects &amp; Calculator
          </a>
          <a
            href="#education"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            Academics
          </a>
        </nav>

        {/* Right: Audio Synthesizer Toggle + 60s Pitch Mode CTA + Social Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Cyber Audio Mute / Unmute Toggle with Animated Equalizer Bars */}
          <button
            onClick={handleToggleAudio}
            title={isMuted ? 'Unmute Cyber SFX' : 'Mute Cyber SFX'}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400/60 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95"
            aria-label="Toggle Cyber Sound Effects"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline text-[11px] text-slate-500">Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                {/* Micro animated audio equalizer waves */}
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-1.5 bg-cyan-400 animate-[pulse_0.8s_ease-in-out_infinite]" />
                  <span className="w-0.5 h-3 bg-cyan-300 animate-[pulse_0.6s_ease-in-out_infinite_0.2s]" />
                  <span className="w-0.5 h-2 bg-purple-400 animate-[pulse_0.7s_ease-in-out_infinite_0.4s]" />
                </div>
                <span className="hidden sm:inline text-[11px] text-cyan-300 font-semibold">Sound On</span>
              </>
            )}
          </button>

          {/* 60s Interview Pitch Mode Button */}
          <button
            onClick={handleOpenPitch}
            onMouseEnter={() => cyberAudio.playHover()}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-tight flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(6,182,212,0.35)] whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>60s Interview Pitch Mode</span>
          </button>

          {/* Direct Social Buttons (Target blank) */}
          <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
            {/* LinkedIn Profile */}
            <a
              href={OFFICIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile (@daksh-patel)"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="p-1.5 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-blue-950/60 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>

            {/* GitHub Account */}
            <a
              href={OFFICIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Account (@altivox-alti)"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4 text-slate-200" />
            </a>

            {/* Live Web Platform */}
            <a
              href={OFFICIAL_LINKS.webPlatform.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Altivox Live Web App (altivox-ai-ten.vercel.app)"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="p-1.5 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/50 transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>

            {/* YouTube */}
            <a
              href={OFFICIAL_LINKS.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Official YouTube (@altivox_ai)"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="p-1.5 rounded-lg text-slate-300 hover:text-rose-400 hover:bg-rose-950/50 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href={OFFICIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Official Instagram (@altivox_ai)"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="p-1.5 rounded-lg text-slate-300 hover:text-purple-400 hover:bg-purple-950/50 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};
