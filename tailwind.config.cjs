/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				LightCyan: "hsl(193, 38%, 86%)",
				NeonGreen: "hsl(150, 100%, 66%)",
				GrayishBlue: "hsl(217, 19%, 38%)",
				GrayishDarkBlue: "hsl(217, 19%, 24%)",
				BlueDark: "hsl(218, 23%, 16%)",
			},
			fontSize: {
				QuoteText: "28px",
			},
			fontFamily: {
				Manrope: "Manrope', sans-serif",
			},
			boxShadow: {
				neonShadow: "0px 0px 40px -5px hsl(150, 100%, 66%)",
			},
		},
	},
	plugins: [],
};
