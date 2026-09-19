import React, { useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useCart();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );

  const quickSearches = ['Anime', 'Custom Logo', 'Luffy', 'Porsche', 'Hoodie', 'Polo', 'Portrait'];

  return (
    <div className="modal-overlay" onClick={() => setIsSearchOpen(false)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          padding: '1.75rem',
          background: 'var(--bg-surface)'
        }}
      >
        {/* Header Search Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <Search size={22} color="#e63946" />
          <input
            type="text"
            autoFocus
            placeholder="Search anime, custom logo, hoodies, 240 GSM tees..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              fontSize: '1.1rem',
              color: 'var(--text-primary)',
              outline: 'none'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ color: 'var(--text-muted)', padding: '0.25rem' }}
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              background: 'var(--bg-surface-elevated)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}
          >
            ESC
          </button>
        </div>

        {/* Popular searches chips */}
        <div style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Sparkles size={12} color="#eab308" />
            Trending:
          </span>
          {quickSearches.map(term => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#e63946'; e.currentTarget.style.color = '#e63946'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div style={{ maxHeight: '380px', overflowY: 'auto' }}>
          {query.trim() === '' ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Type a character name, style, or apparel category to see live embroidery & printed apparel matches.
            </div>
          ) : filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-secondary)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                No designs found matching "{query}"
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Can't find what you're looking for? You can upload your own image or vector logo in our Custom Studio!
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  onClick={() => {
                    setQuickViewProduct(product);
                    setIsSearchOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(230, 57, 70, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(230, 57, 70, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-surface-elevated)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      {product.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {product.gsm} • {product.fabric}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      ₹{product.price}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#e63946', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      View <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
