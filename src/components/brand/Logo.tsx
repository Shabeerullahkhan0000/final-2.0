import React from 'react';
import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';
import WordMark from './WordMark';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  linkTo?: string;
  className?: string;
}

const SIZE_MARK: Record<LogoProps['size'], number> = {
  sm: 20,
  md: 28,
  lg: 36,
  xl: 48,
};

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'auto',
  showTagline = false,
  linkTo = '/',
  className = '',
}) => {
  const content = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={SIZE_MARK[size]} />
      <div>
        <WordMark size={size} variant={variant} />
        {showTagline && (
          <p className="text-secondary text-xs font-mono mt-1 leading-tight tracking-wide">
            Professional CAD, directly in your browser
          </p>
        )}
      </div>
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>;
  }

  return content;
};

export default Logo;

