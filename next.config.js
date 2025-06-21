/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: 'worker-loader',
      options: {
        inline: 'no-fallback'
      }
    });
    return config;
  }
};

module.exports = nextConfig;
