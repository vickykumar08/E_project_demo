import React, { useState } from 'react';
import {
  X, Star, Upload, ShoppingBag, MessageSquare,
  Sparkles, Ruler, ShieldCheck, Truck, RefreshCw, Layers
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { GARMENT_CANVASES, COLOR_OPTIONS } from '../../data/garments';
import type { GarmentCanvas, ColorOption } from '../../types';

export const ProductDetailModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    setIsCheckoutOpen,
    setIsSizeChartOpen
  } = useCart();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;

  // Initial states
  const initialGarment = GARMENT_CANVASES.find(g => product.availableGarments.includes(g.id)) || GARMENT_CANVASES[0];
  const [selectedGarment, setSelectedGarment] = useState<GarmentCanvas>(initialGarment);
  const [selectedColor, setSelectedColor] = useState<ColorOption>(product.colors[0] || COLOR_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [placement, setPlacement] = useState<string>('Center Chest');
  const [quantity, setQuantity] = useState<number>(1);
  const [customText, setCustomText] = useState<string>('');
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Dynamic pricing calculation based on selected canvas
  const canvasPriceDifference = selectedGarment.basePrice - 999;
  const currentUnitPrice = Math.max(799, product.price + (canvasPriceDifference > 0 ? canvasPriceDifference : 0));
  const currentOriginalPrice = Math.round(currentUnitPrice * 1.5);

  // Tiered discounts
  const tier1Price = currentUnitPrice;
  const tier2Price = Math.round(currentUnitPrice * 0.90);
  const tier3Price = Math.round(currentUnitPrice * 0.80);

  // Sample quick presets for custom design upload
  const SAMPLE_PRESETS = [
    { name: 'Tokyo Kanji', url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&auto=format&fit=crop&q=80' },
    { name: 'Cyber Ronin', url: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=300&auto=format&fit=crop&q=80' },
    { name: 'Minimalist Lineart', url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300&auto=format&fit=crop&q=80' },
    { name: 'Vintage Crest', url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80' }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      product,
      selectedGarment,
      selectedColor,
      selectedSize,
      placement,
      customText: customText.trim() ? customText : undefined,
      customUploadedImage: customImage || undefined,
      unitPrice: currentUnitPrice,
      quantity
    });
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    addToCart({
      product,
      selectedGarment,
      selectedColor,
      selectedSize,
      placement,
      customText: customText.trim() ? customText : undefined,
      customUploadedImage: customImage || undefined,
      unitPrice: currentUnitPrice,
      quantity
    });
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello! I'd like to order from your store:\n\n*${product.name}*\n` +
      `Garment: ${selectedGarment.name} (${selectedGarment.gsm})\n` +
      `Color: ${selectedColor.name}\n` +
      `Size: ${selectedSize}\n` +
      `Placement: ${placement}\n` +
      `Quantity: ${quantity}\n` +
      (customText ? `Custom Note: ${customText}\n` : '') +
      `Total: ₹${currentUnitPrice * quantity}\n\nPlease confirm availability!`
    );
    window.open(`https://web.whatsapp.com/send?phone=917050699367&text=${message}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={() => setQuickViewProduct(null)}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1080px',
          padding: 0,
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-medium)'
        }}
      >
        {/* Sticky Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close Product View"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'var(--bg-surface-elevated)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#e63946'; e.currentTarget.style.color = '#ffffff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-surface-elevated)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))'
        }}>
          {/* Left Column: Visual Mockup Showcase & Live Preview */}
          <div style={{
            background: 'var(--bg-surface-elevated)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            position: 'relative'
          }}>
            {/* Main Interactive Garment Canvas Display */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '460px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: selectedColor.hex,
              boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.4s ease'
            }}>
              {/* Product / Garment Base Image */}
              <img
                src={product.gallery[selectedImageIndex] || product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  mixBlendMode: selectedColor.name === 'Cloud White' ? 'normal' : 'luminosity',
                  opacity: selectedColor.name === 'Cloud White' ? 1 : 0.88,
                  transition: 'opacity 0.3s'
                }}
              />

              {/* Live Overlay of Custom Uploaded Artwork (if uploaded) */}
              {customImage && (
                <div style={{
                  position: 'absolute',
                  top: placement === 'Center Chest' ? '32%' :
                       placement === 'Left Pocket' ? '28%' :
                       placement === 'Full Back' ? '30%' : '45%',
                  left: placement === 'Left Pocket' ? '35%' :
                        placement === 'Sleeve' ? '20%' : '50%',
                  transform: 'translate(-50%, -50%)',
                  width: placement === 'Full Back' ? '180px' :
                         placement === 'Center Chest' ? '150px' : '85px',
                  height: placement === 'Full Back' ? '180px' :
                          placement === 'Center Chest' ? '150px' : '85px',
                  borderRadius: '6px',
                  border: '2px dashed rgba(230, 57, 70, 0.8)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
                  overflow: 'hidden',
                  background: 'rgba(0,0,0,0.2)',
                  zIndex: 10,
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <img
                    src={customImage}
                    alt="Custom Upload Artwork"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0,0,0,0.85)',
                    color: '#facc15',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    padding: '1px 5px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    STITCH PREVIEW
                  </span>
                </div>
              )}

              {/* Color Swatch & GSM Indicator pill */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                background: 'rgba(10, 12, 16, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '0.4rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '0.78rem',
                color: '#ffffff'
              }}>
                <span style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: selectedColor.hex,
                  border: '1px solid #ffffff'
                }} />
                <span>{selectedColor.name}</span>
                <span>•</span>
                <span style={{ color: '#e63946', fontWeight: 700 }}>{selectedGarment.gsm}</span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: selectedImageIndex === idx ? '2px solid #e63946' : '1px solid rgba(255,255,255,0.1)',
                    opacity: selectedImageIndex === idx ? 1 : 0.6,
                    cursor: 'pointer'
                  }}
                >
                  <img src={imgUrl} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>

            {/* Trust highlights below image */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#94a3b8' }}>
                <Truck size={15} color="#38bdf8" />
                <span>All India Free Express</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#94a3b8' }}>
                <RefreshCw size={15} color="#10b981" />
                <span>7-Day Free Size Exchange</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#94a3b8' }}>
                <ShieldCheck size={15} color="#eab308" />
                <span>Zero Thread Fading</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#94a3b8' }}>
                <Sparkles size={15} color="#e63946" />
                <span>40k+ High-Density Stitches</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customizer Configurator Options */}
          <div style={{
            padding: '2.25rem',
            overflowY: 'auto',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {/* Header: Title, Reviews, Price */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <div style={{ display: 'flex', color: '#eab308' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {product.rating} (66 Google Reviews)
                </span>
                <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 600 }}>• Verified Buyer Choice</span>
              </div>

              <h2 style={{ fontSize: '1.65rem', color: 'var(--text-primary)', lineHeight: 1.25, marginBottom: '0.35rem' }}>
                {product.name}
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {product.subtitle}
              </p>

              {/* Price & Savings Pill */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  ₹{currentUnitPrice}
                </span>
                <span style={{ fontSize: '1.05rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ₹{currentOriginalPrice}
                </span>
                <span className="badge badge-hot">
                  SAVE {Math.round(((currentOriginalPrice - currentUnitPrice) / currentOriginalPrice) * 100)}%
                </span>
                <span style={{ fontSize: '0.78rem', color: '#10b981' }}>Incl. GST</span>
              </div>
            </div>

            {/* Configurator 1: Choose Garment Canvas */}
            <div>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.6rem'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={16} color="#e63946" />
                  1. Choose Your Garment
                </span>
                <span style={{ fontSize: '0.78rem', color: '#e63946', fontWeight: 600 }}>
                  Selected: {selectedGarment.name}
                </span>
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                {GARMENT_CANVASES.map(canvas => {
                  const isAvailable = product.availableGarments.includes(canvas.id);
                  const isSelected = selectedGarment.id === canvas.id;
                  return (
                    <button
                      key={canvas.id}
                      disabled={!isAvailable}
                      onClick={() => setSelectedGarment(canvas)}
                      style={{
                        padding: '0.65rem 0.8rem',
                        borderRadius: '8px',
                        border: isSelected ? '1.5px solid #e63946' : '1px solid var(--border-subtle)',
                        background: isSelected ? 'rgba(230, 57, 70, 0.12)' : 'var(--bg-surface-elevated)',
                        opacity: isAvailable ? 1 : 0.4,
                        textAlign: 'left',
                        cursor: isAvailable ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                        {canvas.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                        {canvas.gsm} • {canvas.fabric.split(' ')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Configurator 2: Color Swatches */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.6rem'
              }}>
                <span>2. Choose Garment Color</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{selectedColor.name}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {COLOR_OPTIONS.map(c => {
                  const isSelected = selectedColor.name === c.name;
                  return (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      title={c.name}
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: c.hex,
                        border: isSelected ? '3px solid #e63946' : '2px solid var(--border-medium)',
                        boxShadow: isSelected ? '0 0 10px rgba(230, 57, 70, 0.6)' : 'none',
                        cursor: 'pointer',
                        transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                        transition: 'all 0.2s'
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Configurator 3: Size Selector + Size Chart Guide */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.6rem'
              }}>
                <span>3. Choose Your Size</span>
                <button
                  type="button"
                  onClick={() => setIsSizeChartOpen(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.78rem',
                    color: '#e63946',
                    textDecoration: 'underline'
                  }}
                >
                  <Ruler size={13} />
                  Size Guide (Inches)
                </button>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['S', 'M', 'L', 'XL', 'XXL'].map(sz => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      flex: 1,
                      padding: '0.65rem',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: selectedSize === sz ? '1.5px solid #e63946' : '1px solid var(--border-subtle)',
                      background: selectedSize === sz ? '#e63946' : 'var(--bg-surface-elevated)',
                      color: selectedSize === sz ? '#ffffff' : 'var(--text-primary)',
                      transition: 'all 0.15s'
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Configurator 4: Embroidery / Print Placement */}
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                4. Embroidery / Print Placement
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                {['Center Chest', 'Left Pocket', 'Full Back', 'Left Sleeve'].map(pos => (
                  <button
                    key={pos}
                    onClick={() => setPlacement(pos)}
                    style={{
                      padding: '0.55rem',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      border: placement === pos ? '1px solid #e63946' : '1px solid var(--border-subtle)',
                      background: placement === pos ? 'rgba(230, 57, 70, 0.15)' : 'var(--bg-surface-elevated)',
                      color: placement === pos ? '#e63946' : 'var(--text-secondary)'
                    }}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </div>

            {/* Configurator 5: Interactive Custom Logo / Photo Upload Simulator */}
            <div style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px dashed var(--border-medium)',
              borderRadius: '10px',
              padding: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Upload size={15} color="#e63946" />
                  Custom Artwork / Photo Upload (Optional)
                </span>
                {customImage && (
                  <button
                    onClick={() => setCustomImage(null)}
                    style={{ fontSize: '0.72rem', color: '#e63946' }}
                  >
                    Remove
                  </button>
                )}
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                Upload your PNG/JPG logo, couple portrait, or select a preset graphic to simulate live placement on this apparel.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <input
                  type="file"
                  id="custom-file-upload"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor="custom-file-upload"
                  className="btn btn-secondary btn-sm"
                  style={{ cursor: 'pointer' }}
                >
                  <Upload size={13} />
                  <span>Choose Image from Device</span>
                </label>
              </div>

              {/* Sample Quick Presets */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Or try presets:</span>
                {SAMPLE_PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCustomImage(preset.url)}
                    style={{
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.72rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Roman Numeral / Date / Text Input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                Custom Text / Sleeve Date / Instructions (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Roman numeral 'XI-IV-MMXXIV' on wrist or initials 'A&S'"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Tiered Bulk Pricing Table (Embroprint signature feature) */}
            <div style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              padding: '0.85rem'
            }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#facc15', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                ⚡ Bulk Tiered Savings
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                fontSize: '0.78rem',
                textAlign: 'center'
              }}>
                <div style={{
                  padding: '0.4rem',
                  borderRadius: '6px',
                  background: quantity === 1 ? 'rgba(230, 57, 70, 0.15)' : 'var(--bg-surface)',
                  border: quantity === 1 ? '1px solid #e63946' : '1px solid var(--border-subtle)'
                }}>
                  <div style={{ color: 'var(--text-secondary)' }}>1 Piece</div>
                  <div style={{ fontWeight: 800, color: 'var(--text-primary)' }}>₹{tier1Price}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Standard</div>
                </div>

                <div style={{
                  padding: '0.4rem',
                  borderRadius: '6px',
                  background: quantity === 2 ? 'rgba(230, 57, 70, 0.15)' : 'var(--bg-surface)',
                  border: quantity === 2 ? '1px solid #e63946' : '1px solid var(--border-subtle)'
                }}>
                  <div style={{ color: 'var(--text-secondary)' }}>2 Pieces</div>
                  <div style={{ fontWeight: 800, color: '#10b981' }}>₹{tier2Price} ea</div>
                  <div style={{ fontSize: '0.68rem', color: '#10b981' }}>Save 10%</div>
                </div>

                <div style={{
                  padding: '0.4rem',
                  borderRadius: '6px',
                  background: quantity >= 3 ? 'rgba(230, 57, 70, 0.15)' : 'var(--bg-surface)',
                  border: quantity >= 3 ? '1px solid #e63946' : '1px solid var(--border-subtle)'
                }}>
                  <div style={{ color: 'var(--text-secondary)' }}>3+ Pieces</div>
                  <div style={{ fontWeight: 800, color: '#10b981' }}>₹{tier3Price} ea</div>
                  <div style={{ fontSize: '0.68rem', color: '#10b981' }}>Save 20%</div>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Stepper */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    style={{ padding: '0.6rem 0.9rem', color: 'var(--text-primary)', fontWeight: 700 }}
                  >
                    -
                  </button>
                  <span style={{ padding: '0.6rem 0.9rem', fontWeight: 700, color: 'var(--text-primary)', minWidth: '35px', textAlign: 'center' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    style={{ padding: '0.6rem 0.9rem', color: 'var(--text-primary)', fontWeight: 700 }}
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.85rem' }}
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart (₹{(quantity >= 3 ? tier3Price : quantity === 2 ? tier2Price : tier1Price) * quantity})</span>
                </button>
              </div>

              {/* Instant Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="btn btn-secondary btn-full"
                style={{
                  background: 'var(--bg-surface-elevated)',
                  borderColor: 'var(--border-medium)',
                  color: 'var(--text-primary)',
                  fontWeight: 700
                }}
              >
                Instant Buy Now (Prepaid & COD)
              </button>

              {/* Order via WhatsApp (Embroprint authentic button) */}
              <button
                onClick={handleWhatsAppOrder}
                className="btn btn-whatsapp btn-full"
              >
                <MessageSquare size={18} />
                <span>Order via WhatsApp (Instant Help)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
