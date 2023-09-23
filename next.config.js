/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["naszsklep-api.vercel.app"],
	},
	experimental: {
		typedRoutes: true,
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
