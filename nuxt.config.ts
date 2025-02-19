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
},
  app: {
    head: {
      title: "KPH VC - Backing Kerala's Top 1% Startups",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'KPH is an early-stage fund investing in Kerala\'s most promising startups. We back exceptional founders building the next generation of innovative companies.'
        },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: "KPH VC - Backing Kerala's Top 1% Startups" },
        { 
          property: 'og:description', 
          content: 'KPH is an early-stage fund investing in Kerala\'s most promising startups. We back exceptional founders building the next generation of innovative companies.'
        },
        { property: 'og:image', content: '/kph.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "KPH VC - Backing Kerala's Top 1% Startups" },
        { 
          name: 'twitter:description', 
          content: 'KPH is an early-stage fund investing in Kerala\'s most promising startups. We back exceptional founders building the next generation of innovative companies.'
        },
        { name: 'twitter:image', content: '/kph.png' },
        // Additional SEO tags
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'KPH VC, Kerala venture capital, early stage fund, startup investment, Kerala startups, seed funding Kerala, startup fund' },
        { name: 'author', content: 'KPH VC' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://kph.vc' }
      ]
    }
  },
  content: {
    // Content module configuration
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },
  routeRules: {
    '/founders': { redirect: 'https://kiranj.notion.site/17b3bcc41a1f80c580facf8f2d6aa7d9?v=fb953e82107c46f38928efd94e3d19f8' }
  }
})
