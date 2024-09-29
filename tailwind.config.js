/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "selector",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./meta.tsx",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {},
			colors: {
				primary: "#00ADB5",
			},
			boxShadow: {
				"custom-light": "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
				gh: "#00ADB5 0px 0px 0px 3px",
				educard: "0px 7px 20px 7px #F1F1F1",
			},
		},
	},
	plugins: [],
};
