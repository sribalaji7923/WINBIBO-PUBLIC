module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [{ key: 'X-Forwarded-Proto', value: 'https' }],
      },
    ];
  },
};
