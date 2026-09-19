import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    finalTotal,
    setIsCheckoutOpen
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const result = applyCoupon(couponInput);
    setCouponFeedback(result);
    if (result.success) {
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Free Express Gift threshold (e.g. ₹1,499)
  const giftThreshold = 1499;
  const progressPercent = Math.min(100, Math.round((subtotal / giftThreshold) * 100));
  const remainingForGift = Math.max(0, giftThreshold - subtotal);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-medium)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-lg)',
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={22} color="#e63946" />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
              Your Bag ({cartItems.length})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{ color: 'var(--text-muted)', padding: '0.25rem' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping & Gift Threshold Bar */}
        <div style={{
          padding: '0.85rem 1.5rem',
          background: 'rgba(230, 57, 70, 0.08)',
          borderBottom: '1px solid rgba(230, 57, 70, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', marginBottom: '0.4rem', color: '#f8fafc' }}>
            <Truck size={16} color="#e63946" />
            {remainingForGift > 0 ? (
              <span>Add <strong>₹{remainingForGift}</strong> more to unlock Free Express Priority Dispatch!</span>
            ) : (
              <span style={{ color: '#10b981', fontWeight: 700 }}>🎉 You unlocked Free Express Delivery & Sticker Pack!</span>
            )}
          </div>
          <div style={{
            height: '6px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #e63946, #10b981)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              color: '#94a3b8',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b'
              }}>
                <ShoppingBag size={32} />
              </div>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Your shopping bag is empty</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Discover our curated drops or customize your own hoodie and oversize tee.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary btn-sm"
                style={{ marginTop: '0.5rem' }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative'
                }}
              >
                {/* Image */}
                <div style={{
                  width: '80px',
                  height: '88px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: item.selectedColor.hex,
                  position: 'relative',
                  flexShrink: 0
                }}>
                  <img
                    src={item.customUploadedImage || item.product.image}
                    alt={item.product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {item.customUploadedImage && (
                    <span style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '2px',
                      right: '2px',
                      fontSize: '0.58rem',
                      background: 'rgba(0,0,0,0.85)',
                      color: '#facc15',
                      fontWeight: 700,
                      textAlign: 'center',
                      borderRadius: '3px'
                    }}>
                      CUSTOM
                    </span>
                  )}
                </div>

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.3, fontWeight: 700 }}>
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ color: '#ef4444', padding: '0.2rem', opacity: 0.8 }}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0.25rem 0' }}>
                    <span>{item.selectedGarment.name}</span> • <span>Size {item.selectedSize}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    <span style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: item.selectedColor.hex,
                      border: '1px solid var(--border-medium)'
                    }} />
                    <span>{item.selectedColor.name}</span>
                    <span>•</span>
                    <span>{item.placement}</span>
                  </div>

                  {item.customText && (
                    <div style={{ fontSize: '0.72rem', color: '#facc15', fontStyle: 'italic', marginTop: '0.2rem' }}>
                      "{item.customText}"
                    </div>
                  )}

                  {/* Price & Stepper */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '0.75rem'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      overflow: 'hidden'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{ padding: '0.2rem 0.55rem', color: 'var(--text-primary)', fontWeight: 700 }}
                      >
                        -
                      </button>
                      <span style={{ padding: '0.2rem 0.6rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{ padding: '0.2rem 0.55rem', color: 'var(--text-primary)', fontWeight: 700 }}
                      >
                        +
                      </button>
                    </div>

                    <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1rem' }}>
                      ₹{item.unitPrice * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-surface)'
          }}>
            {/* Coupon Code Section */}
            <div style={{ marginBottom: '1rem' }}>
              {appliedCoupon ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  color: '#10b981'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Tag size={14} />
                    <span>Coupon <strong>{appliedCoupon}</strong> Applied (-₹{discountAmount})</span>
                  </div>
                  <button onClick={removeCoupon} style={{ color: '#ef4444', fontWeight: 700 }}>
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Coupon code (e.g. FIRST10)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.55rem 0.75rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-secondary btn-sm"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponFeedback && !appliedCoupon && (
                <div style={{
                  fontSize: '0.75rem',
                  color: couponFeedback.success ? '#10b981' : '#ef4444',
                  marginTop: '0.35rem'
                }}>
                  {couponFeedback.message}
                </div>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
                  <span>Discount</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Delivery Charges</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>FREE (All India)</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '0.6rem',
                borderTop: '1px solid var(--border-subtle)',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: 'var(--text-primary)'
              }}>
                <span>Total Amount</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Inclusive of all taxes (GST included)</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="btn btn-primary btn-full btn-lg"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
