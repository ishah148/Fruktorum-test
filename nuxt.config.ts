// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/eslint-module", "nuxt-svgo", "nuxt-swiper", "@pinia/nuxt"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables" as *;',
        },
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
  // modules: ["nuxt-svgo"],
});
