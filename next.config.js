/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'http://172.232.10.202:3001',  // الـ IP بتاع الجهاز البعيد (VBS)
    'http://192.168.1.11:3001'    // الـ IP بتاع الموبايل على الشبكة المحلية
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false,
        child_process: false,
      };
    }
    return config;
  }
};

module.exports = nextConfig;
