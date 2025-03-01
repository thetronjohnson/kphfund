<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Startups</h1>
      <button 
        @click="logout" 
        class="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
      >
        Logout
      </button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="startup in startups" :key="startup.slug" 
           class="border rounded-lg p-6">
        <NuxtLink :to="`/startups/${startup.slug}`" class="block">
          <h2 class="text-xl font-semibold mb-2">{{ startup.startup }}</h2>
          <p class="text-gray-600 mb-4">{{ startup.founder }}</p>
          <p class="text-gray-600 mb-4">{{ startup.description }}</p>
          <div class="flex justify-between items-center">
            <span class="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Raising: {{ startup.raising }}</span>
            <span class="text-blue-600 hover:underline">View Details →</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

const startups = await queryContent('startups').find()

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