import React from 'react';
import { Truck, ShieldCheck, Phone } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #11141a, #1a1e26, #11141a)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      fontSize: '0.8rem',
      color: '#cbd5e1',
      padding: '0.5rem 0',
      position: 'relative',
      zIndex: 40
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {/* Left Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981'
          }} />
          <span style={{ fontWeight: 600, color: '#f8fafc', letterSpacing: '0.04em' }}>
            ⚡ ALL INDIA FREE DELIVERY
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 0.25rem' }}>|</span>
          <span style={{ display: 'none', color: '#94a3b8' }} className="topbar-subtext">
            CASH ON DELIVERY AVAILABLE
          </span>
        </div>

        {/* Center Marquee/Highlight */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.78rem'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#f1f5f9' }}>
            <ShieldCheck size={14} color="#eab308" />
            <span>240+ GSM Pure Combed Cotton</span>
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#f1f5f9' }}>
            <Truck size={14} color="#38bdf8" />
            <span>Dispatched in 24-48 Hours</span>
          </span>
        </div>

        {/* Right Contact Support */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a
            href="https://web.whatsapp.com/send?phone=917050699367"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#25d366',
              fontWeight: 600,
              fontSize: '0.78rem'
            }}
          >
            <Phone size={13} />
            <span>Support: +91 70506 99367</span>
          </a>
        </div>
      </div>
    </div>
  );
};
