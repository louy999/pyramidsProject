/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  env: {
    LOCAL_API_URL: "http://localhost:5000/api",
    LOCAL_API_IMG: "http://localhost:5000",
    LOCAL_JWT_SECRET_KEY: "jass",
  },
};

export default nextConfig;
