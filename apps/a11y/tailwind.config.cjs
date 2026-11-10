/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'pulse-minimal': {
					'0%, 100%': { backgroundColor: '#dbeafe' }, // bg-blue-100
					'50%': { backgroundColor: '#bfdbfe' }, // bg-blue-200
				},
			},
			animation: {
				'pulse-minimal':
					'pulse-minimal 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
		},
	},
	plugins: [],
}
