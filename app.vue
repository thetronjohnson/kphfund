<template>
  <main class="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <ContentDoc 
      path="/" 
      class="prose prose-lg prose-slate max-w-none"
    />
    <section class="mt-16">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">
        More from KPH
        <div class="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <a href="https://kphmafia.com" 
           target="_blank"
           rel="noopener noreferrer"
           class="group block p-8 bg-white border border-gray-200 rounded-2xl hover:bg-yellow-50 transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold text-gray-800">KPH Mafia</h3>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <p class="text-gray-600">Join our community</p>
        </a>
        <a href="https://www.youtube.com/@FelixJosemonOfficial" 
           target="_blank"
           rel="noopener noreferrer"
           class="group block p-8 bg-white border border-gray-200 rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold text-gray-800">YouTube</h3>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-red-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <p class="text-gray-600">Watch startup insights & stories</p>
        </a>
        <a href="https://wiki.kphmafia.com" 
           target="_blank"
           rel="noopener noreferrer"
           class="group block p-8 bg-white border border-gray-200 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold text-gray-800">KPH Wiki</h3>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <p class="text-gray-600">Access startup resources</p>
        </a>
        <a href="https://nas.io/kphjobs/" 
           target="_blank"
           rel="noopener noreferrer"
           class="group block p-8 bg-white border border-gray-200 rounded-2xl hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold text-gray-800">KPH Jobs</h3>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 group-hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <p class="text-gray-600">Find jobs from our startup community</p>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
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
          "https://kphmafia.com",
          "https://www.youtube.com/@FelixJosemonOfficial",
          "https://wiki.kphmafia.com",
          "https://nas.io/kphjobs/"
        ]
      })
    }
  ]
})
</script>
