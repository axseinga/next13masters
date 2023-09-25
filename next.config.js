/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["naszsklep-api.vercel.app", "media.graphassets.com"],
	},
	experimental: {
		typedRoutes: true,
	},
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products//all/1",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
