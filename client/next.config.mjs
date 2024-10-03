/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  env: {
    LOCAL_API_URL: "http://localhost:5000/api",
  },
};

export default nextConfig;
