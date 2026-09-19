import React from 'react';
import { X, Ruler, CheckCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const SizeChartModal: React.FC = () => {
  const { isSizeChartOpen, setIsSizeChartOpen } = useCart();

  if (!isSizeChartOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsSizeChartOpen(false)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          padding: '2rem',
          background: 'var(--bg-surface)'
        }}
      >
        <button
          onClick={() => setIsSizeChartOpen(false)}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <Ruler size={22} color="#e63946" />
          <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>Official Size Guide</h3>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Measurements are in inches. Our Oversized Tees have a relaxed, boxy drop-shoulder streetwear cut. For a regular fit, consider sizing down one size.
        </p>

        {/* Oversize Tee Table */}
        <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          240 GSM Oversized T-Shirt (Drop Shoulder)
        </h4>
        <div style={{ overflowX: 'auto', marginBottom: '1.75rem' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.85rem',
            textAlign: 'center'
          }}>
            <thead>
              <tr style={{ background: 'var(--bg-surface-elevated)', color: 'var(--text-primary)' }}>
                <th style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>Size</th>
                <th style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>Chest (Inches)</th>
                <th style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>Length (Inches)</th>
                <th style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>Shoulder (Inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>S</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>40"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>28"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>20"</td>
              </tr>
              <tr style={{ background: 'var(--bg-surface-elevated)' }}>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>M</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>42"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>29"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>21"</td>
              </tr>
              <tr>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>L</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>44"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>30"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>22"</td>
              </tr>
              <tr style={{ background: 'var(--bg-surface-elevated)' }}>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>XL</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>46"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>31"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>23"</td>
              </tr>
              <tr>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>XXL</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>48"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>32"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>24"</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 320 GSM Hoodie & Sweatshirt Table */}
        <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          320 GSM Fleece Hoodie & Sweatshirt
        </h4>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.85rem',
            textAlign: 'center'
          }}>
            <thead>
              <tr style={{ background: 'var(--bg-surface-elevated)', color: 'var(--text-primary)' }}>
                <th style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>Size</th>
                <th style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>Chest (Inches)</th>
                <th style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>Length (Inches)</th>
                <th style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>Sleeve (Inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>S</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>42"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>27"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>24"</td>
              </tr>
              <tr style={{ background: 'var(--bg-surface-elevated)' }}>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>M</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>44"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>28"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>25"</td>
              </tr>
              <tr>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>L</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>46"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>29"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>26"</td>
              </tr>
              <tr style={{ background: 'var(--bg-surface-elevated)' }}>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)', fontWeight: 700, color: '#e63946' }}>XL</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>48"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>30"</td>
                <td style={{ padding: '0.6rem', border: '1px solid var(--border-subtle)' }}>26.5"</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Guarantee Banner */}
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: '8px',
          padding: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          fontSize: '0.85rem',
          color: '#10b981'
        }}>
          <CheckCircle size={18} />
          <span>Still unsure about your size? We offer free 7-day size exchange across India!</span>
        </div>
      </div>
    </div>
  );
};
