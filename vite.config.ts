import analyzer from "rollup-plugin-analyzer";
import { fileURLToPath, URL } from "url";
import dts from "vite-plugin-dts"
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        dts({ rollupTypes: true, copyDtsFiles: true })
    ],
    build: {
        lib: {
            entry: "./src/lib.ts",
            name: "daisy-ext",
            formats: ["es", "umd"],
            fileName: "lib"
        },
        rollupOptions: {
            // Make sure to externalize deps that shouldn't be bundled into the library
            external: ["tailwindcss/plugin"],
            plugins: [analyzer({summaryOnly: true})]
        },
        sourcemap: true,
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        }
    }
})