import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { useCart } from '../../context/CartContext';

interface CategoryFiltersProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
  filteredCount: number;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  sortBy,
  setSortBy,
  filteredCount
}) => {
  const { activeCategory, setActiveCategory } = useCart();

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      {/* Category Pills Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        overflowX: 'auto',
        paddingBottom: '0.75rem',
        scrollbarWidth: 'none'
      }}>
        {CATEGORIES.map(cat => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                background: isActive ? '#e63946' : 'var(--bg-surface-elevated)',
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                border: isActive ? '1px solid #e63946' : '1px solid var(--border-subtle)',
                boxShadow: isActive ? '0 4px 14px rgba(230, 57, 70, 0.35)' : 'none'
              }}
            >
              <span>{cat.name}</span>
              <span style={{
                fontSize: '0.72rem',
                padding: '0.1rem 0.4rem',
                borderRadius: 'var(--radius-full)',
                background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'var(--bg-input)',
                color: isActive ? '#ffffff' : 'var(--text-muted)'
              }}>
                {cat.itemCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary Bar: Count & Sort */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Showing <strong style={{ color: 'var(--text-primary)' }}>{filteredCount}</strong> printed & embroidered designs
        </div>

        {/* Sort Select */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SlidersHorizontal size={15} style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: '8px',
              padding: '0.4rem 0.8rem',
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="featured">Featured / Best Sellers</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated (★ 5.0)</option>
            <option value="newest">New Arrivals</option>
          </select>
        </div>
      </div>
    </div>
  );
};
