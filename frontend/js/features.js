/** Customer-facing persistence and interaction helpers for Stage 3. */
const Features = {
  key(name) {
    let user = null;
    try { user = Auth.getCurrentUser(); } catch (_) {}
    return `cartnova_${name}_${user ? user.id : "guest"}`;
  },
  read(name, fallback = []) {
    try { const value=JSON.parse(localStorage.getItem(this.key(name)) || JSON.stringify(fallback)); return Array.isArray(value) ? value : fallback; }
    catch (_) { return fallback; }
  },
  write(name, value) {
    try { localStorage.setItem(this.key(name), JSON.stringify(value)); return true; }
    catch (_) { UI.toast("Storage is unavailable in this browser", "error"); return false; }
  },
  recentlyViewed() { return this.read("recently_viewed").map(Number).filter(id => getProductById(id)); },
  addRecentlyViewed(id) {
    this.write("recently_viewed", [Number(id), ...this.recentlyViewed().filter(item => item !== Number(id))].slice(0, 10));
  },
  compareItems() { return this.read("compare").map(Number).filter(id => getProductById(id)).slice(0, 3); },
  addCompare(id) {
    id = Number(id);
    const list = this.compareItems();
    if (list.includes(id)) { UI.toast("Product is already in comparison", "info"); return false; }
    if (list.length >= 3) { UI.toast("Compare up to 3 products. Remove one to add another.", "error"); return false; }
    if (!this.write("compare", [...list, id])) return false;
    UI.toast("Added to comparison", "success");
    this.updateCompareBadge();
    return true;
  },
  removeCompare(id) {
    this.write("compare", this.compareItems().filter(item => item !== Number(id)));
    this.updateCompareBadge();
    UI.toast("Removed from comparison", "success");
    this.renderCompare();
  },
  clearCompare() { this.write("compare", []); this.updateCompareBadge(); this.renderCompare(); },
  updateCompareBadge() {
    document.querySelectorAll("[data-compare-count]").forEach(el => {
      const count = this.compareItems().length;
      el.textContent = count;
      el.style.display = count ? "grid" : "none";
    });
  },
  updateWishlistBadge() {
    document.querySelectorAll("[data-wishlist-count]").forEach(el => {
      const count = Cart.getWishlist().length;
      el.textContent = count;
      el.style.display = count ? "grid" : "none";
    });
  },
  syncWishlistButtons() {
    document.querySelectorAll("[data-wishlist]").forEach(button => {
      const saved = Cart.isInWishlist(button.dataset.wishlist);
      button.classList.toggle("active", saved);
        button.textContent = saved ? "♥" : "♡";
        button.setAttribute("aria-pressed", String(saved));
        button.setAttribute("aria-label", `${saved ? "Remove" : "Add"} ${button.dataset.productName || "product"} ${saved ? "from" : "to"} wishlist`);
    });
    this.updateWishlistBadge();
  },
  notifyCart(message = "Product added to cart") {
    this.updateCartDrawer();
    UI.updateCartBadge();
    UI.toast(message, "success");
  },
  mount() {
    this.mountCartDrawer();
    this.mountSearch();
    this.updateWishlistBadge();
    this.updateCompareBadge();
    this.syncWishlistButtons();
    this.renderRecentlyViewed();
    this.renderWishlist();
    this.renderCompare();
    this.renderSavedItems();
    if (!this.eventsMounted) {
      this.eventsMounted = true;
      document.addEventListener("click", event => this.handleClick(event));
      document.addEventListener("keydown", event => {
        if (event.key === "Escape") { this.closeQuickView(); this.closeCartDrawer(); }
        if (event.key === "Tab") {
          const drawer = document.getElementById("cartDrawer");
          if (!drawer?.classList.contains("open")) return;
          const focusable = [...drawer.querySelectorAll("a,button:not([disabled]),input:not([disabled])")];
          const first = focusable[0], last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
      });
      window.addEventListener("storage", () => {
        this.syncWishlistButtons(); this.updateCartDrawer(); this.renderWishlist(); this.updateCompareBadge();
      });
    }
  },
  mountCartDrawer() {
    if (document.getElementById("cartDrawer")) return;
    const mount = document.createElement("div");
    mount.innerHTML = `<div class="cart-drawer-backdrop" id="cartDrawerBackdrop" hidden></div>
      <aside class="cart-drawer" id="cartDrawer" role="dialog" aria-modal="true" aria-labelledby="cartDrawerTitle" aria-hidden="true" inert>
        <div class="cart-drawer-head"><h2 id="cartDrawerTitle">Your cart</h2><button type="button" data-close-cart-drawer aria-label="Close cart">×</button></div>
        <div class="cart-drawer-items" id="cartDrawerItems"></div>
        <div class="cart-drawer-foot" id="cartDrawerFoot"></div>
      </aside>`;
    document.body.appendChild(mount);
    this.updateCartDrawer();
  },
  openCartDrawer() {
    const drawer = document.getElementById("cartDrawer"), backdrop = document.getElementById("cartDrawerBackdrop");
    if (!drawer || !backdrop) return;
    this.cartDrawerTrigger = document.activeElement;
    const mount = drawer.parentElement;
    this.cartBackground = [...document.body.children].filter(node => node !== mount).map(node => ({node, inert:node.inert}));
    this.cartBackground.forEach(({node}) => { node.inert = true; });
    this.updateCartDrawer(); drawer.classList.add("open"); drawer.removeAttribute("inert"); drawer.setAttribute("aria-hidden", "false");
    document.querySelector("[data-open-cart-drawer]")?.setAttribute("aria-expanded", "true");
    backdrop.hidden = false; document.body.classList.add("cart-drawer-open");
    drawer.querySelector("[data-close-cart-drawer]")?.focus();
  },
  closeCartDrawer() {
    const drawer = document.getElementById("cartDrawer"), backdrop = document.getElementById("cartDrawerBackdrop");
    if (!drawer || !backdrop) return;
    drawer.classList.remove("open"); drawer.setAttribute("inert", ""); drawer.setAttribute("aria-hidden", "true");
    this.cartBackground?.forEach(({node,inert}) => { node.inert = inert; }); this.cartBackground = null;
    document.querySelector("[data-open-cart-drawer]")?.setAttribute("aria-expanded", "false");
    backdrop.hidden = true; document.body.classList.remove("cart-drawer-open");
    this.cartDrawerTrigger?.focus?.(); this.cartDrawerTrigger = null;
  },
  updateCartDrawer() {
    const itemsRoot = document.getElementById("cartDrawerItems"), foot = document.getElementById("cartDrawerFoot");
    if (!itemsRoot || !foot) return;
    const items = Cart.getDetailedItems(), totals = Cart.getTotals();
    itemsRoot.innerHTML = items.length ? items.map(item => `<article class="drawer-item" data-drawer-item="${item.productId}">
      <img src="${UI.escapeHTML(item.product.image)}" alt="${UI.escapeHTML(item.product.name)}" width="72" height="90" loading="lazy" decoding="async"><div><a href="product-details.html?id=${item.productId}">${UI.escapeHTML(item.product.name)}</a>
      <strong>${formatINR(item.unitPrice)}</strong><div class="qty-control"><button type="button" data-drawer-dec="${item.productId}" data-cart-variant='${UI.escapeHTML(JSON.stringify(item.variants||{}))}' aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-drawer-inc="${item.productId}" data-cart-variant='${UI.escapeHTML(JSON.stringify(item.variants||{}))}' aria-label="Increase quantity">+</button></div></div>
      <button type="button" class="drawer-remove" data-drawer-remove="${item.productId}" data-cart-variant='${UI.escapeHTML(JSON.stringify(item.variants||{}))}' aria-label="Remove ${UI.escapeHTML(item.product.name)}">×</button></article>`).join("") : UI.emptyState({ icon: "bag", title: "Your cart is empty", description: "Browse the catalog to find something you need.", action: "Browse products" });
    foot.innerHTML = items.length ? `<div class="summary-row"><span>Total</span><strong>${formatINR(totals.total)}</strong></div><a class="btn btn-primary btn-block" href="cart.html">View cart</a>` : "";
    UI.bindImageFallbacks(itemsRoot);
  },
  mountSearch() {
    const input = document.querySelector(".nav-search input[name='q']");
    if (!input || input.dataset.suggestionsBound) return;
    input.dataset.suggestionsBound = "true";
    const form = input.closest("form"); form.classList.add("search-form-enhanced");
    const box = document.createElement("div"); box.className = "search-suggestions"; box.id = "searchSuggestions";
    box.setAttribute("role", "listbox"); box.hidden = true; form.appendChild(box);
      input.setAttribute("aria-autocomplete", "list"); input.setAttribute("aria-controls", box.id);
      input.setAttribute("role", "combobox"); input.setAttribute("aria-haspopup", "listbox"); input.setAttribute("aria-expanded", "false");
    input.addEventListener("input", () => this.showSearchSuggestions(input, box));
    input.addEventListener("keydown", event => {
      const options = [...box.querySelectorAll("[role='option']")];
        if (event.key === "Escape") { box.hidden = true; input.setAttribute("aria-expanded", "false"); return; }
      if (event.key === "ArrowDown" && options.length) { event.preventDefault(); options[0].focus(); }
      if (event.key === "Enter" && input.value.trim()) { form.requestSubmit(); }
    });
      document.addEventListener("click", event => { if (!form.contains(event.target)) { box.hidden = true; input.setAttribute("aria-expanded", "false"); } });
  },
  showSearchSuggestions(input, box) {
    const query = input.value.trim().toLowerCase();
     if (!query) { box.hidden = true; input.setAttribute("aria-expanded", "false"); box.innerHTML = ""; return; }
    const matches = CartNovaData.products.filter(product => {
      const category = getCategoryById(product.categoryId)?.name || "";
      return [product.name, product.brand, category, product.subcategory, ...(product.tags || [])].some(value => String(value).toLowerCase().includes(query));
    }).slice(0, 6);
    box.innerHTML = matches.length ? matches.map(product => `<a role="option" tabindex="0" href="product-details.html?id=${product.id}" class="search-suggestion">
      <img src="${UI.escapeHTML(product.image)}" alt="" width="44" height="52" loading="lazy"><span>${UI.escapeHTML(product.name)}<small>${UI.escapeHTML(product.brand)}</small></span><strong>${formatINR(getFinalPrice(product))}</strong></a>`).join("") : `<div class="search-no-suggestions" role="status">No products found</div>`;
     box.hidden = false; input.setAttribute("aria-expanded", "true"); UI.bindImageFallbacks(box);
    box.querySelectorAll("[role='option']").forEach(option => option.addEventListener("keydown", event => {
      if (event.key === "ArrowDown") { event.preventDefault(); (option.nextElementSibling || input)?.focus(); }
      if (event.key === "ArrowUp") { event.preventDefault(); const prev=option.previousElementSibling; (prev || input).focus(); }
    }));
  },
  handleClick(event) {
    const target = event.target.closest("[data-quick-view], [data-compare], [data-open-cart-drawer], [data-close-cart-drawer], #cartDrawerBackdrop, [data-drawer-inc], [data-drawer-dec], [data-drawer-remove], [data-wishlist-remove], [data-wishlist-move], [data-compare-remove], [data-compare-clear], [data-save-for-later], [data-saved-move], [data-saved-remove]");
    if (!target) return;
    if (target.matches("[data-quick-view]")) { event.preventDefault(); this.openQuickView(target.dataset.quickView); }
    else if (target.matches("[data-compare]")) { event.preventDefault(); this.addCompare(target.dataset.compare); }
    else if (target.matches("[data-open-cart-drawer]")) { event.preventDefault(); this.openCartDrawer(); }
    else if (target.matches("[data-close-cart-drawer], #cartDrawerBackdrop")) this.closeCartDrawer();
    else if (target.matches("[data-drawer-inc], [data-drawer-dec]")) {
      const id=Number(target.dataset.drawerInc||target.dataset.drawerDec), variants=JSON.parse(target.dataset.cartVariant||"{}"), current=Cart.getItems().find(item=>item.productId===id&&JSON.stringify(item.variants||{})===JSON.stringify(variants))?.quantity||1;
      try { Cart.updateQuantity(id,current+(target.matches("[data-drawer-inc]")?1:-1),variants); this.updateCartDrawer(); UI.updateCartBadge(); }
      catch(error) { UI.toast(error.message,"error"); }
    } else if (target.matches("[data-drawer-remove]")) { Cart.removeItem(target.dataset.drawerRemove,JSON.parse(target.dataset.cartVariant||"{}")); this.updateCartDrawer(); UI.updateCartBadge(); UI.toast("Product removed from cart","success"); }
    else if (target.matches("[data-wishlist-remove]")) { Cart.removeFromWishlist(target.dataset.wishlistRemove); this.renderWishlist(); this.syncWishlistButtons(); UI.toast("Removed from wishlist","success"); }
    else if (target.matches("[data-wishlist-move]")) { try { Cart.moveWishlistToCart(target.dataset.wishlistMove); this.renderWishlist(); this.syncWishlistButtons(); this.notifyCart("Moved to cart"); } catch(error) { UI.toast(error.message,"error"); } }
    else if (target.matches("[data-compare-remove]")) this.removeCompare(target.dataset.compareRemove);
    else if (target.matches("[data-compare-clear]")) this.clearCompare();
    else if (target.matches("[data-save-for-later]")) { const id=Number(target.dataset.saveForLater), variants=JSON.parse(target.dataset.cartVariant||"{}"); Cart.removeItem(id,variants); const saved=this.read("saved_for_later").filter(item=>Number(typeof item==="object"?item.productId:item)!==id); this.write("saved_for_later",[{productId:id,variants},...saved]); CartPage.render(); this.updateCartDrawer(); UI.updateCartBadge(); UI.toast("Saved for later","success"); }
    else if (target.matches("[data-saved-move]")) { const id=Number(target.dataset.savedMove), variants=JSON.parse(target.dataset.cartVariant||"{}"), saved=this.read("saved_for_later"); const savedItem=saved.find(item=>Number(typeof item==="object"?item.productId:item)===id&&JSON.stringify(item.variants||{})===JSON.stringify(variants)); try { Cart.addItem(id,1,savedItem?.variants||{}); this.write("saved_for_later",saved.filter(item=>Number(typeof item==="object"?item.productId:item)!==id||JSON.stringify(item.variants||{})!==JSON.stringify(variants))); CartPage.render(); this.renderSavedItems(); UI.updateCartBadge(); UI.toast("Moved to cart","success"); } catch(error) { UI.toast(error.message,"error"); } }
    else if (target.matches("[data-saved-remove]")) { const id=Number(target.dataset.savedRemove), variants=JSON.parse(target.dataset.cartVariant||"{}"); this.write("saved_for_later",this.read("saved_for_later").filter(item=>Number(typeof item==="object"?item.productId:item)!==id||JSON.stringify(item.variants||{})!==JSON.stringify(variants))); this.renderSavedItems(); }
  },
  openQuickView(id) {
    const product=getProductById(id); if(!product) return;
    this.closeQuickView();
    const backdrop=document.createElement("div"); backdrop.className="quick-view-backdrop"; backdrop.id="quickViewBackdrop";
    const safeName=UI.escapeHTML(product.name),safeImage=UI.escapeHTML(product.image);
    backdrop.innerHTML=`<section class="quick-view-modal" role="dialog" aria-modal="true" aria-labelledby="quickViewTitle" tabindex="-1">
      <button type="button" class="quick-view-close" data-quick-close aria-label="Close quick view">×</button><div class="quick-view-content">
      <img src="${safeImage}" alt="${safeName}" width="400" height="500"><div><p class="product-category">${UI.escapeHTML(getCategoryById(product.categoryId)?.name||"")}</p><p class="quick-brand">${UI.escapeHTML(product.brand||"")}</p><h2 id="quickViewTitle">${safeName}</h2>
      <p>★ ${product.rating.toFixed(1)} · ${product.reviewCount||0} reviews</p><div class="price-row"><strong>${formatINR(getFinalPrice(product))}</strong><del>${formatINR(product.mrp??product.price)}</del><span class="discount-badge">-${product.discount||0}%</span></div>
      <p>${product.stock>0?`${product.stock} in stock`:"Out of stock"}</p><p>${UI.escapeHTML(product.description)}</p><div class="quick-view-actions"><button class="btn btn-primary" data-quick-add="${product.id}" ${product.stock<1?"disabled":""}>${product.stock<1?"Out of Stock":"Add to Cart"}</button>
      <button class="btn btn-outline" data-quick-wishlist="${product.id}">${Cart.isInWishlist(product.id)?"♥ Wishlisted":"♡ Wishlist"}</button><a class="btn btn-ghost" href="product-details.html?id=${product.id}">View Details</a></div></div></div></section>`;
    this.quickViewPrevious=document.activeElement;
    this.quickViewBackground=Array.from(document.body.children||[]).map(node=>({node,inert:node.inert}));
    document.body.appendChild(backdrop); this.quickViewBackground=this.quickViewBackground.filter(item=>item.node!==backdrop);this.quickViewBackground.forEach(({node})=>{node.inert=true;});document.body.classList.add("quick-view-open");
    UI.bindImageFallbacks(backdrop); backdrop.querySelector("[data-quick-close]").focus();
    backdrop.addEventListener("click",event=>{ if(event.target===backdrop||event.target.closest("[data-quick-close]")) this.closeQuickView();
      const add=event.target.closest("[data-quick-add]"); if(add){try{Cart.addItem(add.dataset.quickAdd,1);this.notifyCart("Added to cart");}catch(error){UI.toast(error.message,"error");}}
        const wish=event.target.closest("[data-quick-wishlist]"); if(wish){const saved=Cart.toggleWishlist(wish.dataset.quickWishlist);if(saved===null)return;wish.textContent=saved?"♥ Wishlisted":"♡ Wishlist";wish.setAttribute("aria-pressed",String(saved));this.syncWishlistButtons();UI.toast(saved?"Added to wishlist":"Removed from wishlist","success");}
    });
    backdrop.addEventListener("keydown",event=>{if(event.key==="Escape"){this.closeQuickView();return;}if(event.key!=="Tab")return;const focusable=[...backdrop.querySelectorAll("a,button:not([disabled])")];const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
  },
  closeQuickView() { const modal=document.getElementById("quickViewBackdrop"); if(modal){modal.remove();this.quickViewBackground?.forEach(({node,inert})=>{node.inert=inert;});this.quickViewBackground=null;document.body.classList.remove("quick-view-open");this.quickViewPrevious?.focus();this.quickViewPrevious=null;} },
  renderRecentlyViewed() {
    const root=document.getElementById("recentlyViewedGrid"); if(!root)return;
    const current=Number(new URLSearchParams(window.location.search).get("id"));
    const products=this.recentlyViewed().filter(id=>id!==current).map(getProductById);
    root.innerHTML=products.length?products.map(product=>UI.productCard(product,{compact:true})).join(""):UI.emptyState({icon:"search",title:"No recently viewed products",description:"Products you explore will be collected here.",action:"Browse products"});
    UI.bindProductActions(root);
  },
  renderWishlist() {
    const root=document.getElementById("wishlistRoot");if(!root)return;
    const products=Cart.getWishlist().map(getProductById).filter(Boolean);
    root.innerHTML=products.length?`<div class="product-grid">${products.map(product=>`<article class="product-card wishlist-card"><img src="${UI.escapeHTML(product.image)}" alt="${UI.escapeHTML(product.name)}" width="400" height="500" loading="lazy" decoding="async"><div class="product-body"><p>${UI.escapeHTML(product.brand)}</p><a class="product-name" href="product-details.html?id=${product.id}">${UI.escapeHTML(product.name)}</a><strong>${formatINR(getFinalPrice(product))}</strong><div class="product-actions"><button type="button" class="btn btn-primary btn-sm" data-wishlist-move="${product.id}" ${product.stock<1?"disabled":""}>${product.stock<1?"Out of Stock":"Move to Cart"}</button><button type="button" class="btn btn-ghost btn-sm" data-wishlist-remove="${product.id}">Remove</button></div></div></article>`).join("")}</div>`:UI.emptyState({icon:"heart",title:"Your wishlist is empty",description:"Save products you love and find them here.",action:"Explore products"});
    UI.bindImageFallbacks(root);
  },
  renderSavedItems() {
    const root=document.getElementById("savedForLaterItems");if(!root)return;
    const saved=this.read("saved_for_later").map(item=>({product:getProductById(typeof item==="object"?item.productId:item),variants:typeof item==="object"?item.variants||{}:{}})).filter(item=>item.product);
    root.innerHTML=saved.length?`<section class="saved-for-later"><h2>Saved for later</h2><div class="saved-list">${saved.map(({product,variants})=>`<article class="saved-item"><img src="${UI.escapeHTML(product.image)}" alt="${UI.escapeHTML(product.name)}" width="72" height="90" loading="lazy" decoding="async"><div><a href="product-details.html?id=${product.id}">${UI.escapeHTML(product.name)}</a><p>${formatINR(getFinalPrice(product))}</p>${Object.entries(variants).filter(([,value])=>value).map(([key,value])=>`<small>${UI.escapeHTML(key)}: ${UI.escapeHTML(value)}</small>`).join("")}</div><div><button type="button" class="btn btn-outline btn-sm" data-saved-move="${product.id}" data-cart-variant='${UI.escapeHTML(JSON.stringify(variants))}' ${product.stock<1?"disabled":""}>${product.stock<1?"Out of Stock":"Move to cart"}</button><button type="button" class="btn btn-ghost btn-sm" data-saved-remove="${product.id}" data-cart-variant='${UI.escapeHTML(JSON.stringify(variants))}'>Remove</button></div></article>`).join("")}</div></section>`:"";
    UI.bindImageFallbacks(root);
  },
  renderCompare() {
    const root=document.getElementById("compareRoot");if(!root)return;
    const products=this.compareItems().map(getProductById);
    if(!products.length){root.innerHTML=UI.emptyState({icon:"compare",title:"Nothing to compare yet",description:"Choose up to three products to compare their details side by side.",action:"Browse products"});return;}
    const rows=["Image","Name","Brand","Category","Price","MRP","Rating","Reviews","Stock","Specifications"];
    const values=product=>[ `<img class="compare-image" src="${UI.escapeHTML(product.image)}" alt="${UI.escapeHTML(product.name)}" width="180" height="220" loading="lazy">`,UI.escapeHTML(product.name),UI.escapeHTML(product.brand),UI.escapeHTML(getCategoryById(product.categoryId)?.name||""),formatINR(getFinalPrice(product)),formatINR(product.mrp??product.price),`★ ${product.rating.toFixed(1)}`,product.reviewCount||0,product.stock?`${product.stock} in stock`:"Out of stock",Object.entries(product.specifications||{}).map(([key,value])=>`<span><b>${UI.escapeHTML(key)}:</b> ${UI.escapeHTML(value)}</span>`).join("") ];
    const columns=products.map(values);
    root.innerHTML=`<div class="compare-toolbar"><p>Comparing ${products.length} of 3 products</p><button class="btn btn-outline" data-compare-clear>Clear comparison</button></div><div class="compare-table-wrap"><table class="compare-table"><tbody>${rows.map((row,index)=>`<tr><th>${row}</th>${columns.map((column,col)=>`<td>${column[index]}${index===0?`<button class="btn btn-ghost btn-sm" data-compare-remove="${products[col].id}">Remove</button>`:""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    UI.bindImageFallbacks(root);
  }
};

document.addEventListener("DOMContentLoaded", () => Features.mount());
