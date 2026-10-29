/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DomainProofMatrix } from './components/DomainProofMatrix';
import { AltivoxHub } from './components/AltivoxHub';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { Footer } from './components/Footer';
import { InterviewPitchModal } from './components/InterviewPitchModal';
import { ParticleConstellation } from './components/ParticleConstellation';
import { ArrowUp } from 'lucide-react';
import { cyberAudio } from './utils/cyberSoundEffects';
import { OwnerProvider } from './context/OwnerContext';

export default function App() {
  const [isPitchOpen, setIsPitchOpen] = useState(false);

  const scrollToTop = () => {
    cyberAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <OwnerProvider>
      <div className="min-h-screen bg-[#080c14] text-slate-100 cyber-grid ambient-radial-glow selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
        
        {/* 3D Interactive Particle Constellation Canvas */}
        <ParticleConstellation />

        {/* 60s Interview Pitch Modal */}
        <InterviewPitchModal
          isOpen={isPitchOpen}
          onClose={() => setIsPitchOpen(false)}
        />

        {/* Sticky Top Navigation Bar with Audio Toggle */}
        <Navbar onOpenPitch={() => setIsPitchOpen(true)} />

        {/* Main Single-Page Content Flow */}
        <main className="relative z-10">
          {/* Hero Section with Split Layout & 3D Tilt Card + Gyroscopic Rings */}
          <HeroSection onOpenPitch={() => setIsPitchOpen(true)} />

          {/* 3-Domain Proof Matrix (Web Dev, AI/ML, Cybersecurity) */}
          <DomainProofMatrix />

          {/* ALTIVOX Creator Hub (YouTube, Instagram, Mascots Alti & Pix) */}
          <AltivoxHub />

          {/* Featured Projects & Live Demos (Altivox Architecture & Milk Calculator) */}
          <ProjectsSection />

          {/* Education & SSASIT Semester 1 Coursework */}
          <EducationSection />
        </main>

        {/* Footer with "Copy All My Links" Toolkit */}
        <Footer onOpenPitch={() => setIsPitchOpen(true)} />

        {/* Floating Quick Scroll to Top button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => cyberAudio.playHover()}
          title="Scroll to Top"
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </OwnerProvider>
  );
}
