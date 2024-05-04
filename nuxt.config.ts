// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  ssr: true,

  routeRules: {
    "/spa": { ssr: false },
    "/ssr": { ssr: true },
    "/ssg": { prerender: true },
    // revalidate after 10 seconds
    "/isr_ttl": { isr: 10 },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
})