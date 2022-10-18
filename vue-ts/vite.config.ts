import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    base: `${import.meta.env?.PROD ? "/portland-webworks-exercise/" : "/"}`,
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/global.scss";`,
            },
        },
    },
});