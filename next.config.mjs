/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow optimised placeholder photos from Unsplash.
    // Replace with your own domain/CDN when real photography is ready.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
