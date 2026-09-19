import type { GarmentCanvas, ColorOption } from '../types';

export const COLOR_OPTIONS: ColorOption[] = [
  { name: 'Onyx Black', hex: '#111111', textColor: '#ffffff' },
  { name: 'Cloud White', hex: '#f8f9fa', textColor: '#111111' },
  { name: 'Vintage Beige', hex: '#d9cbbf', textColor: '#111111' },
  { name: 'Heather Grey', hex: '#8a8f98', textColor: '#ffffff' },
  { name: 'Midnight Navy', hex: '#1a233a', textColor: '#ffffff' },
  { name: 'Forest Olive', hex: '#3d4d3d', textColor: '#ffffff' },
  { name: 'Crimson Wine', hex: '#541c24', textColor: '#ffffff' }
];

export const GARMENT_CANVASES: GarmentCanvas[] = [
  {
    id: 'oversize-tee',
    name: 'Oversize Round Neck Tee',
    subtitle: 'Relaxed drop-shoulder silhouette',
    gsm: '240 GSM',
    fabric: '100% Combed Pure Cotton',
    basePrice: 999,
    features: [
      'Relaxed modern drop-shoulder street fit',
      '240 GSM Heavyweight fine loopknit cotton',
      'Pre-shrunk & bio-washed fabric for longevity',
      'High-density precision print & embroidery base'
    ],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'polo-tee',
    name: 'Premium Honeycomb Polo',
    subtitle: 'Classic ribbed collar & tailored fit',
    gsm: '220 GSM',
    fabric: '100% Cotton Honeycomb Knit',
    basePrice: 899,
    features: [
      'Structured honeycomb knit breathable texture',
      '220 GSM pure cotton fabric with gentle stretch',
      'Reinforced placket with pearlized button closure',
      'Ideal for corporate logos & chest insignia embroidery'
    ],
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'hoodie',
    name: 'Urban Streetwear Hoodie',
    subtitle: 'Cozy non-zipper double layered hood',
    gsm: '320 GSM',
    fabric: 'Cotton Brushed Fleece Loopknit',
    basePrice: 1699,
    features: [
      'Heavyweight 320 GSM ultra-soft brushed fleece',
      'Double-lined roomy hood with thick round drawstrings',
      'Deep kangaroo pocket & ribbed spandex cuffs',
      'Perfect for large back graphics & dense front embroidery'
    ],
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'sweatshirt',
    name: 'Modern Fit Sweatshirt',
    subtitle: 'Clean ribbed crewneck pullover',
    gsm: '320 GSM',
    fabric: 'Heavy Loopknit Brushed Cotton',
    basePrice: 1499,
    features: [
      '320 GSM premium winter-ready cozy fleece',
      'Durable twin-needle stitch at collar and hem',
      'Tagless comfort collar for scratch-free wear',
      'Minimalist silhouette for both casual and layered styling'
    ],
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80'
  }
];
