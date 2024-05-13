import { defineConfig } from "tsup";

export default defineConfig({
    format: ["cjs", "esm"],
    entry: ["./src/index.ts"],
    external: ["astro"],
    dts: true,
    injectStyle: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true
})