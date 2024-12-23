<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold mb-8 text-black bg-clip-text">
        KPH.VC
      </h1>

      <p class="text-lg text-gray-600 leading-relaxed mb-8">
        Join Kerala's <em class="font-medium">most powerful network</em> of investors and founders building the next billion-dollar technology companies. <span class="text-indigo-600 font-medium">Request an invitation</span>
      </p>

      <!-- Navigation Tabs -->
      <div class="flex space-x-4 mb-12 border-b border-gray-200">
        <button @click="activeTab = 'investors'" 
                :class="['px-6 py-3 text-lg font-medium transition-colors duration-200',
                         activeTab === 'investors' 
                           ? 'text-indigo-600 border-b-2 border-indigo-600' 
                           : 'text-gray-500 hover:text-gray-700']">
          For Investors
        </button>
        <button @click="activeTab = 'founders'"
                :class="['px-6 py-3 text-lg font-medium transition-colors duration-200',
                         activeTab === 'founders' 
                           ? 'text-indigo-600 border-b-2 border-indigo-600' 
                           : 'text-gray-500 hover:text-gray-700']">
          For Founders
        </button>
      </div>

      <!-- Investors Section -->
      <div v-if="activeTab === 'investors'" class="space-y-12">
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

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">Join Our Investor Network</h2>
          <p class="text-gray-600 leading-relaxed mb-8">
            Our carefully curated members represent Kerala's most accomplished business leaders and investors. Request an invitation to join this exclusive community.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="mailto:hello@felixjosemon.com" 
               class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md w-full sm:w-auto">
              Get an invite
            </a>
          </div>
        </div>
      </div>

      <!-- Founders Section -->
      <div v-if="activeTab === 'founders'" class="space-y-12">
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
          <li class="flex items-center space-x-3 text-gray-600">
            <svg class="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Exclusive access to startup resources, tools, and partners</span>
          </li>
        </ul>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800">Pitch Your Startup</h2>
          <p class="text-gray-600 leading-relaxed mb-8">
            We're looking for exceptional founders building innovative products. If you're ready to take your startup to the next level, we'd love to hear from you.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="mailto:hi@kiranjohns.com" 
               class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md w-full sm:w-auto">
              Pitch Your Startup
            </a>
          </div>
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
// Add state management for tabs
const activeTab = ref('investors')

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - KPH Fund` : "KPH Fund - Backing Kerala's Top 1% Startups";
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
        "name": "KPH Fund",
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
