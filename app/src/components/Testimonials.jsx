const testimonials = [
  { src: '/testimonial1.PNG', alt: 'Testimonial 1' },
  { src: '/testimonial2.PNG', alt: 'Testimonial 2' },
  { src: '/testimonial3.PNG', alt: 'Testimonial 3' },
  { src: '/testimonial4.PNG', alt: 'Testimonial 4' }
]

// Duplicate the set three times for a longer continuous marquee
const marqueeImages = [...testimonials, ...testimonials, ...testimonials]

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
          {marqueeImages.map((item, index) => (
            <img key={`${item.src}-${index}`} src={item.src} alt={item.alt} className="testimonial" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials
