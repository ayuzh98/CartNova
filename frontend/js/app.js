/**
 * Shared UI helpers: navbar, footer, toasts, loading, confirmation.
 */
const UI = {
  emptyState({ icon = "bag", title, description, href = "products.html", action = "Browse products" } = {}) {
    const paths = { bag: "<path d='M5 8h14l1 13H4L5 8Z'/><path d='M9 8a3 3 0 0 1 6 0'/>", heart: "<path d='M20.8 8.7c0 5.2-8.8 10.3-8.8 10.3S3.2 13.9 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z'/>", search: "<circle cx='10.8' cy='10.8' r='6.8'/><path d='m16 16 5 5'/>", box: "<path d='m12 3 9 5-9 5-9-5 9-5Z'/><path d='M3 8v9l9 5 9-5V8M12 13v9'/>", pin: "<path d='M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z'/><circle cx='12' cy='10' r='2.5'/>", compare: "<path d='M4 7h15M4 12h10M4 17h15'/><path d='m16 9 3-2-3-2M16 19l3-2-3-2'/>", alert: "<path d='M12 3 2.8 20h18.4L12 3Z'/><path d='M12 9v5m0 3h.01'/>", bell: "<path d='M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9'/><path d='M10 21h4'/>", user: "<circle cx='12' cy='8' r='4'/><path d='M4 21a8 8 0 0 1 16 0'/>" };
    return `<div class="empty-state"><svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[icon] || paths.bag}</svg><h2>${this.escapeHTML(title)}</h2><p>${this.escapeHTML(description)}</p>${href ? `<a class="btn btn-primary" href="${this.escapeHTML(href)}">${this.escapeHTML(action)}</a>` : ""}</div>`;
  },
  toast(message, type = "info") {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const safeType = ["success", "error", "warning", "info"].includes(type) ? type : "info";
    const el = document.createElement("div");
    el.className = `toast ${safeType}`;
    el.setAttribute("role", safeType === "error" ? "alert" : "status");
    el.setAttribute("aria-live", safeType === "error" ? "assertive" : "polite");
    const text = document.createElement("span"); text.textContent = message;
    const dismiss = document.createElement("button"); dismiss.type = "button"; dismiss.className = "toast-dismiss"; dismiss.setAttribute("aria-label", "Dismiss notification"); dismiss.textContent = "×"; dismiss.onclick = () => el.remove();
    el.append(text, dismiss);
    container.appendChild(el);
    setTimeout(() => { el.classList.add("toast-leaving"); setTimeout(() => el.remove(), 220); }, 4500);
  },

  showLoading(show = true) {
    let overlay = document.querySelector(".loading-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "loading-overlay";
      overlay.innerHTML = '<div class="spinner" aria-label="Loading"></div>';
      overlay.setAttribute("role", "status"); overlay.setAttribute("aria-live", "polite");
      document.body.appendChild(overlay);
    }
    overlay.classList.toggle("show", show);
  },

  confirm({ title, message, confirmText = "Confirm", danger = false }) {
    return new Promise((resolve) => {
      const returnFocus = document.activeElement;
      let backdrop = document.querySelector(".modal-backdrop");
      if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop";
        document.body.appendChild(backdrop);
      }
      const background = [...document.body.children].filter(node => node !== backdrop).map(node => ({ node, inert: node.inert }));
      background.forEach(({ node }) => { node.inert = true; });

      backdrop.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="confirmDialogTitle">
          <h3 id="confirmDialogTitle">${this.escapeHTML(title)}</h3>
          <p>${this.escapeHTML(message)}</p>
          <div class="modal-actions">
            <button class="btn btn-ghost" data-action="cancel">Cancel</button>
            <button class="btn ${danger ? "btn-danger" : "btn-primary"}" data-action="confirm">${this.escapeHTML(confirmText)}</button>
          </div>
        </div>
      `;
      backdrop.classList.add("show");

      const cleanup = (result) => {
        backdrop.classList.remove("show");
        document.removeEventListener("keydown", onKeydown);
        background.forEach(({ node, inert }) => { node.inert = inert; });
        returnFocus?.focus?.();
        resolve(result);
      };

      const onKeydown = (event) => {
        if (event.key === "Escape") { cleanup(false); return; }
        if (event.key !== "Tab") return;
        const buttons = [...backdrop.querySelectorAll("button:not([disabled])")];
        if (event.shiftKey && document.activeElement === buttons[0]) { event.preventDefault(); buttons.at(-1)?.focus(); }
        else if (!event.shiftKey && document.activeElement === buttons.at(-1)) { event.preventDefault(); buttons[0]?.focus(); }
      };
      document.addEventListener("keydown", onKeydown);

      backdrop.querySelector('[data-action="cancel"]').onclick = () => cleanup(false);
      backdrop.querySelector('[data-action="confirm"]').onclick = () => cleanup(true);
      backdrop.querySelector('[data-action="cancel"]').focus();
      backdrop.onclick = (e) => {
        if (e.target === backdrop) cleanup(false);
      };
    });
  },

  bindImageFallbacks(root = document) {
    const placeholder = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#e9e7ff'/><stop offset='1' stop-color='#dbeafe'/></linearGradient></defs><rect width='400' height='500' fill='url(#g)'/><rect x='120' y='190' width='160' height='110' rx='18' fill='white' opacity='.8'/><path d='M155 265l35-38 25 26 17-17 25 29z' fill='#7c3aed' opacity='.65'/><text x='200' y='340' text-anchor='middle' font-family='Arial,sans-serif' font-size='24' font-weight='700' fill='#1e3a8a'>CartNova</text><text x='200' y='368' text-anchor='middle' font-family='Arial,sans-serif' font-size='13' fill='#6b7280'>Image unavailable</text></svg>"
    );
    root.querySelectorAll("img").forEach((image) => {
      image.addEventListener("error", () => {
        image.onerror = null;
        image.src = placeholder;
        image.classList.add("image-fallback");
      }, { once: true });
    });
  },
  escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  },
  updateCartBadge() {
    document.querySelectorAll("[data-cart-count]").forEach((el) => {
      const count = Cart.getCount();
      el.textContent = count;
      el.style.display = count > 0 ? "grid" : "none";
    });
    if (typeof Features !== "undefined") Features.updateCartDrawer();
  },

  getBasePath() {
    const inAdmin = window.location.pathname.includes("/admin/");
    return inAdmin ? "../" : "";
  },

  renderNavbar(active = "") {
    const base = this.getBasePath();
    const user = Auth.getCurrentUser();
    const authLink = user
      ? `<a href="${base}profile.html" class="${active === "profile" ? "active" : ""}" ${active === "profile" ? 'aria-current="page"' : ""}>${this.escapeHTML(user.name.split(" ")[0])}</a>`
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
            <a href="${base}index.html" class="${active === "home" ? "active" : ""}" ${active === "home" ? 'aria-current="page"' : ""}>Home</a>
            <a href="${base}products.html" class="${active === "products" ? "active" : ""}" ${active === "products" ? 'aria-current="page"' : ""}>Products</a>
            <a href="${base}products.html#categories" class="${active === "categories" ? "active" : ""}" ${active === "categories" ? 'aria-current="page"' : ""}>Categories</a>
            ${adminLink}
            ${authLink}
          </nav>
          <form class="nav-search" action="${base}products.html" method="get">
            <span class="nav-search-icon">⌕</span>
            <input type="search" name="q" placeholder="Search products..." aria-label="Search products" />
          </form>
          <div class="nav-actions">
            <a class="icon-btn" href="${base}wishlist.html" title="Wishlist" aria-label="Wishlist">♡<span class="badge-count" data-wishlist-count>0</span></a>
            <a class="icon-btn compare-nav" href="${base}compare.html" title="Compare products" aria-label="Compare products">⇄<span class="badge-count" data-compare-count>0</span></a>
            <button class="icon-btn cart-drawer-trigger" type="button" data-open-cart-drawer aria-label="Open cart preview" aria-controls="cartDrawer" aria-expanded="false">🛍</button>
            <a class="icon-btn" href="${base}cart.html" title="Cart" aria-label="Cart">
              🛒
              <span class="badge-count" data-cart-count>0</span>
            </a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
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
              <p>Shop Smart. Live Better. Discover everyday essentials in one convenient place.</p>
            </div>
            <div>
              <h4>About CartNova</h4>
              <a href="${base}info.html?page=story">Our Story</a>
              <a href="${base}products.html">Shop Products</a>
              <a href="${base}orders.html">Track Orders</a>
            </div>
            <div>
              <h4>Customer Service</h4>
              <a href="${base}info.html?page=help">Help Center</a>
              <a href="${base}info.html?page=returns">Returns</a>
              <a href="${base}info.html?page=shipping">Shipping Info</a>
            </div>
            <div>
              <h4>Contact</h4>
              <a href="${base}info.html?page=privacy">Privacy Policy</a>
              <a href="${base}info.html?page=terms">Terms of Use</a>
            </div>
          </div>
          <section class="newsletter" aria-labelledby="newsletterTitle">
            <div><h2 id="newsletterTitle">A little CartNova in your inbox</h2><p>Get occasional product news and offers. Unsubscribe any time.</p></div>
            <form class="newsletter-form" data-newsletter-form><label class="sr-only" for="footerNewsletterEmail">Email address</label><input id="footerNewsletterEmail" name="email" type="email" placeholder="Email address" autocomplete="email" required /><button class="btn btn-primary" type="submit">Subscribe</button></form>
          </section>
          <div class="footer-bottom">
            <span>© ${year} CartNova. All rights reserved.</span>
            <span>Thoughtful finds for everyday life.</span>
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
      const mobileNavigation = window.matchMedia("(max-width: 900px)");
      const syncNavigation = () => {
        const isMobile = mobileNavigation.matches;
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        links.inert = isMobile && !isOpen;
        if (isMobile && !isOpen) links.setAttribute("aria-hidden", "true");
        else links.removeAttribute("aria-hidden");
      };
      syncNavigation();
      if (mobileNavigation.addEventListener) mobileNavigation.addEventListener("change", syncNavigation);
      else mobileNavigation.addListener?.(syncNavigation);
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        links.classList.toggle("open", !expanded);
        syncNavigation();
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && links.classList.contains("open")) {
          links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.focus();
          syncNavigation();
        }
      });
    }
    this.updateCartBadge();
    if (typeof Features !== "undefined") Features.mount();
    document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = form.elements.email;
        if (!input || !input.checkValidity()) { input?.reportValidity(); return; }
        const button = form.querySelector("button[type='submit']");
        const email = input.value.trim().toLowerCase();
        const original = button.textContent;
        button.disabled = true; button.textContent = "Submitting…";
        setTimeout(() => {
          try {
            const key = "cartnova_newsletter_emails";
            const entries = JSON.parse(localStorage.getItem(key) || "[]");
            if (!Array.isArray(entries)) throw new Error("Subscription storage is unavailable.");
            if (entries.includes(email)) this.toast("This email is already subscribed.", "info");
            else { entries.push(email); localStorage.setItem(key, JSON.stringify(entries)); this.toast("You’re subscribed to CartNova updates.", "success"); form.reset(); }
          } catch (_) { this.toast("Subscription could not be saved in this browser.", "error"); }
          button.disabled = false; button.textContent = original;
        }, 350);
      });
    });
  },

  productCard(product, { compact = false } = {}) {
    const category = getCategoryById(product.categoryId);
    const finalPrice = getFinalPrice(product);
    const wished = Cart.isInWishlist(product.id);
    const name = this.escapeHTML(product.name), image = this.escapeHTML(product.image), brand = this.escapeHTML(category ? category.name : "General");
    const outOfStock = Number(product.stock) < 1;

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-media">
          <a href="product-details.html?id=${product.id}">
            <img src="${image}" alt="${name}" width="400" height="500" loading="lazy" decoding="async" />
          </a>
            ${product.discount ? `<span class="discount-badge">-${this.escapeHTML(product.discount)}%</span>` : ""}
          <button type="button" class="wishlist-btn ${wished ? "active" : ""}" data-wishlist="${product.id}" data-product-name="${name}" aria-label="${wished ? "Remove" : "Add"} ${name} ${wished ? "from" : "to"} wishlist" aria-pressed="${wished}">
            ${wished ? "♥" : "♡"}
          </button>
        </div>
        <div class="product-body">
          <div class="product-category">${brand}</div>
          <a class="product-name" href="product-details.html?id=${product.id}">${name}</a>
          <div class="product-rating">★ ${product.rating.toFixed(1)} <span>(${product.reviewCount ?? Math.floor(product.rating * 17)})</span></div>
          <div class="price-row">
            <span class="price-current">${formatINR(finalPrice)}</span>
            ${product.discount ? `<span class="price-original">${formatINR(product.mrp ?? product.price)}</span>` : ""}
          </div>
          <div class="product-actions">
            ${compact ? "" : `<button type="button" class="btn btn-primary btn-sm" data-add-cart="${product.id}" ${outOfStock ? "disabled" : ""}>${outOfStock ? "Out of Stock" : "Add to Cart"}</button>`}
            <button type="button" class="btn btn-outline btn-sm" data-quick-view="${product.id}" aria-label="Quick view ${name}">Quick View</button>
            <button type="button" class="btn btn-ghost btn-sm" data-compare="${product.id}" aria-label="Compare ${name}">Compare</button>
          </div>
        </div>
      </article>
    `;
  },

  bindProductActions(root = document) {
    this.bindImageFallbacks(root);
    root.querySelectorAll("[data-add-cart]").forEach((btn) => {
      btn.addEventListener("click", () => {
        try {
          Cart.addItem(btn.dataset.addCart, 1);
          if (typeof Features !== "undefined") Features.notifyCart();
          else this.toast("Product added to cart", "success");
        } catch (err) {
          this.toast(err.message, "error");
        }
      });
    });

      root.querySelectorAll("[data-wishlist]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const added = Cart.toggleWishlist(btn.dataset.wishlist);
          if (added === null) return;
          btn.classList.toggle("active", added);
          btn.textContent = added ? "♥" : "♡";
          btn.setAttribute("aria-pressed", String(added));
          btn.setAttribute("aria-label", `${added ? "Remove" : "Add"} ${btn.dataset.productName || "product"} ${added ? "from" : "to"} wishlist`);
        if (typeof Features !== "undefined") { Features.syncWishlistButtons(); this.toast(added ? "Added to wishlist" : "Removed from wishlist", "success"); }
        else this.toast(added ? "Added to wishlist" : "Removed from wishlist", "success");
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
    // Load and migrate locally stored accounts.
  Auth.getUsers();

  // Sync admin catalog edits into the storefront session
  try {
    const overrides = localStorage.getItem("cartnova_admin_products");
    if (overrides) {
      const products = JSON.parse(overrides);
      if (Array.isArray(products)) CartNovaData.products = products;
    }
  } catch (_) { /* keep seed data when storage is unavailable or malformed */ }
});
