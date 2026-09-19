import React from 'react';
import { CartProvider } from './context/CartContext';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { AuthModal } from './components/auth/AuthModal';
import { HeroSlider } from './components/home/HeroSlider';
import { GarmentCanvasSection } from './components/home/GarmentCanvasSection';
import { BrandBanners } from './components/home/BrandBanners';
import { ProductGrid } from './components/product/ProductGrid';
import { ProductDetailModal } from './components/product/ProductDetailModal';
import { SizeChartModal } from './components/product/SizeChartModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/cart/CheckoutModal';
import { Testimonials } from './components/home/Testimonials';
import { InstagramFeed } from './components/home/InstagramFeed';
import { FAQSection } from './components/home/FAQSection';
import { ContactSection } from './components/home/ContactSection';
import { MessageCircle } from 'lucide-react';

const AppContent: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)', color: 'var(--text-primary)', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      {/* 1. Header & Navigation */}
      <TopBar />
      <Navbar />

      {/* 2. Hero Slider Banner Carousel */}
      <HeroSlider />

      {/* 3. Garment Blank Canvases ("Choose Your Canvas") */}
      <GarmentCanvasSection />

      {/* 4. Brand Showcase Banners */}
      <BrandBanners />

      {/* 5. Complete Product Archive Catalog & Category Filters */}
      <ProductGrid />

      {/* 6. Google Verified Testimonials Carousel */}
      <Testimonials />

      {/* 7. Instagram Streetwear Community Gallery */}
      <InstagramFeed />

      {/* 8. Frequently Asked Questions & Fabric Care */}
      <FAQSection />

      {/* 9. Direct Contact & Studio Location (Pune) */}
      <ContactSection />

      {/* 10. Comprehensive Brand Footer */}
      <Footer />

      {/* Modals & Interactive Overlays */}
      <ProductDetailModal />
      <SizeChartModal />
      <CartDrawer />
      <CheckoutModal />
      <SearchModal />
      <AuthModal />

      {/* Floating WhatsApp Assistance Button */}
      <a
        href="https://web.whatsapp.com/send?phone=917050699367&text=Hello!%20I%20have%20a%20question%20about%20ordering%20custom%20printed%20or%20embroidered%20apparel."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Support on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: '#25d366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          zIndex: 45,
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
