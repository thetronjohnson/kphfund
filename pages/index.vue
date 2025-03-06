<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <div v-if="announcements" class="bg-indigo-600">
      <div class="max-w-2xl mx-auto px-4 py-5">
        <div class="text-white text-sm text-center font-medium">
          <ContentRenderer class="announcements" :value="announcements" />
        </div>
      </div>
    </div>

    <!-- New Navbar -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="/" class="text-2xl font-bold text-indigo-600">KPH.VC</a>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden sm:flex sm:space-x-8">
            <a href="https://kph.club" class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Community</a>
            <a href="https://wiki.kph.club" class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Wiki</a>
            <NuxtLink to="/apply" class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Founder Application</NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="sm:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <a href="https://kph.club" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">Community</a>
          <a href="https://wiki.kph.club" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">Wiki</a>
          <NuxtLink to="/apply" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50">Founder Application</NuxtLink>
        </div>
      </div>
    </nav>

    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <p class="text-lg text-gray-600 leading-relaxed mb-8">
        Join Kerala's <em class="font-medium">most powerful network</em> of investors and founders building the next billion-dollar technology companies. <span class="text-indigo-600 font-medium">Request an invitation</span>
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Investors Section -->
        <div class="space-y-12">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">For Investors</h2>
          <p class="text-gray-600 mb-6">Our carefully curated members represent Kerala's most accomplished business leaders and investors.</p>
          <ul class="space-y-4 mb-12">
            <li class="flex items-center space-x-3 text-gray-600">
              <svg class="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Get first access to high-potential startups before they hit the mainstream</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-600">
              <svg class="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Connect with Kerala's most successful entrepreneurs and investors</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-600">
              <svg class="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Join intimate roundtables and get proprietary market intelligence</span>
            </li>
          </ul>

          <a target="_blank" href="https://airtable.com/appEfE9rBrZlBo3vM/pagAhlw2FFT46HCpa/form" 
             class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md w-full sm:w-auto">
            Join Our Investor Network
          </a>
        </div>

        <!-- Founders Section -->
        <div class="space-y-12">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">For Founders</h2>
          <p class="text-gray-600 mb-6">We're looking for exceptional founders building innovative products from Kerala</p>
          <ul class="space-y-4 mb-12">
            <li class="flex items-center space-x-3 text-gray-600">
              <svg class="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Direct access to active angel investors and successful founders as mentors</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-600">
              <svg class="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Hands-on support for product strategy, hiring, and fundraising</span>
            </li>
            <li class="flex items-center space-x-3 text-gray-600">
              <svg class="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Tap into Kerala's largest startup ecosystem with 1000+ founders</span>
            </li>
          </ul>

          <a target="_blank" href="https://kph.vc/apply" 
             class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md w-full sm:w-auto">
            Pitch Your Startup Now!
          </a>
        </div>
      </div>

      <hr class="my-16 border-gray-200">

      <section class="mt-24">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-900">
          More from KPH
          <div class="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <a href="https://kph.club" 
             target="_blank"
             rel="noopener noreferrer"
             class="group block p-8 bg-white border border-gray-200 rounded-2xl 
                    shadow-sm hover:shadow-lg hover:bg-yellow-50/50 
                    transition-all duration-300 transform hover:-translate-y-1.5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-900 group-hover:text-yellow-700">KPH Club</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p class="text-gray-600 group-hover:text-gray-700">Join our community</p>
          </a>
          <a href="https://www.youtube.com/@FelixJosemonOfficial" 
             target="_blank"
             rel="noopener noreferrer"
             class="group block p-8 bg-white border border-gray-200 rounded-2xl 
                    shadow-sm hover:shadow-lg hover:bg-red-50/50 
                    transition-all duration-300 transform hover:-translate-y-1.5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-900 group-hover:text-red-700">YouTube</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-red-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p class="text-gray-600 group-hover:text-gray-700">Watch startup insights & stories</p>
          </a>
          <a href="https://wiki.kph.club" 
             target="_blank"
             rel="noopener noreferrer"
             class="group block p-8 bg-white border border-gray-200 rounded-2xl 
                    shadow-sm hover:shadow-lg hover:bg-blue-50/50 
                    transition-all duration-300 transform hover:-translate-y-1.5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-700">KPH Wiki</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p class="text-gray-600 group-hover:text-gray-700">Access startup resources</p>
          </a>
          <a href="https://nas.io/kphjobs/" 
             target="_blank"
             rel="noopener noreferrer"
             class="group block p-8 bg-white border border-gray-200 rounded-2xl 
                    shadow-sm hover:shadow-lg hover:bg-green-50/50 
                    transition-all duration-300 transform hover:-translate-y-1.5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-900 group-hover:text-green-700">KPH Jobs</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p class="text-gray-600 group-hover:text-gray-700">Find jobs from our startup community</p>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const { data: announcements } = await useAsyncData('announcements', () => queryContent('/announcements').findOne())

const mobileMenuOpen = ref(false)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - KPH VC` : "KPH VC - Backing Kerala's Top 1% Startups";
  },
  meta: [
    {
      name: 'description',
      content: 'KPH is an early-stage fund investing in Kerala\'s most promising startups. We back exceptional founders building the next generation of innovative companies.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "KPH VC",
        "description": "Early-stage investment fund backing Kerala's top 1% startups",
        "url": "https://kph.fund",
        "@type": "InvestmentOrganization",
        "foundingDate": "2023",
        "areaServed": "Kerala, India",
        "investmentStage": "Early Stage",
        "sameAs": [
          "https://kph.club",
          "https://www.youtube.com/@FelixJosemonOfficial",
          "https://wiki.kph.club",
          "https://nas.io/kphjobs/"
        ]
      })
    }
  ]
})
</script>

<style scoped>
.announcements :deep(a) {
  text-decoration: underline !important;
}
</style>