/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/DR7GL9p/*",
      },
    ],
  },
};

export default config;