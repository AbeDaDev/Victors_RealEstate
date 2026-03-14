const response = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})

// FUB expects Basic Auth with the API key as the username and any password (blank is fine).
const fubAuthHeader = () => {
  if (!process.env.FUB_API_KEY) return null
  const token = Buffer.from(`${process.env.FUB_API_KEY}:`).toString('base64')
  return `Basic ${token}`
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return response(405, { error: 'Method Not Allowed' })
  }

  const authHeader = fubAuthHeader()
  if (!authHeader) {
    console.error('Missing FUB_API_KEY env var')
    return response(500, { error: 'Follow Up Boss API key missing' })
  }

  let payload
  try {
    payload = JSON.parse(event.body || '{}')
  } catch (err) {
    console.error('Invalid JSON body', err)
    return response(400, { error: 'Invalid request body' })
  }

  const { name, phone, email, message } = payload
  if (!name || !email) {
    return response(400, { error: 'Name and email are required' })
  }

  const eventBody = {
    source: process.env.FUB_SOURCE || 'victors-realestate.com',
    system: process.env.FUB_SYSTEM || 'victors-realestate-site',
    type: 'General Inquiry',
    message: message || '(no message provided)',
    person: {
      firstName: name,
      emails: [{ value: email }],
      phones: phone ? [{ value: phone }] : [],
    },
  }

  try {
    const res = await fetch('https://api.followupboss.com/v1/events', {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventBody),
    })

    if (!res.ok) {
      const errText = await res.text().catch(() => '')
      throw new Error(`FUB error ${res.status}: ${errText}`)
    }

    return response(200, { message: 'Lead sent to Follow Up Boss' })
  } catch (err) {
    console.error('Error sending to Follow Up Boss', err)
    return response(500, { error: 'Failed to send lead' })
  }
}
