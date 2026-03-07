function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-viewport" aria-hidden="false">
        <div className="testimonials-track">
          <img src="/testimonial1.png" alt="testimonial 1" className="testimonial" />
          <img src="/testimonial2.png" alt="testimonial 2" className="testimonial" />
          <img src="/testimonial1.png" alt="testimonial 1 duplicate" className="testimonial" />
          <img src="/testimonial2.png" alt="testimonial 2 duplicate" className="testimonial" />
          {/* duplicates for seamless looping */}
          <img src="/testimonial1.png" alt="testimonial 1 duplicate" className="testimonial" />
          <img src="/testimonial2.png" alt="testimonial 2 duplicate" className="testimonial" />
          <img src="/testimonial1.png" alt="testimonial 1 duplicate" className="testimonial" />
          <img src="/testimonial2.png" alt="testimonial 2 duplicate" className="testimonial" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials