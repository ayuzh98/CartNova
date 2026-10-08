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

  getSavedKey() {
    const user = Auth.getCurrentUser();
    return user ? `cartnova_saved_${user.id}` : "cartnova_saved_guest";
  },

  getItems() {
    try { const items=JSON.parse(localStorage.getItem(this.getCartKey()) || "[]"); return Array.isArray(items) ? items.filter(item=>item&&Number.isFinite(Number(item.productId))&&Number(item.quantity)>0) : []; }
    catch (_) { return []; }
  },

  saveItems(items) {
    try { localStorage.setItem(this.getCartKey(), JSON.stringify(items)); }
    catch (_) { throw new Error("Cart storage is unavailable in this browser."); }
    UI.updateCartBadge();
    if (typeof Features !== "undefined") Features.updateCartDrawer();
  },

  getCount() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  },

  addItem(productId, quantity = 1, variants = {}) {
    const product = getProductById(productId);
    if (!product) throw new Error("Product not found.");
    if (product.stock < 1) throw new Error("Product is out of stock.");

    const items = this.getItems();
    const normalizedVariants = variants && typeof variants === "object" ? { ...variants } : {};
    const variantKey = JSON.stringify(normalizedVariants);
    const existing = items.find((i) => i.productId === Number(productId) && JSON.stringify(i.variants || {}) === variantKey);
    const nextQty = (existing ? existing.quantity : 0) + quantity;
    const totalQty = items.filter((i) => i.productId === Number(productId)).reduce((sum, item) => sum + item.quantity, quantity);
    if (totalQty > product.stock) throw new Error(`Only ${product.stock} units available.`);

    if (existing) existing.quantity = nextQty;
    else items.push({ productId: Number(productId), quantity, ...(Object.keys(normalizedVariants).length ? { variants: normalizedVariants } : {}) });

    this.saveItems(items);
    return items;
  },

  updateQuantity(productId, quantity, variants = null) {
    const product = getProductById(productId);
    if (!product) throw new Error("Product not found.");

    let items = this.getItems();
    const matches = item => item.productId === Number(productId) && (variants === null || JSON.stringify(item.variants || {}) === JSON.stringify(variants || {}));
    if (quantity <= 0) {
      items = items.filter((item) => !matches(item));
    } else {
      if (quantity > product.stock) throw new Error(`Only ${product.stock} units available.`);
      const item = items.find(matches);
      if (!item) throw new Error("Item not in cart.");
      item.quantity = quantity;
    }
    this.saveItems(items);
    return items;
  },

  removeItem(productId, variants = null) {
    const items = this.getItems().filter((item) => item.productId !== Number(productId) || (variants !== null && JSON.stringify(item.variants || {}) !== JSON.stringify(variants || {})));
    this.saveItems(items);
    return items;
  },

  clear() {
    this.saveItems([]);
    this.clearCoupon();
  },

  getCouponKey() {
    const user = Auth.getCurrentUser();
    return user ? `cartnova_coupon_${user.id}` : "cartnova_coupon_guest";
  },

  getCoupon() {
    try { return localStorage.getItem(this.getCouponKey()) || ""; } catch (_) { return ""; }
  },

  applyCoupon(code) {
    const normalized = String(code || "").trim().toUpperCase();
    if (!["CARTNOVA10", "WELCOME100"].includes(normalized)) return false;
    if (normalized === "WELCOME100" && this.getDetailedItems().reduce((sum,item)=>sum+item.lineTotal,0) < 999) return false;
    try { localStorage.setItem(this.getCouponKey(), normalized); return true; } catch (_) { return false; }
  },

  clearCoupon() { try { localStorage.removeItem(this.getCouponKey()); } catch (_) {} },

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
    const subtotal = detailed.reduce((sum, i) => sum + (i.product.mrp ?? i.product.price) * i.quantity, 0);
    const discountedSubtotal = detailed.reduce((sum, i) => sum + i.lineTotal, 0);
    const productDiscount = subtotal - discountedSubtotal;
    const coupon = this.getCoupon();
    const couponDiscount = coupon === "CARTNOVA10" ? Math.min(500, Math.round(discountedSubtotal * 0.1)) : coupon === "WELCOME100" && discountedSubtotal >= 999 ? Math.min(100, discountedSubtotal) : 0;
    const discount = productDiscount;
    const payableSubtotal = Math.max(0, discountedSubtotal - couponDiscount);
    const gst = Math.round(payableSubtotal * 5 / 105);
    const deliveryFee = payableSubtotal === 0 ? 0 : payableSubtotal >= 999 ? 0 : 49;
    const total = payableSubtotal + deliveryFee;
    return { subtotal, discount, productDiscount, couponDiscount, coupon, gst, deliveryFee, total, itemCount: this.getCount() };
  },

  /* Wishlist */
  getWishlist() {
    try { const items=JSON.parse(localStorage.getItem(this.getWishlistKey()) || "[]"); return Array.isArray(items) ? items.map(Number).filter(Number.isFinite) : []; } catch (_) { return []; }
  },

  saveWishlist(ids) {
    try { localStorage.setItem(this.getWishlistKey(), JSON.stringify(ids)); return true; }
    catch (_) { return false; }
  },

  isInWishlist(productId) {
    return this.getWishlist().includes(Number(productId));
  },

  toggleWishlist(productId) {
    const id = Number(productId);
    let list = this.getWishlist();
    const exists = list.includes(id);
    list = exists ? list.filter((x) => x !== id) : [...list, id];
    if (!this.saveWishlist(list)) { UI.toast("Wishlist storage is unavailable in this browser.", "error"); return null; }
    if (typeof Features !== "undefined") Features.syncWishlistButtons();
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
