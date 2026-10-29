import React, { useState, useRef, useEffect } from 'react';
import { Camera, ExternalLink, Sparkles, Trash2, ShieldCheck, Cpu, Globe, Radio, Lock, Unlock, Linkedin, Github } from 'lucide-react';
import { CANDIDATE_INFO, OFFICIAL_LINKS, PERMANENT_ASSETS } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberSoundEffects';
import { useOwner } from '../context/OwnerContext';

const LOCAL_STORAGE_KEY = 'daksh_portfolio_avatar_v1';

export const HolographicIdCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isOwnerMode, isPublicLocked } = useOwner();

  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [glare, setGlare] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [photoUrl, setPhotoUrl] = useState<string | null>(PERMANENT_ASSETS.profilePhoto);
  const [isHovered, setIsHovered] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Load saved photo from localStorage or permanent assets
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedPhoto) {
        setPhotoUrl(savedPhoto);
      } else if (PERMANENT_ASSETS.profilePhoto) {
        setPhotoUrl(PERMANENT_ASSETS.profilePhoto);
      }
    } catch (e) {
      console.warn('LocalStorage access error:', e);
    }
  }, []);

  // Handle Photo File Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result as string;
      if (base64String) {
        setPhotoUrl(base64String);
        cyberAudio.playSuccess();
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, base64String);
        } catch (err) {
          console.warn('Could not save to localStorage:', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    cyberAudio.playClick();
    setPhotoUrl(null);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (err) {
      console.warn(err);
    }
  };

  // Pointer Movement Calculation for 3D Tilt & Glare
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    // Calculate rotation: maximum tilt +/- 18 degrees
    const rotateY = ((x - width / 2) / (width / 2)) * 18;
    const rotateX = -((y - height / 2) / (height / 2)) * 18;

    // Calculate glare position in percentage
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.7 });

    cyberAudio.playTilt();
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
    cyberAudio.playHover();
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    // Smooth reset to neutral position
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const handleCopyRollNo = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('IT20');
    cyberAudio.playSuccess();
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  // In production lockdown, normal public visitors CANNOT upload or delete photos
  const canEditPhoto = isOwnerMode || !isPublicLocked;

  return (
    <div className="relative w-full max-w-[430px] mx-auto perspective-1000 py-6">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoUpload}
      />

      {/* 3D Holographic Outer Gyroscopic Rings */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center preserve-3d"
        style={{
          transform: `rotateX(${tilt.x * 0.4}deg) rotateY(${tilt.y * 0.4}deg)`
        }}
      >
        {/* Orbit Ring 1 (Cyan) */}
        <div className="absolute w-[440px] h-[440px] rounded-full border border-cyan-400/20 border-dashed animate-gyro-1 preserve-3d pointer-events-none shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
        </div>

        {/* Orbit Ring 2 (Violet) */}
        <div className="absolute w-[490px] h-[490px] rounded-full border border-purple-500/20 animate-gyro-2 preserve-3d pointer-events-none shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
        </div>
      </div>

      {/* Outer Glow Halo that reacts to tilt */}
      <div 
        className="absolute -inset-3 rounded-3xl blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(168,85,247,0.25) 50%, transparent 80%)',
          opacity: isHovered ? 1 : 0.45,
          transform: `translate(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px)`
        }}
      />

      {/* 3D Holographic Card Shell */}
      <div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        className="relative rounded-3xl p-[1.5px] cursor-pointer transition-transform ease-out duration-150 preserve-3d select-none group"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          background: 'linear-gradient(135deg, rgba(6,182,212,0.7) 0%, rgba(168,85,247,0.5) 50%, rgba(6,182,212,0.4) 100%)',
          boxShadow: isHovered 
            ? '0 30px 60px -15px rgba(6, 182, 212, 0.35), 0 0 40px rgba(168, 85, 247, 0.25)' 
            : '0 20px 40px -10px rgba(0, 0, 0, 0.8)'
        }}
      >
        {/* Card Body */}
        <div className="relative rounded-3xl bg-[#090d16]/95 backdrop-blur-2xl border border-cyan-500/30 p-6 overflow-hidden preserve-3d">
          
          {/* HUD Corner Reticles */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Holographic Specular Glare Overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(6, 182, 212, 0.3) 30%, rgba(168, 85, 247, 0.25) 55%, transparent 80%)`,
              mixBlendMode: 'screen'
            }}
          />

          {/* Micro Cyber Circuit Grid Lines on Card Surface */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Top Card Header Strip (Z-Depth Layer: 35px) */}
          <div 
            className="relative flex items-center justify-between pb-4 border-b border-cyan-500/25"
            style={{ transform: 'translateZ(35px)' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#06b6d4]" />
              <span className="font-mono text-xs font-bold tracking-wider text-cyan-300 uppercase flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                GDG RECRUITMENT PASS
              </span>
            </div>

            {/* Floating 3D Badge 1: ID: IT20 */}
            <button
              onClick={handleCopyRollNo}
              title="Click to copy Roll No"
              className="px-2.5 py-1 bg-cyan-950/90 border border-cyan-400/50 rounded-lg text-cyan-300 font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-900 transition-colors shadow-sm active:scale-95"
            >
              <span>ID: IT20</span>
              {copiedNotification ? (
                <span className="text-[10px] text-emerald-400 font-sans">Copied!</span>
              ) : (
                <Cpu className="w-3 h-3 text-cyan-400" />
              )}
            </button>
          </div>

          {/* Central Holographic Avatar Area (Z-Depth Layer: 55px) */}
          <div 
            className="relative my-6 flex flex-col items-center"
            style={{ transform: 'translateZ(55px)' }}
          >
            {/* Circular Glowing Avatar Frame */}
            <div className="relative group/avatar">
              {/* Dual Spinning gradient border rings */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-violet-500 to-cyan-300 animate-[spin_6s_linear_infinite] opacity-80 blur-[2px]" />
              <div className="absolute -inset-2.5 rounded-full border border-cyan-400/30 animate-[spin_10s_linear_infinite_reverse] pointer-events-none" />
              
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-300 bg-slate-900 shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center">
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt={CANDIDATE_INFO.fullName}
                    className="w-full h-full object-cover"
                    onError={() => setPhotoUrl(null)}
                  />
                ) : (
                  /* Cyberpunk Default Vector Avatar */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-[#080c14] text-cyan-400 p-2">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 text-cyan-400">
                      <circle cx="50" cy="35" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M22 82 C22 62, 38 58, 50 58 C62 58, 78 62, 78 82" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <line x1="38" y1="35" x2="62" y2="35" stroke="#a855f7" strokeWidth="2" strokeDasharray="3,2" />
                      <circle cx="43" cy="34" r="2.5" fill="#06b6d4" />
                      <circle cx="57" cy="34" r="2.5" fill="#06b6d4" />
                    </svg>
                    <span className="text-[10px] font-mono text-cyan-300 font-semibold uppercase tracking-tight">
                      DAKSH PATEL
                    </span>
                  </div>
                )}

                {/* Upload Hover Overlay - ONLY visible in Owner Mode */}
                {canEditPhoto && (
                  <div 
                    onClick={() => {
                      cyberAudio.playClick();
                      fileInputRef.current?.click();
                    }}
                    className="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 cursor-pointer"
                  >
                    <Camera className="w-6 h-6 text-cyan-300 mb-1" />
                    <span className="text-[10px] text-white font-medium">
                      {photoUrl ? 'Change Photo' : 'Upload Photo'}
                    </span>
                  </div>
                )}
              </div>

              {/* Photo Status Pill / Remove button - ONLY visible in Owner Mode */}
              {canEditPhoto && photoUrl && (
                <button
                  onClick={handleRemovePhoto}
                  title="Remove saved photo"
                  className="absolute -top-1 -right-1 p-1 bg-rose-950/90 border border-rose-500/60 rounded-full text-rose-300 hover:bg-rose-900 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Upload Action Button - ONLY rendered in Owner Mode */}
            {canEditPhoto ? (
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    cyberAudio.playClick();
                    fileInputRef.current?.click();
                  }}
                  className="px-3.5 py-1 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-400/50 rounded-full text-cyan-300 text-xs font-medium flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(6,182,212,0.25)] cursor-pointer active:scale-95"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{photoUrl ? 'Change My Photo' : 'Upload / Change My Photo'}</span>
                </button>
                {photoUrl && (
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" /> Saved
                  </span>
                )}
              </div>
            ) : (
              /* Public Deployment Mode: Read-Only Verified Status Badge */
              <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-[11px] font-mono shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-semibold">VERIFIED CANDIDATE IDENTITY</span>
              </div>
            )}

            {/* Candidate Identity */}
            <div className="mt-3 text-center">
              <h3 className="text-xl font-black text-white tracking-wide">
                {CANDIDATE_INFO.fullName}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {CANDIDATE_INFO.degree}
              </p>
              <p className="text-[11px] text-cyan-300 font-medium mt-0.5">
                {CANDIDATE_INFO.instituteShort}
              </p>
            </div>
          </div>

          {/* Floating 3D Depth Badges (Z-Depth Layer: 65px) */}
          <div 
            className="grid grid-cols-3 gap-2.5 my-4"
            style={{ transform: 'translateZ(65px)' }}
          >
            <div className="p-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-center shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <span className="block text-[10px] text-slate-400 uppercase font-mono">Roll No</span>
              <span className="text-xs font-bold text-cyan-300 font-mono">ID: IT20</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-900/90 border border-purple-500/40 text-center shadow-[0_0_12px_rgba(168,85,247,0.15)]">
              <span className="block text-[10px] text-purple-300 uppercase font-mono">Venture</span>
              <span className="text-xs font-bold text-purple-300 font-mono truncate">ALTIVOX FOUNDER</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <span className="block text-[10px] text-slate-400 uppercase font-mono">Cohort</span>
              <span className="text-xs font-bold text-emerald-300 font-mono">SSASIT &apos;26</span>
            </div>
          </div>

          {/* Holographic Security Chip & Domain Indicators (Z-Depth Layer: 40px) */}
          <div 
            className="flex items-center justify-between pt-3 border-t border-slate-800"
            style={{ transform: 'translateZ(40px)' }}
          >
            {/* Cyber Chip Graphic */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-6 rounded bg-gradient-to-r from-amber-400 to-amber-200 border border-amber-600/70 p-0.5 grid grid-cols-2 gap-0.5 shadow-inner">
                <div className="border-r border-b border-amber-700/60"></div>
                <div className="border-b border-amber-700/60"></div>
                <div className="border-r border-amber-700/60"></div>
                <div></div>
              </div>
              <div className="text-[10px] font-mono leading-tight">
                <span className="text-slate-400 block">SECURE CREDENTIAL</span>
                <span className="text-cyan-400 font-bold">SHA-256 VERIFIED</span>
              </div>
            </div>

            {/* Quick Live Link Buttons */}
            <div className="flex items-center gap-1.5">
              <a
                href={OFFICIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile (@daksh-patel)"
                className="p-1.5 rounded-lg bg-blue-950/70 border border-blue-500/40 text-blue-400 hover:bg-blue-900 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  cyberAudio.playClick();
                }}
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={OFFICIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Account (@altivox-alti)"
                className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-600/40 text-slate-200 hover:bg-slate-700 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  cyberAudio.playClick();
                }}
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={OFFICIAL_LINKS.webPlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Launch Live Platform"
                className="p-1.5 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  cyberAudio.playClick();
                }}
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a
                href={OFFICIAL_LINKS.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube @altivox_ai"
                className="p-1.5 rounded-lg bg-rose-950/70 border border-rose-500/40 text-rose-300 hover:bg-rose-900 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  cyberAudio.playClick();
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={OFFICIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @altivox_ai"
                className="p-1.5 rounded-lg bg-purple-950/70 border border-purple-500/40 text-purple-300 hover:bg-purple-900 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  cyberAudio.playClick();
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Hint */}
          <div className="mt-3 text-center">
            <span className="text-[10px] font-mono text-slate-500 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              3D Dynamic Gyroscope Active · Drag or hover to tilt
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
