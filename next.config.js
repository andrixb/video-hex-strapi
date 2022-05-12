/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
        API_READONLY_TOKEN: process.env.API_READONLY_TOKEN,
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
