/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'sea-green': {
					50: '#f0f9f3',
					100: '#dbf0e1',
					200: '#bae0c9',
					300: '#8bc9a6',
					400: '#5bac80',
					500: '#399064',
					600: '#297250',
					700: '#205c41',
					800: '#1c4934',
					900: '#183c2d'
				},
				astronaut: {
					50: '#f1f5fd',
					100: '#dfe8fa',
					200: '#c7d7f6',
					300: '#a0bef0',
					400: '#739be7',
					500: '#5279df',
					600: '#3e5dd2',
					700: '#344ac1',
					800: '#303f9d',
					900: '#2d3a81'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
