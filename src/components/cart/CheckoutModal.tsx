import React, { useState } from 'react';
import {
  X, CheckCircle, ShieldCheck, CreditCard,
  QrCode, Banknote, ArrowRight, Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems,
    finalTotal,
    discountAmount,
    clearCart
  } = useCart();

  const [step, setStep] = useState<'address' | 'payment' | 'success'>('address');

  // Address form fields
  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    phone: '9876543210',
    pincode: '110001',
    address: 'Flat 402, Green Valley Enclave, Sector 12',
    city: 'New Delhi',
    state: 'Delhi'
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    const generatedId = `EMBRO-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');

    // Confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }

    clearCart();
  };

  return (
    <div className="modal-overlay" onClick={() => setIsCheckoutOpen(false)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          padding: '2rem',
          background: 'var(--bg-surface)'
        }}
      >
        {/* Close Button */}
        {step !== 'success' && (
          <button
            onClick={() => setIsCheckoutOpen(false)}
            style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
          >
            <X size={20} />
          </button>
        )}

        {/* Modal Stepper Header */}
        {step !== 'success' && (
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="section-tag" style={{ margin: 0 }}>
                <ShieldCheck size={13} color="#10b981" />
                256-Bit SSL Encrypted Checkout
              </span>
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
              {step === 'address' ? '1. Shipping & Delivery Address' : '2. Payment Method'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              All India Express Delivery • Dispatched directly from our Himachal workshop
            </p>
          </div>
        )}

        {/* Step 1: Address Form */}
        {step === 'address' && (
          <form onSubmit={handleAddressSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Mobile Number (for Courier updates) *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                Delivery Street Address, Apartment, Landmark *
              </label>
              <textarea
                required
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.8rem',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  PIN Code *
                </label>
                <input
                  type="text"
                  required
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.35rem', fontWeight: 600 }}>
                  State *
                </label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.8rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Order Total Preview */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '0.5rem'
            }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Order Total ({cartItems.length} items)</span>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>₹{finalTotal}</div>
              </div>
              <button type="submit" className="btn btn-primary">
                <span>Continue to Payment</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Payment Selection */}
        {step === 'payment' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Option 1: Instant UPI */}
              <div
                onClick={() => setPaymentMethod('upi')}
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: paymentMethod === 'upi' ? '1.5px solid #e63946' : '1px solid var(--border-subtle)',
                  background: paymentMethod === 'upi' ? 'rgba(230, 57, 70, 0.08)' : 'var(--bg-surface-elevated)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(230, 57, 70, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#e63946'
                }}>
                  <QrCode size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    Instant UPI (Google Pay, PhonePe, Paytm, QR)
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    Instant verification & prioritized dispatch within 24 hours
                  </div>
                </div>
                <span className="badge badge-hot">POPULAR</span>
              </div>

              {/* Option 2: Cards & Netbanking */}
              <div
                onClick={() => setPaymentMethod('card')}
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: paymentMethod === 'card' ? '1.5px solid #e63946' : '1px solid var(--border-subtle)',
                  background: paymentMethod === 'card' ? 'rgba(230, 57, 70, 0.08)' : 'var(--bg-surface-elevated)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}>
                  <CreditCard size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    Credit / Debit Cards & NetBanking
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    Visa, MasterCard, RuPay, Corporate Amex
                  </div>
                </div>
              </div>

              {/* Option 3: Cash on Delivery */}
              <div
                onClick={() => setPaymentMethod('cod')}
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: paymentMethod === 'cod' ? '1.5px solid #e63946' : '1px solid var(--border-subtle)',
                  background: paymentMethod === 'cod' ? 'rgba(230, 57, 70, 0.08)' : 'var(--bg-surface-elevated)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}>
                  <Banknote size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                    Cash on Delivery (COD)
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    Pay in cash or UPI at your doorstep upon delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Price breakdown */}
            <div style={{
              background: 'var(--bg-surface-elevated)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                <span>Deliver to</span>
                <span style={{ color: 'var(--text-primary)' }}>{formData.fullName} ({formData.pincode})</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                <span>Shipping Fee</span>
                <span style={{ color: '#10b981', fontWeight: 600 }}>FREE</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#10b981', marginBottom: '0.4rem' }}>
                  <span>Coupon Savings</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', paddingTop: '0.4rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span>Final Payable</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setStep('address')}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.25rem' }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                <span>Confirm & Place Order (₹{finalTotal})</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success Confirmation Screen */}
        {step === 'success' && (
          <div style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              animation: 'pulseGlow 2s infinite'
            }}>
              <CheckCircle size={44} />
            </div>

            <span className="badge badge-hot">
              <Sparkles size={12} />
              ORDER CONFIRMED
            </span>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Thank You, {formData.fullName}!
            </h2>

            <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Your order has been queued in our Himachal studio. Our master embroiderers are preparing your garments for custom digitizing.
            </p>

            <div style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-medium)',
              borderRadius: '12px',
              padding: '1.25rem 2rem',
              margin: '0.5rem 0',
              textAlign: 'left',
              width: '100%',
              maxWidth: '440px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Order Number:</span>
                <strong style={{ color: '#facc15' }}>#{orderId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Estimated Delivery:</span>
                <span style={{ color: 'var(--text-primary)' }}>3 - 5 Business Days</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Delivery City:</span>
                <span style={{ color: 'var(--text-primary)' }}>{formData.city}, {formData.pincode}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
              <button
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setStep('address');
                }}
                className="btn btn-primary"
              >
                Continue Shopping
              </button>

              <a
                href={`https://web.whatsapp.com/send?phone=917050699367&text=Hello!%20My%20Order%20ID%20is%20${orderId}.%20Can%20you%20share%20the%20embroidery%20proof%20when%20ready?`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Track on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
