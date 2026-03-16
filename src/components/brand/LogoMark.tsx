import React from 'react';
import { BRAND_COLORS } from './BrandColors';
import type { BrandColor } from './BrandColors';

interface LogoMarkProps {
  size?: number;
  color?: string;
  className?: string;
}

const LogoMark: React.FC<LogoMarkProps> = ({ size = 32, color = BRAND_COLORS.accent, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="CadViewer Pro Logo Mark"
    >
      {/* Outer square frame */}
      <rect x="10" y="10" width="80" height="80" rx="2" fill="none" stroke={color} strokeWidth="1.5"/>
      
      {/* Inner crosshair lines */}
      <line x1="5" y1="50" x2="95" y2="50" stroke={color} strokeWidth="1"/>
      <line x1="50" y1="5" x2="50" y2="95" stroke={color} strokeWidth="1"/>
      
      {/* Center dot */}
      <circle cx="50" cy="50" r="8" fill={color}/>
      
      {/* Top-left corner accent */}
      <path 
        d="M10 30 L10 10 L30 10" 
        fill="none" 
        stroke={color} 
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Bottom-right corner accent */}
      <path 
        d="M90 70 L90 90 L70 90" 
        fill="none" 
        stroke={color} 
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Diagonal measurement line */}
      <line 
        x1="75" y1="25" 
        x2="25" y2="75"
        stroke={color} 
        strokeOpacity="0.6"
        strokeWidth="0.75"
        strokeDasharray="2 3"
      />
    </svg>
  );
};

export default LogoMark;

