export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname
  
  // Add X-Robots-Tag header for all startup routes
  if (path.startsWith('/startups')) {
    // Set X-Robots-Tag header to prevent indexing
    setResponseHeader(event, 'X-Robots-Tag', 'noindex, nofollow')
    
    // Continue with authentication check
    const cookie = parseCookies(event)
    const isAuthenticated = cookie['startups-auth'] === 'true'
    
    if (!isAuthenticated) {
      // Redirect to password page
      return sendRedirect(event, '/password', 302)
    }
  }
}) 