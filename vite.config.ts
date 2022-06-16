import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";

const filesToCopy = [
  "src/components/simple-sum/SimpleSumComposition.vue",
  "src/components/simple-sum/SimpleSumOption.vue",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: filesToCopy.map(src => ({ src, dest: "code-files" })),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
