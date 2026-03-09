function LeadForm() {
  return (
    <section className="lead-form-wrapper" aria-labelledby="contact-form-heading">
      <div className="section-divider" aria-hidden="true" />

      <div className="lead-form-section">
        <div className="lead-form-image-wrap">
          <img
            src="/businesscard.jpeg"
            alt="Victor's Real Estate contact card"
            className="lead-form-image"
          />
        </div>

        <div className="lead-form-card">
          <p className="lead-form-eyebrow">Contact Me</p>
          <h2 id="contact-form-heading">Let's Talk About Your Real Estate Goals</h2>
          <p className="lead-form-copy">
            Share your contact details and a short message. I&apos;ll follow up with you directly.
          </p>

          <form className="lead-form">
            <label className="lead-form-field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" autoComplete="name" />
            </label>

            <label className="lead-form-field">
              <span>Phone Number</span>
              <input type="tel" name="phone" placeholder="(555) 123-4567" autoComplete="tel" />
            </label>

            <label className="lead-form-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" autoComplete="email" />
            </label>

            <label className="lead-form-field lead-form-field-message">
              <span>Short Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me a little about what you need."
              />
            </label>

            <button type="submit" className="lead-form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LeadForm;
