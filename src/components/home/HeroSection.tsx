import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { LogoMark } from '../brand/LogoMark';
import { cn } from '../../lib/utils';

export const HeroSection: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && /\.(dwg|dxf|pdf)$/i.test(file.name)) {
      // Handle file
      console.log('Dropped file:', file.name);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && /\.(dwg|dxf|pdf)$/i.test(file.name)) {
      // Handle file
      console.log('Selected file:', file.name);
    }
  };

  return (
    <section className="min-h-screen bg-base grid grid-cols-1 lg:grid-cols-2 items-center px-4 lg:px-8 py-20 lg:py-32 overflow-hidden relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(59,130,246,0.03) 20px,
            rgba(59,130,246,0.03) 21px
          ),
          repeating-linear-gradient(
            transparent,
            transparent 20px,
            rgba(59,130,246,0.03) 20px,
            rgba(59,130,246,0.03) 21px
          )
        `
      }} />

      {/* Radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl lg:translate-x-32" />

      {/* Left column - Text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 max-w-lg lg:max-w-md"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Badge variant="accent" size="sm" className="font-mono tracking-wider">
            ✦ Trusted by 2,400+ engineers
          </Badge>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-[-0.03em] font-black"
        >
          Open any DWG, DXF, or PDF<span className="text-accent block">— instantly.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl leading-relaxed text-text-secondary max-w-md"
        >
          No installation. No plugins. Measure distances, manage layers, and share drawings — all in your browser.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" onClick={handleOpenFile} leftIcon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          }>
            Open a File
          </Button>
          <Button variant="ghost" size="lg" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} leftIcon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.765z" />
            </svg>
          }>
            Watch demo
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3 text-sm text-text-secondary font-mono"
        >
          <span>No credit card</span>
          <span className="text-text-muted">·</span>
          <span>Free to start</span>
          <span className="text-text-muted">·</span>
          <span>Works on any device</span>
        </motion.div>
      </motion.div>

      {/* Right column - CAD Mockup */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="justify-self-end"
      >
        <div 
          className="relative w-full max-w-md lg:max-w-lg h-80 lg:h-96 mx-auto rotate-[-2deg] hover:rotate-0 transition-all duration-400 cursor-default group"
          style={{
            backgroundColor: '#14171F',
            boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.75)',
          }}
        >
          {/* Top bar */}
          <div className="h-10 bg-[#0D0F14] border-b border-[#1E2229] px-3 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="flex-1 text-xs font-mono text-[#A0A8B4] truncate ml-2">
              mechanical_assembly.dwg
            </div>
            <div className="text-xs font-mono text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent/30">
              142%
            </div>
          </div>

          {/* Canvas area */}
          <div className="flex-1 bg-[#0D0F14] relative overflow-hidden">
            <svg viewBox="0 0 400 240" className="w-full h-full absolute inset-0">
              {/* Grid */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8ECF4" strokeOpacity="0.2" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="240" fill="url(#grid)" />

              {/* Crosshair */}
              <line x1="200" y1="50" x2="200" y2="190" stroke="#E8ECF4" strokeOpacity="0.2" strokeWidth="0.5" />
              <line x1="160" y1="130" x2="240" y2="130" stroke="#E8ECF4" strokeOpacity="0.2" strokeWidth="0.5" />

              {/* Main rectangle */}
              <rect x="60" y="40" width="280" height="180" rx="2" fill="none" stroke="#3B82F6" strokeWidth="1" />

              {/* Bolt holes */}
              <circle cx="110" cy="90" r="20" fill="none" stroke="#3B82F6" strokeWidth="0.75" />
              <circle cx="290" cy="90" r="20" fill="none" stroke="#3B82F6" strokeWidth="0.75" />
              <circle cx="110" cy="170" r="20" fill="none" stroke="#3B82F6" strokeWidth="0.75" />
              <circle cx="290" cy="170" r="20" fill="none" stroke="#3B82F6" strokeWidth="0.75" />

              {/* Center circle */}
              <circle cx="200" cy="130" r="50" fill="none" stroke="#3B82F6" strokeWidth="1" />

              {/* Dimension line animated */}
              <defs>
                <line id="dim-line" x1="70" y1="230" x2="350" y2="230" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="5" />
                <animate 
                  xlink:href="#dim-line" 
                  attributeName="stroke-dashoffset" 
                  from="0" to="10" 
                  dur="1s" 
                  repeatCount="indefinite"
                />
              </defs>

              <use href="#dim-line" />
              <line x1="70" y1="225" x2="70" y2="235" stroke="#F59E0B" strokeWidth="0.5" />
              <line x1="350" y1="225" x2="350" y2="235" stroke="#F59E0B" strokeWidth="0.5" />
              <polygon points="65,230 75,228 75,232" fill="#F59E0B" />
              <polygon points="355,230 345,228 345,232" fill="#F59E0B" />
              <text x="200" y="245" fontFamily="monospace" fontSize="10" fill="#3B82F6" textAnchor="middle" fontWeight="600">285.50 mm</text>

              {/* Selection highlight */}
              <rect x="60" y="40" width="280" height="180" rx="2" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="8 4" opacity="0.8" />
            </svg>
          </div>

          {/* Bottom status bar */}
          <div className="h-6 bg-[#0D0F14] border-t border-[#1E2229] px-3 flex items-center text-xs font-mono text-[#A0A8B4]">
            X: 142.50 &nbsp; Y: 89.30 &nbsp; | &nbsp; Snap: ON &nbsp; | &nbsp; 1:1
          </div>
        </div>
      </motion.div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".dwg,.dxf,.pdf"
        className="hidden"
        onChange={handleFileSelect}
      />
    </section>
  );
};
