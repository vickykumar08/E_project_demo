import React from 'react';
import { Star, Eye, ShoppingBag } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { GARMENT_CANVASES, COLOR_OPTIONS } from '../../data/garments';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setQuickViewProduct, addToCart } = useCart();

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultGarment = GARMENT_CANVASES.find(g => g.id === product.availableGarments[0]) || GARMENT_CANVASES[0];
    const defaultColor = product.colors[0] || COLOR_OPTIONS[0];

    addToCart({
      product,
      selectedGarment: defaultGarment,
      selectedColor: defaultColor,
      selectedSize: 'L',
      placement: 'Front Chest',
      unitPrice: product.price,
      quantity: 1
    });
  };

  return (
    <div
      onClick={() => setQuickViewProduct(product)}
      style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
      {/* Thumbnail Container */}
      <div style={{ position: 'relative', width: '100%', height: '310px', overflow: 'hidden', background: 'var(--bg-surface-elevated)' }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
        />

        {/* Badges on Top */}
        <div style={{
          position: 'absolute',
          top: '0.85rem',
          left: '0.85rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          zIndex: 2
        }}>
          {product.badge && (
            <span className={`badge ${
              product.badge === 'BESTSELLER' ? 'badge-bestseller' :
              product.badge === 'HOT' ? 'badge-hot' :
              product.badge === 'LIMITED' ? 'badge-limited' :
              product.badge === 'TRENDING' ? 'badge-trending' : 'badge-new'
            }`}>
              {product.badge}
            </span>
          )}
          <span className="badge badge-gsm">
            {product.gsm}
          </span>
        </div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '0.85rem',
              right: '0.85rem',
              background: '#e63946',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '0.25rem 0.55rem',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 2px 8px rgba(230, 57, 70, 0.5)',
              zIndex: 2
            }}
          >
            SAVE {discountPercent}%
          </span>
        )}

        {/* Quick View Hover Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '0.85rem',
            right: '0.85rem',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 3
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="btn btn-secondary btn-sm"
            style={{
              flex: 1,
              background: 'rgba(12, 14, 18, 0.85)',
              backdropFilter: 'blur(8px)',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff'
            }}
          >
            <Eye size={14} />
            <span>Quick View</span>
          </button>

          <button
            onClick={handleQuickAdd}
            className="btn btn-primary btn-sm"
            aria-label="Quick Add to Cart"
            style={{
              padding: '0.5rem 0.75rem',
              background: '#e63946'
            }}
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Rating Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', color: '#eab308' }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                fill={i < Math.floor(product.rating) ? '#eab308' : 'none'}
                color="#eab308"
              />
            ))}
          </div>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            {product.rating}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
            ({product.reviewCount})
          </span>
        </div>

        {/* Product Title */}
        <h4 style={{
          fontSize: '1.05rem',
          color: 'var(--text-primary)',
          marginBottom: '0.35rem',
          lineHeight: 1.3,
          fontWeight: 700
        }}>
          {product.name}
        </h4>

        {/* Subtitle / Spec */}
        <p style={{
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          marginBottom: '1rem',
          lineHeight: 1.4,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.subtitle}
        </p>

        {/* Price & Savings */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              ₹{product.price}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
              ₹{product.originalPrice}
            </span>
          </div>

          <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
            Incl. GST
          </span>
        </div>
      </div>
    </div>
  );
};
