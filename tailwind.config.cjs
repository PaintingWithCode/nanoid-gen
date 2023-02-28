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
				celtic: {
					50: '#f0f9f4',
					100: '#dbf0e3',
					200: '#bae0cc',
					300: '#8cc9ac',
					400: '#5bac87',
					500: '#3a8f6c',
					600: '#297255',
					700: '#215b46',
					800: '#1c4938',
					900: '#0d211a'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
