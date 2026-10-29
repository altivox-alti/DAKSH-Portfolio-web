import React, { useState } from 'react';
import { Copy, Check, Globe, Youtube, Instagram, ExternalLink, Sparkles, Lock, Unlock, Code, ShieldCheck, Linkedin, Github } from 'lucide-react';
import { CANDIDATE_INFO, OFFICIAL_LINKS } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberSoundEffects';
import { useOwner } from '../context/OwnerContext';

interface FooterProps {
  onOpenPitch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPitch }) => {
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

  const { isOwnerMode, toggleOwnerMode, exportCodebaseSnippet } = useOwner();

  const handleCopyAllLinks = () => {
    cyberAudio.playSuccess();
    const textToCopy = `Candidate: Daksh Jayeshbhai Patel (Roll No: IT20)
Target: GDG on Campus SSASIT 2026 Core Recruitment
Domains: Web Developer | AI/ML | Cybersecurity
College: Shri Swami Atmanand Saraswati Institute of Technology (SSASIT), Surat

Official Verified Links:
1. LinkedIn Profile: ${OFFICIAL_LINKS.linkedin.url}
2. GitHub Account: ${OFFICIAL_LINKS.github.url}
3. Live Web Platform: ${OFFICIAL_LINKS.webPlatform.url}
4. YouTube Channel: ${OFFICIAL_LINKS.youtube.url} (@altivox_ai)
5. Instagram Account: ${OFFICIAL_LINKS.instagram.url} (@altivox_ai)`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyCodeSnippet = () => {
    cyberAudio.playSuccess();
    const snippet = exportCodebaseSnippet();
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleOpenPitch = () => {
    cyberAudio.playModalOpen();
    onOpenPitch();
  };

  return (
    <footer className="relative bg-[#05080e] border-t border-cyan-500/25 pt-14 pb-10 overflow-hidden">
      
      {/* Background cyber radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Action Banner: Copy All Links for Interviewer with HUD framing */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-900 border border-cyan-500/35 shadow-[0_0_40px_rgba(6,182,212,0.15)] mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider uppercase">
                GDG SSASIT 2026 INTERVIEWER TOOLKIT
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Reviewing Daksh&apos;s Application?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Grab all verified portfolio links, YouTube tracks, Instagram handles, and candidate metadata in one formatted clipboard snippet.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Copy All My Links Button */}
            <button
              onClick={handleCopyAllLinks}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg active:scale-95 ${
                copied
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Copied All Links to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-950" />
                  <span>Copy All My Links for Interviewer</span>
                </>
              )}
            </button>

            {/* Re-open Pitch Mode */}
            <button
              onClick={handleOpenPitch}
              onMouseEnter={() => cyberAudio.playHover()}
              className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>60s Pitch</span>
            </button>
          </div>
        </div>

        {/* 3-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Candidate Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-base font-extrabold text-white tracking-wider">
                DAKSH JAYESHBHAI PATEL
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              1st Year B.Tech IT Student (Roll No: <span className="text-cyan-300 font-mono font-bold">IT20</span>) at <span className="text-slate-300">Shri Swami Atmanand Saraswati Institute of Technology (SSASIT), Surat</span>. 
              Applying for GDG on Campus SSASIT 2026 Core Team across Web Developer, AI/ML, and Cybersecurity.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              Founder: ALTIVOX AI Media &amp; Education
            </div>
          </div>

          {/* Col 2: Navigation Anchors */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-bold">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs font-mono text-slate-400">
              <li>
                <a
                  href="#overview"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Overview &amp; 3D Card
                </a>
              </li>
              <li>
                <a
                  href="#domains"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="hover:text-cyan-400 transition-colors"
                >
                  3-Domain Proof Matrix
                </a>
              </li>
              <li>
                <a
                  href="#altivox"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="hover:text-cyan-400 transition-colors"
                >
                  ALTIVOX Hub (Alti &amp; Pix)
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects &amp; Milk Calculator
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="hover:text-cyan-400 transition-colors"
                >
                  SSASIT Coursework
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Social Channels */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-bold">
              Official Live Links &amp; Profiles
            </span>
            <div className="space-y-2">
              {/* LinkedIn */}
              <a
                href={OFFICIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playClick()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-blue-500/40 hover:border-blue-400 text-xs font-mono flex items-center justify-between group transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-slate-200 group-hover:text-blue-300">LinkedIn Profile (@daksh-patel)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400/60 group-hover:text-blue-300" />
              </a>

              {/* GitHub */}
              <a
                href={OFFICIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playClick()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-400 text-xs font-mono flex items-center justify-between group transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span className="text-slate-200 group-hover:text-white">GitHub Repos (@altivox-alti)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
              </a>

              {/* Live Web App */}
              <a
                href={OFFICIAL_LINKS.webPlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playClick()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-xs font-mono flex items-center justify-between group transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-slate-200 group-hover:text-cyan-300">Live Web App</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </a>

              {/* YouTube */}
              <a
                href={OFFICIAL_LINKS.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playClick()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 text-xs font-mono flex items-center justify-between group transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Youtube className="w-3.5 h-3.5 text-rose-500" />
                  <span className="text-slate-200 group-hover:text-rose-400">YouTube @altivox_ai</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-rose-400" />
              </a>

              {/* Instagram */}
              <a
                href={OFFICIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playClick()}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 text-xs font-mono flex items-center justify-between group transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-slate-200 group-hover:text-purple-300">Instagram @altivox_ai</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Deployment Lockdown Status & Copyright Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {CANDIDATE_INFO.fullName} · Roll No: {CANDIDATE_INFO.rollNo} · SSASIT Surat
          </div>

          {/* Deployment Lock State Pill (With Secret Toggle for Daksh: Shift+Alt+D) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleOwnerMode}
              title="Shortcut: Shift + Alt + D"
              className={`px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer border ${
                isOwnerMode
                  ? 'bg-amber-950/80 border-amber-500/50 text-amber-300'
                  : 'bg-slate-900/90 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              {isOwnerMode ? (
                <>
                  <Unlock className="w-3 h-3 text-amber-400" />
                  <span>Owner Mode: Uploads Active</span>
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span>Vercel / GitHub Protected</span>
                </>
              )}
            </button>

            {isOwnerMode && (
              <button
                onClick={() => setShowCodeModal(true)}
                className="px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-[10px] font-mono font-bold flex items-center gap-1 hover:bg-cyan-900 transition-colors cursor-pointer"
              >
                <Code className="w-3 h-3" />
                <span>Bake To Code</span>
              </button>
            )}

            <span>·</span>
            <span className="text-cyan-400 font-bold">GDG SSASIT 2026</span>
          </div>
        </div>

      </div>

      {/* Code Export Modal for Permanent Asset Config */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#090d16] border border-cyan-500/40 p-6 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                Permanent Asset Code Snippet
              </h4>
              <button
                onClick={() => setShowCodeModal(false)}
                className="text-slate-400 hover:text-white text-xs font-mono"
              >
                Close ✕
              </button>
            </div>
            <p className="text-xs text-slate-300 mb-3">
              Copy this snippet into <code className="text-cyan-300">src/data/portfolioData.ts</code> to permanently embed your uploaded photo and mascot art directly into the git repository so it deploys automatically to Vercel:
            </p>
            <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto max-h-48 mb-4">
              {exportCodebaseSnippet()}
            </pre>
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-slate-400 font-mono">
                {copiedCode ? '✓ Copied to clipboard!' : 'Ready to paste into portfolioData.ts'}
              </span>
              <button
                onClick={handleCopyCodeSnippet}
                className="px-4 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedCode ? 'Copied!' : 'Copy Code Snippet'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
