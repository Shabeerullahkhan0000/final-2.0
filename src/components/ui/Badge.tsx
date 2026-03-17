import React from 'react';
import { twMerge, type ClassValue } from 'tailwind-merge';
import { clsx } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  variant?: 'default' | 'accent' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  className,
  children,
}) => {
  const baseClasses = 'inline-flex items-center border font-medium rounded-full border-solid';

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  }[size];

  const variantClasses = {
    default: 'bg-elevated text-text-secondary border-border',
    accent: 'bg-accent-subtle text-accent border-accent/30',
    success: 'bg-success-subtle text-success border-success/30',
    danger: 'bg-danger-subtle text-danger border-danger/30',
    warning: 'bg-warning-subtle text-warning border-warning/30',
    info: 'bg-info-subtle text-info border-info/30',
  }[variant];

  return (
    <span className={twMerge(baseClasses, sizeClasses, variantClasses, className)}>
      {children}
    </span>
  );
};

export default Badge;

