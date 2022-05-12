/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        NEXT_PUBLIC_API_READONLY_TOKEN: process.env.NEXT_PUBLIC_API_READONLY_TOKEN,
        NEXT_PUBLIC_API_FULL: process.env.NEXT_PUBLIC_API_FULL,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
};

module.exports = nextConfig;
