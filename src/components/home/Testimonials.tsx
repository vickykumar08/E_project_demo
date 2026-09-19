import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { REVIEWS } from '../../data/reviews';

export const Testimonials: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextReview = () => {
    setStartIndex(prev => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setStartIndex(prev => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const displayedReviews = [
    REVIEWS[startIndex],
    REVIEWS[(startIndex + 1) % REVIEWS.length],
    REVIEWS[(startIndex + 2) % REVIEWS.length]
  ];

  return (
    <section id="reviews-section" style={{
      padding: '5rem 0',
      background: 'var(--bg-main)',
      borderTop: '1px solid var(--border-subtle)',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        {/* Header with Google Trustindex Badge */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '3.5rem'
        }}>
          <span className="section-tag">
            <MessageSquareQuote size={14} />
            Verified Customer Stories
          </span>

          <h2 className="section-title">WHAT OUR COMMUNITY SAYS</h2>

          {/* Google 5-Star Trust Badge (matching Embroprint) */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.65rem 1.25rem',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            marginTop: '0.5rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>EXCELLENT</strong>
              <div style={{ display: 'flex', color: '#eab308' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#eab308" color="#eab308" />
                ))}
              </div>
            </div>
            <span style={{ color: 'var(--border-medium)' }}>|</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Based on <strong>66+ Google Reviews</strong>
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '1.75rem',
          marginBottom: '2.5rem'
        }}>
          {displayedReviews.map(rev => (
            <div
              key={rev.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(230, 57, 70, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div>
                {/* Header: Avatar, Name, Google Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                        {rev.author}
                      </h4>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {rev.timeAgo}
                      </div>
                    </div>
                  </div>

                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.72rem',
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    <CheckCircle size={12} />
                    Google Verified
                  </span>
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', color: '#eab308', marginBottom: '0.75rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#eab308" color="#eab308" />
                  ))}
                </div>

                {/* Comment */}
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.25rem'
                }}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Product Ordered Tag */}
              <div style={{
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
              }}>
                Purchased: <strong style={{ color: 'var(--text-primary)' }}>{rev.productOrdered}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            onClick={prevReview}
            aria-label="Previous Testimonials"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#e63946'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'; }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextReview}
            aria-label="Next Testimonials"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#e63946'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'; }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
