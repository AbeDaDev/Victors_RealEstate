function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-divider" aria-hidden="true" />

      <div className="testimonials-header container">
        <p className="eyebrow">Client Wins</p>
        <h2 id="testimonials-heading">Trusted by buyers and sellers across the Inland Empire</h2>
        <p className="subhead">A few recent notes from clients who valued fast communication, honest guidance, and smooth closings.</p>
      </div>

      <div className="testimonials-viewport" aria-hidden="false">
        <div className="testimonials-track">
          <img src="/testimonial1.PNG" alt="testimonial 1" className="testimonial" />
          <img src="/testimonial2.PNG" alt="testimonial 2" className="testimonial" />
          <img src="/testimonial1.PNG" alt="testimonial 1 duplicate" className="testimonial" />
          <img src="/testimonial2.PNG" alt="testimonial 2 duplicate" className="testimonial" />
          {/* duplicates for seamless looping */}
          <img src="/testimonial1.PNG" alt="testimonial 1 duplicate" className="testimonial" />
          <img src="/testimonial2.PNG" alt="testimonial 2 duplicate" className="testimonial" />
          <img src="/testimonial1.PNG" alt="testimonial 1 duplicate" className="testimonial" />
          <img src="/testimonial2.PNG" alt="testimonial 2 duplicate" className="testimonial" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials
