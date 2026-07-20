const VERIFY_URL = import.meta.env.DEV
  ? '/api/verify-email'
  : import.meta.env.VITE_VERIFY_EMAIL_URL || 'https://tasteology.us/verify-email.php'

/**
 * Email verification via Tasteology verify-email endpoint (Abstract API behind it).
 * Matches For Information email-verify.js contract: { isValid: boolean }
 */
export async function verifyEmail(email) {
  const trimmed = (email || '').trim()
  if (!trimmed) {
    return { isValid: false, message: '' }
  }

  const url = `${VERIFY_URL}${VERIFY_URL.includes('?') ? '&' : '?'}email=${encodeURIComponent(trimmed)}`
  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  })

  const data = await response.json()
  return {
    isValid: data?.isValid === true,
    message: data?.message || '',
  }
}

export async function executeRecaptcha(action = 'consultation_form') {
  const sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  if (!sitekey || typeof window.grecaptcha === 'undefined') {
    return ''
  }

  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(sitekey, { action })
        .then(resolve)
        .catch(reject)
    })
  })
}
