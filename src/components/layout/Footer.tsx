import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Truck, RefreshCw, Clock, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const InstagramIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const { setActiveCategory } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    const catalogSection = document.getElementById('catalog-section');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        {/* Trust Badges Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          paddingBottom: '3.5rem',
          marginBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(230, 57, 70, 0.1)',
              border: '1px solid rgba(230, 57, 70, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#e63946'
            }}>
              <Truck size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem' }}>All India Free Delivery</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Zero shipping fees on all prepaid & COD orders</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(234, 179, 8, 0.1)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#eab308'
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem' }}>240+ GSM Heavyweight</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>100% combed loopknit bio-washed pure cotton</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981'
            }}>
              <RefreshCw size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem' }}>7-Day Easy Exchange</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hassle-free size replacement with pickup</div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#e63946',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 800,
                color: 'var(--text-primary)'
              }}>
                EMBRO<span style={{ color: '#e63946' }}>PRINT</span>
              </span>
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Specializing in industrial precision high-density embroidery, custom streetwear, and bespoke printed apparel. Crafted for comfort, engineered for durability.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} color="#e63946" style={{ flexShrink: 0, marginTop: '2px' }} />
                <a
                  href="https://maps.google.com/?q=DP+Rd,+Kothrud,+Pune,+Maharashtra+411038+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.4 }}
                >
                  DP Rd, Kothrud, Pune, Maharashtra 411038 India
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Phone size={16} color="#10b981" />
                <a href="tel:+917050699367" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  +91 70506 99367
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Mail size={16} color="#38bdf8" />
                <a href="mailto:tailorvisit.kt@gmail.com" style={{ color: 'var(--text-secondary)' }}>
                  tailorvisit.kt@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <Clock size={16} color="#eab308" />
                <span style={{ color: '#10b981', fontWeight: 600 }}>Open 24 Hours • 7 Days a Week</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Shop Apparel
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li>
                <button onClick={() => handleCategoryClick('bestseller')} style={{ color: 'var(--text-secondary)' }}>
                  Best Sellers
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('anime')} style={{ color: 'var(--text-secondary)' }}>
                  Anime Lovers Collection
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('custom-embroidery')} style={{ color: 'var(--text-secondary)' }}>
                  Custom Logo Studio
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('portrait')} style={{ color: 'var(--text-secondary)' }}>
                  Stitch Your Story (Portraits)
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('hoodies')} style={{ color: 'var(--text-secondary)' }}>
                  320 GSM Winter Hoodies
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryClick('polo')} style={{ color: 'var(--text-secondary)' }}>
                  Cotton Polo T-Shirts
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Customer Care
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li><a href="#contact-section" style={{ color: 'var(--text-secondary)' }}>Contact & Visit Studio (Pune)</a></li>
              <li><a href="#faq-section" style={{ color: 'var(--text-secondary)' }}>Frequently Asked Questions</a></li>
              <li><a href="#canvas-section" style={{ color: 'var(--text-secondary)' }}>Fabric & GSM Guide</a></li>
              <li><a href="https://web.whatsapp.com/send?phone=917050699367" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', fontWeight: 600 }}>WhatsApp Support (+91 70506 99367)</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert("7-Day Hassle Free Replacement: If your size doesn't fit, simply WhatsApp us at +91 70506 99367 and we will arrange a reverse pickup!"); }} style={{ color: 'var(--text-secondary)' }}>Shipping & Exchange Policy</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy Commitment: We strictly protect your uploaded photos and logos. Uploaded portraits are deleted after order embroidery is dispatched."); }} style={{ color: 'var(--text-secondary)' }}>Privacy & Data Security</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Get 10% Off
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Subscribe to get secret drops, exclusive VIP coupon codes, and custom artwork invitations.
            </p>

            {subscribed ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '0.85rem',
                borderRadius: '8px',
                color: '#10b981',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle2 size={18} />
                <span>You're subscribed! Use code <strong>FIRST10</strong> for 10% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.85rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    style={{ padding: '0.65rem 1rem' }}
                    aria-label="Subscribe to newsletter"
                  >
                    <Send size={15} />
                  </button>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>No spam. Unsubscribe anytime.</span>
              </form>
            )}

            {/* Social Icons & Storefront Channels */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com/tailorvisit_?stkn=MWMzcWppcGxqaWkydQ=="
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram: @tailorvisit_ (1,053 Followers)"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-surface-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'transform 0.2s, background-color 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#e63946'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href="https://www.amazon.in/l/27943762031"
                target="_blank"
                rel="noopener noreferrer"
                title="Official Amazon India Storefront"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-surface-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'transform 0.2s, background-color 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#f59e0b'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <ShoppingBag size={18} />
              </a>

              <a
                href="https://web.whatsapp.com/send?phone=917050699367"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp (+91 70506 99367)"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Phone size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} Embroprint India. All Rights Reserved. Stitching Style, Crafting Comfort.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>🔒 256-Bit SSL Encrypted Checkout</span>
            <span>•</span>
            <span>UPI / Cards / COD Supported</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
