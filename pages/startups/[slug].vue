<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Navigation and logout row -->
    <div class="flex justify-between items-center mb-8">
      <NuxtLink to="/startups" class="inline-flex items-center text-blue-600 hover:text-blue-800 group">
        <span class="mr-2">←</span>
        <span class="group-hover:underline">Back to Startups</span>
      </NuxtLink>
      
      <button 
        @click="logout" 
        class="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
      >
        Logout
      </button>
    </div>

    <div class="bg-white rounded-lg shadow-sm p-8 mb-8">
      <!-- Header section -->
      <div class="border-b pb-6 mb-6">
        <h1 class="text-4xl font-bold mb-3">{{ startup.startup }}</h1>
        <p class="text-xl text-gray-600">Founded by {{ startup.founder }}</p>
      </div>

      <!-- Action buttons and tags -->
      <div class="flex flex-wrap items-center gap-4 mb-8">
        <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
          Raising: {{ startup.raising }}
        </span>
        <a 
          :href="startup.link" 
          target="_blank"
          class="bg-blue-50 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors font-medium"
        >
          Visit Website
        </a>
        <a 
          v-if="startup['intro-url']" 
          :href="startup['intro-url']" 
          target="_blank"
          class="bg-blue-50 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors font-medium"
        >
          Get an intro <span class="ml-1">→</span>
        </a>
      </div>

      <!-- LinkedIn profiles section -->
      <div class="bg-gray-50 rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Founders' LinkedIn Profiles</h2>
        <ul class="space-y-2">
          <li v-for="(link, name) in startup.linkedin" :key="name">
            <a 
              :href="link" 
              target="_blank" 
              class="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              {{ name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Content section -->
    <div class="prose prose-lg max-w-none bg-white rounded-lg shadow-sm p-8">
      <ContentDoc :path="`/startups/${$route.params.slug}`" />
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

const route = useRoute()
const startup = await queryContent('startups', route.params.slug).findOne()

// Logout function
const logout = async () => {
  await $fetch('/api/auth/logout', { method: 'POST' })
  window.location.href = '/password'
}

// Use useHead to set meta tags
useHead({
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
})
</script>

<style scoped>
/* Your scoped styles here */
</style>

<style>
/* Global styles for prose headings */
.prose :where(h1, h2, h3, h4, h5, h6) {
  text-decoration: none !important;
  font-weight: bold !important;
  border-bottom: none !important;
}

/* Target each heading type specifically for maximum specificity */
.prose h1 {
  text-decoration: none !important;
  font-weight: bold !important;
  border-bottom: none !important;
}

.prose h2 {
  text-decoration: none !important;
  font-weight: bold !important;
  border-bottom: none !important;
}

.prose h3, .prose h4, .prose h5, .prose h6 {
  text-decoration: none !important;
  font-weight: bold !important;
  border-bottom: none !important;
}

/* Override any Tailwind Typography specific styles */
.prose :where(h1, h2, h3, h4, h5, h6) a {
  text-decoration: none !important;
  font-weight: inherit !important;
  color: inherit;
}
</style> 