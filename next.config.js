// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' https://cdn.example.com; object-src 'none'; base-uri 'self';",
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    // Custom webpack config for optimization
    config.optimization.splitChunks.cacheGroups = {
      default: false,
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          // get the name of the node module
          const packageName = module.context.split(/[\\/]/).reverse()[0];
          return `npm.${packageName.replace('@', '')}`;
        },
        chunks: 'all',
      },
    };
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  experimental: {
    optimizeCss: true,
    sprFlushToDisk: false,
    appDir: true,
  },
};
