// next.config.ts

import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache";

const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  dest: "public",
  pwa: {
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: isDev,
  },
};

// ✅ Tipagem correta: `withPWA()` lida com os tipos internamente
export default withPWA(nextConfig);
