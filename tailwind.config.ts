import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode for next-themes
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		width: {
  			container: '1300px'
  		},
  		colors: {
  			main: '#A388EE',
  			secondary: '#5E2EE1',
  			overlay: 'rgba(0,0,0,0.8)',
  			bg: '#e3dff2',
  			text: '#000',
  			border: '#000',
  			darkBg: '#272733',
  			darkText: '#eeefe9',
  			darkBorder: '#000',
  			medBg: '#272733',
  			medText: '#eeefe9',
  			medBorder: '#000',
  			secondaryBlack: '#212121',
  			altBlack: '#d0d0d0',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			base: '5px'
  		},
  		boxShadow: {
  			light: '4px 4px 0px 0px #000',
  			dark: '4px 4px 0px 0px #000'
  		},
  		translate: {
  			boxShadowX: '4px',
  			boxShadowY: '4px',
  			reverseBoxShadowX: '-4px',
  			reverseBoxShadowY: '-4px'
  		},
  		fontWeight: {
  			base: '500',
  			heading: '700'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			marquee2: {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			marquee: 'marquee 15s linear infinite',
  			marquee2: 'marquee2 15s linear infinite'
  		},
  		screens: {
  			w900: {
  				raw: '(max-width: 900px)'
  			},
  			w500: {
  				raw: '(max-width: 500px)'
  			}
  		}
  	}
  },
  plugins: [tailwindAnimate],
}
export default config
