import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: "src/main.ts",
            userscript: {
                namespace: "https://github.com/e6nlaq/atcoder-zip-link",
                match: ["https://atcoder.jp/contests/*/tasks/*"],
                name: "AtCoder Zip Link Copy Button",
                description:
                    "Add a copy button next to .zip links in AtCoder problem statements.",
                grant: [],
                author: "e6nlaq",
                copyright: "(C) 2026 e6nlaq",
            },
        }),
    ],
});
