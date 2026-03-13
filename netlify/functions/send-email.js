const nodemailer = require('nodemailer')

exports.handler = async (event) => {
  const { name, phone, email, message } = JSON.parse(event.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'agent@email.com',
    subject: 'New Real Estate Lead',
    text: `
Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
`,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent successfully' }),
  }
}
