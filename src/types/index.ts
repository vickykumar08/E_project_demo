export type GarmentId = 'oversize-tee' | 'polo-tee' | 'hoodie' | 'sweatshirt';

export interface ColorOption {
  name: string;
  hex: string;
  textColor?: string;
}

export interface GarmentCanvas {
  id: GarmentId;
  name: string;
  subtitle: string;
  gsm: string;
  fabric: string;
  basePrice: number;
  features: string[];
  image: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  gsm: string;
  fabric: string;
  badge?: 'BESTSELLER' | 'HOT' | 'NEW' | 'LIMITED' | 'TRENDING';
  image: string;
  gallery: string[];
  availableGarments: GarmentId[];
  colors: ColorOption[];
  sizes: string[];
  features: string[];
  tags: string[];
  isCustomizable?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedGarment: GarmentCanvas;
  selectedColor: ColorOption;
  selectedSize: string;
  customText?: string;
  customUploadedImage?: string;
  placement: string;
  unitPrice: number;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  productOrdered: string;
  comment: string;
  verified: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  itemCount: number;
}
