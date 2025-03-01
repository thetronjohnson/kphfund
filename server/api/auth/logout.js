export default defineEventHandler((event) => {
  // Clear the auth cookie
  setCookie(event, 'startups-auth', '', {
    httpOnly: true,
    maxAge: 0,
    path: '/'
  })
  
  return { success: true }
}) 