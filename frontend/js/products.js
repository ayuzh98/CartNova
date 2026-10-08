/**
 * Homepage sections using the storefront catalog.
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
      const featuredIds = new Set(CartNovaData.products.filter((p) => p.featured).slice(0, 8).map((p) => p.id));
      const trending = CartNovaData.products
        .filter((p) => !featuredIds.has(p.id))
        .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
        .slice(0, 8);
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

  }
};

/**
 * Product listing, filtering, sorting, pagination.
 */
const ProductsPage = {
  state: {
    q: "",
    categoryIds: [],
    minPrice: 0,
    maxPrice: Infinity,
    minRating: 0,
    sort: "newest",
    page: 1,
    pageSize: 12,
    loadMoreCount: 0,
    wishlistOnly: false
  },

  init() {
    const params = new URLSearchParams(window.location.search);
    const initialCategory = Number(params.get("category"));
    this.state.q = params.get("q") || "";
    this.state.categoryIds = initialCategory ? [initialCategory] : [];
    this.state.wishlistOnly = params.get("wishlist") === "1";
    this.state.sort = params.get("sort") || "newest";
    const searchInput = document.querySelector('input[name="q"]');
    if (searchInput && this.state.q) searchInput.value = this.state.q;
    this.renderFilters();
    this.setFilterDrawer(false);
    this.bindControls();
    this.render();
  },

  setFilterDrawer(open) {
    const sidebar = document.getElementById("categories");
    const backdrop = document.getElementById("filterBackdrop");
    const toggle = document.getElementById("mobileFilterToggle");
    if (!sidebar || !backdrop || !toggle) return;
    const drawerMode = !window.matchMedia || window.matchMedia("(max-width: 900px)").matches;
    const wasOpen = sidebar.classList.contains("open");
    const drawerOpen = drawerMode && open;
    sidebar.classList.toggle("open", drawerOpen);
    sidebar.inert = drawerMode && !drawerOpen;
    sidebar.setAttribute("aria-hidden", String(drawerMode && !drawerOpen));
    backdrop.hidden = !drawerOpen;
    document.body.classList.toggle("filter-drawer-open", drawerOpen);
    toggle.setAttribute("aria-expanded", String(drawerOpen));
    if (drawerOpen && !wasOpen) document.getElementById("closeFilters")?.focus();
    if (!drawerOpen && wasOpen && drawerMode) toggle.focus();
  },
  bindControls() {
    document.getElementById("mobileFilterToggle")?.addEventListener("click", () => this.setFilterDrawer(true));
    document.getElementById("closeFilters")?.addEventListener("click", () => this.setFilterDrawer(false));
    document.getElementById("filterBackdrop")?.addEventListener("click", () => this.setFilterDrawer(false));
    document.addEventListener("keydown", (event) => {
      const open = document.getElementById("categories")?.classList.contains("open");
      if (event.key === "Escape" && open) { this.setFilterDrawer(false); return; }
      if (event.key === "Tab" && open) {
        const drawer = document.getElementById("categories");
        const items = [...drawer.querySelectorAll("button:not([disabled]),input:not([disabled]),a[href]")];
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    });
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.value = this.state.sort;
      sortSelect.addEventListener("change", () => {
        this.state.sort = sortSelect.value;
        this.resetPaging();
        this.render();
      });
    }
    document.getElementById("applyFilters")?.addEventListener("click", () => {
      const minPrice = Number(document.getElementById("minPrice").value || 0);
      const maxInput = document.getElementById("maxPrice").value;
      const maxPrice = maxInput === "" ? Infinity : Number(maxInput);
      const rating = Number(document.querySelector('input[name="rating"]:checked')?.value || 0);
      if (maxPrice < minPrice) {
        UI.toast("Maximum price must be greater than minimum price", "error");
        document.getElementById("maxPrice").focus();
        return;
      }
      this.state.categoryIds = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map((input) => Number(input.value)).filter(Boolean);
      this.state.minPrice = minPrice;
      this.state.maxPrice = maxPrice;
      this.state.minRating = rating;
      this.setFilterDrawer(false);
      this.resetPaging();
      this.render();
    });
    document.getElementById("clearFilters")?.addEventListener("click", () => {
      this.state = { ...this.state, q: "", categoryIds: [], minPrice: 0, maxPrice: Infinity,
        minRating: 0, sort: "newest", page: 1, loadMoreCount: 0, wishlistOnly: false };
      const searchInput = document.querySelector('input[name="q"]');
      if (searchInput) searchInput.value = "";
      document.getElementById("minPrice").value = "";
      document.getElementById("maxPrice").value = "";
      document.querySelector('input[name="rating"][value="0"]')?.click();
      if (sortSelect) sortSelect.value = "newest";
      this.renderFilters();
      this.setFilterDrawer(false);
      this.render();
    });
    document.getElementById("activeFilterChips")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove-category]");
      if (!button) return;
      const id = Number(button.dataset.removeCategory);
      this.state.categoryIds = this.state.categoryIds.filter((categoryId) => categoryId !== id);
      const checkbox = document.querySelector('input[name="category"][value="' + id + '"]');
      if (checkbox) checkbox.checked = false;
      this.resetPaging();
      this.render();
    });
  },

  resetPaging() {
    this.state.page = 1;
    this.state.loadMoreCount = 0;
  },

  renderFilters() {
    const categoryBox = document.getElementById("categoryFilters");
    if (!categoryBox) return;
    categoryBox.innerHTML = CartNovaData.categories.map((category) =>
      '<label><input type="checkbox" name="category" value="' + category.id + '" ' +
      (this.state.categoryIds.includes(category.id) ? "checked" : "") + ' /><span>' +
      category.name + '</span></label>'
    ).join("");
  },

  getFiltered() {
    let items = [...CartNovaData.products];
    if (this.state.wishlistOnly) {
      const ids = Cart.getWishlist().map(Number);
      items = items.filter((product) => ids.includes(Number(product.id)));
    }
    if (this.state.q) {
      const query = this.state.q.toLowerCase();
      items = items.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.brand || "").toLowerCase().includes(query) ||
        (product.subcategory || "").toLowerCase().includes(query) ||
        (product.tags || []).some(tag => String(tag).toLowerCase().includes(query)) ||
        (getCategoryById(product.categoryId)?.name || "").toLowerCase().includes(query)
      );
    }
    if (this.state.categoryIds.length) {
      items = items.filter((product) => this.state.categoryIds.includes(Number(product.categoryId)));
    }
    items = items.filter((product) => {
      const price = getFinalPrice(product);
      return price >= this.state.minPrice && price <= this.state.maxPrice && product.rating >= this.state.minRating;
    });
    switch (this.state.sort) {
      case "price-asc": items.sort((a, b) => getFinalPrice(a) - getFinalPrice(b)); break;
      case "price-desc": items.sort((a, b) => getFinalPrice(b) - getFinalPrice(a)); break;
      case "rating": items.sort((a, b) => b.rating - a.rating); break;
      case "popular": items.sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0)); break;
      default: items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return items;
  },

  renderFilterChips() {
    const chips = document.getElementById("activeFilterChips");
    if (!chips) return;
    const selected = CartNovaData.categories.filter((category) => this.state.categoryIds.includes(category.id));
    chips.innerHTML = selected.map((category) =>
      '<button type="button" class="filter-chip" data-remove-category="' + category.id +
      '" aria-label="Remove ' + category.name + ' filter">' + category.name +
      '<span aria-hidden="true">×</span></button>'
    ).join("");
  },

  render() {
    const grid = document.getElementById("productGrid");
    const countEl = document.getElementById("productCount");
    const pagination = document.getElementById("pagination");
    const title = document.getElementById("productsTitle");
    if (!grid) return;
    if (title) title.textContent = this.state.wishlistOnly ? "My Wishlist" : "All Products";
    this.renderFilterChips();
    const filtered = this.getFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / this.state.pageSize));
    if (this.state.page > totalPages) this.state.page = totalPages;
    const start = this.state.loadMoreCount ? 0 : (this.state.page - 1) * this.state.pageSize;
    const visibleCount = this.state.loadMoreCount || this.state.pageSize;
    const pageItems = filtered.slice(start, start + visibleCount);
    if (countEl) countEl.textContent = "Showing " + (filtered.length ? start + 1 : 0) +
      "–" + (start + pageItems.length) + " of " + filtered.length;
    if (!pageItems.length) {
      grid.innerHTML = UI.emptyState({ icon: this.state.wishlistOnly ? "heart" : "search", title: this.state.wishlistOnly ? "Your wishlist is empty" : "Nothing matched your search", description: "Try a different keyword or browse the catalog.", action: "Browse products" });
      if (pagination) pagination.innerHTML = "";
      return;
    }
    const existingCards = grid.querySelectorAll(".product-card").length;
    if (this.state.loadMoreCount && existingCards > 0 && existingCards < pageItems.length) {
      const addedMarkup = pageItems.slice(existingCards).map((product) => UI.productCard(product)).join("");
      grid.insertAdjacentHTML("beforeend", addedMarkup);
      Array.from(grid.querySelectorAll(".product-card")).slice(existingCards).forEach((card) => UI.bindProductActions(card));
    } else {
      grid.innerHTML = pageItems.map((product) => UI.productCard(product)).join("");
      UI.bindProductActions(grid);
    }
    if (!pagination) return;
    const pageButtons = Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      const active = page === this.state.page && !this.state.loadMoreCount;
      return '<button type="button" class="' + (active ? "active" : "") + '" data-page="' + page +
        '" aria-current="' + (active ? "page" : "false") + '">' + page + '</button>';
    }).join("");
    const moreButton = (this.state.loadMoreCount > 0 || this.state.page === 1) && start + pageItems.length < filtered.length
      ? '<button type="button" class="load-more-btn" data-load-more>Load More</button>' : "";
    pagination.innerHTML = '<button type="button" data-page="' + Math.max(1, this.state.page - 1) +
      '" ' + (this.state.page === 1 || this.state.loadMoreCount ? "disabled" : "") +
      ' aria-label="Previous page">Previous</button>' + pageButtons +
      '<button type="button" data-page="' + Math.min(totalPages, this.state.page + 1) +
      '" ' + (this.state.page === totalPages || this.state.loadMoreCount ? "disabled" : "") +
      ' aria-label="Next page">Next</button>' + moreButton;
    pagination.querySelectorAll("[data-page]").forEach((button) => {
      button.addEventListener("click", () => {
        this.state.page = Number(button.dataset.page);
        this.state.loadMoreCount = 0;
        this.render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    pagination.querySelector("[data-load-more]")?.addEventListener("click", () => {
      this.state.loadMoreCount = Math.min(filtered.length,
        (this.state.loadMoreCount || this.state.pageSize) + this.state.pageSize);
      this.render();
    });
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
          <div class="product-rating">★ ${product.rating.toFixed(1)} <span>· ${product.reviewCount ?? reviews.length ?? 12} reviews</span></div>
          <div class="price-row" style="margin:1rem 0">
            <span class="price-current">${formatINR(finalPrice)}</span>
            ${product.discount ? `<span class="price-original">${formatINR(product.mrp ?? product.price)}</span>` : ""}
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
            <li><span>Delivery</span><strong>Illustrative estimate shown at checkout</strong></li>
            <li><span>Returns</span><strong>Request from eligible delivered orders</strong></li>
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

    UI.bindImageFallbacks(root);

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
      if (added === null) return;
      e.target.textContent = added ? "♥ Wishlisted" : "♡ Wishlist";
      UI.toast(added ? "Added to wishlist" : "Removed from wishlist", "success");
    };

    UI.bindProductActions(document.getElementById("relatedGrid"));
  }
};


// Stage 3 product detail enhancements.
ProductDetailsPage.init = function () {
  const productId = Number(new URLSearchParams(window.location.search).get("id"));
  const product = getProductById(productId);
  const root = document.getElementById("productDetails");
  if (!root) return;

  if (!product) {
    root.innerHTML = UI.emptyState({ icon: "alert", title: "Product not found", description: "This product may have been removed or the link may be incomplete.", action: "Browse products" });
    return;
  }

  const esc = UI.escapeHTML;
  document.title = `CartNova | ${product.name}`;
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
  document.querySelector('meta[property="og:type"]')?.setAttribute("content", "product");
  const productDescription = document.querySelector('meta[name="description"]');
  const socialDescription = document.querySelector('meta[property="og:description"]');
  const seoDescription = `${product.name}: view product details, price, ratings, specifications, and available options on CartNova.`;
  productDescription?.setAttribute("content", seoDescription);
  socialDescription?.setAttribute("content", seoDescription);

  if (typeof Features !== "undefined") Features.addRecentlyViewed(product.id);

  const category = getCategoryById(product.categoryId);
  const images = product.images?.length ? product.images : [product.image];
  const variants = {
    size: product.sizes?.[0] || "",
    color: product.colors?.[0] || "",
    ...Object.fromEntries(
      Object.entries(product.variants || {}).map(([name, values]) => [
        name,
        Array.isArray(values) ? values[0] : ""
      ])
    )
  };
  const variantOptions = [
    ...(product.sizes?.length ? [["Size", product.sizes]] : []),
    ...(product.colors?.length ? [["Color", product.colors]] : []),
    ...Object.entries(product.variants || {}).filter(([, values]) => Array.isArray(values) && values.length)
  ];
  const related = CartNovaData.products
    .filter((item) => item.id !== product.id)
    .map((item) => ({
      item,
      score:
        (item.categoryId === product.categoryId ? 4 : 0) +
        (item.subcategory === product.subcategory ? 3 : 0) +
        (item.brand === product.brand ? 2 : 0)
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.item.rating - a.item.rating)
    .slice(0, 4)
    .map((entry) => entry.item);
  const reviews = CartNovaData.reviews.filter(
    (review) => Number(review.productId) === Number(product.id)
  );
  const reviewCount = product.reviewCount ?? reviews.length;

  // Estimate an aggregate breakdown from the catalog rating; per-star totals are not in the seed data.
  const fiveStarShare = Math.max(0, Math.min(0.93, product.rating - 3.89));
  const ratingShares = [0.01, 0.02, 0.04, 0.93 - fiveStarShare, fiveStarShare];
  const ratingCounts = ratingShares.map((share) => Math.round(reviewCount * share));
  ratingCounts[4] += reviewCount - ratingCounts.reduce((sum, count) => sum + count, 0);

  const variantMarkup = variantOptions
    .map(([name, values]) => `
      <fieldset class="variant-picker" data-variant="${name.toLowerCase()}">
        <legend>${esc(name)}</legend>
        <div>${values
          .map(
            (value, index) => `
              <button type="button" class="variant-option ${index === 0 ? "active" : ""}"
                data-variant-value="${esc(value)}" aria-pressed="${index === 0}">${esc(value)}</button>`
          )
          .join("")}
        </div>
      </fieldset>`)
    .join("");
  const breakdownMarkup = [5, 4, 3, 2, 1]
    .map((star) => {
      const count = ratingCounts[star - 1];
      return `
        <div>
          <span>${star} ★</span>
          <progress max="${Math.max(reviewCount, 1)}" value="${count}"></progress>
          <small>${count}</small>
        </div>`;
    })
    .join("");
  const reviewsMarkup = reviews.length
    ? reviews
        .map(
          (review) => `
            <article class="review-card">
              <div class="stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
              <p>${esc(review.comment)}</p>
              <strong>${esc(review.user || "CartNova customer")}</strong>
              <small>${esc(review.createdAt || "Customer review")}</small>
            </article>`
        )
        .join("")
    : `<p class="review-note">Ratings are summarized above. Written customer reviews will appear here as they are submitted.</p>`;
  const stockLabel = product.stock < 1
    ? "Out of stock"
    : product.stock < 10
      ? `Only ${product.stock} left`
      : `${product.stock} in stock`;

  root.innerHTML = `
    <div class="details-layout stage3-details">
      <div class="details-gallery">
        <div class="details-image">
          <button type="button" class="gallery-nav gallery-prev" aria-label="Previous image">‹</button>
          <img id="detailMainImage" src="${esc(images[0])}" alt="${esc(product.name)}" width="600" height="720" fetchpriority="high" />
          <button type="button" class="gallery-nav gallery-next" aria-label="Next image">›</button>
          <button type="button" class="zoom-toggle" aria-label="Zoom product image" aria-pressed="false">⌕</button>
        </div>
        <div class="thumbnail-gallery" role="list">
          ${images
            .map(
              (image, index) => `
                <button type="button" role="listitem" class="gallery-thumb ${index === 0 ? "active" : ""}"
                  data-image-index="${index}" aria-label="View image ${index + 1}"
                  aria-pressed="${index === 0}"><img src="${esc(image)}" alt="" width="72" height="86" loading="lazy" decoding="async" /></button>`
            )
            .join("")}
        </div>
      </div>

      <div class="details-info">
        <p class="product-category">${esc(category?.name || "")} · ${esc(product.subcategory || "")}</p>
        <p class="detail-brand">${esc(product.brand || "")}</p>
        <h1>${esc(product.name)}</h1>
        <a class="detail-rating-link" href="#customerReviews">
          ★ ${product.rating.toFixed(1)} · ${reviewCount} reviews
        </a>
        <div class="price-row detail-price">
          <strong>${formatINR(getFinalPrice(product))}</strong>
          <del>${formatINR(product.mrp ?? product.price)}</del>
          <span class="discount-badge">-${product.discount}%</span>
        </div>
        <p class="detail-description">${esc(product.description)}</p>
        <p class="${product.stock < 10 ? "stock-low" : "stock-ok"}">${stockLabel}</p>
        ${variantMarkup}

        <div class="pincode-check">
          <label for="deliveryPincode">Check delivery availability</label>
          <div>
            <input id="deliveryPincode" inputmode="numeric" maxlength="6" placeholder="Enter 6-digit pincode" />
            <button type="button" class="btn btn-outline" id="checkPincode">Check</button>
          </div>
          <p id="pincodeMessage" aria-live="polite">Enter your pincode for an estimated delivery window.</p>
        </div>

        <div class="detail-qty">
          <strong>Quantity</strong>
          <div class="qty-control">
            <button type="button" id="qtyMinus" aria-label="Decrease quantity">−</button>
            <span id="qtyValue">1</span>
            <button type="button" id="qtyPlus" aria-label="Increase quantity" ${product.stock < 1 ? "disabled" : ""}>+</button>
          </div>
        </div>
        <div class="details-actions">
          <button class="btn btn-primary" id="addToCartBtn" ${product.stock < 1 ? "disabled" : ""}>${product.stock < 1 ? "Out of Stock" : "Add to Cart"}</button>
          <button class="btn btn-secondary" id="buyNowBtn" ${product.stock < 1 ? "disabled" : ""}>Buy Now</button>
          <button class="btn btn-outline" id="wishlistBtn" aria-pressed="${Cart.isInWishlist(product.id)}">
            ${Cart.isInWishlist(product.id) ? "♥ Wishlisted" : "♡ Wishlist"}
          </button>
          <button class="btn btn-ghost" id="detailCompare" data-compare="${product.id}">Compare</button>
        </div>
        <ul class="details-meta">
          <li><span>SKU</span><strong>${esc(product.sku || `CN-${String(product.id).padStart(4, "0")}`)}</strong></li>
          <li><span>Delivery</span><strong>Illustrative estimate shown at checkout</strong></li>
          <li><span>Returns</span><strong>Request from eligible delivered orders</strong></li>
        </ul>
      </div>
    </div>

    <section class="section specs-section">
      <h2 class="section-title">Product specifications</h2>
      <div class="spec-table">
        ${Object.entries(product.specifications || {})
          .map(([name, value]) => `<div><strong>${esc(name)}</strong><span>${esc(value)}</span></div>`)
          .join("")}
      </div>
    </section>

    <section class="section reviews-section" id="customerReviews">
      <h2 class="section-title">Customer ratings &amp; reviews</h2>
      <div class="rating-summary">
        <div class="rating-score">
          <strong>${product.rating.toFixed(1)}</strong><span>★ ★ ★ ★ ★</span>
          <small>${reviewCount} ratings</small>
        </div>
        <div class="rating-breakdown">${breakdownMarkup}</div>
      </div>
      <div class="reviews-list">${reviewsMarkup}</div>
    </section>

    <section class="section">
      <h2 class="section-title">Related products</h2>
      <div class="product-grid related-products">${related.map((item) => UI.productCard(item, { compact: true })).join("")}</div>
    </section>
    <section class="section recently-viewed-section">
      <h2 class="section-title">Recently viewed</h2>
      <div class="product-grid" id="recentlyViewedGrid"></div>
    </section>`;

  const mainImage = document.getElementById("detailMainImage");
  let imageIndex = 0;
  let quantity = 1;
  const setImage = (nextIndex) => {
    imageIndex = (nextIndex + images.length) % images.length;
    mainImage.src = images[imageIndex];
    root.querySelectorAll("[data-image-index]").forEach((button) => {
      const active = Number(button.dataset.imageIndex) === imageIndex;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  root.querySelectorAll("[data-image-index]").forEach((button) => {
    button.addEventListener("click", () => setImage(Number(button.dataset.imageIndex)));
  });
  root.querySelector(".gallery-prev").addEventListener("click", () => setImage(imageIndex - 1));
  root.querySelector(".gallery-next").addEventListener("click", () => setImage(imageIndex + 1));
  root.querySelector(".zoom-toggle").addEventListener("click", (event) => {
    const zoomed = mainImage.classList.toggle("zoomed");
    event.currentTarget.setAttribute("aria-pressed", String(zoomed));
  });
  UI.bindImageFallbacks(root);

  root.querySelectorAll("[data-variant]").forEach((fieldset) => {
    fieldset.addEventListener("click", (event) => {
      const selected = event.target.closest("[data-variant-value]");
      if (!selected) return;
      fieldset.querySelectorAll("[data-variant-value]").forEach((button) => {
        const active = button === selected;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      variants[fieldset.dataset.variant] = selected.dataset.variantValue;
      fieldset.dataset.selected = selected.dataset.variantValue;
    });
  });

  const quantityValue = document.getElementById("qtyValue");
  document.getElementById("qtyMinus").onclick = () => {
    quantity = Math.max(1, quantity - 1);
    quantityValue.textContent = quantity;
  };
  document.getElementById("qtyPlus").onclick = () => {
    quantity = Math.min(product.stock, quantity + 1);
    quantityValue.textContent = quantity;
  };
  const addToCart = () => {
    try {
      Cart.addItem(product.id, quantity, variants);
      if (typeof Features !== "undefined") Features.notifyCart();
    } catch (error) {
      UI.toast(error.message, "error");
    }
  };
  document.getElementById("addToCartBtn").onclick = addToCart;
  document.getElementById("buyNowBtn").onclick = () => {
    try {
      Cart.addItem(product.id, quantity, variants);
      window.location.href = "checkout.html";
    } catch (error) {
      UI.toast(error.message, "error");
    }
  };
  document.getElementById("wishlistBtn").onclick = (event) => {
    const saved = Cart.toggleWishlist(product.id);
    if (saved === null) return;
    event.currentTarget.textContent = saved ? "♥ Wishlisted" : "♡ Wishlist";
    event.currentTarget.setAttribute("aria-pressed", String(saved));
    UI.toast(saved ? "Added to wishlist" : "Removed from wishlist", "success");
  };
  document.getElementById("checkPincode").onclick = () => {
    const input = document.getElementById("deliveryPincode");
    const message = document.getElementById("pincodeMessage");
    if (!/^\d{6}$/.test(input.value.trim())) {
      message.textContent = "Enter a valid 6-digit pincode.";
      message.className = "pincode-error";
      return;
    }
    message.textContent = "Delivery estimate: 3–5 days. This is illustrative; no carrier is connected.";
    message.className = "pincode-success";
  };

  UI.bindImageFallbacks(root);
  UI.bindProductActions(root.querySelector(".related-products"));
  if (typeof Features !== "undefined") {
    Features.renderRecentlyViewed();
    Features.mount();
  }
};
