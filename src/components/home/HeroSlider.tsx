import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../../data/banners';
import { useCart } from '../../context/CartContext';

export const HeroSlider: React.FC = () => {
  const { setActiveCategory } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleCtaClick = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div style={{
      position: 'relative',
      height: '580px',
      overflow: 'hidden',
      background: '#090b0e'
    }}>
      {/* Background Slides */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? 'scale(1)' : 'scale(1.04)',
            transition: 'opacity 0.8s ease-in-out, transform 1.2s ease-out',
            pointerEvents: index === currentSlide ? 'auto' : 'none'
          }}
        >
          {/* Hero Image */}
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 25%'
            }}
          />
          {/* Rich Radial Gradient Dark Overlay for Maximum Readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(10, 12, 16, 0.94) 0%, rgba(10, 12, 16, 0.75) 50%, rgba(10, 12, 16, 0.4) 100%)'
          }} />
        </div>
      ))}

      {/* Content Container */}
      <div className="container" style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '640px' }}>
          {/* Tag & Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="section-tag" style={{ margin: 0 }}>
              <Sparkles size={13} />
              {slide.tag}
            </span>
            <span className="badge badge-bestseller">
              {slide.badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#ffffff',
            marginBottom: '0.75rem',
            textTransform: 'uppercase'
          }}>
            {slide.title} <br />
            <span style={{
              background: 'linear-gradient(135deg, #e63946, #f43f5e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {slide.highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.05rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            marginBottom: '2rem',
            maxWidth: '540px'
          }}>
            {slide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleCtaClick(slide.ctaCategory)}
              className="btn btn-primary btn-lg"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('canvas-section');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-secondary btn-lg"
            >
              Choose Your Canvas
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          left: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(20, 23, 31, 0.65)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(230, 57, 70, 0.8)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(20, 23, 31, 0.65)'; }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(20, 23, 31, 0.65)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(230, 57, 70, 0.8)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(20, 23, 31, 0.65)'; }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicator Dots */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        zIndex: 20
      }}>
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? '28px' : '8px',
              height: '8px',
              borderRadius: 'var(--radius-full)',
              background: idx === currentSlide ? '#e63946' : 'rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};
