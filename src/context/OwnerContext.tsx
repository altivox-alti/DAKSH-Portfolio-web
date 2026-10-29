import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERMANENT_ASSETS } from '../data/portfolioData';
import { cyberAudio } from '../utils/cyberSoundEffects';

interface OwnerContextType {
  isOwnerMode: boolean;
  isPublicLocked: boolean;
  toggleOwnerMode: () => void;
  unlockOwnerMode: () => void;
  lockPublicMode: () => void;
  exportCodebaseSnippet: () => string;
}

const OwnerContext = createContext<OwnerContextType | undefined>(undefined);

export const OwnerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOwnerMode, setIsOwnerMode] = useState(false);
  const isPublicLocked = PERMANENT_ASSETS.isPublicDeploymentLocked;

  // Keyboard shortcut listener: Shift + Alt + D to toggle owner mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.altKey && (e.key === 'D' || e.key === 'd')) {
        e.preventDefault();
        setIsOwnerMode((prev) => {
          const next = !prev;
          cyberAudio.playSuccess();
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleOwnerMode = () => {
    cyberAudio.playClick();
    setIsOwnerMode((prev) => !prev);
  };

  const unlockOwnerMode = () => {
    cyberAudio.playSuccess();
    setIsOwnerMode(true);
  };

  const lockPublicMode = () => {
    cyberAudio.playClick();
    setIsOwnerMode(false);
  };

  const exportCodebaseSnippet = () => {
    const dakshPhoto = localStorage.getItem('daksh_portfolio_avatar_v1') || PERMANENT_ASSETS.profilePhoto || '';
    const altiPhoto = localStorage.getItem('altivox_alti_photo_v1') || PERMANENT_ASSETS.altiPhoto || '';
    const pixPhoto = localStorage.getItem('altivox_pix_photo_v1') || PERMANENT_ASSETS.pixPhoto || '';

    return `export const PERMANENT_ASSETS = {
  isPublicDeploymentLocked: true,
  profilePhoto: ${dakshPhoto ? `"${dakshPhoto}"` : 'null'},
  altiPhoto: ${altiPhoto ? `"${altiPhoto}"` : 'null'},
  pixPhoto: ${pixPhoto ? `"${pixPhoto}"` : 'null'},
};`;
  };

  return (
    <OwnerContext.Provider
      value={{
        isOwnerMode,
        isPublicLocked,
        toggleOwnerMode,
        unlockOwnerMode,
        lockPublicMode,
        exportCodebaseSnippet
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwner = (): OwnerContextType => {
  const context = useContext(OwnerContext);
  if (!context) {
    throw new Error('useOwner must be used within an OwnerProvider');
  }
  return context;
};
