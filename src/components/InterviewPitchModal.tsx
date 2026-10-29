import React, { useEffect } from 'react';
import { X, Sparkles, Terminal, Shield, Globe, Award, CheckCircle2, Linkedin, Github } from 'lucide-react';
import { CANDIDATE_INFO, INTERVIEW_PITCH, OFFICIAL_LINKS } from '../data/portfolioData';

interface InterviewPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InterviewPitchModal: React.FC<InterviewPitchModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090d16] border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Tag & Close Button */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-cyan-500/20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
                EXECUTIVE CANDIDATE BRIEF
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400 font-mono">60s Quick Read</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {INTERVIEW_PITCH.headline}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors shrink-0"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Candidate Bio Snippet */}
        <div className="my-5 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-white font-bold text-sm">
              {CANDIDATE_INFO.fullName} (Roll No: {CANDIDATE_INFO.rollNo})
            </div>
            <div className="text-xs text-cyan-300/80">
              {CANDIDATE_INFO.degree} · {CANDIDATE_INFO.instituteShort}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-semibold">
              Recruitment: GDG 2026
            </span>
          </div>
        </div>

        {/* Core Rationale */}
        <div className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          <p className="font-medium text-slate-200">
            &quot;{INTERVIEW_PITCH.summary}&quot;
          </p>
        </div>

        {/* The 3 Connecting Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/25">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-3">
              <Globe className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">
              1. Web Dev
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              {INTERVIEW_PITCH.pillars[0].desc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/25">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">
              2. Applied AI / ML
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              {INTERVIEW_PITCH.pillars[1].desc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/25">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-3">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">
              3. Cybersecurity
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              {INTERVIEW_PITCH.pillars[2].desc}
            </p>
          </div>
        </div>

        {/* Concrete GDG SSASIT 2026 Commitment */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-900 border border-cyan-500/30 mb-6">
          <div className="flex items-center gap-2 mb-2 text-cyan-300 font-bold text-xs uppercase font-mono">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>How I Will Directly Benefit GDG on Campus SSASIT</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-normal">
            {INTERVIEW_PITCH.gdgCommitment}
          </p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Full-stack event portals and live hackathon scoring</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>Hands-on Google GenAI & Gemini masterclasses</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Postgres RLS & secure web development hygiene</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>ALTIVOX video pipeline for chapter event promos</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <a
              href={OFFICIAL_LINKS.webPlatform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Test Live App</span>
            </a>
            <a
              href={OFFICIAL_LINKS.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white text-xs font-mono transition-colors inline-flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href={OFFICIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-sky-300 border border-[#0077b5]/40 text-xs font-mono transition-colors inline-flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={OFFICIAL_LINKS.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-red-400 text-slate-300 hover:text-white text-xs font-medium transition-colors"
            >
              YouTube
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-medium transition-colors"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
