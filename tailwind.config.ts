import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          overlay: 'var(--bg-overlay)',
          input: 'var(--bg-input)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
          accent: 'var(--border-accent)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          accent: 'var(--text-accent)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          active: 'var(--accent-active)',
          subtle: 'var(--accent-subtle)',
        },
        success: {
          DEFAULT: 'var(--success)',
          subtle: 'var(--success-subtle)',
        },
        danger: {
          DEFAULT: 'var(--danger)',
          subtle: 'var(--danger-subtle)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          subtle: 'var(--warning-subtle)',
        },
        info: {
          DEFAULT: 'var(--info)',
          subtle: 'var(--info-subtle)',
        },
        measure: {
          DEFAULT: 'var(--measure-color)',
          selected: 'var(--measure-selected)',
        },
        snap: 'var(--snap-color)',
        crosshair: 'var(--crosshair-color)',
        guide: 'var(--guide-color)',
        plan: {
          free: 'var(--plan-free)',
          essential: 'var(--plan-essential)',
          performance: 'var(--plan-performance)',
          enterprise: 'var(--plan-enterprise)',
        },
      },
      fontFamily: {
        ui: 'var(--font-ui)',
        mono: 'var(--font-mono)',
        display: 'var(--font-display)',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        md: 'var(--text-md)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
      },
      fontWeight: {
        regular: 'var(--weight-regular)',
        medium: 'var(--weight-medium)',
        semibold: 'var(--weight-semibold)',
        bold: 'var(--weight-bold)',
      },
      lineHeight: {
        tight: 'var(--leading-tight)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
        20: 'var(--space-20)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        accent: 'var(--shadow-accent)',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        base: 'var(--transition-base)',
        slow: 'var(--transition-slow)',
        panel: 'var(--transition-panel)',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
        'panel': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        canvas: 'var(--z-canvas)',
        'canvas-overlay': 'var(--z-canvas-overlay)',
        toolbar: 'var(--z-toolbar)',
        panel: 'var(--z-panel)',
        dropdown: 'var(--z-dropdown)',
        tooltip: 'var(--z-tooltip)',
        modal: 'var(--z-modal)',
        toast: 'var(--z-toast)',
      },
      width: {
        toolbar: 'var(--toolbar-height)',
        statusbar: 'var(--statusbar-height)',
        leftpanel: 'var(--leftpanel-width)',
        rightpanel: 'var(--rightpanel-width)',
        'sidebar-collapsed': 'var(--sidebar-collapsed)',
      },
      height: {
        toolbar: 'var(--toolbar-height)',
        statusbar: 'var(--statusbar-height)',
        leftpanel: 'var(--leftpanel-width)',
        rightpanel: 'var(--rightpanel-width)',
        'sidebar-collapsed': 'var(--sidebar-collapsed)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config
