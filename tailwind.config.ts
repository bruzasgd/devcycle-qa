import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			display: ['JetBrains Mono', 'monospace'],
			mono: ['JetBrains Mono', 'monospace'],
		},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
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
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.9' }
				},
				'scale': {
					'0%': { transform: 'scale(0.98)' },
					'100%': { transform: 'scale(1)' }
				},
				'progress': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-3px)' }
				},
				'bounce-sequential': {
					'0%, 50%, 100%': { transform: 'translateY(0)' },
					'25%': { transform: 'translateY(-3px)' }
				},
				'spinner-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'spinner-fast': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'move-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(300%)' }
				},
				'move-along-path': {
					'0%': { left: '0%' },
					'50%': { left: '50%' },
					'100%': { left: '100%' }
				},
				'progress-right': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'grow-bar': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'check': {
					'0%': { transform: 'scale(0.9)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-10px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'number-change': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'counter': {
					'0%': { opacity: '0.7' },
					'100%': { opacity: '1' }
				},
				'flow': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-15px)', opacity: '0' }
				},
				'fade-in-out': {
					'0%': { opacity: '0.5' },
					'50%': { opacity: '0.8' },
					'100%': { opacity: '0.5' }
				},
				'hover': {
					'0%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'ping-slow': {
					'75%, 100%': {
						transform: 'scale(1.2)',
						opacity: '0'
					}
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-1deg)' },
					'50%': { transform: 'rotate(1deg)' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.9)', opacity: '0.3' },
					'70%, 100%': { transform: 'scale(1.2)', opacity: '0' }
				},
				'wave': {
					'0%, 100%': { transform: 'translateY(0)' },
					'20%': { transform: 'translateY(-5px)' },
					'40%': { transform: 'translateY(0)' },
					'60%': { transform: 'translateY(-3px)' },
					'80%': { transform: 'translateY(0)' }
				},
				'move-background': {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s infinite',
				'scale': 'scale 0.4s ease-out',
				'progress': 'progress 1.5s ease-out',
				'rotate': 'rotate 20s linear infinite',
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'bounce-sequential': 'bounce-sequential 2s ease-in-out infinite',
				'spinner-slow': 'spinner-slow 15s linear infinite',
				'spinner-fast': 'spinner-fast 4s linear infinite',
				'move-right': 'move-right 2s linear infinite',
				'move-along-path': 'move-along-path 3s ease-in-out infinite',
				'progress-right': 'progress-right 2s ease-out',
				'grow-bar': 'grow-bar 1s ease-out forwards',
				'check': 'check 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'number-change': 'number-change 2s infinite',
				'counter': 'counter 1s ease-out forwards',
				'flow': 'flow 2s linear infinite',
				'fade-in-out': 'fade-in-out 3s infinite',
				'hover': 'hover 2s ease-in-out infinite',
				'spin-slow': 'spin-slow 12s linear infinite',
				'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
				'wave': 'wave 3s ease infinite',
				'move-background': 'move-background 6s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
