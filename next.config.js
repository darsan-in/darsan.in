/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: {
		buildActivityPosition: "top-right",
	},
	output: "export",
	distDir: "./kinact-package",
	basePath: "",
	assetPrefix: "",
};

module.exports = nextConfig;
