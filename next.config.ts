import type { NextConfig } from "next";
import os from "os";

function getLocalNetworkOrigins(): string[] {
  const origins = new Set<string>(["localhost", "127.0.0.1"]);

  for (const addrs of Object.values(os.networkInterfaces())) {
    for (const addr of addrs ?? []) {
      if (addr.family === "IPv4" && !addr.internal) {
        origins.add(addr.address);
      }
    }
  }

  return Array.from(origins);
}

const nextConfig: NextConfig = {
  // Required for mobile/LAN testing in dev — allows JS bundles to load from
  // network IPs like http://192.168.x.x:3000 (not just localhost).
  allowedDevOrigins: getLocalNetworkOrigins(),
};

export default nextConfig;
