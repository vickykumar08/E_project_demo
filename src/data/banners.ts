export interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  highlight: string;
  ctaText: string;
  ctaCategory: string;
  image: string;
  badge: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    tag: 'CUSTOM EMBROIDERY STUDIO',
    title: 'STITCH YOUR STORY',
    highlight: 'Wearable Memories',
    subtitle: 'Transform your cherished photos, couple portraits, & pet memories into intricate, bespoke contour embroidery on 240+ GSM apparel.',
    ctaText: 'Customise Now',
    ctaCategory: 'portrait',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=1400&auto=format&fit=crop&q=85',
    badge: '100% Hand-Digitized'
  },
  {
    id: 'slide-2',
    tag: 'ANIME & POP CULTURE VAULT',
    title: 'HIGH-DENSITY EMBROIDERY',
    highlight: 'Anime Legends',
    subtitle: 'From Luffy & Gojo to Demon Slayer & Akatsuki. 40,000+ stitch Japanese tatami patterns crafted on heavyweight streetwear silhouettes.',
    ctaText: 'Explore Anime Collection',
    ctaCategory: 'anime',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1400&auto=format&fit=crop&q=85',
    badge: 'Limited Drop'
  },
  {
    id: 'slide-3',
    tag: 'CORPORATE & MERCHANDISE',
    title: 'BRING YOUR BRAND TO LIFE',
    highlight: 'Executive Apparel',
    subtitle: 'Premium 220 GSM pique polos & 240 GSM tees embroidered with your logo. Fast turnaround, factory direct pricing & all-India free delivery.',
    ctaText: 'Order Custom Logo',
    ctaCategory: 'custom-embroidery',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1400&auto=format&fit=crop&q=85',
    badge: 'Bulk Savings up to 30%'
  },
  {
    id: 'slide-4',
    tag: 'WINTER ESSENTIALS 2026',
    title: 'HEAVYWEIGHT FLEECE',
    highlight: '320 GSM Hoodies',
    subtitle: 'Double-lined hood, brushed interior fleece, and non-zipper comfort designed to brave the chill with effortless streetwear aesthetics.',
    ctaText: 'Shop Hoodies',
    ctaCategory: 'hoodies',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1400&auto=format&fit=crop&q=85',
    badge: 'Winter Ready'
  }
];

export const BRAND_FEATURES = [
  {
    icon: 'ShieldCheck',
    title: '240+ GSM Pure Cotton',
    description: 'Combed, bio-washed, and pre-shrunk heavyweight fabric'
  },
  {
    icon: 'Sparkles',
    title: 'High-Density Embroidery',
    description: 'Industrial Tajima machines with Madeira fade-proof threads'
  },
  {
    icon: 'Truck',
    title: 'All India Free Shipping',
    description: 'Delivered to your doorstep with express tracking updates'
  },
  {
    icon: 'RotateCcw',
    title: 'Easy 7-Day Exchange',
    description: 'Hassle-free size replacement and dedicated WhatsApp care'
  }
];
