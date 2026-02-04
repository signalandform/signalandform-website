/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/project-inquiry-form", destination: "/contact", permanent: true },
      { source: "/project-inquiry-form/", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
