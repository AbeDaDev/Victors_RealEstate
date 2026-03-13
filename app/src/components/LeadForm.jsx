import { useState } from 'react'

function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': form.getAttribute('name'), ...Object.fromEntries(formData) }),
      })
      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('Form submission failed', error)
      alert('Something went wrong sending your message. Please try again.')
    }
  }

  return (
    <section className="lead-form-wrapper" id="contact" aria-labelledby="contact-form-heading">
      <div className="section-divider" aria-hidden="true" />

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

          {submitted ? (
            <div className="lead-form-thanks" role="status" aria-live="polite">
              <h3>Can’t wait to connect with you.</h3>
              <p>I’ll reach out shortly using the details you provided.</p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="lead-form"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <label className="lead-form-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
              </label>

              <label className="lead-form-field">
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="(555) 123-4567" autoComplete="tel" />
              </label>

              <label className="lead-form-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
              </label>

              <label className="lead-form-field lead-form-field-message">
                <span>Short Message</span>
                <textarea name="message" rows="5" placeholder="Tell me a little about what you need." />
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
