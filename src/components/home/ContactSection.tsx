import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !requirement.trim()) {
      alert('Please enter your name and requirement.');
      return;
    }

    const message = encodeURIComponent(
      `Hello! I am contacting you through your website:\n\n` +
      `*Name:* ${name}\n` +
      (phone ? `*Phone:* ${phone}\n` : '') +
      `*Requirement:* ${requirement}\n\n` +
      `Please provide information and availability.`
    );

    window.open(`https://web.whatsapp.com/send?phone=917050699367&text=${message}`, '_blank');
    setSentSuccess(true);
  };

  return (
    <section id="contact-section" style={{
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
            <MapPin size={14} color="#e63946" />
            Direct Contact & Studio Location
          </span>
          <h2 className="section-title">CONNECT WITH US DIRECTLY</h2>
          <p className="section-desc">
            Have a custom order idea, corporate apparel requirement, or want to discuss bespoke embroidery? Call, message, or visit our studio in Pune.
          </p>
        </div>

        {/* Top 4 Key Contact Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* 1. Phone & WhatsApp */}
          <div style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            transition: 'all 0.25s ease'
          }}>
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Phone size={22} />
              </div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700 }}>
                Phone & WhatsApp Support
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '0.35rem', marginBottom: '0.5rem' }}>
                +91 70506 99367
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Direct instant support for custom orders, order tracking, and size queries.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a
                href="https://web.whatsapp.com/send?phone=917050699367"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+917050699367"
                className="btn btn-secondary btn-sm"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Phone size={14} />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* 2. Studio Address */}
          <div style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            transition: 'all 0.25s ease'
          }}>
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(230, 57, 70, 0.12)',
                color: '#e63946',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <MapPin size={22} />
              </div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700 }}>
                Studio & Retail Location
              </span>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginTop: '0.35rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                DP Rd, Kothrud, Pune, Maharashtra 411038 India
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Visit our workspace to see fabric samples, embroidery textures, and pick up orders.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=DP+Rd,+Kothrud,+Pune,+Maharashtra+411038+India"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ justifyContent: 'center' }}
            >
              <ExternalLink size={14} />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* 3. Email Inquiries */}
          <div style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            transition: 'all 0.25s ease'
          }}>
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.12)',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Mail size={22} />
              </div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700 }}>
                Official Business Email
              </span>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginTop: '0.35rem', marginBottom: '0.5rem', wordBreak: 'break-all' }}>
                tailorvisit.kt@gmail.com
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Send vector logos, mockups, wholesale RFQs, or bulk company inquiries.
              </p>
            </div>
            <a
              href="mailto:tailorvisit.kt@gmail.com"
              className="btn btn-secondary btn-sm"
              style={{ justifyContent: 'center' }}
            >
              <Mail size={14} />
              <span>Send an Email</span>
            </a>
          </div>

          {/* 4. Business Hours & Storefronts */}
          <div style={{
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            transition: 'all 0.25s ease'
          }}>
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(234, 179, 8, 0.12)',
                color: '#eab308',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Clock size={22} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                <span style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 6px #10b981'
                }} />
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981', fontWeight: 700 }}>
                  Open 24 Hours
                </span>
              </div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Shopping & Apparel Store
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                Follow our official accounts & shop across our verified digital storefronts.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href="https://www.instagram.com/tailorvisit_?stkn=MWMzcWppcGxqaWkydQ=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.55rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <InstagramIcon size={16} color="#e63946" />
                  <span>@tailorvisit_</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>1,053 Followers</span>
              </a>

              <a
                href="https://www.amazon.in/l/27943762031"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.55rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShoppingBag size={16} color="#f59e0b" />
                  <span>Amazon Storefront</span>
                </div>
                <ExternalLink size={13} color="var(--text-muted)" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Quick Inquiry Form Box */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)',
          padding: '2.5rem',
          maxWidth: '820px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-tag" style={{ alignSelf: 'center' }}>
              <Sparkles size={14} color="#e63946" />
              Quick Custom Order Inquiry
            </span>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Send a Direct Message to Our Team
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '520px', margin: '0 auto' }}>
              Enter your details below and we will automatically format a message directly to our WhatsApp support (+91 70506 99367).
            </p>
          </div>

          {sentSuccess ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: '#10b981'
            }}>
              <CheckCircle2 size={36} style={{ margin: '0 auto 0.75rem auto' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>WhatsApp Chat Opened!</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Your custom inquiry has been transferred to WhatsApp. We typically respond within minutes!
              </p>
              <button
                onClick={() => setSentSuccess(false)}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1rem' }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSendWhatsAppInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Your Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  What would you like us to customize or print? *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g., I want 15 oversized anime hoodies for our college group with back embroidery and custom names on sleeves..."
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  className="btn btn-whatsapp btn-lg"
                  style={{ minWidth: '220px' }}
                >
                  <MessageCircle size={18} />
                  <span>Send via WhatsApp</span>
                </button>

                <a
                  href={`mailto:tailorvisit.kt@gmail.com?subject=Custom Apparel Inquiry from ${encodeURIComponent(name || 'Customer')}&body=${encodeURIComponent(requirement || 'Hello, I would like to inquire about custom apparel.')}`}
                  className="btn btn-secondary btn-lg"
                  style={{ minWidth: '180px' }}
                >
                  <Mail size={18} />
                  <span>Send via Email</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
