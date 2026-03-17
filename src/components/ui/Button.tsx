import React from 'react';
import { twMerge, type ClassValue } from 'tailwind-merge';
import { clsx } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-medium transition-all duration-150 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border rounded-md';

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-base',
  }[size];

  const variantClasses = {
    primary: 'bg-accent text-white border-accent hover:bg-accent-dark active:scale-[0.97] focus-visible:ring-accent/50',
    ghost: 'bg-transparent text-text-secondary border-border hover:bg-elevated hover:text-text-primary focus-visible:ring-border',
    danger: 'bg-danger text-white border-danger hover:bg-danger-dark active:scale-[0.97] focus-visible:ring-danger/50',
    outline: 'bg-transparent text-accent border-accent hover:bg-accent-subtle focus-visible:ring-accent/50',
  }[variant];

  return (
    <button
      className={twMerge(baseClasses, sizeClasses, variantClasses, fullWidth && 'w-full', className)}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;

