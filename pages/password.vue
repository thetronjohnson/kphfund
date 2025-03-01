<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Password Protected Area</h1>
      
      <div v-if="error" class="mb-4 p-3 bg-red-100 text-red-700 rounded">
        {{ error }}
      </div>
      
      <form @submit.prevent="checkPassword">
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-700">
            Enter Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the access password"
            required
          />
        </div>
        
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Checking...' : 'Submit' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const error = ref('')
const isLoading = ref(false)

const checkPassword = async () => {
  if (!password.value) return
  
  isLoading.value = true
  error.value = ''
  
  try {
    // Call server API to verify password and set secure cookie
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { password: password.value }
    })
    
    if (response.success) {
      router.push('/startups')
    }
  } catch (err) {
    error.value = 'Incorrect password. Please try again.'
    password.value = ''
  } finally {
    isLoading.value = false
  }
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