import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

interface LoadingScreenProps {
  text?: string;
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  text = 'Loading...', 
  onComplete 
}) => {
  const { progress, active } = useProgress();
  const [isVisible, setIsVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!active && progress === 100) {
      setIsComplete(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 800);
    }
  }, [active, progress, onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
        isComplete ? 'opacity-0 backdrop-blur-0' : 'opacity-100 backdrop-blur-sm'
      }`}
      style={{
        background: `linear-gradient(135deg, 
          rgba(15, 23, 42, 0.95) 0%, 
          rgba(30, 41, 59, 0.95) 50%, 
          rgba(51, 65, 85, 0.95) 100%)`
      }}
    >
      <div className="text-center relative">
        {/* Animated background rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border border-blue-500/20 rounded-full animate-ping"></div>
          <div className="absolute w-24 h-24 border border-cyan-400/30 rounded-full animate-pulse"></div>
          <div className="absolute w-16 h-16 border-2 border-blue-400/40 rounded-full animate-bounce"></div>
        </div>

        {/* Main loading content */}
        <div className="relative z-10 bg-slate-900/60 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-md">
          {/* 3D-style spinner */}
          <div className="mb-8 relative">
            <div className="w-16 h-16 mx-auto relative">
              <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-cyan-400 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-2 border-transparent border-t-violet-400 border-l-pink-400 rounded-full animate-spin animation-delay-75"></div>
              <div className="absolute inset-4 border border-transparent border-t-emerald-400 rounded-full animate-spin animation-delay-150"></div>
            </div>
          </div>
          
          {/* Loading text with glow effect */}
          <h2 className="text-white text-2xl mb-6 font-light tracking-wider drop-shadow-lg">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {text}
            </span>
          </h2>
          
          {/* Progress bar with gradient */}
          <div className="w-80 bg-slate-800/80 rounded-full h-3 mx-auto mb-4 border border-slate-600/50">
            <div 
              className="h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #ec4899)'
              }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Progress percentage with animation */}
          <div className="flex justify-between items-center text-sm">
            <p className="text-slate-400">
              {Math.round(progress)}%
            </p>
            <p className="text-slate-500 animate-pulse">
              {active ? 'Loading assets...' : 'Almost ready!'}
            </p>
          </div>

          {/* Loading dots animation */}
          <div className="flex justify-center mt-4 space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-75"></div>
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce animation-delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;