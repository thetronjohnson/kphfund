<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <div v-if="announcements" class="bg-indigo-600">
      <div class="max-w-2xl mx-auto px-4 py-5">
        <div class="text-white text-sm text-center font-medium">
          <ContentRenderer class="announcements" :value="announcements" />
        </div>
      </div>
    </div>
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold mb-8 text-black bg-clip-text">
        For Founders
      </h1>

      <p class="text-lg text-gray-600 leading-relaxed mb-8">
        Looking to connect with the right investors? KPH.VC introduces <em class="font-medium">ambitious founders</em> to Kerala's most active angel investors and VCs. <span class="text-indigo-600 font-medium">Apply now to get connected</span>
      </p>

      <div class="bg-white p-8 rounded-2xl shadow-md mb-12 border border-gray-100">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">What We Look For</h2>
        <ul class="space-y-3 text-gray-600 mb-8">
          <li class="flex items-start space-x-3">
            <svg class="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Innovative tech startups with Kerala connections</span>
          </li>
          <li class="flex items-start space-x-3">
            <svg class="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Strong founding team with complementary skills</span>
          </li>
          <li class="flex items-start space-x-3">
            <svg class="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Early traction or compelling product vision</span>
          </li>
          <li class="flex items-start space-x-3">
            <svg class="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Scalable business model with growth potential</span>
          </li>
        </ul>
        
        <a target="_blank" href="https://airtable.com/appEfE9rBrZlBo3vM/pagep53yTMnwAYJ6k/form" 
           class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md w-full sm:w-auto">
          Apply for Funding
        </a>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md mb-12 border border-gray-100">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">How KPH.VC Supports Founders</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3 text-gray-600">
                <svg class="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Access to a curated network of the top 1% active angel investors</span>
              </li>
              <li class="flex items-start space-x-3 text-gray-600">
                <svg class="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Streamlined fundraising process with a single application</span>
              </li>
              <li class="flex items-start space-x-3 text-gray-600">
                <svg class="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Hands-on support for pitch preparation and investor meetings</span>
              </li>
            </ul>
          </div>
          <div>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3 text-gray-600">
                <svg class="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Strategic mentorship from successful Kerala entrepreneurs</span>
              </li>
              <li class="flex items-start space-x-3 text-gray-600">
                <svg class="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Connections to follow-on funding and growth opportunities</span>
              </li>
              <li class="flex items-start space-x-3 text-gray-600">
                <svg class="h-6 w-6 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Join a community of 1000+ founders building from Kerala</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center mb-16">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Ready to Meet Investors?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our introduction process is simple and personalized. Submit your details, and we'll connect you with relevant investors within 7 days.
        </p>
        <a target="_blank" href="https://airtable.com/appEfE9rBrZlBo3vM/pagep53yTMnwAYJ6k/form" 
           class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md">
          Apply for Funding
        </a>
      </div>

      <hr class="my-16 border-gray-200">

      <section>
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
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const { data: announcements } = await useAsyncData('announcements', () => queryContent('/announcements').findOne())

useHead({
  title: 'For Founders',
  meta: [
    {
      name: 'description',
      content: 'KPH.VC connects ambitious founders with Kerala\'s most powerful network of investors. Apply now to get connected and join our thriving startup ecosystem.'
    }
  ]
})
</script>

<style scoped>
.announcements :deep(a) {
  text-decoration: underline !important;
}
</style>