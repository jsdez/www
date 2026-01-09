import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        container: '1300px',
      },
      colors: {
        // Using CSS custom properties for theming
        main: 'var(--main)',
        background: 'var(--background)',
        'secondary-background': 'var(--secondary-background)',
        foreground: 'var(--foreground)',
        'main-foreground': 'var(--main-foreground)',
        border: 'var(--border)',
        overlay: 'var(--overlay)',
        ring: 'var(--ring)',
        
        // Chart colors
        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
        'chart-3': 'var(--chart-3)',
        'chart-4': 'var(--chart-4)',
        'chart-5': 'var(--chart-5)',
        
        // Legacy color aliases for backward compatibility
        bg: 'var(--background)',
        text: 'var(--foreground)',
        darkBg: 'var(--background)',
        darkText: 'var(--foreground)',
        darkBorder: 'var(--border)',
        secondaryBlack: 'oklch(23.93% 0 0)',
        secondary: 'oklch(59.13% 0.2082 295.36)',
      },
      spacing: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        light: 'var(--shadow)',
        dark: 'var(--shadow)',
        shadow: 'var(--shadow)',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      screens: {
        w900: { raw: '(max-width: 900px)' },
        w500: { raw: '(max-width: 500px)' },
      },
    },
  },
  plugins: [tailwindAnimate],
  darkMode: 'class',
};
export default config;
