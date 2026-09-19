import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Product } from '../types';

interface CouponResult {
  success: boolean;
  message: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discountAmount: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => CouponResult;
  removeCoupon: () => void;
  finalTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isSizeChartOpen: boolean;
  setIsSizeChartOpen: (open: boolean) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const COUPONS: Record<string, { discountPercent: number; description: string }> = {
  FIRST10: { discountPercent: 10, description: '10% off your first order' },
  EMBROFREE: { discountPercent: 15, description: 'Special 15% VIP discount' },
  FESTIVE20: { discountPercent: 20, description: '20% off festive drop' }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('embroprint_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('embroprint_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('embroprint_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    try {
      localStorage.setItem('embroprint_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const addToCart = (newItem: Omit<CartItem, 'id'>) => {
    setCartItems(prev => {
      // Find existing item with exact match on product, garment, color, size, and custom properties
      const existingIndex = prev.findIndex(item =>
        item.product.id === newItem.product.id &&
        item.selectedGarment.id === newItem.selectedGarment.id &&
        item.selectedColor.name === newItem.selectedColor.name &&
        item.selectedSize === newItem.selectedSize &&
        item.customText === newItem.customText &&
        item.customUploadedImage === newItem.customUploadedImage &&
        item.placement === newItem.placement
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      } else {
        const id = `${newItem.product.id}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        return [...prev, { ...newItem, id }];
      }
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code: string): CouponResult => {
    const cleanCode = code.trim().toUpperCase();
    if (COUPONS[cleanCode]) {
      setAppliedCoupon(cleanCode);
      return {
        success: true,
        message: `Coupon "${cleanCode}" applied! ${COUPONS[cleanCode].description}`
      };
    }
    return {
      success: false,
      message: 'Invalid promo code. Try "FIRST10" or "EMBROFREE"'
    };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Subtotal with tiered quantity discount built in:
  // If user buys 2 items of a product -> 10% off each, 3 or more -> 20% off each
  const subtotal = cartItems.reduce((sum, item) => {
    let priceMultiplier = 1;
    if (item.quantity >= 3) {
      priceMultiplier = 0.80; // 20% tier discount
    } else if (item.quantity === 2) {
      priceMultiplier = 0.90; // 10% tier discount
    }
    return sum + (item.unitPrice * priceMultiplier * item.quantity);
  }, 0);

  let discountAmount = 0;
  if (appliedCoupon && COUPONS[appliedCoupon]) {
    discountAmount = Math.round(subtotal * (COUPONS[appliedCoupon].discountPercent / 100));
  }

  const finalTotal = Math.max(0, Math.round(subtotal - discountAmount));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        discountAmount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        finalTotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isSearchOpen,
        setIsSearchOpen,
        isSizeChartOpen,
        setIsSizeChartOpen,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        theme,
        toggleTheme
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
