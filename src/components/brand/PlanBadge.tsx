import React from 'react';
import { PLAN_COLORS, PLAN_LABELS, PlanType } from './BrandColors';

interface PlanBadgeProps {
  plan: PlanType;
  size?: 'sm' | 'md';
  showIcon?: boolean;
}

const PlanBadge: React.FC<PlanBadgeProps> = ({
  plan,
  size = 'sm',
  showIcon = false,
}) => {
  const color = PLAN_COLORS[plan];
  const textSize = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-2.5 py-0.75';
  const label = PLAN_LABELS[plan];

  const getIcon = () => {
    switch (plan) {
      case 'essential':
        return <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
          <polygon points="5,1 9,4 6.5,4 6.5,9 3.5,9 3.5,4 1,4"/>
        </svg>;
      case 'performance':
        return <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
          <path d="M2 5 L5 2 L8 5 L5 8 Z"/>
        </svg>;
      case 'enterprise':
        return <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
          <path d="M5 0 L3 2 H1 L0 4 V6 L1 8 H3 L5 10 L7 8 H9 L10 6 V4 L9 2 H7 Z"/>
        </svg>;
      default:
        return null;
    }
  };

  return (
    <span 
      className={`inline-flex items-center gap-1 rounded-full font-medium letter-spacing-0.02em border font-ui ${textSize}`}
      style={{
        backgroundColor: `${color}20`,
        color,
        borderColor: `${color}4D`,
      }}
    >
      {showIcon && getIcon()}
      {label}
    </span>
  );
};

export default PlanBadge;

