import { useState } from 'react'

function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = { name, phone, email, message }

    try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        const msg = data.error || `Request failed: ${res.status}`
        throw new Error(msg)
      }

      setSubmitted(true)
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
      alert('Message sent!')
    } catch (error) {
      console.error('Error sending message', error)
      alert(error.message || 'There was a problem sending your message. Please try again.')
    }
  }

  return (
    <section className="lead-form-wrapper" id="contact" aria-labelledby="contact-form-heading">
      <div className="section-divider" aria-hidden="true" />

      <div className="contact-intro">
        <p className="eyebrow">Start the Conversation</p>
        <h2>Tell me about your move or your property goals</h2>
        <p>
          Whether you’re buying, selling, or exploring options, I’ll respond within one business day with next steps,
          a suggested timeline, and resources tailored to your situation.
        </p>
      </div>

      <div className="lead-form-section">
        <div className="lead-form-image-wrap">
          <img
            src="/portrait.jpeg"
            alt="Victor's Real Estate contact card"
            className="lead-form-image"
          />
        </div>

        <div className="lead-form-card">
          <p className="lead-form-eyebrow">Contact Me</p>
          <h2 id="contact-form-heading">Let's Talk About Your Real Estate Goals</h2>
          <p className="lead-form-copy">
            Share your contact details and a short message. I'll follow up with you directly.
          </p>
          <ul className="lead-form-highlights">
            <li>Full-service representation for buyers and sellers across the Inland Empire and San Gabriel Valley.</li>
            <li>Clear weekly updates, data-backed pricing strategies, and a vetted network of lenders, inspectors, and contractors.</li>
            <li>Schedule a 15-minute consultation to outline your goals and next steps.</li>
          </ul>

          {submitted ? (
            <div className="lead-form-thanks" role="status" aria-live="polite">
              <h3>Can’t wait to connect with you.</h3>
              <p>I’ll reach out shortly using the details you provided.</p>
            </div>
          ) : (
            <form className="lead-form" onSubmit={handleSubmit}>
              <label className="lead-form-field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="lead-form-field">
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              <label className="lead-form-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="lead-form-field lead-form-field-message">
                <span>Short Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me a little about what you need."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <button type="submit" className="lead-form-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default LeadForm
