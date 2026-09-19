import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X, ChevronDown, Sparkles, Sun, Moon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CATEGORIES } from '../../data/categories';

export const Navbar: React.FC = () => {
  const {
    totalItems,
    subtotal,
    setIsCartOpen,
    setIsSearchOpen,
    setIsAuthModalOpen,
    setActiveCategory,
    theme,
    toggleTheme
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setIsShopDropdownOpen(false);
    setIsMobileMenuOpen(false);
    const catalogSection = document.getElementById('catalog-section');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--bg-nav)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        transition: 'all 0.25s ease-in-out'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          className="mobile-only-btn"
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            color: 'var(--text-primary)',
            padding: '0.5rem'
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}
        >
          {/* Stylized Needle / Thread Hexagon Emblem */}
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #e63946, #b91c1c)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 15px rgba(230, 57, 70, 0.35)',
            position: 'relative'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
              lineHeight: 1.1
            }}>
              EMBRO<span style={{ color: '#e63946' }}>PRINT</span>
            </div>
            <div style={{
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              Stitching Style • Crafting Comfort
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              fontSize: '0.92rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            Home
          </a>

          {/* Shop with Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsShopDropdownOpen(true)}
            onMouseLeave={() => setIsShopDropdownOpen(false)}
          >
            <button
              onClick={() => scrollToSection('catalog-section')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              Shop
              <ChevronDown size={15} style={{
                transform: isShopDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s'
              }} />
            </button>

            {/* Dropdown Menu */}
            {isShopDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-1rem',
                  width: '240px',
                  background: 'var(--bg-surface)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  padding: '0.75rem',
                  boxShadow: 'var(--shadow-lg)',
                  animation: 'fadeIn 0.15s ease-out'
                }}
              >
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '0.6rem 0.8rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(230, 57, 70, 0.12)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#e2e8f0';
                    }}
                  >
                    <span>{cat.name}</span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Custom Studio CTA Nav */}
          <button
            onClick={() => handleCategoryClick('custom-embroidery')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.92rem',
              fontWeight: 700,
              color: '#facc15',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            <Sparkles size={15} />
            Custom Studio
          </button>

          <button
            onClick={() => scrollToSection('canvas-section')}
            style={{
              fontSize: '0.92rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            Canvases
          </button>

          <button
            onClick={() => scrollToSection('reviews-section')}
            style={{
              fontSize: '0.92rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            Reviews
          </button>

          <button
            onClick={() => scrollToSection('faq-section')}
            style={{
              fontSize: '0.92rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            FAQ
          </button>

          <button
            onClick={() => scrollToSection('contact-section')}
            style={{
              fontSize: '0.92rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            Contact
          </button>
        </nav>

        {/* Action Controls (Theme, Search, Account, Cart) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-input)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme === 'dark' ? '#facc15' : '#475569',
              border: '1px solid var(--border-subtle)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search printed t-shirts"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-input)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <Search size={19} />
          </button>

          {/* Account Trigger */}
          <button
            onClick={() => setIsAuthModalOpen(true)}
            aria-label="Account Login or Register"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-input)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <User size={19} />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="View shopping cart"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.15), rgba(230, 57, 70, 0.08))',
              border: '1px solid rgba(230, 57, 70, 0.4)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.88rem'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#e63946'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(230, 57, 70, 0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <ShoppingBag size={20} color="#e63946" />
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-10px',
                  background: '#e63946',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(230, 57, 70, 0.6)'
                }}>
                  {totalItems}
                </span>
              )}
            </div>
            <span style={{ display: 'none' }} className="cart-price-text">
              ₹{subtotal.toLocaleString('en-IN')}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-medium)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <button
            onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Home
          </button>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Categories
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  style={{
                    textAlign: 'left',
                    padding: '0.5rem 0.6rem',
                    background: 'var(--bg-surface-elevated)',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
            <button
              onClick={() => handleCategoryClick('custom-embroidery')}
              style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 700, color: '#facc15', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Sparkles size={16} />
              Custom Studio
            </button>
            <button
              onClick={() => scrollToSection('canvas-section')}
              style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}
            >
              Apparel Canvases
            </button>
            <button
              onClick={() => scrollToSection('reviews-section')}
              style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}
            >
              Customer Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq-section')}
              style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}
            >
              FAQ & Care Guide
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              style={{ textAlign: 'left', fontSize: '0.95rem', fontWeight: 600, color: '#e63946' }}
            >
              Contact & Studio Location (Pune)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
