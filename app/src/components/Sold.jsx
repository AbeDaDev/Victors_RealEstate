import { useEffect, useMemo, useState } from 'react'

const slides = [
  { src: '/sold/sold.jpg', alt: 'Sold home banner' },
  { src: '/sold/sold_main.PNG', alt: 'Main sold banner' },
  { src: '/sold/offeraccepted.jpg', alt: 'Offer accepted banner' },
  { src: '/sold/offeraccepted2.jpg', alt: 'Second offer accepted banner' }
]

function Sold() {
  const [index, setIndex] = useState(0)
  const total = useMemo(() => slides.length, [])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 4500)
    return () => clearInterval(id)
  }, [total])

  const goTo = (i) => setIndex((i + total) % total)

  return (
    <section className="sold-hero" id="sold">
      <div className="sold-slide" style={{ backgroundImage: `url(${slides[index].src})` }}>
        <div className="sold-overlay">
          <h2>Recently Sold & Under Contract</h2>
          <p>Proven results for Southern California buyers and sellers.</p>
          <ul className="sold-highlights">
            <li>Pricing strategy grounded in current comps and absorption rates.</li>
            <li>Professional photography, staging guidance, and aggressive launch marketing.</li>
            <li>Offer vetting, negotiation, and escrow oversight to keep deals on track.</li>
          </ul>
        </div>
      </div>

      <div className="sold-controls">
        <button type="button" className="sold-arrow" aria-label="Previous" onClick={() => goTo(index - 1)}>
          ‹
        </button>
        <div className="sold-dots" role="tablist" aria-label="Sold listings carousel">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              className={`sold-dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button type="button" className="sold-arrow" aria-label="Next" onClick={() => goTo(index + 1)}>
          ›
        </button>
      </div>
    </section>

  )
}

export default Sold
