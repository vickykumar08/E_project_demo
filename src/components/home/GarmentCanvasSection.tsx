import React from 'react';
import { Check, ArrowRight, Layers } from 'lucide-react';
import { GARMENT_CANVASES } from '../../data/garments';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';

export const GarmentCanvasSection: React.FC = () => {
  const { setQuickViewProduct } = useCart();

  const handleOrderCanvas = (garmentId: string) => {
    // Find a product corresponding to this garment or the custom studio product
    const matchingProduct = PRODUCTS.find(p => p.availableGarments.includes(garmentId as any)) || PRODUCTS[1];
    setQuickViewProduct(matchingProduct);
  };

  return (
    <section id="canvas-section" style={{
      padding: '5rem 0',
      background: 'var(--bg-surface-elevated)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">
            <Layers size={14} />
            Pure Fabric Craftsmanship
          </span>
          <h2 className="section-title">CHOOSE YOUR CANVAS</h2>
          <p className="section-desc">
            Heavyweight luxury blanks engineered specifically for dense embroidery needles and sharp high-definition textile prints.
          </p>
        </div>

        {/* 4 Canvas Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.75rem'
        }}>
          {GARMENT_CANVASES.map(canvas => (
            <div
              key={canvas.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(230, 57, 70, 0.5)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Image Container with GSM Tag */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={canvas.image}
                  alt={canvas.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(20, 23, 31, 0.95) 100%)'
                }} />
                <span
                  className="badge badge-gsm"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(12, 14, 18, 0.85)',
                    backdropFilter: 'blur(8px)',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {canvas.gsm}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                  {canvas.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#e63946', fontWeight: 600, marginBottom: '1.25rem' }}>
                  {canvas.subtitle}
                </p>

                {/* Features List */}
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  marginBottom: '1.75rem',
                  flex: 1
                }}>
                  {canvas.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{
                        marginTop: '3px',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: 'rgba(230, 57, 70, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={11} color="#e63946" strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Action */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Starts at</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      ₹{canvas.basePrice}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOrderCanvas(canvas.id)}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Customise</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
