import { defineConfig } from "@lovable.dev/vite-tanstack-config"; 

export default defineConfig({
  tanstackStart: {
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
  nitro: {
    preset: "cloudflare_module",
  },
}); 