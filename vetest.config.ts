import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      globals: true,
      transformMode: {
        web: [/\.[jt]sx?$/],
      },
      setupFiles: "./setupVitest.ts",
    },
  })
);
