/**
 * Cart & wishlist helpers (Phase 1 localStorage).
 * Persisted per logged-in user; guest cart uses a shared guest key.
 */
const Cart = {
  getCartKey() {
    const user = Auth.getCurrentUser();
    return user ? `cartnova_cart_${user.id}` : "cartnova_cart_guest";
  },

  getWishlistKey() {
    const user = Auth.getCurrentUser();
    return user ? `cartnova_wishlist_${user.id}` : "cartnova_wishlist_guest";
  },

  getItems() {
    return JSON.parse(localStorage.getItem(this.getCartKey()) || "[]");
  },

  saveItems(items) {
    localStorage.setItem(this.getCartKey(), JSON.stringify(items));
    UI.updateCartBadge();
  },

  getCount() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  },

  addItem(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) throw new Error("Product not found.");
    if (product.stock < 1) throw new Error("Product is out of stock.");

    const items = this.getItems();
    const existing = items.find((i) => i.productId === Number(productId));
    const nextQty = (existing ? existing.quantity : 0) + quantity;

    if (nextQty > product.stock) {
      throw new Error(`Only ${product.stock} units available.`);
    }

    if (existing) existing.quantity = nextQty;
    else items.push({ productId: Number(productId), quantity });

    this.saveItems(items);
    return items;
  },

  updateQuantity(productId, quantity) {
    const product = getProductById(productId);
    if (!product) throw new Error("Product not found.");

    let items = this.getItems();
    if (quantity <= 0) {
      items = items.filter((i) => i.productId !== Number(productId));
    } else {
      if (quantity > product.stock) throw new Error(`Only ${product.stock} units available.`);
      const item = items.find((i) => i.productId === Number(productId));
      if (!item) throw new Error("Item not in cart.");
      item.quantity = quantity;
    }
    this.saveItems(items);
    return items;
  },

  removeItem(productId) {
    const items = this.getItems().filter((i) => i.productId !== Number(productId));
    this.saveItems(items);
    return items;
  },

  clear() {
    this.saveItems([]);
  },

  getDetailedItems() {
    return this.getItems()
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        const unitPrice = getFinalPrice(product);
        return {
          ...item,
          product,
          unitPrice,
          lineTotal: unitPrice * item.quantity
        };
      })
      .filter(Boolean);
  },

  getTotals() {
    const detailed = this.getDetailedItems();
    const subtotal = detailed.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
    const discountedSubtotal = detailed.reduce((sum, i) => sum + i.lineTotal, 0);
    const discount = subtotal - discountedSubtotal;
    const deliveryFee = discountedSubtotal === 0 ? 0 : discountedSubtotal >= 999 ? 0 : 49;
    const total = discountedSubtotal + deliveryFee;
    return { subtotal, discount, deliveryFee, total, itemCount: this.getCount() };
  },

  /* Wishlist */
  getWishlist() {
    return JSON.parse(localStorage.getItem(this.getWishlistKey()) || "[]").map(Number);
  },

  saveWishlist(ids) {
    localStorage.setItem(this.getWishlistKey(), JSON.stringify(ids));
  },

  isInWishlist(productId) {
    return this.getWishlist().includes(Number(productId));
  },

  toggleWishlist(productId) {
    const id = Number(productId);
    let list = this.getWishlist();
    const exists = list.includes(id);
    list = exists ? list.filter((x) => x !== id) : [...list, id];
    this.saveWishlist(list);
    return !exists;
  },

  removeFromWishlist(productId) {
    this.saveWishlist(this.getWishlist().filter((id) => id !== Number(productId)));
  },

  moveWishlistToCart(productId) {
    this.addItem(productId, 1);
    this.removeFromWishlist(productId);
  }
};
