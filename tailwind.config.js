/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./meta.tsx"],
	theme: {
		extend: {
			fontFamily: {},
			colors: {
				primary: "#00ADB5",
			},
			boxShadow: {
				"custom-light": "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
			},
		},
	},
	plugins: [],
};
