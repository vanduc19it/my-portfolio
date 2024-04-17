/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com','res.cloudinary.com'],
  },
  experimental: {
    appDir: false,
  },
};
