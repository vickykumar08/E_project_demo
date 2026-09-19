import type { Product } from '../types';
import { COLOR_OPTIONS } from './garments';

export const PRODUCTS: Product[] = [
  {
    "id": "prod-1",
    "name": "Luffy – La Casa De Papel Edition",
    "slug": "luffy-la-casa-de-papel",
    "subtitle": "High-Density 8-inch Anime x Heist Fusion Embroidery",
    "description": "Featuring high-density precision embroidery showcasing Monkey D. Luffy clad in a heist crimson jumpsuit with mask detailing and typographic back print. Crafted on 240 GSM fine loopknit combed cotton.",
    "category": "anime",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.9,
    "reviewCount": 48,
    "gsm": "240 GSM",
    "fabric": "100% Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie",
      "sweatshirt"
    ],
    "features": [
      "8-inch high-density Japanese tatami stitch embroidery",
      "240 GSM bio-washed pre-shrunk combed cotton",
      "Resistant to fraying and thread fading over 50+ washes",
      "Oversized drop-shoulder streetwear drape"
    ],
    "tags": [
      "anime",
      "bestseller",
      "one piece",
      "streetwear",
      "oversize"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-2",
    "name": "Custom Corporate & Brand Logo Studio",
    "slug": "custom-logo-embroidery",
    "subtitle": "Upload Your Brand Identity – Embroidered or HD DTF Printed",
    "description": "Transform your startup, corporate, or creator identity into executive-grade embroidered apparel. Upload vector or PNG artwork, select placement, and let our industrial Tajima machines stitch your vision.",
    "category": "custom-embroidery",
    "price": 899,
    "originalPrice": 1399,
    "rating": 5,
    "reviewCount": 94,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee",
      "hoodie",
      "sweatshirt"
    ],
    "features": [
      "Precision digitizing from any uploaded logo or PNG",
      "Pocket, center chest, back yoke, or sleeve placement options",
      "Tiered bulk discounts up to 30% for corporate orders",
      "Fade-proof Madeira metallic and polyneon threads"
    ],
    "tags": [
      "custom-embroidery",
      "bestseller",
      "corporate",
      "polo",
      "custom"
    ],
    "isCustomizable": true,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-3",
    "name": "Akatsuki – Shadows of the Hidden World",
    "slug": "akatsuki-shadows",
    "subtitle": "Crimson Cloud Velvet-Feel Embroidered Hoodie",
    "description": "Iconic crimson cloud motif rendered with rich scarlet satin stitches and metallic black border accents. Available on 320 GSM fleece hoodies or 240 GSM oversized tees.",
    "category": "anime",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.8,
    "reviewCount": 36,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt",
      "oversize-tee"
    ],
    "features": [
      "Dense 45,000 stitch Akatsuki insignia",
      "Double layered deep warm hood with drawstrings",
      "Soft brushed inside fleece for winter warmth",
      "Zero lint pill-resistant exterior"
    ],
    "tags": [
      "anime",
      "hoodies",
      "naruto",
      "streetwear",
      "bestseller"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-4",
    "name": "Porsche 911 Turbo – Gearhead Vintage Edition",
    "slug": "porsche-911-turbo",
    "subtitle": "Technical Schematic Line-Art Embroidery",
    "description": "A tribute to Stuttgart automotive engineering. Features delicate metallic silver contour stitching of the legendary 930 Turbo silhouette across the back with crest chest branding.",
    "category": "bikes-cars",
    "price": 1099,
    "originalPrice": 1699,
    "rating": 4.9,
    "reviewCount": 29,
    "gsm": "240 GSM",
    "fabric": "100% Pure Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt",
      "hoodie"
    ],
    "features": [
      "Industrial blueprint rear embroidery with chassis code",
      "Heavy 240 GSM fabric holds structural shape without drooping",
      "Double-needle seam stitching around hem and sleeves",
      "Acid washed vintage aesthetic charcoal wash"
    ],
    "tags": [
      "bikes-cars",
      "porsche",
      "automotive",
      "vintage",
      "bestseller"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-5",
    "name": "Custom Couple Portrait & Anniversary Keepsake",
    "slug": "custom-couple-portrait",
    "subtitle": "Transform Your Cherished Photograph into Minimalist Lineart",
    "description": "Send us your favourite photograph and our master embroidery digitizers will hand-draw the outlines, capturing your intimate memory in tactile thread over your heart.",
    "category": "portrait",
    "price": 1299,
    "originalPrice": 1899,
    "rating": 5,
    "reviewCount": 112,
    "gsm": "240 GSM",
    "fabric": "100% Bio-Washed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie",
      "sweatshirt"
    ],
    "features": [
      "Personalized hand-digitized outline from any clear photo",
      "Optional anniversary date in Roman numerals embroidered on sleeve",
      "Madeira polyester thread guaranteed not to unravel",
      "Complimentary gift box packaging included"
    ],
    "tags": [
      "portrait",
      "custom",
      "gifts",
      "anniversary",
      "bestseller"
    ],
    "isCustomizable": true,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-6",
    "name": "Gojo Satoru – Domain Expansion: Infinite Void",
    "slug": "gojo-infinite-void",
    "subtitle": "Electric Cyan & White Satin Stitch Oversized Streetwear",
    "description": "The Honored One unleashed. Features piercing azure eyes rendered with luminous high-sheen embroidery threads and kanji script spanning the back spine.",
    "category": "anime",
    "price": 1049,
    "originalPrice": 1599,
    "rating": 4.9,
    "reviewCount": 52,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie",
      "sweatshirt"
    ],
    "features": [
      "Over 38,000 stitches with lustrous cyan highlights",
      "240 GSM high-grade cotton with ribbed neckline",
      "Zero shrinkage pre-treated textile",
      "Streetwear drop-shoulder loose cut"
    ],
    "tags": [
      "anime",
      "jjk",
      "gojo",
      "oversize",
      "streetwear",
      "bestseller"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-7",
    "name": "Executive Honeycomb Cotton Pique Polo",
    "slug": "executive-pique-polo",
    "subtitle": "Timeless Ribbed Collar & Mother-of-Pearl Button Placket",
    "description": "The gold standard for corporate casuals and weekend style. Knit from 220 GSM 100% combed cotton honeycomb texture with anti-roll collars and subtle chest emblem.",
    "category": "polo",
    "price": 849,
    "originalPrice": 1299,
    "rating": 4.7,
    "reviewCount": 41,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "features": [
      "220 GSM honeycomb pique knit for optimal airflow",
      "Anti-curl collar ribs with twin needle finishes",
      "Reinforced side vents for mobility and comfort",
      "Ideal canvas for delicate corporate logos"
    ],
    "tags": [
      "polo",
      "corporate",
      "formal",
      "minimalist"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-8",
    "name": "Roronoa Zoro – Three Sword Style: King of Hell",
    "slug": "zoro-king-of-hell",
    "subtitle": "Dual Green Aura & Black Blade Enma High-Density Stitch",
    "description": "Wano Arc Zoro in full Conqueror Haki glory. Dense multi-tone jade and black threads illustrate Enma with smoke effects draping across the shoulder.",
    "category": "anime",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 38,
    "gsm": "240 GSM",
    "fabric": "100% Combed Pure Cotton",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "features": [
      "Multi-tone metallic green embroidery thread",
      "Seamless tubular body construction",
      "Heavyweight 240 GSM cotton feels substantial",
      "Pre-shrunk to retain fit after regular laundry"
    ],
    "tags": [
      "anime",
      "one piece",
      "zoro",
      "oversize",
      "streetwear"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-9",
    "name": "Archival Minimalist Heavyweight Fleece Hoodie",
    "slug": "archival-minimalist-hoodie",
    "subtitle": "320 GSM Pure Brushed Comfort with Micro Tonal Embroidery",
    "description": "Designed for effortless everyday layering. Features a spacious double-layered hood without visible drawstrings for a sleek minimalist look, complemented by micro-stitched coordinates.",
    "category": "hoodies",
    "price": 1599,
    "originalPrice": 2299,
    "rating": 4.9,
    "reviewCount": 78,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "features": [
      "320 GSM thick thermal brushed cotton fleece",
      "Double-ply structured hood that stays upright",
      "Seamless hidden side pockets instead of bulky kangaroo pouch",
      "Drop shoulder tailored architectural cut"
    ],
    "tags": [
      "hoodies",
      "minimalist",
      "bestseller",
      "streetwear"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-10",
    "name": "Royal Enfield Continental GT 650 – Cafe Racer",
    "slug": "royal-enfield-gt650",
    "subtitle": "Twin Cylinder Engine & Clip-On Bars Schematic",
    "description": "Built for throttle junkies and modern retro cafe racer enthusiasts. Intricate chest embroidery of the British twin powerplant with back typography.",
    "category": "bikes-cars",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewCount": 22,
    "gsm": "240 GSM",
    "fabric": "100% Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt",
      "hoodie"
    ],
    "features": [
      "Detailed twin-cylinder engine schematic embroidery",
      "Reinforced shoulder-to-shoulder neck taping",
      "Resistant to sweat & motorcycle weather exposure",
      "Bio-washed buttery soft handfeel"
    ],
    "tags": [
      "bikes-cars",
      "motorcycle",
      "vintage",
      "streetwear"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-11",
    "name": "Golden Retriever & Frenchie Lineart Pullover",
    "slug": "pet-lineart-sweatshirt",
    "subtitle": "Intricate Minimalist Outline of Your Furry Best Friend",
    "description": "Honor your beloved pet with a timeless embroidered portrait. Pick your breed from our catalog or upload a photograph of your dog/cat for custom digitizing.",
    "category": "portrait",
    "price": 1399,
    "originalPrice": 1999,
    "rating": 4.9,
    "reviewCount": 65,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie",
      "oversize-tee"
    ],
    "features": [
      "Subtle, heartfelt 3.5-inch chest pet contour outline",
      "Warm 320 GSM fleece comfort for cozy winter strolls",
      "Option to stitch pet name in cursive below the contour",
      "100% pet-friendly dyes and organic cotton blend"
    ],
    "tags": [
      "portrait",
      "hoodies",
      "pets",
      "custom",
      "bestseller"
    ],
    "isCustomizable": true,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-12",
    "name": "Cyberpunk Neon Ronin – Heavy Oversized Tee",
    "slug": "cyberpunk-neon-ronin",
    "subtitle": "Futuristic Cyber Samurai with UV-Reactive Thread",
    "description": "Futuristic dark streetwear tee featuring a mechanical cyber ronin helmet accented with fluorescent neon threads that pop under club UV light.",
    "category": "anime",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.8,
    "reviewCount": 28,
    "gsm": "240 GSM",
    "fabric": "100% Combed Pure Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "features": [
      "UV reactive neon embroidery threads that glow in blacklight",
      "Industrial cyber street style typography",
      "240 GSM heavy cotton that doesn’t cling to the body",
      "Drop-shoulder silhouette with wide armholes"
    ],
    "tags": [
      "anime",
      "cyberpunk",
      "streetwear",
      "oversize"
    ],
    "isCustomizable": false,
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": "prod-13",
    "name": "Luffy – Gear 5 Sun God Nika Pure White Tee",
    "slug": "luffy-gear-5-sun-god-nika-pure-white-tee",
    "subtitle": "Drums of Liberation Cloud Swirl Embroidery",
    "description": "Gear 5 Sun God Nika in joyful liberation. Multi-layered pearlescent white and gold embroidery depicting Luffy laughing amidst the billowing clouds.",
    "category": "anime",
    "price": 1099,
    "originalPrice": 1599,
    "rating": 5,
    "reviewCount": 88,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "one piece",
      "gear 5",
      "bestseller",
      "oversize"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-14",
    "name": "Sukuna – Malevolent Shrine Domain Curse Pullover",
    "slug": "sukuna-malevolent-shrine-domain-curse-pullover",
    "subtitle": "Sinister Skull Shrine Tatami Stitch in Blood Red",
    "description": "Ryomen Sukuna Malevolent Shrine embroidered in high-definition crimson satin threads across the upper back with curse mark chest accents.",
    "category": "anime",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.9,
    "reviewCount": 42,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "jjk",
      "sukuna",
      "hoodies",
      "streetwear"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-15",
    "name": "Itachi Uchiha – Mangekyo Sharingan & Murder of Crows",
    "slug": "itachi-uchiha-mangekyo-sharingan-murder-of-crows",
    "subtitle": "Obsidian Crows with Scarlet Eyed Embroidery",
    "description": "A tribute to the leaf village tragic hero. Intricate black feathers and blood-red Sharingan eyes stitched with ultra-fine Madeira polyneon threads.",
    "category": "anime",
    "price": 1149,
    "originalPrice": 1699,
    "rating": 4.9,
    "reviewCount": 67,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "naruto",
      "itachi",
      "streetwear",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-16",
    "name": "Tanjiro Kamado – Hinokami Kagura Sun Breath Tee",
    "slug": "tanjiro-kamado-hinokami-kagura-sun-breath-tee",
    "subtitle": "Blazing Sun Flames & Demon Slayer Hanafuda Earrings",
    "description": "Dance of the Fire God captured in undulating orange, scarlet, and gold flame stitches with delicate Hanafuda earrings on the left chest.",
    "category": "anime",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewCount": 34,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "demon slayer",
      "tanjiro",
      "oversize"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-17",
    "name": "Nezuko Kamado – Demon Crest Bamboo Silhouette Pullover",
    "slug": "nezuko-kamado-demon-crest-bamboo-silhouette-pullover",
    "subtitle": "Soft Pink Blossom & Bamboo Mouthpiece Embroidery",
    "description": "Delicate sakura petal pink threads highlight Nezuko iconic bamboo silhouette, stitched on cozy loopknit fleece.",
    "category": "anime",
    "price": 1499,
    "originalPrice": 2199,
    "rating": 4.9,
    "reviewCount": 51,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "demon slayer",
      "hoodies",
      "sweatshirt"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-18",
    "name": "Attack on Titan – Survey Corps Wings of Freedom",
    "slug": "attack-on-titan-survey-corps-wings-of-freedom",
    "subtitle": "Dual White & Cobalt Feathers High-Density Shield",
    "description": "Dedicate your heart. Over 42,000 stitches bring the iconic blue and white wings of freedom crest to life on the back shoulder yoke.",
    "category": "anime",
    "price": 1649,
    "originalPrice": 2399,
    "rating": 5,
    "reviewCount": 95,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "aot",
      "hoodies",
      "bestseller",
      "streetwear"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-19",
    "name": "Levi Ackerman – Humanity Strongest Blade Heavy Tee",
    "slug": "levi-ackerman-humanity-strongest-blade-heavy-tee",
    "subtitle": "Spinning Blade Trajectory & Survey Corps Emblem",
    "description": "Precision silver contour lineart showing Captain Levi Ackerman mid-spin attack, rendered on 240 GSM heavyweight bio-washed cotton.",
    "category": "anime",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.8,
    "reviewCount": 39,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "aot",
      "levi",
      "streetwear"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-20",
    "name": "Chainsaw Man – Pochita Heart Chainsaw Pocket Tee",
    "slug": "chainsaw-man-pochita-heart-chainsaw-pocket-tee",
    "subtitle": "Cute Yet Deadly Saw Devil Chest Pocket Embroidery",
    "description": "Adorable orange Pochita peeking out from a reinforced chest pocket with metallic silver chain teeth embroidery.",
    "category": "anime",
    "price": 899,
    "originalPrice": 1399,
    "rating": 4.9,
    "reviewCount": 73,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "chainsaw man",
      "pochita",
      "cute",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-21",
    "name": "Solo Leveling – Sung Jin-Woo Shadow Monarch Hoodie",
    "slug": "solo-leveling-sung-jin-woo-shadow-monarch-hoodie",
    "subtitle": "Arise: Luminous Violet Shadow Soldier Army",
    "description": "Awaken the Shadow Monarch. Deep purple and royal violet thread highlights illuminate the monarch piercing eyes and ethereal aura.",
    "category": "anime",
    "price": 1749,
    "originalPrice": 2599,
    "rating": 5,
    "reviewCount": 82,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "solo leveling",
      "hoodies",
      "streetwear",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-22",
    "name": "Dragon Ball Z – Super Saiyan Son Goku Aura Heavy Tee",
    "slug": "dragon-ball-z-super-saiyan-son-goku-aura-heavy-tee",
    "subtitle": "Electric Golden Aura & Kamehameha Kanji Script",
    "description": "Classic 90s nostalgia meets modern streetwear. Golden yellow thread contours showcase Super Saiyan Goku charging his signature energy.",
    "category": "anime",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewCount": 44,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "dbz",
      "goku",
      "oversize",
      "vintage"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-23",
    "name": "Vegeta – Prince of All Saiyans Royal Crest Tee",
    "slug": "vegeta-prince-of-all-saiyans-royal-crest-tee",
    "subtitle": "Royal Navy Combed Cotton with Royal Saiyan Monogram",
    "description": "The pride of the Saiyan Prince. Crisp gold and white insignia stitched on deep midnight navy heavy combed cotton.",
    "category": "anime",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.7,
    "reviewCount": 31,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "dbz",
      "vegeta",
      "oversize"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-24",
    "name": "Neon Genesis Evangelion – Unit-01 Berserk Mode Hoodie",
    "slug": "neon-genesis-evangelion-unit-01-berserk-mode-hoodie",
    "subtitle": "Fluorescent Green & Deep Purple Mecha Headgear",
    "description": "Tokyo-3 mechanical marvel in full fury. Fluorescent green and violet embroidery accents evoke the psychological cyberpunk anime masterpiece.",
    "category": "anime",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.9,
    "reviewCount": 58,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "evangelion",
      "mecha",
      "hoodies",
      "cyberpunk"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-25",
    "name": "Hunter x Hunter – Killua Zoldyck Godspeed Lightning Tee",
    "slug": "hunter-x-hunter-killua-zoldyck-godspeed-lightning-tee",
    "subtitle": "Electric Cyan Lightning Bolt Needlework Across Shoulders",
    "description": "Transmute electricity. High-speed silver and electric cyan lightning bolts snake down the sleeves and across the back yoke.",
    "category": "anime",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 63,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "anime",
      "hxh",
      "killua",
      "streetwear",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-26",
    "name": "Nissan Skyline GT-R R34 – Midnight Bayside Purple Hoodie",
    "slug": "nissan-skyline-gt-r-r34-midnight-bayside-purple-hoodie",
    "subtitle": "Godzilla Rear Tail Light Circular Halos in Crimson Stitch",
    "description": "The definitive JDM icon. Iconic quadruple circular taillights and GT-R badge embroidered with rich gloss embroidery threads on heavy fleece.",
    "category": "bikes-cars",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 5,
    "reviewCount": 89,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "jdm",
      "skyline",
      "hoodies",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-27",
    "name": "Toyota Supra MK4 – 2JZ-GTE Turbocharger Blueprint Tee",
    "slug": "toyota-supra-mk4-2jz-gte-turbocharger-blueprint-tee",
    "subtitle": "Twin-Turbocharged Inline-6 Engine Technical Schematic",
    "description": "A mechanical masterpiece for boost addicts. High-definition silver embroidery shows the twin turbo intake and manifold layout.",
    "category": "bikes-cars",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 71,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "jdm",
      "supra",
      "streetwear",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-28",
    "name": "BMW M3 E30 – DTM Racing Heritage Heavyweight Tee",
    "slug": "bmw-m3-e30-dtm-racing-heritage-heavyweight-tee",
    "subtitle": "Box Flare Fenders & M-Tricolor Racing Stripes",
    "description": "Bavarian touring car supremacy. Distinctive E30 box flares stitched in metallic graphite thread with the signature M-Sport tri-color tab.",
    "category": "bikes-cars",
    "price": 1099,
    "originalPrice": 1599,
    "rating": 4.8,
    "reviewCount": 46,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "bmw",
      "motorsport",
      "vintage"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-29",
    "name": "Ducati Panigale V4 – Corse Racing Red Pullover",
    "slug": "ducati-panigale-v4-corse-racing-red-pullover",
    "subtitle": "Desmosedici Stradale Engine Heartbeat Contour Stitch",
    "description": "Italian superbike passion. Sleek aerodynamic fairing silhouette and Corse badge stitched on 320 GSM loopknit fleece.",
    "category": "bikes-cars",
    "price": 1599,
    "originalPrice": 2299,
    "rating": 4.9,
    "reviewCount": 37,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "motorcycle",
      "ducati",
      "hoodies"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-30",
    "name": "Yamaha YZF-R1 – Crossplane Symphony Heavy Tee",
    "slug": "yamaha-yzf-r1-crossplane-symphony-heavy-tee",
    "subtitle": "Uneven Firing Order Soundwave & Aerodynamic Winglets",
    "description": "Celebrate the growl of the CP4 engine. High density sonic waveform embroidery wraps around the left torso on 240 GSM combed cotton.",
    "category": "bikes-cars",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.7,
    "reviewCount": 29,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622445268045-3f0fb2a0a961?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "motorcycle",
      "yamaha",
      "streetwear"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-31",
    "name": "Triumph Bonneville T120 – Modern Classic British Twin",
    "slug": "triumph-bonneville-t120-modern-classic-british-twin",
    "subtitle": "Spoke Wheels & Peashooter Exhaust Line Drawing",
    "description": "Ace Cafe heritage. Classic British parallel-twin contour stitching with vintage font typography on acid-washed cotton.",
    "category": "bikes-cars",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.8,
    "reviewCount": 33,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "motorcycle",
      "triumph",
      "vintage"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-32",
    "name": "Harley Davidson Iron 883 – Dark Custom Bobber Sweatshirt",
    "slug": "harley-davidson-iron-883-dark-custom-bobber-sweatshirt",
    "subtitle": "V-Twin Air-Cooled Pushrod Engine & Drag Handlebars",
    "description": "Raw American steel in thread form. 883cc Evolution engine profile stitched on heavy loopknit crewneck sweatshirt.",
    "category": "bikes-cars",
    "price": 1399,
    "originalPrice": 1999,
    "rating": 4.8,
    "reviewCount": 42,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "motorcycle",
      "harley",
      "hoodies"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-33",
    "name": "Ferrari F40 – Rosso Corsa Twin Turbo Silhouette Tee",
    "slug": "ferrari-f40-rosso-corsa-twin-turbo-silhouette-tee",
    "subtitle": "Kevlar & Carbon Fiber Wing Profile with Twin NACA Ducts",
    "description": "Enzo Ferrari final swan song. Sharp aggressive rear wing and NACA duct contours stitched in rich scarlet on onyx black combed cotton.",
    "category": "bikes-cars",
    "price": 1099,
    "originalPrice": 1599,
    "rating": 5,
    "reviewCount": 68,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "ferrari",
      "supercars",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-34",
    "name": "Lamborghini Countach – 1980s Retro Synthwave Hoodie",
    "slug": "lamborghini-countach-1980s-retro-synthwave-hoodie",
    "subtitle": "Wedge-Shaped Gandini Silhouette with Scissor Doors",
    "description": "The poster car of every 80s bedroom wall. Neon cyan and magenta gradient threads bring the Countach scissor door wedge to life.",
    "category": "bikes-cars",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.9,
    "reviewCount": 54,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "supercars",
      "hoodies",
      "retro"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-35",
    "name": "Mazda RX-7 FD3S – Rotary Apex Seal Streetwear Tee",
    "slug": "mazda-rx-7-fd3s-rotary-apex-seal-streetwear-tee",
    "subtitle": "13B-REW Twin-Rotor Reuleaux Triangle Embroidery",
    "description": "Spinning apex seals and brap brap idle rhythm. Detailed triangular rotor geometry stitched in metallic silver on heavy drop-shoulder tee.",
    "category": "bikes-cars",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 49,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "jdm",
      "rx7",
      "rotary"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-36",
    "name": "Audi Sport Quattro S1 – Group B Rally Legend Fleece",
    "slug": "audi-sport-quattro-s1-group-b-rally-legend-fleece",
    "subtitle": "Turbo Five-Cylinder Wastegate Chatter & Massive Wings",
    "description": "The golden era of rally motorsport. Boxy flared arches and rally roof scoop embroidered on 320 GSM brushed fleece.",
    "category": "bikes-cars",
    "price": 1599,
    "originalPrice": 2299,
    "rating": 4.8,
    "reviewCount": 38,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1622445268045-3f0fb2a0a961?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1622445268045-3f0fb2a0a961?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "rally",
      "audi",
      "hoodies"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-37",
    "name": "KTM 390 Duke – Scalpel Orange Street Fighter Tee",
    "slug": "ktm-390-duke-scalpel-orange-street-fighter-tee",
    "subtitle": "Trellis Frame & Split LED Headlight Geometry",
    "description": "Ready to Race. Vibrant KTM orange and graphite grey threads highlight the aggressive split face and lightweight steel trellis chassis.",
    "category": "bikes-cars",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.7,
    "reviewCount": 26,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "motorcycle",
      "ktm",
      "streetwear"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-38",
    "name": "Kawasaki Ninja H2R – Supercharged Carbon Edition Hoodie",
    "slug": "kawasaki-ninja-h2r-supercharged-carbon-edition-hoodie",
    "subtitle": "Mirror Coated Black Finish & Supercharger Impeller Crest",
    "description": "400 km/h hyperbike engineering. Intricate turbine impeller blade embroidery on chest with aerospace winglet back art.",
    "category": "bikes-cars",
    "price": 1749,
    "originalPrice": 2599,
    "rating": 5,
    "reviewCount": 77,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "motorcycle",
      "ninja",
      "hoodies",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-39",
    "name": "Shelby Cobra 427 – American Muscle Vintage Wash Tee",
    "slug": "shelby-cobra-427-american-muscle-vintage-wash-tee",
    "subtitle": "Side Pipe Headers & Twin Racing Le Mans Stripes",
    "description": "Pure Carroll Shelby venom. Wide rear haunches and deep side exhausts contour-stitched on bio-washed vintage black cotton.",
    "category": "bikes-cars",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.8,
    "reviewCount": 31,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f97?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "muscle car",
      "vintage",
      "classic"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-40",
    "name": "Mercedes-AMG G63 – Geländewagen Box Silhouette Tee",
    "slug": "mercedes-amg-g63-gel-ndewagen-box-silhouette-tee",
    "subtitle": "Side Exhaust Tips & Iconic Boxy Safari Silhouette",
    "description": "The king of luxury off-roaders. Crisp geometric contour stitches of the G-Wagon profile with AMG crest sleeve detailing.",
    "category": "bikes-cars",
    "price": 1099,
    "originalPrice": 1599,
    "rating": 4.9,
    "reviewCount": 52,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "bikes-cars",
      "luxury",
      "amg",
      "streetwear"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-41",
    "name": "Tokyo Night Neon Cyber District Heavy Fleece Hoodie",
    "slug": "tokyo-night-neon-cyber-district-heavy-fleece-hoodie",
    "subtitle": "Reflective Kanji Script & Shinjuku Skyscraper Skyline",
    "description": "Step into the neon glow of midnight Tokyo. Over 48,000 stitches capture towering skyscraper spires and neon shop banners.",
    "category": "hoodies",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.9,
    "reviewCount": 84,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "japan",
      "streetwear",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-42",
    "name": "Kyoto Cherry Blossom Temple Crest Embroidered Pullover",
    "slug": "kyoto-cherry-blossom-temple-crest-embroidered-pullover",
    "subtitle": "Soft Pink Blossom Flakes & Traditional Pagoda Roof",
    "description": "Tranquil Japanese aesthetic. Sakura blossoms flutter over a tranquil pagoda silhouette rendered in delicate pastel threads.",
    "category": "hoodies",
    "price": 1599,
    "originalPrice": 2299,
    "rating": 4.8,
    "reviewCount": 62,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "japan",
      "minimalist",
      "aesthetic"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-43",
    "name": "Mount Fuji Great Wave Lineart Japanese Ukiyo-e Hoodie",
    "slug": "mount-fuji-great-wave-lineart-japanese-ukiyo-e-hoodie",
    "subtitle": "Hokusai Wave Foam & Snow-Capped Peak Contour",
    "description": "Timeless wave crests rendered with multi-ply marine blue and white foam stitches, centered on 320 GSM fleece comfort.",
    "category": "hoodies",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 5,
    "reviewCount": 103,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "japan",
      "art",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-44",
    "name": "Seoul Streetwear Hangul Typographic Drop-Shoulder Hoodie",
    "slug": "seoul-streetwear-hangul-typographic-drop-shoulder-hoodie",
    "subtitle": "Minimalist Korean Calligraphy & Industrial Coordinate Bar",
    "description": "Hongdae youth culture redefined. Clean tonal Hangul embroidery paired with industrial GPS coordinates on the left chest.",
    "category": "hoodies",
    "price": 1549,
    "originalPrice": 2199,
    "rating": 4.7,
    "reviewCount": 45,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "korean",
      "streetwear",
      "minimalist"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-45",
    "name": "Nordic Aurora Geometric Mountain Alpine Fleece Hoodie",
    "slug": "nordic-aurora-geometric-mountain-alpine-fleece-hoodie",
    "subtitle": "Emerald Northern Lights Wave & Angular Alpine Peaks",
    "description": "Crisp Scandinavian mountain aesthetics. Emerald and ice-blue gradient thread work dances above sharp needle-stitched peaks.",
    "category": "hoodies",
    "price": 1649,
    "originalPrice": 2399,
    "rating": 4.8,
    "reviewCount": 39,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1571455786673-9d9d6c194f97?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f97?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "nature",
      "outdoors",
      "minimalist"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-46",
    "name": "Vintage Renaissance Angelic Cherub Heavyweight Pullover",
    "slug": "vintage-renaissance-angelic-cherub-heavyweight-pullover",
    "subtitle": "Classical Baroque Art & Gold Foil Border Embroidery",
    "description": "Museum-grade renaissance cherub rendered in intricate micro satin stitches with subtle gold thread wing accents.",
    "category": "hoodies",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.9,
    "reviewCount": 57,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "vintage",
      "renaissance",
      "art"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-47",
    "name": "Golden Ratio Fibonacci Spiral Sacred Geometry Hoodie",
    "slug": "golden-ratio-fibonacci-spiral-sacred-geometry-hoodie",
    "subtitle": "Mathematical Harmony Embroidered in Metallic Gold Wire",
    "description": "The blueprint of natural beauty. High-precision gold metallic thread traces the infinite logarithmic spiral across the back.",
    "category": "hoodies",
    "price": 1749,
    "originalPrice": 2599,
    "rating": 5,
    "reviewCount": 72,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "geometry",
      "gold",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-48",
    "name": "Cybernetic Heart Circuit High Density Embroidery Hoodie",
    "slug": "cybernetic-heart-circuit-high-density-embroidery-hoodie",
    "subtitle": "Anatomical Heart Integrated with Glowing Circuit Traces",
    "description": "Human emotion fused with cold technology. Blood red cardiac muscle entwined with neon blue PCB traces and chip pins.",
    "category": "hoodies",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.8,
    "reviewCount": 48,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "cyberpunk",
      "streetwear",
      "dark"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-49",
    "name": "Brooklyn 1994 Athletics Club Vintage Chenille Hoodie",
    "slug": "brooklyn-1994-athletics-club-vintage-chenille-hoodie",
    "subtitle": "Tactile Fuzzy Chenille Lettering & Archival Felt Patch",
    "description": "Old-school varsity heritage. Ultra-plush raised chenille loop patches stitched onto heavyweight 320 GSM fleece.",
    "category": "hoodies",
    "price": 1799,
    "originalPrice": 2699,
    "rating": 4.9,
    "reviewCount": 66,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "varsity",
      "vintage",
      "chenille",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-50",
    "name": "Sunset Mirage Gradient Wave Heavy Fleece Street Hoodie",
    "slug": "sunset-mirage-gradient-wave-heavy-fleece-street-hoodie",
    "subtitle": "Ombre Sunrise Horizon Contour & Palm Frond Silhouette",
    "description": "Golden hour warmth wherever you wander. Smooth ombre thread transitions create a glowing sunset across the lower back.",
    "category": "hoodies",
    "price": 1599,
    "originalPrice": 2299,
    "rating": 4.7,
    "reviewCount": 35,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "summer",
      "sunset",
      "streetwear"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-51",
    "name": "Wanderlust Compass & Global Coordinates Fleece Hoodie",
    "slug": "wanderlust-compass-global-coordinates-fleece-hoodie",
    "subtitle": "Navigation Star & Latitude-Longitude Spanning Back",
    "description": "For the eternal traveler. Intricate maritime compass rose needlework with custom city coordinate options on request.",
    "category": "hoodies",
    "price": 1599,
    "originalPrice": 2299,
    "rating": 4.8,
    "reviewCount": 41,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "travel",
      "minimalist"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-52",
    "name": "Midnight Raven Feather Shadow Fleece Pullover",
    "slug": "midnight-raven-feather-shadow-fleece-pullover",
    "subtitle": "Gothic Obsidian Plumes & Silver Moon Crescent",
    "description": "Dark romantic streetwear. Deep black and gunmetal grey thread layers capture individual barbules of a raven wing.",
    "category": "hoodies",
    "price": 1549,
    "originalPrice": 2199,
    "rating": 4.9,
    "reviewCount": 53,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "gothic",
      "streetwear",
      "dark"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-53",
    "name": "Lunar Eclipse Phases Astronomy Velvet-Stitch Hoodie",
    "slug": "lunar-eclipse-phases-astronomy-velvet-stitch-hoodie",
    "subtitle": "Waxing to Waning Moon Alignment Across Front Chest",
    "description": "Cosmic celestial alignment. Seven phases of the moon rendered with high-density silver tatami stitching along the chest line.",
    "category": "hoodies",
    "price": 1649,
    "originalPrice": 2399,
    "rating": 5,
    "reviewCount": 88,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "space",
      "astronomy",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-54",
    "name": "Emerald Botanical Monstera Leaf Nature Crewneck Pullover",
    "slug": "emerald-botanical-monstera-leaf-nature-crewneck-pullover",
    "subtitle": "Tropical Fenestrated Leaf with Golden Vein Threading",
    "description": "Breathe life into your winter wardrobe. Deep forest green and golden embroidery threads highlight tropical monstera foliage.",
    "category": "hoodies",
    "price": 1499,
    "originalPrice": 2099,
    "rating": 4.8,
    "reviewCount": 46,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "nature",
      "botanical",
      "aesthetic"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-55",
    "name": "Astroworld Space Odyssey Astronaut Visor Hoodie",
    "slug": "astroworld-space-odyssey-astronaut-visor-hoodie",
    "subtitle": "Gold Mirror Reflective Helmet Visor & Cosmic Stardust",
    "description": "Explore the infinite expanse. Detailed EVA spacesuit helmet with shimmering metallic gold thread visor reflecting distant stars.",
    "category": "hoodies",
    "price": 1749,
    "originalPrice": 2599,
    "rating": 4.9,
    "reviewCount": 79,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "space",
      "astronaut",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-56",
    "name": "Urban Dystopia Acid Washed Raw Hem Street Fleece",
    "slug": "urban-dystopia-acid-washed-raw-hem-street-fleece",
    "subtitle": "Mineral Wash Stone Finish with Distressed Needlework",
    "description": "Industrial grunge aesthetic. Custom vintage stone wash pairs with raw distress-stitched typographic accents.",
    "category": "hoodies",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 4.8,
    "reviewCount": 50,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "acid wash",
      "grunge",
      "streetwear"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-57",
    "name": "Minimalist Monolith 320 GSM Hoodie – Forest Olive",
    "slug": "minimalist-monolith-320-gsm-hoodie-forest-olive",
    "subtitle": "Subtle Earth-Tone Heavyweight Clean Fleece",
    "description": "Zero logos, pure luxury drape. Premium 320 GSM loopknit fleece in rich forest olive with structured double-lined hood.",
    "category": "hoodies",
    "price": 1549,
    "originalPrice": 2199,
    "rating": 4.9,
    "reviewCount": 63,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "minimalist",
      "earth",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-58",
    "name": "Minimalist Monolith 320 GSM Hoodie – Vintage Beige",
    "slug": "minimalist-monolith-320-gsm-hoodie-vintage-beige",
    "subtitle": "Cozy Warm Sand Combed Cotton Drop-Shoulder",
    "description": "Clean aesthetic beige heavyweight hoodie engineered for cold mornings, coffee runs, and endless comfort.",
    "category": "hoodies",
    "price": 1549,
    "originalPrice": 2199,
    "rating": 4.9,
    "reviewCount": 91,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "hoodies",
      "minimalist",
      "beige",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-59",
    "name": "Classic Honeycomb Pique Polo – Executive Navy",
    "slug": "classic-honeycomb-pique-polo-executive-navy",
    "subtitle": "Structured Collar & Breathable Pique Knit Fabric",
    "description": "The quintessential smart-casual staple. Deep midnight navy 220 GSM combed cotton with mother-of-pearl placket buttons.",
    "category": "polo",
    "price": 849,
    "originalPrice": 1299,
    "rating": 4.8,
    "reviewCount": 64,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "corporate",
      "formal",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-60",
    "name": "Classic Honeycomb Pique Polo – Crisp Cloud White",
    "slug": "classic-honeycomb-pique-polo-crisp-cloud-white",
    "subtitle": "Bright White Tennis & Golf Performance Cotton",
    "description": "Immaculate white pique knit tailored for weekend golf tournaments, clubhouse dinners, and office presentations.",
    "category": "polo",
    "price": 849,
    "originalPrice": 1299,
    "rating": 4.9,
    "reviewCount": 58,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "white",
      "formal",
      "golf",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-61",
    "name": "Classic Honeycomb Pique Polo – Pitch Onyx Black",
    "slug": "classic-honeycomb-pique-polo-pitch-onyx-black",
    "subtitle": "Deep Black Yarn-Dyed Color Retention Pique Polo",
    "description": "Engineered with reactive dyes that resist fading even after 50 wash cycles. Crisp ribbed collar that never curls.",
    "category": "polo",
    "price": 849,
    "originalPrice": 1299,
    "rating": 4.8,
    "reviewCount": 72,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "black",
      "formal"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-62",
    "name": "Classic Honeycomb Pique Polo – British Racing Green",
    "slug": "classic-honeycomb-pique-polo-british-racing-green",
    "subtitle": "Deep Forest Emerald Knit with Subtle Contrast Tipping",
    "description": "Inspired by historic motorsport heritage. Rich hunter green pique cotton complemented by ivory twin tipping on collar.",
    "category": "polo",
    "price": 899,
    "originalPrice": 1399,
    "rating": 4.7,
    "reviewCount": 39,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "green",
      "classic"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-63",
    "name": "Classic Honeycomb Pique Polo – Royal Burgundy Wine",
    "slug": "classic-honeycomb-pique-polo-royal-burgundy-wine",
    "subtitle": "Lustrous Maroon Combed Cotton with Tailored Placket",
    "description": "Sophisticated wine hue crafted from 100% long-staple combed cotton for an exceptionally smooth handfeel.",
    "category": "polo",
    "price": 899,
    "originalPrice": 1399,
    "rating": 4.8,
    "reviewCount": 44,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "burgundy",
      "formal"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-64",
    "name": "Custom Startup & Tech Founder Chest Embroidered Polo",
    "slug": "custom-startup-tech-founder-chest-embroidered-polo",
    "subtitle": "Upload Vector SVG/PNG for Sharp Micro-Needle Stitching",
    "description": "Give your venture the professional edge. Send us your high-res startup logo and our digitizers will calibrate thread density for micro-clarity.",
    "category": "polo",
    "price": 899,
    "originalPrice": 1399,
    "rating": 5,
    "reviewCount": 98,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "custom",
      "corporate",
      "startup",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-65",
    "name": "Custom Yacht & Country Club Crest Embroidered Polo",
    "slug": "custom-yacht-country-club-crest-embroidered-polo",
    "subtitle": "Ornate Laurel Wreath & Gold Thread Monogram",
    "description": "Traditional nautical or golf crests stitched with gleaming gold and silver embroidery thread over the left chest.",
    "category": "polo",
    "price": 949,
    "originalPrice": 1449,
    "rating": 4.9,
    "reviewCount": 38,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "golf",
      "crest",
      "luxury"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-66",
    "name": "University Collegiate Crest Heritage Ribbed Collar Polo",
    "slug": "university-collegiate-crest-heritage-ribbed-collar-polo",
    "subtitle": "Classic Ivy League Shield with Latin Motto Ribbon",
    "description": "Vintage collegiate spirit. High-density embroidered shield crest with contrast sleeve band accents on combed cotton.",
    "category": "polo",
    "price": 899,
    "originalPrice": 1399,
    "rating": 4.7,
    "reviewCount": 31,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "vintage",
      "collegiate"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-67",
    "name": "Minimalist Geometric Monogram Bespoke Cotton Polo",
    "slug": "minimalist-geometric-monogram-bespoke-cotton-polo",
    "subtitle": "Modern Bauhaus Initial Lettering on Left Pocket Area",
    "description": "Understated luxury. Choose 2-3 initials to be embroidered in a modern sans-serif architectural monogram.",
    "category": "polo",
    "price": 879,
    "originalPrice": 1349,
    "rating": 4.8,
    "reviewCount": 42,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "custom",
      "minimalist"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-68",
    "name": "Nautical Anchor Marine Luxury Combed Honeycomb Polo",
    "slug": "nautical-anchor-marine-luxury-combed-honeycomb-polo",
    "subtitle": "Twisted Rope & Naval Brass Color Embroidered Anchor",
    "description": "Ocean breeze ready. Delicate 2-inch naval anchor motif with authentic rope wrap stitching on pure navy or white pique.",
    "category": "polo",
    "price": 899,
    "originalPrice": 1399,
    "rating": 4.8,
    "reviewCount": 35,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "nautical",
      "summer"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-69",
    "name": "Vintage Tennis Club 1982 Contrast Tipping Pique Polo",
    "slug": "vintage-tennis-club-1982-contrast-tipping-pique-polo",
    "subtitle": "Dual Crossed Racquets & Tennis Ball Laurel Stitch",
    "description": "Grand slam nostalgia. Crossed vintage wooden racquets rendered with tight tatami stitch over crisp white honeycomb knit.",
    "category": "polo",
    "price": 929,
    "originalPrice": 1399,
    "rating": 4.9,
    "reviewCount": 56,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "tennis",
      "vintage",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-70",
    "name": "Silicon Valley Developer Minimalist Micro-Stitch Polo",
    "slug": "silicon-valley-developer-minimalist-micro-stitch-polo",
    "subtitle": "Curly Brackets & Binary Code Micro Embroidered Tab",
    "description": "Code in comfort. Tiny subtle code syntax bracket `{ }` embroidered in sleek silver thread for understated engineering pride.",
    "category": "polo",
    "price": 879,
    "originalPrice": 1349,
    "rating": 4.9,
    "reviewCount": 47,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622445268045-3f0fb2a0a961?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "tech",
      "developer",
      "minimalist"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-71",
    "name": "Industrial Tajima Signature Double Pique Tailored Polo",
    "slug": "industrial-tajima-signature-double-pique-tailored-polo",
    "subtitle": "Heavy 240 GSM Structured Pique with Pearlized Buttons",
    "description": "Our heavyweight polo flagship. Heavier 240 GSM double-pique cotton engineered for executive boardroom authority.",
    "category": "polo",
    "price": 999,
    "originalPrice": 1499,
    "rating": 5,
    "reviewCount": 61,
    "gsm": "240 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "executive",
      "luxury",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-72",
    "name": "Sovereign Executive Monogram Combed Cotton Polo",
    "slug": "sovereign-executive-monogram-combed-cotton-polo",
    "subtitle": "Gold Thread Serif Crest on Jet Black Honeycomb",
    "description": "Regal distinction. Metallic gold Madeira thread stitches your bespoke family or corporate initials on deep black pique.",
    "category": "polo",
    "price": 949,
    "originalPrice": 1449,
    "rating": 4.8,
    "reviewCount": 40,
    "gsm": "220 GSM",
    "fabric": "100% Cotton Honeycomb Knit",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "polo",
      "custom",
      "luxury",
      "gold"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-73",
    "name": "Custom Couple Hands Holding Heartfelt Contour Pullover",
    "slug": "custom-couple-hands-holding-heartfelt-contour-pullover",
    "subtitle": "Interlocked Fingers & Subtle Heart Initial on Sleeve",
    "description": "Capture the sacred touch of two hands holding. Our digitizers hand-draw the delicate finger contours directly from your phone photo.",
    "category": "portrait",
    "price": 1399,
    "originalPrice": 1999,
    "rating": 5,
    "reviewCount": 124,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "custom",
      "anniversary",
      "gifts",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-74",
    "name": "Cat Whiskers & Curious Paws Pocket Embroidery Tee",
    "slug": "cat-whiskers-curious-paws-pocket-embroidery-tee",
    "subtitle": "Playful Kitten Peeking Over Chest Pocket with Tiny Claws",
    "description": "For passionate feline parents. Stitched with lifelike nylon whiskers and alert triangular ears poking out of the front pocket.",
    "category": "portrait",
    "price": 949,
    "originalPrice": 1399,
    "rating": 4.9,
    "reviewCount": 68,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "cats",
      "pets",
      "cute",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-75",
    "name": "Custom Anniversary Roman Numerals Sleeve & Chest Tee",
    "slug": "custom-anniversary-roman-numerals-sleeve-chest-tee",
    "subtitle": "Bespoke Calendar Date Digitized in Regal Roman Typeface",
    "description": "Immortalize your anniversary, proposal, or graduation date. Embroidered crisply across the chest with a red heart on the wrist sleeve.",
    "category": "portrait",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.9,
    "reviewCount": 145,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "custom",
      "anniversary",
      "roman numerals",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-76",
    "name": "Family Silhouette Memory Digitized Lineart Sweatshirt",
    "slug": "family-silhouette-memory-digitized-lineart-sweatshirt",
    "subtitle": "Parents, Children & Pet Outlines Captured in Thread",
    "description": "A treasured family heirloom. Send a vacation or holiday photo and wear your family silhouette wherever you travel.",
    "category": "portrait",
    "price": 1499,
    "originalPrice": 2199,
    "rating": 5,
    "reviewCount": 86,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1622445268045-3f0fb2a0a961?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1622445268045-3f0fb2a0a961?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "family",
      "custom",
      "gifts",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-77",
    "name": "Baby Footprint & Birthday Keepsake Embroidered Hoodie",
    "slug": "baby-footprint-birthday-keepsake-embroidered-hoodie",
    "subtitle": "1:1 Scale Newborn Footprint with Birth Weight & Time",
    "description": "Celebrate the arrival of your little miracle. Actual size newborn footprint stitched with tender pastel thread and birth details.",
    "category": "portrait",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 5,
    "reviewCount": 77,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "baby",
      "custom",
      "gifts",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-78",
    "name": "German Shepherd Noble Profile Dense Stitch Pullover",
    "slug": "german-shepherd-noble-profile-dense-stitch-pullover",
    "subtitle": "Erect Alert Ears & Loyal Gaze Lineart on 320 GSM Fleece",
    "description": "The noble guardian of the household. Clean black and tan contour stitches showcase the commanding German Shepherd head shape.",
    "category": "portrait",
    "price": 1399,
    "originalPrice": 1999,
    "rating": 4.8,
    "reviewCount": 52,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "dogs",
      "pets",
      "hoodies"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-79",
    "name": "Siberian Husky Ocean Eyes Bio-Washed Graphic Tee",
    "slug": "siberian-husky-ocean-eyes-bio-washed-graphic-tee",
    "subtitle": "Striking Sky-Blue Thread Pupils & Fluffy Neck Ruff",
    "description": "Arctic spirit in thread form. Piercing cyan blue eyes stitched amidst silver and charcoal fur contours on soft combed cotton.",
    "category": "portrait",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 43,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f97?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "dogs",
      "pets",
      "oversize"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-80",
    "name": "Custom Pet Trio Portrait Multi-Thread Digitized Fleece",
    "slug": "custom-pet-trio-portrait-multi-thread-digitized-fleece",
    "subtitle": "Upload Up to 3 Pets Stitched Side-by-Side with Names",
    "description": "Got multiple fur babies? We stitch up to three dog/cat portraits side-by-side across the chest with their individual names underneath.",
    "category": "portrait",
    "price": 1599,
    "originalPrice": 2299,
    "rating": 5,
    "reviewCount": 92,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "pets",
      "custom",
      "hoodies",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-81",
    "name": "Corgi Royal Silhouette Heart Contour Embroidered Tee",
    "slug": "corgi-royal-silhouette-heart-contour-embroidered-tee",
    "subtitle": "Stubby Paws & Heart-Shaped Tail Contour Stitching",
    "description": "The beloved royal loaf. Adorable corgi silhouette with stubby legs and happy ear perk embroidered over your heart.",
    "category": "portrait",
    "price": 949,
    "originalPrice": 1399,
    "rating": 4.9,
    "reviewCount": 58,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "dogs",
      "pets",
      "cute"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-82",
    "name": "Persian & Indie Cat Outline Minimalist Pocket Tee",
    "slug": "persian-indie-cat-outline-minimalist-pocket-tee",
    "subtitle": "Elegant Whisker Flow & Serene Resting Cat Pose",
    "description": "Understated feline elegance. Graceful continuous line drawing of a sleeping cat curled comfortably around the chest pocket.",
    "category": "portrait",
    "price": 899,
    "originalPrice": 1399,
    "rating": 4.8,
    "reviewCount": 41,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "cats",
      "pets",
      "minimalist"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-83",
    "name": "Custom Wedding Day Vow Minimalist Cursive Script Hoodie",
    "slug": "custom-wedding-day-vow-minimalist-cursive-script-hoodie",
    "subtitle": "Bride & Groom Silhouette with Embroidered Wedding Date",
    "description": "Relive the magic of your special day. Elegant outline of the couple first dance with the wedding date stitched in fine cursive.",
    "category": "portrait",
    "price": 1699,
    "originalPrice": 2499,
    "rating": 5,
    "reviewCount": 83,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "hoodie",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "wedding",
      "custom",
      "gifts",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-84",
    "name": "Best Friends Line Drawing Matching Duo Streetwear",
    "slug": "best-friends-line-drawing-matching-duo-streetwear",
    "subtitle": "Pinky Promise or Cheers Silhouette for Inseparable Duos",
    "description": "Celebrate the bond that never breaks. Matching embroidered lineart of two friends doing a pinky promise or clinking glasses.",
    "category": "portrait",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewCount": 57,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "friends",
      "custom",
      "gifts"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-85",
    "name": "Memorial Angel Wings Pet Tribute Velvet Stitch Crewneck",
    "slug": "memorial-angel-wings-pet-tribute-velvet-stitch-crewneck",
    "subtitle": "Cherished Pet Silhouette Enfolded in Delicate Angel Wings",
    "description": "A comforting, eternal tribute to pets who cross the rainbow bridge. Tender angel wing stitching holds their memory close forever.",
    "category": "portrait",
    "price": 1449,
    "originalPrice": 2099,
    "rating": 5,
    "reviewCount": 69,
    "gsm": "320 GSM",
    "fabric": "Cotton Brushed Fleece Loopknit",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1571455786673-9d9d6c194f97?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f97?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "sweatshirt",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 320 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "memorial",
      "pets",
      "custom",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-86",
    "name": "Grandparents Heritage Lineart Vintage Combed Tee",
    "slug": "grandparents-heritage-lineart-vintage-combed-tee",
    "subtitle": "Vintage Portrait Digitized into Warm Nostalgic Outline",
    "description": "Honor family roots with a timeless portrait of grandparents from an old black-and-white print digitized with loving precision.",
    "category": "portrait",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 37,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "portrait",
      "family",
      "custom",
      "vintage"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-87",
    "name": "Custom College & Farewell Batch Merch Heavy Tee",
    "slug": "custom-college-farewell-batch-merch-heavy-tee",
    "subtitle": "Batch Year, Nicknames & Department Crest Embroidery",
    "description": "Commemorate the unforgettable years of campus life. Bulk options for college departments, farewell batches, and club fests.",
    "category": "custom-embroidery",
    "price": 899,
    "originalPrice": 1399,
    "rating": 4.8,
    "reviewCount": 79,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "college",
      "custom",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-88",
    "name": "Custom Music Band & Tour Merch Heavyweight Tee",
    "slug": "custom-music-band-tour-merch-heavyweight-tee",
    "subtitle": "Band Logo Front & Tour Dates Screen Print / Embroidery",
    "description": "Stage-ready merchandise. Heavy 240 GSM combed cotton that withstands the intensity of mosh pits, stage lights, and repeated washing.",
    "category": "custom-embroidery",
    "price": 949,
    "originalPrice": 1449,
    "rating": 4.9,
    "reviewCount": 52,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "music",
      "band",
      "streetwear"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-89",
    "name": "Custom Fitness & Gym Athlete Drop-Shoulder Tee",
    "slug": "custom-fitness-gym-athlete-drop-shoulder-tee",
    "subtitle": "Breathable Heavy Cotton for Heavy Barbell Sessions",
    "description": "Built for gym rats and strength athletes. Wide armholes, loose drop-shoulder drape, and fade-proof chest gym branding.",
    "category": "custom-embroidery",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewCount": 66,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "gym",
      "fitness",
      "oversize"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-90",
    "name": "Custom Coffee Roasters & Cafe Barista Combed Polo",
    "slug": "custom-coffee-roasters-cafe-barista-combed-polo",
    "subtitle": "Coffee Bean & Portafilter Stitching for Cafe Uniforms",
    "description": "Elevate your cafe aesthetic. Pique polo embroidered with your roastery badge and barista name tag for artisan hospitality.",
    "category": "custom-embroidery",
    "price": 899,
    "originalPrice": 1399,
    "rating": 4.7,
    "reviewCount": 43,
    "gsm": "220 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "polo-tee",
      "oversize-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 220 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "cafe",
      "polo",
      "uniform"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-91",
    "name": "Custom Esports & Gaming Clan Jersey-Cut Heavy Tee",
    "slug": "custom-esports-gaming-clan-jersey-cut-heavy-tee",
    "subtitle": "Gamer Tag on Collar with High-Density Team Crest",
    "description": "Level up your clan apparel. Gamer tag stitched in sleek techno font on the back collar with sharp team badge on chest.",
    "category": "custom-embroidery",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.9,
    "reviewCount": 61,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "gaming",
      "esports",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-92",
    "name": "Custom Creator & YouTube Channel Community Drop Tee",
    "slug": "custom-creator-youtube-channel-community-drop-tee",
    "subtitle": "Subscriber Milestones & Creator Catchphrases in Thread",
    "description": "Monetize your audience with merch they will actually wear. High quality 240 GSM cotton that fans proudly show off on stream.",
    "category": "custom-embroidery",
    "price": 949,
    "originalPrice": 1449,
    "rating": 4.9,
    "reviewCount": 88,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "creator",
      "youtube",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-93",
    "name": "Custom Brewery & Craft Beer Label Embroidered Tee",
    "slug": "custom-brewery-craft-beer-label-embroidered-tee",
    "subtitle": "Hops Cone & Vintage Barley Wreath Needlework",
    "description": "Craft beer passion. Detailed hop cone embroidery and brewery monogram on pre-shrunk vintage wash streetwear blanks.",
    "category": "custom-embroidery",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewCount": 34,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "brewery",
      "beer",
      "vintage"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-94",
    "name": "Custom Spotify Track Waveform & Song Title Tee",
    "slug": "custom-spotify-track-waveform-song-title-tee",
    "subtitle": "Scannable Spotify Soundwave Code Embroidered Over Heart",
    "description": "Wear your favourite song. Send your chosen Spotify track and our digitizers will stitch the scannable code bars in precision thread.",
    "category": "custom-embroidery",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 5,
    "reviewCount": 114,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "music",
      "spotify",
      "gifts",
      "bestseller"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-95",
    "name": "Custom Handwritten Signature Micro Stitch Pocket Tee",
    "slug": "custom-handwritten-signature-micro-stitch-pocket-tee",
    "subtitle": "Your Actual Pen Signature Transferred into Real Thread",
    "description": "Sign your name on paper, snap a photo, and watch our industrial Tajima machines recreate your exact handwritten flow.",
    "category": "custom-embroidery",
    "price": 949,
    "originalPrice": 1399,
    "rating": 4.9,
    "reviewCount": 49,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "signature",
      "minimalist",
      "custom"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-96",
    "name": "Custom Coordinates of Your Hometown / First Kiss Tee",
    "slug": "custom-coordinates-of-your-hometown-first-kiss-tee",
    "subtitle": "Precise GPS Latitude & Longitude in Modern Monospace",
    "description": "Remember where it all began. GPS coordinates of your meeting spot, home, or summit victory embroidered across the chest.",
    "category": "custom-embroidery",
    "price": 949,
    "originalPrice": 1399,
    "rating": 4.8,
    "reviewCount": 55,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "coordinates",
      "minimalist"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-97",
    "name": "Custom Zodiac Constellation & Star Birthstone Heavy Tee",
    "slug": "custom-zodiac-constellation-star-birthstone-heavy-tee",
    "subtitle": "Starlight Cluster Connected with Metallic Silver Thread",
    "description": "Look to the stars. Your zodiac celestial constellation connected with delicate silver starlight lines and astrological symbol.",
    "category": "custom-embroidery",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.9,
    "reviewCount": 67,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "zodiac",
      "astrology",
      "gifts"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-98",
    "name": "Custom Typographic Statement & Mantra Streetwear Tee",
    "slug": "custom-typographic-statement-mantra-streetwear-tee",
    "subtitle": "High-Density Embroidered Lettering in Custom Fonts",
    "description": "Your life philosophy in tactile embroidery. Choose from bold gothic, sleek modern, or retro serif fonts for your custom quote.",
    "category": "custom-embroidery",
    "price": 949,
    "originalPrice": 1399,
    "rating": 4.8,
    "reviewCount": 41,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "custom-embroidery",
      "typography",
      "streetwear",
      "quote"
    ],
    "isCustomizable": true
  },
  {
    "id": "prod-99",
    "name": "Tokyo Shinjuku Midnight Alley Acid Wash Oversized Tee",
    "slug": "tokyo-shinjuku-midnight-alley-acid-wash-oversized-tee",
    "subtitle": "Distressed Vintage Charcoal with Crimson Kanji Script",
    "description": "Immerse yourself in neon noir. Hand-treated acid wash cotton gives each t-shirt a unique weathered vintage pattern.",
    "category": "streetwear",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 82,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "japan",
      "acid wash",
      "bestseller",
      "oversize"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-100",
    "name": "Neo-Tokyo Mecha Robot Unit 00 Heavy Streetwear Tee",
    "slug": "neo-tokyo-mecha-robot-unit-00-heavy-streetwear-tee",
    "subtitle": "Exoskeleton Wireframe & Warning Hazard Chevron Stripes",
    "description": "Cybernetic warfare aesthetics. Sharp geometric exoskeleton contours stitched in metallic tungsten thread on heavy black cotton.",
    "category": "streetwear",
    "price": 1099,
    "originalPrice": 1599,
    "rating": 4.8,
    "reviewCount": 45,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "mecha",
      "cyberpunk",
      "oversize"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-101",
    "name": "Japanese Koi Carp Swimming Against Currents Heavy Tee",
    "slug": "japanese-koi-carp-swimming-against-currents-heavy-tee",
    "subtitle": "Traditional Irezumi Scales & Golden Splash Foam",
    "description": "Symbol of perseverance and triumph. Multi-toned vermilion and gold koi fish scales leaping through stylized embroidered waves.",
    "category": "streetwear",
    "price": 1099,
    "originalPrice": 1599,
    "rating": 5,
    "reviewCount": 94,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "japan",
      "irezumi",
      "art",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-102",
    "name": "Dragon of the East Metallic Gold Thread Heavy Tee",
    "slug": "dragon-of-the-east-metallic-gold-thread-heavy-tee",
    "subtitle": "Serpentine Eastern Dragon Coiled Around Spine & Shoulder",
    "description": "Mythical majesty. Real metallic gold thread loops create shimmering scales of a serpentine imperial dragon across the left shoulder.",
    "category": "streetwear",
    "price": 1149,
    "originalPrice": 1699,
    "rating": 4.9,
    "reviewCount": 73,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "dragon",
      "gold",
      "oriental"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-103",
    "name": "Dark Aesthetic Gothic Skull & Thorns Drop-Shoulder Tee",
    "slug": "dark-aesthetic-gothic-skull-thorns-drop-shoulder-tee",
    "subtitle": "Botanical Briars & Intricate Cranium Contour Stitching",
    "description": "Dark romantic streetwear. Delicate thorned vines intertwine with an anatomical skull contour across the center chest.",
    "category": "streetwear",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewCount": 56,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1618354691438-25bc04584c03?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "gothic",
      "grunge",
      "dark"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-104",
    "name": "90s Vintage Boombox & Audio Cassette Retro Streetwear",
    "slug": "90s-vintage-boombox-audio-cassette-retro-streetwear",
    "subtitle": "Magnetic Tape Ribbon & Dual Woofer Speakers in Thread",
    "description": "Rewind the tape. Nostalgic analog boombox rendered with multi-colored 90s neon thread accents on combed black cotton.",
    "category": "streetwear",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.7,
    "reviewCount": 38,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "retro",
      "90s",
      "music"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-105",
    "name": "Shibuya Crossing Typographic Oversized Heavyweight Tee",
    "slug": "shibuya-crossing-typographic-oversized-heavyweight-tee",
    "subtitle": "Pedestrian Zebra Stripes & Bold Kanji Coordinates",
    "description": "The pulse of the world busiest intersection. Bold typographic front print framed by tactile embroidered corner brackets.",
    "category": "streetwear",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 65,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "tokyo",
      "typography",
      "bestseller",
      "oversize"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-106",
    "name": "Cyberpunk Glitch Matrix Reflective Thread Accent Tee",
    "slug": "cyberpunk-glitch-matrix-reflective-thread-accent-tee",
    "subtitle": "Digital Code Waterfall with Reflective 3M Safety Threads",
    "description": "Decode the simulation. Digital rain matrix code featuring light-reflective threads that flash brightly when captured on smartphone camera.",
    "category": "streetwear",
    "price": 1099,
    "originalPrice": 1599,
    "rating": 4.8,
    "reviewCount": 49,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "cyberpunk",
      "glitch",
      "oversize"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-107",
    "name": "Abstract Minimalist Face Bauhaus Lineart Heavy Tee",
    "slug": "abstract-minimalist-face-bauhaus-lineart-heavy-tee",
    "subtitle": "Continuous Single-Line Facial Contour in Jet Black Thread",
    "description": "Modern art gallery streetwear. An uninterrupted continuous thread line forms an expressive cubist facial profile on clean white cotton.",
    "category": "streetwear",
    "price": 949,
    "originalPrice": 1399,
    "rating": 4.8,
    "reviewCount": 51,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "art",
      "minimalist",
      "bauhaus"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-108",
    "name": "Urban Graffiti Tag High-Stitch Textured Streetwear Tee",
    "slug": "urban-graffiti-tag-high-stitch-textured-streetwear-tee",
    "subtitle": "Fat-Cap Drip Spray Paint Texture Recreated in Thread",
    "description": "Straight from the alley walls. Dense zig-zag tatami stitching recreates the raw dripping spray paint handstyle of underground street artists.",
    "category": "streetwear",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.7,
    "reviewCount": 37,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "LIMITED",
    "image": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "graffiti",
      "hiphop",
      "urban"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-109",
    "name": "Desert Oasis Cactus & Sunset Silhouette Heavyweight Tee",
    "slug": "desert-oasis-cactus-sunset-silhouette-heavyweight-tee",
    "subtitle": "Saguaro Cactus Spines & Terracotta Warm Thread Hues",
    "description": "Warm desert winds. Terracotta and sage green threads depict majestic saguaro spines standing against a serene sunset horizon.",
    "category": "streetwear",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewCount": 42,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "NEW",
    "image": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "sweatshirt"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "nature",
      "desert",
      "aesthetic"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-110",
    "name": "Tarot Card The Sun & Celestial Radiance Heavy Tee",
    "slug": "tarot-card-the-sun-celestial-radiance-heavy-tee",
    "subtitle": "Esoteric Golden Sun Face & Ornate Mystical Border",
    "description": "Vitality, joy, and cosmic warmth. Intricate gold thread tarot card framing surrounding a serene smiling sun face with radiating beams.",
    "category": "streetwear",
    "price": 1099,
    "originalPrice": 1599,
    "rating": 5,
    "reviewCount": 84,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622445268045-3f0fb2a0a961?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "tarot",
      "gold",
      "mystical",
      "bestseller"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-111",
    "name": "Ouroboros Infinity Serpent Tail-Eating Heavyweight Tee",
    "slug": "ouroboros-infinity-serpent-tail-eating-heavyweight-tee",
    "subtitle": "Eternal Cycle of Rebirth Embroidered in Obsidian & Gold",
    "description": "The ancient symbol of wholeness and infinity. Circular coiled serpent eating its own tail, stitched with shimmering scales and emerald eyes.",
    "category": "streetwear",
    "price": 1049,
    "originalPrice": 1549,
    "rating": 4.9,
    "reviewCount": 62,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "HOT",
    "image": "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574180566232-a6603e0d331e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "mythology",
      "infinity",
      "dark"
    ],
    "isCustomizable": false
  },
  {
    "id": "prod-112",
    "name": "The Embroprint Archive Heritage Signature Heavyweight Tee",
    "slug": "the-embroprint-archive-heritage-signature-heavyweight-tee",
    "subtitle": "Our Flagship 240 GSM Drop-Shoulder Needle & Thread Seal",
    "description": "The emblem of precision textile craftsmanship. Our signature needle and thread hexagon crest embroidered with pride on 240 GSM pure combed cotton.",
    "category": "streetwear",
    "price": 899,
    "originalPrice": 1399,
    "rating": 5,
    "reviewCount": 156,
    "gsm": "240 GSM",
    "fabric": "100% Heavy Combed Cotton",
    "badge": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=800&auto=format&fit=crop&q=80"
    ],
    "availableGarments": [
      "oversize-tee",
      "hoodie",
      "sweatshirt",
      "polo-tee"
    ],
    "colors": COLOR_OPTIONS,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "features": [
      "Crafted on 240 GSM bio-washed pre-shrunk combed cotton",
      "High-density Japanese tatami stitch embroidery",
      "Resistant to fraying and thread fading over 50+ washes",
      "Comfortable modern tailored streetwear drape"
    ],
    "tags": [
      "streetwear",
      "signature",
      "bestseller",
      "oversize",
      "minimalist"
    ],
    "isCustomizable": false
  }
];
