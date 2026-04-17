import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Fixes “multiple lockfiles” when a parent folder (e.g. `C:\\Users\\…`) has its own `package-lock.json`. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
