/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digalsolutions.com",
      },
    ],
  },
};

export default nextConfig;
