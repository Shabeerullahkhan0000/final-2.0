import React from 'react';
import { BRAND_COLORS } from './BrandColors';

interface WordMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'auto';
}

const SIZE_MAP: Record<WordMarkProps['size'], string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const WordMark: React.FC<WordMarkProps> = ({ 
  size = 'md', 
  variant = 'auto' 
}) => {
  const textClass = `font-display font-bold tracking-tight inline-flex items-baseline gap-1 leading-none lowercase`;

  const viewerColor = variant === 'light' ? '#FFFFFF' : 
                     variant === 'dark' ? '#0D0F14' : 'var(--text-primary)';
  
  const proColor = variant === 'light' ? '#D1D5DB' : 
                   variant === 'dark' ? '#4A5568' : 'var(--text-secondary)';

  return (
    <span className={`${textClass} ${SIZE_MAP[size]}`}>
      <span className="font-black" style={{ color: BRAND_COLORS.accent }}>
        cad
      </span>
      <span className="font-semibold" style={{ color: viewerColor }}>
        viewer
      </span>
      <span className="font-normal text-[0.65em] ml-1" style={{ color: proColor }}>
        pro
      </span>
    </span>
  );
};

export default WordMark;

