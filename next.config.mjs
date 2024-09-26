// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['image.tmdb.org'], // Add the external image domain here
    },
  };
  
  export default nextConfig;
  