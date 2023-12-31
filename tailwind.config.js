/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {
			padding: { DEFAULT: '15px' },
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1330px',
		},

		extend: {
			colors: {
				primary: '#242A2B',
				secondary: '#808080',
				accent: {
					DEFAULT: '#1CBCCF',
					secondary: '#18ABBC',
					tertiary: '#90C6CD',
				},
				grey: '#E8F0F1',
			},
			fontFamily: {
				primary: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
				custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
			},
			backgroundImage: {
				services: 'url(/img/services/bg.svg)',
				testimonials: 'url(/img/testimonials/bg.svg)',
				testimonials: 'url(/img/testimonials/bg.svg)',
				departments: 'url(/img/departments/bg.svg)',
				quoteLeft: 'url(/icons/testimonials/quote-left.svg)',
				quoteRight: 'url(/icons/testimonials/quote-right.svg)',
			},
		},
	},
	plugins: [],
}
