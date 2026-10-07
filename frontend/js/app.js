/**
 * Shared UI helpers: navbar, footer, toasts, loading, confirmation.
 */
const UI = {
  toast(message, type = "info") {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const el = document.createElement("div");
    el.className = `toast ${type}`;
    el.textContent = message;
    container.appendChild(el);
    setTimeout(() => {
      el.style.opacity = "0";
      setTimeout(() => el.remove(), 220);
    }, 2800);
  },

  showLoading(show = true) {
    let overlay = document.querySelector(".loading-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "loading-overlay";
      overlay.innerHTML = '<div class="spinner" aria-label="Loading"></div>';
      document.body.appendChild(overlay);
    }
    overlay.classList.toggle("show", show);
  },

  confirm({ title, message, confirmText = "Confirm", danger = false }) {
    return new Promise((resolve) => {
      let backdrop = document.querySelector(".modal-backdrop");
      if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop";
        document.body.appendChild(backdrop);
      }

      backdrop.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true">
          <h3>${title}</h3>
          <p>${message}</p>
          <div class="modal-actions">
            <button class="btn btn-ghost" data-action="cancel">Cancel</button>
            <button class="btn ${danger ? "btn-danger" : "btn-primary"}" data-action="confirm">${confirmText}</button>
          </div>
        </div>
      `;
      backdrop.classList.add("show");

      const cleanup = (result) => {
        backdrop.classList.remove("show");
        resolve(result);
      };

      backdrop.querySelector('[data-action="cancel"]').onclick = () => cleanup(false);
      backdrop.querySelector('[data-action="confirm"]').onclick = () => cleanup(true);
      backdrop.onclick = (e) => {
        if (e.target === backdrop) cleanup(false);
      };
    });
  },

  updateCartBadge() {
    document.querySelectorAll("[data-cart-count]").forEach((el) => {
      const count = Cart.getCount();
      el.textContent = count;
      el.style.display = count > 0 ? "grid" : "none";
    });
  },

  getBasePath() {
    const inAdmin = window.location.pathname.includes("/admin/");
    return inAdmin ? "../" : "";
  },

  renderNavbar(active = "") {
    const base = this.getBasePath();
    const user = Auth.getCurrentUser();
    const authLink = user
      ? `<a href="${base}profile.html" class="${active === "profile" ? "active" : ""}">${user.name.split(" ")[0]}</a>`
      : `<a href="${base}login.html" class="${active === "login" ? "active" : ""}">Login</a>`;

    const adminLink = user && user.role === "ADMIN"
      ? `<a href="${base}admin/dashboard.html">Admin</a>`
      : "";

    return `
      <header class="navbar">
        <div class="container nav-inner">
          <a class="logo" href="${base}index.html">
            <span class="logo-mark">CN</span>
            <span>CartNova</span>
          </a>
          <nav class="nav-links" id="navLinks">
            <a href="${base}index.html" class="${active === "home" ? "active" : ""}">Home</a>
            <a href="${base}products.html" class="${active === "products" ? "active" : ""}">Products</a>
            <a href="${base}products.html#categories" class="${active === "categories" ? "active" : ""}">Categories</a>
            ${adminLink}
            ${authLink}
          </nav>
          <form class="nav-search" action="${base}products.html" method="get">
            <span class="nav-search-icon">⌕</span>
            <input type="search" name="q" placeholder="Search products..." aria-label="Search products" />
          </form>
          <div class="nav-actions">
            <a class="icon-btn" href="${base}products.html?wishlist=1" title="Wishlist" aria-label="Wishlist">♡</a>
            <a class="icon-btn" href="${base}cart.html" title="Cart" aria-label="Cart">
              🛒
              <span class="badge-count" data-cart-count>0</span>
            </a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
    `;
  },

  renderFooter() {
    const base = this.getBasePath();
    const year = new Date().getFullYear();
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a class="logo" href="${base}index.html">
                <span class="logo-mark">CN</span>
                <span>CartNova</span>
              </a>
              <p>Shop Smart. Live Better. A modern shopping experience built for speed, trust, and everyday value.</p>
              <div class="socials">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="Instagram">ig</a>
                <a href="#" aria-label="Twitter">x</a>
                <a href="#" aria-label="YouTube">yt</a>
              </div>
            </div>
            <div>
              <h4>About CartNova</h4>
              <a href="${base}index.html">Our Story</a>
              <a href="${base}products.html">Shop Products</a>
              <a href="${base}orders.html">Track Orders</a>
            </div>
            <div>
              <h4>Customer Service</h4>
              <a href="#">Help Center</a>
              <a href="#">Returns</a>
              <a href="#">Shipping Info</a>
            </div>
            <div>
              <h4>Contact</h4>
              <a href="mailto:support@cartnova.local">support@cartnova.local</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${year} CartNova. All rights reserved.</span>
            <span>Built for modern e-commerce learning & production practice.</span>
          </div>
        </div>
      </footer>
    `;
  },

  mountChrome({ active = "", includeFooter = true } = {}) {
    const navMount = document.querySelector("[data-navbar]");
    const footerMount = document.querySelector("[data-footer]");
    if (navMount) navMount.outerHTML = this.renderNavbar(active);
    if (includeFooter && footerMount) footerMount.outerHTML = this.renderFooter();

    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => links.classList.toggle("open"));
    }
    this.updateCartBadge();
  },

  productCard(product, { compact = false } = {}) {
    const category = getCategoryById(product.categoryId);
    const finalPrice = getFinalPrice(product);
    const wished = Cart.isInWishlist(product.id);

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-media">
          <a href="product-details.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </a>
          ${product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : ""}
          <button class="wishlist-btn ${wished ? "active" : ""}" data-wishlist="${product.id}" aria-label="Toggle wishlist">
            ${wished ? "♥" : "♡"}
          </button>
        </div>
        <div class="product-body">
          <div class="product-category">${category ? category.name : "General"}</div>
          <a class="product-name" href="product-details.html?id=${product.id}">${product.name}</a>
          <div class="product-rating">★ ${product.rating.toFixed(1)} <span>(${Math.floor(product.rating * 17)})</span></div>
          <div class="price-row">
            <span class="price-current">${formatINR(finalPrice)}</span>
            ${product.discount ? `<span class="price-original">${formatINR(product.price)}</span>` : ""}
          </div>
          ${compact ? "" : `
            <div class="product-actions">
              <button class="btn btn-primary btn-sm" data-add-cart="${product.id}">Add to Cart</button>
            </div>
          `}
        </div>
      </article>
    `;
  },

  bindProductActions(root = document) {
    root.querySelectorAll("[data-add-cart]").forEach((btn) => {
      btn.addEventListener("click", () => {
        try {
          Cart.addItem(btn.dataset.addCart, 1);
          this.toast("Product added to cart", "success");
        } catch (err) {
          this.toast(err.message, "error");
        }
      });
    });

    root.querySelectorAll("[data-wishlist]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const added = Cart.toggleWishlist(btn.dataset.wishlist);
        btn.classList.toggle("active", added);
        btn.textContent = added ? "♥" : "♡";
        this.toast(added ? "Added to wishlist" : "Removed from wishlist", "success");
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Ensure demo users exist
  Auth.getUsers();

  // Sync admin catalog edits into the storefront session
  const overrides = localStorage.getItem("cartnova_admin_products");
  if (overrides) {
    try {
      CartNovaData.products = JSON.parse(overrides);
    } catch (_) {
      /* keep seed data */
    }
  }
});
