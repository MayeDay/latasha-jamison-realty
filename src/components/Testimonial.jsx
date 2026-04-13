import { useState, useEffect } from 'react';
import './Testimonial.css';

// TODO: Replace with real reviews from RateMyAgent once API access is granted
const REVIEWS = [
  {
    name: 'Marcus T.',
    service: 'Home Buyer · Maple Heights',
    quote: "LaTasha made the entire home-buying process seamless. Her knowledge of the Cleveland market is unmatched — she fought hard to get us the best deal possible.",
    stars: 5,
  },
  {
    name: 'Denise W.',
    service: 'Home Seller · Garfield Heights',
    quote: "My house sold in under two weeks! LaTasha's marketing strategy and communication throughout the process was phenomenal. Tasha sold it!",
    stars: 5,
  },
  {
    name: 'James & Keisha R.',
    service: 'First-Time Buyers · Cleveland Heights',
    quote: "As first-time homeowners we were nervous about every step. LaTasha guided us with patience and real expertise. We couldn't be happier with our new home.",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="testimonial__star">★</span>
      ))}
    </div>
  );
}

export default function Testimonial() {
  const [index, setIndex]   = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (next) => {
    setFading(true);
    setTimeout(() => {
      setIndex(next);
      setFading(false);
    }, 280);
  };

  const prev = () => goTo((index - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => goTo((index + 1) % REVIEWS.length);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((index + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [index]);

  const review = REVIEWS[index];

  return (
    <section className="testimonial">
      <div className="testimonial__inner">
        <span className="section-label">Client Reviews</span>

        <div className={`testimonial__card${fading ? ' testimonial__card--fade' : ''}`}>
          <Stars count={review.stars} />
          <blockquote className="testimonial__quote">
            "{review.quote}"
          </blockquote>
          <cite className="testimonial__cite">
            <span className="testimonial__name">{review.name}</span>
            <span className="testimonial__service">{review.service}</span>
          </cite>
        </div>

        <div className="testimonial__controls">
          <button className="testimonial__arrow" onClick={prev} aria-label="Previous review">
            ←
          </button>
          <div className="testimonial__dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                className={`testimonial__dot${i === index ? ' testimonial__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <button className="testimonial__arrow" onClick={next} aria-label="Next review">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
