/**
 * Homepage sections using sample catalog data.
 */
const HomePage = {
  init() {
    const categoryGrid = document.getElementById("categoryGrid");
    const featuredGrid = document.getElementById("featuredGrid");
    const trendingGrid = document.getElementById("trendingGrid");
    const reviewsGrid = document.getElementById("reviewsGrid");

    if (categoryGrid) {
      categoryGrid.innerHTML = CartNovaData.categories
        .map(
          (c) => `
          <a class="category-card" href="products.html?category=${c.id}">
            <div class="category-icon">${c.icon}</div>
            <h3>${c.name}</h3>
            <p>${c.description}</p>
          </a>`
        )
        .join("");
    }

    if (featuredGrid) {
      const featured = CartNovaData.products.filter((p) => p.featured).slice(0, 8);
      featuredGrid.innerHTML = featured.map((p) => UI.productCard(p)).join("");
      UI.bindProductActions(featuredGrid);
    }

    if (trendingGrid) {
      const trending = CartNovaData.products.filter((p) => p.trending).slice(0, 8);
      trendingGrid.innerHTML = trending.map((p) => UI.productCard(p)).join("");
      UI.bindProductActions(trendingGrid);
    }

    if (reviewsGrid) {
      reviewsGrid.innerHTML = CartNovaData.testimonials
        .map(
          (t) => `
          <article class="review-card">
            <div class="stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
            <p>"${t.text}"</p>
            <div class="reviewer">
              <div class="avatar">${t.name.charAt(0)}</div>
              <strong>${t.name}</strong>
            </div>
          </article>`
        )
        .join("");
    }

    document.getElementById("newsletterForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail");
      if (!email.value.trim()) {
        UI.toast("Please enter your email", "error");
        return;
      }
      email.value = "";
      UI.toast("Subscribed to CartNova updates", "success");
    });
  }
};

/**
 * Product listing, filtering, sorting, pagination.
 */
