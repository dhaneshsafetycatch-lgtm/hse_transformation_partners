/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#071A52',
          800: '#0B2E6B',
          700: '#0F3A82',
          600: '#154A9E',
        },
        cyan: {
          DEFAULT: '#00AEEF',
          light: '#00D4FF',
        },
        accent: {
          DEFAULT: '#F4B400',
          dark: '#D99E00',
        },
        ink: {
          950: '#070B1A',
          900: '#0F172A',
          800: '#1A2340',
          700: '#27304F',
        },
        cloud: {
          DEFAULT: '#F7F9FC',
          dark: '#EEF2F8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        btn: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', md: '2rem', lg: '3rem' },
        screens: { '2xl': '1280px' },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(7, 26, 82, 0.12)',
        glow: '0 0 40px rgba(0, 212, 255, 0.35)',
        'glow-accent': '0 0 40px rgba(244, 180, 0, 0.3)',
        elev: '0 20px 60px -15px rgba(7, 26, 82, 0.25)',
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(rgba(7,26,82,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,26,82,0.04) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)',
        'hero-radial': 'radial-gradient(ellipse at top, rgba(11,46,107,0.5) 0%, rgba(7,11,26,1) 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
