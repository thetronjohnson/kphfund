import tailwindTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', "@nuxt/fonts"],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
        plugins: [tailwindTypography],
    }
}
})