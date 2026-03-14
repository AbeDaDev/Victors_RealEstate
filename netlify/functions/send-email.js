const sgMail = require('@sendgrid/mail')

const response = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return response(405, { error: 'Method Not Allowed' })
  }

  const apiKey = process.env.SENDGRID_API_KEY
  const toEmail = process.env.SENDGRID_TO || process.env.EMAIL_TO || process.env.EMAIL_USER
  const fromEmail = process.env.SENDGRID_FROM || process.env.EMAIL_FROM || process.env.EMAIL_USER

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Missing SENDGRID_API_KEY or sender/recipient env vars')
    return response(500, { error: 'Email configuration missing' })
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

  sgMail.setApiKey(apiKey)

  const text = `
Name: ${name}
Phone: ${phone || 'N/A'}
Email: ${email}

Message:
${message || '(no message provided)'}
`

  const msg = {
    to: toEmail,
    from: fromEmail,
    replyTo: email,
    subject: 'New Real Estate Lead',
    text,
  }

  try {
    await sgMail.send(msg)
    return response(200, { message: 'Email sent successfully' })
  } catch (err) {
    console.error('Error sending email', err)
    return response(500, { error: 'Failed to send email' })
  }
}
