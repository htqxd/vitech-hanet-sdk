import { resolve } from "node:path";
import { defineConfig } from "vite";
import camelCase from "camelcase";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";

const packageName = packageJson.name.split("/").pop() || packageJson.name;

export default defineConfig({
  plugins: [
    dts({
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts", "src/**/*.spec.ts"],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: camelCase(packageName, { pascalCase: true }),
      formats: ["es", "cjs"],
      fileName: packageName,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependencies || {}),
        /^node:/,
        /^@vitechgroup/,
      ],
    },
    sourcemap: true,
  },
});
