/**
 * CartNova product catalog seed data.
 * Temporary frontend data until the backend catalog is connected.
 */
const CartNovaData = {
  "categories": [
    {
      "id": 1,
      "name": "Electronics",
      "description": "Gadgets & devices",
      "icon": "💻"
    },
    {
      "id": 2,
      "name": "Fashion",
      "description": "Style for everyone",
      "icon": "👗"
    },
    {
      "id": 3,
      "name": "Home & Living",
      "description": "Comfort essentials",
      "icon": "🏠"
    },
    {
      "id": 4,
      "name": "Books",
      "description": "Learn & unwind",
      "icon": "📚"
    },
    {
      "id": 5,
      "name": "Beauty",
      "description": "Self-care picks",
      "icon": "✨"
    },
    {
      "id": 6,
      "name": "Sports",
      "description": "Move & play",
      "icon": "🏃"
    },
    {
      "id": 7,
      "name": "Grocery",
      "description": "Pantry staples & everyday essentials",
      "icon": "🛒"
    },
    {
      "id": 8,
      "name": "Toys",
      "description": "Creative play for curious minds",
      "icon": "🧸"
    },
    {
      "id": 9,
      "name": "Mobiles",
      "description": "Smartphones & mobile accessories",
      "icon": "📱"
    },
    {
      "id": 10,
      "name": "Kitchen",
      "description": "Cookware & kitchen essentials",
      "icon": "🍳"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "NovaBuds Pro Wireless Earbuds",
      "categoryId": 1,
      "price": 3999,
      "discount": 20,
      "rating": 4.6,
      "stock": 42,
      "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "description": "Immersive sound, active noise cancellation, and 28-hour battery life in a compact charging case.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-01-12",
      "mrp": 4999,
      "brand": "NovaSound",
      "category": "Electronics",
      "subcategory": "Wireless audio",
      "sku": "CN-0001",
      "reviewCount": 842,
      "salesCount": 4210,
      "specifications": {
        "Connection": "Bluetooth 5.3",
        "Noise control": "Hybrid ANC",
        "Battery": "Up to 28 hours with case"
      },
      "tags": [
        "novabuds",
        "pro",
        "wireless",
        "earbuds"
      ],
      "images": [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 2,
      "name": "AeroBook 14 Ultrabook",
      "categoryId": 1,
      "price": 57199,
      "discount": 12,
      "rating": 4.8,
      "stock": 18,
      "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "description": "Lightweight productivity laptop with vivid display, fast SSD, and all-day battery.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-02-01",
      "mrp": 64999,
      "brand": "AeroTech",
      "category": "Electronics",
      "subcategory": "Laptops",
      "sku": "CN-0002",
      "reviewCount": 356,
      "salesCount": 1820,
      "specifications": {
        "Display": "14-inch IPS",
        "Memory": "16 GB RAM",
        "Storage": "512 GB SSD"
      },
      "tags": [
        "aerobook",
        "ultrabook"
      ],
      "images": [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 3,
      "name": "PulseFit Smartwatch X2",
      "categoryId": 1,
      "price": 7649,
      "discount": 15,
      "rating": 4.4,
      "stock": 55,
      "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "description": "Track workouts, heart rate, sleep, and notifications with a bright AMOLED screen.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-01-28",
      "mrp": 8999,
      "brand": "PulseFit",
      "category": "Electronics",
      "subcategory": "Wearables",
      "sku": "CN-0003",
      "reviewCount": 1294,
      "salesCount": 3670,
      "specifications": {
        "Display": "1.4-inch AMOLED",
        "Tracking": "Heart rate, sleep, SpO₂",
        "Battery": "Up to 7 days"
      },
      "tags": [
        "pulsefit",
        "smartwatch"
      ],
      "images": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 4,
      "name": "UrbanFlex Denim Jacket",
      "categoryId": 2,
      "price": 1874,
      "discount": 25,
      "rating": 4.3,
      "stock": 70,
      "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "description": "Classic denim jacket with a modern slim fit. Soft wash and durable stitching.",
      "featured": false,
      "trending": false,
      "createdAt": "2025-12-18",
      "mrp": 2499,
      "brand": "UrbanFlex",
      "category": "Fashion",
      "subcategory": "Outerwear",
      "sku": "CN-0004",
      "reviewCount": 218,
      "salesCount": 2140,
      "specifications": {
        "Fabric": "Cotton denim",
        "Fit": "Relaxed regular",
        "Care": "Machine wash cold"
      },
      "tags": [
        "urbanflex",
        "denim",
        "jacket"
      ],
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "colors": [
        "Indigo",
        "Washed blue"
      ],
      "images": [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 5,
      "name": "Linen Breeze Summer Shirt",
      "categoryId": 2,
      "price": 1229,
      "discount": 18,
      "rating": 4.5,
      "stock": 90,
      "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "description": "Breathable linen blend shirt designed for hot days and easy layering.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-03-02",
      "mrp": 1499,
      "brand": "Linen House",
      "category": "Fashion",
      "subcategory": "Shirts",
      "sku": "CN-0005",
      "reviewCount": 174,
      "salesCount": 1260,
      "specifications": {
        "Fabric": "Linen-cotton blend",
        "Fit": "Regular",
        "Care": "Gentle wash"
      },
      "tags": [
        "linen",
        "breeze",
        "summer",
        "shirt"
      ],
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "colors": [
        "White",
        "Sage",
        "Sky blue"
      ],
      "images": [
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 6,
      "name": "NovaStride Running Shoes",
      "categoryId": 2,
      "price": 2729,
      "discount": 22,
      "rating": 4.7,
      "stock": 60,
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "description": "Cushioned running shoes with responsive sole and breathable mesh upper.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-02-14",
      "mrp": 3499,
      "brand": "NovaStride",
      "category": "Fashion",
      "subcategory": "Footwear",
      "sku": "CN-0006",
      "reviewCount": 1086,
      "salesCount": 4890,
      "specifications": {
        "Upper": "Breathable mesh",
        "Midsole": "Responsive EVA",
        "Use": "Road running"
      },
      "tags": [
        "novastride",
        "running",
        "shoes"
      ],
      "sizes": [
        "UK 6",
        "UK 7",
        "UK 8",
        "UK 9",
        "UK 10"
      ],
      "colors": [
        "Red",
        "Black"
      ],
      "images": [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 7,
      "name": "Ceramic Pour-Over Coffee Set",
      "categoryId": 3,
      "price": 1709,
      "discount": 10,
      "rating": 4.6,
      "stock": 35,
      "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "description": "Minimal ceramic dripper and mug set for a calm morning brew ritual.",
      "featured": false,
      "trending": false,
      "createdAt": "2026-01-05",
      "mrp": 1899,
      "brand": "BrewHaus",
      "category": "Home & Living",
      "subcategory": "Coffee accessories",
      "sku": "CN-0007",
      "reviewCount": 392,
      "salesCount": 940,
      "specifications": {
        "Material": "Glazed ceramic",
        "Pieces": "Dripper and mug",
        "Capacity": "300 ml"
      },
      "tags": [
        "ceramic",
        "pour",
        "over",
        "coffee",
        "set"
      ],
      "images": [
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 8,
      "name": "CloudSoft Throw Blanket",
      "categoryId": 3,
      "price": 909,
      "discount": 30,
      "rating": 4.4,
      "stock": 80,
      "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
      "description": "Ultra-soft throw for couches and beds. Machine washable and lint-resistant.",
      "featured": true,
      "trending": false,
      "createdAt": "2025-11-22",
      "mrp": 1299,
      "brand": "CloudRest",
      "category": "Home & Living",
      "subcategory": "Bedding",
      "sku": "CN-0008",
      "reviewCount": 514,
      "salesCount": 780,
      "specifications": {
        "Fabric": "Microfibre fleece",
        "Size": "150 × 200 cm",
        "Care": "Machine washable"
      },
      "tags": [
        "cloudsoft",
        "throw",
        "blanket"
      ],
      "images": [
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 9,
      "name": "Nordic Desk Lamp",
      "categoryId": 3,
      "price": 1891,
      "discount": 14,
      "rating": 4.5,
      "stock": 40,
      "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "description": "Warm LED desk lamp with adjustable arm and matte finish.",
      "featured": false,
      "trending": false,
      "createdAt": "2026-02-20",
      "mrp": 2199,
      "brand": "Nordik",
      "category": "Home & Living",
      "subcategory": "Lighting",
      "sku": "CN-0009",
      "reviewCount": 287,
      "salesCount": 1140,
      "specifications": {
        "Light source": "Warm LED",
        "Adjustment": "Tilt and swivel arm",
        "Power": "USB powered"
      },
      "tags": [
        "nordic",
        "desk",
        "lamp"
      ],
      "images": [
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 10,
      "name": "Atomic Habits (Paperback)",
      "categoryId": 4,
      "price": 399,
      "discount": 20,
      "rating": 4.9,
      "stock": 120,
      "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      "description": "Practical guide to building better habits and breaking bad ones.",
      "featured": true,
      "trending": false,
      "createdAt": "2025-10-10",
      "mrp": 499,
      "brand": "Penguin Random House",
      "category": "Books",
      "subcategory": "Personal development",
      "sku": "CN-0010",
      "reviewCount": 4921,
      "salesCount": 2390,
      "specifications": {
        "Format": "Paperback",
        "Language": "English",
        "Pages": "320"
      },
      "tags": [
        "atomic",
        "habits",
        "paperback"
      ],
      "images": [
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 11,
      "name": "Design of Everyday Things",
      "categoryId": 4,
      "price": 594,
      "discount": 15,
      "rating": 4.7,
      "stock": 65,
      "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      "description": "A classic on human-centered design and product usability.",
      "featured": false,
      "trending": false,
      "createdAt": "2025-09-15",
      "mrp": 699,
      "brand": "The Design Press",
      "category": "Books",
      "subcategory": "Design books",
      "sku": "CN-0011",
      "reviewCount": 2476,
      "salesCount": 860,
      "specifications": {
        "Format": "Paperback",
        "Language": "English",
        "Pages": "368"
      },
      "tags": [
        "design",
        "everyday",
        "things"
      ],
      "images": [
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 12,
      "name": "Deep Work Notebook Set",
      "categoryId": 4,
      "price": 719,
      "discount": 10,
      "rating": 4.3,
      "stock": 75,
      "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
      "description": "Ruled notebooks with thick paper, perfect for planning and journaling.",
      "featured": false,
      "trending": false,
      "createdAt": "2026-01-19",
      "mrp": 799,
      "brand": "PaperTrail",
      "category": "Books",
      "subcategory": "Stationery",
      "sku": "CN-0012",
      "reviewCount": 318,
      "salesCount": 720,
      "specifications": {
        "Paper": "100 GSM",
        "Set": "Three ruled notebooks",
        "Binding": "Thread-bound"
      },
      "tags": [
        "deep",
        "work",
        "notebook",
        "set"
      ],
      "images": [
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 13,
      "name": "Glow Serum Vitamin C",
      "categoryId": 5,
      "price": 749,
      "discount": 25,
      "rating": 4.4,
      "stock": 95,
      "image": "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
      "description": "Brightening vitamin C serum for everyday glow and even tone.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-02-08",
      "mrp": 999,
      "brand": "GlowLab",
      "category": "Beauty",
      "subcategory": "Skincare",
      "sku": "CN-0013",
      "reviewCount": 876,
      "salesCount": 1960,
      "specifications": {
        "Key ingredient": "Vitamin C",
        "Skin type": "All skin types",
        "Volume": "30 ml"
      },
      "tags": [
        "glow",
        "serum",
        "vitamin"
      ],
      "images": [
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 14,
      "name": "HydraBoost Moisturizer",
      "categoryId": 5,
      "price": 696,
      "discount": 18,
      "rating": 4.5,
      "stock": 110,
      "image": "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80",
      "description": "Lightweight moisturizer with hyaluronic acid for lasting hydration.",
      "featured": false,
      "trending": false,
      "createdAt": "2026-03-01",
      "mrp": 849,
      "brand": "HydraBloom",
      "category": "Beauty",
      "subcategory": "Skincare",
      "sku": "CN-0014",
      "reviewCount": 641,
      "salesCount": 1490,
      "specifications": {
        "Key ingredient": "Hyaluronic acid",
        "Skin type": "Normal to dry",
        "Volume": "50 g"
      },
      "tags": [
        "hydraboost",
        "moisturizer"
      ],
      "images": [
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 15,
      "name": "Silk Soft Hair Care Kit",
      "categoryId": 5,
      "price": 1279,
      "discount": 20,
      "rating": 4.2,
      "stock": 48,
      "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
      "description": "Shampoo and conditioner duo for soft, frizz-controlled hair.",
      "featured": true,
      "trending": false,
      "createdAt": "2025-12-30",
      "mrp": 1599,
      "brand": "SilkTheory",
      "category": "Beauty",
      "subcategory": "Hair care",
      "sku": "CN-0015",
      "reviewCount": 229,
      "salesCount": 620,
      "specifications": {
        "Set contents": "Shampoo and conditioner",
        "Hair type": "Dry and frizz-prone",
        "Volume": "2 × 250 ml"
      },
      "tags": [
        "silk",
        "soft",
        "hair",
        "care",
        "kit"
      ],
      "images": [
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 16,
      "name": "ProGrip Yoga Mat",
      "categoryId": 6,
      "price": 1091,
      "discount": 16,
      "rating": 4.6,
      "stock": 85,
      "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
      "description": "Non-slip yoga mat with extra cushioning for home and studio sessions.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-01-25",
      "mrp": 1299,
      "brand": "ProGrip",
      "category": "Sports",
      "subcategory": "Yoga",
      "sku": "CN-0016",
      "reviewCount": 758,
      "salesCount": 2370,
      "specifications": {
        "Material": "Natural rubber blend",
        "Thickness": "6 mm",
        "Surface": "Textured non-slip"
      },
      "tags": [
        "progrip",
        "yoga",
        "mat"
      ],
      "images": [
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 17,
      "name": "Adjustable Dumbbell Pair",
      "categoryId": 6,
      "price": 4399,
      "discount": 12,
      "rating": 4.5,
      "stock": 30,
      "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      "description": "Space-saving adjustable dumbbells for full-body strength training.",
      "featured": false,
      "trending": false,
      "createdAt": "2026-02-11",
      "mrp": 4999,
      "brand": "IronVale",
      "category": "Sports",
      "subcategory": "Strength training",
      "sku": "CN-0017",
      "reviewCount": 446,
      "salesCount": 1720,
      "specifications": {
        "Weight range": "2.5–24 kg each",
        "Adjustment": "Dial selector",
        "Set": "Pair"
      },
      "tags": [
        "adjustable",
        "dumbbell",
        "pair"
      ],
      "images": [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 18,
      "name": "TrailReady Hydration Bottle",
      "categoryId": 6,
      "price": 629,
      "discount": 10,
      "rating": 4.4,
      "stock": 140,
      "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      "description": "Insulated stainless steel bottle that keeps drinks cold for 24 hours.",
      "featured": false,
      "trending": false,
      "createdAt": "2025-11-05",
      "mrp": 699,
      "brand": "TrailReady",
      "category": "Sports",
      "subcategory": "Drinkware",
      "sku": "CN-0018",
      "reviewCount": 305,
      "salesCount": 1020,
      "specifications": {
        "Material": "18/8 stainless steel",
        "Capacity": "750 ml",
        "Insulation": "Double wall"
      },
      "tags": [
        "trailready",
        "hydration",
        "bottle"
      ],
      "images": [
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 19,
      "name": "NoiseCancel Over-Ear Headphones",
      "categoryId": 1,
      "price": 5759,
      "discount": 28,
      "rating": 4.7,
      "stock": 27,
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "description": "Premium over-ear headphones with deep bass and adaptive noise cancelling.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-03-05",
      "mrp": 7999,
      "brand": "NovaSound",
      "category": "Electronics",
      "subcategory": "Wireless audio",
      "sku": "CN-0019",
      "reviewCount": 1830,
      "salesCount": 3540,
      "specifications": {
        "Connection": "Bluetooth 5.3",
        "Noise control": "Adaptive ANC",
        "Battery": "Up to 36 hours"
      },
      "tags": [
        "noisecancel",
        "over",
        "ear",
        "headphones"
      ],
      "images": [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 20,
      "name": "Minimal Leather Crossbody Bag",
      "categoryId": 2,
      "price": 2323,
      "discount": 17,
      "rating": 4.3,
      "stock": 52,
      "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "description": "Compact everyday bag in genuine vegan leather with adjustable strap.",
      "featured": false,
      "trending": false,
      "createdAt": "2026-02-26",
      "mrp": 2799,
      "brand": "UrbanFlex",
      "category": "Fashion",
      "subcategory": "Bags",
      "sku": "CN-0020",
      "reviewCount": 192,
      "salesCount": 1620,
      "specifications": {
        "Material": "Vegan leather",
        "Closure": "Zip top",
        "Strap": "Adjustable crossbody"
      },
      "tags": [
        "minimal",
        "leather",
        "crossbody",
        "bag"
      ],
      "colors": [
        "Tan",
        "Black"
      ],
      "variants": {
        "strap": [
          "Adjustable"
        ]
      },
      "images": [
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 21,
      "name": "Essential Oil Diffuser",
      "categoryId": 3,
      "price": 1263,
      "discount": 21,
      "rating": 4.4,
      "stock": 44,
      "image": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
      "description": "Ultrasonic aroma diffuser with soft ambient light and auto shut-off.",
      "featured": true,
      "trending": false,
      "createdAt": "2026-01-08",
      "mrp": 1599,
      "brand": "AromaNest",
      "category": "Home & Living",
      "subcategory": "Home fragrance",
      "sku": "CN-0021",
      "reviewCount": 264,
      "salesCount": 890,
      "specifications": {
        "Technology": "Ultrasonic mist",
        "Tank": "300 ml",
        "Safety": "Auto shut-off"
      },
      "tags": [
        "essential",
        "oil",
        "diffuser"
      ],
      "images": [
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 22,
      "name": "Beginner Strength Training Guide",
      "categoryId": 4,
      "price": 379,
      "discount": 5,
      "rating": 4.1,
      "stock": 100,
      "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
      "description": "Illustrated beginner guide for safe and effective home workouts.",
      "featured": false,
      "trending": false,
      "createdAt": "2025-08-20",
      "mrp": 399,
      "brand": "FitMind Press",
      "category": "Books",
      "subcategory": "Fitness books",
      "sku": "CN-0022",
      "reviewCount": 147,
      "salesCount": 540,
      "specifications": {
        "Format": "Illustrated paperback",
        "Language": "English",
        "Pages": "224"
      },
      "tags": [
        "beginner",
        "strength",
        "training",
        "guide"
      ],
      "images": [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      "id": 23,
      "name": "NovaCharge 65W GaN Charger",
      "brand": "VoltEdge",
      "subcategory": "Chargers",
      "category": "Electronics",
      "categoryId": 1,
      "price": 1799,
      "mrp": 2499,
      "discount": 28,
      "stock": 54,
      "rating": 4.7,
      "reviewCount": 358,
      "salesCount": 1320,
      "featured": true,
      "description": "A compact GaN wall charger powers a laptop, tablet, or phone from one USB-C port, with foldable prongs for daily carry.",
      "specifications": {
        "Output": "65 W USB-C PD",
        "Ports": "1 × USB-C",
        "Safety": "Over-current and thermal protection"
      },
      "tags": [
        "gan charger",
        "usb-c",
        "travel"
      ],
      "sku": "CN-0023",
      "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-27",
      "trending": false
    },
    {
      "id": 24,
      "name": "WaveLink Wi-Fi 6 Router",
      "brand": "NetMesh",
      "subcategory": "Networking",
      "category": "Electronics",
      "categoryId": 1,
      "price": 3799,
      "mrp": 4999,
      "discount": 24,
      "stock": 28,
      "rating": 4.5,
      "reviewCount": 614,
      "salesCount": 1860,
      "featured": false,
      "description": "Dual-band Wi-Fi 6 coverage handles video calls, streaming, and connected home devices across a medium-sized apartment.",
      "specifications": {
        "Wireless standard": "Wi-Fi 6 AX3000",
        "Bands": "2.4 GHz and 5 GHz",
        "Ports": "1 WAN + 4 LAN"
      },
      "tags": [
        "wifi 6",
        "router",
        "home network"
      ],
      "sku": "CN-0024",
      "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-07",
      "trending": false
    },
    {
      "id": 25,
      "name": "StudioBeam 2K USB Webcam",
      "brand": "ClearFrame",
      "subcategory": "Webcams",
      "category": "Electronics",
      "categoryId": 1,
      "price": 2599,
      "mrp": 3499,
      "discount": 26,
      "stock": 41,
      "rating": 4.4,
      "reviewCount": 283,
      "salesCount": 980,
      "featured": false,
      "description": "A sharp 2K webcam with autofocus and dual microphones gives work calls a cleaner picture without a complicated setup.",
      "specifications": {
        "Resolution": "2560 × 1440",
        "Focus": "Autofocus",
        "Connection": "USB-A plug and play"
      },
      "tags": [
        "webcam",
        "video calls",
        "work from home"
      ],
      "sku": "CN-0025",
      "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-14",
      "trending": false
    },
    {
      "id": 26,
      "name": "KeyCraft Mechanical Keyboard",
      "brand": "KeyCraft",
      "subcategory": "Keyboards",
      "category": "Electronics",
      "categoryId": 1,
      "price": 2199,
      "mrp": 2999,
      "discount": 27,
      "stock": 36,
      "rating": 4.6,
      "reviewCount": 472,
      "salesCount": 1640,
      "featured": false,
      "description": "Tactile hot-swappable switches, a compact layout, and adjustable feet make this keyboard comfortable for long typing sessions.",
      "specifications": {
        "Layout": "87-key tenkeyless",
        "Switches": "Hot-swappable tactile",
        "Connection": "USB-C wired"
      },
      "tags": [
        "mechanical keyboard",
        "desk setup",
        "typing"
      ],
      "sku": "CN-0026",
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-21",
      "trending": false
    },
    {
      "id": 27,
      "name": "QuietFlow 120mm Desk Fan",
      "brand": "AeroBreeze",
      "subcategory": "Computer accessories",
      "category": "Electronics",
      "categoryId": 1,
      "price": 1499,
      "mrp": 1999,
      "discount": 25,
      "stock": 63,
      "rating": 4.3,
      "reviewCount": 196,
      "salesCount": 740,
      "featured": false,
      "description": "A quiet three-speed desk fan keeps a study or work area comfortable, with a stable base and a tilt-adjustable head.",
      "specifications": {
        "Fan size": "120 mm",
        "Speeds": "3",
        "Noise": "Low-noise motor"
      },
      "tags": [
        "desk fan",
        "cooling",
        "office"
      ],
      "sku": "CN-0027",
      "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-01",
      "trending": false
    },
    {
      "id": 28,
      "name": "SnapSound Portable Bluetooth Speaker",
      "brand": "SoundNest",
      "subcategory": "Speakers",
      "category": "Electronics",
      "categoryId": 1,
      "price": 2499,
      "mrp": 3299,
      "discount": 24,
      "stock": 47,
      "rating": 4.6,
      "reviewCount": 535,
      "salesCount": 2080,
      "featured": false,
      "description": "A splash-resistant portable speaker pairs punchy stereo sound with a carry loop and enough battery for a day outdoors.",
      "specifications": {
        "Output": "20 W stereo",
        "Battery": "Up to 12 hours",
        "Rating": "IPX5 splash resistant"
      },
      "tags": [
        "bluetooth speaker",
        "portable audio",
        "outdoors"
      ],
      "sku": "CN-0028",
      "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-08",
      "trending": false
    },
    {
      "id": 29,
      "name": "Everyday Cotton Crew T-Shirt",
      "brand": "UrbanThread",
      "subcategory": "T-shirts",
      "category": "Fashion",
      "categoryId": 2,
      "price": 599,
      "mrp": 899,
      "discount": 33,
      "stock": 112,
      "rating": 4.3,
      "reviewCount": 528,
      "salesCount": 2440,
      "featured": false,
      "description": "A soft combed-cotton crew neck with a clean everyday fit, reinforced collar, and breathable feel for warm weather.",
      "specifications": {
        "Fabric": "180 GSM combed cotton",
        "Fit": "Regular",
        "Care": "Machine wash"
      },
      "tags": [
        "cotton t-shirt",
        "casual wear",
        "everyday"
      ],
      "sku": "CN-0029",
      "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-15",
      "trending": false,
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "colors": [
        "White",
        "Navy",
        "Olive"
      ]
    },
    {
      "id": 30,
      "name": "Everyday Straight-Fit Chinos",
      "brand": "Threadline",
      "subcategory": "Trousers",
      "category": "Fashion",
      "categoryId": 2,
      "price": 1299,
      "mrp": 1899,
      "discount": 32,
      "stock": 68,
      "rating": 4.5,
      "reviewCount": 317,
      "salesCount": 1370,
      "featured": true,
      "description": "Mid-rise chinos in stretch cotton twill balance a neat office-ready shape with enough give for all-day comfort.",
      "specifications": {
        "Fabric": "98% cotton, 2% elastane",
        "Fit": "Straight fit",
        "Closure": "Button and zip"
      },
      "tags": [
        "chinos",
        "workwear",
        "stretch cotton"
      ],
      "sku": "CN-0030",
      "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-22",
      "trending": false,
      "sizes": [
        "30",
        "32",
        "34",
        "36"
      ],
      "colors": [
        "Stone",
        "Navy",
        "Charcoal"
      ]
    },
    {
      "id": 31,
      "name": "Heritage Canvas Low-Top Sneakers",
      "brand": "LoomStep",
      "subcategory": "Footwear",
      "category": "Fashion",
      "categoryId": 2,
      "price": 1799,
      "mrp": 2499,
      "discount": 28,
      "stock": 52,
      "rating": 4.4,
      "reviewCount": 292,
      "salesCount": 1510,
      "featured": false,
      "description": "Durable canvas uppers and a cushioned footbed give these low-top sneakers a versatile profile for everyday city wear.",
      "specifications": {
        "Upper": "Cotton canvas",
        "Outsole": "Rubber",
        "Closure": "Lace-up"
      },
      "tags": [
        "canvas sneakers",
        "casual shoes",
        "everyday"
      ],
      "sku": "CN-0031",
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-02",
      "trending": false,
      "sizes": [
        "UK 6",
        "UK 7",
        "UK 8",
        "UK 9",
        "UK 10"
      ],
      "colors": [
        "Cream",
        "Forest green",
        "Black"
      ]
    },
    {
      "id": 32,
      "name": "Weekend Utility Backpack 22L",
      "brand": "RoamWorks",
      "subcategory": "Bags",
      "category": "Fashion",
      "categoryId": 2,
      "price": 1599,
      "mrp": 2199,
      "discount": 27,
      "stock": 44,
      "rating": 4.6,
      "reviewCount": 408,
      "salesCount": 1910,
      "featured": false,
      "description": "A 22-litre water-resistant backpack keeps a laptop, bottle, and daily essentials organized in padded and quick-access pockets.",
      "specifications": {
        "Capacity": "22 litres",
        "Laptop sleeve": "Up to 15.6 inches",
        "Material": "Water-resistant polyester"
      },
      "tags": [
        "backpack",
        "commute",
        "travel"
      ],
      "sku": "CN-0032",
      "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-09",
      "trending": false,
      "colors": [
        "Olive",
        "Black",
        "Sand"
      ]
    },
    {
      "id": 33,
      "name": "Soft Knit Button Cardigan",
      "brand": "Northloom",
      "subcategory": "Knitwear",
      "category": "Fashion",
      "categoryId": 2,
      "price": 1899,
      "mrp": 2699,
      "discount": 30,
      "stock": 33,
      "rating": 4.5,
      "reviewCount": 183,
      "salesCount": 870,
      "featured": false,
      "description": "A mid-weight cotton-blend cardigan layers easily over tees and shirts, finished with ribbed cuffs and tonal buttons.",
      "specifications": {
        "Fabric": "Cotton-acrylic blend",
        "Fit": "Relaxed",
        "Closure": "Front buttons"
      },
      "tags": [
        "cardigan",
        "layering",
        "knitwear"
      ],
      "sku": "CN-0033",
      "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-16",
      "trending": false,
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "colors": [
        "Oatmeal",
        "Sage",
        "Navy"
      ]
    },
    {
      "id": 34,
      "name": "ActiveDry Training Leggings",
      "brand": "MoveMuse",
      "subcategory": "Activewear",
      "category": "Fashion",
      "categoryId": 2,
      "price": 999,
      "mrp": 1499,
      "discount": 33,
      "stock": 76,
      "rating": 4.4,
      "reviewCount": 364,
      "salesCount": 2260,
      "featured": false,
      "description": "Stretch training leggings use moisture-wicking fabric and a high-rise waistband for gym sessions, yoga, or daily walks.",
      "specifications": {
        "Fabric": "Polyester-elastane",
        "Waist": "High rise",
        "Feature": "Moisture wicking"
      },
      "tags": [
        "leggings",
        "activewear",
        "training"
      ],
      "sku": "CN-0034",
      "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-23",
      "trending": false,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
      ],
      "colors": [
        "Black",
        "Plum",
        "Slate"
      ]
    },
    {
      "id": 35,
      "name": "Linen Blend Bedsheet Set, Queen",
      "brand": "CasaCotton",
      "subcategory": "Bedding",
      "category": "Home & Living",
      "categoryId": 3,
      "price": 1999,
      "mrp": 2799,
      "discount": 29,
      "stock": 39,
      "rating": 4.5,
      "reviewCount": 272,
      "salesCount": 1120,
      "featured": false,
      "description": "A breathable queen-size bedsheet set includes a fitted sheet and two pillow covers in a soft linen-cotton weave.",
      "specifications": {
        "Fabric": "Linen-cotton blend",
        "Size": "Queen, 60 × 78 in",
        "Set": "1 fitted sheet + 2 pillow covers"
      },
      "tags": [
        "bedsheet",
        "bedding",
        "queen size"
      ],
      "sku": "CN-0035",
      "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-03",
      "trending": false,
      "colors": [
        "Ivory",
        "Sage",
        "Dusty blue"
      ]
    },
    {
      "id": 36,
      "name": "CloudRest Memory Foam Pillow",
      "brand": "Sleepwell Home",
      "subcategory": "Bedding",
      "category": "Home & Living",
      "categoryId": 3,
      "price": 1499,
      "mrp": 1999,
      "discount": 25,
      "stock": 58,
      "rating": 4.4,
      "reviewCount": 493,
      "salesCount": 1740,
      "featured": true,
      "description": "A medium-firm contour pillow supports the neck and shoulders with slow-rebound foam and a removable washable cover.",
      "specifications": {
        "Fill": "Ventilated memory foam",
        "Cover": "Removable knit cover",
        "Firmness": "Medium firm"
      },
      "tags": [
        "memory foam pillow",
        "sleep",
        "bedroom"
      ],
      "sku": "CN-0036",
      "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-10",
      "trending": false
    },
    {
      "id": 37,
      "name": "Oakline Floating Wall Shelf",
      "brand": "HomeKind",
      "subcategory": "Storage",
      "category": "Home & Living",
      "categoryId": 3,
      "price": 899,
      "mrp": 1299,
      "discount": 31,
      "stock": 71,
      "rating": 4.2,
      "reviewCount": 161,
      "salesCount": 620,
      "featured": false,
      "description": "A compact engineered-wood shelf adds display space for books, frames, or small plants and includes concealed mounting hardware.",
      "specifications": {
        "Material": "Engineered wood",
        "Dimensions": "60 × 15 × 3 cm",
        "Load": "Up to 8 kg"
      },
      "tags": [
        "wall shelf",
        "storage",
        "home decor"
      ],
      "sku": "CN-0037",
      "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-17",
      "trending": false,
      "colors": [
        "Natural oak",
        "Walnut"
      ]
    },
    {
      "id": 38,
      "name": "Driftwood Ceramic Bud Vase Set",
      "brand": "Clay & Co",
      "subcategory": "Decor",
      "category": "Home & Living",
      "categoryId": 3,
      "price": 799,
      "mrp": 1199,
      "discount": 33,
      "stock": 46,
      "rating": 4.6,
      "reviewCount": 234,
      "salesCount": 910,
      "featured": false,
      "description": "Three hand-finished ceramic bud vases bring a calm accent to a console, dining table, or bedside shelf.",
      "specifications": {
        "Material": "Glazed stoneware",
        "Pieces": "3 vases",
        "Height": "10–18 cm"
      },
      "tags": [
        "ceramic vase",
        "home decor",
        "table styling"
      ],
      "sku": "CN-0038",
      "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-24",
      "trending": false
    },
    {
      "id": 39,
      "name": "LumiArc Adjustable Floor Lamp",
      "brand": "Nook Studio",
      "subcategory": "Lighting",
      "category": "Home & Living",
      "categoryId": 3,
      "price": 3499,
      "mrp": 4499,
      "discount": 22,
      "stock": 22,
      "rating": 4.5,
      "reviewCount": 207,
      "salesCount": 1160,
      "featured": false,
      "description": "A slim metal floor lamp with an adjustable reading arm casts focused warm light beside a sofa or reading chair.",
      "specifications": {
        "Height": "150 cm",
        "Light": "Warm white LED",
        "Switch": "Foot switch"
      },
      "tags": [
        "floor lamp",
        "reading light",
        "living room"
      ],
      "sku": "CN-0039",
      "image": "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-04",
      "trending": false,
      "colors": [
        "Matte black",
        "Brass"
      ]
    },
    {
      "id": 40,
      "name": "FreshNest HEPA Air Purifier",
      "brand": "PureAir",
      "subcategory": "Air care",
      "category": "Home & Living",
      "categoryId": 3,
      "price": 6999,
      "mrp": 8999,
      "discount": 22,
      "stock": 17,
      "rating": 4.4,
      "reviewCount": 386,
      "salesCount": 1540,
      "featured": false,
      "description": "A three-stage purifier combines a pre-filter, activated carbon, and HEPA filtration for bedrooms and compact living rooms.",
      "specifications": {
        "Filtration": "Pre-filter + carbon + HEPA",
        "Coverage": "Up to 300 sq ft",
        "Modes": "Sleep, auto, 3 speeds"
      },
      "tags": [
        "air purifier",
        "hepa",
        "bedroom"
      ],
      "sku": "CN-0040",
      "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-11",
      "trending": false
    },
    {
      "id": 41,
      "name": "The Psychology of Money",
      "brand": "Jaico Publishing",
      "subcategory": "Personal finance",
      "category": "Books",
      "categoryId": 4,
      "price": 399,
      "mrp": 599,
      "discount": 33,
      "stock": 86,
      "rating": 4.8,
      "reviewCount": 5128,
      "salesCount": 3280,
      "featured": false,
      "description": "Morgan Housel's collection of short stories explores how behavior, risk, and time shape personal financial decisions.",
      "specifications": {
        "Author": "Morgan Housel",
        "Format": "Paperback",
        "Pages": "256"
      },
      "tags": [
        "personal finance",
        "money",
        "bestseller"
      ],
      "sku": "CN-0041",
      "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-18",
      "trending": true
    },
    {
      "id": 42,
      "name": "Ikigai: The Japanese Secret to a Long and Happy Life",
      "brand": "Penguin Random House",
      "subcategory": "Wellness",
      "category": "Books",
      "categoryId": 4,
      "price": 349,
      "mrp": 499,
      "discount": 30,
      "stock": 102,
      "rating": 4.5,
      "reviewCount": 3642,
      "salesCount": 2940,
      "featured": true,
      "description": "Héctor García and Francesc Miralles introduce the Japanese idea of ikigai through stories, reflection prompts, and practical habits.",
      "specifications": {
        "Authors": "Héctor García, Francesc Miralles",
        "Format": "Paperback",
        "Pages": "208"
      },
      "tags": [
        "ikigai",
        "wellness",
        "self development"
      ],
      "sku": "CN-0042",
      "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-25",
      "trending": false
    },
    {
      "id": 43,
      "name": "The Midnight Library",
      "brand": "Canongate Books",
      "subcategory": "Fiction",
      "category": "Books",
      "categoryId": 4,
      "price": 499,
      "mrp": 699,
      "discount": 29,
      "stock": 57,
      "rating": 4.4,
      "reviewCount": 2814,
      "salesCount": 2370,
      "featured": false,
      "description": "Matt Haig's contemporary novel follows Nora Seed through a library of possible lives and the choices that define them.",
      "specifications": {
        "Author": "Matt Haig",
        "Format": "Paperback",
        "Pages": "304"
      },
      "tags": [
        "fiction",
        "novel",
        "book club"
      ],
      "sku": "CN-0043",
      "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-05",
      "trending": false
    },
    {
      "id": 44,
      "name": "The Alchemist",
      "brand": "HarperCollins India",
      "subcategory": "Fiction",
      "category": "Books",
      "categoryId": 4,
      "price": 299,
      "mrp": 399,
      "discount": 25,
      "stock": 119,
      "rating": 4.7,
      "reviewCount": 5942,
      "salesCount": 4160,
      "featured": false,
      "description": "Paulo Coelho's internationally loved fable follows a young shepherd on a journey to discover his personal legend.",
      "specifications": {
        "Author": "Paulo Coelho",
        "Format": "Paperback",
        "Pages": "208"
      },
      "tags": [
        "classic fiction",
        "inspiration",
        "bestseller"
      ],
      "sku": "CN-0044",
      "image": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-12",
      "trending": true
    },
    {
      "id": 45,
      "name": "Clean Code: A Handbook of Agile Software Craftsmanship",
      "brand": "Pearson",
      "subcategory": "Programming",
      "category": "Books",
      "categoryId": 4,
      "price": 699,
      "mrp": 999,
      "discount": 30,
      "stock": 31,
      "rating": 4.6,
      "reviewCount": 1978,
      "salesCount": 1730,
      "featured": false,
      "description": "Robert C. Martin presents practical principles and examples for writing readable, maintainable code in professional teams.",
      "specifications": {
        "Author": "Robert C. Martin",
        "Format": "Paperback",
        "Pages": "464"
      },
      "tags": [
        "programming",
        "software engineering",
        "clean code"
      ],
      "sku": "CN-0045",
      "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-19",
      "trending": false
    },
    {
      "id": 46,
      "name": "The Creative Act: A Way of Being",
      "brand": "Random House",
      "subcategory": "Creativity",
      "category": "Books",
      "categoryId": 4,
      "price": 899,
      "mrp": 1299,
      "discount": 31,
      "stock": 26,
      "rating": 4.7,
      "reviewCount": 1036,
      "salesCount": 1290,
      "featured": false,
      "description": "Rick Rubin shares observations and exercises for noticing ideas, developing creative practice, and completing meaningful work.",
      "specifications": {
        "Author": "Rick Rubin",
        "Format": "Hardcover",
        "Pages": "432"
      },
      "tags": [
        "creativity",
        "art",
        "creative practice"
      ],
      "sku": "CN-0046",
      "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-26",
      "trending": false
    },
    {
      "id": 47,
      "name": "GentleFoam Daily Face Cleanser",
      "brand": "DermaEase",
      "subcategory": "Cleansers",
      "category": "Beauty",
      "categoryId": 5,
      "price": 399,
      "mrp": 599,
      "discount": 33,
      "stock": 97,
      "rating": 4.3,
      "reviewCount": 438,
      "salesCount": 1850,
      "featured": false,
      "description": "A low-foam pH-balanced cleanser removes sunscreen and daily buildup without leaving skin feeling tight.",
      "specifications": {
        "Skin type": "Normal and sensitive",
        "Volume": "150 ml",
        "Formula": "Fragrance-free"
      },
      "tags": [
        "face cleanser",
        "gentle skincare",
        "daily use"
      ],
      "sku": "CN-0047",
      "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-06",
      "trending": false
    },
    {
      "id": 48,
      "name": "BarrierRepair Ceramide Face Cream",
      "brand": "SkinTheory",
      "subcategory": "Moisturisers",
      "category": "Beauty",
      "categoryId": 5,
      "price": 699,
      "mrp": 999,
      "discount": 30,
      "stock": 74,
      "rating": 4.6,
      "reviewCount": 583,
      "salesCount": 2720,
      "featured": false,
      "description": "Ceramides and squalane help comfort dry-feeling skin in a lightweight cream suitable for morning and evening routines.",
      "specifications": {
        "Key ingredients": "Ceramides, squalane",
        "Skin type": "Normal to dry",
        "Volume": "50 g"
      },
      "tags": [
        "ceramide cream",
        "moisturiser",
        "barrier care"
      ],
      "sku": "CN-0048",
      "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-13",
      "trending": false
    },
    {
      "id": 49,
      "name": "Rosewater Hydrating Toner",
      "brand": "Herb & Petal",
      "subcategory": "Toners",
      "category": "Beauty",
      "categoryId": 5,
      "price": 349,
      "mrp": 499,
      "discount": 30,
      "stock": 62,
      "rating": 4.2,
      "reviewCount": 197,
      "salesCount": 810,
      "featured": false,
      "description": "A refreshing alcohol-free toner with rose water and glycerin adds a light layer of hydration after cleansing.",
      "specifications": {
        "Key ingredients": "Rose water, glycerin",
        "Formula": "Alcohol-free",
        "Volume": "200 ml"
      },
      "tags": [
        "toner",
        "rose water",
        "hydration"
      ],
      "sku": "CN-0049",
      "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-20",
      "trending": false
    },
    {
      "id": 50,
      "name": "VelvetMatte Longwear Lipstick",
      "brand": "ColorStory",
      "subcategory": "Makeup",
      "category": "Beauty",
      "categoryId": 5,
      "price": 499,
      "mrp": 799,
      "discount": 38,
      "stock": 48,
      "rating": 4.5,
      "reviewCount": 721,
      "salesCount": 3140,
      "featured": true,
      "description": "A richly pigmented matte lipstick glides on evenly and wears comfortably through a full day, available in wearable classic shades.",
      "specifications": {
        "Finish": "Velvet matte",
        "Wear": "Up to 8 hours",
        "Net weight": "3.5 g"
      },
      "tags": [
        "lipstick",
        "makeup",
        "matte finish"
      ],
      "sku": "CN-0050",
      "image": "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-27",
      "trending": false,
      "colors": [
        "Rosewood",
        "Terracotta",
        "Berry"
      ],
      "variants": {
        "shade": [
          "Rosewood",
          "Terracotta",
          "Berry"
        ]
      }
    },
    {
      "id": 51,
      "name": "SunShield SPF 50 Daily Sunscreen Gel",
      "brand": "SunShield",
      "subcategory": "Sun care",
      "category": "Beauty",
      "categoryId": 5,
      "price": 599,
      "mrp": 899,
      "discount": 33,
      "stock": 88,
      "rating": 4.4,
      "reviewCount": 1168,
      "salesCount": 3970,
      "featured": false,
      "description": "A lightweight broad-spectrum sunscreen gel spreads easily under makeup and leaves a comfortable, non-greasy finish.",
      "specifications": {
        "Protection": "SPF 50 PA++++",
        "Texture": "Lightweight gel",
        "Volume": "50 g"
      },
      "tags": [
        "sunscreen",
        "spf 50",
        "daily skincare"
      ],
      "sku": "CN-0051",
      "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-07",
      "trending": true
    },
    {
      "id": 52,
      "name": "Argan Smooth Hair Serum",
      "brand": "StrandCare",
      "subcategory": "Hair care",
      "category": "Beauty",
      "categoryId": 5,
      "price": 399,
      "mrp": 599,
      "discount": 33,
      "stock": 73,
      "rating": 4.3,
      "reviewCount": 392,
      "salesCount": 1480,
      "featured": false,
      "description": "A few drops of argan-oil serum smooth flyaways and add shine to damp or dry lengths without weighing hair down.",
      "specifications": {
        "Key ingredient": "Argan oil",
        "Hair type": "All hair types",
        "Volume": "50 ml"
      },
      "tags": [
        "hair serum",
        "argan oil",
        "frizz control"
      ],
      "sku": "CN-0052",
      "image": "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-14",
      "trending": false
    },
    {
      "id": 53,
      "name": "NightBloom Eau de Parfum 50 ml",
      "brand": "AuraMaison",
      "subcategory": "Fragrance",
      "category": "Beauty",
      "categoryId": 5,
      "price": 1499,
      "mrp": 1999,
      "discount": 25,
      "stock": 21,
      "rating": 4.6,
      "reviewCount": 364,
      "salesCount": 2210,
      "featured": false,
      "description": "A warm floral fragrance layers jasmine and soft woods over a gentle amber base, designed for evening wear.",
      "specifications": {
        "Family": "Floral amber",
        "Concentration": "Eau de parfum",
        "Volume": "50 ml"
      },
      "tags": [
        "perfume",
        "fragrance",
        "floral"
      ],
      "sku": "CN-0053",
      "image": "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-21",
      "trending": false
    },
    {
      "id": 54,
      "name": "FlexCore Resistance Band Set",
      "brand": "CoreFoundry",
      "subcategory": "Fitness accessories",
      "category": "Sports",
      "categoryId": 6,
      "price": 499,
      "mrp": 799,
      "discount": 38,
      "stock": 101,
      "rating": 4.5,
      "reviewCount": 626,
      "salesCount": 3080,
      "featured": false,
      "description": "Five resistance levels and two ankle straps support warm-ups, mobility work, and strength sessions at home or on the move.",
      "specifications": {
        "Resistance": "5 levels, 5–25 lb",
        "Material": "Natural latex",
        "Included": "5 bands, 2 straps, pouch"
      },
      "tags": [
        "resistance bands",
        "home workout",
        "strength"
      ],
      "sku": "CN-0054",
      "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-01",
      "trending": true
    },
    {
      "id": 55,
      "name": "TrailGrip Training Gloves",
      "brand": "GripForge",
      "subcategory": "Training gear",
      "category": "Sports",
      "categoryId": 6,
      "price": 699,
      "mrp": 999,
      "discount": 30,
      "stock": 45,
      "rating": 4.2,
      "reviewCount": 246,
      "salesCount": 930,
      "featured": false,
      "description": "Padded palms and breathable mesh help protect hands during weight training, cycling, and outdoor fitness sessions.",
      "specifications": {
        "Palm": "Padded synthetic suede",
        "Back": "Breathable mesh",
        "Closure": "Adjustable wrist strap"
      },
      "tags": [
        "training gloves",
        "gym",
        "cycling"
      ],
      "sku": "CN-0055",
      "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-08",
      "trending": false,
      "sizes": [
        "S",
        "M",
        "L",
        "XL"
      ],
      "colors": [
        "Black",
        "Blue"
      ]
    },
    {
      "id": 56,
      "name": "SwiftStride Training Football, Size 5",
      "brand": "PlayField",
      "subcategory": "Team sports",
      "category": "Sports",
      "categoryId": 6,
      "price": 799,
      "mrp": 1199,
      "discount": 33,
      "stock": 37,
      "rating": 4.4,
      "reviewCount": 309,
      "salesCount": 1720,
      "featured": false,
      "description": "A durable machine-stitched football with a grippy textured cover is suited to school grounds and weekend practice.",
      "specifications": {
        "Size": "5",
        "Construction": "Machine stitched",
        "Bladder": "Butyl"
      },
      "tags": [
        "football",
        "team sports",
        "training"
      ],
      "sku": "CN-0056",
      "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-15",
      "trending": false
    },
    {
      "id": 57,
      "name": "ProCourt Indoor-Outdoor Basketball",
      "brand": "CourtSide",
      "subcategory": "Team sports",
      "category": "Sports",
      "categoryId": 6,
      "price": 1299,
      "mrp": 1799,
      "discount": 28,
      "stock": 33,
      "rating": 4.5,
      "reviewCount": 384,
      "salesCount": 2010,
      "featured": false,
      "description": "A deep-channel rubber basketball offers dependable grip for practice on indoor courts and outdoor play surfaces.",
      "specifications": {
        "Size": "7",
        "Cover": "Durable rubber",
        "Use": "Indoor and outdoor"
      },
      "tags": [
        "basketball",
        "court sports",
        "training"
      ],
      "sku": "CN-0057",
      "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-22",
      "trending": false
    },
    {
      "id": 58,
      "name": "SpinCycle Adjustable Skipping Rope",
      "brand": "PaceGear",
      "subcategory": "Cardio",
      "category": "Sports",
      "categoryId": 6,
      "price": 399,
      "mrp": 599,
      "discount": 33,
      "stock": 84,
      "rating": 4.4,
      "reviewCount": 557,
      "salesCount": 2870,
      "featured": false,
      "description": "Smooth ball-bearing handles and a trim-to-fit cable make this skipping rope easy to set up for warm-ups and cardio intervals.",
      "specifications": {
        "Cable": "PVC-coated steel",
        "Length": "Up to 3 m, adjustable",
        "Handles": "Foam grip"
      },
      "tags": [
        "skipping rope",
        "cardio",
        "fitness"
      ],
      "sku": "CN-0058",
      "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-02",
      "trending": false
    },
    {
      "id": 59,
      "name": "SummitLite Trekking Pole Pair",
      "brand": "SummitWorks",
      "subcategory": "Outdoor equipment",
      "category": "Sports",
      "categoryId": 6,
      "price": 1999,
      "mrp": 2799,
      "discount": 29,
      "stock": 19,
      "rating": 4.6,
      "reviewCount": 173,
      "salesCount": 1040,
      "featured": false,
      "description": "A lightweight aluminium trekking pole pair uses quick locks and carbide tips for added stability on uneven trails.",
      "specifications": {
        "Material": "7075 aluminium",
        "Adjustment": "65–135 cm",
        "Included": "Pair with baskets"
      },
      "tags": [
        "trekking poles",
        "hiking",
        "outdoor"
      ],
      "sku": "CN-0059",
      "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-09",
      "trending": false
    },
    {
      "id": 60,
      "name": "Endurance Road Cycling Helmet",
      "brand": "VeloGuard",
      "subcategory": "Cycling",
      "category": "Sports",
      "categoryId": 6,
      "price": 2499,
      "mrp": 3499,
      "discount": 29,
      "stock": 24,
      "rating": 4.7,
      "reviewCount": 428,
      "salesCount": 2590,
      "featured": true,
      "description": "An in-mould shell, adjustable fit dial, and broad ventilation channels provide a secure, comfortable helmet for road rides.",
      "specifications": {
        "Shell": "In-mould polycarbonate",
        "Fit": "Dial-adjustable",
        "Certification": "ISI marked"
      },
      "tags": [
        "cycling helmet",
        "road cycling",
        "safety"
      ],
      "sku": "CN-0060",
      "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-16",
      "trending": false,
      "sizes": [
        "M",
        "L"
      ],
      "colors": [
        "Matte black",
        "White",
        "Teal"
      ]
    },
    {
      "id": 61,
      "name": "Classic Tomato Ketchup 500 g",
      "brand": "HarvestTable",
      "subcategory": "Condiments",
      "category": "Grocery",
      "categoryId": 7,
      "price": 129,
      "mrp": 179,
      "discount": 28,
      "stock": 138,
      "rating": 4.4,
      "reviewCount": 682,
      "salesCount": 2950,
      "featured": false,
      "description": "A thick tomato ketchup balances ripe tomato flavour with gentle sweetness for sandwiches, snacks, and family meals.",
      "specifications": {
        "Net weight": "500 g",
        "Storage": "Refrigerate after opening",
        "Diet": "Vegetarian"
      },
      "tags": [
        "ketchup",
        "condiments",
        "pantry"
      ],
      "sku": "CN-0061",
      "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-23",
      "trending": true
    },
    {
      "id": 62,
      "name": "Cold-Pressed Groundnut Oil 1 L",
      "brand": "EarthMill",
      "subcategory": "Cooking oils",
      "category": "Grocery",
      "categoryId": 7,
      "price": 249,
      "mrp": 329,
      "discount": 24,
      "stock": 73,
      "rating": 4.6,
      "reviewCount": 516,
      "salesCount": 1880,
      "featured": false,
      "description": "Single-origin groundnuts are cold pressed in small batches to retain their nutty aroma for everyday sautéing and seasoning.",
      "specifications": {
        "Net volume": "1 L",
        "Process": "Cold pressed",
        "Ingredients": "100% groundnut oil"
      },
      "tags": [
        "groundnut oil",
        "cold pressed",
        "cooking"
      ],
      "sku": "CN-0062",
      "image": "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-03",
      "trending": false
    },
    {
      "id": 63,
      "name": "Wholegrain Rolled Oats 1 kg",
      "brand": "GrainHouse",
      "subcategory": "Breakfast",
      "category": "Grocery",
      "categoryId": 7,
      "price": 299,
      "mrp": 399,
      "discount": 25,
      "stock": 92,
      "rating": 4.5,
      "reviewCount": 843,
      "salesCount": 3340,
      "featured": false,
      "description": "Wholegrain rolled oats cook into a hearty breakfast and also work well in granola, baking, or overnight oats.",
      "specifications": {
        "Net weight": "1 kg",
        "Ingredients": "100% rolled oats",
        "Diet": "Vegan"
      },
      "tags": [
        "rolled oats",
        "breakfast",
        "wholegrain"
      ],
      "sku": "CN-0063",
      "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-10",
      "trending": true
    },
    {
      "id": 64,
      "name": "Dark Roast Filter Coffee 250 g",
      "brand": "BeanRoute",
      "subcategory": "Coffee",
      "category": "Grocery",
      "categoryId": 7,
      "price": 349,
      "mrp": 499,
      "discount": 30,
      "stock": 49,
      "rating": 4.7,
      "reviewCount": 1264,
      "salesCount": 4210,
      "featured": false,
      "description": "A dark-roast Arabica and Robusta blend brews a full-bodied South Indian filter coffee with a cocoa-like finish.",
      "specifications": {
        "Net weight": "250 g",
        "Roast": "Dark",
        "Grind": "Filter ground"
      },
      "tags": [
        "filter coffee",
        "dark roast",
        "coffee"
      ],
      "sku": "CN-0064",
      "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-17",
      "trending": true
    },
    {
      "id": 65,
      "name": "Raw Forest Honey 500 g",
      "brand": "GoldenHive",
      "subcategory": "Natural sweeteners",
      "category": "Grocery",
      "categoryId": 7,
      "price": 399,
      "mrp": 599,
      "discount": 33,
      "stock": 35,
      "rating": 4.5,
      "reviewCount": 376,
      "salesCount": 1630,
      "featured": false,
      "description": "Unblended forest honey has a rich floral aroma and works as a topping for toast, yogurt, and warm drinks.",
      "specifications": {
        "Net weight": "500 g",
        "Source": "Forest floral blend",
        "Processing": "Unblended"
      },
      "tags": [
        "honey",
        "natural sweetener",
        "pantry"
      ],
      "sku": "CN-0065",
      "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-24",
      "trending": false
    },
    {
      "id": 66,
      "name": "BuildMaster STEM Robot Kit",
      "brand": "TinkerBox",
      "subcategory": "STEM kits",
      "category": "Toys",
      "categoryId": 8,
      "price": 1799,
      "mrp": 2499,
      "discount": 28,
      "stock": 28,
      "rating": 4.7,
      "reviewCount": 519,
      "salesCount": 2460,
      "featured": false,
      "description": "A beginner-friendly build kit combines snap-fit parts and a programmable controller for hands-on robotics projects.",
      "specifications": {
        "Age": "8 years and up",
        "Pieces": "142",
        "Power": "3 × AA batteries, not included"
      },
      "tags": [
        "stem robot",
        "building kit",
        "learning"
      ],
      "sku": "CN-0066",
      "image": "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-04",
      "trending": false
    },
    {
      "id": 67,
      "name": "Mini Makers Magnetic Tiles, 60 Pieces",
      "brand": "BrightBlocks",
      "subcategory": "Building toys",
      "category": "Toys",
      "categoryId": 8,
      "price": 1299,
      "mrp": 1799,
      "discount": 28,
      "stock": 42,
      "rating": 4.8,
      "reviewCount": 637,
      "salesCount": 3120,
      "featured": false,
      "description": "Translucent magnetic tiles encourage children to explore colour, balance, and 3D construction through open-ended play.",
      "specifications": {
        "Pieces": "60",
        "Age": "3 years and up",
        "Material": "ABS plastic, rounded edges"
      },
      "tags": [
        "magnetic tiles",
        "building toys",
        "creative play"
      ],
      "sku": "CN-0067",
      "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-11",
      "trending": true
    },
    {
      "id": 68,
      "name": "Plush Storybook Elephant",
      "brand": "SnuggleTales",
      "subcategory": "Soft toys",
      "category": "Toys",
      "categoryId": 8,
      "price": 699,
      "mrp": 999,
      "discount": 30,
      "stock": 56,
      "rating": 4.6,
      "reviewCount": 284,
      "salesCount": 1370,
      "featured": false,
      "description": "A huggable plush elephant with embroidered features and soft recycled filling makes a gentle companion for story time.",
      "specifications": {
        "Height": "28 cm",
        "Shell": "Short-pile plush",
        "Care": "Surface clean"
      },
      "tags": [
        "plush toy",
        "elephant",
        "gift"
      ],
      "sku": "CN-0068",
      "image": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-18",
      "trending": false
    },
    {
      "id": 69,
      "name": "Junior Explorer Microscope Set",
      "brand": "CuriousLab",
      "subcategory": "Science toys",
      "category": "Toys",
      "categoryId": 8,
      "price": 1499,
      "mrp": 1999,
      "discount": 25,
      "stock": 25,
      "rating": 4.4,
      "reviewCount": 218,
      "salesCount": 1180,
      "featured": false,
      "description": "A sturdy beginner microscope with prepared slides and simple tools introduces young learners to everyday science.",
      "specifications": {
        "Magnification": "100×, 400×, 900×",
        "Age": "8 years and up",
        "Included": "Microscope, slides, tweezers"
      },
      "tags": [
        "microscope",
        "science kit",
        "learning"
      ],
      "sku": "CN-0069",
      "image": "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-25",
      "trending": false
    },
    {
      "id": 70,
      "name": "Wooden Rainbow Stacker",
      "brand": "LittleOak",
      "subcategory": "Early learning",
      "category": "Toys",
      "categoryId": 8,
      "price": 599,
      "mrp": 899,
      "discount": 33,
      "stock": 47,
      "rating": 4.7,
      "reviewCount": 342,
      "salesCount": 2050,
      "featured": false,
      "description": "Smoothly sanded wooden arches support stacking, colour sorting, imaginative play, and early fine-motor practice.",
      "specifications": {
        "Pieces": "7 arches",
        "Material": "FSC-certified wood",
        "Finish": "Water-based colours"
      },
      "tags": [
        "wooden toy",
        "stacker",
        "early learning"
      ],
      "sku": "CN-0070",
      "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-05",
      "trending": false
    },
    {
      "id": 71,
      "name": "CartNova X5 Smartphone, 8 GB/128 GB",
      "brand": "CartNova Mobile",
      "subcategory": "5G smartphones",
      "category": "Mobiles",
      "categoryId": 9,
      "price": 18999,
      "mrp": 24999,
      "discount": 24,
      "stock": 32,
      "rating": 4.6,
      "reviewCount": 819,
      "salesCount": 3890,
      "featured": false,
      "description": "The CartNova X5 pairs a vivid 120 Hz display with a capable 5G chipset, all-day battery, and a versatile triple-camera system.",
      "specifications": {
        "Display": "6.6-inch FHD+ 120 Hz",
        "Memory": "8 GB RAM, 128 GB storage",
        "Camera": "50 MP main + ultrawide + macro"
      },
      "tags": [
        "smartphone",
        "5g",
        "android"
      ],
      "sku": "CN-0071",
      "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-12",
      "trending": true,
      "colors": [
        "Midnight blue",
        "Graphite",
        "Mint"
      ],
      "variants": {
        "memory": [
          "8 GB / 128 GB"
        ]
      }
    },
    {
      "id": 72,
      "name": "CartNova X5 Pro Smartphone, 12 GB/256 GB",
      "brand": "CartNova Mobile",
      "subcategory": "5G smartphones",
      "category": "Mobiles",
      "categoryId": 9,
      "price": 27999,
      "mrp": 34999,
      "discount": 20,
      "stock": 21,
      "rating": 4.7,
      "reviewCount": 476,
      "salesCount": 2640,
      "featured": true,
      "description": "The X5 Pro adds a brighter AMOLED panel, optical image stabilisation, and faster charging for demanding daily use.",
      "specifications": {
        "Display": "6.7-inch AMOLED 120 Hz",
        "Memory": "12 GB RAM, 256 GB storage",
        "Camera": "50 MP OIS main camera"
      },
      "tags": [
        "smartphone",
        "5g",
        "amoled"
      ],
      "sku": "CN-0072",
      "image": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-19",
      "trending": false,
      "colors": [
        "Titanium grey",
        "Aurora violet"
      ],
      "variants": {
        "memory": [
          "12 GB / 256 GB"
        ]
      }
    },
    {
      "id": 73,
      "name": "PixelWave 5G Smartphone, 8 GB/256 GB",
      "brand": "Aster Mobile",
      "subcategory": "5G smartphones",
      "category": "Mobiles",
      "categoryId": 9,
      "price": 22999,
      "mrp": 29999,
      "discount": 23,
      "stock": 18,
      "rating": 4.5,
      "reviewCount": 391,
      "salesCount": 2110,
      "featured": false,
      "description": "A clean software experience, reliable 5G reception, and a high-capacity battery make PixelWave a practical everyday upgrade.",
      "specifications": {
        "Display": "6.5-inch FHD+ 120 Hz",
        "Memory": "8 GB RAM, 256 GB storage",
        "Battery": "5000 mAh, 45 W charging"
      },
      "tags": [
        "smartphone",
        "5g",
        "long battery"
      ],
      "sku": "CN-0073",
      "image": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-26",
      "trending": false,
      "colors": [
        "Ocean blue",
        "Carbon black"
      ],
      "variants": {
        "memory": [
          "8 GB / 256 GB"
        ]
      }
    },
    {
      "id": 74,
      "name": "NovaLite 5G Smartphone, 6 GB/128 GB",
      "brand": "NovaCell",
      "subcategory": "5G smartphones",
      "category": "Mobiles",
      "categoryId": 9,
      "price": 13999,
      "mrp": 17999,
      "discount": 22,
      "stock": 44,
      "rating": 4.3,
      "reviewCount": 653,
      "salesCount": 3570,
      "featured": false,
      "description": "NovaLite brings a smooth display, dependable battery life, and essential 5G bands to an accessible smartphone.",
      "specifications": {
        "Display": "6.6-inch FHD+ 90 Hz",
        "Memory": "6 GB RAM, 128 GB storage",
        "Battery": "5000 mAh"
      },
      "tags": [
        "budget smartphone",
        "5g",
        "android"
      ],
      "sku": "CN-0074",
      "image": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-06",
      "trending": true,
      "colors": [
        "Lavender",
        "Forest green",
        "Black"
      ],
      "variants": {
        "memory": [
          "6 GB / 128 GB"
        ]
      }
    },
    {
      "id": 75,
      "name": "TravelCharge 10000 mAh Power Bank",
      "brand": "VoltEdge",
      "subcategory": "Mobile accessories",
      "category": "Mobiles",
      "categoryId": 9,
      "price": 1299,
      "mrp": 1799,
      "discount": 28,
      "stock": 67,
      "rating": 4.5,
      "reviewCount": 948,
      "salesCount": 4390,
      "featured": false,
      "description": "A slim 10,000 mAh power bank with USB-C input and output keeps a phone topped up during commutes and weekend travel.",
      "specifications": {
        "Capacity": "10,000 mAh",
        "Output": "20 W USB-C PD",
        "Ports": "USB-C + USB-A"
      },
      "tags": [
        "power bank",
        "mobile accessories",
        "travel"
      ],
      "sku": "CN-0075",
      "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-13",
      "trending": true
    },
    {
      "id": 76,
      "name": "Ceramic Non-Stick Cookware Set, 5 Pieces",
      "brand": "Culina",
      "subcategory": "Cookware",
      "category": "Kitchen",
      "categoryId": 10,
      "price": 2499,
      "mrp": 3499,
      "discount": 29,
      "stock": 29,
      "rating": 4.6,
      "reviewCount": 472,
      "salesCount": 2410,
      "featured": true,
      "description": "A ceramic-coated cookware set includes two fry pans, a saucepan, a tempered-glass lid, and utensils for everyday home cooking.",
      "specifications": {
        "Pieces": "5",
        "Coating": "PFAS-free ceramic non-stick",
        "Compatibility": "Gas and electric"
      },
      "tags": [
        "cookware set",
        "ceramic non-stick",
        "kitchen"
      ],
      "sku": "CN-0076",
      "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-20",
      "trending": false,
      "colors": [
        "Sage",
        "Cream"
      ]
    },
    {
      "id": 77,
      "name": "PrecisionPour Electric Kettle, 1.5 L",
      "brand": "BrewCraft",
      "subcategory": "Small appliances",
      "category": "Kitchen",
      "categoryId": 10,
      "price": 999,
      "mrp": 1499,
      "discount": 33,
      "stock": 51,
      "rating": 4.4,
      "reviewCount": 783,
      "salesCount": 3220,
      "featured": false,
      "description": "A 1.5-litre stainless steel kettle boils water quickly, with auto shut-off and a comfortable pour spout for tea and coffee.",
      "specifications": {
        "Capacity": "1.5 L",
        "Body": "304 stainless steel",
        "Safety": "Auto shut-off and boil-dry protection"
      },
      "tags": [
        "electric kettle",
        "tea",
        "small appliance"
      ],
      "sku": "CN-0077",
      "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-10-27",
      "trending": true
    },
    {
      "id": 78,
      "name": "Cast-Iron Enamel Casserole, 3.5 L",
      "brand": "Ironwood Kitchen",
      "subcategory": "Cookware",
      "category": "Kitchen",
      "categoryId": 10,
      "price": 2299,
      "mrp": 2999,
      "discount": 23,
      "stock": 16,
      "rating": 4.7,
      "reviewCount": 284,
      "salesCount": 1420,
      "featured": false,
      "description": "A heavy cast-iron casserole retains heat for slow-cooked curries, soups, and one-pot meals, with a durable enamel interior.",
      "specifications": {
        "Capacity": "3.5 L",
        "Material": "Enameled cast iron",
        "Use": "Gas, electric, oven safe"
      },
      "tags": [
        "casserole",
        "cast iron",
        "slow cooking"
      ],
      "sku": "CN-0078",
      "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-09-07",
      "trending": false,
      "colors": [
        "Deep red",
        "Midnight blue"
      ]
    },
    {
      "id": 79,
      "name": "Bamboo Prep and Serve Board Set",
      "brand": "GreenTable",
      "subcategory": "Kitchen tools",
      "category": "Kitchen",
      "categoryId": 10,
      "price": 699,
      "mrp": 999,
      "discount": 30,
      "stock": 82,
      "rating": 4.3,
      "reviewCount": 375,
      "salesCount": 1730,
      "featured": false,
      "description": "Three lightweight bamboo boards are sized for quick prep, serving snacks, and keeping raw and ready-to-eat ingredients separate.",
      "specifications": {
        "Pieces": "3 boards",
        "Material": "Natural bamboo",
        "Care": "Hand wash and dry promptly"
      },
      "tags": [
        "cutting boards",
        "bamboo",
        "food prep"
      ],
      "sku": "CN-0079",
      "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-08-14",
      "trending": false
    },
    {
      "id": 80,
      "name": "AirCrisp Compact Air Fryer, 4 L",
      "brand": "Culina",
      "subcategory": "Small appliances",
      "category": "Kitchen",
      "categoryId": 10,
      "price": 4999,
      "mrp": 6999,
      "discount": 29,
      "stock": 14,
      "rating": 4.5,
      "reviewCount": 627,
      "salesCount": 2910,
      "featured": false,
      "description": "A 4-litre air fryer uses rapid hot-air circulation for crisp snacks and weeknight sides, with a removable non-stick basket.",
      "specifications": {
        "Capacity": "4 L",
        "Power": "1400 W",
        "Controls": "Digital timer and temperature"
      },
      "tags": [
        "air fryer",
        "small appliance",
        "quick meals"
      ],
      "sku": "CN-0080",
      "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "images": [
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
      ],
      "createdAt": "2026-07-21",
      "trending": false
    }
  ],
  "reviews": [
    {
      "id": 1,
      "productId": 1,
      "user": "Ananya R.",
      "rating": 5,
      "comment": "Crystal clear sound and great battery. Worth every rupee.",
      "createdAt": "2026-02-12"
    },
    {
      "id": 2,
      "productId": 1,
      "user": "Rahul M.",
      "rating": 4,
      "comment": "Comfortable fit. ANC is solid for commuting.",
      "createdAt": "2026-02-20"
    },
    {
      "id": 3,
      "productId": 6,
      "user": "Priya S.",
      "rating": 5,
      "comment": "Super light and cushiony. Perfect for daily runs.",
      "createdAt": "2026-03-01"
    },
    {
      "id": 4,
      "productId": 10,
      "user": "Dev K.",
      "rating": 5,
      "comment": "Practical and motivating. Already seeing results.",
      "createdAt": "2026-01-18"
    },
    {
      "id": 5,
      "productId": 19,
      "user": "Meera T.",
      "rating": 5,
      "comment": "Noise cancelling is excellent. Feels premium.",
      "createdAt": "2026-03-08"
    }
  ],
  "testimonials": [
    {
      "name": "Sneha P.",
      "text": "CartNova made my weekend shopping effortless. Fast delivery and clean UI.",
      "rating": 5
    },
    {
      "name": "Arjun V.",
      "text": "Great prices and trustworthy checkout. My go-to student store.",
      "rating": 5
    },
    {
      "name": "Ishita N.",
      "text": "Love the product filters and how easy it is to track orders.",
      "rating": 4
    },
    {
      "name": "Kabir L.",
      "text": "Premium feel without the premium drama. Highly recommend.",
      "rating": 5
    }
  ]
};

function getCategoryById(id) {
  return CartNovaData.categories.find((c) => c.id === Number(id));
}

function getProductById(id) {
  return CartNovaData.products.find((p) => p.id === Number(id));
}

function getFinalPrice(product) {
  // New catalog entries store the selling price directly; retain the old formula for legacy admin entries.
  return product.mrp != null ? product.price : Math.round(product.price * (1 - product.discount / 100));
}

function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}
