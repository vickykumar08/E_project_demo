import React, { useState, useMemo } from 'react';
import { ArrowUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { ProductCard } from './ProductCard';
import { CategoryFilters } from './CategoryFilters';
import { useCart } from '../../context/CartContext';

export const ProductGrid: React.FC = () => {
  const { activeCategory, setQuickViewProduct } = useCart();
  const [sortBy, setSortBy] = useState('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Category Filter
    if (activeCategory !== 'all') {
      if (activeCategory === 'bestseller') {
        list = list.filter(p => p.badge === 'BESTSELLER' || p.tags.includes('bestseller'));
      } else if (activeCategory === 'hoodies') {
        list = list.filter(p => p.availableGarments.includes('hoodie') || p.category === 'hoodies');
      } else if (activeCategory === 'polo') {
        list = list.filter(p => p.availableGarments.includes('polo-tee') || p.category === 'polo');
      } else {
        list = list.filter(p => p.category === activeCategory || p.tags.includes(activeCategory));
      }
    }

    // Sort
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.badge === 'NEW' ? 1 : 0) - (a.badge === 'NEW' ? 1 : 0));
    }

    return list;
  }, [activeCategory, sortBy]);

  const activeCategoryObj = CATEGORIES.find(c => c.id === activeCategory);

  const scrollToTopCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCustomStudio = () => {
    const customStudio = PRODUCTS.find(p => p.id === 'prod-2') || PRODUCTS[1];
    setQuickViewProduct(customStudio);
  };

  return (
    <section id="catalog-section" style={{ padding: '4.5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-tag">
            <Sparkles size={14} />
            Handcrafted Drops Archive
          </span>
          <h2 className="section-title">THE EMBROPRINT ARCHIVE</h2>
          <p className="section-desc">
            Explore our complete archive of over 100+ anime drops, vintage automotive schematics, heavy fleece hoodies, custom corporate polos, and bespoke contour pet portraits.
          </p>
        </div>

        {/* Filters */}
        <CategoryFilters
          sortBy={sortBy}
          setSortBy={setSortBy}
          filteredCount={filteredAndSortedProducts.length}
        />

        {/* Product Cards Grid */}
        {filteredAndSortedProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No products found in this category</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Try exploring our All Collection or Custom Studio.</p>
          </div>
        ) : (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}>
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Bottom Milestone Bar */}
            <div style={{
              marginTop: '3.5rem',
              padding: '2.25rem 2rem',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1.25rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#10b981',
                fontSize: '0.95rem',
                fontWeight: 700
              }}>
                <CheckCircle2 size={20} />
                <span>Showing all {filteredAndSortedProducts.length} {activeCategoryObj?.name || 'Collection'} designs</span>
              </div>

              <p style={{ maxWidth: '580px', color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                Didn't find the exact artwork or motif you were looking for? Bring your own artwork, photograph, or brand logo and let our industrial Tajima machines stitch it into reality.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  onClick={handleOpenCustomStudio}
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}
                >
                  <Sparkles size={16} />
                  <span>Design Custom Apparel</span>
                </button>

                <button
                  onClick={scrollToTopCatalog}
                  className="btn btn-secondary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}
                >
                  <ArrowUp size={16} />
                  <span>Back to Top of Archive</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
