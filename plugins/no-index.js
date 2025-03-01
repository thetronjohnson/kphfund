export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    const route = useRoute()
    
    if (route.path.startsWith('/startups')) {
      useHead({
        meta: [
          {
            name: 'robots',
            content: 'noindex, nofollow'
          }
        ]
      })
    }
  })
}) 