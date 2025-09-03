/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1e40af', // blue-800
        'primary-foreground': '#ffffff', // white
        
        // Secondary Colors
        'secondary': '#64748b', // slate-500
        'secondary-foreground': '#ffffff', // white
        
        // Accent Colors
        'accent': '#0ea5e9', // sky-500
        'accent-foreground': '#ffffff', // white
        
        // Background Colors
        'background': '#ffffff', // white
        'surface': '#f8fafc', // slate-50
        
        // Text Colors
        'text-primary': '#0f172a', // slate-900
        'text-secondary': '#475569', // slate-600
        
        // Status Colors
        'success': '#059669', // emerald-600
        'success-foreground': '#ffffff', // white
        'warning': '#d97706', // amber-600
        'warning-foreground': '#ffffff', // white
        'error': '#dc2626', // red-600
        'error-foreground': '#ffffff', // white
        
        // Border Colors
        'border': 'rgba(100, 116, 139, 0.2)', // slate-500 with 20% opacity
        'border-light': 'rgba(100, 116, 139, 0.1)', // slate-500 with 10% opacity
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'caption': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'minimal': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'moderate': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'prominent': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out forwards',
        'slide-up': 'slideUp 300ms ease-in-out forwards',
        'slide-down': 'slideDown 300ms ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}