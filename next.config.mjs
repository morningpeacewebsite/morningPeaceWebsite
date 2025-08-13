/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/morning-peace-logo.png',
      },
      {
        source: '/favicon.png',
        destination: '/morning-peace-logo.png',
      },
    ];
  },
};

export default nextConfig;
