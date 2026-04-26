import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: "src/main.ts",
            userscript: {
                namespace: "https://github.com/e6nlaq/atcoder-zip-copy",
                match: ["https://atcoder.jp/contests/*/tasks/*"],
                name: "AtCoder Zip Copy",
                description:
                    "AtCoderの問題文中の .zip リンクの横にコピーボタンを追加します。",
                grant: [],
                author: "e6nlaq",
                copyright: "(C) 2026 e6nlaq",
            },
        }),
    ],
});
