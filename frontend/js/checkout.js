/**
 * Legacy local checkout helpers.
 */
const CheckoutPage = {
  init() {
    if (!Auth.requireAuth()) return;

    const items = Cart.getDetailedItems();
    if (!items.length) {
      window.location.href = "cart.html";
      return;
    }

    this.prefillAddress();
    this.renderSummary();
    this.bindForm();
  },

  prefillAddress() {
    const user = Auth.getCurrentUser();
    if (!user) return;
    const address = user.address || {};
    const map = {
      fullName: user.name,
      phone: user.phone,
      street: address.street,
      city: address.city,
      state: address.state,
      postalCode: address.postalCode,
      country: address.country || "India"
    };
    Object.entries(map).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el && value) el.value = value;
    });
  },

  renderSummary() {
    const list = document.getElementById("checkoutItems");
    const totals = Cart.getTotals();
    const items = Cart.getDetailedItems();
    if (!list) return;

    list.innerHTML = items
      .map(
        (item) => `
        <div class="summary-row">
          <span>${item.product.name} × ${item.quantity}</span>
          <strong>${formatINR(item.lineTotal)}</strong>
        </div>`
      )
      .join("");

    document.getElementById("sumSubtotal").textContent = formatINR(totals.subtotal);
    document.getElementById("sumDiscount").textContent = `- ${formatINR(totals.discount)}`;
    document.getElementById("sumGst").textContent = formatINR(totals.gst);
    const couponRow = document.getElementById("sumCouponRow");
    if (couponRow) couponRow.hidden = !totals.coupon;
    if (totals.coupon) document.getElementById("sumCoupon").textContent = `- ${formatINR(totals.couponDiscount)} (${totals.coupon})`;
    document.getElementById("sumDelivery").textContent =
      totals.deliveryFee === 0 ? "FREE" : formatINR(totals.deliveryFee);
    document.getElementById("sumTotal").textContent = formatINR(totals.total);
  },

  bindForm() {
    const form = document.getElementById("checkoutForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!this.validate()) return;

      try {
        UI.showLoading(true);
        const order = this.placeOrder();
        Cart.clear();
        UI.showLoading(false);
        UI.toast("Order placed successfully", "success");
        setTimeout(() => {
          window.location.href = `orders.html?placed=${order.id}`;
        }, 600);
      } catch (err) {
        UI.showLoading(false);
        UI.toast(err.message, "error");
      }
    });
  },

  validate() {
    const required = ["fullName", "phone", "street", "city", "state", "postalCode", "country"];
    let valid = true;
    required.forEach((id) => {
      const group = document.getElementById(id)?.closest(".form-group");
      const value = document.getElementById(id)?.value.trim();
      if (!value) {
        group?.classList.add("invalid");
        valid = false;
      } else {
        group?.classList.remove("invalid");
      }
    });

    const payment = document.querySelector('input[name="paymentMethod"]:checked');
    if (!payment) {
      UI.toast("Please select a payment method", "error");
      valid = false;
    }
    return valid;
  },

  placeOrder() {
    const user = Auth.getCurrentUser();
    const items = Cart.getDetailedItems();
    const totals = Cart.getTotals();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    const order = {
      id: `CN${Date.now().toString().slice(-8)}`,
      userId: user.id,
      createdAt: new Date().toISOString(),
      status: "PLACED",
      paymentStatus: paymentMethod === "COD" ? "PENDING" : "PAID",
      paymentMethod,
      totalAmount: totals.total,
      discount: totals.discount + totals.couponDiscount,
      coupon: totals.coupon || null,
      gstIncluded: totals.gst,
      deliveryFee: totals.deliveryFee,
      address: {
        fullName: document.getElementById("fullName").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        street: document.getElementById("street").value.trim(),
        city: document.getElementById("city").value.trim(),
        state: document.getElementById("state").value.trim(),
        postalCode: document.getElementById("postalCode").value.trim(),
        country: document.getElementById("country").value.trim()
      },
      items: items.map((i) => ({
        productId: i.productId,
        name: i.product.name,
        image: i.product.image,
        quantity: i.quantity,
        price: i.unitPrice
      }))
    };

    // Persist address on profile
    Auth.updateProfile({
      phone: order.address.phone,
      address: {
        street: order.address.street,
        city: order.address.city,
        state: order.address.state,
        postalCode: order.address.postalCode,
        country: order.address.country
      }
    });

    const key = `cartnova_orders_${user.id}`;
    const orders = JSON.parse(localStorage.getItem(key) || "[]");
    orders.unshift(order);
    localStorage.setItem(key, JSON.stringify(orders));
    return order;
  }
};

