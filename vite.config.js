import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function abstractEmailVerifyPlugin(apiKey) {
  return {
    name: 'abstract-email-verify',
    configureServer(server) {
      server.middlewares.use('/api/verify-email', async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')

        if (req.method === 'OPTIONS') {
          res.statusCode = 204
          res.end()
          return
        }

        try {
          const host = req.headers.host || 'localhost'
          const url = new URL(req.url || '', `http://${host}`)
          const email = (url.searchParams.get('email') || '').trim()

          if (!email) {
            res.statusCode = 400
            res.end(JSON.stringify({ isValid: false, message: 'Email required.' }))
            return
          }

          if (!apiKey) {
            res.statusCode = 500
            res.end(
              JSON.stringify({
                isValid: false,
                message: 'ABSTRACT_EMAIL_API_KEY is not configured.',
              }),
            )
            return
          }

          const abstractUrl = `https://emailvalidation.abstractapi.com/v1/?api_key=${encodeURIComponent(apiKey)}&email=${encodeURIComponent(email)}`
          const response = await fetch(abstractUrl)
          const data = await response.json()
          const isValid =
            data?.is_valid_format?.value === true &&
            data?.deliverability !== 'UNDELIVERABLE' &&
            data?.is_disposable_email?.value !== true

          res.statusCode = 200
          res.end(
            JSON.stringify({
              isValid,
              message: isValid
                ? 'Email is verified and available.'
                : 'Please enter a verified email.',
            }),
          )
        } catch {
          res.statusCode = 500
          res.end(
            JSON.stringify({
              isValid: false,
              message: 'Email verification temporarily unavailable.',
            }),
          )
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '')

  return {
    plugins: [react(), abstractEmailVerifyPlugin(env.ABSTRACT_EMAIL_API_KEY)],
    publicDir: path.resolve(__dirname, 'Assets'),
    server: {
      port: 5173,
      open: true,
    },
  }
})
