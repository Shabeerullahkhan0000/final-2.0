export const BRAND_COLORS = {
  // Primary
  accent: '#3B82F6',
  accentHover: '#2563EB',
  accentActive: '#1D4ED8',
  
  // Backgrounds
  bgBase: '#0D0F14',
  bgSurface: '#14171F',
  bgElevated: '#1C2030',
  
  // Text
  textPrimary: '#E8ECF4',
  textSecondary: '#8892A4',
  textTertiary: '#4A5568',
  
  // Semantic
  success: '#22C55E',
  danger: '#EF4444',
  warning: '#F59E0B',
  info: '#06B6D4',
  
  // Measurement
  measureDefault: '#F59E0B',
  measureSelected: '#3B82F6',
  snapIndicator: '#22C55E',
  
  // Plans
  planFree: '#6B7280',
  planEssential: '#3B82F6',
  planPerformance: '#8B5CF6',
  planEnterprise: '#F59E0B',
} as const;

export type BrandColor = keyof typeof BRAND_COLORS;
export type PlanType = 'free' | 'essential' | 'performance' | 'enterprise';

export const PLAN_COLORS: Record<PlanType, string> = {
  free: BRAND_COLORS.planFree,
  essential: BRAND_COLORS.planEssential,
  performance: BRAND_COLORS.planPerformance,
  enterprise: BRAND_COLORS.planEnterprise,
};

export const PLAN_LABELS: Record<PlanType, string> = {
  free: 'Free',
  essential: 'Essential',
  performance: 'Performance',
  enterprise: 'Enterprise',
};

