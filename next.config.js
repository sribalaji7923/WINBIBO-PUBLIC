const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^\/splash\.html$/, // Match splash.html specifically
      handler: 'CacheFirst', // Serve splash.html from cache first
      options: {
        cacheName: 'static-html-cache',
        expiration: {
          maxEntries: 1, // Only cache splash.html
          maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
        },
      },
    },
    // Cache strategy for other assets, e.g., images, fonts
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // Cache for 1 year
        },
      },
    },
    // Cache static assets (e.g., images, icons)
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-assets-cache',
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
        },
      },
    },
  ],
  fallbacks: {
    document: '/splash.html', // Serve splash.html as fallback
  },
});

module.exports = withPWA({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: [], // Add domains you trust for image loading
  },
  swcMinify: true, // Enable SWC-based minification for better performance
});
