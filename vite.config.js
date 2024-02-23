import { defineConfig } from "vite";

export default defineConfig({
    base: "",
    esbuild: {
        jsxFactory: "RenderElement",
    },
});