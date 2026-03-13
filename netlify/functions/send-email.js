const nodemailer = require('nodemailer')

const response = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return response(405, { error: 'Method Not Allowed' })
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing EMAIL_USER or EMAIL_PASS env vars')
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

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'r10nightwing@gmail.com',
      replyTo: email,
      subject: 'New Real Estate Lead',
      text: `
Name: ${name}
Phone: ${phone || 'N/A'}
Email: ${email}

Message:
${message || '(no message provided)'}
`,
    })

    return response(200, { message: 'Email sent successfully' })
  } catch (err) {
    console.error('Error sending email', err)
    return response(500, { error: 'Failed to send email' })
  }
}