const ProductsPage = {
  state: {
    q: "",
    categoryId: null,
    minPrice: 0,
    maxPrice: Infinity,
    minRating: 0,
    sort: "newest",
    page: 1,
    pageSize: 8,
    wishlistOnly: false
  },

  init() {
    const params = new URLSearchParams(window.location.search);
    this.state.q = params.get("q") || "";
    this.state.categoryId = params.get("category") ? Number(params.get("category")) : null;
    this.state.wishlistOnly = params.get("wishlist") === "1";
    this.state.sort = params.get("sort") || "newest";

    const searchInput = document.querySelector('input[name="q"]');
    if (searchInput && this.state.q) searchInput.value = this.state.q;

    this.renderFilters();
    this.bindControls();
    this.render();
  },

  bindControls() {
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.value = this.state.sort;
      sortSelect.addEventListener("change", () => {
        this.state.sort = sortSelect.value;
        this.state.page = 1;
        this.render();
      });
    }

    document.getElementById("applyFilters")?.addEventListener("click", () => {
      const minPrice = Number(document.getElementById("minPrice").value || 0);
      const maxPrice = Number(document.getElementById("maxPrice").value || Infinity);
      const rating = Number(document.querySelector('input[name="rating"]:checked')?.value || 0);
      const category = document.querySelector('input[name="category"]:checked')?.value;

      this.state.minPrice = minPrice;
      this.state.maxPrice = maxPrice || Infinity;
      this.state.minRating = rating;
      this.state.categoryId = category ? Number(category) : null;
      this.state.page = 1;
      this.render();
    });

    document.getElementById("clearFilters")?.addEventListener("click", () => {
      this.state = {
        ...this.state,
        q: "",
        categoryId: null,
        minPrice: 0,
        maxPrice: Infinity,
        minRating: 0,
        sort: "newest",
        page: 1,
        wishlistOnly: false
      };
      const searchInput = document.querySelector('input[name="q"]');
      if (searchInput) searchInput.value = "";
      this.renderFilters();
      this.render();
    });
  },

  renderFilters() {
    const categoryBox = document.getElementById("categoryFilters");
    if (!categoryBox) return;

    categoryBox.innerHTML = `
      <label><input type="radio" name="category" value="" ${!this.state.categoryId ? "checked" : ""} /> All</label>
      ${CartNovaData.categories
        .map(
          (c) => `
          <label>
            <input type="radio" name="category" value="${c.id}" ${this.state.categoryId === c.id ? "checked" : ""} />
            ${c.name}
          </label>`
        )
        .join("")}
    `;
  },

  getFiltered() {
    let items = [...CartNovaData.products];

    if (this.state.wishlistOnly) {
      const ids = Cart.getWishlist();
      items = items.filter((p) => ids.includes(p.id));
    }

    if (this.state.q) {
      const q = this.state.q.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (getCategoryById(p.categoryId)?.name || "").toLowerCase().includes(q)
      );
    }

    if (this.state.categoryId) {
      items = items.filter((p) => p.categoryId === this.state.categoryId);
    }

    items = items.filter((p) => {
      const price = getFinalPrice(p);
      return price >= this.state.minPrice && price <= this.state.maxPrice && p.rating >= this.state.minRating;
    });

    switch (this.state.sort) {
      case "price-asc":
        items.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
        break;
      case "price-desc":
        items.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
        break;
      case "rating":
        items.sort((a, b) => b.rating - a.rating);
        break;
      default:
        items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return items;
  },

  render() {
    const grid = document.getElementById("productGrid");
    const countEl = document.getElementById("productCount");
    const pagination = document.getElementById("pagination");
    const title = document.getElementById("productsTitle");
    if (!grid) return;

    if (title) {
      title.textContent = this.state.wishlistOnly ? "My Wishlist" : "All Products";
    }

    const filtered = this.getFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / this.state.pageSize));
    if (this.state.page > totalPages) this.state.page = totalPages;

    const start = (this.state.page - 1) * this.state.pageSize;
    const pageItems = filtered.slice(start, start + this.state.pageSize);

    if (countEl) {
      countEl.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;
    }

    if (!pageItems.length) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <div class="empty-icon">${this.state.wishlistOnly ? "♡" : "⌕"}</div>
          <h2>${this.state.wishlistOnly ? "Your wishlist is empty" : "No products found"}</h2>
          <p>Try adjusting filters or explore all categories.</p>
          <a class="btn btn-primary" href="products.html">Browse Products</a>
        </div>`;
      if (pagination) pagination.innerHTML = "";
      return;
    }

    grid.innerHTML = pageItems.map((p) => UI.productCard(p)).join("");
    UI.bindProductActions(grid);

    if (pagination) {
      pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return `<button class="${page === this.state.page ? "active" : ""}" data-page="${page}">${page}</button>`;
      }).join("");

      pagination.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.state.page = Number(btn.dataset.page);
          this.render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    }
  }
};

const ProductDetailsPage = {
  init() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const product = getProductById(id);
    const root = document.getElementById("productDetails");

    if (!root) return;

    if (!product) {
      root.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">!</div>
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist or has been removed.</p>
          <a class="btn btn-primary" href="products.html">Back to Products</a>
        </div>`;
      return;
    }

    const category = getCategoryById(product.categoryId);
    const finalPrice = getFinalPrice(product);
    const reviews = CartNovaData.reviews.filter((r) => r.productId === product.id);
    const related = CartNovaData.products
      .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
      .slice(0, 4);

    root.innerHTML = `
      <div class="details-layout">
        <div class="details-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="details-info">
          <div class="product-category">${category?.name || "General"}</div>
          <h1>${product.name}</h1>
          <div class="product-rating">★ ${product.rating.toFixed(1)} <span>· ${reviews.length || 12} reviews</span></div>
          <div class="price-row" style="margin:1rem 0">
            <span class="price-current">${formatINR(finalPrice)}</span>
            ${product.discount ? `<span class="price-original">${formatINR(product.price)}</span>` : ""}
            ${product.discount ? `<span class="discount-badge" style="position:static">-${product.discount}%</span>` : ""}
          </div>
          <p style="color:var(--muted);margin-bottom:1rem">${product.description}</p>
          <p class="${product.stock < 10 ? "stock-low" : "stock-ok"}">
            ${product.stock < 10 ? `Only ${product.stock} left in stock` : `${product.stock} in stock`}
          </p>
          <div style="margin-top:1rem">
            <label for="qty"><strong>Quantity</strong></label>
            <div class="qty-control" style="margin-top:0.5rem">
              <button type="button" id="qtyMinus">−</button>
              <span id="qtyValue">1</span>
              <button type="button" id="qtyPlus">+</button>
            </div>
          </div>
          <div class="details-actions">
            <button class="btn btn-primary" id="addToCartBtn">Add to Cart</button>
            <button class="btn btn-secondary" id="buyNowBtn">Buy Now</button>
            <button class="btn btn-outline" id="wishlistBtn">${Cart.isInWishlist(product.id) ? "♥ Wishlisted" : "♡ Wishlist"}</button>
          </div>
          <ul class="details-meta">
            <li><span>Category</span><strong>${category?.name || "-"}</strong></li>
            <li><span>SKU</span><strong>CN-${String(product.id).padStart(4, "0")}</strong></li>
            <li><span>Delivery</span><strong>2–5 business days</strong></li>
            <li><span>Returns</span><strong>7-day easy returns</strong></li>
          </ul>
        </div>
      </div>

      <section class="section">
        <h2 class="section-title">Customer Reviews</h2>
        <div class="reviews-list" id="reviewsList">
          ${
            reviews.length
              ? reviews
                  .map(
                    (r) => `
                <article class="review-card">
                  <div class="stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
                  <p>${r.comment}</p>
                  <div class="reviewer">
                    <div class="avatar">${r.user.charAt(0)}</div>
                    <div>
                      <strong>${r.user}</strong>
                      <div style="color:var(--muted);font-size:0.85rem">${r.createdAt}</div>
                    </div>
                  </div>
                </article>`
                  )
                  .join("")
              : `<div class="empty-state"><p>No reviews yet. Be the first to review this product.</p></div>`
          }
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Related Products</h2>
        <div class="product-grid" id="relatedGrid">
          ${related.map((p) => UI.productCard(p)).join("")}
        </div>
      </section>
    `;

    let qty = 1;
    const qtyValue = document.getElementById("qtyValue");
    document.getElementById("qtyMinus").onclick = () => {
      qty = Math.max(1, qty - 1);
      qtyValue.textContent = qty;
    };
    document.getElementById("qtyPlus").onclick = () => {
      qty = Math.min(product.stock, qty + 1);
      qtyValue.textContent = qty;
    };

    document.getElementById("addToCartBtn").onclick = () => {
      try {
        Cart.addItem(product.id, qty);
        UI.toast("Product added to cart", "success");
      } catch (err) {
        UI.toast(err.message, "error");
      }
    };

    document.getElementById("buyNowBtn").onclick = () => {
      try {
        Cart.addItem(product.id, qty);
        window.location.href = "checkout.html";
      } catch (err) {
        UI.toast(err.message, "error");
      }
    };

    document.getElementById("wishlistBtn").onclick = (e) => {
      const added = Cart.toggleWishlist(product.id);
      e.target.textContent = added ? "♥ Wishlisted" : "♡ Wishlist";
      UI.toast(added ? "Added to wishlist" : "Removed from wishlist", "success");
    };

    UI.bindProductActions(document.getElementById("relatedGrid"));
  }
};
