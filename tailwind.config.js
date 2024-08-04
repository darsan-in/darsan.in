/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./meta.tsx"],
	theme: {
		extend: {
			fontFamily: {
				michy: ["Mochiy Pop One", "sans-serif"],
				jose: ["Josefin Sans", "sans-serif"],
			},
			colors: {
				primary: "#9400FF",
				secondary: "#E6CCFF",
			},
			boxShadow: {
				"custom-light": "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;",
			},
		},
	},
	plugins: [],
};
