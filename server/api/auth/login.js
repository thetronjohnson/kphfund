export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  
  // Verify password on server side
  if (body.password === config.startupPassword) {
    // Set HTTP-only cookie that can't be modified by client-side JS
    setCookie(event, 'startups-auth', 'true', {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 day
      path: '/'
    })
    return { success: true }
  }
  
  return createError({
    statusCode: 401,
    message: 'Invalid password'
  })
}) 