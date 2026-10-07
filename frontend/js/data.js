/**
 * CartNova Phase 1 sample data.
 * Temporary frontend data until Spring Boot APIs are connected.
 */
const CartNovaData = {
  categories: [
    { id: 1, name: "Electronics", description: "Gadgets & devices", icon: "💻" },
    { id: 2, name: "Fashion", description: "Style for everyone", icon: "👗" },
    { id: 3, name: "Home & Living", description: "Comfort essentials", icon: "🏠" },
    { id: 4, name: "Books", description: "Learn & unwind", icon: "📚" },
    { id: 5, name: "Beauty", description: "Self-care picks", icon: "✨" },
    { id: 6, name: "Sports", description: "Move & play", icon: "🏃" }
  ],

  products: [
    {
      id: 1,
      name: "NovaBuds Pro Wireless Earbuds",
      categoryId: 1,
      price: 4999,
      discount: 20,
      rating: 4.6,
      stock: 42,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      description: "Immersive sound, active noise cancellation, and 28-hour battery life in a compact charging case.",
      featured: true,
      trending: true,
      createdAt: "2026-01-12"
    },
    {
      id: 2,
      name: "AeroBook 14 Ultrabook",
      categoryId: 1,
      price: 64999,
      discount: 12,
      rating: 4.8,
      stock: 18,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      description: "Lightweight productivity laptop with vivid display, fast SSD, and all-day battery.",
      featured: true,
      trending: false,
      createdAt: "2026-02-01"
    },
    {
      id: 3,
      name: "PulseFit Smartwatch X2",
      categoryId: 1,
      price: 8999,
      discount: 15,
      rating: 4.4,
      stock: 55,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      description: "Track workouts, heart rate, sleep, and notifications with a bright AMOLED screen.",
      featured: true,
      trending: true,
      createdAt: "2026-01-28"
    },
    {
      id: 4,
      name: "UrbanFlex Denim Jacket",
      categoryId: 2,
      price: 2499,
      discount: 25,
      rating: 4.3,
      stock: 70,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      description: "Classic denim jacket with a modern slim fit. Soft wash and durable stitching.",
      featured: false,
      trending: true,
      createdAt: "2025-12-18"
    },
    {
      id: 5,
      name: "Linen Breeze Summer Shirt",
      categoryId: 2,
      price: 1499,
      discount: 18,
      rating: 4.5,
      stock: 90,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      description: "Breathable linen blend shirt designed for hot days and easy layering.",
      featured: true,
      trending: false,
      createdAt: "2026-03-02"
    },
    {
      id: 6,
      name: "NovaStride Running Shoes",
      categoryId: 2,
      price: 3499,
      discount: 22,
      rating: 4.7,
      stock: 60,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      description: "Cushioned running shoes with responsive sole and breathable mesh upper.",
      featured: true,
      trending: true,
      createdAt: "2026-02-14"
    },
    {
      id: 7,
      name: "Ceramic Pour-Over Coffee Set",
      categoryId: 3,
      price: 1899,
      discount: 10,
      rating: 4.6,
      stock: 35,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      description: "Minimal ceramic dripper and mug set for a calm morning brew ritual.",
      featured: false,
      trending: true,
      createdAt: "2026-01-05"
    },
    {
      id: 8,
      name: "CloudSoft Throw Blanket",
      categoryId: 3,
      price: 1299,
      discount: 30,
      rating: 4.4,
      stock: 80,
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-soft throw for couches and beds. Machine washable and lint-resistant.",
      featured: true,
      trending: false,
      createdAt: "2025-11-22"
    },
    {
      id: 9,
      name: "Nordic Desk Lamp",
      categoryId: 3,
      price: 2199,
      discount: 14,
      rating: 4.5,
      stock: 40,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      description: "Warm LED desk lamp with adjustable arm and matte finish.",
      featured: false,
      trending: true,
      createdAt: "2026-02-20"
    },
    {
      id: 10,
      name: "Atomic Habits (Paperback)",
      categoryId: 4,
      price: 499,
      discount: 20,
      rating: 4.9,
      stock: 120,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
      description: "Practical guide to building better habits and breaking bad ones.",
      featured: true,
      trending: true,
      createdAt: "2025-10-10"
    },
    {
      id: 11,
      name: "Design of Everyday Things",
      categoryId: 4,
      price: 699,
      discount: 15,
      rating: 4.7,
      stock: 65,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      description: "A classic on human-centered design and product usability.",
      featured: false,
      trending: false,
      createdAt: "2025-09-15"
    },
    {
      id: 12,
      name: "Deep Work Notebook Set",
      categoryId: 4,
      price: 799,
      discount: 10,
      rating: 4.3,
      stock: 75,
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
      description: "Ruled notebooks with thick paper, perfect for planning and journaling.",
      featured: false,
      trending: true,
      createdAt: "2026-01-19"
    },
    {
      id: 13,
      name: "Glow Serum Vitamin C",
      categoryId: 5,
      price: 999,
      discount: 25,
      rating: 4.4,
      stock: 95,
      image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3f6a?auto=format&fit=crop&w=800&q=80",
      description: "Brightening vitamin C serum for everyday glow and even tone.",
      featured: true,
      trending: false,
      createdAt: "2026-02-08"
    },
    {
      id: 14,
      name: "HydraBoost Moisturizer",
      categoryId: 5,
      price: 849,
      discount: 18,
      rating: 4.5,
      stock: 110,
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d451?auto=format&fit=crop&w=800&q=80",
      description: "Lightweight moisturizer with hyaluronic acid for lasting hydration.",
      featured: false,
      trending: true,
      createdAt: "2026-03-01"
    },
    {
      id: 15,
      name: "Silk Soft Hair Care Kit",
      categoryId: 5,
      price: 1599,
      discount: 20,
      rating: 4.2,
      stock: 48,
      image: "https://images.unsplash.com/photo-1522335789203-aabd6323c7b4?auto=format&fit=crop&w=800&q=80",
      description: "Shampoo and conditioner duo for soft, frizz-controlled hair.",
      featured: true,
      trending: false,
      createdAt: "2025-12-30"
    },
    {
      id: 16,
      name: "ProGrip Yoga Mat",
      categoryId: 6,
      price: 1299,
      discount: 16,
      rating: 4.6,
      stock: 85,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
      description: "Non-slip yoga mat with extra cushioning for home and studio sessions.",
      featured: true,
      trending: true,
      createdAt: "2026-01-25"
    },
    {
      id: 17,
      name: "Adjustable Dumbbell Pair",
      categoryId: 6,
      price: 4999,
      discount: 12,
      rating: 4.5,
      stock: 30,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      description: "Space-saving adjustable dumbbells for full-body strength training.",
      featured: false,
      trending: true,
      createdAt: "2026-02-11"
    },
    {
      id: 18,
      name: "TrailReady Hydration Bottle",
      categoryId: 6,
      price: 699,
      discount: 10,
      rating: 4.4,
      stock: 140,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      description: "Insulated stainless steel bottle that keeps drinks cold for 24 hours.",
      featured: false,
      trending: false,
      createdAt: "2025-11-05"
    },
    {
      id: 19,
      name: "NoiseCancel Over-Ear Headphones",
      categoryId: 1,
      price: 7999,
      discount: 28,
      rating: 4.7,
      stock: 27,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      description: "Premium over-ear headphones with deep bass and adaptive noise cancelling.",
      featured: true,
      trending: true,
      createdAt: "2026-03-05"
    },
    {
      id: 20,
      name: "Minimal Leather Crossbody Bag",
      categoryId: 2,
      price: 2799,
      discount: 17,
      rating: 4.3,
      stock: 52,
      image: "https://images.unsplash.com/photo-1548036328-c165bc401e83?auto=format&fit=crop&w=800&q=80",
      description: "Compact everyday bag in genuine vegan leather with adjustable strap.",
      featured: false,
      trending: true,
      createdAt: "2026-02-26"
    },
    {
      id: 21,
      name: "Essential Oil Diffuser",
      categoryId: 3,
      price: 1599,
      discount: 21,
      rating: 4.4,
      stock: 44,
      image: "https://images.unsplash.com/photo-1602928321679-558a9292150b?auto=format&fit=crop&w=800&q=80",
      description: "Ultrasonic aroma diffuser with soft ambient light and auto shut-off.",
      featured: true,
      trending: false,
      createdAt: "2026-01-08"
    },
    {
      id: 22,
      name: "Beginner Strength Training Guide",
      categoryId: 4,
      price: 399,
      discount: 5,
      rating: 4.1,
      stock: 100,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
      description: "Illustrated beginner guide for safe and effective home workouts.",
      featured: false,
      trending: false,
      createdAt: "2025-08-20"
    }
  ],

  reviews: [
    { id: 1, productId: 1, user: "Ananya R.", rating: 5, comment: "Crystal clear sound and great battery. Worth every rupee.", createdAt: "2026-02-12" },
    { id: 2, productId: 1, user: "Rahul M.", rating: 4, comment: "Comfortable fit. ANC is solid for commuting.", createdAt: "2026-02-20" },
    { id: 3, productId: 6, user: "Priya S.", rating: 5, comment: "Super light and cushiony. Perfect for daily runs.", createdAt: "2026-03-01" },
    { id: 4, productId: 10, user: "Dev K.", rating: 5, comment: "Practical and motivating. Already seeing results.", createdAt: "2026-01-18" },
    { id: 5, productId: 19, user: "Meera T.", rating: 5, comment: "Noise cancelling is excellent. Feels premium.", createdAt: "2026-03-08" }
  ],

  testimonials: [
    { name: "Sneha P.", text: "CartNova made my weekend shopping effortless. Fast delivery and clean UI.", rating: 5 },
    { name: "Arjun V.", text: "Great prices and trustworthy checkout. My go-to student store.", rating: 5 },
    { name: "Ishita N.", text: "Love the product filters and how easy it is to track orders.", rating: 4 },
    { name: "Kabir L.", text: "Premium feel without the premium drama. Highly recommend.", rating: 5 }
  ]
};

function getCategoryById(id) {
  return CartNovaData.categories.find((c) => c.id === Number(id));
}

function getProductById(id) {
  return CartNovaData.products.find((p) => p.id === Number(id));
}

function getFinalPrice(product) {
  return Math.round(product.price * (1 - product.discount / 100));
}

function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}
