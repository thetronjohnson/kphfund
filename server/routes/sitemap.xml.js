export default defineEventHandler(async (event) => {
  // Generate your sitemap XML here
  // Make sure to exclude any URLs that start with /startups/
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kph.vc/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`
  
  setResponseHeader(event, 'Content-Type', 'application/xml')
  return xml
}) 