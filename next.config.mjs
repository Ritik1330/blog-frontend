/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: '/photo/98732649/**',
      },
      {
        protocol: "https",
        hostname: "static.toiimg.com",
        port: "",
        // pathname: '/photo/98732649/**',
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
        pathname: "/512/**",

      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
