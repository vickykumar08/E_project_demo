import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen } = useCart();
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsAuthModalOpen(false);
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsAuthModalOpen(false)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '460px',
          padding: '2rem',
          background: 'var(--bg-surface)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)',
            padding: '0.25rem'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #e63946, #991b1b)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            marginBottom: '0.75rem',
            boxShadow: '0 4px 15px rgba(230, 57, 70, 0.4)'
          }}>
            <User size={24} />
          </div>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
            {tab === 'login' ? 'Welcome Back' : 'Create an Account'}
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {tab === 'login' ? 'Log in to track custom orders & view saved wishlist' : 'Sign up to receive 10% off your first custom apparel order'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: 'var(--bg-surface-elevated)',
          padding: '4px',
          borderRadius: '8px',
          marginBottom: '1.5rem'
        }}>
          <button
            onClick={() => setTab('login')}
            style={{
              padding: '0.6rem',
              borderRadius: '6px',
              fontSize: '0.88rem',
              fontWeight: 600,
              background: tab === 'login' ? '#e63946' : 'transparent',
              color: tab === 'login' ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            Login
          </button>
          <button
            onClick={() => setTab('register')}
            style={{
              padding: '0.6rem',
              borderRadius: '6px',
              fontSize: '0.88rem',
              fontWeight: 600,
              background: tab === 'register' ? '#e63946' : 'transparent',
              color: tab === 'register' ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            Sign Up
          </button>
        </div>

        {isSuccess ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            color: '#10b981',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <CheckCircle size={48} />
            <h4 style={{ color: 'var(--text-primary)' }}>
              {tab === 'login' ? 'Logged In Successfully!' : 'Account Created!'}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Redirecting to your dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {tab === 'register' && (
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Full Name
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem 0.7rem 2.4rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                Email Address or Phone
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  required
                  placeholder="name@gmail.com or 10-digit mobile"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem 0.7rem 2.4rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {tab === 'register' && (
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  WhatsApp Contact Number
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem 0.7rem 2.4rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            )}

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  Password
                </label>
                {tab === 'login' && (
                  <button
                    type="button"
                    onClick={() => alert("Password reset link sent to registered email.")}
                    style={{ fontSize: '0.75rem', color: '#e63946' }}
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem 0.7rem 2.4rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-full"
              style={{ marginTop: '0.5rem', padding: '0.85rem' }}
            >
              {tab === 'login' ? 'Sign In to Embroprint' : 'Create Free Account'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
