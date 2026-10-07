/**
 * Checkout flow (Phase 1 mock order creation).
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
      discount: totals.discount,
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
      root.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet. Explore products and start shopping.</p>
          <a class="btn btn-primary" href="products.html">Shop Now</a>
        </div>`;
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
                <img src="${item.product.image}" alt="${item.product.name}" />
                <div class="cart-item-info">
                  <h3><a href="product-details.html?id=${item.productId}">${item.product.name}</a></h3>
                  <p>${formatINR(item.unitPrice)} each</p>
                  <div class="qty-control">
                    <button data-dec="${item.productId}">−</button>
                    <span>${item.quantity}</span>
                    <button data-inc="${item.productId}">+</button>
                  </div>
                </div>
                <div class="cart-item-side">
                  <strong>${formatINR(item.lineTotal)}</strong>
                  <button class="btn btn-ghost btn-sm" data-remove="${item.productId}">Remove</button>
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
          <div class="summary-row"><span>Delivery</span><span>${totals.deliveryFee === 0 ? "FREE" : formatINR(totals.deliveryFee)}</span></div>
          <div class="summary-row total"><span>Total</span><span>${formatINR(totals.total)}</span></div>
          <a class="btn btn-primary btn-block" href="checkout.html" style="margin-top:1rem">Proceed to Checkout</a>
          <a class="btn btn-outline btn-block" href="products.html" style="margin-top:0.6rem">Continue Shopping</a>
        </aside>
      </div>`;

    root.querySelectorAll("[data-inc]").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.inc;
        const item = Cart.getItems().find((i) => i.productId === Number(id));
        try {
          Cart.updateQuantity(id, (item?.quantity || 1) + 1);
          this.render();
        } catch (err) {
          UI.toast(err.message, "error");
        }
      };
    });

    root.querySelectorAll("[data-dec]").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.dec;
        const item = Cart.getItems().find((i) => i.productId === Number(id));
        Cart.updateQuantity(id, (item?.quantity || 1) - 1);
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
        Cart.removeItem(btn.dataset.remove);
        UI.toast("Product removed from cart", "success");
        this.render();
      };
    });
  }
};
