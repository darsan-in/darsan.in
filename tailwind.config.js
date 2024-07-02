/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				michy: ["Mochiy Pop One", "sans-serif"],
				jose: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
