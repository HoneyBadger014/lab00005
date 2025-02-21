/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#80ffe8',
					dark: '#008068',
				},
				background: {
					DEFAULT: '#ebfffc',
					dark: '#001411',
				},
				text: {
					DEFAULT: '#0f1a18',
					dark: '#e5f0ee',
				},
				secondary: {
					DEFAULT: '#bdfff4',
					dark: '#004237',
				},
				accent: {
					DEFAULT: '#c2eeff',
					dark: '#002d3f',
				}
			}
		},
	},
	plugins: [],
}


