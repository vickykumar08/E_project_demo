import type { Category } from '../types';
import { PRODUCTS } from './products';

const BASE_CATEGORIES: Array<{ id: string; name: string; slug: string }> = [
  { id: 'all', name: 'All Collection', slug: 'all' },
  { id: 'bestseller', name: 'Best Sellers', slug: 'bestseller' },
  { id: 'anime', name: 'Anime Lovers', slug: 'anime' },
  { id: 'custom-embroidery', name: 'Custom Studio', slug: 'custom-embroidery' },
  { id: 'bikes-cars', name: 'Bikes & Cars', slug: 'bikes-cars' },
  { id: 'hoodies', name: 'Hoodies & Fleece', slug: 'hoodies' },
  { id: 'polo', name: 'Cotton Polos', slug: 'polo' },
  { id: 'portrait', name: 'Portrait & Pet Lineart', slug: 'portrait' },
  { id: 'streetwear', name: 'Streetwear Drops', slug: 'streetwear' }
];

export const CATEGORIES: Category[] = BASE_CATEGORIES.map(cat => {
  let count = 0;
  if (cat.id === 'all') {
    count = PRODUCTS.length;
  } else if (cat.id === 'bestseller') {
    count = PRODUCTS.filter(p => p.badge === 'BESTSELLER' || p.tags.includes('bestseller')).length;
  } else if (cat.id === 'hoodies') {
    count = PRODUCTS.filter(p => p.availableGarments.includes('hoodie') || p.category === 'hoodies').length;
  } else if (cat.id === 'polo') {
    count = PRODUCTS.filter(p => p.availableGarments.includes('polo-tee') || p.category === 'polo').length;
  } else {
    count = PRODUCTS.filter(p => p.category === cat.id || p.tags.includes(cat.id)).length;
  }
  return { ...cat, itemCount: count };
});
