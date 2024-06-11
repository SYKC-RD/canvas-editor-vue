import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ include: "./src" })],
  build: {
    target: "modules",
    //静态文件目录
    assetsDir: "css",
    //压缩
    minify: false,
    //css分离
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "CanvasEditor",
      fileName: "canvas-editor-vue",
    },
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
