// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  colorMode: {
    preference: "dark", // force dark mode on first load
    fallback: "dark", // fallback if no preference is found
  },
  css: ["~/assets/css/main.css", "~/assets/css/animations.css"],
  ui: {},
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
  ],
});