const CartPage = {
  async init() {
    this.render();
  },

  render() {
    const root = document.getElementById("cartRoot");
    if (!root) return;

    const items = Cart.getDetailedItems();
    const totals = Cart.getTotals();

    if (!items.length) {
      root.innerHTML = UI.emptyState({ icon: "bag", title: "Your cart is empty", description: "Start shopping to add products to your cart.", action: "Shop Now" }) + '<div id="savedForLaterItems"></div>';
      if (typeof Features !== "undefined") Features.renderSavedItems();
      return;
    }

    root.innerHTML = `
      <div class="layout-2col">
        <div class="panel">
          <h2>Shopping Cart (${totals.itemCount})</h2>
          <div id="cartItems">
            ${items
              .map(
                (item) => `
              <div class="cart-item" data-id="${item.productId}">
                <img src="${UI.escapeHTML(item.product.image)}" alt="${UI.escapeHTML(item.product.name)}" width="96" height="120" loading="lazy" decoding="async" />
                <div class="cart-item-info">
                  <h3><a href="product-details.html?id=${item.productId}">${UI.escapeHTML(item.product.name)}</a></h3>
                  <p>${formatINR(item.unitPrice)} each</p>
                  ${item.variants && Object.values(item.variants).some(Boolean) ? `<p class="cart-variants">${Object.entries(item.variants).filter(([,value])=>value).map(([key,value])=>`${UI.escapeHTML(key)}: ${UI.escapeHTML(value)}`).join(" · ")}</p>` : ""}
                  <div class="qty-control">
                    <button type="button" aria-label="Decrease quantity" data-dec="${item.productId}" data-cart-variant='${UI.escapeHTML(JSON.stringify(item.variants||{}))}'>−</button>
                    <span>${item.quantity}</span>
                    <button type="button" aria-label="Increase quantity" data-inc="${item.productId}" data-cart-variant='${UI.escapeHTML(JSON.stringify(item.variants||{}))}'>+</button>
                  </div>
                </div>
                <div class="cart-item-side">
                  <strong>${formatINR(item.lineTotal)}</strong>
                  <button type="button" class="btn btn-ghost btn-sm" data-save-for-later="${item.productId}" data-cart-variant='${UI.escapeHTML(JSON.stringify(item.variants||{}))}'>Save for later</button>
                  <button type="button" class="btn btn-ghost btn-sm" data-remove="${item.productId}" data-cart-variant='${UI.escapeHTML(JSON.stringify(item.variants||{}))}'>Remove</button>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
        <aside class="panel">
          <h3>Order Summary</h3>
          <div class="summary-row"><span>Subtotal</span><span>${formatINR(totals.subtotal)}</span></div>
          <div class="summary-row"><span>Discount</span><span>- ${formatINR(totals.discount)}</span></div>
          ${totals.coupon ? `<div class="summary-row"><span>Coupon (${totals.coupon})</span><span>- ${formatINR(totals.couponDiscount)}</span></div>` : ""}
          <div class="summary-row"><span>GST (included)</span><span>${formatINR(totals.gst)}</span></div>
          <div class="summary-row"><span>Delivery</span><span>${totals.deliveryFee === 0 ? "FREE" : formatINR(totals.deliveryFee)}</span></div>
          <div class="delivery-progress">${totals.deliveryFee === 0 ? "Free Delivery" : `Add ${formatINR(999 - Math.max(0, totals.subtotal - totals.discount - totals.couponDiscount))} more for FREE delivery`}</div>
          <form id="couponForm" class="coupon-form"><label for="couponCode">Coupon code</label><div><input id="couponCode" name="coupon" value="${totals.coupon}" placeholder="Try CARTNOVA10"><button class="btn btn-outline btn-sm" type="submit">${totals.coupon ? "Apply again" : "Apply"}</button></div>${totals.coupon ? `<button class="coupon-remove" type="button" id="removeCoupon">Remove coupon</button>` : ""}</form>
          <div class="summary-row total"><span>Total</span><span>${formatINR(totals.total)}</span></div>
          <a class="btn btn-primary btn-block" href="checkout.html" style="margin-top:1rem">Proceed to Checkout</a>
          <a class="btn btn-outline btn-block" href="products.html" style="margin-top:0.6rem">Continue Shopping</a>
        </aside>
                </div><div id="savedForLaterItems"></div>`;
    if (typeof Features !== "undefined") Features.renderSavedItems();
    root.querySelector("#couponForm")?.addEventListener("submit", event => {
      event.preventDefault();
      const code = root.querySelector("#couponCode")?.value;
      if (!Cart.applyCoupon(code)) { UI.toast("Invalid coupon code", "error"); return; }
      UI.toast("Coupon applied", "success"); this.render();
    });
    root.querySelector("#removeCoupon")?.addEventListener("click", () => { Cart.clearCoupon(); UI.toast("Coupon removed", "info"); this.render(); });

    root.querySelectorAll("[data-inc]").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.inc;
        const variants = JSON.parse(btn.dataset.cartVariant || "{}");
        const item = Cart.getItems().find((i) => i.productId === Number(id) && JSON.stringify(i.variants||{})===JSON.stringify(variants));
        try {
          Cart.updateQuantity(id, (item?.quantity || 1) + 1, variants);
          this.render();
        } catch (err) {
          UI.toast(err.message, "error");
        }
      };
    });

    root.querySelectorAll("[data-dec]").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.dec;
        const variants = JSON.parse(btn.dataset.cartVariant || "{}");
        const item = Cart.getItems().find((i) => i.productId === Number(id) && JSON.stringify(i.variants||{})===JSON.stringify(variants));
        Cart.updateQuantity(id, (item?.quantity || 1) - 1, variants);
        this.render();
      };
    });

      root.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.onclick = async () => {
        const ok = await UI.confirm({
          title: "Remove item?",
          message: "This product will be removed from your cart.",
          confirmText: "Remove",
          danger: true
        });
        if (!ok) return;
        const variants = JSON.parse(btn.dataset.cartVariant || "{}");
        Cart.removeItem(btn.dataset.remove, variants);
        UI.toast("Product removed from cart", "success");
        this.render();
      };
    });
    UI.bindImageFallbacks(root);
  }
};
