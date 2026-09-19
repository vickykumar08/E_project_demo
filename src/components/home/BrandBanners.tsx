import React from 'react';
import { ArrowRight, Sparkles, Wand2, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';

export const BrandBanners: React.FC = () => {
  const { setQuickViewProduct, setActiveCategory } = useCart();

  const handleOpenCustomLogo = () => {
    const customLogoProd = PRODUCTS.find(p => p.id === 'prod-2') || PRODUCTS[1];
    setQuickViewProduct(customLogoProd);
  };

  const handleOpenPortrait = () => {
    const portraitProd = PRODUCTS.find(p => p.id === 'prod-5') || PRODUCTS[4];
    setQuickViewProduct(portraitProd);
  };

  const handleExploreVibe = () => {
    setActiveCategory('anime');
    const catalog = document.getElementById('catalog-section');
    if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      <div className="container">
        {/* Banner 1: Bring Your Brand to Life */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span className="section-tag" style={{ alignSelf: 'flex-start' }}>
              <Sparkles size={14} />
              BRING YOUR BRAND TO LIFE
            </span>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Get your logo beautifully embroidered on any apparel of your choice.
            </h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#facc15',
              fontWeight: 700,
              fontSize: '0.95rem'
            }}>
              <span>Choose Garment</span>
              <span>→</span>
              <span>Upload Logo</span>
              <span>→</span>
              <span>Get It Delivered</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              From venture-backed startups to creators and institutions—we offer industrial Tajima digitizing with sharp vector fidelity, zero setup charges on bulk orders, and doorstep delivery across India.
            </p>
            <div>
              <button
                onClick={handleOpenCustomLogo}
                className="btn btn-primary btn-lg"
              >
                <span>Order Custom Logo Today</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div style={{ height: '100%', minHeight: '340px', position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&auto=format&fit=crop&q=80"
              alt="Custom Logo Embroidery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(24, 28, 37, 0.4) 0%, transparent 60%)'
            }} />
          </div>
        </div>

        {/* Banner 2: Stitch Your Story */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          boxShadow: 'var(--shadow-md)',
          marginTop: '2.5rem'
        }}>
          <div style={{ height: '100%', minHeight: '340px', position: 'relative', order: 2 }}>
            <img
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=900&auto=format&fit=crop&q=80"
              alt="Stitch Your Story"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(270deg, rgba(24, 28, 37, 0.4) 0%, transparent 60%)'
            }} />
          </div>

          <div style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', order: 1 }}>
            <span className="section-tag" style={{ alignSelf: 'flex-start' }}>
              <Heart size={14} />
              STITCH YOUR STORY
            </span>
            <h2 style={{ fontSize: '2.1rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Get your story beautifully stitched into wearable memories ✨
            </h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#facc15',
              fontWeight: 700,
              fontSize: '0.95rem'
            }}>
              <span>Choose Garment</span>
              <span>→</span>
              <span>Upload Photo</span>
              <span>→</span>
              <span>Get It Delivered</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Faceless couple line-art, pet portraits, family sketches, and anniversary date embroidery. Our digital illustrators convert your memorable photos into heirloom pieces that last for years.
            </p>
            <div>
              <button
                onClick={handleOpenPortrait}
                className="btn btn-primary btn-lg"
              >
                <span>Customise Memory Now</span>
                <Wand2 size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Banner 3: Choose Your Vibe */}
        <div style={{
          marginTop: '2.5rem',
          background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.12) 0%, var(--bg-surface) 100%)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(230, 57, 70, 0.3)',
          padding: '3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <span className="section-tag">
            CHOOSE YOUR VIBE
          </span>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Anime, Art, Automobiles, or Anything You Love ✨
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 1.75rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Browse over 100+ ready-to-wear high-density embroidered drops and premium printed streetwear pieces designed for true enthusiasts.
          </p>
          <button
            onClick={handleExploreVibe}
            className="btn btn-primary btn-lg"
          >
            <span>Explore Complete Collection</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
