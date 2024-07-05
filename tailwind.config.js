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
			},
		},
	},
	plugins: [],
};
