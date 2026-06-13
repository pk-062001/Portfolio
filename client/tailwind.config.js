/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        dark: '#060608',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '24px',
        btn: '14px',
        pill: '50px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59,130,246,0.15)',
        'glow-violet': '0 0 40px rgba(139,92,246,0.15)',
        'glow-green': '0 0 40px rgba(34,197,94,0.15)',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slower': 'floatSlower 12s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-ring': 'spinRing 3s linear infinite',
        'progress-fill': 'progressFill 3s ease-in-out forwards',
        'fade-pulse': 'fadePulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'marquee-ltr': 'marquee-ltr 30s linear infinite',
        'marquee-rtl': 'marquee-rtl 30s linear infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, 20px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        spinRing: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadePulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'marquee-ltr': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-rtl': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
